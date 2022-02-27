import React, { useContext } from "react";
import { MyContext } from "../../context/context";
import {
  AccordionStyled,
  Button,
  AccordionBoxItems,
  AccordionPainel,
  AcordionItem,
  ImgStyled,
  InfoItemStyled,
} from "./Accordion.styled";

function Accordion({ purchase }) {
  const { addItemToCart } = useContext(MyContext);

  const totalPrice = purchase.items.reduce((currentValue, nextItem) => {
    return currentValue + nextItem.vote_average * 10;
  }, 0);
  const total = totalPrice.toFixed(2);

  const accordionOnCLick = (purchase) => {
    purchase.target.classList.toggle("active");
    const accordionPanel = purchase.target.nextSibling;
    if (accordionPanel.style.maxHeight) {
      accordionPanel.style.maxHeight = null;
    } else {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  };

  const onClickAddToCart = () => {
    addItemToCart(purchase.items);
  };

  const getDate = (purchaseDate) => {
    const date = new Date(purchaseDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const dateFormatted = getDate(purchase.date);
  const itemOrItens = purchase.items.length > 1 ? "itens" : "item";

  return (
    <AccordionStyled>
      <Button onClick={accordionOnCLick}>
        {dateFormatted} - {purchase.items.length} {itemOrItens} - Total R${" "}
        {total} &emsp; &emsp; &darr;
      </Button>
      <AccordionPainel>
        {purchase.items.map((item, key) => {
          return (
            <AccordionBoxItems key={key}>
              <AcordionItem>
                <ImgStyled>
                  <>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                      alt={""}
                    />
                  </>
                </ImgStyled>
                <InfoItemStyled>
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                  <div>R$ {(item.vote_average * 10).toFixed(2)}</div>
                  <div>{item.overview}</div>
                </InfoItemStyled>
              </AcordionItem>
            </AccordionBoxItems>
          );
        })}
        <Button
          size="small"
          color="secondary"
          onClick={onClickAddToCart}
          style={{
            color: "#fff",
            textAlign: "center",
            backgroundColor: "#D3840B",
            fontWeight: "bold",
            fontSize: "100%",
          }}
        >
          Comprar de novo
        </Button>
      </AccordionPainel>
    </AccordionStyled>
  );
}

export default Accordion;
