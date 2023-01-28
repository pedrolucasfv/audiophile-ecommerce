import * as S from './styles'

export type ContentInfoProps = {
  title: string
  text: string
  image: string
}

const ContentInfo = ({ image, text, title }: ContentInfoProps) => (
  <S.Wrapper>
    <S.Image src={image} />
    <S.Info>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />
      <S.Text>{text}</S.Text>
    </S.Info>
  </S.Wrapper>
)

export default ContentInfo
