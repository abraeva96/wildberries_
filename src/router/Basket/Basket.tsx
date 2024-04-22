import s from './Basket.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Ibasket, delBasket } from '../../store/basket';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { MdDelete } from "react-icons/md";


const Basket:FC = () => {
  const basket = useSelector((state: { basket: Ibasket }) => state.basket.basket);
  // console.log(basket)?
  const dispatch = useDispatch()

  const basketRemove = (id: string) => {
    dispatch(delBasket(id));
  };
 

  return (
    <div className="container ">
      <div className={s.basket}>
        {basket.length > 0 ? (
          basket.map((item) => (
            <div key={item.id} className={s.basket_item}>
              <div className={s.basket_left}>
                <div>
                  <img className={s.basket_left_img} src={item.thumbnail} alt={""} />
                  {/* <p>осталось {item.stock} шт</p> */}
                </div>
                <p className={s.basket_left_title}>{item.title}</p>

                <div className={s.basket_left_btn}>
                  <button className={s.basket_left_btn_min} >-</button>
                  <button className={s.basket_left_btn_min}>1</button>
                  <button className={s.basket_left_btn_min}>+</button>
                </div>
                <p>{Math.round(item.price * (100 - item.discountPercentage) / 100)} $</p>
              
                <MdDelete className={s.basket_del}  onClick={() => basketRemove(item.id)}/>
              </div>
            </div>
          ))
        ) : (
         <div className={s.basket_emptu}>
          <h3 className={s.basket_emptu_title}>В корзине пока пусто</h3>
          <p className={s.basket_emptu_txt}>Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</p>
          <Link to='/'><button className={s.basket_emptu_btn}>Перейти на главную</button></Link>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Basket;
