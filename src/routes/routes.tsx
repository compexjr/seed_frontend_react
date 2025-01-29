import { Routes, Route } from "react-router";

import AuthLayout from "../layouts/auth-layout";
import AppLayout from "@/layouts/app-layout";

import { Dashboard } from "@/pages/dashboard";
import { Images } from "@/pages/images";
import { Settings } from "@/pages/settings";
import { SignUp } from "@/pages/sign-up";
import { SignIn } from "@/pages/sign-in";
import { Profile } from "@/pages/profile";
import { Reports } from "@/pages/reports";
import { CreateImage } from "@/pages/create-image";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="adicionar-tarefa" element={<CreateImage />} />
				<Route path="imagens" element={<Images />} />
				<Route path="relatorios" element={<Reports />} />
				<Route path="configuracoes" element={<Settings />} />
				<Route path="perfil" element={<Profile />} />
			</Route>

			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="cadastro" element={<SignUp />} />
			</Route>
		</Routes>
	);
}
