import api from "../api/api";
import jwtDecode from "jwt-decode";
//login (accepts email for username fields and passwords and login as form data) and if successfull save token in localStorage async
/*
payload:
{
    "username": "string",
    "password": "string"
}

method: 
curl -X 'POST' \
  'http://127.0.0.1:8000/auth/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=password&username=user90%40example.com&password=user90%40example'
*/
export const login = async (formData) => {
    try {
        const formData = new FormData();
        formData.append("username", formData.username);
        formData.append("password", formData.password);
        const response = await api.post("/auth/login", { headers: { "Content-Type": "multipart/form-data" } }, formData);
        localStorage.setItem("token", response.data.token);
        return response;
    } catch (error) {
        throw error;
    }
};

//register (accepts email for username fields and passwords and login as form data) and async
// register is same create user in user_service.js

//is authenticated 
export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    //jwt validate is token is valid using  jwt-decode
    if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
            return true;
        }
    }
    return false;
};

