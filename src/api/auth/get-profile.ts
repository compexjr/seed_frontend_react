import { api } from "@/services/axios";
import { AxiosError } from "axios";
import Cookies from "js-cookie";

interface GetProfileResponse {
	id: string;
	email: string;
	name: string;
}

export async function getProfile(): Promise<GetProfileResponse | undefined> {
	try {
		const auth_token = Cookies.get("auth_token");

		await new Promise((resolve) => setTimeout(resolve, 1000));

		const response = await api.get<GetProfileResponse>("/users/me", {
			headers: {
				Authorization: `Bearer ${auth_token}`,
			},
		});

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw error;
		}
	}
}
