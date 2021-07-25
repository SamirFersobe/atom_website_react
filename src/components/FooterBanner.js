import './FooterBanner.css'
import React from 'react'

export default function FooterBanner(props) {

    if(props.type == "main"){
        return (
            <div className ="clearboth">
                <div className= "footer-banner home-footer-banner">
                    <div className="footer-banner-text"></div>
                </div>
                
            </div>
        )
    }else if(props.type =="about"){
        return(
            <div className ="clearboth">
                <div className= "footer-banner about-footer-banner">
                    <div className="footer-banner-text"></div>
                </div>
                
            </div>
        )

    }else if(props.type == "contact"){
        return(
            <div className ="clearboth">
                <div className= "footer-banner contact-footer-banner">
                    <div className="footer-banner-text"></div>
                </div>
                
            </div>
        )
    }else{


    return (
        <div className="clearboth">
            <div className="footer-banner">
                <div className="banner-text"> <h1>DEFAULT</h1>
                </div> 
            </div> 
        </div>
    )

}
}
