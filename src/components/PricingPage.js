import MainMenu from "./common/MainMenu";
import './PricingPage.css';
import {FaCheckSquare } from "react-icons/fa";

function PricingPage() {
  return (
    <div className="landing background">
      <header className="App-header">
        <MainMenu />
      </header>
      <div className="container  my-5 mb-5"  id="back-drop">
        <div id="top-close">
        <button type="button" className="btn-close bg-light rounded-circle m-4"   aria-label="Close"></button>
        </div>

          <div className="text-center text-white my-2">
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
      <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 mb-5 text-white">
        <div className="col">
          <div className="back-drop-card">
            <div className="card-body">
              <p className="badge rounded-pill bg-primary">Trial</p>
              <h5 className="card-title h4">3 Days Free Trial</h5>
              <p>Free</p>
              <hr></hr>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>Full access to Question Tree and Precedent Database.</p>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>3 views of “How Innovation Happens” video No downloads.</p>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>No downloads.</p>
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
              <p className="card-text"><FaCheckSquare></FaCheckSquare>Full access to Question Tree and Precedent Database.</p>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>Unlimited views of “How Innovation Happens” video.</p>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>Ways to Win Framework.</p>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>Creative Recombination workshop/toolkit.</p>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>Expert guidance/support.</p>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Choose Plan</button>
              </div>
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
              <p className="card-text"><FaCheckSquare></FaCheckSquare>Includes all elements of basic plan, plus:.</p>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>3 views of “How Innovation Happens” video No downloads.
              <ul>
                <li>Workshops</li>
                <li>Videos</li>
                <li>Tool kits</li>
              </ul>
              </p>
              <p className="card-text"><FaCheckSquare></FaCheckSquare>Customizable to industry/company/business situation</p>
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
