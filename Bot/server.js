import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6915055479:AAEkjxkXkLu7HE-EasLmVxeidaSqgzUaW6Y'
const web_app_link = 'https://rhodeionrx.github.io/TMA_test/';
const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать!\nДанный бот демонстрирует возможности мини-приложения Telegram в качестве замены традиционного мобильного приложения для проекта "Движком".', {
            reply_markup: { inline_keyboard: [[ { text: "Запустить приложение", web_app: {url: web_app_link}} ]] },
        }
    )
})

bot.launch()