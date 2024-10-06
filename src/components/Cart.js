import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div className="container">
      <h2>Seu Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Valor: {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <button onClick={() => removeFromCart(item)}>Remover</button>
            </li>
          ))}
        </ul>
      )}

      {/* Botão para voltar para a lista de produtos com um botão estilizado */}
      <Link to="/" className="link-button">Retornar à Produtos</Link>
    </div>
  );
};

export default Cart;
