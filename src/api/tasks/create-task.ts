import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface CreateTaskRequest {
	title: string;
	description: string;
}

interface CreateTaskSuccessResponse extends HTTPSuccessResponse {
	data: null;
}

interface CreateTaskErrorResponse extends HTTPErrorResponse {
	data: null;
}

type CreateTaskResponse = CreateTaskSuccessResponse | CreateTaskErrorResponse;

export async function createTask(
	task: CreateTaskRequest
): Promise<CreateTaskResponse> {
	try {
		const response = await api.post<CreateTaskSuccessResponse>("/tasks", task);
		
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
