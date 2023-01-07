import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./css/ArticleWeb.css";

const ArticleWeb = () => {
    return (
        <section>
            <picture>
                <source media="(max-width: 430px)" srcSet="../images/image-web-3-mobile.jpg" />
                <img className="picture-width" src="../images/image-web-3-desktop.jpg" alt="Futuristic wooden game."/>
            </picture>
            <Container fluid>
                <Row>
                    <Col className="no-padding margin-col-right" sm="4">
                        <h1>The Bright Future of Web 3.0?</h1>
                    </Col>
                    <Col className="no-padding" sm="6">
                        <p className="article-description">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                        </p>
                        <button className="red-button">READ MORE</button>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}

export default ArticleWeb;
