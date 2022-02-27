import { useContext } from "react";
import { MyContext } from "../../context/context";
import { useHistory } from "react-router-dom";
import { ProductBox } from "./Product.styled";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Product({ itemName, item, idItem }) {
  const { deleteItemFromCart } = useContext(MyContext);

  const history = useHistory();
  const goToDetailMovie = () => {
    history.push(`/movies/${idItem}`);
  };

  const onRemoveProduct = () => {
    deleteItemFromCart(idItem);
  };

  return (
    <ProductBox>
      <div className="containerProduct">
        <div className="thumbnail">
          <img
            onClick={goToDetailMovie}
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt={""}
            className="imgPoster"
          />
        </div>

        <div className="detail">
          <div>
            <h3>{itemName}</h3>
          </div>
          <div className="price">
            <div className="itemPrice">
              R$ {(item.vote_average * 10).toFixed(2)}{" "}
            </div>
            <div className="bin">
              <DeleteForeverIcon
                onClick={onRemoveProduct}
                fontSize="large"
                style={{
                  color: "red",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </ProductBox>
  );
}

export default Product;
