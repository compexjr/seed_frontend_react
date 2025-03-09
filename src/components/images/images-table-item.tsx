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
				<img
					src={image.image_url}
					alt={image.image_title}
					className="w-20 h-20"
				/>
			</TableCell>

			<TableCell className="font-medium">{image.image_title}</TableCell>

			<TableCell className="!max-w-[100px] !w-[100px]">
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

					<DeleteImageDialog imageId={image.image_id} />
				</Dialog>
			</TableCell>
		</TableRow>
	);
}
