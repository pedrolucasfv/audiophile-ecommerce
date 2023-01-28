import * as S from './styles'
import { ChevronRight as ShopIcon } from '@styled-icons/bootstrap/ChevronRight'

export type CategoryCardProps = {
  image: string
  title: string
}

const CategoryCard = ({ image, title }: CategoryCardProps) => (
  <S.Wrapper>
    <S.Image src={image} />
    <S.Title>{title}</S.Title>
    <S.Shop>
      SHOP <ShopIcon size={14} />
    </S.Shop>
  </S.Wrapper>
)

export default CategoryCard
