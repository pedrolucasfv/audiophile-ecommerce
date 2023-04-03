import Button from 'components/Button'
import * as S from './styles'
import Image from 'next/image'

export type OtherProductProps = {
  name: string
  image: string
  slug: string
}

const OtherProduct = ({ image, name, slug }: OtherProductProps) => (
  <S.Wrapper>
    <Image
      src={image}
      aria-label="Product Image"
      alt="Other product that you may also like"
      objectFit="contain"
      height={350}
      width={350}
    />
    <S.NameProduct>{name}</S.NameProduct>
    <Button text="SEE PRODUCT" link={slug} />
  </S.Wrapper>
)

export default OtherProduct
