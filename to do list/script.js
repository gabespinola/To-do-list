function adicionarTarefa() {
      let mensagem = "Tarefa adicionada com sucesso!";
     
           

      let inputtarefa  = document.getElementById ("inputtarefa")
      let tarefa= inputtarefa.value
       document.getElementById("mensagem").textContent = mensagem;

       let listatarefas= document.getElementById("listatarefas")
       let novatarefa = document.createElement("li")
      novatarefa.textContent= tarefa
       listatarefas.appendChild(novatarefa)
      
       inputtarefa.value= ""
    }