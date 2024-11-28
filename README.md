# digai-frontend

Desafio para entrar na Digaí: Criar uma interface com a pergunta, gravação e reprodução de áudio e tempo máximo de resposta.

### Instalação

```sh
# cd ~/MY_PROJECTS_FOLDER_PATH

# clonar o repositório
git clone "https://github.com/lucasroncolato/digai-frontend.git";

# mudar para o diretório criado
cd digai-frontend;

# instalar o yarn (se não tiver)
# corepack enable

# baixar dependências
yarn install;
```

### Execução Local

```sh
yarn dev;
```

### Publicação e Deploy

```sh
# sugestão: verificar se tem problemas primeiro
yarn build;

yarn lint;

# dar push na branch main
git add .;
git commit -m "changes"
git push origin main;

# verificar os workflow runs do github actions:
https://github.com/lucasroncolato/digai-frontend/actions
```

---

### README padrão

README original que foi gerado automaticamente quando iniciei o projeto, com create-react-app, usando o template de Typescript + Vite

<details>
  <summary>README do `create-react-app`</summary>
  
### Repo's creation default readme

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  settings: { react: { version: "18.3" } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
</details>