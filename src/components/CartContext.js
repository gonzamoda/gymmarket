import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (producto) => {
    if (isInCart(producto.id)) {
      const productoViejo = carrito.find((p) => p.id === producto.id);

      const nuevaCantidad = producto.cantidad;
      const cantidadVieja = productoViejo.cantidad;

      const productoNuevo = {
        ...producto,
        cantidad: nuevaCantidad + cantidadVieja,
      };

      const nuevoCarrito = carrito.filter((el) => el.id !== producto.id);

      setCarrito([...nuevoCarrito, productoNuevo]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const removeProduct = (id) => {
    const nuevoEstadoCarrito = carrito.filter((p) => p.id !== id);
    setCarrito(nuevoEstadoCarrito);
  };

  const clear = () => {
    setCarrito([]);
  };

  const isInCart = (id) => {
    return carrito.find((producto) => producto.id === id);
  };

  const contexto = { carrito, addProduct, clear, removeProduct };

  return <Provider value={contexto}>{children}</Provider>;
};
export default CartContext;
