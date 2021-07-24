import React from 'react'

export default function Contact() {
    return (
        
<div className="feature">
<div className="feature-container">
    <div className="feature-box">
        <div className="feature-box-model"><p>電話番号</p></div>
        <div className="feature-box-text"><p className="feature-box-text-adjust">090-0912-0023</p></div>
    </div>
    <div className="feature-box">
        <div class="feature-box-model"><p>住所</p></div>
        <div class="feature-box-text"><p>天王寺区上本町９－０－１</p> <br></br>大阪</div>
    </div>
    <div className="feature-box">
        <div className="feature-box-model">
            <p>フォローしてください！</p>
        </div>
        <div className="feature-box-text">
            <p className="feature-box-text-adjust">
                <a href="#facebook"><img src="./images/facebook_social_media.png" alt="facebook"></img></a>
                <a href="#facebook"><img src="./images/twitter_social_media.png" alt="facebook"></img></a>
                <a href="#facebook"><img src="./images/google_plus_social_media.png" alt="facebook"></img></a>
            </p>
        </div>
    </div>
             
            <div className="clearboth"></div>
            <div className="feature-title" >弊社にメッセージを送ります。</div>
            </div>
    </div>

    )
}
