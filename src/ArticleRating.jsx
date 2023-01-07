import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "./css/ArticleRating.css";

const ArticleRating = () => {
    return (
        <Row className="ratings">
            <Col className="rating">
                <img src="../images/image-retro-pcs.jpg" alt="Retro PC." className="image"/>
                <div className="info">
                    <p className="rank">01</p>
                    <h3 className="title">Reviving Retro PCs</h3>
                    <p className="subtitle">  What happens when old PCs are given modern upgrades?
                    </p>
                </div>
            </Col>
            <Col className="rating">
                <img src="../images/image-top-laptops.jpg" alt="Gaming keyboard." className="image"/>
                <div className="info">
                    <p className="rank">02</p>
                    <h3 className="title">Top 10 Laptops of 2022
                    </h3>
                    <p className="subtitle">Our best picks for various needs and budgets.
                    </p>
                </div>
            </Col>
            <Col  className="rating">
                <img src="../images/image-gaming-growth.jpg" alt="A gamepad in the air" className="image"/>
                <div className="info">
                    <p className="rank">03</p>
                    <h3 className="title">The Growth of Gaming</h3>
                    <p className="subtitle">How the pandemic has sparked fresh opportunities.
                    </p>
                </div>
            </Col>
        </Row>

     );
}

export default ArticleRating ;
