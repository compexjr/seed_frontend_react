import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { TasksTableItemStatus } from "./tasks-table-item-status";
import { SquarePen, Trash2 } from "lucide-react";
import { DeleteTaskDialog } from "./delete-task-dialog";
import { Button } from "../ui/button";
import { Task } from "@/@types/task";
import { formatDate } from "@/utils/format-date";

export interface TasksTableItemProps {
	index: number;
	task: Task;
}

export function TasksTableItem({ task, index }: TasksTableItemProps) {
	return (
		<TableRow>
			<TableCell>{index}</TableCell>

			<TableCell className="font-medium">{task.title}</TableCell>

			<TableCell> {task.description}</TableCell>

			<TableCell>{formatDate(task.creation_date)}</TableCell>

			<TableCell>
				{task.conclusion_date ? formatDate(task.conclusion_date) : "Indefinido"}
			</TableCell>

			<TableCell className="text-muted-foreground">
				<TasksTableItemStatus>{task.status}</TasksTableItemStatus>
			</TableCell>

			<TableCell>
				<Button variant="outline" size="sm">
					<SquarePen className="h-4 w-4" />
				</Button>
			</TableCell>

			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="sm">
							<Trash2 className="h-4 w-4" />
						</Button>
					</DialogTrigger>

					<DeleteTaskDialog taskId={task.id} />
				</Dialog>
			</TableCell>
		</TableRow>
	);
}
