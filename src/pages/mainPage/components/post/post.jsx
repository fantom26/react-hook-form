import { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
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
  const [imageFile, setImageFile] = useState(null);
  const [fetchPositions, isPositionsLoading, positionsError] = useFetching(
    async () => {
      const response = await UsersService.getPositions();
      setPositions(response.data.positions);
    }
  );

  const onChangeHandler = (e) => {
    const [file] = e.target.files;
    const { name } = file;
    setImageFile(file);
    fileNameEl.current.textContent = name;
    fileNameEl.current.classList.add("changed");
  };

  const submitHandler = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.set("photo", imageFile);
    try {
      const token = await UsersService.getToken();
      const response = await UsersService.addUser(formData, token.data.token);

    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true
      });
    }
  };

  useEffect(() => {
    fetchPositions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="post" id="sign">
      <Container>
        <Heading align="center">Working with POST request</Heading>
        <Form className="form" submit={submitHandler}>
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
