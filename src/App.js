import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Example from  './components/header/header'
import { SocialIcon } from 'react-social-icons';
import Carousel from "./components/carouses/carouses"
function App() {
  return (
    <div className="App" >
     
      <div style={{ display: 'flex',flexDirection:'row',justifyContent:'space-evenly'}}>

        <div></div>
    

        
          <h1 className="font-link" style={{marginTop:'50px',marginBottom:'50px'}}>社團法人中華時尚美容協會</h1>
          {/* <h1 className="font-link" style={{marginTop:'50px',marginBottom:'50px'}}>hello</h1> */}

        {/* </div> */}
        
        <SocialIcon bgColor="block" style={{marginTop:'50px'}} url="https://www.facebook.com/profile.php?id=100000317502490" />
      </div>
      
      <Example></Example>
      <div style={{display:'flex',justifyContent:'center'}}>
        
        <div className="container p-5"  >
          <Carousel/>
        </div>
      
     
    
      </div>
     
    </div>
  );
}

export default App;


