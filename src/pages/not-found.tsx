import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center gap-2">
			<h1 className="text-4xl font-bold">404</h1>

			<p className="text-lg text-muted-foreground">Página não encontrada.</p>

			<Link to="/" className="mt-4">
				<Button>Voltar para a página inicial</Button>
			</Link>
		</div>
	);
}
