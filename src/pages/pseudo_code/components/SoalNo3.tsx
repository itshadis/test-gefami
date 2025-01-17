import React, { useState } from "react"
import { createStar } from "../../../utils/helper"
import Button from "../../../components/Button"
import Input from "../../../components/Input"

export default function SoalNo3() {
  const [totalLine, setTotalLine] = useState<number>(0)

  function handleChangeTotal(e: React.ChangeEvent<HTMLInputElement>): void {
    setTotalLine(parseInt(e.target.value))
  }

  return (
    <div className="flex flex-col gap-1">
      <p className="">Masukkan jumlah baris yang ingin dibuat</p>
      <div className="flex gap-1">
        <Input type="number" onChange={(e) => handleChangeTotal(e)} />
        <Button onClick={() => createStar(totalLine)} disabled={totalLine <= 0} text="Soal No 3"/>
      </div>
    </div>
  )
}
