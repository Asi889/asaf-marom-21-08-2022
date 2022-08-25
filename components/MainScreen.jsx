import Image from 'next/image';
import day from "../src/assets/day.png"
import night from "../src/assets/night.png"
import { connect, useStore, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

const MainScreen = () => {

    const store = useStore();
    const state = useSelector(() => store.getState().weather?.city?.info?.current?.IsDayTime);
    const name = useSelector(() => store.getState().weather?.city?.info?.current?.name);
    const metricValue = useSelector(() => store.getState().weather?.city?.info?.current?.Temperature?.Metric?.Value);
  
    const present = () => {
        if (state) {
            return <Image src={day} layout="fill" alt="" />
        }
        <Image src={night} layout="fill" alt="" />
    }

    return (
        <div className="upper-data relative overflow-hidden w-full  rounded-t-2xl">
            {present()}
            <div className="weather-data relative z-10 w-full h-full min-h-[300px] bg-[#0000004d] flex flex-col items-center justify-center">
                <div className="location text-white text-center text-3xl font-semibold">{name}</div>
                <div className="tempature text-white text-6xl text-center font-bold">{metricValue}°C</div>
            </div>
        </div>

    )
};

export default connect()(MainScreen);