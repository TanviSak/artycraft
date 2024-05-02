const ShawlsStoles = [
    {
        "images": "../asstes/image/Shawls&Stoles/1.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Kutchi Wool Shawl-Sand",
        "price": 19199.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/2.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Kutchi Wool Shawl-Shadow",
        "price": 8499.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/3.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Kutchi Wool Shawl-Grey Diamond",
        "price": 19199.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/4.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Kutchi Wool Shawl-Grey Brown",
        "price": 10799.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/5.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Kutchi Wool Shawl-Purple",
        "price": 7599.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/6.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Kutchi Wool Shawl-Blue",
        "price": 10600.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/7.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Kutchi Wool Shawl-Mehroon",
        "price": 7599.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/8.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Bandhani- Gajji Silk Dupatta Red Stripes",
        "price": 7600.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/9.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Bandhani- Gajji Silk Dupatta Purple Stripes",
        "price": 7600.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/10.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Bandhani- Gajji Silk Dupatta Red leaf",
        "price": 5950.00

    },
    {
        "images": "../asstes/image/Shawls&Stoles/11.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Bandhani- Gajji Silk Dupatta Purple Gold",
        "price": 5950.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/12.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Bandhani- Gajji Silk Dupatta Peacock Green",
        "price": 7600.00
    },
    {
        "images": "../asstes/image/Shawls&Stoles/13.webp", 
        "shipping": "FREE SHIPPING",
        "name": "Bandhani- Gajji Silk Duppatta Fuscia",
        "price": 6999.00
    },
    
];


function ShawlsStolesMainData (collectorMain){
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
collectorMainData(ShawlsStoles)