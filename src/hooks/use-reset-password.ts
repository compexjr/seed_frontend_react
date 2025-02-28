import { useMutation } from "@tanstack/react-query";
import { useFormMutation } from "./use-form-mutation";
import { resetPassword } from "@/api/auth/reset-password";
import { z } from "zod";
import { passwordSchema } from "@/schemas/password";
import { toast } from "sonner";

const resetPasswordFormSchema = z.object({
	password: passwordSchema,
	newPassword: passwordSchema,
});

export function useResetPassword() {
	const form = useFormMutation({
		schema: resetPasswordFormSchema,
		defaultValues: {
			password: "",
			newPassword: "",
		},
		onSubmit: (data) => {
			if (data.password === data.newPassword) {
				toast.error("A nova senha não pode ser igual a senha atual.");
				return;
			}

			resetPasswordFn({
				password: data.password,
				new_password: data.newPassword,
			});
		},
	});

	const { mutate: resetPasswordFn, isPending: isLoadingResetPassword } =
		useMutation({
			mutationFn: resetPassword,
			mutationKey: ["update-password"],
			onSuccess: (response) => {
				if (response.success) {
					toast.success("Senha alterada com sucesso");
					form.reset();
					return;
				}

				toast.error(response.error);
			},
		});

	return {
		form,
		isLoadingResetPassword,
	};
}
