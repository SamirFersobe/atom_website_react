import react from 'react'
import './HomeProductsDisplay.css';
import FeatureBox from './FeatureBox';
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
           itemImageSrc : "/images/Strawberry_Pi_Case copy.jpg",
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
                {products.map((task) => ( <FeatureBox {...task} />))}
            
            </div>
            <div className ="clearboth"></div>
        </div>
        
    )
}
