const data = [
    
    {
        id:15,
        name:'Rolex',
        img:'https://th.bing.com/th/id/OIP.JvHN6R_YC2RwdNA67hQsHQHaI4?pid=ImgDet&rs=1',
        price:78,
        cat:"luxary"
    }, {
        id: 1,
        name: "Invicta Men's Pro Diver",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        cat: "Dress",
      },
      {
        id: 11,
        name: "Invicta Men's Pro Diver 2",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        cat: "Dress",
      },
      {
        id: 2,
        name: "Timex Men's Expedition Scout ",
        img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 40,
        cat: "Sport",
      },
      {
        id: 3,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 200,
        cat: "Luxury",
      },
      {
        id: 4,
        name: "Casio Classic Resin Strap ",
        img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 16,
        cat: "Sport",
      },
      {
        id: 5,
        name: "Garmin Venu Smartwatch ",
        img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
        price: 74,
        cat: "Casual",
      },
    {
        id:16,
        name:'Rolex',
        img:'https://th.bing.com/th/id/OIP.1FY_hmuFYVGuoA-9QhV4PAHaHa?pid=ImgDet&w=900&h=900&rs=1',
        price:89,
        cat:"luxary"
    },
    {
        id:17,
        name:'Rolex',
        img:'https://th.bing.com/th?id=OIP.vAffMjpUPlKiFrXRjsxOuwHaKY&w=211&h=296&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        price:99,
        cat:"luxary"
    },
    {
        id:18,
        name:'Rolex',
        img:'https://th.bing.com/th/id/OIP.-A1man5X7PuQyv9O5gp3PQHaE7?pid=ImgDet&rs=1',
        price:187,
        cat:"luxary"
    },
]

const productContainer = document.querySelector('.products')
const searchbar = document.querySelector('.search')
const CategoryContsiner = document.querySelector('.cats')
const Pricerange = document.querySelector('.priceRange')
const PriceValue = document.querySelector('.priceValue')

const displalProject = (filteredproduct)=>{
    productContainer.innerHTML = filteredproduct.map((product)=>
           ` <div class="product">
           <img
           src=${product.img}
           alt=""
           />
           <span class="name">${product.name}</span>
           <span class="priceText">$${product.price}</span>
         </div>`
    ).join('')
    
}
displalProject(data)

searchbar.addEventListener('keyup',(e)=>{
  const value = e.target.value.toLowerCase()

  if(value ){
     displalProject(data.filter(item=>item.name.toLowerCase().indexOf(value) !== -1))
  }else{
    displalProject(data)
  }
})

const setCategories = ()=>{
    const allCats = data.map(item=>item.cat)
    const category = ['All',...allCats.filter((item,index)=>{
        return allCats.indexOf(item) == index
        
    })]
   CategoryContsiner.innerHTML = category.map(cat=>
        `
        <span class="cat">${cat}</span>
        `
        ).join('')
    

        CategoryContsiner.addEventListener('click',(e)=>{
            const selectedcat = e.target.innerText


            selectedcat === 'All' ? displalProject(data) : displalProject(data.filter(item=>item.cat == selectedcat))
        })
}

const setprices = ()=>{
    const priceList = data.map(item=> item.price)
    const maxPrice = Math.max(...priceList)
    const minPrice = Math.min(...priceList)
    
    Pricerange.max = maxPrice
    Pricerange.min = minPrice
    Pricerange.value = maxPrice
     PriceValue.innerText = '$' + maxPrice

     Pricerange.addEventListener('input',(e)=>{
        PriceValue.innerText = '$' + e.target.value;
        displalProject(data.filter(item=>item.price <= e.target.value))
     })
    
}
setprices()
setCategories()