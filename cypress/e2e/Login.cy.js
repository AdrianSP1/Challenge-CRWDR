import { loginPage } from "../support/pages/LoginPage";

describe('Login Test Suit', () => {
    const login = new loginPage();

    it('Login Exitoso', () => {
        login.visitarPagina();
        login.doLogin();
        login.validarLoginExitoso();
    });
    it('Login con credenciales inválidas', () => {
        login.visitarPagina();
        login.doLoginError();
        login.verificarMensajeError();
    });

    it('Login Completo', () => {
        login.doLoginCompleto();
        login.validarLoginExitoso();
    });
})
