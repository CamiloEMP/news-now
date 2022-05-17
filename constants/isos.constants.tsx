import {
  FlagAlemania,
  FlagArgentina,
  FlagBrazil,
  FlagColombia,
  FlagUnitedStates,
  FlagMexico,
} from 'components/flags'

interface Iso {
  name: string
  code: string
  icon: JSX.Element
}

export const ISOS_CONSTANTS: Iso[] = [
  {
    name: 'United States',
    code: 'us',
    icon: <FlagUnitedStates />,
  },
  {
    name: 'Colombia',
    code: 'co',
    icon: <FlagColombia />,
  },
  {
    name: 'Germany',
    code: 'de',
    icon: <FlagAlemania />,
  },
  {
    name: 'Mexico',
    code: 'mx',
    icon: <FlagMexico />,
  },
  {
    name: 'Brazil',
    code: 'br',
    icon: <FlagBrazil />,
  },
  {
    name: 'Argentina',
    code: 'ar',
    icon: <FlagArgentina />,
  },
]
