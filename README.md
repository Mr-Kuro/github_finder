# GitHub Finder

Este projeto é uma aplicação web que permite aos usuários pesquisar por usuários e repositórios do GitHub. Ele utiliza a API pública do GitHub para obter informações sobre os usuários e repositórios.

## Containers

O projeto é composto por dois containers principais:

- **Home**: Este container é responsável pela rota inicial `/` e chama o componente `Search` que permite aos usuários pesquisar por usuários do GitHub.
- **Repository**: Este container é responsável pela rota `/:username/repos` e chama o componente `ListData` que exibe todas as informações sobre os repositórios de um usuário específico.

## Componentes

O projeto é composto por:

- **user/Search**: componente chamado pelo container Home que permite aos usuários pesquisar por usuários do GitHub na rota `/`.
- **repository/ListData**: componente chamado pelo container Repository que exibe todas as informações sobre os repositórios de um usuário específico na rota `/:username/repos`.

## Rotas

O projeto possui as seguintes rotas:

| Route | Description |
| --- | --- |
| `/` | Permite aos usuários pesquisar por usuários do GitHub. |
| `/:username/repos` | Exibe informações detalhadas sobre os repositórios de um usuário específico do GitHub. |

## Libs e Frameworks

Cada tecnologia tem um papel específico no projeto. A API do GitHub é usada para obter dados, Vite é usado para construir o projeto e React é usado para construir a interface do usuário.

#### Tecnologias destacadas

<!-- Adicionando documentação do TypeScript na tabela -->
| Tecnologia | Documentação | Descrição |
|------------|--------------|-----------|
| GitHub API | [https://docs.github.com/en/rest](https://docs.github.com/en/rest) | API pública do GitHub |
| Vite       | [https://vitejs.dev/](https://vitejs.dev/) | Build tool para projetos em JavaScript e TypeScript |
| React      | [https://reactjs.org/](https://reactjs.org/) | Biblioteca JavaScript para construção de interfaces de usuário |
| react-dom  | [https://reactjs.org/docs/react-dom.html](https://reactjs.org/docs/react-dom.html) | Pacote que fornece métodos específicos para o DOM do navegador, usados ​​por React |
| TypeScript | [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/) | Superset de JavaScript que adiciona tipagem estática opcional e outras funcionalidades ao JavaScript |

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo [LICENSE.md](./LICENSE.md) para obter mais informações.

