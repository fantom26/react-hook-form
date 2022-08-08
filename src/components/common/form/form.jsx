import { useEffect } from "react";

import { FormProvider, useForm } from "react-hook-form";

import { UsersService } from "services";

import { Input } from "./input/input";
import { RadioGroup } from "./radio/radio";

import "./form.scss";

export const Form = ({ onError, className, children }) => {
  const methods = useForm({
    mode: "all"
  });

  const submit = async (data) => {
    console.log("methods", methods);

    const reader = new FileReader();
    reader.readAsDataURL(data.photo[0]);

    const promise = new Promise((resolve, reject) => {
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.onerror = reject;
    });
    data.photo = await promise;

    const token = await UsersService.getToken();
    const response = await UsersService.addUser(
      JSON.parse(JSON.stringify(data)),
      token.data.token
    );

    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(submit)}
        onError={onError}
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.Input = Input;
Form.RadioGroup = RadioGroup;
