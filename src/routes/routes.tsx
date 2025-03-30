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
import { PrivateRoutes } from "@/pages/private-routes";
import { PublicRoutes } from "@/pages/public-routes";
import { Home } from "@/pages/home"


export function AppRoutes() {
	return (
		<Routes>
			<Route element={<PublicRoutes />}>
				<Route element={<AuthLayout />}>
					<Route path="entrar" element={<SignIn />} />
					<Route path="cadastro" element={<SignUp />} />
				</Route>
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route index element={<Home />} />
				<Route element={<AppLayout />}>
					<Route path="painel" element={<Dashboard />} />
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
