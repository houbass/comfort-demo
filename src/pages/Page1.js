import { useEffect, useState } from "react";

// PICTURES
import BackroundPic from "../pictures/menu1.jpg";
import TablePic from "../pictures/table.png";

// ROUTER
import { useNavigate, Link } from 'react-router-dom';

// HELPING FUNCTIONS
import { loadAllImages } from "../functions/HelpingFunctions";


export default function Page1() {

    // ROUTER
    const navigate = useNavigate();

    // STATES
    const [allImagesLoaded, setAllImagesLoaded] = useState("0");
    const imageUrls = [BackroundPic, TablePic];


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
                <div 
                className="main-container">
                    
                    <div className="menu-1-container" >
                        <span className="menu-text-header mt-3 pb-1">Wardrobe</span>

                        <Link 
                        to={"/2"}
                        className="menu-text-container"
                        >
                            <span className="menu-text">MOOD</span>
                        </Link>

                        <Link 
                        to={"/2"}
                        className="menu-text-container"
                        >
                            <span className="menu-text">MOOD REVISTED</span>
                        </Link>

                        <Link 
                        to={"/2"}
                        className="menu-text-container"
                        >
                            <span className="menu-text">ACTUAL WARDROBE</span>
                        </Link>

                        <Link 
                        to={"/2"}
                        className="menu-text-container"
                        >
                            <span className="menu-text">DIR SELECTION</span>
                        </Link>
                    </div>

                    <div className="table-menu" >
                        <img width="150" height="auto" src={TablePic}></img>
                    </div>

                    <div className="table-menu-container" >   
                        <Link to={"/2"} className="menu-text-2">
                            LOCATIONS
                        </Link>             
                        
                        <Link to={"/2"} className="menu-text-2">
                            PROD. DESIGN
                        </Link>    
                        
                        <Link to={"/2"} className="menu-text-2">
                            CASTING
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}