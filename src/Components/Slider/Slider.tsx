import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import s from './Slider.module.scss';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

interface ISliderProps {
    images: string[];
}

const Slider: FC<ISliderProps> = ({ images }) => {
    // console.log(images)
    return (
        <Swiper
            slidesPerView={1}
            keyboard={{
                enabled: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
        >
            {images.map((img, i) => (
             
                <SwiperSlide key={i}>
                    <img src={img} alt="" />
                </SwiperSlide>
              
            ))}
        </Swiper>
    );
};

export default Slider;
