/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

type Props = {
	label?: string;
	name: string;
	placeholder?: string;
	id?: string | number;
	register?: any;
	type?: string;
	style?: string;
	error?: string | any;
	required?: boolean;
	maxLength?: number;
};
export const Input: React.FC<Props> = ({
	name,
	placeholder,
	register,
	style,
	error,
	required,
	maxLength,
	label,
}) => {
	return (
		<div className='flex flex-col gap-y-2 relative'>
			<label htmlFor={name} className='text-gray-900 text-base'>
				{label}
			</label>
			<input
				type='text'
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
				{...register(name, { required })}
				className={`border ${style} text-base p-2 outline-none w-full rounded-md relative`}
			/>
			{error[name] && (
				<p
					className='text-xs absolute top-[78px] text-red-600 text-left justify-start'
					data-error='data-error'>
					{error[name]?.message}
				</p>
			)}
		</div>
	);
};
