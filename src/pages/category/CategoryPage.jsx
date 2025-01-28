import { useEffect, useState } from 'react';
import products from '../../data/product.json';
import { useParams } from 'react-router-dom';
import ProductsCards from "../../pages/Shop/ProductsCards";

const CategoryPage = () => {
    const { categoryname } = useParams();
    const [filterProducts, setFilterProducts] = useState([]);
    const [categoryDescription, setCategoryDescription] = useState('');
    
    // Define a mapping of category names to descriptions
    const categoryDetails = {
        security: "Protect your home or business with top-notch security systems.",
        communication: "Stay connected with the best communication devices and systems.",
        displays: "Explore a wide range of display solutions for every need.",
        solution: "Find tailored solutions for your business and personal needs.",
        computers: "Discover powerful computers and accessories for all your tasks."
    };

    useEffect(() => {
        // Filter products based on category
        const filtered = products.filter(
            (product) => product.category === categoryname.toLowerCase()
        );
        setFilterProducts(filtered);

        // Set category description based on category name
        const description = categoryDetails[categoryname.toLowerCase()];
        setCategoryDescription(description || "No description available for this category.");
    }, [categoryname]);

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>{categoryname}</h2>
                <p className="text-xl text-center">{categoryDescription}</p>
            </section>
            

            {/* Product Cards Section */}
            <div className="section__container">
                <ProductsCards products={filterProducts} />
            </div>
        </>
    );
};

export default CategoryPage;
