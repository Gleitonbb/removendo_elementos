const caixa1 = document.querySelector("#caixa1")

const times = ["Flamengo", "Palmeiras", "Fluminense", "Botafogo", "São Paulo", "Vasco", "Santos", "Corintians"]

times.map((upu)=>{
 const Div = document.createElement("div")
 const IMG = document.createElement("img")
 IMG.setAttribute("src","imagem/lixeira.png")
 IMG.setAttribute("class","lixeira")
Div.setAttribute("div","c")
Div.setAttribute("class","time c1") 


Div.innerHTML = upu  
Div.appendChild(IMG)
Div.addEventListener("click",(evt)=>{
   const UmPorUm = evt.target
   caixa1.removeChild(UmPorUm.parentNode)

})
caixa1.appendChild(Div)
})
