import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface GetProfileSuccessResponse extends HTTPSuccessResponse {
	data: {
		user_id: string;
		email: string;
		name: string;
		image: string;
	};
}

type GetProfileResponse = GetProfileSuccessResponse | HTTPErrorResponse;

export async function getProfile(): Promise<GetProfileResponse> {
	try {
		const response = await api.get<GetProfileSuccessResponse>("/auth/profile");

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
