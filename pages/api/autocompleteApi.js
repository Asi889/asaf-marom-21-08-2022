// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";



export default async function autocompleteApi(req, res) {
  
  const { data } = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.NEXT_PUBLIC_API_KEY}&q=${req.body.cityName}`)

  res.status(200).json(data)
  return

}
