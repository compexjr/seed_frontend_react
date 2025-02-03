import {
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	Table,
} from "../ui/table";
import { ImagesTableItem } from "./images-table-item";
import { useEffect, useState } from "react";
import { Image } from "@/@types/image";
import { mockImages } from "@/mocks/images";
import { ImagesTableFilters } from "./images-table-filters";
import { ImagesTableItemSkeleton } from "./images-table-item-skeleton";
import { EmptyState } from "../global/empty-state";

export function ImagesTable() {
	const [images, setImages] = useState<Image[]>([]);
	const [isLoadingImages, setIsLoadingImages] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setImages(mockImages);
			setIsLoadingImages(false);
		}, 1000);
	});

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-2">
				<ImagesTableFilters />
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow className="bg-muted/50">
							<TableHead className="w-[80px]">Índice</TableHead>

							<TableHead className="min-w-[80px] xl:w-[80px]">Imagem</TableHead>

							<TableHead className="min-w-[150px] xl:w-[150px]">Nome</TableHead>

							<TableHead className="min-w-[250px] xl:w-[250px]">
								Descrição
							</TableHead>

							<TableHead className="max-w-[100px] w-[100px]">Editar</TableHead>

							<TableHead className="max-w-[100px] w-[100px]">Excluir</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{!isLoadingImages &&
							images &&
							images.map((image, index) => {
								return (
									<ImagesTableItem key={image.id} index={index} image={image} />
								);
							})}

						{isLoadingImages && <ImagesTableItemSkeleton />}
					</TableBody>
				</Table>
			</div>

			{((images && images.length === 0 && !isLoadingImages) ||
				(!images && !isLoadingImages)) && <EmptyState />}
		</div>
	);
}
