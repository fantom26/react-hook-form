import { useEffect, useRef, useState } from "react";

import {
  emailRules,
  fileRules,
  nameRules,
  phoneRules,
  positionRules
} from "validation/post/rules";

import { Form } from "components/common/form/form";
import { Input } from "components/common/form/input/input";
import { RadioGroup } from "components/common/form/radio/radio";
import { Button, Container, Heading, Text } from "components/ui";

import { useFetching } from "hooks";

import { UsersService } from "services";

import "./post.scss";

export const Post = () => {
  const [positions, setPositions] = useState([]);
  const fileNameEl = useRef(null);
  const [fetchPositions, isPositionsLoading, positionsError] = useFetching(
    async () => {
      const response = await UsersService.getPositions();
      setPositions(response.data.positions);
    }
  );

  const onChangeHandler = (e) => {
    const [file] = e.target.files;
    const { name } = file;
    fileNameEl.current.textContent = name;
    fileNameEl.current.classList.add("changed");
  };

  useEffect(() => {
    fetchPositions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="post" id="sign">
      <Container>
        <Heading align="center">Working with POST request</Heading>
        <Form className="form">
          <Input name="name" rules={nameRules} placeholder="Your name" />
          <Input
            type="email"
            rules={emailRules}
            name="email"
            placeholder="Email"
          />
          <div className="post__phone">
            <Input name="phone" rules={phoneRules} placeholder="Phone" />
          </div>
          <Text>Select your position</Text>
          <RadioGroup
            name="position_id"
            rules={positionRules}
            options={positions}
          />
          <Input
            type="file"
            name="photo"
            rules={fileRules}
            placeholder="Upload your photo"
            onChangeHandler={onChangeHandler}
            accept=".jpg, .jpeg"
            nameRef={fileNameEl}
          />
          <Button>Sign up</Button>
        </Form>
      </Container>
    </section>
  );
};
