

// PICTURES
import BackroundPic from "../pictures/menu2.jpg";

export default function Page2() {


    return(
        <>
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
        </>
    )
}