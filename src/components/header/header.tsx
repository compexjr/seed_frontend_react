export function Header() {
	return (
		<header className="flex w-full justify-between p-4 border-b border-muted">
			<input
				className="w-[300px] py-2 px-4 rounded-md border-[1px]"
				type="text"
				name="Pesquisar"
				placeholder="Pesquisar..."
			/>

			<div className="flex gap-3">
				<div className="flex items-center justify-center font-semibold w-10 h-10 rounded-full bg-slate-100">
					IZ
				</div>
			</div>
		</header>
	);
}
