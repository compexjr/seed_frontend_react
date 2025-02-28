import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "@/api/tasks/delete-task";
import { queryClient } from "@/lib/react-query";
import { toast } from "sonner";

export function useDeleteTask() {
	const { mutateAsync: deleteTaskFn, isPending: isLoadingDeleteTask } =
		useMutation({
			mutationKey: ["delete-task"],
			mutationFn: deleteTask,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["get-tasks"],
					});
					toast.success("Prescrição excluída com sucesso!");
					return;
				}

				toast.success(response.error);
			},
		});

	return {
		deleteTaskFn,
		isLoadingDeleteTask,
	};
}
