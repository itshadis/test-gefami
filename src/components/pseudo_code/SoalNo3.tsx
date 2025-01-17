import React, { useState } from "react"
import { createStar } from "../../utils/helper"

export default function SoalNo3() {
  const [totalLine, setTotalLine] = useState<number>(0)

  function handleChangeTotal(e: React.ChangeEvent<HTMLInputElement>): void {
    setTotalLine(parseInt(e.target.value))
  }

  return (
    <div className="flex flex-col gap-1">
      <p className="">Masukkan jumlah baris yang ingin dibuat</p>
      <div className="flex gap-1">
        <input type="number" className="border border-black w-20 indent-2 p-2" onChange={(e) => handleChangeTotal(e)} />
        <button className="px-4 h-10 bg-slate-400 rounded hover:bg-slate-500" onClick={() => createStar(totalLine)}>Soal No 3</button>
      </div>
    </div>
  )
}
