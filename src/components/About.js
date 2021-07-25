import './About.css'

export default function About() {
    return (
		// Refactor into a multiple components for reusability
        <div class="feature-about">
   			<div class="feature-text-about"></div>
   			<div class="feature-container-about">
   				<div class="feature-box-about">
   					<img src="./images/icon_teach.png" alt="teach"></img>
   					<div className="feature-box-model-about"><p>教えて</p></div>
   					<div className="feature-box-text-about"><p>中学生でも使える技術。</p></div>
   				</div>
				<div class="feature-box-about">
   					<img src="./images/icon_learn.png" alt="learn"></img>
   					<div className="feature-box-model-about"><p>学んで</p></div>
   					<div className="feature-box-text-about"><p>最もハイテックな技術を試します。</p></div>
   				</div>
   				<div class="feature-box-about">
   					<img src="./images/icon_create.png" alt="create"></img>
   					<div className="feature-box-model-about"><p>作って</p></div>
   					<div className="feature-box-text-about"><p>小さなものから大きなものまで<br></br>なんでも作られます。</p></div>
   			    </div> 
   			<div className="clearboth"></div>
   			<div className="feature-title-about">未来はどうになりますか？</div>
   			<div className="feature-text-bottom-about"><p>僕たちの目標は人類の進歩です。そのため、最新の技術を駆使し、最高品質の製品を生み出しています。<br></br>
        </p></div>
   		</div>
           </div>
    )
}
