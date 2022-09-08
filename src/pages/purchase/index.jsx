import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.scss";
export function Purchase() {
  return (
    <div className="containerPurchase">
      <div className="titlePurchase">
        <h1>
          Comprar iPhone 13
          <div className="subtitlePurchase">A partir de R$ 5.800</div>
        </h1>
      </div>
      <div className="containerPurchaseSwiper ">
        <Swiper
          className="swiperPurchase"
          modules={[
            EffectFade,
            Autoplay,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
          ]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          effect={"flip"}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src="./src/assets/Purch1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/Purch2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./src/assets/Purch3.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="formPurchase">
        <h1>Modelo. Qual é o melhor para você?</h1>
        <button className="btnPurchase">
          iPhone 13 Tela de 6,1 polegadas1 A partir de R$ 5.800
        </button>
        <button className="btnPurchase">
          iPhone 13 mini Tela de 5,4 polegadas1 A partir de R$ 5.000
        </button>
        <h1 className="selectColorPurchase">Cor. Escolha sua favorita.</h1>
        <h2 className="selectColorPurchaseH2">Cor</h2>
        <select 
        className="selectPurchase"
        name="" id="">
          <option value="">verde</option>
          <option value="">rosa</option>
          <option value="">azul</option>
          <option value="">meia-noite</option>
          <option value="">branco</option>
          <option value="">vermelho</option>
        </select>

        <button className="btnPurchase2">Comprar</button>
      </div>
    </div>
  );
}
