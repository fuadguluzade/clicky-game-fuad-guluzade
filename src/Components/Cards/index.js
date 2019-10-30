import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import {Row} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

import kane from '../../images/kane.jpg'
import messi from '../../images/messi.jpg'
import immobile from '../../images/immobile.jpg'
import lewandowski from '../../images/lewandowski.jpg'
import hazard from '../../images/Hazard.jpg'
import mbappe from '../../images/mbappe.jpg'
import modric from '../../images/modric.jpg'
import neymar from '../../images/Neymar.jpg'
import ronaldo from '../../images/ronaldo.jpg'
import sane from '../../images/sane.jpg'
import suarez from '../../images/suarez.jpg'
import vandijk from '../../images/vandijk.jpg'

export default (props) => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <img src={kane} alt="football"  />
                </Col>
                <Col md={3}>
                    <img src={messi} alt="football"/>
                </Col>
                <Col md={3}>
                    <img src={immobile} alt="football"/>
                </Col>
                <Col md={3}>
                    <img src={lewandowski} alt="football"/>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={3}>
                    <img src={hazard} alt="football" />
                </Col>
                <Col md={3}>
                    <img src={mbappe} alt="football" />
                </Col>
                <Col md={3}>
                    <img src={modric} alt="football" />
                </Col>
                <Col md={3}>
                    <img src={neymar} alt="football" />
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={3}>
                    <img src={ronaldo} alt="football" />
                </Col>
                <Col md={3}>
                    <img src={sane} alt="football"/>
                </Col>
                <Col md={3}>
                    <img src={suarez} alt="football"/>
                </Col>
                <Col md={3}>
                    <img src={vandijk} alt="football"/>
                </Col>
            </Row>
        </Container>
    )
}