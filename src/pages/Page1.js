

// PICTURES
import BackroundPic from "../pictures/mainPage.jpg";
import TablePic from "../pictures/table.png";


// ROATER
import { useNavigate, Link } from 'react-router-dom';


export default function Page1() {

    // ROATER
    const navigate = useNavigate()


    return(
        <>
        <div className="background-pic flex-col align-center">
            <img width={2311.5} height={1300} src={BackroundPic}></img>
        </div>


        <div className="flex-col align-center" >
            <div 
            className="main-container">
                
                <div className="menu-1-container" >
                    <span className="menu-text-header mt-3 pb-1">Wardrobe</span>

                    <a 
                    className="menu-text-container"
                    onClick={() => {navigate("/2")}}
                    >
                        <span className="menu-text">MOOD</span>
                    </a>

                    <a 
                    className="menu-text-container"
                    onClick={() => {navigate("/2")}}
                    >
                        <span className="menu-text">MOOD REVISTED</span>
                    </a>

                    <a 
                    className="menu-text-container"
                    onClick={() => {navigate("/2")}}
                    >
                        <span className="menu-text">ACTUAL WARDROBE</span>
                    </a>

                    <a 
                    className="menu-text-container"
                    onClick={() => {navigate("/2")}}
                    >
                        <span className="menu-text">DIR SELECTION</span>
                    </a>
                </div>

                <div className="table-menu" >
                    <img width="150" height="auto" src={TablePic}></img>
                </div>

                <div className="table-menu-container" >   
                    <a onClick={() => {navigate("/2")}} >
                        <span className="menu-text-2">LOCATIONS</span>
                    </a>             
                    
                    <a onClick={() => {navigate("/2")}} >
                        <span className="menu-text-2">PROD. DESIGN</span>
                    </a>     
                    
                    <a onClick={() => {navigate("/2")}} >
                        <span className="menu-text-2">CASTING</span>
                    </a>
                </div>

            </div>
        </div>
        </>
    )
}