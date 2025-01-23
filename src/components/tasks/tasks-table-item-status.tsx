import { Badge } from "../ui/badge";

interface TasksTableItemStatusProps {
	children: string;
}

export function TasksTableItemStatus({ children }: TasksTableItemStatusProps) {
	return (
		<Badge
			variant="secondary"
			className="px-3 font-medium rounded-full border border-slate-300"
		>
			{children === "todo" && "Pendente"}

			{children === "in_progress" && "Em Progesso"}

			{children === "done" && "Concluído"}
		</Badge>
	);
}
