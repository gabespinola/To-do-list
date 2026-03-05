function adicionarTarefa() {
      
      //recebe valor do input do usuario
      const inputtarefa  = document.getElementById ("inputtarefa")
      let tarefa= inputtarefa.value.trim()
      const mensagem = document.getElementById("mensagem")
      
      // se o valor do input estiver vazio então mostre essa mensagem 
      if(tarefa == ""){
            let mensagemerro ="ERRO! Digite uma tarefa para adiciona-la a sua lista"
            mensagem.textContent = mensagemerro;

            mensagem.className="erro";
            
      }else {
      
      //mensagem de tarefa adicionada com sucesso
       let mensagemsucesso = "Tarefa adicionada com sucesso!";
      mensagem.textContent = mensagemsucesso;
      
      //Criando um novo item
       const listatarefas= document.getElementById("listatarefas")
       let novatarefa = document.createElement("li")
      novatarefa.textContent= tarefa
       listatarefas.appendChild(novatarefa)

       mensagem.className=" sucesso"
      }
      
      // limpa o input do usuario
       inputtarefa.value= ""

     

    }