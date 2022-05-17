import { SVGProps } from 'react'

export const FlagMexico = (props: SVGProps<SVGSVGElement>) => (
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
      <path
        clipRule="evenodd"
        d="M13 7.5a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 5 0ZM10.5 9c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2S9 5.895 9 7s.672 2 1.5 2Z"
        fill="#406421"
        fillRule="evenodd"
      />
      <path d="M10.5 8c.276 0 .5-.448.5-1s-.224-1-.5-1-.5.448-.5 1 .224 1 .5 1Z" fill="#D5B852" />
      <path clipRule="evenodd" d="M0 0h7v15H0V0Z" fill="#006946" fillRule="evenodd" />
      <path clipRule="evenodd" d="M14 0h7v15h-7V0Z" fill="#D0091E" fillRule="evenodd" />
      <path
        d="M19 .5H2A1.5 1.5 0 0 0 .5 2v11A1.5 1.5 0 0 0 2 14.5h17a1.5 1.5 0 0 0 1.5-1.5V2A1.5 1.5 0 0 0 19 .5Z"
        stroke="#000"
        strokeOpacity={0.1}
      />
    </g>
  </svg>
)
