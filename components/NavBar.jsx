/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { connect, useStore, useSelector, useDispatch } from "react-redux";
import { toggleDarkmode } from '../src/redux/actions/clienActions';


const NavBar = () => {
    const store = useStore();
    const state = useSelector(() => store.getState().weather.darkMode);
    const dispatch = useDispatch();
    const toggleModeDark = () => {
        dispatch(toggleDarkmode(!state))
    }

    return (
        <div className={`nav bar bbc h-20 w-screen ${state ? "bg-[#a7acf6]" : "bg-[#4C52AD]"}  pt-5 pl-5`}>

            <div className="flex gap-x-6  transition justify-between">
                <div className="flex gap-x-6 ">

                    <Link href="/" >
                        <a className={`${state ? "text-[#4C52AD]" : "text-white"}  text-2xl font-semibold hover:text-[#ededf2] active:text-[25px]`} >Home</a>
                    </Link>

                    <Link href="/favorites" >
                        <a className={`${state ? "text-[#4C52AD]" : "text-white"} text-2xl font-semibold hover:text-[#ededf2]`} >Favorites</a>
                    </Link>
                </div>

                <div className="grid items-center pr-14 md:pr-[40px]">
                    <div onClick={toggleModeDark} id="toggle" className={`h-max  ${state ? "bg-[#1a202c]" : "bg-white"} `}>
                        <div className={` ${state ? "toggle-inner bg-white" : "toggle-inner toggle-active bg-[#1a202c]"} `} />
                    </div>

                    <h1 className={`${state ? "text-[#4C52AD] font-semibold" : "text-white"}`}>Dark mode</h1>
                </div>
            </div>
        </div>
    )
};

export default NavBar;