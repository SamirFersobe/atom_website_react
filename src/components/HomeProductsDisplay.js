import react from 'react'
import './style-main.css';

export default function HomeProductsDisplay() {
    const products =  [
        {
            id:1,
            itemImageSrc : "https://asset.conrad.com/media10/isa/160267/c1/-/en/002138864PI00/image.jpg?x=600&y=600",
            itemImageAlt : "placeholder",
            itemDescription : "ストロベリーパイ 3",
            itemPrice : 5000,
       },
        {
            id:2,
            itemImageSrc : "https://asset.conrad.com/media10/isa/160267/c1/-/en/002138864PI00/image.jpg?x=600&y=600",
            itemImageAlt : "placeholder",
            itemDescription : "ストロベリーパイ Zero",
            itemPrice : 3000,
        },
        {
            id:3,
            itemImageSrc : "https://asset.conrad.com/media10/isa/160267/c1/-/en/002138864PI00/image.jpg?x=600&y=600",
            itemImageAlt : "placeholder",
            itemDescription : " ストロベリーパイ Case ",
            itemPrice : 1100,
        },
        {
            id:4,
           itemImageSrc : "https://asset.conrad.com/media10/isa/160267/c1/-/en/002138864PI00/image.jpg?x=600&y=600",
           itemImageAlt : "placeholder",
           itemDescription : " ストロベリーパイ Extension Kit ",
           itemPrice : 15000,
        }
    ]

    return (
        <div　className = "feature">
            <div className = "feature-text">
                人気にある商品
            </div>
            <div className = "feature-container">
                {products.map((task) => (
                // Mapping each of the values in products to a specific format  which will get sent to the main page
                <div className="feature-box shadow">
                <img src= {task.itemImageSrc}></img>
                    <div className="feature-box-model">
                        {task.itemDescription}
                    </div>
                    <div className="feature-box-price">
                        {task.itemPrice}
                    </div>
                    <button id ={task.id} type="button" >
                        Add to Cart
                    </button><br></br>
                </div>
                
                ))}
            
            </div>
            <div className ="clearboth"></div>
        </div>
        
    )
}
