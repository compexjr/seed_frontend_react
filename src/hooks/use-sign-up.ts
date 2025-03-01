import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { signUp } from "@/api/auth/sign-up";

const signUpFormSchema = z.object({
	name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
	email: z.string().email("Digite um email válido."),
	password: z.string(),
	// .min(6, "A senha deve ter no mínimo 8 caracteres.")
	// .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
	// .regex(/\d/, "A senha deve conter pelo menos um número.")
	// .regex(
	// 	/[^A-Za-z0-9]/,
	// 	"A senha deve conter pelo menos um caractere especial."
	// ),
});

export function useSignUp() {
	const navigate = useNavigate();

	const form = useFormMutation({
		schema: signUpFormSchema,
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signUpFn({
				...data,
			});
		},
	});

	const { mutate: signUpFn, isPending: isLoadingSignUp } = useMutation({
		mutationFn: signUp,
		onSuccess: (response) => {
			if (response.success) {
				navigate(`/entrar?email=${form.watch("email")}`);
				return;
			}

			toast.error(response.error);
		},
	});

	return {
		form,
		isLoadingSignUp,
	};
}
