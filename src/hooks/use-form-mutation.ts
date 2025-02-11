import { useForm, FieldValues, DefaultValues } from "react-hook-form";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { toast } from "sonner";

interface UseFormMutationProps<TSchema extends FieldValues, TResponse> {
	schema: ZodType<TSchema>;
	defaultValues: DefaultValues<TSchema>;
	mutationOptions?: UseMutationOptions<TResponse, any, TSchema>;
	mutationFn: (data: TSchema) => Promise<TResponse>;
}

export function useFormMutation<TSchema extends FieldValues, TResponse>({
	schema,
	defaultValues,
	mutationFn,
	mutationOptions,
}: UseFormMutationProps<TSchema, TResponse>) {
	const form = useForm<TSchema>({
		defaultValues,
		resolver: zodResolver(schema),
	});

	const mutation = useMutation({
		mutationFn,
		...mutationOptions,
	});

	const handleSubmitForm = form.handleSubmit(
		(data) => mutation.mutate(data),
		(errors) => {
			const firstError = Object.values(errors)[0]?.message;
			if (firstError) toast.error(firstError.toString());
		}
	);

	return { ...form, handleSubmitForm, mutation };
}
