import { getImages } from "@/api/images/get-images";
import { useQuery } from "@tanstack/react-query";

export function useGetImages() {
	const { data: result, isLoading: isLoadingImages } = useQuery({
		queryKey: ["get-images"],
		queryFn: getImages,
	});

	if (!result) {
		return {
			images: [],
			isLoadingImages,
		};
	}

	if (result.success) {
		return {
			images: result.data.posted_images,
			isLoadingImages,
		};
	}

	return {
		images: [],
		isLoadingImages,
	};
}
