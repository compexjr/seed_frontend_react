import {
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	Table,
} from "../ui/table";
import { ImagesTableItem } from "./images-table-item";
import { ImagesTableFilters } from "./images-table-filters";
import { ImagesTableItemSkeleton } from "./images-table-item-skeleton";
import { EmptyState } from "../global/empty-state";
import { useGetImages } from "@/hooks/use-get-images";

export function ImagesTable() {
	const { images, isLoadingImages } = useGetImages();

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-2">
				<ImagesTableFilters />
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow className="bg-muted/50">
							<TableHead className="min-w-[100px]">Índice</TableHead>

							<TableHead className="min-w-[150px]">Imagem</TableHead>

							<TableHead className="w-full">Título</TableHead>

							<TableHead className="min-w-[100px]">Editar</TableHead>

							<TableHead className="min-w-[100px]">Excluir</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{isLoadingImages && <ImagesTableItemSkeleton />}

						{!isLoadingImages &&
							images &&
							images.map((image, index) => {
								return (
									<ImagesTableItem
										key={image.image_id}
										index={index}
										image={image}
									/>
								);
							})}
					</TableBody>
				</Table>
			</div>

			{!isLoadingImages && (!images || images.length === 0) && <EmptyState />}
		</div>
	);
}
