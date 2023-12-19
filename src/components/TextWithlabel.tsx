import { ChangeEventHandler } from "react";

interface Props {
  id: string;
  labelMessage: string;
  placeHolder: string;
  value: string;
  onChangeHandler:  ChangeEventHandler<HTMLInputElement>;
}

const TextWithLabel = ({
  id,
  labelMessage,
  placeHolder,
  value,
  onChangeHandler  
}: Props) => {
  return (
    <>
      {labelMessage && (
        <label htmlFor={id} className="form-label">
          {labelMessage}
        </label>
      )}
    
          <input
            type="text"
            className="form-control "
            id={id}
            name={id}
            placeholder={placeHolder}
            onChange={(e) => onChangeHandler(e)}
            value={value}
            required
          />
              
          {value && 
           <span> &#10004; </span>}
          {!value && <span> * </span>}
         
     </>
  );
};

export default TextWithLabel;
