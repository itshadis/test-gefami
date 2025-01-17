export function multiple5(): void {
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

export function createStar(totalLine: number):void {
  for (let i = 1; i <= totalLine; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "* "; // Menambahkan satu bintang dan spasi
    }
    console.log(stars.trim()); // Trim untuk menghapus spasi ekstra di akhir
  }
}

export function terbilang(x: number): string {
  if (x < 2000 || x > 9999) {
    throw new Error('Angka harus lebih besar dari 2000 dan kurang dari 10000');
  }

  const angka = [
    '', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan',
    'Sepuluh', 'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas', 'Enam Belas', 
    'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas', 'Dua Puluh', 'Tiga Puluh', 'Empat Puluh', 
    'Lima Puluh', 'Enam Puluh', 'Tujuh Puluh', 'Delapan Puluh', 'Sembilan Puluh', 'Seribu', 
    'Dua Ribu', 'Tiga Ribu', 'Empat Ribu', 'Lima Ribu', 'Enam Ribu', 'Tujuh Ribu', 'Delapan Ribu', 'Sembilan Ribu'
  ];

  let result = '';

  // Proses ribuan
  const ribuan = Math.floor(x / 1000);
  if (ribuan > 0) {
    result += angka[ribuan] + ' Ribu';
    x %= 1000;
  }
  
  // Proses ratusan
  const ratusan = Math.floor(x / 100);
  if (ratusan > 0) {
    result += ' ' + angka[ratusan] + ' Ratus';
    x %= 100;
  }
  
  // Proses puluhan
  const puluhan = Math.floor(x / 10);
  if (puluhan > 1) {
    result += ' ' + angka[puluhan + 18]; // 18 karena "Dua Puluh" ada di indeks 20
    x %= 10;
  } else if (puluhan === 1) {
    result += ' ' + angka[x + 10]; // 10-19 karena sudah terbilang di range 10-19
    return result;
  }
  
  // Proses satuan
  if (x > 0) {
    result += ' ' + angka[x];
  }

  return result.trim();
}