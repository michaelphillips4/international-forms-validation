

interface Props {
  Id: string;
  placeHolder: string;
  value: string;
  onChangeHandler: any;
}

const TextWithLabel = ({
  Id,
  placeHolder,
  value,
  onChangeHandler  
}: Props) => {
  return (
    <>
      {placeHolder && (
        <label htmlFor={Id} className="form-label">
         {placeHolder}
        </label>
      )}
    
          <input
            type="text"
            className="form-control "
            id={Id}
            name={Id}
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
