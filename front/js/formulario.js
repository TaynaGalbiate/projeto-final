
const inputNome=document.getElementById("nome")
const inputFuncao= document.getElementById("funcao")
const inputAdmissao= document.getElementById("admissao")
const inputEndereco= document.getElementById("endereco")
const inputCidade= document.getElementById("cidade")
const inputTelefone= document.getElementById("telefone")
const inputCpf= document.getElementById("cpf")
const inputNascimento= document.getElementById("nascimento")
const inputEmail= document.getElementById("email")
const inputObs= document.getElementById("obs")
const inputStatus= document.getElementById("status")
const inputSub= document.getElementById("submit")

inputSub.onclick = ()=>{
        fetch(`http://127.0.0.1:30021/usuarios/insert`,{
        method:`POST`,
        headers:{
            "accept":"application/json",
            "content-type":"application/json",
        },
        body:JSON.stringify({
            nome:inputNome.value,
            funcao:inputFuncao.value,
            admissao:inputAdmissao.value,
            endereco:inputEndereco.value,
            cidade:inputCidade.value,
            telefone:inputTelefone.value,
            cpf:inputCpf.value,
            nascimento:inputNascimento.value,
            email:inputEmail.value,
            obs:inputObs.value,
            status:inputStatus.value,
    
        })
        }).then((response)=>response.json())
        .then((resposta)=>console.log(resposta))
        .catch((error)=>console.error(error))
    }
