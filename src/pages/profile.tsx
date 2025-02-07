import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/auth/get-profile";
import { useEffect } from "react";

export function Profile() {
	const { data, isPending } = useQuery({
		queryFn: getProfile,
		queryKey: ["profile"],
	});

	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<User className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Sobre você</h2>
				</div>
			</CardHeader>

			<CardContent>
				<div className="flex items-center gap-4">
					<Skeleton className="w-28 h-28 rounded-full bg-muted" />

					<div>
						<p className="text-sm">
							Selecione uma foto de perfil para sua conta.
						</p>

						<Input
							type="file"
							className="mt-2 pt-[6px] cursor-pointer"
							placeholder="Escolher arquivo"
						/>
					</div>
				</div>

				<div className="mt-6 grid grid-cols-2 gap-4 max-w-[600px]">
					<div className="space-y-1">
						<Label htmlFor="first-name">Nome</Label>

						{isPending && <Skeleton className="w-full h-[37px]" />}

						{!isPending && data && <Input id="first-name" value={data.name} />}
					</div>

					<div className="space-y-1">
						<Label htmlFor="email">Email</Label>

						{isPending && <Skeleton className="w-full h-[37px]" />}

						{!isPending && data && <Input id="email" value={data.email} />}
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex p-4 justify-end border-t bg-muted">
				<Button>Confirmar</Button>
			</CardFooter>
		</Card>
	);
}
