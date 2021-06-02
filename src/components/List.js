import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Row, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

function List() {

    let history = useHistory();

    const [listEmployee, setListEmployee] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8088/api/v1/employees')
            .then((respone) => {
                setListEmployee(respone.data);
            })
    }, [])

    return (
        <div className="container my-3">
            <Row className="mb-3">
                <Col>
                    <h2>Danh sách nhân viên</h2>
                </Col>
                <Col className="text-right">
                    <Button
                        className="btn btn-danger"
                        size='sm'
                        onClick={() => {
                            history.push("/create")
                        }}
                    >
                        Create
                    </Button>
                </Col>
            </Row>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên nhân viên</th>
                        <th>Tiền công</th>
                    </tr>
                </thead>
                <tbody>
                    {listEmployee.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.wage}
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default List;
