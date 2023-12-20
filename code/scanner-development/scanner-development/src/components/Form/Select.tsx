/** @format */

// @flow
import { FieldError } from "react-hook-form";

type Props = {
  name: string;
  placeholder: string;
  id: string | number;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  defaultValue?: string | number;
  type?: string;
  style?: string;
  options: Array<object | number | string>;
  required: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: FieldError | any
  
};

export const Select = (props: Props) => {
  const {
    name,
    placeholder,
    style,
    register,
    required,
    options,
    error
  } = props;

   
  return (
    <div className="flex flex-col gap-y-2 relative">
      <label htmlFor={name} className="text-gray-600 text-base">
        {placeholder}
      </label>
      <select
        name={name} 
        {...register(name, { required })}
        className={`border ${style} text-base p-2 outline-none rounded-md`}
      >
        <option value="">Select</option>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          options?.map((option: any, index: number) => {
            return (
              <option value={option.id} key={`item-${index}`}>
                {option.title}
              </option>
            );
          })
        }
      </select>
      {error[name] && (
				<p
					className='text-sm absolute top-20 text-red-600 text-left justify-start'
					data-error='data-error'>
					{error[name]?.message}
				</p>
			)}
    </div>
  );
};
