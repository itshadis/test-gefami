export default function SoalNo8() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Berikut penjabaran hasil debuging di file "testdebug.html"</h2>
      <p>1. line 24, kurang tanda koma "," sebelum data baru</p>
      <p>2. line 429, kurang tanda quote penutup pada string value</p>
      <p>3. line 438, nilai key "valueAsString" belum di assign</p>
      <p>4. line 541, index element belum didefinisikan ketika akses nilai</p>
      <p>5. line 528, kesalahan pengetikan seharusnya "attribute" bukan "attributes"</p>

      <div>
        <img src="ss-bug-fixing-testdebug.png" alt="sreenshot-bug-fixing-testdebug" />
      </div>
    </div>
  )
}
