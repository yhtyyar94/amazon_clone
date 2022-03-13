import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./SearchResults.css";
import { useStateValue } from "./StateProvider";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SearchResults = () => {
  const [{ items }] = useStateValue();
  return (
    <div className="searchResults">
      <h1>Search Results</h1>
      {items?.length > 0 ? (
        items?.map(
          (item, index) =>
            item.title && (
              <CheckoutProduct
                key={"searchResults" + item.id ? item.id : index}
                id={item.id}
                title={item.title}
                image={item.imageSrc}
                price={parseInt(item?.salesPrice)}
                rating={parseInt(item?.rating.replace(" out of 5 stars", ""))}
                addBasket={true}
                hideButton
              />
            )
        )
      ) : (
        <ClipLoader color={"#fff"} loading={true} css={override} size={150} />
      )}
    </div>
  );
};

export default SearchResults;
