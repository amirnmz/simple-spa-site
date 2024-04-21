import { Col, Container, Row } from "react-bootstrap";
import "./foter.css";


function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col md={6}>
                    <h3></h3>
                    {/* <p>
                    نکست وان کد با هدف تولید آموزش هایی ایجاد شده ،
                     که حس شیرینِ یادگیری لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.  
                    </p> */}
                    </Col>
                    <Col style={{textAlign:"left"}} md={6}>
                    <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" alt="#" />
                    </Col>

                </Row>


            </Container>
        </footer>
    )
}
export default Footer