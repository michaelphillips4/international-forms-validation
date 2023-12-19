import { useState, useRef, ChangeEvent, FormEvent } from "react";
import TextWithLabel from "./components/TextWithlabel";
import { FormattedMessage } from "react-intl";

type inputs = {
  firstName: string;
  surname: string;
  username: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  postCode: string;
  terms: boolean;
  isValid: boolean;
};

function FormExample() {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputs, setInputs] = useState({ isValid: false } as inputs);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    if (formRef.current) {
      isValid = formRef.current.checkValidity();
    }
    console.log(isValid,event.target.name,event.target.checked,event.target.type);

    setInputs((values) => ({
      ...values,
      [event.target.name]:event.target.type==="checkbox" ? event.target.checked: event.target.value,
      isValid: isValid,
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div className="notice">
      <h3><FormattedMessage id="willsFormTitle"/></h3>

      <form noValidate onSubmit={onSubmit} ref={formRef}>
        <TextWithLabel
          id="firstName"
          labelMessage="First name"
          placeHolder="First name"
          value={inputs.firstName || ""}
          onChangeHandler={handleChange}
        />

        <TextWithLabel
          id="surname"
          labelMessage="Last name"
          placeHolder="Last name"
          value={inputs.surname || ""}
          onChangeHandler={handleChange}
        />

        <TextWithLabel
          id="username"
          labelMessage="User Name"
          placeHolder="User Name"
          value={inputs.username || ""}
          onChangeHandler={handleChange}
        />

        <TextWithLabel
          id="addressLine1"
          labelMessage="Address Line1"
          placeHolder="Address Line1"
          value={inputs.addressLine1 || ""}
          onChangeHandler={handleChange}
        />

        <TextWithLabel
          id="addressLine2"
          labelMessage="Address Line2"
          placeHolder="Address Line2"
          value={inputs.addressLine2 || ""}
          onChangeHandler={handleChange}
        />

        <TextWithLabel
          id="addressLine3"
          labelMessage="Address Line3"
          placeHolder="Address Line3"
          value={inputs.addressLine3 || ""}
          onChangeHandler={handleChange}
        />

        <TextWithLabel
          id="addressLine4"
          labelMessage="Address Line4"
          placeHolder="Address Line4"
          value={inputs.addressLine4 || ""}
          onChangeHandler={handleChange}
        />

        <TextWithLabel
          id="postCode"
          labelMessage="PostCode"
          placeHolder="PostCode"
          value={inputs.postCode || ""}
          onChangeHandler={handleChange}
        />

        <label htmlFor="terms">Terms</label>

        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChange}
          value={inputs.terms?.toString()}
          required
        />
      
        {!inputs.terms && <span> * </span>}

        <br />
        <button
          type="submit"
          disabled={inputs.isValid ? false : true}
          className="disabled"
        >
          Submit form
        </button>
      </form>
      <hr />
      <blockquote>
        <h3>
          Backing data to send/process - Form is Valid = {inputs.isValid.toString()}
        </h3>
        {JSON.stringify(inputs)}
      </blockquote>
    </div>
  );
}

export default FormExample;
