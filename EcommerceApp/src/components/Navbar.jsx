import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { ProductPage } from "../Productos/Pages/ProductPage";
import { Carrito } from "../Carrito/Pages/Carrito";
import { Auth } from "../Auth/Pages/Auth";
import { useAuthStore } from "../Hooks/useAuthStore";
import { PedidosPage } from "../Pedidos/pages/PedidosPage";
import { usePedidosStore } from "../Hooks/usePedidosStore";
import { ShipingPage } from "../checkout/pages/ShipingPage";
import { AdressPage } from "../checkout/pages/AdressPage";
import { PaymentPage } from "../checkout/pages/PaymentPage";
import { SuccessPage } from "../checkout/pages/SuccessPage";
import { Gatos } from "../pages/Gatos";
import { Perros } from "../pages/Perros";
import { ErrorPage } from "../checkout/pages/ErrorPage";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCarritoStore } from "../Hooks/useCarritoStore";
import { FaCat } from "react-icons/fa";

export const Navbar = () => {
  const { user, startLogout } = useAuthStore();
  const { startClearingPedidos } = usePedidosStore();
  const {total,carrito}=useCarritoStore();

  const handleStartLogout = () => {
    localStorage.removeItem("token");
    startLogout();
    startClearingPedidos();
   
  };

  return (
    <>
<div className="mt-5 mb-3"> 
<div className="text-center mb-4">
<FaCat size={30} color="#000000"/>
<h1 className="text-primary">Prrfection</h1>
</div>
  

<ul className="d-flex flex-column align-items-center flex-md-row nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/carrito">
          <MdOutlineShoppingCart/><span className="bg-primary text-white rounded-circle">{total}</span> Mi cesta
          </Link>
        </li>

        {user.userState !== "AUTHENTICATED" && (
          <li className="nav-item">
            <Link className="nav-link" to="/auth">
              Auth
            </Link>
          </li>
        )}

        {user.userState === "AUTHENTICATED" && (
          <li className="nav-item">
            <Link className="nav-link" to="/pedidos">
              Pedidos
            </Link>
          </li>
        )}

        <li className="nav-item">
          <Link className="nav-link" to="/about">
            Sobre nosotros
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contacto
          </Link>
        </li>

        {user.userState === "AUTHENTICATED" ? (
          <li className="nav-item">
            <button onClick={handleStartLogout} className="btn btn-danger">
              Logout
            </button>
          </li>
        ) : (
          <p>No estás registrado</p>
        )}
      </ul>

      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/gatos">
              Gatos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/perros">
              Perros
            </Link>
          </li>
        </ul>
      </div>
</div>



      <Routes>
        {/* Solo se debe acceder a esta ruta sin no estas registrado ya que es el login */}
        <Route
          path="auth"
          element={
  
            <Auth />
          }
        />


        {/* Solo se debe acceder a esta ruta sin no estas registrado ya que es el login */}

        {/* A estas rutas se puede acceder tanto si estas registrado como si no estas registardo */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="carrito" element={<Carrito />} />

        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="gatos" element={<Gatos />} />
        <Route path="perros" element={<Perros />} />



        <Route path="pedidos" element={<PedidosPage />} />

{/* /checkout */}
<Route path="/checkout">
  {/* Ruta para ingresar la dirección */}
  <Route path="adress" element={<AdressPage />} />

  {/* Ruta para seleccionar el método de envío */}
  <Route path="shiping" element={<ShipingPage />} />

  {/* Ruta para seleccionar el método de pago */}
  <Route path="payment" element={<PaymentPage />} />
    {/* Ruta para seleccionar el método de pago */}
    <Route path="error" element={<ErrorPage />} />

  {/* Ruta para la página de éxito */}
  <Route path="success" element={<SuccessPage />} />
</Route>



        
      </Routes>
    </>
  );
};
