import MainMenu from "./common/MainMenu";
import './PricingPage.css'

function PricingPage() {
  return (
    <div className="landing background">
      <header className="App-header">
        <MainMenu />
      </header>
      <div className="container  my-5" id="back-drop">
          <div className="text-center text-white my-5">
            <p className="h1">Simple & Transparent Pricing</p>
            <p>No surprise fees.</p>
            <p className="d-flex justify-content-center"><span>Billed yearly</span>
            <div className="form-check form-switch mx-2">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
              <label className="form-check-label" for="flexSwitchCheckChecked"></label>
            </div>
            <span className="checked-color">Billed Monthly</span>
            </p>
          </div>

      {/* <div>
      
        <div class="row row-cols-1 row-cols-md-3 g-4  text-white d-flex justify-content-evenly">

          <div class="col back-drop-card ">
            <p>Trial</p>
            <h5 class="card-title">3 Days Free Trial</h5>
            <p>Free</p>   
          </div>
          <div class="col back-drop-card ">
            <p>Trial</p>
            <h5 class="card-title">3 Days Free Trial</h5>
            <p>Free</p>   
          </div>
          <div class="col back-drop-card ">
            <p>Trial</p>
            <h5 class="card-title">3 Days Free Trial</h5>
            <p>Free</p>   
          </div>

        </div>
          
      </div>     */}
      <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 text-white">
        <div className="col">
          <div className="back-drop-card">
            <div className="card-body">
              <p className="badge rounded-pill bg-primary">Trial</p>
              <h5 className="card-title h4">3 Days Free Trial</h5>
              <p>Free</p>
              <hr></hr>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="back-drop-card">
            <div className="card-body">
              <p className="badge rounded-pill bg-primary">Base</p>
              <h5 className="card-title h4">Innovate For All</h5>
              <p>$99/Mo or $1000/Yr</p>
              <hr></hr>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="back-drop-card">
            <div className="card-body">
              <p className="badge rounded-pill bg-primary">Enterprise</p>
              <h5 className="card-title h4">Innovate For All</h5>
              <p>Contact us for pricing</p>
              <hr></hr>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>



      </div>




      </div>
    </div>
  );
}

export default PricingPage;
