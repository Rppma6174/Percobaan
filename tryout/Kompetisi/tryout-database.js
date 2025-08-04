const allTryouts = {
  // ID unik untuk setiap paket tryout
  "kompetisi-umt-1": {
    title: "Tryout Challange UMT - Season 1",
    duration: 5400, // 25 menit * 60 detik
    questions: [
      { 
        id: 1, 
        text: `Jika $p = 2a + 3$ dan $q = a + 6$, maka nilai dari $2p + 4q$ adalah...`, 
        options: [
          `$6a + 30$`, 
          `$8a + 30$`, 
          `$8a + 18$`, 
          `$4a + 24$`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 2, 
        text: `Manakah dari bilangan berikut yang habis dibagi 3 dan 4?`, 
        options: [
          `140`, 
          `154`, 
          `132`, 
          `162`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 3, 
        text: `Sebuah persegi panjang memiliki panjang $x$ cm dan lebar $y$ cm. Jika luasnya adalah 48 cm² dan kelilingnya 28 cm, berapakah nilai dari $x+y$?`, 
        options: [
          `28`, 
          `48`, 
          `12`, 
          `14`
        ], 
        correctAnswer: 3 
      },
      { 
        id: 4, 
        text: `Bilangan ke-5 dari suatu barisan aritmatika adalah 23 dan bilangan ke-10 adalah 43. Berapakah suku pertama barisan tersebut?`, 
        options: [
          `4`, 
          `5`, 
          `7`, 
          `3`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 5, 
        text: `Jika $x$ adalah 20% dari 70, dan $y$ adalah 70% dari 20, maka pernyataan yang benar adalah...`, 
        options: [
          `$x > y$`, 
          `$x < y$`, 
          `$x = y$`, 
          `Hubungan tidak dapat ditentukan`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 6, 
        text: `Rata-rata nilai 5 siswa adalah 80. Jika nilai seorang siswa baru ditambahkan, rata-ratanya menjadi 82. Berapakah nilai siswa baru tersebut?`, 
        options: [
          `82`, 
          `90`, 
          `92`, 
          `88`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 7, 
        text: `Sebuah dadu dan sebuah koin dilempar bersamaan. Berapa peluang munculnya mata dadu ganjil dan sisi gambar pada koin?`, 
        options: [
          `$\\frac{1}{2}$`, 
          `$\\frac{1}{4}$`, 
          `$\\frac{1}{6}$`, 
          `$\\frac{3}{4}$`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 8, 
        text: `Operasi $\\odot$ pada himpunan bilangan bulat didefinisikan dengan aturan: $a \\odot b = b(a+b) - a$. Nilai dari $3 \\odot (2 \\odot 1)$ adalah...`, 
        options: [
          `12`, 
          `1`, 
          `15`, 
          `9`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 9, 
        text: `Harga sebuah buku didiskon 20%. Jika harga setelah diskon adalah Rp 48.000, berapakah harga awal buku tersebut?`, 
        options: [
          `Rp 57.600`, 
          `Rp 60.000`, 
          `Rp 54.000`, 
          `Rp 64.000`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 10, 
        text: `Jika $3^{x-1} = 81$, maka nilai $x$ adalah...`, 
        options: [
          `4`, 
          `3`, 
          `2`, 
          `5`
        ], 
        correctAnswer: 3 
      },
      { 
        id: 11, 
        text: `Sudut-sudut sebuah segitiga memiliki perbandingan 2:3:5. Berapakah besar sudut terkecil dari segitiga tersebut?`, 
        options: [
          `18°`, 
          `54°`, 
          `36°`, 
          `90°`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 12, 
        text: `Manakah di antara pilihan berikut yang BUKAN merupakan bilangan prima?`, 
        options: [
          `41`, 
          `51`, 
          `61`, 
          `71`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 13, 
        text: `Tiga tahun yang lalu, jumlah umur Ani dan Budi adalah 26 tahun. Jika sekarang umur Ani 4 tahun lebih tua dari Budi, berapakah umur Budi sekarang?`, 
        options: [
          `18 tahun`, 
          `11 tahun`, 
          `14 tahun`, 
          `16 tahun`
        ], 
        correctAnswer: 2 
      },
      { 
        id: 14, 
        text: `Jika $x > 0$ dan $y < 0$, maka manakah dari ekspresi berikut yang nilainya PASTI positif?`, 
        options: [
          `$y - x$`, 
          `$x - y$`, 
          `$x \\times y$`, 
          `$x + y$`
        ], 
        correctAnswer: 1 
      },
      { 
        id: 15, 
        text: `Pola berikutnya dari barisan 2, 3, 5, 8, 13, ... adalah?`, 
        options: [
          `18`, 
          `20`, 
          `19`, 
          `21`
        ], 
        correctAnswer: 3 
      },
{ 
        id: 16, 
        text: "Jika \\( p \\) dan \\( q \\) adalah dua bilangan real positif sehingga \\( p + q = 2 \\), maka nilai minimum dari: \\( \\left(p + \\frac{1}{p}\\right)^2 + \\left(q + \\frac{1}{q}\\right)^2 \\) adalah...", 
        options: [
          "$8$", 
          "$9$", 
          "$10$", 
          "$12$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 17, 
        text: "Temukan koefisien dari \\( x^r \\) dalam pengembangan \\( (1 + x + 2x^2 + 3x^3 + \\dots + nx^n) \\), \\( |x| < 1 \\).", 
        options: [
          "$\\frac{n(n+1)}{2}$", 
          "$\\min(n, r)$", 
          "$r$", 
          "$n - r + 1$"
        ], 
        correctAnswer: 3 
      },
      { 
        id: 18, 
        text: "Temukan nilai dari \\( n \\) yang memenuhi hal berikut: \\( \\sum_{r=1}^n r^2 = \\sum_{r=1}^n r^3 \\).", 
        options: [
          "$1$", 
          "$36$", 
          "$70$", 
          "$6$"
        ], 
        correctAnswer: 3 
      },
      { 
        id: 19, 
        text: "Misalkan \\( a_n \\) adalah suku-suku dari barisan aritmetika dengan jumlah: \\( \\sum_{r=1}^{24} a_r = \\alpha \\) dan \\( \\sum_{r=1}^{24} (a_r - \\beta) = \\beta \\), maka beda dari barisan tersebut adalah:", 
        options: [
          "$\\frac{\\alpha - 25\\beta}{276}$", 
          "$\\frac{\\alpha - 23\\beta}{276}$", 
          "$\\frac{\\alpha - 24\\beta}{276}$", 
          "$\\frac{\\alpha - \\beta}{24}$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 20, 
        text: "Jika \\( x, y, z \\) adalah bilangan real positif yang memenuhi: \\( 25(x^2 + y^2 + z^2) - 15(xy + yz + zx) = 0 \\), maka \\( x, y, z \\) membentuk barisan:", 
        options: [
          "aritmetika", 
          "geometri", 
          "harmonik", 
          "bertingkat"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 21, 
        text: "Temukan jumlah dari hasil kali dari \\( n \\) bilangan real positif pertama, diambil satu per satu.", 
        options: [
          "$n!$", 
          "$\\frac{n(n+1)}{2}$", 
          "$n^2$", 
          "$2^n$"
        ], 
        correctAnswer: 0 
      },
      { 
        id: 22, 
        text: "Jika \\( \\sum_{r=1}^n (ar^2 + br + c) = an^3 + bn^2 + cn \\), maka nilai dari \\( a \\), \\( b \\), dan \\( c \\) adalah:", 
        options: [
          "$a=1, b=1, c=1$", 
          "$a=1, b=2, c=3$", 
          "$a=1, b=0, c=0$", 
          "$a=2, b=2, c=2$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 23, 
        text: "Diketahui \\( 3a + 5b + 7c = 18 \\). Tentukan nilai maksimal dari \\( 3a \\cdot 5b \\cdot 7c \\)...", 
        options: [
          "$4$", 
          "$6$", 
          "$5$", 
          "$8$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 24, 
        text: "Misalkan \\( x + y + z = 1 \\) dan \\( x, y, z > 0 \\). Temukan nilai minimum dari: \\( \\left(\\frac{1 + x^2}{y + z}\\right)^2 + \\left(\\frac{1 + y^2}{z + x}\\right)^2 + \\left(\\frac{1 + z^2}{x + y}\\right)^2 \\)", 
        options: [
          "$9$", 
          "$12$", 
          "$10$", 
          "$8$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 25, 
        text: "Jika \\( a > 0, b > 0, c > 0 \\) dan \\( abc = 8 \\), maka nilai minimum dari: \\( \\left(\\frac{1 + a^2}{1 + b^2}\\right) + \\left(\\frac{1 + b^2}{1 + c^2}\\right) + \\left(\\frac{1 + c^2}{1 + a^2}\\right) \\) adalah:", 
        options: [
          "$3$", 
          "$4$", 
          "$5$", 
          "$6$"
        ], 
        correctAnswer: 0 
      },
      { 
        id: 26, 
        text: "Seorang pedagang buah-buahan memiliki 3 buah kotak buah-buahan. Kotak buah pertama terdiri atas 3 buah jeruk, 2 buah apel, dan 1 buah pisang dengan total berat 15 kg. Kotak buah kedua terdiri atas 5 buah jeruk, 7 buah apel, dan 2 buah pisang, dengan total berat 44 kg. Sedangkan kotak ketiga terdiri atas 1 buah jeruk, 3 buah apel, dan 5 buah pisang dengan total berat 26 kg. Tentukan berapakah total berat apel yang dimiliki pedagang buah tersebut.", 
        options: [
          "$5$", 
          "$15$", 
          "$30$", 
          "$45$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 27, 
        text: "Jika \\( x = \\frac{1 - i\\sqrt{3}}{2} \\), maka berapakah nilai \\( \\frac{1}{x^3 - x} \\)?", 
        options: [
          "$-\\frac{1}{x}$", 
          "$\\frac{1}{x^2}$", 
          "$-\\frac{1}{x^2}$", 
          "$-\\frac{1}{x+1}$"
        ], 
        correctAnswer: 3 
      },
      { 
        id: 28, 
        text: "Tentukan hasil penjumlahan semua nilai \\( z \\) bilangan real yang memenuhi \\( z^4 - 4z^2 + 3 = 0 \\).", 
        options: [
          "$-2$", 
          "$-1$", 
          "$0$", 
          "$1$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 29, 
        text: "Jika \\( f(x) = ax^4 - bx^2 + x + 5 \\) dan \\( f(-3) = 2 \\), maka berapakah nilai dari \\( f(3) \\)?", 
        options: [
          "$0$", 
          "$2$", 
          "$4$", 
          "$6$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 30, 
        text: "Berapakah banyaknya bilangan asli \\( x \\) sehingga \\( \\log_x 729 \\) adalah bilangan asli?", 
        options: [
          "$0$", 
          "$2$", 
          "$4$", 
          "$6$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 31, 
        text: "Tentukan banyaknya nilai \\( x \\) bilangan real positif, sehingga \\( (1 - |x|)(1 + x) \\) bilangan asli.", 
        options: [
          "$0$", 
          "$1$", 
          "$2$", 
          "$3$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 32, 
        text: "Tentukan jumlah semua solusi real dari persamaan \\( \\sqrt[3]{x^3 - x^2 - 10} = x - 1 \\).", 
        options: [
          "$\\frac{1}{2}$", 
          "$\\frac{3}{2}$", 
          "$\\frac{5}{2}$", 
          "$\\frac{7}{2}$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 33, 
        text: "Tentukan nilai minimum \\( x + y \\) yang memenuhi \\( x + y + xy = 223 \\) dan \\( x^2 y + xy^2 = 5460 \\).", 
        options: [
          "$14$", 
          "$28$", 
          "$70$", 
          "$140$"
        ], 
        correctAnswer: 0 
      },
      { 
        id: 34, 
        text: "Tentukan nilai \\( a + b + c \\) yang menyebabkan \\( x^4 + ax^3 + bx^2 + cx + 4 = 0 \\) memiliki 4 solusi asli berbeda.", 
        options: [
          "$-5$", 
          "$-4$", 
          "$-3$", 
          "$-2$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 35, 
        text: "Jika \\( x + \\frac{1}{x} = 3 \\), tentukan nilai dari \\( x^5 + \\frac{1}{x^5} \\).", 
        options: [
          "$121$", 
          "$123$", 
          "$125$", 
          "$127$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 36, 
        text: "Barisan bilangan real \\( \\{a_n\\} \\) didefinisikan dengan \\( a_0 = a_1 = 1 \\) dan untuk \\( n \\ge 2 \\), \\( \\sqrt{a_n a_{n-2}} - \\sqrt{a_{n-1} a_{n-2}} = 2a_{n-1} \\). Berapakah nilai dari \\( \\sqrt{\\frac{a_{2018}}{a_{2017}}} \\)?", 
        options: [
          "$2^{2018} - 2$", 
          "$2^{2018} - 1$", 
          "$2^{2018}$", 
          "$2^{2018} + 1$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 37, 
        text: "Barisan \\( \\{a_n\\} \\) didefinisikan dengan \\( a_1 = 9 \\) dan \\( 3a_{n+1} + a_n = 4 \\) untuk \\( n \\ge 1 \\). Misalkan \\( S_n \\) adalah jumlah \\( n \\) suku pertama barisan itu. Tentukan bilangan terkecil \\( n \\) sehingga \\( |S_n - n - 6| < \\frac{1}{2018} \\).", 
        options: [
          "$5$", 
          "$6$", 
          "$7$", 
          "$8$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 38, 
        text: "Barisan aritmatika \\( \\{a_n\\} \\) dengan \\( a_1 > 0 \\) dan \\( 20a_{18} = 201a_{218} \\). Misalkan \\( S_n \\) adalah jumlah \\( n \\) suku pertama barisan itu. Tentukan \\( n \\) sehingga \\( S_n \\) bernilai maksimum.", 
        options: [
          "$236$", 
          "$237$", 
          "$238$", 
          "$239$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 39, 
        text: "Barisan geometri \\( \\{a_n\\} \\) dengan \\( a_1 = 1536 \\) dan rasio konstan \\( r = -\\frac{1}{2} \\). Tentukan nilai \\( n \\) sehingga hasil kali dari \\( n \\) suku pertama menjadi maksimum.", 
        options: [
          "$11$", 
          "$12$", 
          "$13$", 
          "$14$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 40, 
        text: "Jumlah \\( n \\) suku pertama dari barisan \\( \\{a_k\\} \\) adalah \\( 2a_n - 1 \\) untuk \\( n \\ge 1 \\). Barisan \\( \\{b_k\\} \\) didefinisikan dengan \\( b_1 = 3 \\) dan \\( b_{k+1} = a_k + b_k \\). Maka tentukan jumlah 2018 suku pertama dari barisan \\( \\{b_k\\} \\).", 
        options: [
          "$2^{2017} - 4033$", 
          "$2^{2017} + 4033$", 
          "$2^{2018} + 4035$", 
          "$2^{2019} - 4037$"
        ], 
        correctAnswer: 2 
      },
      { 
        id: 41, 
        text: "Barisan \\( \\{x_n\\} \\) dengan \\( x_1 = a, x_2 = b \\) dan untuk \\( n \\ge 2 \\), \\( x_{n+1} = x_n - x_{n-1} \\). Misalkan \\( S_n \\) menyatakan jumlah \\( n \\) suku pertama barisan ini. Maka tentukan nilai dari \\( x_{2018} \\) dan \\( S_{2018} \\).", 
        options: [
          "$x_{2018} = b - a$ dan $S_{2018} = a$", 
          "$x_{2018} = b$ dan $S_{2018} = a + b$", 
          "$x_{2018} = a - b$ dan $S_{2018} = a$", 
          "$x_{2018} = -a$ dan $S_{2018} = -b$"
        ], 
        correctAnswer: 0 
      },
      { 
        id: 42, 
        text: "Misalkan \\( S_n \\) adalah jumlah \\( n \\) suku pertama dari barisan geometri. Jika \\( S_{10} = 10 \\) dan \\( S_{30} = 70 \\). Tentukan nilai dari \\( S_{40} \\).", 
        options: [
          "$110$", 
          "$120$", 
          "$130$", 
          "$140$"
        ], 
        correctAnswer: 3 
      },
      { 
        id: 43, 
        text: "Misalkan \\( \\{a_n\\} \\) adalah barisan geometri dengan \\( q \\ne 1 \\) dan \\( b_n = a_{3n-2} + a_{3n-1} + a_{3n} \\) untuk \\( n \\ge 1 \\). Maka barisan \\( b_n \\) tergolong dalam...", 
        options: [
          "Barisan aritmatika dengan beda $q^2$", 
          "Barisan geometri dengan rasio q", 
          "Barisan geometri dengan rasio $q^2$", 
          "Barisan geometri dengan rasio $q^3$"
        ], 
        correctAnswer: 0 
      },
      { 
        id: 44, 
        text: "Misalkan \\( p, q, a, b, \\) dan \\( c \\) adalah bilangan positif dengan \\( p \\ne q \\) sehingga \\( p, a, \\) dan \\( q \\) membentuk barisan geometri sedangkan \\( p, b, c, \\) dan \\( q \\) membentuk barisan aritmatika. Maka akar-akar dari \\( bx^2 - 2ax + c = 0 \\) akan berbentuk...", 
        options: [
          "Dua akar kompleks", 
          "Akar real kembar positif", 
          "Akar real kembar negatif", 
          "Akar real berbeda dengan tanda berbeda"
        ], 
        correctAnswer: 3 
      },
      { 
        id: 45, 
        text: "Misalkan \\( a \\) sebuah bilangan real. Jika \\( a + \\log_2 3 \\), \\( a + \\log_4 3 \\), dan \\( a + \\log_8 3 \\) membentuk barisan geometri, tentukan rasio barisan geometri tersebut.", 
        options: [
          "$\\frac{1}{2}$", 
          "$\\frac{1}{3}$", 
          "$\\frac{1}{4}$", 
          "$\\frac{1}{5}$"
        ], 
        correctAnswer: 0 
      },
      { 
        id: 46, 
        text: "Misalkan \\( (x, y) \\) adalah pasangan bilangan bulat positif yang memenuhi \\( x^4 + 4y^4 \\) merupakan bilangan prima. Tentukan banyaknya pasangan \\( (x, y) \\) yang memenuhi demikian.", 
        options: [
          "$1$", 
          "$2$", 
          "$3$", 
          "$4$"
        ], 
        correctAnswer: 0 
      },
      { 
        id: 47, 
        text: "Berapakah banyaknya bilangan prima \\( (p, q) \\) yang memenuhi \\( p^3 - q^5 = (p + q)^2 \\)?", 
        options: [
          "$0$", 
          "$1$", 
          "$2$", 
          "$3$"
        ], 
        correctAnswer: 0 
      },
      { 
        id: 48, 
        text: "Tentukan bilangan asli terkecil \\( m \\) sehingga \\( m^2 - m + 11 \\) merupakan perkalian setidaknya empat bilangan prima yang tidak harus saling relatif prima.", 
        options: [
          "$130$", 
          "$132$", 
          "$134$", 
          "$136$"
        ], 
        correctAnswer: 1 
      },
      { 
        id: 49, 
        text: "Terdapat sebuah bilangan prima \\( p \\) yang memenuhi \\( 16p + 1 \\) merupakan bilangan kubik positif. Tentukan nilai \\( p \\).", 
        options: [
          "$301$", 
          "$303$", 
          "$305$", 
          "$307$"
        ], 
        correctAnswer: 3 
      },
      { 
        id: 50, 
        text: "Misalkan \\( a, b, c, d \\) merupakan bilangan prima yang memenuhi \\( a > 3b > 6c > 12d \\) dan memenuhi \\( a^2 - b^2 + c^2 - d^2 = 1749 \\). Tentukan semua kemungkinan nilai dari \\( a^2 + b^2 + c^2 + d^2 \\).", 
        options: [
          "$1991$", 
          "$1993$", 
          "$1995$", 
          "$1997$"
        ], 
        correctAnswer: 3 
      }
    ]
  },
  // Untuk tryout yang 'Segera Hadir', Anda tidak perlu membuat datanya di sini.
};
