import React from "react";
import { Navbar,Nav  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle } from 'reactstrap';
import Class from './class.js'
import Teacher from './teacher.js'
import News from './news.js'
import Contact from './contact.js'

import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Link,

} from "react-router-dom";

function Header(){

 
  
    
    return (

           <div>
            <HashRouter basename='/'>
           
   
            
            <Navbar className="bg-light justify-content-center"  expand="lg" defaultActiveKey="/yuki_project">       
                <Nav>
                  <Nav.Link href="/yuki_project">首頁</Nav.Link>
                </Nav>
               
                <Dropdown  className="d-inline-block" >
                  {/* <DropdownToggle href="/yuki_project"  className="">
                    首頁
                  </DropdownToggle > */}
                  <Teacher />    
                <Class />
                </Dropdown> 
                <Nav>
                  <Nav.Link   href="/news">最新消息</Nav.Link>
                </Nav>
               
          
                <Nav>
                  <Nav.Link  variant="secondary" href="/contact">聯絡我們</Nav.Link>
                </Nav>
                
                {/* <DropdownToggle   className="">
                <Link to="/class"/>
                    最新消息

                </DropdownToggle > */}
                {/* <DropdownToggle    className="">
                  <Link to="/contact"/>
                    聯絡我們
                </DropdownToggle > */}
              {/* </div> */}
              </Navbar>

            
              <Routes>
    
            

                <Route path="/yuki_project" element={<h1>Home</h1>} />
                <Route path="/introduction" element={<h1>Introduction</h1>} />
                <Route path="/class" element={<h1>Class</h1>} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />

    
               
 
              </Routes>
            </ HashRouter>
          
        
     
        </div>
  
    
    
    )
}




export default Header;
