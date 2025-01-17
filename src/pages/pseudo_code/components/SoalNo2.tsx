import Button from "../../../components/Button";
import { generateFibonacci } from "../../../utils/helper";

export default function SoalNo2() {
  return (
    <div>
      <Button onClick={() => generateFibonacci(20)} disabled={false} text="Soal No 2" />
    </div>
  )
}
