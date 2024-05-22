

// PICTURES
import BackroundPic from "../pictures/mainPage.png";
import TablePic from "../pictures/table.png";


export default function MainPage() {


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

                    <div className="menu-text-container">
                        <span className="menu-text">MOOD</span>
                    </div>

                    <div className="menu-text-container">
                        <span className="menu-text">MOOD REVISTED</span>
                    </div>

                    <div className="menu-text-container">
                        <span className="menu-text">ACTUAL WARDROBE</span>
                    </div>

                    <div className="menu-text-container">
                        <span className="menu-text">DIR SELECTION</span>
                    </div>
                </div>

                <div className="table-menu" >
                    <img width="150" height="auto" src={TablePic}></img>
                </div>

                <div 
                className="table-menu-container" >                
                    <span className="menu-text-2">LOCATIONS</span>
                    <span className="menu-text-2">PROD. DESIGN</span>
                    <span className="menu-text-2">CASTING</span>
                </div>

            </div>
        </div>
        </>
    )
}