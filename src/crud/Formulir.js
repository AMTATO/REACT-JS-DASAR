import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="namaMakanan">
              <Form.Label>Nama makanan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama makanan"
                name="namaMakanan"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="deskripsiMakanan"
            >
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} name="deskripsiMakanan" placeholder="Masukkan deskripsi makanan"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="hargaMakanan">
              <Form.Label>Harga makanan</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan harga makanan"
                name="hargaMakanan"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
