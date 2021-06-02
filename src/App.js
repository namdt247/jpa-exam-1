import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import List from "./components/List";
import {Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./components/Create";

function App() {

    return (
        <BrowserRouter>
            <div className="container">
                <Row className='mt-4'>
                    <Col xs='auto'>
                        <Link to="/list">
                            Danh sách nhân viên
                        </Link>
                    </Col>
                    <Col xs='auto' className="mx-3">
                        <Link to="/create">
                            Thêm mới nhân viên
                        </Link>
                    </Col>
                </Row>
            </div>

            <Switch>
                <Route exact path="/list">
                    <List/>
                </Route>
                <Route exact path="/create">
                    <Create/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
