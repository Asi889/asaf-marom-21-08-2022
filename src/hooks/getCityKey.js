import axios from "axios";
import { setCityData } from "./setCityData";


export async function getCityKey(location) {
   
    const { data } = await axios.post(`https://asaf-marom-21-08-2022.vercel.app/api/autocompleteApi`, { cityName: location });
    
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