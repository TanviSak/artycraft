const collectorMain = [
    {
        "images": "../asstes/image/collector/c1.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Loom Calendar",
        "price": 2999.00
    },
    {
        "images": "../asstes/image/collector/c2.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Koftgiri Bucket Set - Gold & Silver Mix",
        "price": 25700.00
    },
    {
        "images": "../asstes/image/collector/c3.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Koftgiri Pen - Silver Work",
        "price": 7100.00
    },
    {
        "images": "../asstes/image/collector/c4.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Dhokra Casting - Nandi",
        "price": 3799.00
    },
    {
        "images": "../asstes/image/collector/c5.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Dhokra Casting - Deer (Single Piece)",
        "price": 3199.00
    },
    {
        "images": "../asstes/image/collector/c6.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Miniature Painting - Shiva and Sati",
        "price": 480000.00
    },
    {
        "images": "../asstes/image/collector/c7.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Miniature Painting - Maharaas",
        "price": 384800.00
    },
    {
        "images": "../asstes/image/collector/c8.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Miniature Painting - Ram Darshan",
        "price": 384800.00
    },
    {
        "images": "../asstes/image/collector/c9.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Miniature Painting - The Mehfil",
        "price": 480000.00
    },
    {
        "images": "../asstes/image/collector/c10.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Gond Painting - Gajanan",
        "price": 281399.00

    },
    {
        "images": "../asstes/image/collector/c11.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Gond Painting - Baghraj",
        "price": 144300.00
    },
    {
        "images": "../asstes/image/collector/c12.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Sandalwood Carving - Doll",
        "price": 110000.00
    },
    {
        "images": "../asstes/image/collector/c13.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Sandalwood Carving - Sitar",
        "price": 149000.00
    },
    
];


function collectorMainData (collectorMain){
    let str = ''
    collectorMain.map((product) => {
        str += `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-2">
        <div class="text-center"> 
            <a href="./collectorSubPage/collectorSub1.html"><img src="${product.images}" alt=""></a>
        </div>
        <div class="item">
            <div class="t1">${product.shipping}</div>
            <div class="t2">${product.name}</div>
            <div class="pr">₹ ${product.price}</div>
        </div>
    </div>`
    })
    document.getElementById('product').innerHTML = str
}
collectorMainData(collectorMain)