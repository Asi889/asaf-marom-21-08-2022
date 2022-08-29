/* eslint-disable @next/next/no-img-element */
import { connect, useDispatch, useSelector, useStore } from "react-redux";
import axios from "axios"
import { useEffect } from "react";
import { setCity } from "../src/redux/actions/clienActions";
import SearchFiled from "../components/SearchFiled";
import MainScreen from "../components/MainScreen";
import MoreInfo from "../components/MoreInfo";
import Forcast from "../components/Forcast";


const Home = (props) => {
  const store = useStore();
  const state = useSelector(() => store.getState());
  const dispatch = useDispatch();

  useEffect(() => {

    const getData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const dataByGeo = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`)
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_FRONT_PRODUCTION_URL}/api/getWeatherData`, { cityKey: dataByGeo.data.Key, cityName: dataByGeo.data.AdministrativeArea.EnglishName });
        dispatch(setCity(data))
      });
    }
    getData();

    if (state.weather?.city?.info?.current?.name) {
      return
    }

  }, [])

  return (
    <div className={`${state?.weather?.darkMode ? "bg-[#282d78]" : "bg-white"} md:h-screen h-full w-screen transition	duration-700 ease-in-out`}>

      <div className="grid justify-center pt-20 gap-x-10 w-[300px] md:w-[400px] mx-auto pb-5">
        <SearchFiled />
        <div className={`container   ${state?.weather?.darkMode ? "bg-[#9086e8]" : "bg-[#4C52AD]"}  rounded-2xl shadow-xl  `}  >
          <MainScreen />
          <MoreInfo />
          <Forcast />
        </div>
      </div>

    </div>
  )
};
export default connect()(Home);

