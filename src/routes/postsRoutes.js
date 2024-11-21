// Importa o módulo Express para criar e configurar o servidor web
import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
  // Adiciona o middleware para processar requisições no formato JSON
  app.use(express.json());
  // Define uma rota GET em "/posts" para retornar todos os posts
  app.get("/posts", listarPosts);
  // Define uma rota POST em "/posts" para criar um post
  app.post("/posts", postarNovoPost);
};

export default routes;
