
import { useEffect, useState } from "react";

// PICTURES
import BackroundPic from "../pictures/landingPage.jpg";

// ROUTER
import { useNavigate, Link } from 'react-router-dom';


// HELPING FUNCTIONS
import { loadAllImages } from "../functions/HelpingFunctions";


export default function LandingPage() {

    // ROUTER
    const navigate = useNavigate()

    // STATES
    const [allImagesLoaded, setAllImagesLoaded] = useState("0");
    const imageUrls = [BackroundPic];

    //WAIT TO LOAD ALL IMAGES
    useEffect(() => {
        async function loadImages() {
            try{
                const loadingState =  await loadAllImages(imageUrls);
                setAllImagesLoaded(loadingState);
            }
            catch(err) {
                console.log(err)
            }
        }
        loadImages()
        
        // eslint-disable-next-line
    }, []);


    return(
        <>
        <div 
        style={{
            opacity: allImagesLoaded,
            transition: "1s"
        }}
        >
            <div className="background-pic flex-col align-center">
                <img width={2311.5} height={1300} src={BackroundPic}></img>
            </div>
        </div>
        </>
    )
}