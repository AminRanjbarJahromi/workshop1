import React, { useState } from 'react';

const DataTable = () => {
    const [studentList, setStudentList] = useState([
        {
            id: 1,
            firstName: 'Amin',
            lastName: 'Ranjbar',
            age: 20,
            birthdate: '2002-01-01',
            country: 'Iran',
            city: 'Jahrom'
        },
        {
            id: 2,
            firstName: 'Vahid',
            lastName: 'Abbasi',
            age: 22,
            birthdate: '2000-01-01',
            country: 'Iran',
            city: 'BandarAbbas'
        },
        {
            id: 3,
            firstName: 'Ali',
            lastName: 'Ahmadi',
            age: 25,
            birthdate: '1998-01-01',
            country: 'Iran',
            city: 'Ahvaz'
        }
    ]);

    const TableHeader = () => {
        return (
            <thead >
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Birthdate</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    };

    const TableAction = ({ id }) => {
        const handleDelete = () => {
            setStudentList(studentList.filter((student) => student.id !== id));
        };

        return (
            <td>
                <button onClick={handleDelete}>Delete</button>
            </td>
        );
    };

    const TableRow = () => {
        return (
            <tbody>
                {studentList.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td>{student.birthdate}</td>
                        <td>{student.country}</td>
                        <td>{student.city}</td>
                        <TableAction id={student.id} />
                    </tr>
                ))}
            </tbody>
        );
    };

    return (
        <table>
            <TableHeader />
            <TableRow />
        </table>
    );
};

export default DataTable;
