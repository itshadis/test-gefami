/* eslint-disable react-refresh/only-export-components */
import Swal from "sweetalert2";
import Button from "../../../components/Button";

export default function SoalNo10_11() {

  return (
    <div>
      <h2 className="my-4">Klik untuk melakukan request sesuai kategori, buka consol untuk melihat hasil respon</h2>
      <p>Untuk menjalankan server buka terminal baru dan arahkan ke dalam folder server, jalankan perintah "npm install"</p>
      <p>Setelah selesai jalankan perintah "npm run dev"</p>

      <div className="flex gap-4 mt-4">
        <SoalNo10 />
        <SoalNo11 />
      </div>
    </div>
  )
}

function SoalNo10() {

  async function handleGetAPI() {
    try {
      const response: Response = await fetch('http://localhost:3000/api/data', {
        headers: {
          "User-id": "ifabula",
          "Scope": "user"
        }
      })

      if(!response.ok) {
        return Swal.fire({
          icon: "error",
          text: response.statusText
        })
      }
    } catch (error) {
      if(error instanceof Error) {
        Swal.fire({
          icon: "error",
          text: error.message
        })
      }
    }
  }
  return (
    <Button onClick={handleGetAPI} text="Request GET" />
  )
}

function SoalNo11() {

  async function handlePostAPI() {
    try {
      const data = {
        userId: 1,
        id: 4,
        title: "ini title baru dari request POST",
        body: "ini body baru daru request POST"
      }

      const response = await fetch('http://localhost:3000/api/data', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-id": "ifabula",
          "Scope": "user"
        },
        body: JSON.stringify(data)
      })

      if(!response.ok) {
        return Swal.fire({
          icon: "error",
          text: response.statusText
        })
      }
      console.log(response)
    } catch (error) {
      if(error instanceof Error) {
        Swal.fire({
          icon: "error",
          text: error.message
        })
      }
    }
  }

  return (
    <Button onClick={handlePostAPI} text="Request POST" />
  )
}