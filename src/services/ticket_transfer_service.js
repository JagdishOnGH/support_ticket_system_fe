import api from "../api/api";

///[ONLY FOR AGENT]
/* create transfer request for ticket
curl -X 'POST' \
  'http://127.0.0.1:8000/tickets_transfers/5/transfer' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM' \
  -H 'Content-Type: application/json' \
  -d '{
  "to_agent_id": 5,
  "reason": "string"
}'
success returns string
failure returns {
  "detail": "Ticket not found"
}
*/
export const createTransferRequest = async (ticket_id, transferRequest) => {
    try {
        const response = await api.post(`/tickets_transfers/${ticket_id}/transfer`, transferRequest);
        return response.data;
    } catch (error) {
        throw error;
    }
};


//ONLY ADMINS CAN APPROVE 
/*
curl -X 'POST' \
  'http://127.0.0.1:8000/tickets_transfers/12/transfer/approve' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM' \
  -d ''*/


export const approveTransferRequest = async (ticket_id) => {
    try {
        const response = await api.post(`/tickets_transfers/${ticket_id}/transfer/approve`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

//for admin get all transfer requests

/*
curl -X 'GET' \
  'http://127.0.0.1:8000/tickets_transfers/' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMSIsImV4cCI6MTc1ODAwMjM3MH0.o4uGMH34LMygJHLdiTCocFR8GRxKp74F2ZHI0blLotM'
response: [
  {
    "ticket_id": 0,
    "id": 0,
    "from_agent_id": 0,
    "to_agent_id": 0,
    "request_reason": "string",
    "status": "pending",
    "resolved_by_admin_id": 0,
    "resolved_at": "2025-09-14T06:29:11.609Z"
  }
]


  */

export const getAllTransferRequests = async () => {
    try {
        const response = await api.get(`/tickets_transfers/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};




   