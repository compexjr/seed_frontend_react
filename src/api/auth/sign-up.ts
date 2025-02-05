import { api } from "@/services/axios";
import { AxiosError } from "axios";

interface SignUpRequestBody {
	name: string;
	email: string;
	password: string;
}

interface SignUpRequestResponse {
	data: {
		id: string;
		name: string;
		email: string;
	};
}

export async function signUp({
	name,
	email,
	password,
}: SignUpRequestBody): Promise<SignUpRequestResponse | undefined> {
	try {
		const response = await api.post<SignUpRequestResponse>("/users/signup", {
			name,
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
