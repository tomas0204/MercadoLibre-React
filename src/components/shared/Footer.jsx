import { Container, Row, Col, Nav, Form, Button, InputGroup } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

function FooterML() {
  return (
    <footer style={{ background: '#f8f9fb', borderTop: '1px solid #e6e7ea', paddingTop: 24, paddingBottom: 24 }}>
      <Container>
        <Row className="mb-3">
          <Col md={4} sm={12} className="mb-3">
            <h5 style={{ color: '#3483FA', fontWeight: 700 }}>Mercado Libre</h5>
            <p style={{ color: '#6b7280', marginBottom: 0 }}>
              Comprá, vendé y promocioná tus productos en la plataforma líder de la región.
            </p>
          </Col>

          <Col md={4} sm={6} className="mb-3">
            <h6 style={{ fontWeight: 700 }}>Atención al cliente</h6>
            <Nav className="flex-column" style={{ color: '#6b7280' }}>
              <Nav.Link href="#">Ayuda</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
              <Nav.Link href="#">Devoluciones</Nav.Link>
            </Nav>
          </Col>

          <Col md={4} sm={6} className="mb-3">
            <h6 style={{ fontWeight: 700 }}>Suscribite</h6>
            <p style={{ color: '#6b7280', marginBottom: 8 }}>Recibí ofertas y novedades por correo.</p>
            <Form>
              <InputGroup>
                <Form.Control placeholder="Tu correo" aria-label="Tu correo" />
                <Button variant="primary">Enviar</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} sm={12} className="mb-2">
            <small style={{ color: '#6b7280' }}>© {new Date().getFullYear()} Mercado Libre S.R.L. - Todos los derechos reservados</small>
          </Col>
          <Col md={6} sm={12} className="text-md-end">
            <Nav className="justify-content-md-end">
              <Nav.Link href="#">Términos</Nav.Link>
              <Nav.Link href="#">Privacidad</Nav.Link>
              <Nav.Link href="#">Seguridad</Nav.Link>
              <Nav.Link href="#" className="d-flex align-items-center">
                <FiFacebook size={18} className="me-2" />
                <FiInstagram size={18} className="me-2" />
                <FiTwitter size={18} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterML;