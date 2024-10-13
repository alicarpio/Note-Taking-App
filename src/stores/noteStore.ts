import {QueryFunctionContext, useQuery} from "@tanstack/vue-query";
import {apiClient} from "@/axios.ts";

export interface Tag {
    id: number,
    name: string,
    color: string,
}

export interface Note {
    id: number,
    title: string,
    content: string,
    tags: Tag[],
}


export async function getNotes({}: QueryFunctionContext): Promise<Note[]> {
    try {
        const response = await apiClient.get("api/notes");
        console.log("here")
        console.log(response.data.data)
        return response.data.data;
    } catch (error: any) {
        console.error(error.message);
        return [];
    }
}

export const useNotes = () => {
    // const queryClient = useQueryClient();

    const {isPending, isError, data, error} = useQuery<Note[]>({
        queryKey: ["notes"],
        queryFn: getNotes,
        initialData: [],
    })

    return {
        isPending,
        isError,
        data,
        error
    }


}