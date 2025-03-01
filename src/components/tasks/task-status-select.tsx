import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useEditTask } from "@/hooks/use-edit-task";
import { toast } from "sonner";

type Status = {
	value: string;
	label: string;
};

const statuses: Status[] = [
	{
		value: "todo",
		label: "A fazer",
	},
	{
		value: "in_progress",
		label: "Em progresso",
	},
	{
		value: "done",
		label: "Concluída",
	},
];

interface TaskStatusSelectProps {
	taskId: string;
	status: string;
}

export function TaskStatusSelect({ status, taskId }: TaskStatusSelectProps) {
	const [open, setOpen] = React.useState(false);
	const [selectedStatus, setSelectedStatus] = React.useState<Status>({
		value: status,
		label: statuses.find((s) => s.value === status)?.label || "Status",
	});
	const { editTaskFn } = useEditTask();

	function handleEditTask(status: string) {
		if (status === selectedStatus.value) {
			toast.error("O status selecionado é o mesmo do atual.");
			return;
		}

		editTaskFn({
			status,
			taskId,
		});
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="max-w-max px-4 py-0.5 bg-muted/50 max-h-max justify-start rounded-full
					text-xs"
				>
					{selectedStatus.label}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="p-0" side="right" align="start">
				<Command>
					<CommandInput placeholder="Change status..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup>
							{statuses.map((status) => (
								<CommandItem
									key={status.value}
									value={status.value}
									onSelect={(value) => {
										setSelectedStatus(
											statuses.find((s) => s.value === value) || status
										);
										setOpen(false);
										handleEditTask(value);
									}}
								>
									{status.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
