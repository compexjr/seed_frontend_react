import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { useAuthStore } from "@/stores/auth";
import { toast } from "sonner";
import { z } from "zod";

const signInFormSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z.string().min(1, "Digite uma senha válida."),
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

			toast.error(response.error);
		},
	});

	return {
		form,
		isLoadingSignIn,
	};
}
