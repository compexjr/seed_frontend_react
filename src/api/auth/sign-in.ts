import { api } from "@/services/axios";
import { AxiosError } from "axios";

interface SignInRequestBody {
	email: string;
	password: string;
}

interface SignInRequestResponse {
	id: string;
	email: string;
	token: string;
}

export async function signIn({
	email,
	password,
}: SignInRequestBody): Promise<SignInRequestResponse | undefined> {
	try {
		const response = await api.post<SignInRequestResponse>("/users/login", {
			email,
			password,
		});

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw error;
		}
	}
}
