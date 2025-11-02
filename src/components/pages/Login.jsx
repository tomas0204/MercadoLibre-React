import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import{ Link, NavLink} from 'react-router';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Inicio de sesión simulado");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100 justify-content-center">
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-4">Iniciar Sesión</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
              <Button as={Link} to={"/home"} variant="transparent" className="w-100" style={{ marginTop: '10px', color: '#3483FA' }}>
                or sign up
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;