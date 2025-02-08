import { api } from "@/services/axios";

interface GetProfileResponse {
	id: string;
	email: string;
	name: string;
}

export async function getProfile(): Promise<GetProfileResponse> {
	try {
		const response = await api.get<GetProfileResponse>("/users/profile");

		return response.data;
	} catch (error) {
		throw error;
	}
}
