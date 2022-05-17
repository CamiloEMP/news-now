import { SVGProps } from 'react'

export const FlagBrazil = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#009C34"
      />
      <path clipRule="evenodd" d="M10.5 2 18 7.5 10.5 13 3 7.5" fill="#F8E23D" fillRule="evenodd" />
      <path d="M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" fill="#002478" />
      <path clipRule="evenodd" d="M9 9v1h1V9H9Zm2 0v1h1V9h-1Z" fill="#91A1C3" fillRule="evenodd" />
      <path d="M8 6s2.264.4 3.896 1.098L14 8" stroke="#C9D0E0" />
      <path
        d="M19 .5H2A1.5 1.5 0 0 0 .5 2v11A1.5 1.5 0 0 0 2 14.5h17a1.5 1.5 0 0 0 1.5-1.5V2A1.5 1.5 0 0 0 19 .5Z"
        stroke="#000"
        strokeOpacity={0.1}
      />
    </g>
  </svg>
)
