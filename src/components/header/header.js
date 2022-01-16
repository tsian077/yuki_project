import React from "react";
import { Navbar  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle } from 'reactstrap';
import Class from './class.js'
import Teacher from './teacher.js'
import News from './news.js'
import Contact from './contact.js'

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

function Header(){

 
  
    
    return (

           <div>
            
           
            

            <BrowserRouter>
           
   
            <Navbar className="bg-light justify-content-center"  expand="lg" defaultActiveKey="/yuki_project"> 
         
                
                {/* 首頁 */}
                <Dropdown  className="d-inline-block" >
     
                  {/* caret  */}
                  <DropdownToggle href="/yuki_project"  className="">
                    首頁
                  </DropdownToggle >
                      
               
                </Dropdown> 

  
                    {/* 首頁 */}
                <Teacher />
    
               
                {/* 課程介紹    */}

                <Class />
                <DropdownToggle href="/news"  className="">
                    最新消息
                </DropdownToggle >

                <DropdownToggle href="/contact"  className="">
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
            </BrowserRouter>
          
        
     
        </div>
  
    
    
    )
}




export default Header;
