function inserir(valor){
    document.form.textview.value =  document.form.textview.value + valor
}
function igual(){
    let temporaria = document.form.textview.value
    if(temporaria){
        document.form.textview.value = eval(temporaria)
    }
}

function limpar(){
    document.form.textview.value = ""  
}

function apagar(){
    let temporaria = document.form.textview.value
    document.form.textview.value = temporaria.substring(0,temporaria.length-1)
}