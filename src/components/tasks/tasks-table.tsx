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
import { useEffect, useState } from "react";
import { mockTasks } from "@/mocks/tasks";
import { Task } from "@/@types/task";

export function TasksTable() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [isLoadingTasks, setIsLoadingTasks] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setTasks(mockTasks);
			setIsLoadingTasks(false);
		}, 1000);
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
							
							<TableHead className="min-w-[200px] xl:w-[200px]">
								Título
							</TableHead>

							<TableHead className="min-w-[200px] xl:w-[200px]">
								Descrição
							</TableHead>

							<TableHead className="min-w-[230px] xl:w-[230px]">
								Data de Criação
							</TableHead>

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
						{!isLoadingTasks &&
							tasks &&
							tasks.map((task, index) => {
								return (
									<TasksTableItem key={task.id} index={index} task={task} />
								);
							})}

						{isLoadingTasks && <TasksTableSkeleton />}
					</TableBody>
				</Table>
			</div>

			{((tasks && tasks.length === 0 && !isLoadingTasks) ||
				(!tasks && !isLoadingTasks)) && <EmptyState />}
		</div>
	);
}
