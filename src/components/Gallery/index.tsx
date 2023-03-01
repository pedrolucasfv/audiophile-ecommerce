import * as S from './styles'

export type GalleryProps = {
  firstImage: string
  secondImage: string
  thirdImage: string
}

const Gallery = ({ firstImage, secondImage, thirdImage }: GalleryProps) => (
  <S.Wrapper>
    <S.LeftContent>
      <S.ImageBox src={firstImage} />
      <S.ImageBox src={secondImage} />
    </S.LeftContent>
    <S.RightContent>
      <S.MainImage src={thirdImage} />
    </S.RightContent>
  </S.Wrapper>
)

export default Gallery
