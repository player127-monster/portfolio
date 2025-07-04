import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () =>{
    return(
        <section className="footer font-poppins">
        <hr  className="border-slate-200"/>

        <div className="footer-container">
            <p>
                &copy;2025 <strong>Sanjith N</strong>. All rights reserved.
            </p>

            <div className="flex gap-3 justify-center items-center">
                {socialLinks.map((link,index)=>{
                    return(
                        <Link key={index} to={link.link} target="_blank">
                            <img src={link.iconUrl} alt={link.name} className="w-6 h-6 object-contain"/> 
                        </Link>
                    );
                })

                }
            </div>
        </div>
        </section>
    )


}

export default Footer;