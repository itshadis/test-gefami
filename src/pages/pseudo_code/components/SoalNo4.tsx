import React, { useState } from 'react'
import { terbilang } from '../../../utils/helper'
import Swal from 'sweetalert2'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

export default function SoalNo4() {
  const [nominal, setNominal] = useState<number>(0)
  
  function handleChange(e :React.ChangeEvent<HTMLInputElement>):void {
    setNominal(parseInt(e.target.value))
  }

  function handleClick() {
    try {
      const hasilTerbilang = terbilang(nominal)
      console.log(hasilTerbilang);
    } catch (error) {
      if(error instanceof Error) {
        Swal.fire({
          icon: "error",
          text: error.message
        });
      }
    }
  }

  return (
    <div>
      <p className="mb-1">Masukkan angka lebih dari 2000 dan kurang dari 10000</p>
      <div className="flex gap-1">
        <Input type="number" onChange={(e) => handleChange(e)} />
        <Button onClick={handleClick} disabled={nominal <= 0} text='Soal No 4' />
      </div>
    </div>
  )
}
