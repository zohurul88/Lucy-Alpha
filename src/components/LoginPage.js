import MainMenu from "./common/MainMenu";
import './LoginPage.css';
import Logo from '../images/luchy-logo-n.png';


function LoginPage() {
  return (
    <div className="landing" id="back-side">
      <header className="App-header">
        <MainMenu />
      </header>
      <div className="container my-5 ">
        <div className="d-flex justify-content-around">
          <div className="mt-5 pt-5">
            <div  className="text-white mt-5">
                <div className="Logo">
                  <img src={Logo}  alt="Logo"/>
                </div>
                <div className="mt-5">
                  <p className="h2">You will be testing one of <br/> Lucy™'s core applications: <br/> LUCYideas™</p>
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <button type="button" className="btn btn-sm text-white btn1">Get Started Here</button>
                  <button type="button" className="btn btn-sm text-white">Other Future Applications</button>
                </div>
            </div>
              
            
          </div>
          <div id="login-border">
            <form className="text-white p-5">
                <p className="h2 mb-4">Log In to Lucy™</p>
                <div className="my-3">
                  <label for="exampleInputEmail1" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="my-3">
                    <label for="exampleInputPassword1" className="form-label">Your Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                    <div className="my-3 form-check d-flex justify-content-start">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" for="exampleCheck1">Remember</label>
                      <div>
                      <a id="anchor"  href="#">Forgotten?</a>
                      </div>
                    </div>
                  <div class="d-grid gap-2">
                    <button className="btn  btn1 my-3" type="button">Log in</button>
                    <p className="text-center">Don’t have an account?</p>
                    <button className="btn  btn1 " type="button">Sign up</button>
                  </div>
              </form>


          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

