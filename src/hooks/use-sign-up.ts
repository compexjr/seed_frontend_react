import { useFormMutation } from "./use-form-mutation";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { signUp } from "@/api/auth/sign-up";

const signUpFormSchema = z.object({
	name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
	email: z.string().email("Digite um email válido."),
	password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});

export function useSignUp() {
	const navigate = useNavigate();

	const form = useFormMutation({
		schema: signUpFormSchema,
		defaultValues: {
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

			if (response.error === "email already registered") {
				toast.error("Email já cadastrado.");
			}
		},
	});

	return {
		form,
		isLoadingSignUp,
	};
}
