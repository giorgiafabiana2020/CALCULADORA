function acesso(form){
/* Checa nome e senha - caso seja digitado
com letras maiúsculas, será convertido para minúsculas*/

form.nome.value = form.nome.value.toLowerCase()
form.senha.value = form.senha.value.toLowerCase()

if (form.nome.value == "fabiana" && form.senha.value == "123" ||form.nome.value == "marcos" && form.senha.value == "456" ||
form.nome.value == "lucas" && form.senha.value == "789" ){
    alert("Usuário logado com sucesso!")
    location = "acessopagina.html"}
    else{
form.name.value = ""
form.senha.value = ""
alert("Login ou senha incorretos")
    }
}

 