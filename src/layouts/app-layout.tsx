import { Outlet } from "react-router";
import { Header } from "../components/header/header";
import { Sidebar } from "../components/sidebar/sidebar";

export default function AppLayout() {
	return (
		<div className="grid grid-cols-app min-h-screen">
			<Sidebar />

			<main className="xl:col-start-2 max-w-[100vw] flex flex-col h-screen">
				<Header />

				<div className="p-4 flex-grow overflow-auto">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
