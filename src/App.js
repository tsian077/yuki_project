import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Example from  './components/header/header'
import { SocialIcon } from 'react-social-icons'
import Carousel from "./components/carouses/carouses"
import {Button,ButtonGroup} from 'react-bootstrap'
function App() {
  return (
    <div className="App" >
      <div>
     
      <div style={{ display: 'flex',flexDirection:'row',justifyContent:'space-evenly'}}>

        <div></div>
          <h1 className="font-link" style={{marginTop:'50px',marginBottom:'50px'}}>社團法人中華時尚美容協會</h1>
          {/* <h1 className="font-link" style={{marginTop:'50px',marginBottom:'50px'}}>hello</h1> */}

        {/* </div> */}
        
        <SocialIcon bgColor="block" style={{marginTop:'50px'}} url="https://www.facebook.com/profile.php?id=100000317502490" />
      </div>
      
      <Example></Example>
      <div style={{display:'flex',justifyContent:'center'}}>
        
        <div className="container p-5">
          <Carousel/>
        </div>
    
      </div>
      <div className="container d-flex">
          <ButtonGroup className="conatiner pl-200" vertical aria-label="Basic example">
            <Button  variant="secondary">美容丙級</Button>
            <Button  variant="secondary">美容乙級</Button>
            <Button  variant="secondary">面部撥筋</Button>
            <Button  variant="secondary">無痛粉刺</Button>
            <Button  variant="secondary">韓式美睫</Button>
            <Button  variant="secondary">日式美甲</Button>
            <Button  variant="secondary">立體紋綉</Button>
            <Button  variant="secondary">新娘秘書</Button>
            <Button  variant="secondary">乾燥花藝</Button>
            <Button  variant="secondary">形象攝影</Button>
            <Button  variant="secondary">講師培訓</Button>
            <Button  variant="secondary">金牌行銷</Button>
            <Button  variant="secondary">自媒體</Button>
          </ButtonGroup>
          {/* <div >
            <h1>hello world</h1>
          </div> */}
         
      </div>
      
      </div>
    </div>
  );
}

export default App;


