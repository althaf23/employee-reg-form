import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get('http://localhost:5000');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  return (
    <div>
      <Link to="/create_employee">
        <Button variant="contained" color="primary">Create Employee</Button>
      </Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.dob}</TableCell>
                <TableCell>{employee.employee_id}</TableCell>
                <TableCell>{employee.address}</TableCell>
                <TableCell>{employee.designation}</TableCell>
                <TableCell>{employee.salary}</TableCell>
                <TableCell>{employee.experience}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
