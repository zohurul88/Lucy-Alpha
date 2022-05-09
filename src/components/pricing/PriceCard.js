import { Badge, Button, Card, CardBody, CardTitle } from "reactstrap";
import PricingCardText from "./PriceCardText";

function PricingCard(props) {
  const { children } = props;
  console.log(children);
  return (
    <Card className="back-drop-card">
      <CardBody>
        <Badge color="primary" className="rounded-pill mb-2">
          {props.badge}
        </Badge>
        <CardTitle className="h4">{props.title}</CardTitle>
        <span>{props.price}</span>
        <hr />

        {children !== undefined &&
          children.map((item, i) => {
            return (
              <PricingCardText key={i}>{item.props.children}</PricingCardText>
            );
          })}
        {props.active && (
          <div className="d-grid gap-2">
            <Button color="primary">Choose Plan</Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
}

export default PricingCard;
