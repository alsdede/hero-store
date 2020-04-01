import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                alt="food"
                src="https://static-images.ifood.com.br/image/upload/f_auto,t_medium/pratos/9a3d9da7-1ac5-49ee-a0c3-2668dec8e329/201909241002_2FTR_p.jpg"
              />
            </td>

            <td>
              <strong>Comida</strong>
              <span>R$25,00</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#e05656" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#e05656" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$50,00</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#e05656" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1928,50</strong>
        </Total>
      </footer>
    </Container>
  );
}
