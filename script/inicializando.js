

let index = 0;
Valores.InputEntrada.setAttribute("readonly","readonly")
setTimeout(()=>{

    let id = setInterval(()=>{

        index ++;
    
        Valores.FraseInicial.innerHTML = Valores.Frase.slice(0,index)
        if(index == Valores.Frase.length){
            Valores.InputEntrada.removeAttribute("readonly")
            clearInterval(id)

            Valores.QuestionP.classList.add('anime-question')
           setTimeout(()=>{

          

           },1000)
        }
    
    },130)

},2000)


