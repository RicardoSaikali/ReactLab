import homeimg from "./images/homeimg.jpg";
import aboutimg from "./images/aboutimg.jpg";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Modal from  'react-bootstrap/Modal';
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
import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card"
import { waitFor } from "@testing-library/react";



    
const Home = () => {

    const [lgShow, setLgShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('General Quote Request');
    const [lang, setLang] = useState(0);

    const [confirmationShow, setconfirmationShow] = useState(false);

    const t1 = [<p className="homeboxtext1">Browse Our Fences and Get a Free Personalized Quote!</p>,
        <p className="homeboxtext1">Parcourez nos clôtures et obtenez un devis personnalisé gratuit! </p>];

    const t2 = [<p className="homeboxtext2">We specialize in wood, vinyl/PVC, chain link and iron fences!</p>,
        <p className="homeboxtext2">Nous nous spécialisons dans les clôtures en bois, vinyle/PVC et à mailles!</p>];

    const t3 = [<a href="#browse" className="browseOptions">Browse Options {">"}</a>,
        <a href="#browse" className="browseOptions">Découvrez Les Options {">"}</a>];

    const t4 = [<p className="aboutpagetitle subtitle"> About Our Company</p>,
        <p className="aboutpagetitle subtitle">À propos de nous</p>];

    const t5 = [<p className="abouttext1">  Our team has been making home owners happy since we started installing 
    fences back in 2000. Over the past years, we have installed nearly 3000 fences all of which have 
    never failed to satisfy our clients. This is because of our lifetime limited waranty, our exceptional 
    high quality materials and our amazing team of professional fence installers.</p>,

    <p className="abouttext1">  Notre équipe continue a satisfaire nos clients propriétaires depuis que nous avons commencé à installer des
    clôtures en 2000. Au cours des dernières années, nous avons installé près de 3000 clôtures qui n'ont jamais manqué de satisfaire nos clients. C'est à cause de notre garantie limitée à vie, de nos
    matériaux de qualité exceptionnelles et notre incroyable équipe d'installateurs de clôtures professionnels.</p>];
    

    const t6 = [<td className="center"><p className="aboutitem">Lifetime Limited Waranty</p></td>,
        <td className="t6 center"><p className="aboutitem">Garantie à vie limitée</p></td>];
    
    const t7 = [<td className="center"><p className="aboutitem">Installed by Professionals<br></br>not Subcontractors</p></td>, 
        <td className="center"><p className="aboutitem">Installé par des professionnels<br></br>pas des sous-traitants</p></td>];

    const t8 =[<td className="center"><p className="aboutitem">Premium Grade Materials</p></td>,
        <td className="center"><p className="aboutitem">Matériaux de qualité supérieure</p></td>];
    
    const t9 = [<p id="browse" className="browsetoday subtitle">Select The Type Of Fence You Would Like And Browse Your Options Today!</p>,
    <p id="browse" className="browsetoday subtitle">Sélectionnez le type de clôture que vous souhaitez et parcourez vos options dès aujourd'hui !</p>];
    

    const t10 = [<p className="optionstitle">Wooden Fences</p>, <p className="optionstitle">Clôtures de bois</p>];
    
    const t11 = [<p className="optionstitle">Vinyl/PVC Fences</p>, <p className="optionstitle">Clôtures en vinyle/PVC</p> ];
    
    const t12 = [<p className="optionstitle">Chain Link Fences</p>, <p className="optionstitle">Clôtures à mailles</p>];


    const t13 = [<p className="browsetoday subtitle"> Browsed All Options And Still Not Sure Fence Is For You?<br></br>Request A Quote Anyways!</p>,

        <p className="browsetoday subtitle"> Vous avez parcouru toutes les options et vous n'êtes toujours pas sûr quelle clôture choisir?<br></br>Demandez un devis quand même !</p>];
    
    const t14 = [<button onClick={() => newModal("General Quote Request")} className="reqnow">Request a Quote Now {'>'}</button>,
        <button onClick={() => newModal("General Quote Request")} className="reqnow">Demandez un devis maintenant {'>'}</button>];


    const t15 = [];

    
    const setEN = () =>{
        setLang(0);
    }

    const setFR =() =>{
        setLang(1);
    }


    const newModal = (newTitle) =>{
        setModalTitle(newTitle);
        setLgShow(true);
    }

    const thankyou = (e) => {
        e.preventDefault();
        setLgShow(false);
        setconfirmationShow(true);
        return false;
    }

    return (  
        

        <div className="home">
            
            <p className="contactInfo"><img src={phone} alt="phone logo" className="phoneIcon" /> (613) 123 - 4567 | <img src={email} alt="email icon" className="emailIcon" /> Ottawa@fencepros.ca</p>
            <nav className="navbar1">
            <p className="navTitle"><img src={MainLogo} alt="Fence Pros logo" className="MainLogo" /> Ottawa Fence Pros </p> 
            
            <div className="lang">
                <button className="langbtn english" onClick={setEN}>English</button>
                <button className="langbtn french" onClick={setFR}>Francais</button>

            </div>
            
            </nav>

            <div className="homepage">
                <img className="homeimg" src={homeimg}/>
                <div className="homebox">
                    {/* <p className="homeboxtext1">Browse Our Fences and Get a Free Personalized Quote!</p> */}
                    {t1[lang]}
                    <br></br>
                    {/* <p className="homeboxtext2">We specialize in wood, vinyl/PVC, chain link and iron fences!</p> */}
                    {t2[lang]}
                    {/* <a href="#browse" className="browseOptions">Browse Options {">"}</a> */}
                    {t3[lang]}
                </div>
            </div>

            {/* about page */}
            <div className="aboutpage">
                {/* <p className="aboutpagetitle subtitle"> About Our Company</p> */}
                {t4[lang]}
                
                <div className="aboutcontainer">
                    <img src={aboutimg} alt="" className="aboutimg" />
                    {/* <p className="abouttext1">  Our team has been making home owners happy since we started installing 
                    fences back in 2000. Over the past years, we have installed nearly 3000 fences all of which have 
                    never failed to satisfy our clients. This is because of our lifetime limited waranty, our exceptional 
                    high quality materials and our amazing team of professional fence installers.</p> */}
                    {t5[lang]}
                    <table className="abouttable">
                    <tbody> 
                        <tr className="aboutrow">
                            {/* <td className="center"><p className="aboutitem">Lifetime Limited Waranty</p></td> */}
                            {t6[lang]}
                            {/* <td className="center"><p className="aboutitem">Installed by Professionals<br></br>not Subcontractors</p></td> */}
                            {t7[lang]}
                            {/* <td className="center"><p className="aboutitem">Premium Grade Materials</p></td> */}
                            {t8[lang]}
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            {/* options section */}




            <div className="options">
        
                {/* <p id="browse" className="browsetoday subtitle">Select The Type Of Fence You Would Like And Browse Your Options Today!</p> */}
                    {t9[lang]}
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                    {/* <p className="optionstitle">Wooden Fences</p> */}
                    {t10[lang]}
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
                                <button onClick={() => newModal("Horizontaly Boarded Wooden Fence Quote Request")} className="requestQuote">Request a Quote {'>'}</button> 

                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Vertically Boarded Wooden Fence</p>
                                <img src={wood2} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button onClick={() => newModal("Vertically Boarded Wooden Fence Quote Request")} className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Custom Wooden Fence</p>
                                <img src={wood3} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button onClick={() => newModal("Custom Wooden Fence Quote Request")} className="requestQuote">Request a Quote {'>'}</button>
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
                    {/* <p className="optionstitle">Vinyl/PVC Fences</p>  */}
                    {t11[lang]}
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
                                <button onClick={() => newModal("Classic PVC Fence Quote Request")} className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Classic PVC Fence with Lattice</p>
                                <img src={pvc2} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button onClick={() => newModal("Classic PVC Fence with Lattice Quote Request")} className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Horizontally boarded PVC Fence</p>
                                <img src={pvc3} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button onClick={() => newModal("Horizontally boarded PVC Fence Quote Request")} className="requestQuote">Request a Quote {'>'}</button>
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
                    {/* <p className="optionstitle">Chain Link Fences</p>  */}
                    {t12[lang]}
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
                                <button onClick={() => newModal("Vinyl Coated Chain Link Fence Quote Request")} className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Galvanized Chain Link Fence</p>
                                <img src={chain2} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button onClick={() => newModal("Galvanized Chain Link Fence Quote Request")} className="requestQuote">Request a Quote {'>'}</button>
                            </div>
                            </td>
                            <td className="center h100">
                            <div className="fencecard">
                                <p className="fenceName">Chain Link Fence with Slats</p>
                                <img src={chain3} alt="" className="fenceoptionimg" />
                                <p className="fenceDesc">My desc</p>
                                <button onClick={() => newModal("Chain Link Fence with Slats Quote Request")} className="requestQuote">Request a Quote {'>'}</button>
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
            

            {/* <p className="browsetoday subtitle">
                Browsed All Options And Still Not Sure Fence Is For You?<br></br>Request A Quote Anyways!
            </p> */}
            {t13[lang]}

            <div className="center">
            {/* <button onClick={() => newModal("General Quote Request")} className="reqnow">
                Request a Quote Now {'>'}
            </button> */}
            {t14[lang]}
            </div>

            <nav className="navbar1">
            <p className="contactInfo"><img src={phone} alt="phone logo" className="phoneIcon" /> (613) 123 - 4567 | <img src={email} alt="email icon" className="emailIcon" /> Ottawa@fencepros.ca</p>
            
            </nav>
            

            <Modal
                size="lg"
                show={lgShow}
                backdrop="static"
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {modalTitle}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={thankyou}>
                <p className="steps"> 1. Please Enter Your Name And Contact Information So that We May Get Back To You.</p>
                <div className="row">
                        <div class="form-group col">
                            <label className="labels" for="firstName">First Name:</label>
                            <input required type="text" class="form-control myhover inputBooking" placeholder="Enter First Name" id="firstName" onChange={"if (typeof this.reportValidity === 'function') {this.reportValidity();}"}/>
                        </div>

                        <div class="form-group col">
                            <label className="labels" for="lastName">Last Name:</label>
                            <input required type="text" class="form-control myhover inputBooking" placeholder="Enter Last Name" id="lastName" onChange={"if (typeof this.reportValidity === 'function') {this.reportValidity();}"}/>
                        </div>
                </div>
                <div  className="row">
                        <div className="form-group col">
                            <label className="labels" for="email">Email address:</label>
                            <input required type="email" class="form-control myhover inputBooking" placeholder="Enter email" id="email" onChange={"if (typeof this.reportValidity === 'function') {this.reportValidity();}"}/>
                        </div>

                        <div className="form-group col">
                            <label className="labels" for="phone">Phone Number: (xxx-xxx-xxxx)</label>
                            <input id = "#phonenumber" required type="tel" class="form-control myhover inputBooking" pattern={"\\d{3}[\\-]\\d{3}[\\-]\\d{4}"} placeholder="xxx-xxx-xxxx" id="phone" onChange={"if (typeof this.reportValidity === 'function') {this.reportValidity();}"}/>
                        </div>
                </div>
                <p className="steps"> 2. Next, Select The Approximate Sizes Of your Backyard And Fence.</p>
                <div className="row">
                    <div className="col">
                        <label className="labels" for="backyardSize">My Backyard is:</label>
                        <select name="" id="" className="form-control myhover inputBooking">
                            <option value="Small">Small Sized</option>
                            <option value="Medium">Medium Sized</option>
                            <option value="Large">Large Sized</option>
                        </select>
                    </div>
                    <div className="col">
                        <label className="labels" for="fenceHeight">I Want My Fence To Be:</label>
                        <select name="" id="" className="form-control myhover inputBooking">
                            <option value="NA">I'm not sure how high</option>
                            <option value="4">4ft</option>
                            <option value="4L">4ft with a lattice</option>
                            <option value="6">6ft tall</option>
                            <option value="6L">6ft with a lattice</option>
                            <option value="7">7ft tall</option>
                        </select>
                    </div>
                </div>

                <p className="steps"> 3. Lastly, Tell Us More About How You Would Like Your Fence, Any Comments, Concerns or Questions You May Have Regarding The Estimate Or Projects.</p>
                <label className="labels" for="backyardSize">Preferences, Comments, Concerns, And/Or Questions:</label>
                <textarea className="form-control myhover inputBooking"></textarea>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn closebtn" onClick = {() => setLgShow(false)}>Close</button>
                    <button id = "finalbook" value="Submit" type="submit" className="btn submit" >Request Quote {'>'}</button>
                </div>

                </Form>
                </Modal.Body>
            </Modal>   

            <Modal
                size={"lg"}
                show={confirmationShow}
                onHide={() => setconfirmationShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                <p className="thanks">Congratulations, you have successfully requested a quote! One of our professionals will be in contact with you in 2-3 buisness days!</p>
                </Modal.Title>
                </Modal.Header>
                
            </Modal>         


        </div>
     );
}
 
export default Home;