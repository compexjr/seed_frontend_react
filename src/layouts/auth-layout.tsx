import { Laptop } from "lucide-react";
import { Outlet } from "react-router";

export default function AuthLayout() {
	return (
		<div className="grid grid-cols-3 h-screen w-full">
			<div className="flex items-center justify-center w-full bg-[#18181B] text-white">
				<h1 className="text-4xl font-semibold flex items-center gap-4">
					<Laptop size={40} /> Seed Front React
				</h1>
			</div>

			<div className="col-span-2 flex items-center justify-center w-full bg-white">
				<Outlet />
			</div>
		</div>
	);
}
