# ✅ To-Do List

Uma aplicação de lista de tarefas simples, funcional e com um toque de personalidade — feita do zero com HTML, CSS e JavaScript puro.

🔗 **[Acesse o projeto aqui](https://to-do-list-nu-three-11.vercel.app/)**

---

## 💡 Sobre o projeto

Esse projeto nasceu como objetivo de estudar melhor manipulação de array e de elementos DOM com JS, sem frameworks, sem bibliotecas, sem atalhos. As funcionalidades da aplicação são as principais de uma to-do list: dar nome para a task, marcar as concluídas e deletar as que não precisa mais — tudo isso persistindo os dados no `localStorage`, ou seja, suas tarefas continuam lá mesmo depois de fechar o navegador.

Checkboxes com IDs dinâmicos, eventos por closure, manipulação de DOM e sincronização com o armazenamento local. Tudo usando JS Vanilla.

---

## ✨ Funcionalidades

- ➕ Adicionar tarefas com nome personalizado
- ✔️ Checkbox estilizado para marcar tarefas como concluídas
- 🗑️ Deletar tarefas individualmente
- 💾 Persistência de dados com `localStorage` — suas tarefas ficam salvas ao recarregar a página
- 🎨 Estilo próprio com checkboxes personalizados via CSS

---

## 🛠️ Tecnologias

- **HTML5** — estrutura da página
- **CSS3** — estilização e checkboxes customizados
- **JavaScript** — lógica, manipulação de DOM e localStorage
- **Vercel** — deploy

---

## 🚀 Como rodar localmente

Não precisa instalar nada. Basta clonar o repositório e abrir o arquivo `index.html` no navegador:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Depois é só abrir o `index.html` direto no browser. Simples assim.

---

## 📁 Estrutura do projeto

```
├── index.html
├── style.css
├── script.js
└── assets/
    └── trash 1.png
```

---

## 🧠 Reforcei o aprendizado em:

- Como criar e manipular elementos do DOM dinamicamente com JavaScript
- Como usar **closure** para que cada botão/evento "lembre" a qual task pertence
- Como usar **IDs dinâmicos** em checkboxes sem quebrar o CSS (seletor `[id^="checkbox"]`)
- Como serializar e recuperar dados do **localStorage** com `JSON.stringify` e `JSON.parse`
- A importância do **escopo** — onde você declara um `addEventListener` faz toda a diferença

---

## 📌 Status

O projeto está funcional e deployado. Melhorias futuras podem incluir edição de tarefas, filtros por status e uma interface ainda mais refinada.

---

Feito com curiosidade e JavaScript puro. ☕
