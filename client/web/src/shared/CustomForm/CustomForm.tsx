type CustomFormProps ={
  placeholder: string
  onBlur: React.FocusEventHandler<HTMLInputElement>

}

const CustomForm = ({placeholder, onBlur}:CustomFormProps) => {
  return (
    <input className="appearance-none block w-full bg-custom-white text-custom-violet border border-custom-violet rounded py-3 px-4 leading-tight focus:outline-none "  type="text" placeholder={placeholder} onBlur={onBlur} />
  )
}

export default CustomForm
