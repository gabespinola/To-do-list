 let tarefas = []

function adicionarTarefa() {
      
     
      
      const inputtarefa  = document.getElementById ("inputtarefa")
      let tarefa= inputtarefa.value.trim()
      const mensagem = document.getElementById("mensagem")
      
       
      if(tarefa == ""){
            let mensagemerro ="ERRO! Digite uma tarefa para adiciona-la a sua lista"
            mensagem.textContent = mensagemerro;

            mensagem.className="erro";
            
      }else {
      
      
       let mensagemsucesso = "Tarefa adicionada com sucesso!";
      mensagem.textContent = mensagemsucesso;
      tarefas.push(tarefa)
      renderizarTarefas()
      
       mensagem.className=" sucesso"
      }
      
      
       inputtarefa.value= ""

     

    }

    function renderizarTarefas(){
      
       const listatarefas= document.getElementById("listatarefas")
       listatarefas.innerHTML = ""
      
       let i = 0
       for (i; i < tarefas.length; i++){
      let novatarefa = document.createElement("li")
      novatarefa.textContent= tarefas[i]
      listatarefas.appendChild(novatarefa)

       }
      
       
    }