import classNames from "src/utils/ClassNames"

type customCardProps = {
  style?: string
  children: React.ReactNode
}

const CustomCard = ({ style, children }: customCardProps) => {
  return (
    <li
      className={classNames(
        'rounded-md bg-custom-white px-4 py-4 drop-shadow-md',
        style
      )}
      // style={{ background: bg }}
    >
      {children}
    </li>
  )
}

export default CustomCard
