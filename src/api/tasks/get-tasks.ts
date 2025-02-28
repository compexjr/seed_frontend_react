import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { Task } from "@/@types/task";
import { AxiosError } from "axios";

interface GetTasksSuccessResponse extends HTTPSuccessResponse {
	data: Task[];
}

interface GetTasksErrorResponse extends HTTPErrorResponse {
	data: null;
}

type GetTasksResponse = GetTasksSuccessResponse | GetTasksErrorResponse;

export async function getTasks(): Promise<GetTasksResponse> {
	try {
		// delay the response for 1 second
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const response = await api.get<GetTasksSuccessResponse>("/tasks");

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}

		return {
			success: false,
			error: "Erro desconhecido",
			data: null,
		};
	}
}
