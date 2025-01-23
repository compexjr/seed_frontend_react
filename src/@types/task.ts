export interface Task {
	id: string;
	user_id: string;
	title: string;
	description: string;
	creation_date: string;
	conclusion_date: string | null;
	status: string;
}
