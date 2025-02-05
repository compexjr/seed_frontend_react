import { Label } from "@/components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams, Link } from "react-router";
import { useState, useEffect } from "react";

export function SignIn() {
	const [searchParams] = useSearchParams();
	const [email, setEmail] = useState("");

	useEffect(() => {
		const emailFromQuery = searchParams.get("email");
		if (emailFromQuery) {
			setEmail(emailFromQuery);
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

			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2 text-left">
					<Label>Email</Label>

					<Input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Digite seu email"
						className="ring-red-500!"
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label>Senha</Label>

					<Input
						type="password"
						id="password"
						name="password"
						placeholder="Digite sua senha"
					/>
				</div>

				<Link to="/" className="w-full">
					<Button className="mt-2 w-full bg-zinc-950 hover:bg-zinc-900 text-white">
						Entrar
					</Button>
				</Link>

				<a href="/criar-conta" className="text-sm font-medium hover:underline">
					Não possui uma conta? Cadastre-se
				</a>
			</div>
		</div>
	);
}
