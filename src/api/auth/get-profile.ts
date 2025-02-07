import { api } from "@/services/axios";
import { AxiosError } from "axios";

interface GetProfileResponse {
	id: string;
	email: string;
	name: string;
}

export async function getProfile(): Promise<GetProfileResponse | undefined> {
	try {
		// await new Promise((resolve) => setTimeout(resolve, 1000));

		const response = await api.get<GetProfileResponse>("/users/profile");

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw error;
		}
	}
}
