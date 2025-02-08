import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { LoaderCircle, SquareCheck } from "lucide-react";
import { useFormMutation } from "@/hooks/use-form-mutation";
import { createTask } from "@/api/tasks/create-task";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const CreateTaskFormSchema = z.object({
	title: z.string(),
	description: z.string(),
});

export function AddTask() {
	const {
		handleSubmitForm,
		reset,
		register,
		mutation: { isPending },
	} = useFormMutation({
		schema: CreateTaskFormSchema,
		defaultValues: {
			title: "",
			description: "",
		},
		mutationFn: createTask,
		mutationOptions: {
			onSuccess: () => {
				toast.success("Tarefa criada com sucesso");
				reset();
			},
		},
	});

	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<SquareCheck className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Adicionar tarefa</h2>
				</div>
			</CardHeader>

			<CardContent>
				<form
					onSubmit={handleSubmitForm}
					id="create-task"
					className="flex flex-col gap-4 max-w-[600px]"
				>
					<div className="space-y-1">
						<Label htmlFor="title">Título</Label>
						<Input
							type="text"
							id="title"
							placeholder="Digite o nome da tarefa"
							{...register("title")}
						/>
					</div>

					<div className="space-y-1">
						<Label htmlFor="description">Descrição</Label>
						<Input
							type="text"
							id="description"
							placeholder="Descreva a tarefa"
							{...register("description")}
						/>
					</div>
				</form>
			</CardContent>

			<CardFooter className="flex p-4 justify-end border-t bg-muted">
				<Button type="submit" form="create-task" className="w-[100px]">
					{isPending && <LoaderCircle className="animate-spin" />}

					{!isPending && "Salvar"}
				</Button>
			</CardFooter>
		</Card>
	);
}
