import { setCityData } from "../src/hooks/setCityData";
import { connect } from "react-redux";
import { useState } from "react";


const DropdownList = (props) => {
    const { list, toggle, setToggle } = props;
    const isList = list.length <= 0 ? false : true

    const setCity = (city) => {
        setToggle(!toggle)
        const dataToSend = {
            key: city.Key,
            cityName: city.LocalizedName
        };
        setCityData(dataToSend)
    }



    return (
        <div className={`${isList && toggle === true ? "absolute" : "hidden"} grid z-[50]  top-16 bg-[#4a6c9b] p-1 rounded-md tr transition ease-in-out delay-150 duration-700 gap-y-1`}>
            {
                isList &&
                list?.map((city, index) => {
                    return (

                        <button onClick={() => setCity(city)} key={index} className="bg-[#6488bc]  px-3 py-3 text-white  z-10 flex gap-x-2 hover:bg-[#877ddf]">
                            <span>{city?.LocalizedName},</span>
                            <span>{city?.AdministrativeArea.LocalizedName},</span>
                            <span>{city?.Country.ID}</span>

                        </button>
                    )
                })

            }

        </div>
    )
};

export default connect()(DropdownList);