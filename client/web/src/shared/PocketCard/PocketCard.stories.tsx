import PocketCard from './PocketCard'

export const generated = (args) => {
  return <PocketCard {...args} />
}

export const pocketCard = () => {
  return <PocketCard title={'title입니다.'} body={'내용입니다.'} imgSrc={"./download.jpeg"}/>

}

export default { title: 'Shared/PocketCard' }
