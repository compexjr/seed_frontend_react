import { api } from "@/services/axios";
import { AxiosError } from "axios";

interface UpdatePasswordRequestBody {
	password: string;
	new_password: string;
}

export async function updatePassword({
	password,
	new_password,
}: UpdatePasswordRequestBody): Promise<void> {
	try {
		await api.put("/users/me", {
			password,
			new_password,
		});
	} catch (error) {
		if (error instanceof AxiosError) {
			throw error;
		}
	}
}
