import axios from "axios";

export const fetchUserData = async (user_id) => {
    return axios.get(`https://reqres.in/api/users/${user_id}`);
}