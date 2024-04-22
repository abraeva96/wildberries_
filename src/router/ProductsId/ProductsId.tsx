import { FC } from "react";
import {  useParams } from "react-router-dom";
import { useProductData } from "../../hooks/useProductsData";
import s from '../ProductsId/ProductsId.module.scss';

import Slider from "../../Components/Slider/Slider";
import Loading from "../../Components/Loading/Loading";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Ibasket, setBasket } from "../../store/basket";
import { IProduct } from "../../Types";


const ProductsId: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading } = useProductData(0, id || "");
  const dispatch = useDispatch()
  const basket = useSelector((state: { basket: Ibasket }) => state.basket.basket);
  
  if (isLoading) return <Loading />;
  if (isError) return <h3>{isError}</h3>;

  const addToBasket = (product: IProduct) => {
    // console.log(product)
    if (!basket.map((item: IProduct) => item.id).includes(product.id)) {
      dispatch(setBasket([...basket, product]));
    }
  };
  
  return (
    <div className="container">
      {/* <Link to='/'>
        <GoArrowLeft className={s.back} />
      </Link> */}
      <div className={s.products}>
        <div className={s.products_top}>
          <Slider images={data.images} />
        </div>
        <div className={s.products_bottom}>
          <p className={s.products_bottom_title}>{data.title}</p>
          <p className={s.products_bottom_desc}>{data.description}</p>
          <p className={s.products_bottom_stock}>
            {data.stock} <span className={s.products_bottom_stok}> В наличии</span>{" "}
          </p>
          <p className={s.products_bottom_price}>{data.price} $</p>
          <p className={s.products_bottom_discont}>{Math.round(data.discountPercentage)} % sale</p>
          <p className={s.products_bottom_sale}>
            Цена со скидкой : {Math.round(data?.price * (100 - data?.discountPercentage) / 100)} $
          </p>
        </div>
        <div className={s.products_btn}>
          <FaHeart className={s.products_btn_icon} />
          <button onClick={() => addToBasket(data)} className={s.products_btn_basket}>Add basket</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsId;
