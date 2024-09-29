import {useMutation} from "@tanstack/vue-query";
import {apiClient} from "@/axios.ts";

interface UserCreds {
    email: string;
    password: string;
}

interface UserInfo {
    name: string;
    surname: string;
    email: string;
    password: string;
}

interface LoginResponse {
    data: string;
    status: string;
}


export const useAuth = () => {
    const {mutateAsync: login} = useMutation({
        mutationKey: ["auth", "login"],
        mutationFn: async ({email, password}: UserCreds) => {
            const result = await apiClient.post<LoginResponse>("/login", {
                email,
                password,
            });
            const access_token: string = result.data.data;
            console.log("here")
            console.log(access_token);
            localStorage.setItem("access_token", access_token);
        },
    });

    const {mutateAsync: register} = useMutation({
        mutationKey: ["auth", "register"],
        mutationFn: async ({name, surname, email, password}: UserInfo) => {
            await apiClient.post<string>("/users", {
                name,
                surname,
                email,
                password,
            });
        },
    });

    return {
        login,
        register,
    };
};
