import './App.css'
import {Product, state} from "./data/state.ts";
import {ProductCard} from "./components/ProductCard.tsx";
import {Button} from "./components/Basic/Button.tsx";
import {sendMessage} from "./Http/telegram.ts";
import WebApp from "@twa-dev/sdk";

function App() {

    async function handleCart(item: Product) {
        const userData = WebApp.initDataUnsafe;

        await sendMessage({
            chat_id: 1350222494,
            message: userData ? JSON.stringify(userData) : 'no user data found',
        })

        if (userData.user) {
            sendMessage({
                chat_id: userData.user.id,
                message: `Принят заказ на товар "${item.title}".\nЦена: ${item.price} руб.`
            }).then(response => {
                console.log('Message sent successfully:', response.data);
            }).catch(error => {
                console.error('Error sending message:', error);
            });
        }
    }

  return (
      <>
          {
              state.products.map(item =>
                  <ProductCard product={item} key={item.id}>
                      <Button onClick={() => handleCart(item)} title="В корзину"/>
                  </ProductCard>
              )
          }
      </>
  )
}

export default App
