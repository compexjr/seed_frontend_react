import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

export function Profile() {
	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<User className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Sobre você</h2>
				</div>
			</CardHeader>

			<CardContent>
				<div className="flex items-center gap-4">
					<img
						src="https://www.github.com/izaiasmorais.png"
						alt="User Avatar"
						className="w-28 h-2w-28 rounded-full"
					/>

					<div>
						<p className="text-sm">
							Selecione uma foto de perfil para sua conta.
						</p>

						<Input
							type="file"
							className="mt-2 pt-[6px] cursor-pointer"
							placeholder="Escolher arquivo"
						/>
					</div>
				</div>

				<div className="mt-6 grid grid-cols-2 gap-4 max-w-[600px]">
					<div className="space-y-1">
						<Label htmlFor="first-name">Nome</Label>
						<Input id="first-name" defaultValue="Izaías" />
					</div>

					<div className="space-y-1">
						<Label htmlFor="email">Email</Label>
						<Input
							name="email"
							id="email"
							defaultValue="izaiaslima356@gmail.com"
						/>
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex p-4 justify-end border-t bg-slate-50">
				<Button>Confirmar</Button>
			</CardFooter>
		</Card>
	);
}
