infoBotao = document.getElementById("info")
eventosBotao = document.getElementById("eventos")
caixinha = document.getElementById("caixinhaa")
cesnAbas = document.getElementById("cesnAbas")
setaesquerda = document.getElementById("esquerda")
setadireita = document.getElementById("direita")
matriculas = document.getElementById("matriculas")
arrowback = document.getElementById("arrowback")
eventosaba = document.getElementById("eventosaba")
pInsta = document.getElementById("pInsta")
i1 = document.getElementById("i1")
i2 = document.getElementById("i2")
i3 = document.getElementById("i3")
i4 = document.getElementById("i4")
abas = [ // cria uma lista com os elementos do cesnAbas //
 i1,
 i2,
 i3,
 i4
]
let primeiroI;
let divcorrente; // divcorrente é usado pra saber qual aba está na tela //
let ultimoI;

infoBotao.addEventListener("click", () => { // funçao q faz a troca de displays quando clico em algum botao pra mudar as abas que estao na tela //
  caixinha.style.display = "none";
  cesnAbas.style.display = "flex";
  arrowback.style.display = "flex";
  divcorrente = "info"
})

eventosBotao.addEventListener("click", () => {
    caixinha.style.display = "none";
    arrowback.style.display = "flex";
    eventosaba.style.display = "flex";
    divcorrente = "eventos"
})
setaesquerda.addEventListener("click", () => {
  abas[1].style.display = "flex"
  abas[0].style.display = "none"
  primeiroI = abas.shift()
  abas.push(primeiroI)

})
setadireita.addEventListener("click", () => {
  abas[1].style.display = "flex"
  abas[0].style.display = "none"
  primeiroI = abas.shift()
  abas.push(primeiroI)
})
i1.addEventListener("click", () => {
  window.open("https://album-de-fotos-cesn25.vercel.app/", "_blank")
})

i2.addEventListener("click", () => {
  cesnAbas.style.display = "none";
  matriculas.style.display = "flex";
  arrowback.style.display = "flex";
  divcorrente = "i2"
})
arrowback.addEventListener("click", () => { // função da seta de voltar que usa a divcorrente pra saber qual aba esta na tela e pra onde deve voltar //
  if (divcorrente==="info"){ // se a aba info estiver na tela (cesnAbas) e clicar na seta de voltar, volta pras duas abas iniciais //
    caixinha.style.display = "flex";
    cesnAbas.style.display = "none";
    arrowback.style.display = "none";
    divcorrente = "";
  }
  if (divcorrente==="eventos"){ 
    caixinha.style.display = "flex";
    arrowback.style.display = "none";
    eventosaba.style.display = "none";
  }
  if (divcorrente==="i2"){
    cesnAbas.style.display = "flex";
    matriculas.style.display = "none";
    divcorrente = "info"
  }

})
i4.addEventListener("click", () => { // função pra abrir o blog do souza // 
  window.open("https://compassionate-bear-r831gc.mystrikingly.com", "_blank"); // _blank é pra abrir em outra aba //
})

function alterarTexto() { // alterar texto conforme a largura da tela pra nao ficar muito apertado as informaçoes //
  if(innerWidth <= 600) {
    pInsta.innerText = "";
  }
  else {
    pInsta.innerText = "Nos visite no Instagram"
  }
}
alterarTexto();
// ABA DO ADMIN E BANCO DE DADOS //

const btncadastro = document.querySelector(".btn-cadastro")
const login = document.querySelector(".login")
const cadastro = document.querySelector(".cadastro")
const btnAdmin = document.getElementById("btnadmin")    
const Admin = document.querySelector(".TEXTOA")
const bisCoito = document.querySelector(".bisCOITO")
const Acertar = document.querySelector(".acertar")
const btnacertar = document.getElementById("Acertar")
const telaI = document.querySelector(".caixinha")
const btnPLOGAR = document.querySelector(".btn-PLOGAR")
const btnLogin = document.querySelector(".btn-login")
const fechar = document.querySelector(".fechar")

const Supabase_URL = "https://njwjzxyhzzcyuhzgbdhu.supabase.co"
const Supabase_chave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qd2p6eHloenpjeXVoemdiZGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MTYyMTIsImV4cCI6MjA3MTk5MjIxMn0.Bp8VLatszpyD7EZBUjEjvbsh9k8uFJqiGZ-wKn9UPWc";
const client = window.supabase.createClient(Supabase_URL,Supabase_chave);

btnAdmin.addEventListener("click", () =>{    //função de botão Admin
   bisCoito.style.display = "flex";      //mostra pra você digitar a senha correta
   Admin.style.display = "flex";  
   Acertar.style.display = "flex";
   fechar.style.display = "flex";
})

fechar.addEventListener("click", () =>{
     bisCoito.style.display = "none";  //fecha o lugar pra colocar a senha de admin  
     Admin.style.display = "none";  
     Acertar.style.display = "none";
     fechar.style.display = "none";
})

Acertar.addEventListener("click", async () =>{  //pra pegar a senha no banco  async deixa a função assincrona
    const senhaU = parseInt(document.getElementById("SENHAU").value);
   
    const{data, error } = await client  //verifica a senha no banco de dados
    .from("admin setting")  // nome do banco
    .select("senha")  // coluna senha
    .limit(1);  // aqui pega a primeira que tiver
       
    if(error){
   
      alert("erro de conexão")   // aparecer na tela que nâo achou a senha
      return
    }

    if (data && data.length > 0 && senhaU === data[0].senha){
        bisCoito.style.display = "none";  //deixa invisivel os trens de colocar a senha de admin
        Admin.style.display = "none";
        Acertar.style.display = "none";
        cadastro.style.display = "flex";  // vai mostrar o cadastro
    } else{
      alert("senha errada")  // mostra na tela que a senha esta errada
    }
   
})

btncadastro.addEventListener("click",  async () => {   // conecta no banco de dados os admins Cadastro
      const nomeA =  document.getElementById("nome").value;  // pega os valores que estao no input
      const emailA =  document.getElementById("email").value;
      const senhaA =  document.getElementById("senha").value;

      const { data, error} = await client // espera o banco de dados reagir
       .from("login")  // nome do banco de dados
       .insert([{nome: nomeA, email: emailA, senha: senhaA}]);  // insere nas 3 colunas
   
        cadastro.style.display = "none"; /// some  o cadastro e aparece o login
        login.style.display = "block";
  })
btnPLOGAR.addEventListener("click", () =>{  //função de botão login
    cadastro.style.display = "none";  // se ja tiver o login
    login.style.display = "block";


})

btnLogin.addEventListener("click", async () =>{  //pra ver se o usuario esta no banco de dados
    const email = document.getElementById("loginEmail").value.trim();  //trim remove espaços em branco
    const senha = document.getElementById("loginSenha").value.trim();  // ver o valor
 
    const {data, error } = await client
      .from("login")  // nome banco
      .select("*")  
      .eq("email", email)  //verifica  se esta no banco
      .eq("senha", senha);
   
    if (data && data.length > 0) {  // se tiver certo vai para aba de admin
       
        window.location.href = "admin.html";  
     }
});