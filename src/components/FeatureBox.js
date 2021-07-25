import './FeatureBox.css'
import React from 'react'

export default function FeatureBox(task) {
    return (
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
    )
}
