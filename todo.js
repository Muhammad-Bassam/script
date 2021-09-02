// const scores=[10,20,30,40,50,60];

// const filteredScores= scores.filter((scores)=>{
//     return scores >= 50;

// });
// console.log(filteredScores);

// const users = [
//     {name:'shaun', premium:true},
//     {name:'youshi', premium:false},
//     {name:'mario', premium:false},
//     {name:'chun-li', premium:true},
    
// ];

// const premiumUsers= users.filter(user => user.premium );
// console.log(premiumUsers);

// const prices = [20,30,40,50,06,45,5];

// const salePrices = prices.map((price)=> {
//     return price /2 ; 

// });
// console.log(salePrices);
/////////////////------------------MAP
// const products = [
//     {name:'gold star', price:20 },
//     {name:'mushroom', price:40 },
//     {name:'greeen shells', price:30 },
//     {name:'red shells', price:50 },
    
// ];

// const saleProducts = products.map((product)=>{
//     if(product.price > 30) {
//         return {name:product.name,price:product.price/2}
//     }else{
//         return product;
//     };
// });
// console.log(saleProducts);

///////////////---------REDUCE METHOD
// const scores = [20,30,40,60,79,90,30,10];

// const result = scores.reduce((acc,curr)=>{
//     if(curr > 50) {
//      acc++; 
//     } 
    
// });


const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector ('.search input');

const generateTemplate = todo => {
   
    const html=`
     <li class="list-group-item d-flex justify-content-between">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
     </li>`;

  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    
    if(todo.length){
        generateTemplate(todo);  
        addForm.reset();
    }

});
// delete todo
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
      }
    });


    const filterTodos= (term)=> {
        console.log(term);
         
    };
    // search todo
    search.addEventListener('keyup',()=>{
        const term =search.value.trim();
        filterTodos(term);
    }); 