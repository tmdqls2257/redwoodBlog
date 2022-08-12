import CustomButton, { buttonSize } from './CustomButton'

export const generated = (args) => {
  return <CustomButton {...args} />
}

export const customSmallButton = () => {
  return <CustomButton >
    {'전송'}
  </CustomButton>
}

export const customMediumButton = () => {
  return <CustomButton size={buttonSize.medium} >
    {'전송'}
  </CustomButton>
}

export const customLargeButton = () => {
  return <CustomButton size={buttonSize.large} >
    {'전송'}
  </CustomButton>
}

export default { title: 'Components/CustomButton' }
