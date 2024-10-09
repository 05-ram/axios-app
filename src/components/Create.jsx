import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [createValues, setCreateValues] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get('http://localhost:5000/users');
            const userList = response.data;

            const newId = userList.length > 0 ? Number(userList[userList.length - 1].id) + 1 : 1;

            const newUserData = { ...createValues, id: newId };

            const res = await axios.post('http://localhost:5000/users', newUserData);
            console.log(res.data);

            // Navigate after successful submission
            navigate('/');
        } catch (err) {
            console.error("Error submitting the form:", err);
        }
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h3>Add a User</h3>
            <div className="w-50 shadow bg-white rounded px-4 py-4">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your name" 
                            onChange={e => setCreateValues({ ...createValues, name: e.target.value })} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter your email" 
                            onChange={e => setCreateValues({ ...createValues, email: e.target.value })} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Enter your number" 
                            onChange={e => setCreateValues({ ...createValues, mobile: e.target.value })} 
                        />
                    </Form.Group>

                    <div className='d-flex gap-2'>
                        <Button variant='success' type='submit'>Submit</Button>
                        <Link to='/'>
                            <Button>Back</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Create;
