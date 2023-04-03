import Image from 'next/image'
import * as S from './styles'
import { ChevronRight as ShopIcon } from '@styled-icons/bootstrap/ChevronRight'

export type CategoryCardProps = {
  image: string
  title: string
  link: string
}

const CategoryCard = ({ image, title, link }: CategoryCardProps) => (
  <S.Wrapper>
    <S.Image>
      <Image
        src={image}
        aria-label="Category Image"
        objectFit="contain"
        layout="fill"
        alt="selected category image "
      />
    </S.Image>
    <S.Title>{title}</S.Title>
    <S.Shop href={link} aria-label="Shop Button">
      SHOP <ShopIcon size={12} />
    </S.Shop>
  </S.Wrapper>
)

export default CategoryCard
