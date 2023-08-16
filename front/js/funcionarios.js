

const btn = document.getElementById("btnFuncionarios");


    // CARREGAR DADOS DOS FUNCIONÁRIOS


function carregarDados(){

    //key = window.location.search.substring(5,window.location.search.length);
    
    const estrutura = document.getElementById("estrutura");
    
    fetch("http://127.0.0.1:30021/list/usuarios")
    .then((response)=>response.json())
    .then((result)=>{
        result.data.map((item,index)=>{
            let divUser = document.createElement("div");
            divUser.setAttribute("class","div_user");
            divUser.innerHTML = `<img src="../img/user.png">
            <h2>Nome: ${item.nome}</h2>
            <h3>Função: ${item.funcao}</h3>
            <h3>Status: ${item.status}</h3>

            <a href="#" onclick="editar('${item.idusuarios}','${item.nome}','${item.funcao}','${item.endereco}','${item.telefone}','${item.email}','${item.status}')">
                <img src="../img/botao-editar.png">
            </a>
            `;
            estrutura.appendChild(divUser);
        })
    }).catch((error)=>console.log(`Erro ao executar a API -> ${error}`));
    };



    // ATUALIZAR DADOS DOS FUNCIONÁRIOS

    function editar(id, nome, funcao, endereco, telefone, email, status){
    
        // Fazer uma referência ao body da página HTML
        const body = document.body;
        const divShadow = document.createElement("div");
        const divWhite = document.createElement("div");
        const form = document.createElement("form");
        const inputId = document.createElement("input");
        const inputNome = document.createElement("input");
        const inputFuncao = document.createElement("input");
        const inputEndereco = document.createElement("input");
        const inputTelefone = document.createElement("input");
        const inputEmail = document.createElement("input");
        const inputStatus = document.createElement("input");
        const inputSub = document.createElement("input");
    
    
        // Aplicando atributos para os elementos
        divShadow.setAttribute("id","divShadow");
        divWhite.setAttribute("id","divWhite");
        // Atributo para não enviar o formulário. O envio será feito
        // via JavaScript.
        form.setAttribute("onsubmit","return false;")
    
        // Aplicando atributos para o Id, os atributos são:
        // type, placeholder, disabled
        inputId.setAttribute("type","text");
        inputId.setAttribute("placeholder",`Id ${id}`);
        inputId.setAttribute("disabled","true");
    
    
        // Aplicando atributos ao user, os atributos são: type, placeholder
        // disabled
        inputNome.setAttribute("type","text");
        inputNome.setAttribute("placeholder",`Usuário: ${nome}`);
    
        // Aplicando atributos a pass e confirm
       // inputPass.setAttribute("type","password");
       // inputPass.setAttribute("placeholder","Senha");
    
       // inputConfirm.setAttribute("type","password");
        //inputConfirm.setAttribute("placeholder","Confirme a senha");


        // Atributos para funcao
        inputFuncao.setAttribute("type","text");
        inputFuncao.setAttribute("placeholder",`Função: ${funcao}`);


        inputEndereco.setAttribute("type","text");
        inputEndereco.setAttribute("placeholder",`Endereço: ${endereco}`);


        inputTelefone.setAttribute("type","text");
        inputTelefone.setAttribute("placeholder",`Telefone: ${telefone}`);
      

        inputEmail.setAttribute("type","text");
        inputEmail.setAttribute("placeholder",`Email: ${email}`);
        

        inputStatus.setAttribute("type","text");
        inputStatus.setAttribute("placeholder",`Status: ${status}`);
       
    

    
        // Atributos para file
       // inputFile.setAttribute("type","file");
       // inputFile.setAttribute("value",`${foto}`);
    
        inputSub.setAttribute("type","submit");
        inputSub.setAttribute("value","Atualizar");
    
    
        inputSub.onclick = ()=>{
          //  if(inputConfirm.value != inputPass.value){
            //    return alert("Senha de confirmação diferente da senha digitada")
          //  }
                fetch(`http://127.0.0.1:30021/usuarios/update/${id}`,{
                    method:`PUT`,
                    headers:{
                        "accept":"application/json",
                        "content-type":"application/json",
                    },
                    body:JSON.stringify({
                        nome:inputNome.value,
                        email:inputEmail.value,
                        funcao:inputFuncao.value
                        
                    }) 
                }) 
                return alert("Funcionou")
                
        } 
        
    

        

    
        form.appendChild(inputId);
        form.appendChild(inputNome);
        form.appendChild(inputFuncao);
        form.appendChild(inputEndereco);
        form.appendChild(inputTelefone);
        form.appendChild(inputEmail);
        form.appendChild(inputStatus);
        form.appendChild(inputSub);
        divWhite.appendChild(form);
        divShadow.appendChild(divWhite);
        body.appendChild(divShadow);
    }
