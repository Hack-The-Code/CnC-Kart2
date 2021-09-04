let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Blue Check Shirt',
        tag: 'bluecheckshirt',
        price: 500,
        inCart: 0
    },
    {
        name: 'Black Check Shirt',
        tag: 'blackcheckshirt',
        price: 550,
        inCart: 0
    },
    {
        name: 'Green Check Shirt',
        tag: 'greencheckshirt',
        price: 530,
        inCart: 0
    },
    {
        name: 'Red Check Shirt',
        tag: 'redcheckshirt2',
        price: 500,
        inCart: 0
    },
    {
        name: 'Red Check Shirt',
        tag: 'redcheckshirt',
        price: 570,
        inCart: 0
    },
    {
        name: 'Red T-Shirt',
        tag: 'redtshirt',
        price: 590,
        inCart: 0
    },
    {
        name: 'Violet T-Shirt',
        tag: 'violettshirt',
        price: 592,
        inCart: 0
    },
    {
        name: 'Sky-Blue T-Shirt',
        tag: 'skybluetshirt',
        price: 530,
        inCart: 0
    },
    {
        name: 'Light Brown T-Shirt',
        tag: 'lightbrowntshirt',
        price: 560,
        inCart: 0
    },
    {
        name: 'Green T-Shirt',
        tag: 'greentshirt',
        price: 595,
        inCart: 0
    },
    {
        name: 'Green Kurta-Pajama Combo',
        tag: 'greenkurta',
        price: 700,
        inCart: 0
    },
    {
        name: '5 Colour T-Shirt Combo',
        tag: 'tshirtcombo',
        price: 1300,
        inCart: 0
    },
    {
        name: 'Blue Pant',
        tag: 'bluepant',
        price: 500,
        inCart: 0
    },
    {
        name: 'Brown Pant',
        tag: 'brownpant',
        price: 550,
        inCart: 0
    },
    {
        name: 'Green Pant',
        tag: 'greenpant',
        price: 530,
        inCart: 0
    },
    {
        name: 'Light Green Pant',
        tag: 'lgpant',
        price: 500,
        inCart: 0
    },
    {
        name: 'Grey Brown Pant',
        tag: 'gbpant',
        price: 570,
        inCart: 0
    },
    {
        name: 'Black Pant',
        tag: 'blackpant',
        price: 590,
        inCart: 0
    },
    {
        name: 'Grey Pant',
        tag: 'greypant',
        price: 592,
        inCart: 0
    },
    {
        name: 'Pink Pant',
        tag: 'pinkpant',
        price: 530,
        inCart: 0
    },
    {
        name: 'Sky Blue Pant',
        tag: 'skyblpant',
        price: 550,
        inCart: 0
    },
    {
        name: 'Yellow Skart',
        tag: 'yellowskart',
        price: 595,
        inCart: 0
    },
    {
        name: 'Brown Churidar Set',
        tag: 'brownchuridar',
        price: 700,
        inCart: 0
    },
    {
        name: 'Pink Saree',
        tag: 'pinksaree',
        price: 1300,
        inCart: 0
    },
    {
        name: 'Black Red Saree',
        tag: 'blackredsaree',
        price: 500,
        inCart: 0
    },
    {
        name: 'Blue Saree',
        tag: 'bluesaree',
        price: 550,
        inCart: 0
    },
    {
        name: 'Red Shoe',
        tag: 'redshoe',
        price: 530,
        inCart: 0
    },
    {
        name: 'Brown Shoe',
        tag: 'brownshoe',
        price: 500,
        inCart: 0
    },
    {
        name: 'Yellow Shoe',
        tag: 'yellowshoe',
        price: 570,
        inCart: 0
    },
    {
        name: 'Pink Shoe',
        tag: 'bluesaree',
        price: 590,
        inCart: 0
    },
    {
        name: 'Grey Shoe',
        tag: 'greyshoe',
        price: 592,
        inCart: 0
    },
    {
        name: 'Pink Cap',
        tag: 'pinkcap',
        price: 530,
        inCart: 0
    },
    {
        name: 'Pink Cap',
        tag: 'pinkcap2',
        price: 560,
        inCart: 0
    },
    {
        name: 'Violet Cap',
        tag: 'violetcap',
        price: 595,
        inCart: 0
    },
    {
        name: 'Brown Ladis Bag',
        tag: 'brownlbag',
        price: 700,
        inCart: 0
    },
    {
        name: 'Blue Ladis Bag',
        tag: 'bluelbag',
        price: 1300,
        inCart: 0
    },
    {
        name: 'Blue Dial Watch',
        tag: 'bluelbwatch',
        price: 500,
        inCart: 0
    },
    {
        name: 'Black Watch',
        tag: 'blackwatch',
        price: 550,
        inCart: 0
    },
    {
        name: 'Mi Smart Band 4',
        tag: 'smartband',
        price: 530,
        inCart: 0
    },
]

for (let i=0;i<carts.length;i++){

    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers() {
    let productNumbers =localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumbers(product){

    let productNumbers =localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    console.log(typeof productNumbers);
    productNumbers=parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers +1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
function setItems(product){
    
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems['bluecheckshirt']
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem("totalCost",product.price);
    }
}
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartpage =document.querySelector(".cart-page");
    if(cartItems && cartpage){
        cartpage.innerHTML = '';
        Object.values(cartItems).map(item => {
            cartpage.innerHTML += `
            <div class = "product">
                <ion-icon name="trash"></ion-icon>
                <img src="res/products/${item.tag}.png">
                <span>${item.name}</span>
            `
        });
    }
}
onLoadCartNumbers();
displayCart();