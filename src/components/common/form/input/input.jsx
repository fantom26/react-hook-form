import { useEffect, useState } from "react";

import { useFormContext } from "react-hook-form";

export const Input = ({
  type = "text",
  name,
  rules,
  placeholder,
  accept,
  onChangeHandler,
  nameRef
}) => {
  const formCtx = useFormContext();
  const [inputValue, setInputValue] = useState("");

  const defineClasses = () => {
    let classes = "form__item-input";

    if (type === "file") classes += " form__item-file";

    if (inputValue) classes += " form__item-input--filled";

    if (formCtx.formState.errors[name]?.message)
      // eslint-disable-next-line nonblock-statement-body-position
      classes += " form__item-input--error";

    return classes;
  };

  useEffect(() => {
    defineClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  if (type !== "file") {
    return (
      <div className={defineClasses()}>
        <label>
          {name && formCtx && (
            <input
              {...formCtx.register(name, rules)}
              name={name}
              type={type}
              value={inputValue}
              onChange={inputHandler}
            />
          )}
          <span className="form__item-input-placeholder">{placeholder}</span>
        </label>
        {formCtx && formCtx.formState.errors[name]?.message && (
          <p className="form__item-error">
            {formCtx.formState.errors[name]?.message}
          </p>
        )}
      </div>
    );
  } else {
    return (
      <div className={defineClasses()}>
        <label>
          {name && formCtx && (
            <input
              {...formCtx.register(name, rules)}
              onChange={onChangeHandler}
              name={name}
              type={type}
              accept={accept}
            />
          )}
          <span className="form__item-file-load">Upload</span>
          <span ref={nameRef} className="form__item-file-name">
            Upload your photo
          </span>
        </label>
        {formCtx && formCtx.formState.errors[name]?.message && (
          <p className="form__item-error">
            {formCtx.formState.errors[name]?.message}
          </p>
        )}
      </div>
    );
  }
};
