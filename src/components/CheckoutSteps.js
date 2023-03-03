import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Đăng ký</Col>
      <Col className={props.step2 ? 'active' : ''}>Giao hàng</Col>
      <Col className={props.step3 ? 'active' : ''}>Thanh toán</Col>
      <Col className={props.step4 ? 'active' : ''}>Đặt hàng</Col>
    </Row>
  );
}
