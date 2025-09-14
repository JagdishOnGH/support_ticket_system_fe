import api from "../api/api";

//all tickets with limit and offset
/*
Retrieves tickets based on the user's role:

Admin: Sees all tickets.
Agent: Sees tickets assigned to them.
User: Sees tickets they created.

curl -X 'GET' \
  'http://127.0.0.1:8000/tickets/?skip=0&limit=100' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM'

*/

export const getAllTickets = async (skip, limit) => {
    try {
        const response = await api.get(`/tickets/?skip=${skip}&limit=${limit}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/* post tickets
{
  "title": "string",
  "initial_description": "string",
  "category_id": 0,
  "subcategory_id": 0
}
  if category or sub category not found throws not found error
  curl -X 'POST' \
  'http://127.0.0.1:8000/tickets/' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM' \
  -H 'Content-Type: application/json' \
  -d '{
  "title": "string",
  "initial_description": "string",
  "category_id": 0,
  "subcategory_id": 0
}'
*/
export const postTicket = async (ticket) => {
    try {
        const response = await api.post(`/tickets/`, ticket);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//ticket status for ticket id : int 
/* response data
{
    "status": "string"
}
*/
export const ticketStatus = async (ticket_id) => {
    try {
        const response = await api.get(`/tickets/${ticket_id}/status`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


//request to reopen (only for closed - else 403 error)
/* response data
a full ticket object
*/
export const requestToReopenTicket = async (ticket_id) => {
    try {
        const response = await api.post(`/tickets/${ticket_id}/request/reopen`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// all requests to repoen for admins , else forbidden . responds : string
/*
curl -X 'GET' \
  'http://127.0.0.1:8000/tickets/reopen/requests?user_email=jagdissghimire%40gmail.com&username=w&ticket_title=w' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM'


optional to search with: 
user_email, username, ticket_title

  */
export const getAllRequestsToReopenTicket = async (user_email, username, ticket_title) => {
    try {
        //prepare and only allow to be in path if they are not null and parse them to be valid uri parameters
        //like converting space to %20
        let params = {};
        if (user_email) params.user_email = user_email;
        if (username) params.username = username;
        if (ticket_title) params.ticket_title = ticket_title;
        const response = await api.get(`/tickets/reopen/requests`, { params });
        //req url looks like : 
        return response.data;
    } catch (error) {
        throw error;
    }
};

//create notes for tickets
/*                                            
curl -X 'POST' \
  'http://127.0.0.1:8000/tickets/8/note' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM' \
  -H 'Content-Type: application/json' \
  -d '{
  "note": "string"
}' 
*/
export const createNoteForTicket = async (ticket_id, note) => {
    try {
        const response = await api.post(`/tickets/${ticket_id}/note`, note);
        return response.data;
    } catch (error) {
        throw error;
    }
};

