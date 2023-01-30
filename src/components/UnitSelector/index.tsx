import { useState } from 'react'
import * as S from './styles'
import { Plus } from '@styled-icons/bootstrap/Plus'
import { DashLg as Sub } from '@styled-icons/bootstrap/DashLg'

export type UnitSelectorProps = {
  unit?: number
  func?: () => void
}
const UnitSelector = ({ unit = 0 }: UnitSelectorProps) => {
  const [unitState, setUnitState] = useState(unit)

  const handleUnit = (control: string) => {
    if (control == 'plus') {
      setUnitState(unitState + 1)
    } else if (control == 'sub') {
      if (unitState > 0) setUnitState(unitState - 1)
    }
  }
  return (
    <S.Wrapper>
      <S.Sub onClick={() => handleUnit('sub')}>
        <Sub size={24} aria-label="Sub" />
      </S.Sub>
      <S.Number>{unitState}</S.Number>
      <S.Plus onClick={() => handleUnit('plus')}>
        <Plus size={26} aria-label="Plus" />
      </S.Plus>
    </S.Wrapper>
  )
}
export default UnitSelector
