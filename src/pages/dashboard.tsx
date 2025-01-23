import { TasksTable } from "@/components/tasks/tasks-table";

export function Dashboard() {
	return (
		<main className="flex flex-col gap-4">
			<TasksTable />
		</main>
	);
}
