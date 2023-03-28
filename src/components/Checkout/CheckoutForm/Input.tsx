import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";
import styled from "styled-components";

interface InputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  //
  labelName: string;
  inputType: string;
  registerValue: string;
  placeholder: string;
  regex: RegExp;
}

function Input({
  register,
  errors,
  isSubmitting,
  inputType,
  labelName,
  placeholder,
  regex,
  registerValue,
}: InputProps) {
  //
  const handleKeyPress:
    | React.KeyboardEventHandler<HTMLInputElement>
    | undefined = (event) => {
      if (event.key === " " && (registerValue === "phoneNumber" || registerValue === "zipCode" || registerValue === "eMoney" || registerValue === "eMoneyPin")) {
        event.preventDefault();
      }
      
  };

  return (
    <div>
      <Label htmlFor="firstName" errors={errors} registerValue={registerValue}>
        {labelName}
      </Label>
      <CheckoutInput
        type={inputType}
        id={registerValue}
        placeholder={placeholder}
        {...register(registerValue, {
          required: true,
          pattern: regex,
        })}
        errors={errors}
        isSubmitting={isSubmitting}
        registerValue={registerValue}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default Input;

const Label = styled.label<{
  errors: FieldErrors<FieldValues>;
  registerValue: string;
}>`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: ${(props) =>
    props.errors[props.registerValue] ? "red" : "var(--primary-black)"};
`;

const CheckoutInput = styled.input<{
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  registerValue: string;
}>`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  width: 100%;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding-left: 24px;
  height: 56px;
  margin-top: 9px;
  outline: none;

  &::placeholder {
    opacity: 0.4;
  }

  border: ${(props) =>
    props.errors[props.registerValue]
      ? "2px solid red"
      : props.isSubmitting
      ? "1px solid var(--primary-orange)"
      : ""};
`;
