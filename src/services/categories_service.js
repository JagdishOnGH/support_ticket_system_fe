import api from "../api/api";

// all categories to show - list picking in ticket creation

    //all categories
/*
curl -X 'GET' \
  'http://127.0.0.1:8000/categories/?skip=0&limit=100' \
  -H 'accept: application/json'
*/
export const getAllCategories = async (skip, limit) => {
    try {
        const response = await api.get(`/categories/?skip=${skip}&limit=${limit}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


/* only agents and admin can create categories
curl:
curl -X 'POST' \
  'http://127.0.0.1:8000/categories/' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "string",
  "description": "string"
}'
*/

export const createCategory = async (category) => {
    try {
        const response = await api.post(`/categories/`, category);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//read full categories with it's subcategories, thru id
// curl -X 'GET' \
//   'http://127.0.0.1:8000/categories/1' \
//   -H 'accept: application/json'

export const getCategory = async (category_id) => {
    try {
        const response = await api.get(`/categories/${category_id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/* update categories: 
curl -X 'PUT' \
  'http://127.0.0.1:8000/categories/5' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "string1",
  "description": "string"
}'  
*/

export const updateCategory = async (category_id, category) => {
    try {
        const response = await api.put(`/categories/${category_id}`, category);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//delete categories 
// curl -X 'DELETE' \
//   'http://127.0.0.1:8000/categories/5' \
//   -H 'accept: application/json'

export const deleteCategory = async (category_id) => {
    try {
        const response = await api.delete(`/categories/${category_id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//create sub categories thr categories id
// curl -X 'POST' \
//   'http://127.0.0.1:8000/categories/5/sub_categories' \
//   -H 'accept: application/json' \
//   -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "name": "string",
//   "description": "string"
// }'

export const createSubCategory = async (category_id, subCategory) => {
    try {
        const response = await api.post(`/categories/${category_id}/sub_categories`, subCategory);
        return response.data;
    } catch (error) {
        throw error;
    }
};

