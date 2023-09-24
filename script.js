

// let inicioTotal = 25
// let score =0
  


// function addicionar(valorP){
//   if(inicioTotal>=valorP){
//     inicioTotal -= valorP
//      score++
//     console.log(valorP)
//     atualizarSaldo()

//     console.log(score)
    
   
//   }
//   else{
//     console.log('saldo insuficiente')
//   }
  
//   atualizarScore(score)
  
// }

// function atualizarSaldo(){
//   const saldo_comprar = document.querySelector('.saldo-atual')
//   saldo_comprar.textContent=`${inicioTotal}$`
// }

// function atualizarScore(score){
//   const atualizaricone= document.querySelector('.carrinho_pointer')
//   atualizaricone.textContent= score
// }

const container = document.querySelector('.saldo')
const caixar_final = document.querySelector('.cards_selecion')
const carrinho_comprar = document.querySelector('.carrinho_comprar')
const card_container_fechar = document.querySelectorAll('.card')
const removeCArd= document.querySelectorAll('.remove_cards')
const resultadoCompra= document.querySelector('.resultado_comprar')

const card_produto = document.querySelector('.produto_sele')
const header_fechar= document.querySelector('.header')

const card_sele= document.querySelectorAll('.card-sele')
 
const totalQuantia= document.querySelector('.valorFinal')

let Button_voltar= document.querySelector('.voltar_product')

let value1, value2, value3, value4, value5, value6





function carrinho_compra(){
  carrinho_comprar.addEventListener('click',function(){


   for(let i =0 ; i<card_container_fechar.length; i++){
    card_container_fechar[i].style.display='none'
   }
    
   
    header_fechar.style.display='none'
    console.log(header_fechar)
    card_produto.style.display='block'

})
}

// teste
const card11 = document.querySelectorAll('.card')



let total =0
let score=0


// Função para remover um card
function pegaAt(botao) {
  const botaoo = botao.parentElement.id;
  const valor = botao.parentElement.getAttribute('data-valor');
  console.log(botaoo + '-' + valor);

   const idbt=document.getElementById(botaoo)
  console.log(idbt)

  // Crie um novo card
  

 if(botaoo=='p1'){

    value1=document.querySelector('.value1').innerText
     
    const produto1=`creme de pentear ótima qualidade valor ${value1} `
     const img1='imagens_produtos/image1.jpg'
      
     total+=parseFloat(value1.replace(',','.'))
     ColocarProduto(produto1)

    criarCaixa(value1,img1)
   
    score++
   
    
    console.log(total)
   
  }else if(botaoo=='p2'){
     
     value2 = document.querySelector('.value2').innerText
     produto2=`produto de ótima qualidade ${value2}`
     const img2='imagens_produtos/italac_produto.jpg'
     ColocarProduto(produto2)
     total+=parseFloat(value2.replace(',','.'))
   
     score++
    criarCaixa(value2,img2)
  }
 
  else if(botaoo=='p3'){
     
     value3 = document.querySelector('.value3').innerText
     
     produto3=`produto de ótima qualidade ${value3}`
     const img2='imagens_produtos/pimenta_produto.jpg'
     ColocarProduto(produto3)
     total+=parseFloat(value3.replace(',','.'))
   
     score++
    criarCaixa(value3,img2)
  }
 
  else if(botaoo=='p4'){
     
     value4 = document.querySelector('.value4').innerText
     produto4=`produto de ótima qualidade ${value4}`
     const img2='imagens_produtos/creme_produto.jpg'
     ColocarProduto(produto4)
     total+=parseFloat(value4.replace(',','.'))
   
     score++
    criarCaixa(value4,img2)
  }
  else if(botaoo=='p5'){
     
     value5 = document.querySelector('.value5').innerText
     produto5=`produto de ótima qualidade ${value5}`
     const img2='imagens_produtos/tiras_de_frango_produto.jpg'
     ColocarProduto(produto5)
     total+=parseFloat(value5.replace(',','.'))
   
     score++
    criarCaixa(value5,img2)
  }
  else if(botaoo=='p6'){
     
     value6 = document.querySelector('.value6').innerText
     produto6=`produto de ótima qualidade ${value6}`
     const img2='imagens_produtos/mussarela_produto.jpg'
     ColocarProduto(produto6)
     total+=parseFloat(value6.replace(',','.'))
   
     score++
    criarCaixa(value6,img2)
  }
  atualizarScore()
 
  atualizarTotal()
  
  
    

  console.log('Botão clicado');

  resultadoCompra.style.display='block'
}


function criarCaixa(ec,img){
  
  const maisUmelemnto= document.createElement('span')
  const imgIm= document.createElement('img')
  const novoElemento1 = document.createElement('div');
  novoElemento1.setAttribute('class', 'card-sele');
    imgIm.setAttribute('src',img)
  // Crie um ícone de remoção
  const removeIcon = document.createElement('div');
  removeIcon.setAttribute('class', 'remove_cards');
  removeIcon.innerText = 'X';
   
  maisUmelemnto.innerHTML=ec
   
  novoElemento1.appendChild(maisUmelemnto)
  novoElemento1.appendChild(imgIm)
   
  // Adicione o ícone de remoção ao card
  novoElemento1.appendChild(removeIcon);
  
  // Adicione o novo card à caixa 'produto_sele'
 caixar_final.appendChild(novoElemento1);

 novoElemento1.addEventListener('click', function () {
  var card = this;

  const verFilho = parseFloat(card.firstChild.innerText.replace(',','.'))

 

  console.log(card)
 
  card.remove();
  remove(verFilho)

  atualizarScore()

  atualizarTotal()
  
});


}  

function remove(product){
   total-=product
    
   score--
   
   console.log(total)
}



function ColocarProduto(inforP){
  const quantida_prod=document.querySelector('.quantidade_produto')
  const criandoDivP=document.createElement('div')
  criandoDivP.setAttribute('class','produto')
  criandoDivP.innerHTML=inforP

  quantida_prod.appendChild(criandoDivP)
}



function atualizarTotal(){
  const totalFinal = document.querySelector('.valorFinal')
  totalFinal.innerHTML=total
}

Button_voltar.addEventListener('click',function(){
  for(let i =0 ; i<card_container_fechar.length; i++){
    card_container_fechar[i].style.display='block'
   }
    
   
    header_fechar.style.display='block'
    console.log(header_fechar)
    card_produto.style.display='none'


})

const scoreAtualizar= document.querySelector('.carrinho_pointer')

function atualizarScore(){
   scoreAtualizar.innerHTML=score
}