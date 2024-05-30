
import { useEffect, useState } from "react";


// PICTURES
import BackroundPic from "../pictures/menu2.jpg";

// HELPING FUNCTIONS
import { loadAllImages } from "../functions/HelpingFunctions";




export default function Page2() {

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


            <div className="flex-col align-center" >
                <div className="main-container">
                    
                    <div className="menu-2-container" >
                        <span className="menu-text-header mt-3 pb-1">Project name</span>

                        <div className="menu-text-container">
                            <span className="menu-text">LOCATIONS</span>
                        </div>

                        <div className="menu-text-container">
                            <span className="menu-text">PROD. DESIGN</span>
                        </div>

                        <div className="menu-text-container">
                            <span className="menu-text">WARDROBE</span>
                        </div>

                        <div className="menu-text-container">
                            <span className="menu-text">CASTING</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}