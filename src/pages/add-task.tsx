import { LoaderCircle, SquareCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddTask } from "@/hooks/use-add-task";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router";

export function AddTask() {
	const { form, isLoadingAddTask } = useAddTask();

	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<SquareCheck className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Adicionar tarefa</h2>
				</div>
			</CardHeader>

			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						id="add-taks-form"
						className="space-y-4 max-w-[600px]"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Título</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder="Digite o título da tarefa"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Descrição</FormLabel>
									<FormControl>
										<Input
											type="description"
											placeholder="Digite a descrição da tarefa"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardContent>

			<CardFooter className="flex p-4 gap-4 justify-end border-t bg-muted">
				<Button variant="outline" asChild>
					<Link to="/">Cancelar</Link>
				</Button>

				<Button
					form="add-taks-form"
					type="submit"
					className="w-[150px]"
					disabled={isLoadingAddTask}
				>
					{isLoadingAddTask && <LoaderCircle className="animate-spin" />}
					Salvar
				</Button>
			</CardFooter>
		</Card>
	);
}
