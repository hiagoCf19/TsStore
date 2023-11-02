import { ReactNode } from "react";
import styled from "styled-components";

const StyLogin = styled.div`
  position: relative;
  padding: 15px 0 0;
  display: flex;
  @media (min-width: 640px) {
    width: 130%;
  }

  .form__field {
    font-family: inherit;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    width: 100%;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #9b9b9b;
    pointer-events: none;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #430873, #725cff);
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #725cff;
    font-weight: 700;
  }

  /* reset input */
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;
interface propsInputLogin {
  placeholder: string;
  type: string;
  children: ReactNode;
}
export const InputLogin = ({
  placeholder,
  children,
  type,
}: propsInputLogin) => {
  return (
    <StyLogin className="form__group field">
      <input
        type={type}
        className="form__field"
        placeholder={placeholder}
        required
      />
      <label className="form__label">{children}</label>
    </StyLogin>
  );
};
