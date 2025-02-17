import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { SignUpForm } from "@/components/sign-up/sign-up-form";

export function SignUp() {
	return (
		<div className="flex flex-col gap-8 w-full max-w-[400px] rounded-lg">
			<SignUpForm />

			<Link to="/entrar">
				<Button variant="link" className="w-full">
					Já possui uma conta? Conecte-se
				</Button>
			</Link>
		</div>
	);
}
