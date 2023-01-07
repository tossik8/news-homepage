import './css/App.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleRating from './ArticleRating';
import ArticleNews from './ArticleNews';
import ArticleWeb from './ArticleWeb';
import Header from './Header';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import Attribution from './Attribution';

function App() {
  const isOpen = useSelector(state => state.menuReducer.isOpen);
  return (
    <main>
      <div className="panel">
        {isOpen?<Menu/>:<></>}

          <Container fluid className="app-container">
            <header>
              <Header/>
            </header>
            <Row>
              <Col className="margin-bottom" md="7">
                <ArticleWeb/>
              </Col>
              <Col className="margin-bottom" md="5">
                <ArticleNews/>
              </Col>
            </Row>
            <ArticleRating/>
            <Attribution/>
          </Container>
      </div>
    </main>
  )
}

export default App
