import classNames from 'src/utils/ClassNames'

type customCardProps = {
  style?: string
  children: React.ReactNode
}

const CustomCard = ({ style, children }: customCardProps) => {
  return (
    <li
      className={classNames(
        'w-fit space-y-2 rounded-md bg-white drop-shadow-lg',
        style
      )}
      // style={{ background: bg }}
    >
      {children}
    </li>
  )
}

export default CustomCard
