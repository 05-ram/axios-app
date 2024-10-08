import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Create = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h3>Add a User</h3>
            <div className="w-50 shadow bg-white rounded px-4 py-4">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" placeholder="Enter your number" />
                    </Form.Group>

                    <div className='d-flex gap-2'>
                        <Button variant='success'>Submit</Button>
                        <Link to='/'>
                            <Button>Back</Button>
                        </Link>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default Create;

//17.54