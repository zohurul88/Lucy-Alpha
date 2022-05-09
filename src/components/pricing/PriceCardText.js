import { FaCheckCircle } from "react-icons/fa";
import { CardText } from "reactstrap";

function PricingCardText(props) {
  return (
    <CardText key={props.key}>
      <div className="price-item p-checkbox">
        <span>
          <FaCheckCircle></FaCheckCircle>
        </span>
      </div>
      <div className="price-item p-text">{props.children}</div>
    </CardText>
  );
}

export default PricingCardText;
