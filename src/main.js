import './style.css'; 

const product_list = document.getElementById('product-list') 
const cart = document.getElementById('Cart')
let addedProducts = []

function chooseImg(data){
    const w = window.innerWidth
    if (w >= 1024) return data.image.desktop 
    else if (w >=620)return data.image.tablet
    return data.image.mobile
}




async function renderItems() {
  try {
    console.log('DOM successfully loaded'); // Runs immediately if DOM is ready

    let response = await fetch('/data.json');
    let data = await response.json();

    data.forEach(element => {
      let li = document.createElement('li');
      let currentImg = document.createElement('img');
      let currentBtn = document.createElement('button');
      let cartImg = document.createElement('img');
      let msg = document.createElement('p');

      let currentText = document.createElement('div');
      currentText.innerHTML = `
        <div class="text-[hsl(12,20%,44%)] mb-1">${element.category}</div> 
        <div class="font-semibold text-lg mb-1">${element.name}</div> 
        <div class="text-[hsl(14,86%,42%)] font-semibold text-lg">$${element.price.toFixed(2)}</div>`;

      msg.innerText = 'Add to Cart';
      msg.classList.add('font-semibold');

      currentImg.src = chooseImg(element);
      cartImg.src = '/assets/images/icon-add-to-cart.svg';

      currentBtn.addEventListener('click',()=>{
        addToCart(element)
      })
      currentBtn.append(cartImg, msg);
      li.append(currentImg, currentBtn, currentText);
      product_list.append(li);

      currentImg.classList.add('rounded-lg', 'my-9');
      currentBtn.classList.add(
        'bg-white', 'flex', 'items-center', 'gap-2',
        'border-[1px]', 'border-[hsl(12,20%,44%)]', 'p-3',
        'px-9', 'rounded-4xl', 'absolute', 'translate-y-[-69px]',
        'cursor-pointer', 'left-1/2', '-translate-x-1/2',
        'justify-center', 'hover:border-[hsl(14,86%,42%)]',
        'transition-transform', 'duration-200',
        'hover:translate-y-[-71px]', 'whitespace-nowrap'
      );
      li.classList.add('relative');

    });
  } catch (error) {
    console.log('url not found');
  }
}

function addToCart(data){
    addedProducts.push(data)
    
    // currentBtn.addEventListener('click', () => {
    //     addedProducts.push(element);
    //     cart.innerHTML = `<h1 class="text-2xl font-bold text-[hsl(14,86%,42%)] mb-4">Your Cart (${addedProducts.length})</h1>
    //     `
    //     currentBtn.classList.remove('bg-white')
    //     currentBtn.classList.add('bg-[hsl(14,86%,42%)]')
    //     currentBtn.innerHTML = `<img src="/assets/images/icon-decrement-quantity.svg" class="w-[19px] h-[19px] border-2 border-white p-1 rounded-2xl"> <span class="mx-7 text-white">${addedProducts.length}</span>
    //     <img src="/assets/images/icon-increment-quantity.svg" class="w-[19px] h-[19px] border-2 border-white p-1 rounded-2xl">`
    //   });
    console.log(data)
}

renderItems()





















