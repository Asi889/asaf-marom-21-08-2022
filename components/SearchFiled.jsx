import { useState } from "react";
import Image from 'next/image';
import search from "../src/assets/search.png";
import DropdownList from "./DropdownList";
import { connect, useStore, useDispatch, useSelector } from "react-redux";
import { getCityKey } from "../src/hooks/getCityKey"


const SearchFiled = () => {
    const [location, setLocation] = useState("");
    const [list, setList] = useState([]);
    const [toggle, setToggle] = useState(false);
    const store = useStore();
    const state = useSelector(() => store.getState());
    const [errorMsg, setErrorMsg] = useState(false);

    function allLetter(inputtxt) {
        var letters = /^[A-Za-z\s]+$/;
        if (inputtxt.match(letters)) {
            return true;
        }

        return false;
    }

    const setLocationInput1 = async (location1) => {
        let languageCheck = allLetter(location)
        if (!languageCheck) {
            setErrorMsg("Must use English letter only")
            setLocation("")
            setTimeout(() => {
                setErrorMsg(false)

            }, 2000);
            return
        }


        setToggle(!toggle);
        const keys = await getCityKey(location)
        if (!keys) {
            setErrorMsg("No Such City")
            setTimeout(() => {
                setLocation("")
                setErrorMsg(false)

            }, 1500);
            return
        }
        
        setList(keys)

    }

    return (

        <div className="search mb-4 text-center flex justify-center gap-2 h-fit ">

            <div className="grid relative">
                <div className={`${errorMsg ? "block" : "hidden"} text-red-500 text-lg font-semibold`}>{errorMsg}</div>
                <input className={`${state?.weather?.darkMode ? "bg-[#9086e8] " + " text-white placeholder:text-white" : "bg-[#6f65cc] text-gray-300 placeholder:text-gray-300 "} ${errorMsg ? "placeholder:text-red-400 font-semibold " : ""} outline-none border-none rounded-2xl p-4  text-lg text-center `}
                    onChange={(e) => setLocation(e.target.value)} value={location} type="text" placeholder="Search city" name="city" />
                <DropdownList setToggle={setToggle} toggle={toggle} list={list} />
            </div>

            <button className={`${state?.weather?.darkMode ? "bg-[#9086e8]" : "bg-[#6f65cc]"} w-14 h-full bg-[#6f65cc] p-3 rounded-xl `} onClick={() => setLocationInput1()} >
                <Image src={search} alt="" />
            </button>

        </div>
    )
};

export default connect()(SearchFiled);