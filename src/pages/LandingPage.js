// PICTURES
import BackroundPic from "../pictures/landingPage.jpg";

// ROATER
import { useNavigate, Link } from 'react-router-dom';


export default function LandingPage() {

    // ROATER
    const navigate = useNavigate()


    return(
        <>
        <div className="background-pic flex-col align-center">
            <img width={2311.5} height={1300} src={BackroundPic}></img>
        </div>

        </>
    )
}