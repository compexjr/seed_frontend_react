import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignIn } from "@/hooks/use-sign-in";
import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export function SignInForm() {
	const { form, isLoadingSignIn } = useSignIn();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const emailFromQuery = searchParams.get("email");
		if (emailFromQuery) {
			form.setValue("email", emailFromQuery);
		}
	}, [searchParams]);

	return (
		<Form {...form}>
			<div className="text-center flex flex-col mb-4">
				<h1 className="text-2xl font-bold">Conecte-se</h1>
				<span className="text-muted-foreground text-sm">
					Digite seu email e senha para entrar
				</span>
			</div>

			<form onSubmit={form.handleSubmitForm} className="space-y-4 w-[400px]">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="Digite seu email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Digite sua senha"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<span className="text-xs mt-1 block text-muted-foreground">
					A senha deve possuir no mínimo 8 caracteres. Deve conter pelo menos um
					número, uma letra maiúscula e um caractere especial.
				</span>

				<Button type="submit" className="w-full">
					{isLoadingSignIn && <LoaderCircle className="animate-spin" />}

					{!isLoadingSignIn && "Entrar"}
				</Button>
			</form>
		</Form>
	);
}
