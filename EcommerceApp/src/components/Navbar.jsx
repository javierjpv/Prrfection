import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
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
import { BsList } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export const Navbar = () => {
  const { user, startLogout } = useAuthStore();
  const { startClearingPedidos } = usePedidosStore();
  const { total } = useCarritoStore();

  const navigate = useNavigate();

  const handleReturnToStart = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleStartLogout = () => {
    localStorage.removeItem("token");
    startLogout();
    startClearingPedidos();
  };

  return (
    <>
     <nav className="navbar fixed-top navbar-light bg-light pt-0">
      <div className="d-flex flex-row justify-content-between align-items-center w-100">

        <div className="dropdown text-center">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsList size={17} />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="nav-item">
              <Link className="dropdown-item" to="/gatos">
                Gatos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="dropdown-item" to="/perros">
                Perros
              </Link>
            </li>
          </ul>
        </div>

        <ul className="d-flex align-items-center flex-row nav">
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">
              Inicio
            </Link>
          </li>

          {user.userState !== "AUTHENTICATED" && (
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/auth">
              <FaUser  size={12} color="#000000" /> Auth
              </Link>
            </li>
          )}

          {user.userState === "AUTHENTICATED" && (
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/pedidos">
                Pedidos
              </Link>
            </li>
          )}

          {user.userState === "AUTHENTICATED" ? (
            <li className="nav-item">
              <button onClick={handleStartLogout} className="btn btn-danger">
                Logout
              </button>
            </li>
          ) : (
            ""
            // <p>No estás registrado</p>
          )}
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/carrito">
              <MdOutlineShoppingCart />
              <span className="bg-danger text-white rounded-circle">
                {total}
              </span>{" "}
              Mi cesta
            </Link>
          </li>
        </ul>
      </div>
    </nav>

      <div className="mt-5 mb-3">
        <div className="text-center mb-4 mt-5 pt-4">
          <a href="" onClick={handleReturnToStart}>
            <FaCat size={30} color="#000000" />
          </a>
          <h1 className="text-primary">Prrfection</h1>
        </div>
      </div>

      <Routes>
        {/* Solo se debe acceder a esta ruta sin no estas registrado ya que es el login */}
        <Route path="auth" element={<Auth />} />

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
