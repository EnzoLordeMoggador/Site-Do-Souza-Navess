const BTNAdicionar = document.getElementById("adiciona")
const colocar = document.querySelector(".colocar")
const btninsert = document.getElementById("inserir")
const btnfechar = document.getElementById("fechar")

const Supabase_URL = "https://njwjzxyhzzcyuhzgbdhu.supabase.co"
const Supabase_chave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qd2p6eHloenpjeXVoemdiZGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MTYyMTIsImV4cCI6MjA3MTk5MjIxMn0.Bp8VLatszpyD7EZBUjEjvbsh9k8uFJqiGZ-wKn9UPWc"
const client = window.supabase.createClient(Supabase_URL,Supabase_chave);

BTNAdicionar.addEventListener("click", () => { // aparecer treco de colocar o evento
    colocar.style.display = "block"
})

btnfechar.addEventListener("click", () =>{  //fechar o colocar
     colocar.style.display = "none";
})


btninsert.addEventListener("click", async () =>{
    const insert = document.getElementById("escrever").value.trim(); // pega o evento e coloca no banco

    if(!insert){ // se não tiver nada escrito pede a colocar algo 
        alert("Digite um evento")
        return  
    }

    const {data, error} = await client
    .from("admin setting") // nome do banco
    .insert([{texto: insert}]) // insere no banco e na coluna texto
   
    if(error){ // se tiver erro vai avisar 
        alert("erro ao salvar no banco")
    }
    else{
        alert("salvo com sucesso") // avisa que salvo no banco
        document.getElementById("escrever").value = "" // deixa o input em branco
    }


})
