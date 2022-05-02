import MainMenu from "./common/MainMenu";
import './PricingPage.css'

function PricingPage() {
  return (
    <div className="landing background">
      <header className="App-header">
        <MainMenu />
      </header>
      <div className="container">
          <div className="text-center text-white">
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
         
      </div>
    </div>
  );
}

export default PricingPage;
