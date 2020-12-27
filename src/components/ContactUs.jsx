import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

const ContactUs = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [no, setNo] = React.useState("");
    const [sub, setSub] = React.useState("");
    const [message, setMessage] = React.useState("");
    return ( 
    <Paper elevation={3}>
    <CssBaseline />
    <h1>Contact Us</h1>
    <Form className="form">
    <Form.Group value={name} onChange={(e) => {
                setName(e.target.value);
            }}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"/>
    </Form.Group>

    <Form.Group value={email} onChange={(e) => {
                setEmail(e.target.value);
            }}>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email"/>
    </Form.Group>

    <Form.Group value={no} onChange={(e) => {
                setNo(e.target.value);
            }}>
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number"/>
    </Form.Group>
    
    <Form.Group value={sub} onChange={(e) => {
                setSub(e.target.value);
            }}>
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text"/>
    </Form.Group>
    
    <Form.Group value={message} onChange={(e) => {
                setMessage(e.target.value);
            }}>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
    </Form.Group>
    
                <Button variant="primary" type="submit" onClick={(e) =>{
                    alert(`Name: ${name}\nEmail: ${email}\nNumber: ${no}\nSubject: ${sub}\nMessage: ${message}\n`);
                }}>
        Submit
    </Button>
        </Form>
        
            
            
        </Paper>
     );
}
 
export default ContactUs;