export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
}

export const state = {
    products: <Product[]>[
        {
            id: 1,
            title: "Шина 22×8-10 6PR BKT AT 108 TL",
            description: "",
            price: 10400,
            image: "https://taned.ru/wp-content/uploads/2022/06/bkt-at-108-992x992.jpg"
        },
        {
            id: 2,
            title: "Шина 15×4.5-8 Trelleborg M2",
            description: "Цельнолитая шина M2 15×4 1/2-8 — это продукт эволюционного развития премиальных шведских шин Trelleborg. Линейка шин Trelleborg M2 относится к самой высокой категории шин, на одном уровне с серией Elite XP, по показателям качества, надежности и срока службы.\n",
            price: 14744,
            image: "https://taned.ru/wp-content/uploads/2016/06/Trelleborg-2018-M2-992x992.jpg"
        }
    ]
};
