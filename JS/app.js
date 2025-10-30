import { handleRouting } from "../JS/router.js";
import { setupValidation } from '../JS/validation.js';

const initApp = () => {
    window.addEventListener('hashchange', () =>{
        const currentRoute = handleRouting();
        if (currentRoute === 'cadastro'){
            setupValidation();
        }
    });

    const initialRoute = handleRouting();
    if (initialRoute === 'cadastro'){
        setupValidation();
    }
};

initApp();