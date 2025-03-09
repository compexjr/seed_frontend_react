import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface EditTaskRequest {
	taskId: string;
	status: string;
}

interface EditTaskSuccessResponse extends HTTPSuccessResponse {
	data: null;
}

type EditTaskResponse = EditTaskSuccessResponse | HTTPErrorResponse;

export async function editTask({
	taskId,
	status,
}: EditTaskRequest): Promise<EditTaskResponse> {
	try {
		const response = await api.patch<EditTaskSuccessResponse>(
			`/tasks/${taskId}/${status}`
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
