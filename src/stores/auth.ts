import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: !!Cookies.get("auth_token"),

	login: () => {
		Cookies.set("auth_token", "example_token", { expires: 1, secure: true });
		set({ isAuthenticated: true });
	},

	logout: () => {
		Cookies.remove("auth_token");
		set({ isAuthenticated: false });
	},
}));
