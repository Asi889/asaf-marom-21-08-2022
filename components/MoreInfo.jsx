/* eslint-disable @next/next/no-img-element */
import Image from 'next/future/image';
import addtofavorites from "../src/assets/addtofavorites.png"
import { connect, useStore, useDispatch, useSelector } from "react-redux";
import { addToFavorites, setFavorites, toggleIsSaved } from "../src/redux/actions/clienActions"

const MoreInfo = () => {
    const store = useStore();
    const state = useSelector(() => store.getState());
    const favorites = useSelector(() => store.getState().weather?.favorites);
    const toggle = useSelector(() => store.getState().weather?.city?.info?.current?.isSaved);
    let icon1 = useSelector(() => store.getState().weather?.city?.info?.current?.WeatherIcon)
    // const [fav, setFav] = useState(store.getState());
    const dispatch = useDispatch();

    const addFavorites = () => {
        const ifExsitest = state.weather.favorites.find((city) => city.current.id === state.weather.city.info.current.id)

        dispatch(toggleIsSaved(!toggle));

        if (ifExsitest) {
            let index1 = state.weather.favorites.indexOf(ifExsitest)
            const newFavoritesState = [...favorites]
            newFavoritesState.splice(index1, 1)
            dispatch(setFavorites(newFavoritesState))
            return
        }
        
        dispatch(addToFavorites({ ...state?.weather?.city?.info, current:{...state?.weather?.city?.info.current, isSaved: !toggle } }))
    }

    const getIcon = (num) => {
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('../src/assets', false, /\.(png|jpe?g|svg)$/));

        return images[num + ".png"]?.default?.src
    }

    const myLoader = ({ src, width, quality }) => {
        return getIcon(state?.weather?.city?.info?.current?.WeatherIcon)
    }
    
    return (
        <div className="lower-data relative overflow-hidden w-full  rounded-b-xl p-4 grid">
            <div className="flex justify-between">
                <h1 className={`more-info-label ${state?.weather?.darkMode ? "text-[#4C52AD] font-semibold" : "text-white"} text-xl `}>More Information</h1>
                <button onClick={() => addFavorites()} className={`${state?.weather?.city?.info?.current?.isSaved ? "opacity-100" : "opacity-70"}  absolute right-5 top-3 w-10 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 active:w-12 active:h-12`}>
                    <Image src={addtofavorites} alt="" />
                </button>
            </div>
            <div className={`more-info-container ${state?.weather?.darkMode ? "bg-[#a8a0ee]" : "bg-[#6f65cc]"}  rounded-b-lg mt-4 p-[10px] flex flex-col justify-center gap-y-10 items-center `}>
                <div className="">
                    <img src={getIcon(icon1)} className="w-24 h-16" alt="" />
                </div>
                <h1 className={`${state?.weather?.darkMode ? "text-[#4C52AD]" : "text-white"} text-3xl font-semibold`}>{state?.weather?.city?.info?.current?.WeatherText}</h1>
            </div>
        </div>
    )
};

export default connect()(MoreInfo);