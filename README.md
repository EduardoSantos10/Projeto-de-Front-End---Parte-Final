# Projeto-de-Front-End---Parte-Final
Repositório de Estudos da Faculdade em Front-End

# 🌍 [Ultrapassando Fronteiras]

![Badge de Status do Projeto - Concluído](https://img.shields.io/badge/Status-Concluído-success)
![Badge de Tecnologias - HTML CSS JS](https://img.shields.io/badge/Tecnologias-HTML%2C%20CSS%2C%20JS-blue)
![Badge de Acessibilidade - WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-success)

> **Este projeto é a entrega final da atividade de Programação Front-End**, consistindo em uma Landing Page responsiva e altamente acessível focada no setor de viagens e turismo. O desenvolvimento seguiu práticas profissionais de versionamento (GitFlow) e otimização de performance, garantindo uma experiência de usuário de alta qualidade e inclusiva.

### ✨ Principais Funcionalidades

* **Design Responsivo:** Layout totalmente adaptável a telas de desktop, tablets e smartphones (Mobile-First).
* **Navegação Interativa:** Menu de navegação fixo e links que utilizam *smooth scroll* para rolagem suave entre as seções.
* **Validação de Formulário:** Implementação de validação de dados com JavaScript no formulário de Newsletter/Contato, fornecendo feedback imediato ao usuário.
* **Modo Acessível:** Funcionalidade de alternância para [Modo Escuro / Alto Contraste] visando atender aos requisitos de contraste da WCAG 2.1.

#### 1. Acessibilidade (WCAG 2.1 Nível AA)

A conformidade com o Nível AA do WCAG 2.1 foi uma prioridade, garantindo que o conteúdo seja perceptível, operável, compreensível e robusto.

* **Contraste Mínimo (4.5:1):** Todas as combinações de cor e fundo para texto normal foram verificadas e ajustadas para exceder o requisito mínimo, incluindo o design do [Mencione onde você teve que ajustar mais, ex: cabeçalho ou texto sobre as imagens de fundo].
* **Estrutura Semântica:** O HTML utiliza tags semânticas modernas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para definir a estrutura do conteúdo de forma clara para leitores de tela e SEO.
* **Suporte para Leitores de Tela (ARIA):**
    * Todas as imagens decorativas ou informativas possuem o atributo `alt` descritivo.
    * Campos de formulário estão corretamente associados às suas `<label>` e elementos interativos usam `aria-labels` onde necessário (como botões de ícone).
* **Navegação por Teclado:** O sequenciamento da navegação por `Tab` foi mantido de forma lógica e previsível. O estilo `:focus` para links, botões e campos de formulário foi aprimorado para ser altamente visível.

#### 2. Controle de Versão e Processo (Git/GitHub)

O desenvolvimento seguiu práticas de mercado para garantir a rastreabilidade e a organização do código.

* **Estratégia de Branching (GitFlow Simplificado):**
    * **`main`:** Armazena apenas o código de produção (entregável final).
    * **`develop`:** É a *branch* de integração, onde as novas funcionalidades são testadas.
    * **`feature/*`:** *Branches* temporárias criadas a partir de `develop` para o desenvolvimento isolado de novos requisitos (ex: `feature/implementa-wcag-acessibilidade`).
* **Commits Semânticos:** O histórico foi mantido limpo e informativo, utilizando prefixos como: `feat` (nova funcionalidade), `fix` (correção de bug), `docs` (documentação), `style` (formatação de código), `refactor` (refatoração).
* **Gerenciamento de Fluxo:** Utilização de **Issues** e **Milestones** para planejamento e **Pull Requests (PRs)** para o *merge* seguro e documentado das funcionalidades.
* **Releases:** O código final e entregável foi marcado com a tag **`v1.0.0`** (Versionamento Semântico) na aba Releases do GitHub.

#### 3. Otimização para Produção

A versão final do projeto foi otimizada para garantir o carregamento rápido e eficiente.

* **Minificação de Ativos:** Os arquivos `index.html`, `style.css` e `main.js` foram minificados para remover espaços em branco e comentários, reduzindo o tamanho do arquivo em [X]% e melhorando o tempo de parseamento pelo navegador.
    * *Os arquivos minificados se encontram na pasta `dist/`.*
* **Compressão de Imagens:** Todas as imagens (JPG e PNG) foram comprimidas, resultando em uma redução média de [X]% no tamanho de cada arquivo, sem perda perceptível de qualidade.

### 🧑‍💻 Autor

Este projeto foi desenvolvido por:

* **Nome:** [Eduardo Santos da Silva]
* **GitHub:** [@EduardoSantos10](https://github.com/EduardoSantos10)