import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./coursitem.css"
import { Link } from 'react-router-dom';


function Coursitem({title,text,img,id}) {
    return (
        <>
            <Card className='card' >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                    <Button variant="primary">
                        <Link to={`/cours/${id}`} className='buy-btn' >خرید دوره </Link>
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default Coursitem;