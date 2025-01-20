import { Input } from "../components/ui/input";

export function SignIn() {
	return (
		<div className="flex flex-col gap-8 text-center w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Conecte-se</h2>
				<span className="text-sm text-gray-400">
					Digite seu email e senha abaixo para entrar
				</span>
			</div>

			<div className="flex flex-col gap-2">
				<Input
					type="email"
					id="email"
					name="email"
					placeholder="Digite seu email"
				/>

				<Input
					type="password"
					id="password"
					name="password"
					placeholder="Digite sua senha"
				/>

				<button className="bg-black hover:opacity-90 h-10 w-full text-white rounded-lg text-sm font-medium">
					Entrar
				</button>

				<a href="/cadastro" className="text-sm font-medium hover:underline">
					Não possui uma conta? Cadastre-se
				</a>
			</div>
		</div>
	);
}
