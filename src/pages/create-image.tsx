import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SquareCheck } from "lucide-react";

export function CreateImage() {
	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<SquareCheck className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Adicionar tarefa</h2>
				</div>
			</CardHeader>

			<CardContent>
				<div className="flex flex-col gap-4 max-w-[600px]">
					<div className="space-y-1">
						<Label htmlFor="title">Título</Label>
						<Input
							type="text"
							name="title"
							id="title"
							placeholder="Digite o nome da tarefa"
						/>
					</div>

					<div className="space-y-1">
						<Label htmlFor="description">Descrição</Label>
						<Input
							type="text"
							name="description"
							id="description"
							placeholder="Descreva a tarefa"
						/>
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex p-4 justify-end border-t bg-muted">
				<Button>Salvar</Button>
			</CardFooter>
		</Card>
	);
}
