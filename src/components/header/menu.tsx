import { KeyRound, LogOut, Settings, User } from "lucide-react";
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

					<NavLink to="/alterar-senha" className="flex items-center">
						<DropdownMenuItem className="cursor-pointer w-full">
							<KeyRound className="h-4 w-4" />
							<span>Alterar Senha</span>
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
