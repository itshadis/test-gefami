import React from 'react'

interface ButtonProps {
  text: string,
  disabled?: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

function Button({text, disabled = false, onClick}: ButtonProps) {

  return (
    <button className={`px-4 h-10 bg-slate-400 rounded hover:bg-slate-500 ${disabled && 'cursor-not-allowed'}`} disabled={disabled} onClick={onClick}>{text}</button>
  )
}

export default React.memo(Button)