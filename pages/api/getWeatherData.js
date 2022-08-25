// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import path from 'path';

export default async function getWeatherData(req, res) {
  const jsonDir = path.join(process.cwd(), 'json')
  const localPath = `${jsonDir}/weather-city-tel-aviv.json`;
  const {data} = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${req.body.cityKey}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
  const forcast = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${req.body.cityKey}?apikey=${process.env.NEXT_PUBLIC_API_KEY}&metric=true`)
  
  // const isFileExists = fs.existsSync(localPath);
  // function isJsonString(str) {
  //   try {
  //     JSON.parse(str);
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }

  // if (isFileExists) {
  //   const file_data = await fsp.readFile(localPath)
  //   const json_data = file_data && isJsonString(file_data) ? JSON.parse(file_data) : null

  //   if (json_data && json_data.cityWeatherData) {
  //     // if (json_data && json_data.restaurants) {
  //     // console.log("its innnn");
  //     const allData = {
  //       json_data,
  //       forcast: {}
  //       // forcast: forcast?.data
  //     }
  //     // console.log(allData);
  //     res.status(200).json(allData)
  //     return
  //   }
  // }
  
  const dataToSave = {
    current: { ...data[0], id: req.body.cityKey, name: req.body.cityName, isSaved: false,  },
    forcast: [...forcast?.data?.DailyForecasts]
  }
  
  res.status(200).json(dataToSave)
  return
 
}
