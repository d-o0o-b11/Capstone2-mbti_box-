import React from "react"
import Stitle from "./stitle"
import Mostitle from "./mostitle"
import Footer from "./footer.js"
import Mofooter from "./mofooter.js"
import Logo from "./logo.js"
import Banner from "./banner.js"
import Mobanner from "./mobanner.js"
import Menu from "./menu.js"
import Momenu from "./momenu.js"
import Board from "./board.js" 
import "./Step.css"
import "./menu.css"
import Login from "./login/login.js"
import INTJ from "./board/INTJ.js"
import MOINTJ from "./board/moINTJ.js"
import PWfind from "./login/PWfind.js";
import PWfind2 from "./login/PWfind2.js";
import Singup from "./login/Singup";
import WRITEINTJ from "./write/writeINTJ.js"
import Profile from "./login/Profile.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch,Link } from "react-router-dom"
import { Container, Row, Col} from "react-bootstrap";
import {Grid,Text} from "./elements"
import { useMediaQuery } from "react-responsive"

import lo from "./images/mm.png"



const App = (props) => {
console.log(props.check);
{/*console.log(props.name);*/}

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
});

const isTablet = useMediaQuery({
  query : "(max-width:1100px)"
});

  return (
    <>

    <BrowserRouter>
      <div className="App body"> {/*추가*/ }
      {/* <Container>  */}
      
      <React.Fragment>
      {(isMobile||isTablet)?
        <Row>
            <Col xs={10}>
              <Link to="/"><img src={lo} style={{width:200, marginTop:10, marginBottom:10 }}/></Link>
            </Col>
          
            
            <Col xs={2}>
              <Momenu></Momenu>
            </Col>
            
        </Row>
      :
        <Row  className="aaa"  style={{ paddingTop: 30, paddingBottom:10}}>

            <Col>
              <Menu></Menu>
            </Col>
       
          </Row>
        }
        
      </React.Fragment>
      {/* </Container> */}
       

        <Switch>
          <Route exact path="/">
            {/*<div className="container">
              <Banner></Banner>
            </div>*/}

           
              {isMobile? 
              <Row>
                <Mobanner/> 
              </Row>
              :
              <Row>
                <Banner></Banner>
                {/* <Col xs={9}>
                  <Banner></Banner>
                </Col>
                <Col className="box7" xs={3} >
                  <Logo/>
                </Col> */}
               
              </Row>
              }
             
           

      
            <Row style={{ marginTop: 50}}> 
              
                <h4 data-v-42081291 class="c-biz-tit">
                  <span data-v-42081291>인기게시글</span>
                </h4>

              {/* <Divider horizontal>Or</Divider> */}
              <Col>
                <Board></Board>
              </Col>
              <Col>
                <Board></Board>
              </Col>
              <Col>
                <Board></Board>
              </Col>
              <Col>
                <Board></Board>
              </Col>
            </Row>

            {/* <Row>
              <Col className='box6' style={{ height: 350 }}>
                랭킹
              </Col>

            </Row> */}


            <Row style={{marginTop:50, height: 50}}>
              <Col>
                {isMobile? <Mofooter/> : <Footer></Footer>}
              </Col>
            </Row>

          </Route>

          <Route path="/login">
            <Login></Login>
            
          </Route>

            
            
          <Route path="/ann" >
            <Profile></Profile>
          </Route>

          <Route path="/stitle">
            {isMobile? <Mostitle/> :<Stitle></Stitle>}
          </Route>

          <Route path="/INTJ">
            {isMobile? <MOINTJ/> :<INTJ></INTJ>}
          </Route>

          <Route path="/writeINTJ">
            <WRITEINTJ></WRITEINTJ>
          </Route>

          {/* <Route path="/PostEditor">
            <PostEditor/>
          </Route> */}

          <Route path="/PWfind">
            <PWfind></PWfind>
          </Route>

          <Route path="/PWfind2">
            <PWfind2></PWfind2>
          </Route>

          <Route path="/Singup">
            <Singup></Singup>
          </Route>


        </Switch>
      
      </div>
    </BrowserRouter>
    </>
  )
}
export default App
//CreateList