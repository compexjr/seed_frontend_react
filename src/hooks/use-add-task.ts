import { useMutation } from "@tanstack/react-query";
import { useFormMutation } from "./use-form-mutation";
import { z } from "zod";
import { createTask } from "@/api/tasks/create-task";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { queryClient } from "@/lib/react-query";

const CreateTaskFormSchema = z.object({
	title: z.string().min(1, "O título é obrigatório"),
	description: z.string().min(1, "A descrição é obrigatória"),
});

export function useAddTask() {
	const navigate = useNavigate();
	const form = useFormMutation({
		schema: CreateTaskFormSchema,
		defaultValues: {
			title: "",
			description: "",
		},
		onSubmit: (data) => {
			createTaskFn(data);
		},
	});

	const { mutateAsync: createTaskFn, isPending: isLoadingAddTask } =
		useMutation({
			mutationKey: ["create-task"],
			mutationFn: createTask,
			onSuccess: (response) => {
				if (response.success) {
					queryClient.invalidateQueries({
						queryKey: ["get-tasks"],
					});
					toast.success("Tarefa criada com sucesso");
					form.reset();
					navigate("/");
					return;
				}

				toast.error(response.error);
			},
		});

	return {
		form,
		isLoadingAddTask,
	};
}
