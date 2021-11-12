

window.addEventListener('load',()=>{

    class Algoritmo{

        constructor(valores){

            this.valor = valores;
            this.index = 0
           
        }

        Writter(frase, element){

            let id = setInterval(()=>{
                this.index ++
                element.innerHTML = frase.slice(0, this.index)
               
                if(frase.length == this.index){
                    clearInterval(id);
                    setTimeout(()=>{window.location.href='./index.html'},2000);
                    this.valor.NumeroIA.innerHTML = this.valor.NumeroAleatorio;
                }

            },130)

        }

        Verificar(){

           if(this.valor.InputEntrada.value == this.valor.NumeroAleatorio){

                this.Writter(this.valor.SMScerta, this.valor.FraseInicial)
                this.valor.Info.innerHTML = this.valor.AlertaCerto
                this.valor.Info.style.background = this.valor.CorCerta
               
            }else{

                this.Writter(this.valor.SMSerrada, this.valor.FraseInicial)
                this.valor.Info.innerHTML = this.valor.AlertaErrada
                this.valor.Info.style.background = this.valor.CorErrada

             
                
               
            }

          
        

        }
    }

    let algoritmo = new Algoritmo(Valores);

    Valores.InputEntrada.addEventListener('keyup',()=>{

        if(Valores.InputEntrada.value.trim().length > 0){

            

            setTimeout(()=>{
                Valores.InputEntrada.setAttribute("readonly","readonly")
            },2000)

            setTimeout(()=>{
                
                Valores.InputEntrada.classList.add('input-anime');
                
                setTimeout(()=>{

                    algoritmo.Verificar()
                    Valores.InputEntrada.classList.remove('input-anime');
                
                },5000);
            },200)
        }
    })

   
    
})