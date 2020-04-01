import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/9a3d9da7-1ac5-49ee-a0c3-2668dec8e329/201909241002_2FTR_p.jpg"
          alt="food"
          width="200px"
        />
        <strong>Comida</strong>
        <span>R$12,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/9a3d9da7-1ac5-49ee-a0c3-2668dec8e329/201909241002_2FTR_p.jpg"
          alt="food"
          width="200px"
        />
        <strong>
          Comida dasdasda dasd d dsadsa das das das dsadas ddas dadas d
        </strong>
        <span>R$12,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/9a3d9da7-1ac5-49ee-a0c3-2668dec8e329/201909241002_2FTR_p.jpg"
          alt="food"
          width="200px"
        />
        <strong>Comida</strong>
        <span>R$12,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/9a3d9da7-1ac5-49ee-a0c3-2668dec8e329/201909241002_2FTR_p.jpg"
          alt="food"
          width="200px"
        />
        <strong>Comida</strong>
        <span>R$12,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/9a3d9da7-1ac5-49ee-a0c3-2668dec8e329/201909241002_2FTR_p.jpg"
          alt="food"
          width="200px"
        />
        <strong>Comida</strong>
        <span>R$12,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/9a3d9da7-1ac5-49ee-a0c3-2668dec8e329/201909241002_2FTR_p.jpg"
          alt="food"
          width="200px"
        />
        <strong>Comida</strong>
        <span>R$12,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" />3
          </div>
          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
