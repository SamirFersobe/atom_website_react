

import React from 'react'

export default function HeaderBanner(props) {

    if(props.type == 'main'){
        require('./style-main.css')
        console.log('main stylesheet')
        return (
            <div className="header-banner">
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
    else if(props.type == 'about'){
        require('./style-about.css')
        console.log("about stylesheet")
        return (
        <div class="header-banner">
            <div class="banner-text-heading">弊社について</div>
       </div>
        )
    }else if(props.type == 'contact'){
        require('./style-contact.css')
        console.log("contact's stylesheet")
        return(
            <div class="header-banner">
      		  <div class="banner-text-heading">会話を開始いたします。</div>
   		    </div>
        )

    }
    else{
        console.log("Default so no stylesheet")
        return(
            <div className="header-banner">
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
