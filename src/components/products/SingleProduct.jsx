import React from "react";
import { Grid } from "@material-ui/core";
import productService from "./../../services/ProductService";
import userService from "./../../services/UserService";
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    marginLeft:20,
    height: 300,
    width: 300,
  },
});


const SingleProduct = (props) => {
    const { product, onDelete, history } = props;
    const classes = useStyles();
  console.log(props);
    return (
        <Grid item xs={4} >
<Card className={classes.root}>

        <CardMedia
          className={classes.media}
          image={product.link}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h7">
            Rs.{product.price}
          </Typography>
        </CardContent>

                
        {userService.isAdmin() && (
    <CardActions>
        <Button variant="outlined" size="small" color="primary" onClick={(e) => {
            console.log("navigate to update");
            history.push("/products/update/" + product._id);
            }}>
                            Update
            </Button>
            
        <Button variant="outlined" size="small" color="secondary" onClick={(e) => {
            productService
            .deleteProduct(product._id)
            .then((data) => {
                console.log(data);
                onDelete();
            })
                .catch((err) => {
                console.log(err);
            });
        }}>
            Delete
            </Button>
                    
            </CardActions>
                )}


    {!userService.isAdmin() && (
    <CardActions>
        <Button variant="outlined" size="small" disabled>
            Update
        </Button>
            
        <Button variant="outlined" size="small" disabled>
            Delete
        </Button>
                    
        </CardActions>
    )}
    </Card>
</Grid>
    );
};

export default withRouter(SingleProduct);