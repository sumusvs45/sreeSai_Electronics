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
          <div className="bg-white p-4 rounded-md shadow-md h-[400px] w-[280px]">
            {/* Container for image and content */}
            <div className="flex flex-col h-full">
              {/* Image box */}
              <div className="flex-1 overflow-hidden">
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.image}
                    alt="product-img"
                    className="w-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </div>

              {/* Content box */}
              <div className="mt-2 flex flex-col justify-between">
                <h4 className="text-blue-600 font-bold px-2 py-1 rounded-md text-sm">
                  {product.name}
                </h4>
                <p className="text-gray-700 mt-2 text-sm">
                  {trimDescription(product.description, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
