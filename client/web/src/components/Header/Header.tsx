import IconBox, { IconType } from 'src/shared/IconBox/IconBox'

type HeaderProps = {
  onClick: () => void
}

const Header = ({ onClick }: HeaderProps) => {
  return (
    <header className="bg-custom-white border-custom-violet flex items-center justify-between border ">
      <button onClick={onClick}>
        <IconBox iconName={IconType.menu} />
      </button>
      <h5>{"teogu's tech blog"}</h5>
      <IconBox iconName={IconType.search} />
    </header>
  )
}

export default Header
