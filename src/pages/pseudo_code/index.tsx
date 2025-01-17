import SoalNo1 from "./components/SoalNo1";
import SoalNo2 from "./components/SoalNo2";
import SoalNo3 from "./components/SoalNo3";
import SoalNo4 from "./components/SoalNo4";

export default function SoalPseudoCode() {

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-xl font-bold mb-2">Soal Pseudo Code</h2>
      <p className="mb-4">Klik tombol dibawah sesuai dengan nomor soal kemudian buka console di developer tool untuk melihat hasilnya</p>
      <div className="flex flex-col gap-10">
        <SoalNo1 />
        <SoalNo2 />
        <SoalNo3 />
        <SoalNo4 />
      </div>
    </div>
  )
}
