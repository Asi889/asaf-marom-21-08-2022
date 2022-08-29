import { connect, useStore, useSelector } from "react-redux";
import Faves from "../../components/Faves"
import SwiperFaves from "../../components/SwiperFaves"

const Favorites = () => {
    
    const store = useStore();
    const colorMode = useSelector(() => store.getState().weather.darkMode);
    const favorites = useSelector(() => store.getState().weather.favorites);
  
    return (
        <div className={`${colorMode ? "bg-[#282d78]" : "bg-white"} h-screen transition	duration-700 ease-in-out`}>
            {favorites?.length > 1 ? <SwiperFaves /> : <Faves /> }  
        </div>
    )
};

export default connect()(Favorites);