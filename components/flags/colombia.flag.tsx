import { SVGProps } from 'react'

export const FlagColombia = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={15} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask height={15} id="a" maskUnits="userSpaceOnUse" width={21} x={0} y={0}>
      <path
        d="M19 0H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M19 0H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"
        fill="#003495"
      />
      <path d="M0 0h21v7H0V0Z" fill="#FDD200" />
      <path d="M0 11h21v4H0v-4Z" fill="#D0091E" />
      <path
        d="M19 .5H2A1.5 1.5 0 0 0 .5 2v11A1.5 1.5 0 0 0 2 14.5h17a1.5 1.5 0 0 0 1.5-1.5V2A1.5 1.5 0 0 0 19 .5Z"
        stroke="#000"
      />
    </g>
  </svg>
)
