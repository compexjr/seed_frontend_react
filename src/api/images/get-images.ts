import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import type { Image } from "@/@types/image";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface GetImagesSuccessResponse extends HTTPSuccessResponse {
	data: {
		message: string;
		user_id: string;
		posted_images: Image[];
	};
}

type GetImagesResponse = GetImagesSuccessResponse | HTTPErrorResponse;

export async function getImages(): Promise<GetImagesResponse> {
	try {
		const response = await api.get<GetImagesSuccessResponse>("/images/post");

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
