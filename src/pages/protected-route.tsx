import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/stores/auth";

export function ProtectedRoute() {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (!isAuthenticated) {
		return <Navigate to="/entrar" replace />;
	}

	return <Outlet />;
}
