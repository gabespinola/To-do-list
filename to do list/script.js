let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

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

function salvarTarefas(){
  localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function renderizarTarefas(){
      
      const listatarefas= document.getElementById("listatarefas")
      listatarefas.innerHTML = ""
      
       
      for (let i =0; i < tarefas.length; i++){
      let novatarefa = document.createElement("li")
      novatarefa.textContent= tarefas[i]
      
      let botaoRemover =document.createElement("button")
      botaoRemover.className= "remover"
      botaoRemover.textContent= "remover"
      botaoRemover.onclick= () => removerTarefa()

      let botaoeditar =document.createElement("button")
      botaoeditar.className= "editar"
      botaoeditar.textContent= "editar"
      botaoeditar.onclick= () => editarTarefa(i)

      
      
      novatarefa.appendChild(botaoRemover)
      novatarefa.appendChild(botaoeditar)
      listatarefas.appendChild(novatarefa)

      

      }
      
      salvarTarefas() 
    }

    function removerTarefa(i){
      tarefas.splice(i, 1)
      renderizarTarefas()

    }

    function editarTarefa(i){
     let tarefaEditada= prompt("Edite a tarefa:")
     if (tarefaEditada.trim() !== ""){
      tarefas[i]= tarefaEditada
      renderizarTarefas()
     }
      

    }

    function Limparlista(){
    if(tarefas.length===0){
      const mensagem = document.getElementById("mensagem")
      mensagem.textContent= "Não ha tarefas para limpar!"
      mensagem.className= " erro"
      return
    }else{
      tarefas.length= 0 
      renderizarTarefas()

      const mensagem = document.getElementById("mensagem")
      mensagem.textContent ="lista de tarefas limpa com sucesso!"
      mensagem.className="sucesso"

    }
    }
    renderizarTarefas()