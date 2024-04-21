import { useParams } from "react-router-dom"
import Navbarsite from "../../component/navbar/navbar"
import { coursData } from "../../data";
import { Col, Container, Row } from "react-bootstrap";




function Cours() {
    const courseid = useParams().courseid
    const courseinfo = coursData.find((cours) => cours.id == courseid)
   
    return (
        <>

            <Navbarsite></Navbarsite>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}  className="my-3">
                        <img src={courseinfo.img} alt="#" />
                    </Col>

                   
                    <Col  xl={6} md={12} >
                    <h2  style={{fontFamily:"lalezar"}}>{courseinfo.title}</h2>
                    <p style={{fontFamily:"yekan"}} >مدرس:  {courseinfo.teacher}</p>
                    <h4>{courseinfo.text}</h4>
                    <p style={{textAlign:"justify",fontFamily:"yekan"}} > لورم ایپسوم متن
                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                        است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                        و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                        ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                        آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
                        و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
                        پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                        سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>

                    </Col>
                </Row>
            </Container>
        </>

    )
}
export default Cours