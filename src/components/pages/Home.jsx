import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
const Home = () => {
    return (
        <main>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{
                            height: "300px",
                            objectFit: "cover"
                        }}
                        className="d-block w-100"
                        src="https://i.blogs.es/3f45c4/pcpotente-ap/1366_2000.jpeg"
                        alt="Slide 1"
                    />
                    <Carousel.Caption>
                        <h3>Primer Slide</h3>
                        <p>Texto del primer banner.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{
                            height: "300px",
                            objectFit: "cover"
                        }}
                        className="d-block w-100"
                        src="https://i.blogs.es/3f45c4/pcpotente-ap/1366_2000.jpeg"
                        alt="Slide 2"
                    />
                    <Carousel.Caption>
                        <h3>Segundo Slide</h3>
                        <p>Texto del segundo banner.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{
                            height: "300px",
                            objectFit: "cover"
                        }}
                        className="d-block w-100"
                        src="https://i.blogs.es/3f45c4/pcpotente-ap/1366_2000.jpeg"
                        alt="Slide 3"
                    />
                    <Carousel.Caption>
                        <h3>Tercer Slide</h3>
                        <p>Texto del tercer banner.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="mt-3 mb-2 ms-4 me-4">
                <h2 className="mt-4 mb-4">Productos Destacados</h2>

                <div className="row g-4">
                    {[1, 2, 3].map(i => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                            <Card style={{ width: "15rem" }}>
                                <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_2X_885446-MLA94669643998_102025-F.webp" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1rem' }}>Guitarra Electroacustica</Card.Title>
                                    <Card.Text>Some</Card.Text>
                                    <Button variant="primary">Agregar al Carrito</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home
