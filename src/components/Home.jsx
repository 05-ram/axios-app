import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h3>List Of Users</h3>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to='/create'>
            <Button variant='success'>
              Add +
            </Button>
          </Link>
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i} className='p-2'>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.mobile}</td>
                  <td>
                    <div className="d-flex gap-2 align-items-center">
                      <Button size='sm' variant='info'>Read</Button>
                      <Button size='sm'>Edit</Button>
                      <Button variant='danger' size='sm'>Delete</Button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Home;