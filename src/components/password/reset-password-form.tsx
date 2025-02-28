import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useResetPassword } from "@/hooks/use-reset-password";

export function ResetPasswordForm() {
	const { form } = useResetPassword();

	return (
		<Form {...form}>
			<form
				id="reset-password-form"
				onSubmit={form.handleSubmitForm}
				className="space-y-4 w-[400px]"
			>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha Atual</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Digite sua senha atual"
									{...field}
								/>
							</FormControl>
							
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="newPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nova Senha</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Digite sua nova senha"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
