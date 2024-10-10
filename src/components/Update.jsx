import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [createValues, setCreateValues] = useState({
        name: '',
        email: '',
        mobile: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/users/' + id)
            .then(res => setCreateValues(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5000/users/' + id, createValues)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h3>Update User</h3>
            <div className="w-50 shadow bg-white rounded px-4 py-4">
                <Form onSubmit={handleUpdate}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={createValues.name}
                            onChange={e => setCreateValues({ ...createValues, name: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={createValues.email}
                            onChange={e => setCreateValues({ ...createValues, email: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter your number"
                            value={createValues.mobile}
                            onChange={e => setCreateValues({ ...createValues, mobile: e.target.value })}
                        />
                    </Form.Group>

                    <div className='d-flex gap-2'>
                        <Button variant='success' type='submit'>Update</Button>
                        <Link to='/'>
                            <Button>Back</Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Update;