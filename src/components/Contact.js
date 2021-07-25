import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        
<div className="feature-contact">
<div className="feature-container-contact">
    <div className="feature-box-contact">
        <div className="feature-box-model-contact"><p>電話番号</p></div>
        <div className="feature-box-text-contact"><p className="feature-box-text-adjust-contact">090-0912-0023</p></div>
    </div>
    <div className="feature-box-contact">
        <div class="feature-box-model-contact"><p>住所</p></div>
        <div class="feature-box-text-contact"><p>　　大阪府大阪市天王寺区上本町　６丁目８番４号　</p></div>
    </div>
    <div className="feature-box-contact">
        <div className="feature-box-model-contact">
            <p>フォローしてください！</p>
        </div>
        <div className="feature-box-text-contact">
            <p className="feature-box-text-adjust-contact">
                <a href="#facebook"><img src="./images/facebook_social_media.png" alt="facebook"></img></a>
                <a href="#facebook"><img src="./images/twitter_social_media.png" alt="facebook"></img></a>
                <a href="#facebook"><img src="./images/google_plus_social_media.png" alt="facebook"></img></a>
            </p>
        </div>
    </div>
             
            <div className="clearboth"></div>
            <div className="feature-title-contact" >弊社にメッセージを送ります。</div>
            </div>
    </div>

    )
}
