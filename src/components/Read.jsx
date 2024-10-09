import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:5000/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h3>Details Of Users</h3>
            <div className="w-50 rounded bg-white border shadow p-4">
                <div className="mb-3">
                    <strong>Name: </strong>
                    <span>{data.name}</span>
                </div>
                <div className="mb-3">
                    <strong>Email: </strong>
                    <span>{data.email}</span>
                </div><div className="mb-3">
                    <strong>Mobile: </strong>
                    <span>{data.mobile}</span>
                </div>
                <div className="d-flex gap-2">
                    <Link to={`/update/${id}`}>
                        <Button variant='success'>Edit</Button>
                    </Link>
                    <Link to='/'>
                        <Button>Back</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Read;