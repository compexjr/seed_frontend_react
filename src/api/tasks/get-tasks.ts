import { api } from "@/services/axios";
import { Task } from "@/@types/task";

export async function getTasks(): Promise<Task[]> {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const response = await api.get<Task[]>("/tasks");

		return response.data;
	} catch (error) {
		throw error;
	}
}
