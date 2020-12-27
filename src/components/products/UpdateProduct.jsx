import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import productService from "./../../services/ProductService";



    const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
        },
    },

    button: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3),
    },
}));

const UpdateProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [link, setlink] = React.useState("");
    const classes = useStyles();
    const id = props.match.params.id;
    React.useEffect(() => {
        productService.getSingleProduct(id).then((data) => {
        setName(data.name);
        setPrice(data.price);
        setlink(data.link);
        });
    }, [id]);
    return (
        <>
        <CssBaseline />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
                Update Product
            </Typography>
            
            <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Product Name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => {
                setName(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            label="Price"
            fullWidth
            variant="outlined"
            value={price}
            onChange={(e) => {
                setPrice(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Image Link"
            fullWidth
            variant="outlined"
            value={link}
            onChange={(e) => {
                setlink(e.target.value);
            }}
          />
            
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(e) => {
                productService
                .updateProduct(id, { name, price, link })
                .then((data) => {
                    console.log(data);
                    props.history.push("/products");
                })
                .catch((err) => {
                    console.log(err);
                });
            }}
            >
            Update
            </Button>
        </Grid>
    </Grid>
            </Paper>
        </main>
        </>
    );
}

export default UpdateProduct;