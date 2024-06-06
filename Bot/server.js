import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6915055479:AAHYV2iUaE0GZavInhXZD2cKteVyVdPttzo'
const web_app_link = 'https://rhodeionrx.github.io/TMA_test/';
const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello World !', {
            reply_markup: { keyboard: [[ { text: "Запустить приложение", web_app: {url: web_app_link}} ]] },
        }
    )
})

bot.launch()