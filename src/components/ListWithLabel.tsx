import { ChangeEventHandler } from "react";


interface ListWithLabelProps {
  id: string;
  labelMessage: string;
  options: string[];
  value: string;  
  onChangeHandler: ChangeEventHandler<HTMLSelectElement>;  
}

const ListWithLabel = ({
  id,
  labelMessage,
  options,
  value,
  onChangeHandler
}: ListWithLabelProps) => {
 
  return (
    <>
      {labelMessage && (
        <label htmlFor={id} className="form-label">
          {labelMessage}
        </label>
      )}
       
 <select
        id={id}
        className="form-select"
        onChange={(e) => onChangeHandler(e)}
        value={value}
      >
        {options &&
          options.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
      </select>
              
      {value && 
           <span> &#10004; </span>}
          {!value && <span> * </span>}
    </>
  );
};

export default ListWithLabel;
