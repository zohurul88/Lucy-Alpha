import MainMenu from "./common/MainMenu";
import "./LandingPage.css";
import Logo from '..//images/Lucy\ Logo.png';

function LandingPage() {
  return (
    <div className="landing">
      <header className="App-header">
        <MainMenu />
      </header>
      <div id="back-drop" className="card mb-4 mt-5 h-15">
          <div className="Logo">
            <img src={Logo}  alt="Logo"/>
          </div>
        <div className="container m-5" >
          <div className="card-body ">
            <h3 className="card-title"  >Thank you for helping <br/>   us with this alpha test.</h3><br/>
            <p className="card-text">It will take only a few minutes to try out.<br/>
            We think you've never seen anything like Lucy™, <br/>
            and we're sure you'll at least have some fun with it.</p>
            <br/>
            <div className="d-flex ">
              <button id="btn1" type="button" className="btn btn-sm">Get Started Here</button>
              <button id="btn2" type="button" className="btn btn-sm">What is Lucy™?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
     
  );
}

export default LandingPage;
