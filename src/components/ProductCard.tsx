import {Product} from "../data/state.ts";
import React from "react";

export const ProductCard = ({ product, children }: { product: Product, children: React.ReactNode }) => {
    return (
        <div className="card" style={{width: "20rem"}}>
            <img
                className="img-fluid"
                src={product.image}
                alt="Product image"
                style={{width: "100%", height: "100%"}}
            />
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <h5 className="card-subtitle mb-2 text-muted">{product.price} ₽</h5>
                <p className="card-text">{product.description}</p>
                {children}
            </div>
        </div>
    );
}