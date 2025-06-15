import React from "react";
import {arrow} from "../assets/icons"
import { Link } from "react-router-dom";

const HomeInfo = ({currentStage}) =>{
    if(currentStage ===1){
    return(
        <div>
            <h1 className="sm:text-xl sm:leading-snug text-center font-bold neo-brutalism-blue py-4 px-8 text-white mx-5">
                Hi, I'm <span className="text-green-300">Sanjith N</span> <br/>
                <span className="font-semibold mx-2 text-white">A Front-End Developer</span>
             </h1>
        </div>
    )}

    //about
    if(currentStage ===2){
        return(
            <div className="info-box">
                <p className="font-medium sm:text-xl text-center">
                    Fresher, worked as a Freelancer <br/>
                    and pickedup many skills among the way
                </p>

                <Link to="/about" className="neo-brutalism-white neo-btn">Learn More
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"></img>
                </Link>
            </div>
        )}

        //projects
        if(currentStage ===3){
            return(
                <div className="info-box">
                    <p className="font-medium sm:text-xl text-center">
                        Led multiple projects to success<br/>
                        Curious about the impact?
                    </p>
    
                    <Link to="/projeects" className="neo-brutalism-white neo-btn1 text-black">Visit my portfolio
                        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"></img>
                    </Link>
                </div>
            )}

        //contact
        if(currentStage ===4){
            return(
                <div className="info-box">
                    <p className="font-medium sm:text-xl text-center">
                        Need a project done or looking for a dev?<br/>
                        I'm just a few keystokes away
                    </p>
    
                    <Link to="/contact" className="neo-brutalism-white neo-btn mx-auto">Let's talk
                        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"></img>
                    </Link>
                </div>
            )}

            return null;
}

export default HomeInfo;