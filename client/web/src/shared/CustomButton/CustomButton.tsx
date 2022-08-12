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
    <button className={classNames(size,"bg-transparent hover:bg-trend-color text-trend-color font-semibold hover:text-custom-white py-2 px-4 border border-trend-color hover:border-transparent text-center rounded")}>
      {children}
    </button>
  )
}

export default CustomButton
