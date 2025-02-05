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
import { AddTask } from "@/pages/add-task";
import { AddImage } from "@/pages/add-image";
import { NotFound } from "@/pages/not-found";
import { ProtectedRoute } from "@/pages/protected-route";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="entrar" element={<SignIn />} />
				<Route path="criar-conta" element={<SignUp />} />
			</Route>

			<Route element={<ProtectedRoute />}>
				<Route element={<AppLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="adicionar-tarefa" element={<AddTask />} />
					<Route path="adicionar-imagem" element={<AddImage />} />
					<Route path="imagens" element={<Images />} />
					<Route path="relatorios" element={<Reports />} />
					<Route path="configuracoes" element={<Settings />} />
					<Route path="perfil" element={<Profile />} />
				</Route>
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
