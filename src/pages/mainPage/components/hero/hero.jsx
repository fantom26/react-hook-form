import { Button, Container, Heading, Text } from "components/ui";

import { getImage } from "utils/helpers";

import "./hero.scss";

export const Hero = () => (
  <section className="hero">
    <Container>
      <div className="hero__wrapper">
        <div className="hero__bg">
          <picture>
            <source
              srcSet={`${getImage("heroBg1xMob")} 1x, ${getImage(
                "heroBg2xMob"
              )} 2x`}
              type="image/jpg"
              media="(max-width: 576px)"
            />
            <img
              src={getImage("heroBg1x")}
              srcSet={getImage("heroBg2x")}
              width="1170"
              height="650"
              loading="lazy"
              alt="Ukrainian lanscape"
            />
          </picture>
        </div>
        <div className="hero__info">
          <Heading tag="h1" color="white" align="center">
            Test assignment for front-end developer
          </Heading>
          <Text color="white" align="center">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they`&apos;`ll be building web interfaces with
            accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </Text>
          <Button tag="HashLink" hash="#sign" type="yellow">
            Sign up
          </Button>
        </div>
      </div>
    </Container>
  </section>
);
