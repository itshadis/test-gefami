import React from "react"

interface InputProps {
  type: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Input({ type, onChange }: InputProps) {
  return (
    <input className="border border-black w-20 indent-2 p-2" onChange={onChange} type={type}/>
  )
}
