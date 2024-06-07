import './App.css'
import {Product, state} from "./data/state.ts";
import {ProductCard} from "./components/ProductCard.tsx";
import {Button} from "./components/Basic/Button.tsx";
import {sendMessage} from "./Http/telegram.ts";
import WebApp from "@twa-dev/sdk";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        WebApp.ready();
        const userData = WebApp.initDataUnsafe?.user;
        setUser(userData);
    }, []);

    async function handleCart(item: Product) {

        if (user) {
            sendMessage({
                chat_id: user.id,
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
          <div>
              test
              {
                  user ? user.id : 'undefined'
              }
              {
                  JSON.stringify(user)
              }
          </div>
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
