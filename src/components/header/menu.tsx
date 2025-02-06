import { LogOut, Settings, User } from "lucide-react";
import { NavLink } from "react-router";
import { Avatar } from "./avatar";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuthStore } from "@/stores/auth";

export function Menu() {
	const { logout } = useAuthStore();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center gap-4 cursor-pointer">
					<Button className="p-0 rounded-full bg-transparent">
						<Avatar src="" fall="IM" />
					</Button>

					<div className="flex flex-col text-sm">
						<strong>Izaías Morais</strong>
						<span>izaiaslima356@gmail.com</span>
					</div>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<DropdownMenuGroup>
					<NavLink to="/perfil" className="flex items-center">
						<DropdownMenuItem className="cursor-pointer  w-full">
							<User className="h-4 w-4" />
							<span>Perfil</span>
						</DropdownMenuItem>
					</NavLink>

					<NavLink to="/configuracoes" className="flex items-center">
						<DropdownMenuItem className="cursor-pointer w-full">
							<Settings className="h-4 w-4" />
							<span>Configurações</span>
						</DropdownMenuItem>
					</NavLink>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<NavLink to="/entrar" className="flex items-center">
					<DropdownMenuItem
						className="cursor-pointer w-full"
						onClick={() => logout()}
					>
						<LogOut className="h-4 w-4" />
						<span>Sair</span>
					</DropdownMenuItem>
				</NavLink>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
