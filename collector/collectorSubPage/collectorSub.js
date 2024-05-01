const collectorSub = [
    {
        "mainImage": "../../asstes/image/collector/c1.webp",
        "subImage": [
            "../../asstes/image/collector/collectorSubPage/c1first.webp",
            "../../asstes/image/collector/collectorSubPage/c1second.webp",
            "../../asstes/image/collector/collectorSubPage/c1third.webp",
            "../../asstes/image/collector/collectorSubPage/c1four.webp",
            "../../asstes/image/collector/collectorSubPage/c1five.webp",
        ],
        "name": "Loom Calendar",
        "price": 2999.00,
        "shipping": "FREE SHIPING | LIMITED EDITION",
        "description": "At India Craft Week every new year has a purpose, 2023 was dedicated to folk artists but 2024 is dedicated to our weavers. Introducing the LOOM Calendar, a tribute to our carpet weavers. Let's remember them every day, month & year and do something for them.Order your Loom Calendar now! Once 2024 is over, convert it into 2025 calendar, or photo album or a scroll painting! Zero waste, sustainable calendar for your home and office!"

    }
]


function collectorSubData (collectorSub) {
    let str = ''
    collectorSub.map((product) => {
        str+= `<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3  text-center">
        <img src="${product.mainImage}" class="mainImg" alt="">
        <div class="mt-4 mb-4">
            <img src="${product.subImage}" class="smImage me-3" alt="">
            <img src="${product.subImage}" class="smImage me-3" alt="">
            <img src="${product.subImage}" class="smImage me-3" alt="">
            <img src="${product.subImage}" class="smImage me-3" alt="">
            <img src="${product.subImage}" class="smImage me-3" alt="">
        </div>
    
    </div>
    <div class="col-xl-6 col-lg-6 col-md-12 mt-md-3 col-sm-12 mt-sm-3 ps-5">
        <h2>${product.name}</h2>
        <p class="fs-5 mt-3">₹ ${product.price}</p>
        <p>${product.shipping}</p>
        <p>Quantity</p>
        <form action="">
            <input type="number" class="box" placeholder="1">
        </form>
        <br><br>
        <div class="d-flex">
            <button class="btnWhite me-4"><a href="http://127.0.0.1:5500/payment%20form1/customer.html">— BUY NOW —</a></button>
            <button class="btnBlue"><a href="#">— ADD TO CART —</a></button>
        </div>
        <br>
        <p style="font-size: 18px;">${product.description}</p>
    </div>`
    })
    document.getElementById('subProduct').innerHTML = str
}
collectorSubData(collectorSub)