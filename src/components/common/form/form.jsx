import { FormProvider, useForm } from "react-hook-form";

import { Input } from "./input/input";
import { RadioGroup } from "./radio/radio";

import "./form.scss";
import { useEffect } from "react";

export const Form = ({ submit, onError, className, children }) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: { email: "", name: "", phone: "", photo: null, position_id: null }
  });


  useEffect(() => {
    console.log("methods", methods.formState.dirtyFields);

  }, [methods.getValues])

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
