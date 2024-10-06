import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="container">
      <h2>Nossos Produtos:</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Valor: {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button onClick={() => addToCart(product)}>+ Ao Carrinho</button>
          </li>
        ))}
      </ul>

      {/* Adicionando o botão para ir ao carrinho, agora com a classe "cart-button" para o estilo fixo (depois tentar colocar esse botão no canto superior) */}
      <Link to="/cart">
        <button className="cart-button">Meu Carrinho</button>
      </Link>
    </div>
  );
};

export default ProductList;
