import React from "react";
import Link from '@material-ui/core/Button';
import { Navbar,Form,Button,FormControl } from 'react-bootstrap';
import userService from "../services/UserService";


const TopMenu = () => {
    return ( 
    <>
    <Navbar bg="light" variant="light" className="topnav">
                <h2>Drexel</h2>
                
            <div className="tabs">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/contactus">Contact Us</Link>
                
                
                    {!userService.isLoggedIn() ? <>
                        
                <Link href="/login">Sign In</Link>
                <Link href="/register">Sign Up</Link>
                    </> :
                        
                        <Link color="secondary" className="linklogout" onClick={(e) => {
                            userService.logout();
                            window.location.reload();
                        }}>
                            Logout-{userService.getLoggedInUser().name}
                            </Link>}
                
            </div>
                
        <Form inline>

        </Form>
    </Navbar>
    
    <Navbar className="searchnav">
    <Form inline>
        <FormControl type="text" placeholder="Search (Laptops, Mobile, Keyboards...)" className="searchbar" />
        <Button variant="success">Search</Button>
    </Form>
    </Navbar>
    </>
    );
}
 
export default TopMenu;<div>
<ul>
    <li><a href="/">Home</a></li>
</ul></div>