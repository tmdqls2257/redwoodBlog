import IconBox, { IconType } from "src/shared/IconBox/IconBox"

const Footer = () => {
  return (
    <footer className={'w-screen bg-trend-color text-custom-white flex flex-col justify-center items-center space-y-3'}>
      <h4>{'Teoku\'s tech blog'}</h4>
      <p>{'안녕하세요 테오구 입니다.'}</p>
      <div className={'flex space-x-1'}>
        <IconBox iconName={IconType.annotation}/>
        <IconBox iconName={IconType.bookmark}/>
        <IconBox iconName={IconType.newspaper}/>
        <IconBox iconName={IconType.phone}/>
      </div>
    </footer>
  )
}

export default Footer
