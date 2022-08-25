import axios from "axios"
import { setCity } from "../redux/actions/clienActions";
import {store} from "../redux/store"

export async function setCityData (firstInfo){
    
    const { data } = await axios.post(`http://localhost:3000/api/getWeatherData`,{ cityKey: firstInfo.key, cityName: firstInfo.cityName});
    
    store.dispatch(setCity({...data}))
    
}