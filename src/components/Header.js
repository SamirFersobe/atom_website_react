import React from 'react'

export default function Header() {

    
    return (
        <nav>
		<ul>
        <li id="icon"><a href= "/home" ><img src="./images/atom-logo.png" alt="logo"></img></a></li>
        <li id="cart"><a href= "/cart"><img src="./images/icon_cart.png" alt="cart"></img></a></li>
		{/* //Refactor */}
  				<li className="menu-item"><a href="/contact">連絡</a></li>
  				<li className="menu-item"><a href="/store">商品</a></li>
  				<li className="menu-item"><a href="/about">弊社</a></li>
  				<li id="underline"></li>
			</ul>
		</nav>
    )
}
