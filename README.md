## Introdução
Este projeto é uma API em Node.js que demonstra uma estratégia aprimorada de `Graceful Shutdown` para lidar com a morte de processos e a criação de novos forks durante a execução.

## Instalação
Para instalar as dependências do projeto, você precisa ter o Node.js e o npm instalados. Em seguida, execute o seguinte comando na raiz do projeto:

```bash
npm install
```

## Uso
Para iniciar o servidor da API, execute o seguinte comando:
```
npm start
```
Isso iniciará o servidor na porta padrão 3000. Você pode alterar a porta no arquivo server.js, se necessário.

Para realizar os testes de carga, execute o seguinte comando em outro terminal:
```
npm test
```

## Funcionalidades
Graceful Shutdown: A API implementa um mecanismo de `Graceful Shutdown`, permitindo que as conexões existentes sejam concluídas antes de desligar o servidor.

Clusterização: A API utiliza o módulo cluster do Node.js para criar vários processos filhos (workers), distribuindo a carga de trabalho e garantindo uma melhor escalabilidade.

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema (issue) ou enviar um pull request com suas sugestões, correções ou melhorias.

## Licença
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)