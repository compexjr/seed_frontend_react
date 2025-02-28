import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface DeleteTaskSuccessResponse extends HTTPSuccessResponse {
	data: null;
}

interface DeleteTaskErrorResponse extends HTTPErrorResponse {
	data: null;
}

type DeleteTaskResponse = DeleteTaskSuccessResponse | DeleteTaskErrorResponse;

export async function deleteTask(id: string): Promise<DeleteTaskResponse> {
	try {
		const response = await api.delete<DeleteTaskSuccessResponse>(
			`/tasks/${id}`
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
