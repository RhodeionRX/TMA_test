import axios from 'axios';

const bot_token = '6915055479:AAEkjxkXkLu7HE-EasLmVxeidaSqgzUaW6Y';

export const getUpdates = async () => {
    return await axios.get(`https://api.telegram.org/bot${bot_token}/getUpdates`);
}

export const getChatId = async ({user_id}: {user_id: number}) => {
    return await axios.get(`https://api.telegram.org/bot${bot_token}/getChat?chat_id=${user_id}`);
}

export const sendMessage = async ({chat_id, message}: {chat_id: any, message: string}) => {
    return await axios.post(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        chat_id: chat_id,
        text: message
    })
}