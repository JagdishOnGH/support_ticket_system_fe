import api from "../api/api";

//all messages for ticket id {messages/{ticket_id}}

export const getMessagesForTicket = async (ticket_id) => {
    try {
        const response = await api.get(`/messages/${ticket_id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
