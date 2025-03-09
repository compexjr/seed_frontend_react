import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { Task } from "@/@types/task";
import { AxiosError } from "axios";

interface GetTasksSuccessResponse extends HTTPSuccessResponse {
	data: Task[];
}

type GetTasksResponse = GetTasksSuccessResponse | HTTPErrorResponse;

export async function getTasks(): Promise<GetTasksResponse> {
	try {
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
