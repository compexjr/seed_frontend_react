import { api } from "@/services/axios";

interface CreateTaskRequestBody {
	title: string;
	description: string;
}

export async function createTask({
	title,
	description,
}: CreateTaskRequestBody): Promise<void> {
	try {
		await api.post("/tasks", {
			title,
			description,
		});
	} catch (error) {
		throw error;
	}
}
