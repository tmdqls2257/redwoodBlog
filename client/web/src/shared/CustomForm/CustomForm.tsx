type CustomFormProps = {
  placeholder: string
  onBlur: React.FocusEventHandler<HTMLInputElement>
}

const CustomForm = ({ placeholder, onBlur }: CustomFormProps) => {
  return (
    <input
      className="block w-full appearance-none rounded border border-violet bg-white py-3 px-4 leading-tight text-violet focus:outline-none "
      type="text"
      placeholder={placeholder}
      onBlur={onBlur}
    />
  )
}

export default CustomForm
