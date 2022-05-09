import MainMenu from "./common/MainMenu";
import "../css/PricingPage2.css";
import {
  Container,
  Row,
} from "reactstrap";
import { useState } from "react";
import PricingCard from "./pricing/PriceCard";

function PricingPage2() {
  const [isActiveAnnualCheckbox, setIsActiveAnnualCheckbox] = useState(true);

  return (
    <div className="landing background">
      <header className="App-header">
        <MainMenu />
      </header>
      <Container className="container  my-5 mb-5" id="back-drop">
        <div id="top-close">
          <button
            type="button"
            className="btn-close bg-light rounded-circle m-4"
            aria-label="Close"
          ></button>
        </div>

        <div className="text-center text-white my-2">
          <Row>
            <h1>Simple & Transparent Pricing</h1>
            <h5 className="mb-4">
              <small>No surprise fees.</small>
            </h5>
          </Row>
          <Row>
            <div className="d-flex justify-content-center mb-4">
              <span>Billed yearly</span>
              <div className="form-check form-switch mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={isActiveAnnualCheckbox}
                  onChange={() =>
                    setIsActiveAnnualCheckbox(!isActiveAnnualCheckbox)
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                ></label>
              </div>
              <span className="checked-color">Billed Monthly</span>
            </div>
          </Row>
        </div>
        <div className="pricing-container">
          <Row className="text-white">
            <div className="col-sm-4">
              <PricingCard
                badge="Trial"
                title="3 Days Free Trial"
                price="Free"
                active={true}
              >
              <span>Full access to Question Tree and Precedent Database.</span>
              <span>Full access to Question Tree and Precedent Database.</span>
              </PricingCard>
            </div>
            <div className="col-sm-4">
              <PricingCard
                badge="Trial"
                title="3 Days Free Trial"
                price="Free"
                active={false}
              >
              <span>Full access to Question Tree and Precedent Database.</span>
              <span>Full access to Question Tree and Precedent Database.</span>
              </PricingCard>
            </div>
            <div className="col-sm-4">
              <PricingCard
                badge="Trial"
                title="3 Days Free Trial"
                price="Free"
                active={false}
              >
              <span>Full access to Question Tree and Precedent Database.</span>
              <span>Full access to Question Tree and Precedent Database.</span>
              </PricingCard>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default PricingPage2;