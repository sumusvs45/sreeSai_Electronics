/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductsCards = ({ products }) => {
  const trimDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
  };
  return (
    <div className="grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div className="product__card" key={product._id || index}>
          <div className="relative">
            <Link to={`/shop/${product.id}`}>
              <img
                src={product.image}
                alt="product-img"
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </Link>
            <div></div>
            {/* productDescription */}
            <div className="div">
              <h4 className="text-blue-600 font-bold  px-2 py-1 rounded-md">
                {product.name}
              </h4>
              <p className="text-gray-700 mt-2">{trimDescription(product.description, 20)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
