import { Plus, Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { NavLink } from "react-router";

export function TasksTableFilters() {
	return (
		<form
			className="flex flex-wrap lg:flex-nowrap items-center gap-2 w-full justify-between"
			onSubmit={() => {}}
		>
			<div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
				<span className="text-sm font-semibold hidden lg:block">Filtros: </span>

				<Input className="h-9 w-[300px]" placeholder="Nome" />

				<Button type="submit" variant="secondary" className="border">
					<Search className="mr-2 h-4 w-4" />
					Filtrar
				</Button>

				<Button type="button" variant="outline" onClick={() => {}}>
					<X className="mr-2 h-4 w-4" />
					Limpar
				</Button>
			</div>

			<NavLink to="/adicionar-tarefa">
				<Button type="button" className="flex items-center gap-2">
					<Plus className="w-5 h-5" />
					Adicionar tarefa
				</Button>
			</NavLink>
		</form>
	);
}
