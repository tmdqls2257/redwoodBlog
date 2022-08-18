import CustomCard from '../CustomCard/CustomCard'

type PocketCardProps = {
  title: string
  body: string
  imgSrc: string
}

const PocketCard = ({ title, body, imgSrc }: PocketCardProps) => {
  return (
    <CustomCard style="w-1/3">
      <section className=" divide-y divide-dashed ">
        <img className="w-full" src={imgSrc} alt="게시물" />
        <article className="p-4 ">
          <h5>{title}</h5>
          <p>{body}</p>
        </article>
      </section>
    </CustomCard>
  )
}

export default PocketCard
