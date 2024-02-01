import React from 'react';
import { Card, CardFooter, Col, Container, Row, Table } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
import withAuthProtected from "../../routes/withAuthProtected";
import {ROLE_DASHBOARD} from "../../routes/roles";
import { Link , useNavigate } from 'react-router-dom';
import { pubData } from '../../common/data/pubData';
import PubSlider from '../../components/clients/PubSlider';
import Accompagne from './ServicesClient/Accompagnement';


//Import Breadcrumb
    const Services = () => {
        document.title = "Dashboard| Tableau de bord "; 
        const navigate =useNavigate();  //for meta title
        return (
            <>
                <div className="page-content">
                    {/* <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Tableau de bord " pageTitle="Dashboard"/>
                        </div>
                        <div>
                            write Html code or structure du tableau de bord ici
                        </div>
                    </Container> */}
                    <Container fluid={true}> 
        {/* <div className="float-left">
          <BreadCrumb title="Accueil" pageTitle="Accueil" />
        </div> */}
        <h3>Bienvenue André</h3> 
        <h6 className="mb-5">Numéro client: 679 62 81 24</h6>
       

       

        <div className="clear-fix"></div>
        <h4>Vos services en cours</h4> <br />
        <Container fluid> 
          <Row>
            <Col xl={12}>
              <div className="table-responsive table-card">
                <Table className="align-middle table-nowrap mb-0 table-dashboard">
                  <thead className="table-lightOLD">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Services</th>
                      <th scope="col">Etape</th>
                      <th scope="col">Statut</th>
                      <th scope="col">Commentaire</th>
                      <th scope="col">Date</th>
                      <th scope="col" style={{ width: "150px" }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Accompagnement</td>
                      <td>Paiement</td>
                      <td>
                        <span className="badge badge-md bg-warning">
                          <i className="mdi mdi-check-circle"></i> En cours
                        </span>
                      </td>
                      <td>Aucun</td>
                      <td>01-12-2021 17:17</td>
                      <td>
                        <button type="button" className="btn btn-md btn-primary"
                        onClick={()=>navigate("/suivi-accompagnement")}>
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="ri-wechat-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Admission</td>
                      <td>Pré-entretien</td>
                      <td>
                        <span className="badge badge-md bg-warning">
                          <i className="mdi mdi-check-circle"></i> En cours
                        </span>
                      </td>
                      <td>Aucun</td>
                      <td>01-12-2021 17:17</td>
                      <td>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="ri-wechat-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>AVI</td>
                      <td>Demande AVI</td>
                      <td>
                        <span className="badge badge-md bg-warning">
                          <i className="mdi mdi-check-circle"></i> En cours
                        </span>
                      </td>
                      <td>Aucun</td>
                      <td>01-12-2021 17:17</td>
                      <td>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="ri-wechat-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Billet d'avion</td>
                      <td>Paiement</td>
                      <td>
                        <span className="badge badge-md bg-warning">
                          <i className="mdi mdi-check-circle"></i> En cours
                        </span>
                      </td>
                      <td>Aucun</td>
                      <td>01-12-2021 17:17</td>
                      <td>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="ri-wechat-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Assurance</td>
                      <td>Entretien</td>
                      <td>
                        <span className="badge badge-md bg-warning">
                          <i className="mdi mdi-check-circle"></i> En cours
                        </span>
                      </td>
                      <td>Aucun</td>
                      <td>01-12-2021 17:17</td>
                      <td>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="ri-wechat-line"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Logement</td>
                      <td>Paiement</td>
                      <td>
                        <span className="badge badge-md bg-warning">
                          <i className="mdi mdi-check-circle"></i> En cours
                        </span>
                      </td> 
                      <td>Aucun</td>
                      <td>01-12-2021 17:17</td>
                      <td>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="mdi mdi-eye"></i>
                        </button>
                        <button type="button" className="btn btn-md btn-primary">
                          <i className="ri-wechat-line"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="clear-fix"></div>
        <br />
        <br />
        <h4>Profitez de nos services exceptionnels en souscrivant</h4>
        <br />
        <div>
          <Row>
            <Col xl={4}>
              <Card className="card-service">
                <span>
                  <i className="mdi mdi-school"></i>
                </span>
                <h4>OBTENEZ UN ACCOMPAGNEMENT</h4> <br />
                <CardFooter>
                  <button  className="btn btn-service btn-primary" onClick={()=>{navigate("/accompagnement")}}  >Souscrire</button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="card-service">
                <span>
                  <i className="mdi mdi-bank "></i>
                </span>
                <h4>OBTENEZ UNE ADMISSION</h4> <br />
                <CardFooter>
                  <button className="btn btn-service btn-info"  onClick={()=>{navigate("/admission")}} >Souscrire</button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="card-service">
                <span>
                  <i className="mdi mdi-clipboard-plus-outline"></i>
                </span>
                <h4>OBTENEZ VOTRE CAUTION BANCAIRE</h4> <br />
                <CardFooter>
                  <button className="btn btn-service btn-success" onClick={()=>{navigate("/caution-bancaire")}}>Souscrire</button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
          <Col xl={4}>
              <Card className="card-service">
                <span>
                  <i className="mdi mdi-school"></i>
                </span>
                <h4>BILLET D'AVION</h4> <br />
                <CardFooter>
                  <button  className="btn btn-service btn-primary" onClick={()=>{navigate("/billetavion")}}  >Souscrire</button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="card-service">
                <span>
                  <i className="mdi mdi-bank "></i>
                </span>
                <h4>ASSURANCE</h4> <br />
                <CardFooter>
                  <button className="btn btn-service btn-info"  onClick={()=>{navigate("/assurance")}} >Souscrire</button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="card-service">
                <span>
                  <i className="mdi mdi-clipboard-plus-outline"></i>
                </span>
                <h4>LOGEMENT</h4> <br />
                <CardFooter>
                  <button className="btn btn-service btn-success" onClick={()=>{navigate("/logement")}}>Souscrire</button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            
          </Row>
        </div>
        <Link to={"#"} className="link-voir-plus">
          Voir plus ...
        </Link>{" "}
        <br /> <br />
        <br /> <br />
      </Container>
                </div>
            </>
        );
    }

export default withAuthProtected(Services, [ROLE_DASHBOARD]);











// import React from 'react';
// import { Container } from "reactstrap";
// import BreadCrumb from "../../components/common/BreadCrumb";
// import withAuthProtected from "../../routes/withAuthProtected";
// import {ROLE_SERVICE} from "../../routes/roles";
// import { useNavigate } from "react-router-dom";
// //Import Breadcrumb

//     const Services = () => {
//         document.title = "Services | Mes services ";   //for meta title
//         const navigate = useNavigate();
//         return (
//             <>
//                 <div className="page-content">
//                     <Container fluid={true}>
//                         <div className="float-left">
//                             <BreadCrumb title="Mes services" pageTitle="Services"/>
//                         </div>
//                         <div>
//                         <button
//                           type="button"
//                           className="btn btn-success btn-label right ms-auto nexttab nexttab"
//                           onClick={()=>navigate("/suivi-accompagnement")}
//                         >
//                           <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
//                           suivis ACC
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-success btn-label right ms-auto nexttab nexttab"
//                           onClick={()=>navigate("/suivi-accompagnement")}
//                         >
//                           <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
//                           suivis ADM
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-success btn-label right ms-auto nexttab nexttab"
//                           onClick={()=>navigate("/suivi-accompagnement")}
//                         >
//                           <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
//                           suivis ASS
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-success btn-label right ms-auto nexttab nexttab"
//                           onClick={()=>navigate("/suivi-accompagnement")}
//                         >
//                           <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
//                           suivis BAV
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-success btn-label right ms-auto nexttab nexttab"
//                           onClick={()=>navigate("/suivi-accompagnement")}
//                         >
//                           <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
//                           suivis CAU
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-success btn-label right ms-auto nexttab nexttab"
//                           onClick={()=>navigate("/suivi-accompagnement")}
//                         >
//                           <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
//                           suivis LOG
//                         </button>
//                         </div>
//                     </Container>
//                 </div>
//             </>
//         );
//     } 

// export default withAuthProtected(Services, [ROLE_SERVICE]);