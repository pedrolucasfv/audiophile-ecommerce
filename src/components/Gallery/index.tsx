import Image from 'next/image'
import * as S from './styles'

export type GalleryProps = {
  firstImage: string
  secondImage: string
  thirdImage: string
}

const Gallery = ({ firstImage, secondImage, thirdImage }: GalleryProps) => (
  <S.Wrapper>
    <S.LeftContent>
      <S.ImageBox>
        <Image
          width={450}
          height={290}
          src={firstImage}
          objectFit="cover"
          alt="other image of the product of this page"
        />
      </S.ImageBox>
      <S.ImageBox>
        <Image
          width={450}
          height={290}
          src={secondImage}
          objectFit="cover"
          alt="other image of the product of this page"
        />
      </S.ImageBox>
    </S.LeftContent>
    <S.RightContent>
      <S.MainImage>
        <Image
          width={650}
          height={600}
          src={thirdImage}
          objectFit="cover"
          alt="main image of the product of this page"
        />
      </S.MainImage>
    </S.RightContent>
  </S.Wrapper>
)

export default Gallery
