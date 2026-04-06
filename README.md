# Projeto de Previsão com TensorFlow.js

Este projeto foi adaptado para prever **preço por quantidade** usando TensorFlow.js no navegador.

## Alterações realizadas

1. Tema do projeto alterado
- Antes: horas de estudo e nota.
- Agora: quantidade de itens e preço total.

2. Título da página alterado
- Novo título: **Previsão de Preço por Quantidade com IA**.

3. Texto explicativo alterado
- O novo texto orienta o usuário a informar uma quantidade para prever o preço.

4. Variáveis renomeadas
- `horasDigitadas` -> `quantidadeDigitada`
- Campo HTML `id="horas"` -> `id="quantidade"`

5. Dados de treino alterados
- Entradas (quantidade): `[1, 2, 3, 4, 5, 6]`
- Saídas (preço): `[10, 20, 30, 40, 50, 60]`

6. Mensagem de resultado alterada
- Antes: `Nota Prevista`
- Agora: `Preço previsto: R$ ...`

7. Validação adicionada
- Se a quantidade for inválida (vazia, não numérica ou negativa), a tela mostra orientação ao usuário.

8. Estilização CSS criada (Skeuomorphism)
- Arquivo novo: `style.css`
- Cartão com relevo, sombras internas/externas, botão com efeito de profundidade e fundo com gradientes.

## Estrutura final

- `index.html`
- `script.js`
- `style.css`
- `README.md`

## Como executar

1. Abra o arquivo `index.html` no navegador.
2. Digite uma quantidade.
3. Clique em **Treinar e Prever**.
4. Veja o status e o preco previsto.

## Observações

- O modelo é treinado em tempo real no navegador a cada clique.
- O objetivo é didático, mantendo a estrutura principal do exemplo de aula.
