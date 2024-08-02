import React, { useState, useEffect } from "react";
import "./productListingPage.css"
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function ProductListingPage() {
    const navigate = useNavigate();
    const navigateToProductDetailPage = () => {
        // 👇️ navigate to /contacts
        navigate('/productDetailPage');
    };

    const productList = [{
        name: 'Smart Garden 3',
        image: "1.jpeg",
        desc: 'The perfect equipment for growing herbs all year round.',
        price: '129.99 CAD'
    },
    {
        name: 'Indoor Growlight ',
        image: '2.jpeg',
        desc: 'It is a complete, ready-to-grow indoor hydroponics garden.',
        price: '199.95 CAD'
    },
    {
        name: 'Fixed Wall System',
        image: '3.jpeg',
        desc: 'Transform a simple wall for growing natural fruits & veggies.',
        price: '599 CAD'
    },
    {
        name: 'Hydroponics System',
        image: '4.jpeg',
        desc: 'It works like a capsule coffee machine, but for plants.',
        price: '119.99'
    },
    {
        name: 'Home Growing System',
        image: '5.jpeg',
        desc: 'Harvesting vegetables from comfort of your living room. ',
        price: '350 CAD'
    },    {
        name: 'Aero Harvest',
        image: '6.jpeg',
        desc: 'An indoor garden that anyone can enjoy.',
        price: '137.99'
    }
  
    ];
    const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");

    function handleSearchClick() {
        if (searchVal === "") {
            setProducts(productList); return;
        }

        const filterBySearch = productList.filter((item) => {
            const productName = `${item.name}`;
            // if (productName.toLowerCase()
            //     .includes(searchVal.toLowerCase())) { return ; }
            return productName.toLowerCase().includes(searchVal.toLowerCase());
        })
        setProducts(filterBySearch);
    }



    return (
        <div>
            <form className="search-wrapper">
                <input className="search-term"
                    onChange={e => setSearchVal(e.target.value)}
                    placeholder="Search by product name"
                />
                <div className="search-icon"><BsSearch onClick={handleSearchClick} /></div>
                {/* <input
                    className="search-term"
                    type="text"
                    placeholder="Search by first name or last name"
                    value={searchVal}
                    onChange={handleSearchTermChange}
                /> */}
            </form>
            <div className="container">
                <ul className="card-grid">
                    {products.map((productData) => (
                        <li>
                            <article className="card">
                                <div className="card-image">
                                    <img src={productData.image} alt="user-profile"></img>
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name"> {productData.name}</h2>
                                    <ol className="card-list">
                                        <li>
                                             <span>{productData.desc}</span>
                                        </li>
                                        <li>
                                            <b>Price: <span>{productData.price}</span></b>
                                        </li>
                                    </ol>
                                    <button onClick={() => { navigateToProductDetailPage(productData._id) }}>Know more</button>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );

}
export default ProductListingPage;

// https://bobbyhadz.com/blog/react-onclick-redirect