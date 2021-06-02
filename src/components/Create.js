import {Form, Col, Row, Button} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Create() {
    let history = useHistory();
    const [employeeName, setEmployeeName] = useState('');
    const [wage, setWage] = useState(0);

    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');

    let params = {
        'name': employeeName,
        'wage': parseFloat(wage),
    }

    const validateData = () => {
        let check = true;
        if (!employeeName) {
            check = false;
            setError1('Vui lòng nhập tên nhân viên');
        }
        if (!wage) {
            check = false;
            setError2('Vui lòng nhập tiền công');
        }
        return check;
    }

    return (
        <div className="container my-3">
            <h2>Thêm mới nhân viên</h2>

            <Row>
                <Col xs={4}>
                    <Form.Group>
                        <Form.Label>Tên nhân viên</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên nhân viên"
                            onChange={(event) => {
                                setEmployeeName(event.target.value);
                                setError1('')
                            }}
                            value={employeeName}
                        />
                        <div className="text-danger">
                            {error1}
                        </div>
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group>
                        <Form.Label>Tiền công</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tiền công"
                            onChange={(event) => {
                                setWage(event.target.value);
                                setError2('');
                            }}
                            value={wage}
                        />
                        <div className="text-danger">
                            {error2}
                        </div>
                    </Form.Group>
                </Col>
            </Row>
            <Button
                onClick={() => {
                    if (validateData()) {
                        axios.post('http://localhost:8088/api/v1/employees/create', params)
                            .then((res) => {
                                if (res) {
                                    history.push('/list');
                                } else {
                                    alert('Thất bại');
                                }
                            })
                    }
                }}
                size='sm'
            >
                Thêm mới
            </Button>

        </div>
    );
}

export default Create;
