import './App.css'
import {Product, state} from "./data/state.ts";
import {ProductCard} from "./components/ProductCard.tsx";
import {Button} from "./components/Basic/Button.tsx";
import {getChatId, sendMessage} from "./Http/telegram.ts";

function App() {

    async function handleCart(item: Product) {
        getChatId().then(data => {
            if(data.data.result.length > 0) {
                sendMessage({
                    chat_id: data.data.result[0].message.chat.id,
                    message: `Принят заказ на товар "${item.title}".\nЦена: ${item.price} руб.`
                }).then(response => {
                    console.log('Message sent successfully:', response.data);
                }).catch(error => {
                    console.error('Error sending message:', error);
                });
            }
        })
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
