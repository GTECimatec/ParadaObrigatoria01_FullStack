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
            
              <img 
                src="/imagens/book_icon-icons.png" 
                alt = "imagem do livro"
                className="book-icon" 
              />
              
            
            <p>Valor: {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button tabindex="0" onClick={() => addToCart(product)}>+ Ao Carrinho</button>
          </li>
        ))}
      </ul>

      <Link to="/cart">
        <button  tabindex="0" className="cart-button">Meu Carrinho</button>
      </Link>
    </div>
  );
};

export default ProductList;
