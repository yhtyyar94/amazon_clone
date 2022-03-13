import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ClipLoader } from "react-spinners";
import "./ProductReview.css";
import { css } from "@emotion/react";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ProductReview = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const queries = useLocation().search;
  const id = queries?.slice(4, queries.length);

  useEffect(() => {
    axios
      .get(`https://amazon-backend-clone2.herokuapp.com/amazon/review/${id}`)
      .then((data) => {
        if (data.status == 200) {
          setDetails(data?.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(details);

  return (
    <div className="productDetails">
      <ClipLoader color={"#fff"} loading={loading} css={override} size={150} />
      {details && (
        <div className="productDetails_content">
          <div className="productDetails_image">
            <img src={details.imageUrl} alt="product image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductReview;
