/* eslint-disable @next/next/no-img-element */
import { connect, useStore, useSelector } from "react-redux";


const Forcast = () => {
    const store = useStore();

    const forsactState = useSelector(() => store.getState());
    const getDay = (num) => {

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayNum = new Date(num * 1000).getDay();
        var result = days[dayNum];
        if(result === "Tuesday" || result === "Thursday") return result.substring(0,4)
        return result.substring(0,3)
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
        <div className={`flex gap-x-1 pb-4 justify-evenly mt-5 ${forsactState?.weather?.darkMode ? "" : "bg-[#6a71d8]]"} transition	duration-700 ease-in-out`}>

            {forsactState?.weather?.city?.info?.forcast?.map((day, index) => {
                if (index === 0) return
                return (
                    <div key={index} className={`  text-lg  grid gap-y-4 text-center rounded-md  justify-center text-white`} >
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