/* eslint-disable @next/next/no-img-element */
import { connect, useStore, useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { setCity } from "../src/redux/actions/clienActions";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

const SwiperFaves = () => {
    const store = useStore();
    const favorites = useSelector(() => store.getState().weather.favorites);
    const colorMode = useSelector(() => store.getState().weather.darkMode);
    const dispatch = useDispatch();
   
    
    const check = (city) => {
        dispatch(setCity(city))
    }
    const getIcon = (num) => {
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('../src/assets', false, /\.(png|jpe?g|svg)$/));
        
        return images[num + ".png"]?.default?.src
    }
   

    return (
        <div className={`flex gap-5 pt-10 justify-center flex-wrap ${colorMode ? "bg-[#282d78]" : "bg-white"} transition duration-700 ease-in-out`}>
            <Swiper
                className="mySwiper"
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                >
                {favorites && favorites.map((city, index) => {
                    return (
                        <SwiperSlide  key={index}>
                            <Link href="/"  >
                                <button onClick={() => check(city)} className={`${colorMode ? "bg-[#a8a0ee] text-[#4C52AD] font-semibold" : "bg-[#6f65cc] text-white"}  p-4 text-2xl  grid gap-y-4 text-center w-[170px] hover:bg-[#897ee9] rounded-lg justify-center max-h-[250px]`}>
                                    <h1 className="">{city.current.name}</h1>
                                    <h1 className="">{city.current.Temperature.Metric.Value}°C</h1>
                                    <h1 className="">{city.current.WeatherText}</h1>
                                    <div className=" w-full">
                                        <img src={getIcon(city.current.WeatherIcon)} alt="" />
                                    </div>
                                </button>
                            </Link>
                         </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    )

};

export default connect()(SwiperFaves);