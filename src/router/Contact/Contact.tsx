import { FC } from 'react'
import air from '../../assets/images/air.png'
import Footer from '../../Components/Footer/Footer'

const Contact:FC = () => {
    return (
        <>
        <div className="container">
            <div className="section">
                <div className="section__info">
                    <div className="section__info-left">
                        
                            <h4>Обращения</h4>
                            <p>Если у Вас возник вопрос – напишите нам</p>
                          
                    
                            <img src={air} alt="" />
                   
                    </div>
                    <div className="section__info-right">
                        <h4>Официальные запросы</h4>
                        <p>Для отправки или получения деловой документации</p>
                        <a href="mailto:sales@wildberries.ru">sales@wildberries.ru</a>

                    </div>
                    <div className="section__info-right">
                        <h4>Цифровой арбитраж</h4>
                        <p>для Правообладателей
                            Претензии по нарушению прав на интеллектуальную собственность</p>
                        <a href="https://seller.wildberries.ru/appeal-copyright/">Написать претензию</a>

                    </div>
                </div>
            </div>
            <div className='contact'>
                <div className="contact__info">
                    <div className="contact__info-box">
                        <h4>Партнерам</h4>
                        <p>Узнайте подробные условия для сотрудничества</p>
                        {/* <a href="#!">sales@wildberries.ru</a> */}
                    </div>
                    <div className="contact__info-box">
                        <h4>Пресс-служба</h4>
                        <p>Для запросов СМИ</p>
                        <a href="mailto:pr@wildberries.ru">pr@wildberries.ru</a>
                    </div>
                    <div className="contact__info-box">
                        <h4>Говори свободно</h4>
                        <p>Сообщите нам о случаях мошенничества и коррупции на горячую линию</p>
                    </div>
                    <div className="contact__info-box">
                        <h4>Юридический адреc</h4>
                        <p>142181, Московская область, г. Подольск, деревня Коледино, Территория Индустриальный парк Коледино, д. 6, стр. 1</p>
                    </div>


                </div>
            </div>
        </div>
            <Footer/>
        </>

    )
}

export default Contact