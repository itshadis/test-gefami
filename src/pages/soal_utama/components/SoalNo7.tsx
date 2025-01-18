import Button from "../../../components/Button";
import { encrypt, formatDate } from "../../../utils/helper";

export default function SoalNo7() {
  
  function handleClick(): void {
    const date = formatDate(new Date())
    const name = 'Hadis'

    const generateHash = encrypt(date, name)
    console.log(generateHash)
    
  }

  return (
    <>
      <h2>Klik tombol di bawah kemudian lihat console di developer tools</h2>
      <Button onClick={handleClick} disabled={false} text="Generate Hash" />
    </>
  )
}
