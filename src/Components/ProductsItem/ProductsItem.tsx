import React, { FC } from 'react';
import s from './ProductsItem.module.scss';

interface IProductsItemProps {
  product: {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    stock: number;
    price: number;
    discountPercentage: number;
  };
}

export const ProductsItem: FC<IProductsItemProps> = ({ product }) => {
  return (
    <div className={s.item}>
      <div className={s.item_img}>
        <img src={product.thumbnail} alt="" />
        <button className={s.btn}>{Math.round(product.discountPercentage)} % sale</button>
      </div>
      <div className={s.item__info}>
        <h3 className={s.item__info_title}>{product.title}</h3>
        <p className={s.item__info_description}>{product.description}</p>
        <p className={s.item__info_stock}> В наличии {product.stock} <span></span></p>
        <p className={s.item__info__price}> цена 
          <span className={s.item__info_price}>{product.price} $</span>
        </p>
        <p className={s.item__info_sale}>Цена со скидкой {Math.round(product.price * (100 - product.discountPercentage) / 100)} $</p>
      </div>
    </div>
  );
};

export default ProductsItem;
