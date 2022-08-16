import classNames from "src/utils/ClassNames"

type customCardProps = {
  style?: string
  children: React.ReactNode
}

const CustomCard = ({ style, children }: customCardProps) => {
  return (
    <li
      className={classNames(
        'rounded-md drop-shadow-lg space-y-2 bg-custom-white w-fit',
        style
      )}
      // style={{ background: bg }}
    >
      {children}
    </li>
  )
}

export default CustomCard
