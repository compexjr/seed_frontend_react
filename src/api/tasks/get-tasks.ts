import { api } from "@/services/axios";
import { Task } from "@/@types/task";
import { HTTPResponse } from "@/@types/http";

interface GetTasksResponseBody extends HTTPResponse {
	data: Task[];
}

export async function getTasks(): Promise<GetTasksResponseBody> {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const response = await api.get<GetTasksResponseBody>("/tasks");

		return response.data;
	} catch (error) {
		throw error;
	}
}
