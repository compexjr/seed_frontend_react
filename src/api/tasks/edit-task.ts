import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface EditTaskRequest {
	title: string;
	description: string;
}

interface EditTaskSuccessResponse extends HTTPSuccessResponse {
	data: null;
}

interface EditTaskErrorResponse extends HTTPErrorResponse {
	data: null;
}

type EditTaskResponse = EditTaskSuccessResponse | EditTaskErrorResponse;

export async function editTask(
	id: string,
	task: EditTaskRequest
): Promise<EditTaskResponse> {
	try {
		const response = await api.put<EditTaskSuccessResponse>(
			`/tasks/${id}`,
			task
		);
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
