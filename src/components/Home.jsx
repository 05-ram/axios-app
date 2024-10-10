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
  const handleDelete = (id) => {
    const confirm = window.confirm('Are u sure u want to delete?')
    if (confirm) {
      axios.delete('http://localhost:5000/users/' + id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  }
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
                      <Link to={`/read/${d.id}`}>
                        <Button size='sm' variant='info'>Read</Button>
                      </Link>
                      <Link to={`/update/${d.id}`}>
                        <Button size='sm'>Edit</Button>
                      </Link>
                      <Button variant='danger' size='sm' onClick={e => handleDelete(d.id)}>Delete</Button>
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