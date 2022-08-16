import classNames from "src/utils/ClassNames"

export enum buttonSize {
  small = 'w-16',
  medium = 'w-32',
  large = 'w-48',
  xl = 'w-96'
}

type CustomButtonProps = {
  children?: React.ReactNode
  size?:buttonSize
}

const CustomButton = ({children, size = buttonSize.small }:CustomButtonProps) => {
  return (
    <button className={classNames(size,"border-1 border-black rounded-sm hover:bg-custom-violet hover:border-none")}>
      {children}
    </button>
  )
}

export default CustomButton
