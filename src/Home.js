import homeimg from "./images/homeimg.jpg";
import aboutimg from "./images/aboutimg.jpg";
import Accordion from 'react-bootstrap/Accordion';
import wood1 from './images/wood1.jpg';
import wood2 from './images/wood2.jpg';
import wood3 from './images/wood3.jpg';
import pvc1 from './images/pvc.jpg';
import pvc2 from './images/pvc2.jpg';
import pvc3 from './images/pvc3.jpg';
import chain from './images/chain.jpg';
import chain2 from './images/chain2.jpg';
import chain3 from './images/chain3.jpg';
import phone from "./images/phone.png";
import email from "./images/email.png";
import MainLogo from "./images/MainLogo.png";
import Row from 'react-bootstrap/Row';


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
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                    <p className="optionstitle">Wooden Fences</p> 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <table className="fencetable">
                        <tbody>
                            <tr className="fencesrow">
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Horizontaly Boarded Wooden Fence</p>
                                <img src={wood1} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc"></p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Vertically Boarded Wooden Fence</p>
                                <img src={wood2} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Custom Wooden Fence</p>
                                <img src={wood3} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>



                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <p className="optionstitle">Vinyl/PVC Fences</p> 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <table className="fencetable">
                        <tbody>
                            <tr className="fencesrow">
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Classic PVC Fence</p>
                                <img src={pvc1} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc"></p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Classic PVC Fence with Lattice</p>
                                <img src={pvc2} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Horizontally boarded PVC Fence</p>
                                <img src={pvc3} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    
                    
                    
                    
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    <p className="optionstitle">Chain Link Fences</p> 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <table className="fencetable">
                        <tbody>
                            <tr className="fencesrow">
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Vinyl Coated Chain Link Fence</p>
                                <img src={chain} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc"></p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Galvanized Chain Link Fence</p>
                                <img src={chain2} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Chain Link Fence with Slats</p>
                                <img src={chain3} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>




                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
               
                </Accordion>                

                



            </div>
            

            <p className="browsetoday subtitle">
                Browsed All Options And Still Not Sure Fence Is For You?<br></br>Request A Quote Anyways!
            </p>

            <div className="center">
            <button className="reqnow">
                Request a Quote Now >
            </button>
            </div>

            <nav className="navbar1">
            <p className="contactInfo"><img src={phone} alt="phone logo" className="phoneIcon" /> (613) 123 - 4567 | <img src={email} alt="email icon" className="emailIcon" /> Ottawa@fencepros.ca</p>
            
            </nav>
            


        </div>
     );
}
 
export default Home;