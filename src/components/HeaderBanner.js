
import './HeaderBanner.css'
import React from 'react'

export default function HeaderBanner(props) {

    if(props.type == 'main')
    {
    
        console.log('main stylesheet')
        return (
            // Inside of className define 2 or more classes for more accuracy  i.e className = "header-banner main-banner"
            // Compile css into one file per component for best practices
            <div className="header-banner home-banner" >
                <div className="banner-text-heading">新商品開発</div>
                <div className="banner-text">教えて、学んで、作って、僕の商品と！</div> 
        
                <div className="content">
                    <form action="store.html">
                    <input type="submit"  id="boton" value="買い物する"></input>
                    </form>
                </div>
           </div>
            )
    }
    else if(props.type == 'about')
    {
        console.log("about stylesheet")
        return (
        <div class="header-banner about-banner">
            <div class="banner-text-heading">弊社について</div>
       </div>
        )

    }else if(props.type == 'contact'){
        console.log("contact's stylesheet")
        return(
            <div class="header-banner contact-banner">
      		  <div class="banner-text-heading">会話を開始いたします。</div>
   		    </div>
        )

    }
    else{
        console.log("Default so no stylesheet")
        return(
            <div className="header-banner home-banner">
                <div className="banner-text-heading">DEFAULT</div>
                <div className="banner-text">教えて、学んで、作って、僕の商品と！</div> 
        
                <div className="content">
                    <form action="store.html">
                    <input type="submit"  id="boton" value="買い物する"></input>
                    </form>
                </div>
           </div>
        )
    }

}
