import { FormattedMessage } from "react-intl";

interface Props {
  Id: string;
  labelMessageId: string;
  placeHolder: string;
  value: string;
  onChangeHandler: any;
}

const TextWithLabel = ({
  Id,
  labelMessageId,
  placeHolder,
  value,
  onChangeHandler  
}: Props) => {
  return (
    <>
      {labelMessageId && (
        <label htmlFor={Id} className="form-label">
          <FormattedMessage id={labelMessageId} />
        </label>
      )}
    
          <input
            type="text"
            className="form-control "
            id={Id}
            placeholder={placeHolder}
            onChange={(e) => onChangeHandler(e.target.value)}
            value={value}
           
          />
              
          {value && 
           <span> &#10004; </span>}
          {!value && <span> * </span>}
         
     </>
  );
};

export default TextWithLabel;
