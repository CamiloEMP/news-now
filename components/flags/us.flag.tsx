import { SVGProps } from 'react'

export const FlagUnitedStates = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={15} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask
      height={15}
      id="a"
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
      width={21}
      x={0}
      y={0}
    >
      <path
        d="M19 0H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M19 0H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"
        fill="#fff"
      />
      <path clipRule="evenodd" d="M0 0h9v7H0V0Z" fill="#444379" fillRule="evenodd" />
      <path
        clipRule="evenodd"
        d="M1 1v1h1V1H1Zm2 0v1h1V1H3Zm2 0v1h1V1H5Zm2 0v1h1V1H7ZM6 2v1h1V2H6ZM4 2v1h1V2H4ZM2 2v1h1V2H2ZM1 3v1h1V3H1Zm2 0v1h1V3H3Zm2 0v1h1V3H5Zm2 0v1h1V3H7ZM1 5v1h1V5H1Zm2 0v1h1V5H3Zm2 0v1h1V5H5Zm2 0v1h1V5H7ZM6 4v1h1V4H6ZM4 4v1h1V4H4ZM2 4v1h1V4H2Z"
        fill="#A7B6E7"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M9 0v1h12V0H9Zm0 2v1h12V2H9Zm0 2v1h12V4H9Zm0 2v1h12V6H9ZM0 8v1h21V8H0Zm0 2v1h21v-1H0Zm0 2v1h21v-1H0Zm0 2v1h21v-1H0Z"
        fill="#ED4C49"
        fillRule="evenodd"
      />
      <path
        d="M19 .5H2A1.5 1.5 0 0 0 .5 2v11A1.5 1.5 0 0 0 2 14.5h17a1.5 1.5 0 0 0 1.5-1.5V2A1.5 1.5 0 0 0 19 .5Z"
        stroke="#000"
        strokeOpacity={0.1}
      />
    </g>
  </svg>
)
