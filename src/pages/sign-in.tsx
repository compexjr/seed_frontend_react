import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { SignInForm } from "@/components/sign-in/sign-in-form";

export function SignIn() {
	return (
		<div className="flex flex-col gap-8 w-full max-w-[400px] rounded-lg">
			<SignInForm />

			<Link to="/cadastro">
				<Button variant="link" className="w-full">
					Não possui uma conta? Cadastre-se
				</Button>
			</Link>
		</div>
	);
}
