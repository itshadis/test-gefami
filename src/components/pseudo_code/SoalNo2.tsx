import { generateFibonacci } from "../../utils/helper";

export default function SoalNo2() {
  return (
    <div>
      <button className="px-4 h-10 bg-slate-400 rounded hover:bg-slate-500" onClick={() => generateFibonacci(20)}>Soal No 2</button>
    </div>
  )
}
