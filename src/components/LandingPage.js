import MainMenu from "./common/MainMenu";
import { Container } from "reactstrap";

function LandingPage() {
  return (
    <div className="landing">
      <header className="App-header">
        <MainMenu />
      </header>
      <Container>
        This is a test commit
      </Container>
    </div>
  );
}

export default LandingPage;
