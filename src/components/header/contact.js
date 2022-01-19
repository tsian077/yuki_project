import React,{Fragment} from 'react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
 
    return ( <Fragment>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.3962018832917!2d120.30320111495207!3d22.676290234871345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e050c500d3e11%3A0x213ff5cb9a95635!2sNo.%20207%2C%20Wenkang%20Rd%2C%20Zuoying%20District%2C%20Kaohsiung%20City%2C%20813!5e0!3m2!1sen!2stw!4v1642605010367!5m2!1sen!2stw" 
        width="600" height="450"
         style={{border:"0"}}
          allowfullscreen="" loading="lazy"></iframe>
          <h3>
          大眾運輸工具
          </h3>
          <h3>
          (一) 公車
            1. 生態園區站:可搭乘。
          </h3>
          <h3>
          (二)捷運
            紅線 生態園區站2號出口。
          </h3>
          <h3>
          (三)高鐵
            搭乘高鐵至左營站下，轉乘紅35或紅50公車。
            <a href="https://www.thsrc.com.tw/ArticleContent/a3b630bb-1066-4352-a1ef-58c7b4e8ef7c">高鐵時刻表</a>
          </h3>
          <h3>
          (四)臺鐵
            搭火車到新左營火車站，轉乘紅35或紅50公車
            <a href="https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime?lang=ZH_TW">火車時刻表</a>
          </h3>
          
      
      
  {/* <h1>hello</h1> */}
    </Fragment> );

}

export default Contact;