const main = document.getElementById('main');
const container_productos = document.querySelector('.container_products');

ListShoppingCart = [];

create_cards(); 
function create_cards(){
  products.forEach(Books => {
    const card_render = document.createElement('div');
    const header_card = document.createElement('div');
    const h2_title = document.createElement('h2');
    const card_main = document.createElement('div');
    const div_image = document.createElement('div');
    const image_card = document.createElement('img');
    const btn_card = document.createElement('button');
    const parrafo = document.createElement('div')
    const h5_title = document.createElement('h5');

    card_render.classList.add('card');
    header_card.classList.add('header-card');
    h2_title.setAttribute('id', 'h2');
    h2_title.textContent = Books.name;
    card_main.classList.add('card-main');
    div_image.classList.add('card-image');
    image_card.setAttribute('src',Books.src); 
    image_card.setAttribute('alt','Image Card');
    image_card.classList.add('img'); 
    header_card.classList.add('parrafo');
    h5_title.setAttribute('id', 'h5');
    h5_title.textContent = Books.price;

    btn_card.setAttribute('id', Books.id);
    btn_card.textContent = 'Order...';
    
    btn_card.addEventListener('click', AddToCart);
    
    div_image.appendChild(image_card);
    header_card.appendChild(h2_title);
    card_render.appendChild(header_card);
    card_render.appendChild(card_main);
    card_render.appendChild(div_image);
    parrafo.appendChild(h5_title);
    card_render.appendChild(parrafo);
    card_render.appendChild(btn_card);
    main.appendChild(card_render);
  });
}
function SeeCart (){

  container_productos.innerHTML = '';
  const indexUnico = new Set(ListShoppingCart)
  indexUnico.forEach((element) => {
    const BooksAtributes = products.filter((item) => {
      return parseInt(element) === item.id
    })

    let cont = 0;

    for(let id of ListShoppingCart) {
        if(id === element) {
            cont++;
        }
    }
    const Container_Books = document.createElement('div')

    const img = document.createElement('img')
    const nombre = document.createElement('p');
    const precio = document.createElement('p');
    const contador = document.createElement('p');
    const btn_sum = document.createElement('button');
    const btn_substract = document.createElement('button');
    const btn_eliminate = document.createElement('button');
    btn_sum.setAttribute('id', BooksAtributes[0].id);
    btn_substract.setAttribute('id',BooksAtributes[0].id);
    btn_eliminate.setAttribute('id',BooksAtributes[0].id);

    nombre.textContent = BooksAtributes[0].name;
    precio.textContent = BooksAtributes[0].price;
    btn_sum.textContent = '+';
    btn_substract.textContent = '-'
    btn_eliminate.textContent = 'X';
    contador.textContent = cont;
    
    
    Container_Books.appendChild(nombre);
    Container_Books.appendChild(precio);
    Container_Books.appendChild(contador)
    Container_Books.appendChild(btn_sum);
    Container_Books.appendChild(btn_substract);
    Container_Books.appendChild(btn_eliminate)

    btn_sum.addEventListener('click', AddToCart);
    btn_substract.addEventListener('click', SubstractProduct);
    btn_eliminate.addEventListener('click', EliminateProduct)

    btn_sum.style.marginTop = '1.5em';
    btn_sum.style.width = '4%';
    btn_sum.style.height = '2.5rem';
    btn_sum.style.borderRadius = '14px';
    btn_sum.style.backgroundColor = 'rgb(243, 138, 165)';

    btn_substract.style.marginTop = '1.5em';
    btn_substract.style.width = '4%';
    btn_substract.style.height = '2.5rem';
    btn_substract.style.borderRadius = '14px';
    btn_substract.style.backgroundColor = 'rgb(243, 138, 165)';

    btn_eliminate.style.marginTop = '1.5em';
    btn_eliminate.style.width = '4%';
    btn_eliminate.style.height = '2.5rem';
    btn_eliminate.style.borderRadius = '14px';
    btn_eliminate.style.backgroundColor = 'rgb(243, 138, 165)';

    Container_Books.style.padding = '10px';
    Container_Books.style.margin = '25px 0';
    Container_Books.style.border = '1px solid white';
    Container_Books.style.boxShadow= '0 0 20px white';
    Container_Books.style.display = 'flex';
    Container_Books.style.justifyContent = 'space-between';
    Container_Books.style.alignItems = '';
    Container_Books.style.borderRadius = '10px';
    
    container_productos.appendChild(Container_Books);
  })
}
function AddToCart(e){
  ListShoppingCart.push(e.target.getAttribute('id'));
  SeeCart();
}

const SubstractProduct = (e) => {
  let item = e.target.getAttribute('id') 
  ListShoppingCart.splice(parseInt(ListShoppingCart.indexOf(item)),1)
  SeeCart();
}

const EliminateProduct = (e) => {
  let item = e.target.getAttribute('id');
  ListShoppingCart = ListShoppingCart.filter((id_cats) => {
      return id_cats !== item;
  });
  SeeCart();
}