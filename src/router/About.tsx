import karzinka from '../assets/images/karzinka.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import Footer from '../Components/Footer/Footer'
import { FC } from 'react'


const About:FC = () => {
  return (
   <>
    <div className="container">
        <div className="about">
            <h2 className="about__title">
            Добро пожаловать на Wildberries
            </h2>
            <p className="about__txt">20 лет мы стремимся сделать для Вас шопинг удобным и доступным</p>
        </div>
        <div className="info">
            <div className="info__box">
                <div>
                <p className="info__box_title">10  млн+</p>
                <p className="info__box_txt">заказов в день</p>
                </div>
                <img src={karzinka} alt="" />
            </div>
            <div className="info__box">
                <div>
                <p className="info__box_title">2 млн м<sup>2</sup></p>
                <p className="info__box_txt"> кладских помещений</p>
                </div>
                <img src={img2} alt="" />
            </div>
            <div className="info__box">
                <div>
                <p className="info__box_title">350 млн+</p>
                <p className="info__box_txt">товаров на складе</p>
                </div>
                <img src={img3} alt="" />
            </div>
        </div>
        {/* <div className="content">

        </div> */}
    </div>
       <Footer/>
   </>
  )
}

export default About