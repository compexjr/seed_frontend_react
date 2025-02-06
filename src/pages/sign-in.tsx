import { Label } from "@/components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { toast } from "sonner";
import { AxiosResponse } from "axios";
import { LoaderCircle } from "lucide-react";
import { useAuthStore } from "@/stores/auth";
import { z } from "zod";

const signInFormSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z.string().min(1, "A senha é obrigatória."),
});

export type SignInFormData = z.infer<typeof signInFormSchema>;

export function SignIn() {
	const { authenticate } = useAuthStore();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const { handleSubmit, register, setValue } = useForm<SignInFormData>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(signInFormSchema),
	});

	useEffect(() => {
		const emailFromQuery = searchParams.get("email");
		if (emailFromQuery) {
			setValue("email", emailFromQuery);
		}
	}, [searchParams]);

	const { mutate: signInFn, isPending } = useMutation({
		mutationFn: signIn,
		mutationKey: ["signIn"],
		onError: (error: AxiosResponse) => {
			// @ts-ignore
			if (error.response.data.detail === "User already registered") {
				toast.error("Este email já está em uso.");
			}
		},

		onSuccess: (response) => {
			if (response?.token) {
				authenticate(response.token);
				navigate("/");
			}
		},
	});

	const onFormError: SubmitErrorHandler<SignInFormData> = (errors) => {
		if (errors.email) {
			toast.error(errors.email.message);
			return;
		}

		if (errors.password) {
			toast.error(errors.password.message);
			return;
		}
	};

	function handleSignIn(data: SignInFormData) {
		signInFn(data);
	}

	return (
		<div className="flex flex-col gap-8 text-center w-full max-w-[350px] rounded-lg">
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Conecte-se</h2>
				<span className="text-sm text-muted-foreground">
					Digite seu email e senha abaixo para entrar
				</span>
			</div>

			<form
				onSubmit={handleSubmit(handleSignIn, onFormError)}
				className="flex flex-col gap-4"
			>
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
					{isPending && <LoaderCircle className="animate-spin" />}

					{!isPending && "Entrar"}
				</Button>

				<a href="/criar-conta" className="text-sm font-medium hover:underline">
					Não possui uma conta? Cadastre-se
				</a>
			</form>
		</div>
	);
}
