import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
	isAuthenticated: boolean;
	authenticate: (auth_token: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: !!Cookies.get("auth_token"),

	authenticate: (auth_token) => {
		Cookies.set("auth_token", auth_token, { expires: 1, secure: true });
		set({ isAuthenticated: true });
		window.location.href = "/";
	},

	logout: () => {
		Cookies.remove("auth_token");
		set({ isAuthenticated: false });
	},
}));
