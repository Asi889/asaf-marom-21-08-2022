import { connect, useStore, useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import Faves from "../../components/Faves"

const Favorites = () => {
   
    return (
        <div>
            <Faves />
        </div>
    )

};

export default connect()(Favorites);