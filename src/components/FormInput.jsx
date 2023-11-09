import { getErrorMassageByProperty } from "../helper/getErrorMassageByProperty";

const FormInput = (props) => {
  let error = null;
  if(props.error){
    error = getErrorMassageByProperty(props.error, props.name)
  }
    return (
        <div className='flex flex-col my-3 w-full mx-1'>
          <label className="font-semibold text-secondary text-xs" htmlFor="">{props?.lebel}</label>
          <input className='border my-2 w-full px-2 py-1  focus:outline-none'  {...props?.register(`${props?.name}`)} placeholder={`${props?.placeholder}`} type={`${props?.type}`} defaultValue={props?.defaultValue} value={props?.value} />
          <small className="text-red-600 text-xs">{error}</small>
        </div>
    );
};

export default FormInput;
