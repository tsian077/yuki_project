import React from "react";
import { Navbar  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle } from 'reactstrap';
import Class from './class.js'
import Teacher from './teacher.js'


import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function Header(){

 
  
    
    return (

           <div>
            
           
            

            <BrowserRouter>
           
   
            <Navbar className="bg-light justify-content-center"  expand="lg" defaultActiveKey="/yuki_project/home"> 
         
                
                {/* 首頁 */}
                <Dropdown  className="d-inline-block" >
     
                  {/* caret  */}
                  <DropdownToggle href="/yuki_project/home"  className="">
                    首頁
                  </DropdownToggle >
                
                 
                </Dropdown> 

              
                <Teacher/>
                {/* 課程介紹    */}

                <Class/>
              {/* </div> */}
              </Navbar>

            
              <Routes>
            

                <Route path="/yuki_project/home" element={<h1>hello</h1>} />
                <Route path="/yuki_project/introduction" element={<h1>hello introduction</h1>} />
                <Route path="/yuki_project/class" element={<h1>hello class</h1>} />

    
               

              </Routes>
            </BrowserRouter>
          
        
     
        </div>
  
    
    
    )
}




export default Header;
