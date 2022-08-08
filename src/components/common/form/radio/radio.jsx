import { useFormContext } from "react-hook-form";
import { positionRules } from "validation/post/rules";

import "./radio.scss";

export const RadioGroup = ({ name, options, ...rest }) => {
  const formCtx = useFormContext();

  return (
    <div className="radio__group">
      {options.map((option) => (
        <label key={option.id} className="radio__item">
          {name && formCtx?.register && (
            <input
              {...formCtx.register(name, positionRules)}
              type="radio"
              name={name}
              value={option.id}
              {...rest}
            />
          )}
          <span className="radio__item-field"></span>
          {option.name && (
            <span className="radio__item-label">{option.name}</span>
          )}
        </label>
      ))}
      {formCtx && formCtx.formState.errors[name]?.message && (
        <p className="form__item-error">
          {formCtx.formState.errors[name]?.message}
        </p>
      )}
    </div>
  );
};
