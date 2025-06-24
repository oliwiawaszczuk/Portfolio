import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface ImageSliderProps {
    images: string[];
    onImageClick: (imgSrc: string) => void;
}

const ImageSlider = ({ images, onImageClick }: ImageSliderProps) => {
    const [touchedSlideIndex, setTouchedSlideIndex] = useState<number | null>(null);
    
    const handleTouchStart = (index: number) => {
        setTouchedSlideIndex(index);
    };
    
    const handleTouchEnd = () => {
        setTouchedSlideIndex(null);
    };
    
    return(
        <Swiper
            navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            className="w-full h-full project-swiper group"
        >
            {/* Custom navigation buttons */}
            <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#121212]/50 backdrop-blur-sm flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffc951]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            
            <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#121212]/50 backdrop-blur-sm flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffc951]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
            
            {/* Mobile touch indicator - visible on smaller screens */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full z-30 text-white/80 text-xs md:hidden animate-pulse">
                Tap to view fullscreen
            </div>
            
            {images.map((img_src, index) => (
                <SwiperSlide key={index} className="relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div 
                        className={`w-full h-full overflow-hidden relative cursor-pointer ${touchedSlideIndex === index ? 'touch-effect' : ''}`}
                        onClick={() => onImageClick(img_src)}
                        onTouchStart={() => handleTouchStart(index)}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Click overlay with magnifying glass - hidden on mobile */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 md:flex">
                            <div className="bg-[#ffc951]/20 backdrop-blur-sm p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                                </svg>
                            </div>
                        </div>
                        
                        <div className="w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
                            <img
                                src={`./projects_image/${img_src}`}
                                className="w-full h-full object-contain md:object-cover transform transition-transform duration-700 hover:scale-110"
                                alt={`Project preview ${index + 1}`}
                                style={{ objectPosition: 'center' }}
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-4 right-4 z-20 bg-[#121212]/70 backdrop-blur-sm px-3 py-1 rounded-md text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {index + 1}/{images.length}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImageSlider