export const dataSiswa = `[
  {
    "nama": "Hadis",
    "jenis_kelamin": "Laki-laki",
    "kelas": "XII",
    "alamat": "Jakarta"
  },
  {
    "nama": "Ucup",
    "jenis_kelamin": "Laki-laki",
    "kelas": "XI",
    "alamat": "Yogyakarta"
  },
  {
    "nama": "Ghina Nabilah",
    "jenis_kelamin": "Perempuan",
    "kelas": "XI",
    "alamat": "Medan"
  },
  {
    "nama": "Apif Supriadi",
    "jenis_kelamin": "Laki-laki",
    "kelas": "X",
    "alamat": "Surabaya"
  },
  {
    "nama": "Eka",
    "jenis_kelamin": "Perempuan",
    "kelas": "XII",
    "alamat": "Jakarta"
  }
]`


import { useState } from 'react'
import Button from '../../../components/Button'

type Siswa = {
  nama: string,
  jenis_kelamin: string,
  kelas: string,
  alamat: string,
}

export default function SoalNo1_2() {
  const data: Siswa[] = JSON.parse(dataSiswa)
  const [currentData, setCurrentData] = useState<Siswa>(data[0])

  function handleClick(): void {
    const getRandomIdex = Math.floor(Math.random() * data.length -1) + 1
    setCurrentData(data[getRandomIdex])
  }

  return (
    <div className=''>
      <Button onClick={handleClick} disabled={false} text='Ubah Data'></Button>
      <p>Nama : {currentData?.nama}</p>
      <p>Jenis Kelamin: {currentData?.jenis_kelamin}</p>
      <p>Kelas: {currentData?.kelas}</p>
      <p>Alamat: {currentData?.alamat}</p>
    </div>
  )
}
