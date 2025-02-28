import {
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	Table,
} from "../ui/table";
import { TasksTableItem } from "./tasks-table-item";
import { TasksTableSkeleton } from "./tasks-table-item-skeleton";
import { TasksTableFilters } from "./tasks-table-filter";
import { EmptyState } from "../global/empty-state";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/api/tasks/get-tasks";

export function TasksTable() {
	const { data: response, isPending: isLoadingGetTasks } = useQuery({
		queryKey: ["get-tasks"],
		queryFn: getTasks,
	});

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-2">
				<TasksTableFilters />
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow className="bg-muted/50">
							<TableHead className="w-[100px]">Índice</TableHead>

							<TableHead className="xl:w-[200px]">Título</TableHead>

							<TableHead className="min-w-[200px] xl:w-[200px]">
								Descrição
							</TableHead>

							<TableHead className="xl:w-[230px]">Data de Criação</TableHead>

							<TableHead className="min-w-[230px] xl:w-[230px]">
								Data de Conclusão
							</TableHead>

							<TableHead className="min-w-[150px] xl:w-[150px]">
								Status
							</TableHead>

							<TableHead className="max-w-[100px] w-[100px]">Editar</TableHead>

							<TableHead className="max-w-[100px] w-[100px]">Excluir</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{!isLoadingGetTasks &&
							response?.success &&
							response.data.length > 0 &&
							response.data.map((task, index) => {
								return (
									<TasksTableItem key={task.id} index={index} task={task} />
								);
							})}

						{isLoadingGetTasks && <TasksTableSkeleton />}
					</TableBody>
				</Table>
			</div>

			{((response?.success &&
				response.data.length === 0 &&
				!isLoadingGetTasks) ||
				(!response && !isLoadingGetTasks)) && <EmptyState />}
		</div>
	);
}
