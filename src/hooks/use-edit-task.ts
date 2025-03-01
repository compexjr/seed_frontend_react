import { useMutation } from "@tanstack/react-query";
import { editTask } from "@/api/tasks/edit-task";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";

export function useEditTask() {
	const { mutateAsync: editTaskFn, isPending: isLoadingEditTask } = useMutation(
		{
			mutationKey: ["edit-task"],
			mutationFn: editTask,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["get-tasks"],
					});
					toast.success("Status da tarefa atualizado com sucesso!");
					return;
				}

				toast.error(response.error);
			},
		}
	);

	return {
		editTaskFn,
		isLoadingEditTask,
	};
}
