import './style.css'; 
const product_list = document.getElementById('product-list') 

document.addEventListener('DOMContentLoaded',()=>{
    console.log('DOM successfully loaded')

    let promise1 = fetch('/data.json')
    .then(response=>response.json())
    .then((data)=>{
        data.forEach(element => {
            let li = document.createElement('li')
            let currentImg = document.createElement('img')
            let currentBtn = document.createElement('button')
            let cartImg = document.createElement('img')
            let msg = document.createElement('p')

            let currentText = document.createElement('div')
            currentText.innerHTML = `<div class="text-[hsl(12,20%,44%)] mb-1">${element.category}</div> <div class="font-semibold text-lg mb-1">${element.name}</div> <div class="text-[hsl(14,86%,42%)] font-semibold text-lg">$${element.price.toFixed(2)}</div>
            `
            msg.innerText = 'Add to Cart'
            msg.classList.add('font-semibold')

            currentImg.src = element.image.mobile
            cartImg.src = '/assets/images/icon-add-to-cart.svg'

            

            currentBtn.append(cartImg,msg)

            li.append(currentImg,currentBtn,currentText)
            product_list.append(li)

            currentImg.classList.add('rounded-lg','my-9') //my-9 was her 
            currentBtn.classList.add('bg-white','flex','items-center','gap-2','border-[1px]','border-[hsl(12,20%,44%)]','p-3', 'px-9', 'rounded-4xl','absolute','translate-y-[-69px]','cursor-pointer','left-1/2', '-translate-x-1/2','min-w-[200px]','justify-center') //worry about translate-x later
            li.classList.add('relative')
            //<button class="flex items-center gap-2 border-[1px] p-3 px-9 rounded-4xl">
        }
        
    );
    }
)
    .catch(()=>{console.log('url not found')})

})











