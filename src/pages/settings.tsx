import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoaderCircle, LockKeyhole } from "lucide-react";
import { ResetPasswordForm } from "@/components/password/reset-password-form";
import { useResetPassword } from "@/hooks/use-reset-password";

export function Settings() {
	const { isLoadingResetPassword } = useResetPassword();

	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<LockKeyhole className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Atualizar Senha</h2>
				</div>
			</CardHeader>

			<CardContent>
				<ResetPasswordForm />
			</CardContent>

			<CardFooter className="flex gap-4  p-4 justify-end border-t bg-muted">
				<Button
					form="reset-password-form"
					type="submit"
					className="w-[200px]"
					disabled={isLoadingResetPassword}
				>
					{isLoadingResetPassword && <LoaderCircle className="animate-spin" />}
					Redifinir Senha
				</Button>
			</CardFooter>
		</Card>
	);
}
