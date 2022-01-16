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
            <BrowserRouter >
           
   
            
            <Navbar className="bg-light justify-content-center"  expand="lg" defaultActiveKey="/yuki_project">       
               
               
                <Dropdown  className="d-inline-block" >
                  <DropdownToggle href="/yuki_project"  className="">
                    首頁
                  </DropdownToggle >
                  <Teacher />    
                <Class />
                </Dropdown> 
          
                
                <DropdownToggle tag={Link} to={"/news"}   className="">
                {/* <Link to="/class"/> */}
                    最新消息

                </DropdownToggle >
                <DropdownToggle tag={Link} to={"/contact"}  className="">
                    聯絡我們
                </DropdownToggle >
              {/* </div> */}
              </Navbar>

            
              <Routes>
    
            

                <Route path="/yuki_project" element={<h1>Home</h1>} />
                <Route path="/introduction" element={<h1>Introduction</h1>} />
                <Route path="/class" element={<h1>Class</h1>} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />

    
               
 
              </Routes>
            </ BrowserRouter>
          
        
     
        </div>
  
    
    
    )
}




export default Header;
