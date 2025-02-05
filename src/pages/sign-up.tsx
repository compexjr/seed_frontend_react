import { useForm, SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { Label } from "@/components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { signUp } from "@/api/auth/sign-up";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import type { AxiosResponse } from "axios";

const signUpFormSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório."),
	email: z.string().email("Digite um email válido."),
	password: z.string().min(1, "A senha é obrigatória."),
});

export type SignUpFormData = z.infer<typeof signUpFormSchema>;

export function SignUp() {
	const navigate = useNavigate();

	const { handleSubmit, register, watch } = useForm<SignUpFormData>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		resolver: zodResolver(signUpFormSchema),
	});

	const { mutate: signUpFn, isPending } = useMutation({
		mutationFn: signUp,
		mutationKey: ["signUp"],
		onError: (error: AxiosResponse) => {
			// @ts-ignore
			if (error.response.data.detail === "User already registered") {
				toast.error("Este email já está em uso.");
			}
		},

		onSuccess: () => {
			toast.success("Conta criada com sucesso!", {
				action: {
					label: "Entrar",
					onClick: () => navigate(`/entrar?email=${watch("email")}`),
				},
			});
		},
	});

	const onFormError: SubmitErrorHandler<SignUpFormData> = (errors) => {
		if (errors.name) {
			toast.error(errors.name.message);
			return;
		}

		if (errors.email) {
			toast.error(errors.email.message);
			return;
		}

		if (errors.password) {
			toast.error(errors.password.message);
			return;
		}
	};

	function handleSignUp(data: SignUpFormData) {
		signUpFn(data);
	}

	return (
		<div className="flex flex-col gap-8 text-center w-full max-w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Crie uma conta</h2>
				<span className="text-sm text-gray-400">
					Digite seu nome, email e senha para criar sua conta
				</span>
			</div>

			<form
				onSubmit={handleSubmit(handleSignUp, onFormError)}
				className="flex flex-col gap-4"
			>
				<div className="flex flex-col gap-2 text-left">
					<Label htmlFor="name">Nome</Label>

					<Input
						type="text"
						id="name"
						placeholder="Digite seu nome"
						{...register("name")}
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label htmlFor="email">Email</Label>

					<Input
						type="email"
						id="email"
						placeholder="Digite seu email"
						{...register("email")}
					/>
				</div>

				<div className="flex flex-col gap-2 text-left">
					<Label htmlFor="password">Senha</Label>

					<Input
						type="password"
						id="password"
						placeholder="Digite sua senha"
						{...register("password")}
					/>
				</div>

				<Button
					type="submit"
					className="mt-2 bg-zinc-950 hover:bg-zinc-900 text-white"
				>
					{isPending && <LoaderCircle className="animate-spin" />}

					{!isPending && "Confirmar"}
				</Button>
			</form>

			<a href="/entrar" className="text-sm font-medium hover:underline">
				Já possui uma conta? Conecte-se
			</a>
		</div>
	);
}
