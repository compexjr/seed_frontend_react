import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { DialogContent } from "../ui/dialog";
import { LoaderCircle, TriangleAlert } from "lucide-react";
import { toast } from "sonner";

interface DeleteTaskDialogProps {
	taskId: string;
}

export function DeleteTaskDialog({ taskId }: DeleteTaskDialogProps) {
	return (
		<DialogContent className="w-[400px]">
			<div className="flex flex-col gap-2 w-full items-center text-center">
				<div className="p-3 rounded-full bg-red-50 dark:bg-red-900 max-w-max flex ">
					<TriangleAlert className="w-8 h-8 text-red-500 dark:text-red-300" />
				</div>

				<h2 className="text-xl font-bold">Você tem certeza?</h2>

				<span className="text-muted-foreground text-sm">
					Tem certeza que quer excluir essa tarefa? Essa ação não pode ser
					desfeita.
				</span>

				<Button
					onClick={() => {}}
					variant="destructive"
					className="w-full mt-4"
				>
					{/* {isLoading && <LoaderCircle className="animate-spin" />} */}
					Excluir tarefa
				</Button>
			</div>
		</DialogContent>
	);
}
