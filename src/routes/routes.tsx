import { Routes, Route } from "react-router";

import AuthLayout from "../layouts/auth-layout";
import AppLayout from "@/layouts/app-layout";

import { Dashboard } from "@/pages/dashboard";
import { Images } from "@/pages/images";
import { Settings } from "@/pages/settings";
import { SignUp } from "@/pages/sign-up";
import { SignIn } from "@/pages/sign-in";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="imagens" element={<Images />} />
				<Route path="configuracoes" element={<Settings />} />
			</Route>

			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="cadastro" element={<SignUp />} />
			</Route>
		</Routes>
	);
}
