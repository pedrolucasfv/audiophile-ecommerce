import { useState } from 'react'
import * as S from './styles'
import { Plus } from '@styled-icons/bootstrap/Plus'
import { DashLg as Sub } from '@styled-icons/bootstrap/DashLg'

export type UnitSelectorProps = {
  unit: number
  func?: () => void
}
const UnitSelector = ({ unit }: UnitSelectorProps) => {
  const [unitState, setUnitState] = useState(unit)

  return (
    <S.Wrapper>
      <S.Plus onClick={() => setUnitState(unitState + 1)}>
        <Plus size={24} />
      </S.Plus>
      <S.Number>{unitState}</S.Number>
      <S.Sub onClick={() => setUnitState(unitState - 1)}>
        <Sub size={24} />
      </S.Sub>
    </S.Wrapper>
  )
}
export default UnitSelector
