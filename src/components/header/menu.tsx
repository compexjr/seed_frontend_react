import { KeyRound, LogOut, Settings, UserPen } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
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

export function Menu() {
	const navigate = useNavigate();

	function handleLogout() {
		navigate("/entrar");
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center gap-4 cursor-pointer">
					<Button className="p-0 rounded-full bg-transparent">
						<Avatar src="" fall="IM" />
					</Button>

					<div className="flex flex-col text-sm">
						<strong>Izaías Lima</strong>
						<span>izaiaslima356@gmail.com</span>
					</div>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<DropdownMenuGroup>
					<DropdownMenuItem className="cursor-pointer">
						<UserPen className="mr-2 h-4 w-4" />
						<span>Perfil</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuGroup>
					<DropdownMenuItem className="cursor-pointer">
						<KeyRound className="mr-2 h-4 w-4" />
						<span>Alterar Senha</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuGroup>
					<DropdownMenuItem className="cursor-pointer">
						<Settings className="mr-2 h-4 w-4" />
						<span>Configurações</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					className="cursor-pointer"
					asChild
					onClick={handleLogout}
				>
					<NavLink to="/entrar" className="flex items-center">
						<LogOut className="mr-2 h-4 w-4" />
						<span>Sair</span>
					</NavLink>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
