import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { useAuthStore } from "@/stores/auth";
import { toast } from "sonner";
import { z } from "zod";

const signInFormSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z
		.string()
		.min(6, "A senha deve ter no mínimo 8 caracteres.")
		.regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
		.regex(/\d/, "A senha deve conter pelo menos um número.")
		.regex(
			/[^A-Za-z0-9]/,
			"A senha deve conter pelo menos um caractere especial."
		),
});

export function useSignIn() {
	const { authenticate } = useAuthStore();

	const form = useFormMutation({
		schema: signInFormSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signInFn({
				...data,
			});
		},
	});

	const { mutate: signInFn, isPending: isLoadingSignIn } = useMutation({
		mutationFn: signIn,
		onSuccess: (response) => {
			if (response.success) {
				authenticate(response.data.token);
				return;
			}

			if (response.error.toLocaleLowerCase() === "invalid credentials") {
				toast.error("Email ou senha inválidos.");
			}
		},
	});

	return {
		form,
		isLoadingSignIn,
	};
}
