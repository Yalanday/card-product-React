import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Image } from "/src/elements";
import { SliderWrapper, StyledButton, StyledSlider } from "./styled";
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';
import 'swiper/scss';
import 'swiper/scss/pagination';

function Slider({ images, width = 200, height = 257 }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <SliderWrapper width={width}>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>
      <StyledSlider
        width={width}
        height={height}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        freeMode
        watchSliderProgress
        sliderPerView={1}
        spaceBetween={20}
        loop
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="изображение продукта"
                height={height}
                maxWidth={width}
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </SliderWrapper>
  );
}

export default Slider;
