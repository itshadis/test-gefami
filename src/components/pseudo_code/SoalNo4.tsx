import React, { useState } from 'react'
import { terbilang } from '../../utils/helper'
import Swal from 'sweetalert2'

export default function SoalNo4() {
  const [angkaTerbilang, setAngkaTerbilang] = useState<string>("")
  const [nominal, setNominal] = useState<number>(0)
  
  function handleChangeNominal(e :React.ChangeEvent<HTMLInputElement>):void {
    setNominal(parseInt(e.target.value))
  }

  function handleSoalNo4() {
    try {
      const hasilTerbilang = terbilang(nominal)
      console.log(hasilTerbilang);
      
      setAngkaTerbilang(hasilTerbilang)
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
      <p className="">Masukkan angka lebih dari 2000 atau kurang dari 10000</p>
      <div>
        <input type="text" className="border border-black w-20 indent-2 p-2" onChange={(e) => handleChangeNominal(e)} />
        <button className="px-4 h-10 bg-slate-400 rounded hover:bg-slate-500" onClick={handleSoalNo4}>Soal No 4</button>
      </div>
      <p>{angkaTerbilang}</p>
    </div>
  )
}
