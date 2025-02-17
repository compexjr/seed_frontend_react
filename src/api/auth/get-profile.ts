import { HTTPResponse } from "@/@types/http";
import { api } from "@/lib/axios";

interface GetProfileResponse extends HTTPResponse {
	data: {
		user_id: string;
		email: string;
		name: string;
		image: string;
	};
}

export async function getProfile(): Promise<GetProfileResponse> {
	try {
		const response = await api.get<GetProfileResponse>("/auth/profile");

		return response.data;
	} catch (error) {
		throw error;
	}
}
