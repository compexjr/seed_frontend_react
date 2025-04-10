import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import { DeleteTaskDialog } from "./delete-task-dialog";
import { Button } from "../ui/button";
import { Task } from "@/@types/task";
import { formatDate } from "@/utils/format-date";
import { TaskStatusSelect } from "./task-status-select";

export interface TasksTableItemProps {
	index: number;
	task: Task;
}

export function TasksTableItem({ task, index }: TasksTableItemProps) {
	return (
		<TableRow>
			<TableCell>{index}</TableCell>

			<TableCell className="font-medium">{task.title}</TableCell>

			<TableCell className="text-muted-foreground">
				{task.description}
			</TableCell>

			<TableCell>{formatDate(task.creation_date)}</TableCell>

			<TableCell>
				{task.conclusion_date ? formatDate(task.conclusion_date) : "Indefinido"}
			</TableCell>

			<TableCell className="text-muted-foreground">
				<TaskStatusSelect taskId={task.id} status={task.status} />
			</TableCell>

			<TableCell>
				<Button variant="outline" size="sm" disabled>
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
