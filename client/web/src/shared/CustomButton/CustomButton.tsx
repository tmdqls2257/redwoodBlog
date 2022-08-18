import classNames from 'src/utils/ClassNames'

export enum buttonSize {
  small = 'w-16',
  medium = 'w-32',
  large = 'w-48',
  xl = 'w-96',
}

type CustomButtonProps = {
  children?: React.ReactNode
  size?: buttonSize
}

const CustomButton = ({
  children,
  size = buttonSize.small,
}: CustomButtonProps) => {
  return (
    <button
      className={classNames(
        size,
        'border-1 rounded-sm border-black hover:border-none hover:bg-violet'
      )}
    >
      {children}
    </button>
  )
}

export default CustomButton
