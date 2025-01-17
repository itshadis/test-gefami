// HELPER SOAL NO 1
export function labelOfNumbers(): void {
  for (let i = 50; i <= 100; i += 5) {
    let desc: string;

    if (i <= 60) {
      desc = "KURANG";
    } else if (i > 60 && i <= 70) {
      desc = "CUKUP";
    } else if (i > 70 && i <= 80) {
      desc = "BAIK";
    } else {
      desc = "LUAR BIASA";
    }

    console.log(`${i} - ${desc}`);
  }
}


// HELPER SOAL NO 2
export function generateFibonacci(n: number): void {
  const fibonacci: number[] = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(nextNumber);
    }
  }

  console.log(fibonacci.join(" "));
}


// HELPER SOAL NO 3
export function createStar(totalLine: number):void {
  for (let i = 1; i <= totalLine; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "* "; // Menambahkan satu bintang dan spasi
    }
    console.log(stars.trim()); // Trim untuk menghapus spasi ekstra di akhir
  }
}


// HELPER SOAL NO 4
const ANGKA_DALAM_HURUF = [
  '', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan',
  'Sepuluh', 'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas', 'Enam Belas', 
  'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas', 'Seratus',
];

export function terbilang(x: number): string {
  if (x < 2000 || x > 9999) {
    throw new Error('Angka harus lebih besar dari 2000 dan kurang dari 10000');
  }

  let result = '';

  // Proses ribuan
  const ribuan = Math.floor(x / 1000);
  if (ribuan > 0) {
    result += ANGKA_DALAM_HURUF[ribuan] + ' Ribu';
    x %= 1000;
  }
  
  // Proses ratusan
  const ratusan = Math.floor(x / 100);
  if (ratusan === 1) {
    result += ' ' + ANGKA_DALAM_HURUF[ratusan + 19]
    x %= 100;
  } else if (ratusan > 0) {
    result += ' ' + ANGKA_DALAM_HURUF[ratusan] + ' Ratus';
    x %= 100;
  }
  
  // Proses puluhan
  const puluhan = Math.floor(x / 10);
  if (puluhan > 1) {
    result += ' ' + ANGKA_DALAM_HURUF[puluhan] + ' Puluh';
    x %= 10;
  } else if (puluhan === 1) {
    return result += ' ' + ANGKA_DALAM_HURUF[x];
  }
  
  // Proses satuan
  if (x > 0) {
    result += ' ' + ANGKA_DALAM_HURUF[x];
  }

  return result.trim();
}