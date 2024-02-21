'use client'

interface ToggleProps {
  onClick: () => void
}

const Toggle = ({ onClick }: ToggleProps) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 border rounded-lg cursor-pointer bg-shark-400 hover:bg-outrageous-orange-400 xl:hidden bg-opacity-40 border-shark-400"
    >
      <span className="text-white icon-menu"></span>
    </div>
  )
}

export default Toggle
