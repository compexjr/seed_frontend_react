import { useNavigate, useSearchParams } from "react-router";
import { LoaderCircle } from "lucide-react";
import { useAuthStore } from "@/stores/auth";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "../components/ui/input";
import { signIn } from "@/api/auth/sign-in";
import { useFormMutation } from "@/hooks/use-form-mutation";
import { z } from "zod";

const signInFormSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z.string().min(1, "A senha é obrigatória."),
});

export function SignIn() {
	const navigate = useNavigate();
	const { authenticate } = useAuthStore();
	const [searchParams] = useSearchParams();
	const {
		mutation: { isPending: isSignInLoading },
		register,
		handleSubmitForm,
		setValue,
	} = useFormMutation({
		schema: signInFormSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		mutationFn: signIn,
		mutationOptions: {
			onSuccess: (response) => {
				if (response.success) {
					authenticate(response.data.token);
				}
			},
			onError: (error) => {
				console.log(error);
			},
		},
	});

	useEffect(() => {
		const emailFromQuery = searchParams.get("email");
		if (emailFromQuery) {
			setValue("email", emailFromQuery);
		}
	}, [searchParams]);

	return (
		<div className="flex flex-col gap-8 text-center w-full max-w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Conecte-se</h2>
				<span className="text-sm text-muted-foreground">
					Digite seu email e senha abaixo para entrar
				</span>
			</div>

			<form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
				<div className="flex flex-col gap-2 text-left">
					<Label htmlFor="email">Email</Label>

					<Input
						type="email"
						id="email"
						placeholder="Digite seu email"
						required
						{...register("email")}
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label htmlFor="password">Senha</Label>

					<Input
						type="password"
						id="password"
						required
						placeholder="Digite sua senha"
						{...register("password")}
					/>
				</div>

				<Button
					type="submit"
					className="mt-2 w-full bg-zinc-950 hover:bg-zinc-900 text-white"
				>
					{isSignInLoading && <LoaderCircle className="animate-spin" />}

					{!isSignInLoading && "Entrar"}
				</Button>

				<a href="/criar-conta" className="text-sm font-medium hover:underline">
					Não possui uma conta? Cadastre-se
				</a>
			</form>
		</div>
	);
}
