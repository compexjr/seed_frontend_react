import { Input } from "../components/ui/input";

export function SignUp() {
	return (
		<div className="flex flex-col gap-8 text-center w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Crie uma conta</h2>
				<span className="text-sm text-gray-400">
					Digite seu nome, email e senha para criar sua conta
				</span>
			</div>

			<div className="flex flex-col gap-2">
				<Input
					type="name"
					id="name"
					name="name"
					placeholder="Digite seu nome"
				/>

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
					Criar uma conta
				</button>

				<a href="/entrar" className="text-sm font-medium hover:underline">
					Já possui uma conta? Conecte-se
				</a>
			</div>
		</div>
	);
}
