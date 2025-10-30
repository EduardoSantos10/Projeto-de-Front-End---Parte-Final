// 1. Template da Página HOME
export const getHomeTemplate = () => {
    return `
        <section>
            <h2>Missão e Impacto</h2>
            <p>Criado em 2025 por pessoas que querem mudar o mundo através da educação tecnológica, somos uma organização que busca orientar os público jovem a se direcionar com estudos e buscar um rumo na sua trajetória profissional. Com as tecnologia emergentes surgindo pelos 4 cantos do mundo e o avanço da Inteligência Artificial, queremos trazer a capacidade de se desenvolver com os nossos cursos oferecidos.</p>
        </section>

        <section>
            <h2>Cursos que Oferecemos: </h2>
            <ol>
                <li>Lógica de Programação</li>
                <li>Desenvolvimento Front-End</li>
                <li>Desenvolvimento Backend</li>
            </ol>
        </section>

        <article class="ImagemLab">
            <img class="imgLab" src="../Assets/img/laboratorios de informatica 01.jpg" alt="laboratorio">
        </article>
    `;
};

// 2. Template da Página PROJETOS
export const getProjetosTemplate = () => {
    return `
        <h2>Acompanhe os Nossos Trabalhos</h2>
        <section>
            <article>
                Ofereça seu tempo e ajuda ajudando o próximo, seja um mentor da nossa campanha.
                Com o intuito de ajudar o próximo e fazer o bem a sociedade, iremos dar o melhor apoio possível aos colaboradores Através de aulas interativas e práticas, você irá se inserir no programa com treinamentos e orientações
            </article>

            <h3>Seja um Mentor</h3>
            <article>Procure a nossa ONG, entre em contato ou se faça presente no local. Iremos avaliar sobre seus históricos, saber um pouco mais do nosso candidato, quais são suas vocações e o porque quer se juntar a nós.</article>

            <h2>Invista na Educação</h2>
            <article>
                Você pode realizar a sua doação com PIX ou através de depósitos bancários. Todas as doações serão usadas em infraestruturas, bolsas de estudos e materiais para os jovens.
            </article><br><br>

            <article class="Mentor">
                <img class="ment" src="../Assets/img/mentor.jpeg" alt="men">
            </article>
        </section>
    `;
};

// 3. Template da Página CADASTRO (Atenção ao ID do Formulário!)
export const getCadastroTemplate = () => {
    return `
        <h2>Preencha o Formulário</h2>
        
        <form id="cadastroForm" action="javascript:void(0)" method="POST"> 
            <legend><strong>Informações Pessoais</strong></legend><br>
            
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" placeholder="Nome" required><span id="nome-error" class="error-message"></span><br><br>
            
            <label for="email">E-mail:</label>
            <input type="email" id="email" placeholder="Email" required><span id="email-error" class="error-message"></span><br><br>
            
            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" placeholder="Cidade" required><span id="cidade-error" class="error-message"></span><br><br>

            <div>
                <button type="submit">Finalizar Cadastro</button>
                <button type="reset">Limpar Campos</button><br><br>
            </div>
        </form>

        <article class="ImagemLab">
            <img class="imgLab" src="../Assets/img/cadastro.jpg" alt="cad">
        </article>
    `;
};
