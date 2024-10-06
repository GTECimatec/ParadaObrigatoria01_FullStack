// importações:
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';  
import Cart from './Cart';  

// Criando lista de produtos (utilizei alguns títulos diversos com valores aleatórios)
const products = [
  { id: 1, name: 'Dom Quixote', price: 49.90 },
  { id: 2, name: '1984', price: 35.50 },
  { id: 3, name: 'O Senhor dos Anéis: A Sociedade do Anel', price: 59.90 },
  { id: 4, name: 'Harry Potter e a Pedra Filosofal', price: 39.90 },
  { id: 5, name: 'O Pequeno Príncipe', price: 19.99 },
  { id: 6, name: 'A Metamorfose', price: 24.90 },
  { id: 7, name: 'O Alquimista', price: 29.99 },
  { id: 8, name: 'Capitães da Areia', price: 22.50 },
  { id: 9, name: 'Memórias Póstumas de Brás Cubas', price: 34.90 },
  { id: 10, name: 'Cem Anos de Solidão', price: 49.90 },
  { id: 11, name: 'O Hobbit', price: 42.99 },
  { id: 12, name: 'Crime e Castigo', price: 55.50 },
  { id: 13, name: 'A Revolução dos Bichos', price: 27.99 },
  { id: 14, name: 'O Morro dos Ventos Uivantes', price: 31.90 },
  { id: 15, name: 'Orgulho e Preconceito', price: 39.90 }
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
