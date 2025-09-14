import api from "../api/api";

//all user with limit and offset
/*
response data
 {
    "name": "string",
    "email": "user@example.com",
    "role": "user",
    "profile_photo_url": "string|NULL   ",
    "id": 0
  }
*/
/**
 * curl -X 'GET' \
  'http://127.0.0.1:8000/users/?skip=0&limit=100' \
  -H 'accept: application/json'
 */
export const getAllUser = async (skip, limit) => {
    try {
        const response = await api.get(`/users/?skip=${skip}&limit=${limit}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

    //for get/put/ delete -> users/{user_id:int}

//get user

export const getUser = async (user_id) => {
    try {
        const response = await api.get(`/users/${user_id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//update user
/*
payload:
{
    "name": "string",
    "password": "string",
    "profile_photo_url": "string"
}
*/
export const updateUser = async (user_id,   userToUpdate) => {
    try {
        const response = await api.put(`/users/${user_id}`, userToUpdate);
        return response.data;
    } catch (error) {
        throw error;
    }
};


//delete user
export const deleteUser = async (user_id) => {
    try {
        const response = await api.delete(`/users/${user_id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


//create user 
/*
payload: /add_users
{
    {
  "name": "string",
  "email": "user@example.com",
  "role": "user",
  "profile_photo_url": "string",
  "password": "string"

}
*/
//same as register user


export const createUser = async (user) => {
    try {
        const response = await api.post(`/users/add_users`, user);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/*
add agent same as user but canbe done by admin role. role: agent

*/

export const createAgent = async (agent) => {
    try {
        const response = await api.post(`/users/add_agent`, agent);
        return response.data;
    } catch (error) {
        throw error;
    }
};
