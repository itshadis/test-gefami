import { Link } from "react-router";

export default function Header() {
  return (
    <nav className="flex justify-center items-center gap-4 h-20 bg-teal-400">
      <Link className="underline" to={"/"}>Soal Utama</Link>
      <Link className="underline" to={"pseudo-code"}>Soal Pseudo Code</Link>
    </nav>
  )
}
