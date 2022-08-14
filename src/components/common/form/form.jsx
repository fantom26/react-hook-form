import { FormProvider } from "react-hook-form";

import "./form.scss";

export const Form = ({ methods, submit, onError, className, children }) => (
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
