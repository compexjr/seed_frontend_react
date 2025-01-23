import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LockKeyhole } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Settings() {
	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<LockKeyhole className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Altualizar Senha</h2>
				</div>
			</CardHeader>

			<CardContent>
				<div className="space-y-4 max-w-[400px]">
					<div className="space-y-1">
						<Label htmlFor="password">Senha atual</Label>

						<Input id="password" type="password" />
					</div>

					<div className="space-y-1">
						<Label htmlFor="new-password">Nova senha</Label>

						<Input id="new-password" type="password" />
					</div>

					<div className="space-y-1">
						<Label htmlFor="confirm-password">Confirmar nova senha</Label>

						<Input id="confirm-password" type="password" />
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex p-4 justify-end border-t bg-slate-50">
				<Button>Confirmar</Button>
			</CardFooter>
		</Card>
	);
}
