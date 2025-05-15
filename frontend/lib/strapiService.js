import axios from "axios";
import { cookies } from "next/headers";

export async function getUser(token){
    if(!token){
        return null;
    }
    const res = await axios.get("http://localhost:1337/api/users/me", {
        headers:{
            Authorization: `Bearer ${token}`
        },
    });
    return res.data;
}

export async function getToken(){
    const cookieStorage = await cookies();
    const jwt = cookieStorage.het("jwtFr");
    const token = jft?.value;
    return token;
}