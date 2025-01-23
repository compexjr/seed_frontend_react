import { Task } from "@/@types/task";

export const mockTasks: Task[] = [
	{
		id: "1",
		title: "Finalizar relatório",
		description: "Preparar e revisar o relatório trimestral de desempenho.",
		creation_date: "2024-01-01T10:00:00Z",
		conclusion_date: "2024-01-15T18:00:00Z",
		status: "todo",
		user_id: "user_123",
	},
	{
		id: "2",
		title: "Planejar reunião",
		description: "Definir pauta e agendar reunião com a equipe de marketing.",
		creation_date: "2024-01-05T09:30:00Z",
		conclusion_date: null,
		status: "in_progress",
		user_id: "user_456",
	},
	{
		id: "3",
		title: "Atualizar documentação",
		description: "Revisar e atualizar a documentação técnica do projeto.",
		creation_date: "2024-01-10T14:00:00Z",
		conclusion_date: "2024-01-20T16:00:00Z",
		status: "done",
		user_id: "user_789",
	},
	{
		id: "4",
		title: "Revisar código",
		description: "Fazer revisão de código para o novo módulo de autenticação.",
		creation_date: "2024-01-12T11:00:00Z",
		conclusion_date: null,
		status: "done",
		user_id: "user_123",
	},
	{
		id: "5",
		title: "Criar apresentação",
		description: "Desenvolver slides para a apresentação do novo produto.",
		creation_date: "2024-01-15T13:00:00Z",
		conclusion_date: "2024-01-25T15:00:00Z",
		status: "done",
		user_id: "user_456",
	},
];
