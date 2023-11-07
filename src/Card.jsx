import React from 'react'

const Card = () => {
  return (
    <div class="container d-flex justify-content-evenly gap-5 align-items-center mt-5">
    <div class="card" style={{width: "18rem;"}}>
  <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_404/https://mcdonalds.com.pk/wp-content/uploads/2022/07/mccafe-dsk-en.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>
<div class="card" style={{width: "18rem;"}}>
<img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_404/https://mcdonalds.com.pk/wp-content/uploads/2022/07/mcdelivery-574x249-en.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-warning">Go somewhere</a>
</div>
</div>
<div class="card" style={{width: "18rem;"}}>
<img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_404/https://mcdonalds.com.pk/wp-content/uploads/2022/07/uae-our-app-feature-callout-desktop.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-warning">Go somewhere</a>
</div>
</div>
</div>
  )
}

export default Card