import { Routes, Route } from "react-router";
import { SignUp } from "../pages/sign-up";
import { SignIn } from "../pages/sign-in";

import AuthLayout from "../layouts/auth-layout";
import Dashboard from "../pages/dashboard";

export function AppRoutes() {
	return (
		<Routes>
			<Route index element={<Dashboard />} />

			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="cadastro" element={<SignUp />} />
			</Route>
		</Routes>
	);
}
