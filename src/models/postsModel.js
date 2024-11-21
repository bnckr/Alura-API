// Importa a função para conectar ao banco de dados
import conectarAoBanco from "../config/dbconfig.js";
// Conecta ao banco de dados utilizando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona que retorna todos os documentos da coleção "posts"
export async function getTodosPosts() {
  // Acessa o banco de dados "imersao-instabytes"
  const db = conexao.db("imersao-instabytes");
  // Acessa a coleção "posts" dentro do banco de dados
  const colecao = db.collection("posts");
  // Busca todos os documentos na coleção e os retorna como um array
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  // Acessa o banco de dados "imersao-instabytes"
  const db = conexao.db("imersao-instabytes");
  // Acessa a coleção "posts" dentro do banco de dados
  const colecao = db.collection("posts");
  //Insere informação no banco de dados
  return colecao.insertOne(novoPost);
}
