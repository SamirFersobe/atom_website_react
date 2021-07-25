
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
    <ul className="footer-list">
        <li id="follow">フォロー</li>
        <li className="social"><a href="#facebook"><img src="./images/facebook_social_media.png" alt="facebook"></img></a></li>
        <li className="social"><a href="#twitter"><img src="./images/twitter_social_media.png" alt="twitter"></img></a></li>
        <li className="social"><a href="#google"><img src="./images/google_plus_social_media.png" alt="google"></img></a></li>
        <li className="footer-menu-item"><a href="contact.html">連絡</a></li>
        <li className="footer-menu-item"><a href="store.html">商品</a></li>
        <li className="footer-menu-item"><a href="about.html">弊社</a></li>
    </ul>
    <p>&#x40; 2018 （株）Atom  版権所有.</p>

  </div> 
  );
}


export default Footer;