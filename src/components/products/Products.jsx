import React from "react";
import SingleProduct from "./SingleProduct";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from "@material-ui/core";
import { Button} from 'react-bootstrap';
import productService from "./../../services/ProductService";
import userService from "./../../services/UserService";

    const Products = (props) => {
    const [products, setProducts] = React.useState([]);
    const getData = () => {
        productService
        .getProducts()
        .then((data) => {
            setProducts(data);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    // getData();
    React.useEffect(getData, []);
    const handleNewProductClick = () => {
    console.log(props);
    props.history.push("/products/new");
  };
    return (
        <div>
            <CssBaseline />
            <h1>Products</h1>
            {userService.isLoggedIn() && (
                <Button variant="success" className="newpro" onClick={handleNewProductClick}    >Add New Product</Button>
            )}
        {products.length === 0 ? (
            <p>There are no products</p>
        ) : (
            <Grid container spacing={3} >
            {products.map((product, index) => (
                <SingleProduct key={index} product={product} onDelete={getData}/>
            ))}
            <Grid item xs={12}></Grid>
            </Grid>
        )}
        </div>
        
  );
};

export default Products;