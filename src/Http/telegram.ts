import axios from 'axios';

const bot_token = '6915055479:AAHYV2iUaE0GZavInhXZD2cKteVyVdPttzo';

export const getChatId = async () => {
    return await axios.get(`https://api.telegram.org/bot${bot_token}/getUpdates`);
}

export const sendMessage = async ({chat_id, message}: {chat_id: any, message: string}) => {
    return await axios.post(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        chat_id: chat_id,
        text: message
    })
}