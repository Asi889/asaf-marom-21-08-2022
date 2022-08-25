/* eslint-disable @next/next/no-img-element */
import { connect, useStore, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import Image from 'next/future/image';


const Forcast = () => {
    const store = useStore();

    const forsactState = useSelector(()=>store.getState());
    const getDay = (num) => {

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayNum = new Date(num * 1000).getDay();
        var result = days[dayNum];
        return result
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
        <div className="flex gap-4 flex-wrap justify-evenly mt-10 ">
            {forsactState?.weather?.city?.info?.forcast?.map((day, index) => {
                if (index === 0) return
                return (
                    <div key={index} className={`${forsactState?.weather?.darkMode ? "bg-[#9086e8] text-[#4C52AD] font-semibold" : "bg-[#4C52AD] text-white"}  text-2xl p-4  grid gap-y-4 text-center rounded-md min-w-[200px] justify-center`}>
                        <h1>{getDay(day?.EpochDate)}</h1>
                        <h1>{day?.Temperature.Maximum.Value}°C</h1>
                        <div className="w-full">
                            <img src={getIcon(day?.Day?.Icon)} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default connect()(Forcast);