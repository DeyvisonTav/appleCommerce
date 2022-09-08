import { Link } from "react-router-dom";
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

export function Home() {
  const verde =
    "https://www.apple.com/br/iphone-13/images/key-features/hero/hero_green__rz0u5fdewmqq_large.jpg";
  const rosaURL =
    "https://www.apple.com/br/iphone-13/images/key-features/hero/hero_pink__ghy09iqzzca6_large.jpg";
  const azulURL =
    "https://www.apple.com/br/iphone-13/images/key-features/hero/hero_blue__bn5i4jxh51si_large.jpg";
  const meiaNoiteURL =
    "https://www.apple.com/br/iphone-13/images/key-features/hero/hero_midnight__bo91w7inegwi_large.jpg";
  const brancoURL =
    "https://www.apple.com/br/iphone-13/images/key-features/hero/hero_starlight__tjp0q09a16i6_large.jpg";
  const vermelhoURL =
    "https://www.apple.com/br/iphone-13/images/key-features/hero/hero_red__eogpx7m2jwk2_large.jpg";

  return (
    <div className="container">
      <div className="titleHome">
        <div className="title">iPhone 13</div>
        <h1 className="titleFirst">Seu novo superpoder.</h1>
        <div className="containerText">
          <h2>
            Chip com velocidade impressionante. Um aumento notável na duração da
            bateria. E novos recursos de foto e vídeo. No iPhone 13, você faz
            coisas que nunca pôde. E ele ainda vem em dois tamanhos.
          </h2>
          <div className="textCost">A partir de R$ 5.800,00</div>
          <Link className="btnLink" to={"/purchase"}>
            <button className="btn">comprar</button>
          </Link>
          <div className="containerImg">
            <Swiper
              modules={[
                EffectFade,
                Autoplay,
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
              ]}
              autoplay={{
                delay: 2000,
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
                <img src={verde} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rosaURL} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={azulURL} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={meiaNoiteURL} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brancoURL} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={vermelhoURL} alt="" />
              </SwiperSlide>
            </Swiper>
            
          </div>
        </div>
      </div>
    </div>
  );
}
