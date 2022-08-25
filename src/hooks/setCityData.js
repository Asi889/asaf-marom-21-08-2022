import axios from "axios"
import { setCity } from "../redux/actions/clienActions";
import {store} from "../redux/store"

export async function setCityData (firstInfo){
    
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_FRONT_PRODUCTION_URL}/api/getWeatherData`,{ cityKey: firstInfo.key, cityName: firstInfo.cityName});
    
    store.dispatch(setCity({...data}))
    
}