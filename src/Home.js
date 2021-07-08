import homeimg from "./images/homeimg.jpg";
import aboutimg from "./images/aboutimg.jpg";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card"
const Home = () => {
    return ( 
        <div className="home">

            <div className="homepage">
                <img className="homeimg" src={homeimg}/>
                <div className="homebox">
                    <p className="homeboxtext1">Browse Our Fences and Get a Free Personalized Quote!</p>
                    <br></br>
                    <p className="homeboxtext2">We specialize in wood, vinyl/PVC, chain link and iron fences!</p>
                    <button className="browseOptions">Browse Options {">"}</button>
                </div>
            </div>

            {/* about page */}
            <div className="aboutpage">
                <p className="aboutpagetitle subtitle"> About Our Company</p>
                
                <div className="aboutcontainer">
                    <img src={aboutimg} alt="" className="aboutimg" />
                    <p className="abouttext1">  Our team has been making home owners happy since we started installing 
                    fences back in 2000. Over the past years, we have installed nearly 3000 fences all of which have 
                    never failed to satisfy our clients. This is because of our lifetime limited waranty, our exceptional 
                    high quality materials and our amazing team of professional fence installers.</p>
                    <table className="abouttable">
                    <tbody> 
                        <tr className="aboutrow">
                            <td className="center"><p className="aboutitem">Lifetime Limited Waranty</p></td>
                            <td className="center"><p className="aboutitem">Installed by Professionals<br></br>not Subcontractors</p></td>
                            <td className="center"><p className="aboutitem">Premium Grade Materials</p></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            {/* options section */}
            <div className="options">
                <p className="browsetoday subtitle">Select The Type Of Fence You Would Like And Browse Your Options Today!</p>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <p className="optionstitle">Wooden Fences</p> 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <p className="optionstitle">Vinyl/PVC Fences</p> 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    <p className="optionstitle">Chain Link Fences</p> 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    <p className="optionstitle">iron Fences</p> 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>                



            </div>



        </div>
     );
}
 
export default Home;