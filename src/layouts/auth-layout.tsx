import { Laptop } from "lucide-react";
import { Outlet } from "react-router";

export default function AuthLayout() {
	return (
		<div className="grid xl:grid-cols-3 h-screen w-full">
			<div className="hidden xl:flex items-center justify-center w-full bg-muted/50">
				<h1 className="text-4xl font-semibold flex items-center gap-4">
					<Laptop size={40} /> Seed Front React
				</h1>
			</div>

			<div className="xl:col-span-2 flex flex-col w-full px-4">
				<header className="xl:hidden w-full py-4 flex items-center justify-center">
					<h1 className="text-xl font-semibold flex items-center gap-4">
						<Laptop size={24} /> Seed Front React
					</h1>
				</header>

				<div className="flex items-center justify-center h-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
