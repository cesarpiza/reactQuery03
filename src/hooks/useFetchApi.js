import axios from "axios";

export async function useFetchApi(currentId) {
    const { data } = await axios.get(`http://192.168.0.104:8080/users/${currentId}`)

    return data;
}