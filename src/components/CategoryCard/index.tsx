import * as S from './styles'
import { ChevronRight as ShopIcon } from '@styled-icons/bootstrap/ChevronRight'

export type CategoryCardProps = {
  image: string
  title: string
  link: string
}

const CategoryCard = ({ image, title, link }: CategoryCardProps) => (
  <S.Wrapper>
    <S.Image src={image} />
    <S.Title>{title}</S.Title>
    <S.Shop href={link}>
      SHOP <ShopIcon size={12} />
    </S.Shop>
  </S.Wrapper>
)

export default CategoryCard
