import {getHomeTemplate, getProjetosTemplate, getCadastroTemplate} from '../JS/templater.js';

const routes = {
    '': getHomeTemplate,
    'home': getHomeTemplate,
    'projetos': getProjetosTemplate,
    'cadastro': getCadastroTemplate,
};

// Função principal de roteamento
export const handleRouting = () =>{
    const hash = window.location.hash.substring(1);

    const contentContainer = document.getElementById('app-content');

    const templateFunction = routes[hash] || routes['home'];

    if (contentContainer){
        contentContainer.innerHTML = templateFunction();
    }

    if (hash === 'cadastro'){
        return 'cadastro';
    }
    return hash;
};