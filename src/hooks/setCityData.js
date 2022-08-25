import axios from "axios"
import { setCity } from "../redux/actions/clienActions";
import {store} from "../redux/store"

export async function setCityData (firstInfo){
    
    const { data } = await axios.post(`https://asaf-marom-21-08-2022.vercel.app/api/getWeatherData`,{ cityKey: firstInfo.key, cityName: firstInfo.cityName});
    
    store.dispatch(setCity({...data}))
    
}