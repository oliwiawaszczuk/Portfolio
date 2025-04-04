import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


const ImageSlider = ({images}: {images: string[]}) => {
    return(
        <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="w-full h-full flex justify-center items-center"
        >
            {images.map((img_src, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                    <img
                        src={`./projects_image/${img_src}`}
                        className="max-w-full h-full object-contain w-auto mx-auto p-5"
                        alt={`Slide ${index + 1}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImageSlider