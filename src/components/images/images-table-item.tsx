import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import { DeleteImageDialog } from "./delete-image-dialog";
import { Button } from "../ui/button";
import { Image } from "@/@types/image";

export interface ImagesTableItemProps {
	index: number;
	image: Image;
}

export function ImagesTableItem({ image, index }: ImagesTableItemProps) {
	return (
		<TableRow>
			<TableCell>{index}</TableCell>

			<TableCell>
				<div className="w-16 h-16 rounded-md bg-muted" />
			</TableCell>

			<TableCell className="font-medium">{image.name}</TableCell>

			<TableCell className="text-muted-foreground">
				{image.description}
			</TableCell>

			<TableCell>
				<Button variant="outline" size="sm">
					<SquarePen className="h-4 w-4" />
				</Button>
			</TableCell>

			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="sm">
							<Trash2 className="h-4 w-4" />
						</Button>
					</DialogTrigger>

					<DeleteImageDialog imageId={image.id} />
				</Dialog>
			</TableCell>
		</TableRow>
	);
}
