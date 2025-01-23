import { SquarePen, Trash2 } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export function TasksTableSkeleton() {
	return Array.from({ length: 10 }).map((_, index) => {
		return (
			<TableRow key={index}>
				<TableCell>
					<Skeleton className="h-4 w-[50px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[170px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[170px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[150px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[150px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[100px]" />
				</TableCell>

				<TableCell>
					<Button variant="outline" size="sm" disabled>
						<SquarePen className="h-4 w-4" />
						<span className="sr-only">Editar Tarefa</span>
					</Button>
				</TableCell>

				<TableCell>
					<Button variant="outline" size="sm" disabled>
						<Trash2 className="h-4 w-4" />
						<span className="sr-only">Excluir Tarefa</span>
					</Button>
				</TableCell>
			</TableRow>
		);
	});
}
