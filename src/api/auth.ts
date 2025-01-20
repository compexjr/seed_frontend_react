import { HttpResponse } from "../@types/http";
import { api } from "../services/axios";

interface SignInPayload {
	email: string;
	password: string;
}

interface SignInResponse extends HttpResponse {
	data: {
		access_token: string;
	};
}

export async function signIn({
	email,
	password,
}: SignInPayload): Promise<SignInResponse | undefined> {
	try {
		const response = await api.get<SignInResponse>("/auth/sign", {
			params: {
				email,
				password,
			},
		});

		const signInResponse: SignInResponse = {
			success: response.data.success,
			statusCode: response.status,
			errors: response.data.errors,
			data: response.data.data,
		};

		return signInResponse;
	} catch (error) {
		console.log(error);
	}
}
