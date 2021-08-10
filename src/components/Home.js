import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Resources/home.css";
import Header from './Header';
import Sidebar from './Sidebar';

function Home(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/products')
            .then(
                res => {
                    setProducts(res.data.data);
                })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(products);

    return (
        <>
        <Header/>
        <Sidebar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                       <h1 className="heading">Products</h1>
                    </div>                  
                    <div>
                    {products && products.map((item) =>
                        <div className="card">
                            <div className="card-body">
                                <h3>Name: {item.name}</h3>
                                <p>Pantone - Value: {item.pantone_value}</p>
                                <p>Color: {item.color}</p>
                                <p>Year: {item.year}</p>
                            </div>
                        </div>
                         )}
                    </div>
                </div>
            </div>
       
        </>
    )
};
export default Home;

