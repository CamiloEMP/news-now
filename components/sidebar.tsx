interface Props {
  isOpen: boolean
  onClose: (action: boolean) => void
}

export const Sidebar = ({ onClose, isOpen }: Props) => {
  return (
    <div
      className={`absolute bg-black text-white w-80 h-screen top-0 left-0 z-50 ${
        isOpen ? 'animate-fadeInRight' : 'animate-fadeInLeft'
      }`}
    >
      <button onClick={() => onClose(false)}>sd</button>
      <h1>Sidebar</h1>
    </div>
  )
}
