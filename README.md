# @mpatricio/smart-string

Um conjunto de utilitários simples e poderosos para manipulação de strings de forma consistente, segura e independente de frameworks.

Ideal para uso em projetos Node.js, APIs, aplicações web e qualquer aplicação TypeScript/JavaScript.

---

## 🚀 Instalação

```sh
pnpm add @mpatricio/smart-string
# ou
npm install @mpatricio/smart-string
# ou
yarn add @mpatricio/smart-string

Uso Básico

import { slugify, capitalize } from "@mpatricio/smart-string";

slugify("Olá Mundo");
// → "ola-mundo"

capitalize("mARcoS");
// → "Marcos"


Métodos Disponíveis

| Método                  | Descrição                                                                   |
| ----------------------- | --------------------------------------------------------------------------- |
| **slugify(text)**       | Converte uma string em um slug: minúsculas, sem acentos, espaços viram `-`. |
| **truncate(text, max)** | Limita o tamanho da string e adiciona `...` no final.                       |
| **removeAccents(text)** | Remove acentuação e diacríticos.                                            |
| **camelCase(text)**     | Converte para camelCase.                                                    |
| **kebabCase(text)**     | Converte para kebab-case.                                                   |
| **capitalize(text)**    | Torna a primeira letra maiúscula e o restante minúsculo.                    |


Exemplos Detalhados

slugify("Olá, Mundo Lindo!");
// → "ola-mundo-lindo"

truncate("Este texto é muito grande", 10);
// → "Este text..."

removeAccents("coração ação São Paulo");
// → "coracao acao Sao Paulo"

camelCase("Hello world example");
// → "helloWorldExample"

kebabCase("Hello World Example");
// → "hello-world-example"

capitalize("jOão");
// → "João"


Importação Alternativa 

import * as Smart from "@mpatricio/smart-string";

Smart.kebabCase("Olá Mundo");
// → "ola-mundo"
