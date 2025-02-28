import { LogOut, Settings, User } from "lucide-react";
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
import { ProfileSkeleton } from "./profile-skeleton";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/auth/get-profile";
import { Link } from "react-router";

export function Menu() {
	const { logout } = useAuthStore();

	const { data: response, isPending } = useQuery({
		queryFn: getProfile,
		queryKey: ["get-profile"],
	});

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center gap-4 cursor-pointer">
					<Button className="p-0 rounded-full bg-transparent">
						<Avatar src="" fall="IM" />
					</Button>

					{isPending && <ProfileSkeleton />}

					{!isPending && response?.success && (
						<div className="flex flex-col text-sm">
							<strong>{response.data.name}</strong>
							<span className="w-[200px]">{response.data.email}</span>
						</div>
					)}
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<DropdownMenuGroup>
					<DropdownMenuItem className="cursor-pointer  w-full">
						<Link to="/perfil" className="flex items-center">
							<User className="h-4 w-4" />
							<span>Perfil</span>
						</Link>
					</DropdownMenuItem>

					<DropdownMenuItem className="cursor-pointer w-full">
						<Link to="/configuracoes" className="flex items-center">
							<Settings className="h-4 w-4" />
							<span>Configurações</span>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					className="cursor-pointer w-full"
					onClick={() => logout()}
				>
					<LogOut className="h-4 w-4" />
					<span>Sair</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
