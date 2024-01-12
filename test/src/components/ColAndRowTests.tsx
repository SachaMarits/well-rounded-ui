// @ts-ignore
import { Collapse, Row, Col } from "well-rounded-ui";
import Title from "./Title";

export default function ColAndRowTests() {
  return (
    <Collapse title={<Title text="Row and Col" />} className="mb-3">
      <Row />
      <Row className="mt-3" />
      <Row className="mt-3">Row with raw content</Row>
      <Row className="mt-3">
        <Col className="bg-primary">Automatic Col</Col>
        <Col className="bg-secondary">Automatic Col</Col>
        <Col className="bg-success">Automatic Col</Col>
        <Col className="bg-warning">Automatic Col</Col>
      </Row>
      <Row className="mt-3">
        <Col md={12} lg={12} xl={12} className="bg-primary">
          Col 12
        </Col>
        <Col xs={6} sm={6} md={12} lg={12} xl={12} className="bg-secondary">
          Col md-lg-xl 12 xs-sm 6
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="bg-success">
          Col 6
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="bg-warning">
          Col 6
        </Col>
      </Row>
    </Collapse>
  );
}
