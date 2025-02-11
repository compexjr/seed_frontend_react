import { api } from "@/services/axios";
import { AxiosError } from "axios";

interface ResetPasswordRequestBody {
	password: string;
	new_password: string;
}

export async function resetPassword({
	password,
	new_password,
}: ResetPasswordRequestBody): Promise<void> {
	try {
		await api.put("/auth/reset-password", {
			password,
			new_password,
		});
	} catch (error) {
		if (error instanceof AxiosError) {
			throw error;
		}
	}
}
