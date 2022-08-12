import classNames from "src/utils/ClassNames"

type customCardProps = {
  style?: string
  children: React.ReactNode
}

const CustomCard = ({ style, children }: customCardProps) => {
  return (
    <li
      className={classNames(
        'rounded-md border-trend-color border-1 space-y-2 bg-custom-white p-4 ',
        style
      )}
      // style={{ background: bg }}
    >
      {children}
    </li>
  )
}

export default CustomCard
