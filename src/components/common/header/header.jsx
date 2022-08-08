import { Button, Container, Logo } from "components/ui";

import "./header.scss";

export const Header = () => (
  <header className="header">
    <Container>
      <div className="header__wrapper">
        <Logo />
        <div className="header__buttons">
          <Button tag="HashLink" hash="#users" type="yellow">
            Users
          </Button>
          <Button tag="HashLink" hash="#sign" type="yellow">
            Sign up
          </Button>
        </div>
      </div>
    </Container>
  </header>
);
