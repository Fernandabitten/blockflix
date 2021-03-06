import { useContext } from "react";
import { MyContext } from "../../context/context";
import Product from "../../componentes/Product/Product";
import Layout from "../../componentes/Layoute/Layout";
import Button from "../../componentes/UI/Button/Button";
import {
  ContainerCheckoutStyled,
  CheckoutStyled,
  CardStyled,
  CountStyled,
  CartItemsStyled,
} from "./CheckoutPaje.styled";

/**
 *5.1.[ok] remover itens de um pedido;
 *5.2.[ok] confirmar o pedido;
 *5.3.[ok] visualizar o total do pedido.
 */

export default function Checkout({ item }) {
  const { cartItems, setCartItems } = useContext(MyContext);
  const sum = cartItems
    .reduce((currentValue, nextItem) => {
      return currentValue + nextItem.vote_average * 10;
    }, 0)
    .toFixed(2);

  const purchaseHistory = JSON.parse(
    localStorage.getItem("purchaseHistory") || "[]"
  );

  const doCheckout = () => {
    const newPuchese = {
      date: new Date(),
      items: cartItems,
    };
    purchaseHistory.push(newPuchese);
    localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory));

    setCartItems([]);
    localStorage.setItem("cartList", []);
  };

  const itemOrItens = cartItems.length > 1 ? "itens" : "item";

  return (
    <Layout>
      <ContainerCheckoutStyled>
        <CheckoutStyled>
          <h1>CHECKOUT</h1>
          <CountStyled>
            {cartItems.length} {itemOrItens} no carrinho
          </CountStyled>
          <ul className="products">
            {cartItems.map((item, key) => (
              <li key={key} className="row">
                <Product
                  key={item}
                  item={item}
                  itemName={item.title}
                  idItem={item.id}
                />
              </li>
            ))}
          </ul>
        </CheckoutStyled>

        <CardStyled>
          <div>
            <h3>TOTAL DO CARRINHO</h3>
            <ul className="product">
              {cartItems.map((item, index) => (
                <li key={index} className="row">
                  <CartItemsStyled>
                    <div className="productTitle">{item.title}</div>{" "}
                    <div className="average">
                      R$ {(item.vote_average * 10).toFixed(2)}
                    </div>
                  </CartItemsStyled>
                </li>
              ))}
            </ul>
            <br />
            <h2 className="totalSum"> R$ {sum} </h2>
            <div>
              <Button
                component="button"
                onClick={doCheckout}
                theme="contained-checkout"
                className="buttonCheckout"
                style={{
                  maxWidth: "90%",
                  marginLeft: "5%",
                }}
              >
                Confirmar pedido
              </Button>
            </div>
          </div>
        </CardStyled>
      </ContainerCheckoutStyled>
    </Layout>
  );
}
