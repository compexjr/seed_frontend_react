import { Menu } from "./menu.js";
import { ThemeSwitcher } from "./theme-switcher.js";

export function Header() {
	return (
		<header className="flex w-full justify-between p-4 border-b border-muted">
			<div />

			<div className="flex items-center gap-4">
				<ThemeSwitcher />

				<Menu />
			</div>
		</header>
	);
}
