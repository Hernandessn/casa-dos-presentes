function scrollToElement(){
  let elementoDestino = document.getElementById('elementoDestino')

  elementoDestino.scrollIntoView({
    behavior:'smooth'
  })
}

//Perfumes
let nam = document.querySelector(".Nome")
let par = document.querySelector(".parcela")
let butt = document.querySelector(".entreemc")
let div = document.querySelector(".divdescrisao")
 //Produto 2 perfume Styles
let nam1 = document.querySelector(".Nome1")
let par1 = document.querySelector(".parcela1")
let butt1 = document.querySelector(".entreemc1")
let div1 = document.querySelector(".divdescrisao1")
//Produto 3 Perfume 1
let nam2 = document.querySelector(".Nome2")
let par2 = document.querySelector(".parcela2")
let butt2 = document.querySelector(".entreemc2")
let div2 = document.querySelector(".divdescrisao2")
//Perfumes functions
function clicar(){
  div.style.background = "rgb(175, 22, 150)"
  nam.innerHTML = "Perfume GLAM"
  par.innerHTML = `<strong>R$200</strong> <br>ou de 40 x 5`
  butt.innerHTML = `Entre em contato`
}
function clicar1(){
    div1.style.background = "black"
    nam1.innerHTML = "Perfume Style"
    par1.innerHTML = `<strong>R$200</strong> <br>ou de 40 x 5`
    butt1.innerHTML = `Entre em contato`
  }
function clicar2(){
    div2.style.background = "black"
    nam2.innerHTML = "Perfume Style"
    par2.innerHTML = `<strong>R$200</strong> <br>ou de 40 x 5`
    butt2.innerHTML = `Entre em contato`
  }
//Eventos Perfumes
  div.addEventListener("click",clicar)
  div1.addEventListener("click",clicar1)
  div2.addEventListener("click",clicar2)

//Bolsas Pavao de Ouro
let nambolsa = document.querySelector(".Nomebolsa")
let parbolsa = document.querySelector(".parcelabolsa")
let buttbolsa = document.querySelector(".entreemcbolsa")
let divbolsa = document.querySelector(".divdescrisaobolsa1")

let nambolsa2 = document.querySelector(".Nomebolsa2")
let parbolsa2 = document.querySelector(".parcelabolsa2")
let buttbolsa2 = document.querySelector(".entreemcbolsa2")
let divbolsa2 = document.querySelector(".divdescrisaobolsa2")

let nambolsa3 = document.querySelector(".Nomebolsa3")
let parbolsa3 = document.querySelector(".parcelabolsa3")
let buttbolsa3 = document.querySelector(".entreemcbolsa3")
let divbolsa3 = document.querySelector(".divdescrisaobolsa3")

let nambolsa4 = document.querySelector(".Nomebolsa4")
let parbolsa4 = document.querySelector(".parcelabolsa4")
let buttbolsa4 = document.querySelector(".entreemcbolsa4")
let divbolsa4 = document.querySelector(".divdescrisaobolsa4")
//Bolsas functions
function clicarbolsa1(){
    divbolsa.style.background = "black"
    nambolsa.innerHTML = "Bolsa Pavao de Ouro"
    parbolsa.innerHTML = `<strong>R$199,00</strong> <br>ou de 3x sem juros`
    buttbolsa.innerHTML = `Entre em contato`
  }
function clicarbolsa2(){
    divbolsa2.style.background = "rgb(151, 131, 131)"
    nambolsa2.innerHTML = "Bolsa Pavao de Ouro"
    parbolsa2.innerHTML = `<strong>R$199,00</strong> <br>ou de 3x sem juros`
    buttbolsa2.innerHTML = `Entre em contato`
  }
function clicarbolsa3(){
    divbolsa3.style.background = " #F58529"
    nambolsa3.innerHTML = "Bolsa Pavao de Ouro"
    parbolsa3.innerHTML = `<strong>R$199,00</strong> <br>ou de 3x sem juros`
    buttbolsa3.innerHTML = `Entre em contato`
  }
  function clicarbolsa4(){
    divbolsa4.style.background = "#DD2A7B"
    nambolsa4.innerHTML = "Bolsa Rosa"
    parbolsa4.innerHTML = `<strong>R$199,00</strong> <br>ou de 3x sem juros`
    buttbolsa4.innerHTML = `Entre em contato`
  }
//Eventos Bolsas
divbolsa.addEventListener("click",clicarbolsa1)
divbolsa2.addEventListener("click",clicarbolsa2)
divbolsa3.addEventListener("click",clicarbolsa3)
divbolsa4.addEventListener("click",clicarbolsa4)