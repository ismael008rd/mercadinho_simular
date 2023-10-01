


const inforProdutoImg=[
  {
    produto_informação:'otima qualidade 7$',
    img_prduto:'imagens_produtos/image1.jpg'

  },
  {
    produto_informação:'otima qualidade meus bbs  5$',
    img_prduto:'imagens_produtos/italac_produto.jpg'

  },
  {
    produto_informação:'otima qualidade meus bbs  7,50$',
    img_prduto:'imagens_produtos/pimenta_produto.jpg'

  },
  {
    produto_informação:'otima qualidade meus bbs  8$',
    img_prduto:'imagens_produtos/creme_produto.jpg'

  },
  {
    produto_informação:'otima qualidade meus bbs  6,75$',
    img_prduto:'imagens_produtos/tiras_de_frango_produto.jpg'

  },
  {
    produto_informação:'otima qualidade meus bbs  8,20$',
    img_prduto:'imagens_produtos/mussarela_produto.jpg'

  },
]

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

let infor_proudutoApp
let img
// let produto1, produto2,produto3,produto4, produto5, produto6


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
    
    let idex=0
     
   inforProdutoImg[idex]

    
    posicion(inforProdutoImg,idex)

     const img=inforProdutoImg[0].img_prduto
      
     total+=parseFloat(value1.replace(',','.'))

   

    criarCaixa(value1,img, idex)
   
    score++
   
   
    
    console.log(total)
   
  }
  else if(botaoo=='p2'){
     
     value2 = document.querySelector('.value2').innerText
     
     let idex=1
     
    inforProdutoImg[idex]
     
    posicion(inforProdutoImg,idex)

    
      img=inforProdutoImg[1].img_prduto
    
     total+=parseFloat(value2.replace(',','.'))
   
     score++
    criarCaixa(value2,img, idex)
  }
 
  else if(botaoo=='p3'){
     
     value3 = document.querySelector('.value3').innerText
     
     let idex=2
     
    inforProdutoImg[idex]
     
    posicion(inforProdutoImg,idex)

    
      img=inforProdutoImg[2].img_prduto
    
     total+=parseFloat(value3.replace(',','.'))
   
     score++
    criarCaixa(value3,img, idex)
  }
 
  else if(botaoo=='p4'){
     
     value4 = document.querySelector('.value4').innerText
     
     let idex=3
     
    inforProdutoImg[idex]
     
    posicion(inforProdutoImg,idex)

    
      img=inforProdutoImg[3].img_prduto
    
     total+=parseFloat(value4.replace(',','.'))
   
     score++
    criarCaixa(value4,img, idex)
  }
  else if(botaoo=='p5'){
     
     value5 = document.querySelector('.value5').innerText
     let idex=4
     
     inforProdutoImg[idex]
      
     posicion(inforProdutoImg,idex)
 
     
       img=inforProdutoImg[4].img_prduto
     
      total+=parseFloat(value5.replace(',','.'))
    
      score++
     criarCaixa(value5,img, idex)
  }
  else if(botaoo=='p6'){
     
     value6 = document.querySelector('.value6').innerText
     let idex=5
     
     inforProdutoImg[idex]
      
     posicion(inforProdutoImg,idex)
 
     
       img=inforProdutoImg[5].img_prduto
     
      total+=parseFloat(value6.replace(',','.'))
    
      score++
     criarCaixa(value6,img, idex)
  }
  atualizarScore()
 
  atualizarTotal()
  
  
  

  console.log('Botão clicado');

  resultadoCompra.style.display='block'
}


function criarCaixa(ec,img, index){

  
  const maisUmelemnto= document.createElement('span')
  const imgIm= document.createElement('img')
  const novoElemento1 = document.createElement('div');
  novoElemento1.setAttribute('class', 'card-sele');
    imgIm.setAttribute('src',img)
  // Crie um ícone de remoção
  const removeIcon = document.createElement('div');
  removeIcon.setAttribute('class', 'remove_cards'+index);
  removeIcon.classList.add('remove_cards')
  removeIcon.innerText = 'X';
   
  maisUmelemnto.innerHTML=ec
   
  novoElemento1.appendChild(maisUmelemnto)
  novoElemento1.appendChild(imgIm)
   
  // Adicione o ícone de remoção ao card
  novoElemento1.appendChild(removeIcon);
  
  // Adicione o novo card à caixa 'produto_sele'
 caixar_final.appendChild(novoElemento1);
 


 removeIcon.addEventListener('click',Inconeremover)


 function Inconeremover() {
  var card = novoElemento1
   
  console.log()
  
 

  // console.log('----------------------')
  // console.log(card)
  // console.log('----------------------')



  const verFilho = parseFloat(card.firstChild.innerText.replace(',','.'))


 
  card.remove();

  
 

  remove(verFilho)

  atualizarScore()
   


  atualizarTotal()
 
 
  apagarInformacaoPro(removeIcon)
 
  
  
};

 
 





}  

function remove(product){
   total-=product
    
   score--
  
   
   console.log(total)
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



function posicion(produif, index){
  const quantida_prod=document.querySelector('.quantidade_produto')
  const criandoDivP=document.createElement('div')
  criandoDivP.setAttribute('class','produto'+index)
  criandoDivP.classList.add('produto')
  criandoDivP.innerHTML= produif[index].  produto_informação

  
  quantida_prod.appendChild(criandoDivP)
 }

 let idex,i;


function apagarInformacaoPro(xelemento){
  const verClasse= xelemento.getAttribute('class')
console.log(verClasse)
let productInfor = document.querySelectorAll('.produto')


if(verClasse=='remove_cards0 remove_cards'){     
  console.log('aqui eeeeeuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeeeeeeeeeeeeeeeeeeeeee')
   const product1 = document.querySelector('.produto0')
   console.log(product1)
   product1.remove()
   
}
else if(verClasse=='remove_cards1 remove_cards'){
  
  console.log('oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbb')
  const product2 = document.querySelector('.produto1')
  console.log(product2)
  product2.remove()
}
else if(verClasse=='remove_cards2 remove_cards'){
  
  console.log('oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbb')
  const product3 = document.querySelector('.produto2')
  console.log(product3)
  product3.remove()
}
else if(verClasse=='remove_cards3 remove_cards'){
  
  console.log('oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbb')
  const product4 = document.querySelector('.produto3')
  console.log(product4)
  product4.remove()
}
else if(verClasse=='remove_cards4 remove_cards'){
  
  console.log('oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbb')
  const product5 = document.querySelector('.produto4')
  console.log(product5)
  product5.remove()
}
else if(verClasse=='remove_cards5 remove_cards'){
  
  console.log('oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbb')
  const product6 = document.querySelector('.produto5')
  console.log(product6)
  product6.remove()
}
 
  
 

 
}















