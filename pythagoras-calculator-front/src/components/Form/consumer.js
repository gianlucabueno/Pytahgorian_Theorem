import api from '../../services/api';

const consumer = {
    create: async (params) => {
        try {
            const response = await api.post('/teorema_result', params);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
}

export default consumer;