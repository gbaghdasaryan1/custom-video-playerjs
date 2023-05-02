import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Player } from "../player";

type Props = {
	data: string[]
}

const Slider: FC<Props> = ({data}) => {
	return (
		<Swiper
		spaceBetween={50}
		slidesPerView={1}
		onSlideChange={() => console.log('slide change')}
		onSwiper={(swiper) => console.log(swiper)}
	>

		{
			data.map((item,index) => {
				return <SwiperSlide key={index}>
					<Player src={item}/>
				</SwiperSlide>
			})
		}
	</Swiper>
	);
};

export default Slider;
