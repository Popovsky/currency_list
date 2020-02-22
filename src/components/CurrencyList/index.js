import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './styles.css'

const CurrencyList = ({countries, exchange}) => {
    let arr = new Array();
    console.log(countries);
    console.log(exchange);
    exchange.map(el => countries.filter(e => el.cc === e.currencies[0].code ? arr.push(
        <tr>
            <td><img src={e.flag} alt=""/></td>
            <td>{e.name}</td>
            <td>{e.currencies[0].code}</td>
            <td>{el.rate}</td>
        </tr>) : null));
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>flag</th>
                            <th>country</th>
                            <th>currency</th>
                            <th>value</th>
                        </tr>
                        </thead>
                        <tbody>{arr.map(el => el)}</tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default CurrencyList;