import axios from "axios";
import { setCityData } from "./setCityData";


export async function getCityKey(location) {
   
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_FRONT_PRODUCTION_URL}/api/autocompleteApi`, { cityName: location });

    if( data.length >= 1){
        return data
    }
    
    if(data.length === 0){
      return false  
    }
    let dataTosend = {
        key: data[0]?.Key,
        cityName: data[0]?.LocalizedName
    }
    setCityData(dataTosend)
    return true
    // return data
    // const { data } = await axios.post(`${process.env.FRONT_URL}/api/autocompleteApi`,{cityName:"haifa"});
}