type CustomFormProps ={
  placeholder: string
  onBlur: React.FocusEventHandler<HTMLInputElement>

}

const CustomForm = ({placeholder, onBlur}:CustomFormProps) => {
  return (
    <input className="appearance-none block w-full bg-custom-grey text-custom-black border border-custom-grey rounded py-3 px-4 leading-tight focus:outline-none focus:bg-custom-white focus:border-custom-grey"  type="text" placeholder={placeholder} onBlur={onBlur} />
  )
}

export default CustomForm
