import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoaderCircle, LockKeyhole } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { updatePassword } from "@/api/auth/update-password";
import type { AxiosError, AxiosResponse } from "axios";

const updatePasswordFormSchema = z.object({
	password: z.string().min(1, "A senha é obrigatória."),
	newPassword: z.string().min(1, "A nova senha é obrigatória."),
});

export type UpdatePasswordFormData = z.infer<typeof updatePasswordFormSchema>;

export function Settings() {
	const { handleSubmit, register } = useForm<UpdatePasswordFormData>({
		defaultValues: {
			password: "",
			newPassword: "",
		},
		resolver: zodResolver(updatePasswordFormSchema),
	});

	const { mutate: updatePasswordFn, isPending } = useMutation({
		mutationFn: updatePassword,
		mutationKey: ["update-password"],
		onError: (error: { response: { data: { detail: string } } }) => {
			if (error.response.data.detail === "Invalid password") {
				toast.error("A senha atual está incorreta.");
			}
		},
		onSuccess: () => {
			toast.success("Senha atualizada com sucesso.");
		},
	});

	const onFormError: SubmitErrorHandler<UpdatePasswordFormData> = (errors) => {
		if (errors.password) {
			toast.error(errors.password.message);
			return;
		}

		if (errors.newPassword) {
			toast.error(errors.newPassword.message);
			return;
		}
	};

	function handleUpdatePassword(data: UpdatePasswordFormData) {
		updatePasswordFn({
			password: data.password,
			new_password: data.newPassword,
		});
	}

	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<LockKeyhole className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Altualizar Senha</h2>
				</div>
			</CardHeader>

			<CardContent>
				<form
					onSubmit={handleSubmit(handleUpdatePassword, onFormError)}
					id="update-password-form"
					className="space-y-4 max-w-[400px]"
				>
					<div className="space-y-1">
						<Label htmlFor="password">Senha atual</Label>

						<Input id="password" type="password" {...register("password")} />
					</div>

					<div className="space-y-1">
						<Label htmlFor="new-password">Nova senha</Label>

						<Input
							id="new-password"
							type="password"
							{...register("newPassword")}
						/>
					</div>
				</form>
			</CardContent>

			<CardFooter className="flex p-4 justify-end border-t bg-muted">
				<Button type="submit" form="update-password-form" className="w-[150px]">
					{isPending && <LoaderCircle className="animate-spin" />}

					{!isPending && "Confirmar"}
				</Button>
			</CardFooter>
		</Card>
	);
}
