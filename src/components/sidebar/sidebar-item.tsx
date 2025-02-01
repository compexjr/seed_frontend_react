import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router";

interface SidebarItemProps {
	href: string;
	title: string;
	icon: ReactNode;
	disabled?: boolean;
}

export function SidebarItem({
	href,
	icon,
	title,
	disabled = false,
}: SidebarItemProps) {
	const { pathname } = useLocation();

	const style = pathname.endsWith(href)
		? "bg-muted text-slate-900 dark:text-white"
		: "tex-muted";

	return (
		<NavLink
			to={!disabled ? href : ""}
			className={`px-4 py-2 rounded-md font-light flex justify-between items-center
			 ${style} ${disabled && "cursor-not-allowed"} ${
				!disabled && "hover:bg-muted/50"
			}`}
		>
			<div className="flex gap-2 items-center font-medium">
				{icon}
				{title}
			</div>

			{disabled && (
				<div className="bg-muted/50 py-1 px-2 rounded-md text-xs">Em breve</div>
			)}
		</NavLink>
	);
}
