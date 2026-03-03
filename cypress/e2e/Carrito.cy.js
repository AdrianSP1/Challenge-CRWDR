import { CarritoPage } from "../support/pages/CarritoPage";
import { loginPage } from "../support/pages/LoginPage";

describe('Carrito Test Suit', () => {
    const carrito = new CarritoPage();
    const login = new loginPage(); 

    it('Agregar productos al carrito', () => {
        login.doLoginCompleto();
        carrito.agregarProductoAlCarrito();
    });

    it('Remover productos del carrito', () => {
        login.doLoginCompleto();
        carrito.removerProductoDelCarrito();
    });

});