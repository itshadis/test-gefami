import Button from "../../../components/Button";
import { labelOfNumbers } from "../../../utils/helper";

export default function SoalNo1() {

  return (
    <div>
      <Button onClick={labelOfNumbers} text="Soal No 1" disabled={false}/>
    </div>
  )
}
