import { HTTPResponse } from "@/@types/http";
import { api } from "@/services/axios";

interface SignInRequestBody {
	email: string;
	password: string;
}

interface SignInRequestResponse extends HTTPResponse {
	data: {
		token: string;
		token_type: string;
	};
}

export async function signIn({
	email,
	password,
}: SignInRequestBody): Promise<SignInRequestResponse> {
	try {
		const response = await api.post<SignInRequestResponse>("/auth/sign-in", {
			email,
			password,
		});

		return response.data;
	} catch (error) {
		throw error;
	}
}
