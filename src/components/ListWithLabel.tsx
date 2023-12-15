import { FormattedMessage } from "react-intl";

interface ListWithLabelProps {
  selectId: string;
  labelMessageId: string;
  options: string[];
  value: string;  
  onChangeHandler:any;  
}

const ListWithLabel = ({
  selectId,
  labelMessageId,
  options,
  value,
  onChangeHandler
}: ListWithLabelProps) => {
 
  return (
    <>
      {labelMessageId && (
        <label htmlFor={selectId} className="form-label">
          <FormattedMessage id={labelMessageId} />
        </label>
      )}
       
 <select
        id={selectId}
        className="form-select"
        onChange={(e) => onChangeHandler(e.target.value)}
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
