import { Task } from "@/@types/task";
import { api } from "@/services/axios";

export async function getTasks() {
	try {
		const response = await api.get<Task[]>("/tasks", {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_SECRET}`,
			},
		});

		return response.data;
	} catch (error) {
		console.error("Erro ao buscar tarefas:", error);
		throw error;
	}
}
