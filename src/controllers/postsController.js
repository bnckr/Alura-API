// Importa as funções getTodosPosts e criarPost do arquivo postsModel.js
import { getTodosPosts, criarPost } from "../models/postsModel.js";

// Função para listar todos os posts
export async function listarPosts(req, res) {
  // Obtém todos os posts chamando a função getTodosPosts
  const posts = await getTodosPosts();
  // Envia os posts como resposta em formato JSON com status HTTP 200
  res.status(200).json(posts);
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
  // Extrai os dados do novo post a partir do corpo da requisição (req.body)
  const novoPost = req.body;
  try {
    // Chama a função criarPost para adicionar o novo post ao banco de dados
    const postCriado = await criarPost(novoPost);
    // Envia o post recém-criado como resposta em formato JSON com status HTTP 200
    res.status(200).json(postCriado);
  } catch (erro) {
    // Exibe o erro no console em caso de falha
    console.error(erro.message);
    // Envia uma resposta de erro com status HTTP 500 e uma mensagem indicando a falha
    res.status(500).json({ Erro: "Falha na requisição!" });
  }
}
