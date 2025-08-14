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
  "tryout-tka-matematika-1": {
    title: "Tryout Matematika TKA - Part 1",
    duration: 5400, // 25 menit * 60 detik
    questions: [
  {
    "id": 1,
    "text": "Bentuk sederhana dari \\(\\left(\\frac{5p^{-2}q^{2}}{25p^{3}q^{4}}\\right)^{-1}\\) adalah...",
    "options": [
      "\\(25 p^5 q^2\\)",
      "\\(5 p^5 q^2\\)",
      "\\(p^5 q^2\\)",
      "\\(\\frac{1}{5 p^5 q^2}\\)",
      "\\(\\frac{1}{25 p^5 q^2}\\)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 2,
    "text": "Diketahui \\(^{5}\\log{4}=m\\). Bentuk \\(^{25}\\log{20}\\) jika dinyatakan dalam m adalah...",
    "options": [
      "\\(m + 1\\)",
      "\\(m + 2\\)",
      "\\(\\frac{1}{2} m + 1\\)",
      "\\(\\frac{1}{2} m + \\frac{1}{2}\\)",
      "\\(\\frac{1}{2} m - \\frac{1}{2}\\)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 3,
    "text": "Daerah asal fungsi \\(f(x)=\\frac{\\sqrt{2x+6}}{3x+9}, x \\in \\mathbb{R}\\) adalah...",
    "options": [
      "\\(\\{x \\in \\mathbb{R} \\mid x \\geq -3, x \\neq 2\\}\\)",
      "\\(\\{x \\in \\mathbb{R} \\mid x \\geq -2, x \\neq 2\\}\\)",
      "\\(\\{x \\in \\mathbb{R} \\mid x \\geq -4, x \\neq -3\\}\\)",
      "\\(\\{x \\in \\mathbb{R} \\mid x \\geq -3\\}\\)",
      "\\(\\{x \\in \\mathbb{R} \\mid x > -3\\}\\)"
    ],
    "correctAnswer": 4
  },
  {
    "id": 4,
    "text": "Persamaan fungsi kuadrat grafik tersebut adalah...",
    "options": [
      "\\(y = x^2 - 8x + 15\\)",
      "\\(y = x^2 - 8x - 15\\)",
      "\\(y = x^2 + 8x + 15\\)",
      "\\(y = x^2 - 2x - 15\\)",
      "\\(y = x^2 - 2x + 15\\)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 5,
    "text": "Persamaan \\(2x^2+6x+p=0\\) mempunyai akar \\(x_1, x_2\\). Jika \\(x_1^2+x_2^2=8\\), nilai p adalah...",
    "options": [
      "2",
      "1",
      "0",
      "-1",
      "-2"
    ],
    "correctAnswer": 1
  },
  {
    "id": 6,
    "text": "Jika akar-akar persamaan \\(-x^2+7x-6=0\\) adalah p dan q, persamaan kuadrat baru yang akar-akarnya (p-2) dan (q-2) adalah...",
    "options": [
      "\\(x^2 + 9x - 4 = 0\\)",
      "\\(x^2 + 3x + 4 = 0\\)",
      "\\(x^2 - 3x - 4 = 0\\)",
      "\\(x^2 + 3x - 4 = 0\\)",
      "\\(-x^2 + 3x + 4 = 0\\)"
    ],
    "correctAnswer": 4
  },
  {
    "id": 7,
    "text": "Selembar karton berbentuk persegi panjang akan dibuat kotak tanpa tutup dengan cara membuang persegi seluas \\(3 \\times 3 \\text{ cm}^2\\) di masing-masing pojoknya. Panjang alas kotak 2 cm lebih dari lebarnya dan volume kotak tersebut adalah \\(105 \\text{ cm}^3\\). Jika panjang kotak dinyatakan x dan lebar dinyatakan y, maka persamaan panjang kotak tersebut adalah...",
    "options": [
      "\\(x^2 + 2x - 35 = 0\\)",
      "\\(x^2 - 2x - 35 = 0\\)",
      "\\(x^2 - 4x + 4 = 0\\)",
      "\\(x^2 + 4x + 4 = 0\\)",
      "\\(x^2 - 4x - 35 = 0\\)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 8,
    "text": "Penyelesaian sistem persamaan linear \\(\\frac{1}{x}-\\frac{1}{y}=5\\) dan \\(\\frac{3}{x}-\\frac{1}{y}=7\\) adalah (p, q). Nilai dari 2p - 4q adalah...",
    "options": [
      "2",
      "3",
      "4",
      "8",
      "18"
    ],
    "correctAnswer": 1
  },
  {
    "id": 9,
    "text": "Diketahui matriks A, B, C, D. Jika 2A + B^T = C · D, maka nilai a + b - c adalah...",
    "options": [
      "-8",
      "-6",
      "-4",
      "6",
      "8"
    ],
    "correctAnswer": 1
  },
  {
    "id": 10,
    "text": "Diketahui matriks A dan B. Invers dari matriks AB adalah...",
    "options": [
      "\\(\\begin{pmatrix} -34 & 13 \\\\ 21 & -8 \\end{pmatrix}\\)",
      "\\(\\begin{pmatrix} -34 & 13 \\\\ 21 & -8 \\end{pmatrix}\\)",
      "\\(\\begin{pmatrix} -34 & -13 \\\\ -21 & -8 \\end{pmatrix}\\)",
      "\\(\\begin{pmatrix} 8 & 13 \\\\ 21 & 34 \\end{pmatrix}\\)",
      "\\(\\begin{pmatrix} 34 & 21 \\\\ 13 & 8 \\end{pmatrix}\\)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 11,
    "text": "\\(\\lim_{x \\to 3} \\frac{x^2 - x - 6}{x^2 - x - 20} = \\ldots\\)",
    "options": [
      "-2",
      "-1",
      "0",
      "1",
      "\\(\\infty\\)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 12,
    "text": "Grafik fungsi \\(y=\\frac{1}{3}x^{3}-x^{2}-3x+5\\) naik pada interval...",
    "options": [
      "\\(-1 < x < 3\\)",
      "\\(-3 < x < 1\\)",
      "\\(-2 < x < 3\\)",
      "\\(x < -1 \\text{ atau } x > 3\\)",
      "\\(x < -3 \\text{ atau } x > 2\\)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 13,
    "text": "Nilai dari \\(\\int_{1}^{2}(6x^{2}+8x)dx\\) adalah...",
    "options": [
      "24",
      "26",
      "28",
      "30",
      "32"
    ],
    "correctAnswer": 1
  },
  {
    "id": 14,
    "text": "Diketahui segitiga ABC siku-siku di B dan \\(\\sin A = \\frac{12}{13}\\). Nilai \\(\\sin C\\) adalah...",
    "options": [
      "\\(\\frac{5}{12}\\)",
      "\\(\\frac{5}{13}\\)",
      "\\(\\frac{8}{12}\\)",
      "\\(\\frac{7}{13}\\)",
      "\\(\\frac{12}{13}\\)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 15,
    "text": "Sebuah tangga dengan panjang 3 meter bersandar pada sebuah pohon. Jika tangga itu membentuk sudut \\(60^{\\circ}\\) dengan tanah, jarak kaki tangga pada tanah hingga pohon tersebut adalah...",
    "options": [
      "\\(3\\sqrt{3}\\) meter",
      "\\(3\\sqrt{2}\\) meter",
      "3 meter",
      "2 meter",
      "1,5 meter"
    ],
    "correctAnswer": 4
  },
  {
    "id": 16,
    "text": "Diketahui kubus ABCD.EFGH dengan panjang rusuk 12 cm. Sudut antara ruas garis DF dan bidang CDHG adalah \\(\\alpha\\). Nilai \\(\\sin \\alpha\\) adalah...",
    "options": [
      "\\(\\frac{1}{3}\\sqrt{3}\\)",
      "\\(\\frac{1}{2\\sqrt{2}}\\)",
      "\\(\\frac{1}{3\\sqrt{2}}\\)",
      "\\(\\frac{1}{5\\sqrt{2}}\\)",
      "\\(\\frac{1}{6\\sqrt{2}}\\)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 17,
    "text": "Simpangan rata-rata dari data 6, 5, 7, 5, 6, 8, 7, 6, 6, 7, 4, 5 adalah...",
    "options": [
      "\\(\\frac{7}{3}\\)",
      "\\(\\frac{5}{3}\\)",
      "\\(\\frac{7}{5}\\)",
      "\\(\\frac{5}{6}\\)",
      "\\(\\frac{3}{5}\\)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 18,
    "text": "Ada sepuluh orang dalam suatu ruangan, yang belum saling mengenal. Jika mereka ingin saling berkenalan dengan berjabat tangan sekali dengan setiap orang, maka jabatan tangan yang akan terjadi sebanyak...",
    "options": [
      "90 kali",
      "80 kali",
      "60 kali",
      "45 kali",
      "40 kali"
    ],
    "correctAnswer": 3
  },
  {
    "id": 19,
    "text": "Sebuah dadu merah dan sebuah dadu putih dilambungkan secara bersamaan sebanyak satu kali. Peluang muncul mata dadu yang berjumlah 2 atau 4 adalah...",
    "options": [
      "\\(\\frac{1}{9}\\)",
      "\\(\\frac{1}{4}\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(\\frac{3}{5}\\)",
      "\\(\\frac{15}{16}\\)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 20,
    "text": "Tiga keping uang logam setimbang dilempar udin secara bersamaan sebanyak 40 kali. Frekuensi harapan kejadian muncul paling sedikit 2 angka adalah...",
    "options": [
      "20",
      "15",
      "10",
      "8",
      "4"
    ],
    "correctAnswer": 0
  }
    ]
  },
  "tryout-tka-matematika-2": {
    title: "Tryout Matematika TKA - Part 2",
    duration: 5400, // 25 menit * 60 detik
    questions: [
  {
    "id": 1,
    "text": "Seorang pedagang membeli 5 kg jeruk dengan harga Rp75.000,00. Jika ia ingin mendapatkan keuntungan sebesar 20%, maka harga jual jeruk per kg adalah...",
    "options": [
      "Rp15.000,00",
      "Rp18.000,00",
      "Rp16.000,00",
      "Rp20.000,00"
    ],
    "correctAnswer": 1
  },
  {
    "id": 2,
    "text": "Jika \\(x\\) dan \\(y\\) adalah bilangan bulat positif yang memenuhi persamaan \\(2x + 3y = 13\\), maka nilai maksimum dari \\(x + y\\) adalah...",
    "options": [
      "4",
      "5",
      "6",
      "3"
    ],
    "correctAnswer": 1
  },
  {
    "id": 3,
    "text": "Penyelesaian dari pertidaksamaan \\(|x - 3| < 2\\) adalah...",
    "options": [
      "\\(x < 5\\)",
      "\\(x > 1\\)",
      "\\(1 < x < 5\\)",
      "\\(x < 1\\) atau \\(x > 5\\)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 4,
    "text": "Jika fungsi \\(f(x) = 3x - 5\\), maka nilai dari \\(f(f(2))\\) adalah...",
    "options": [
      "-2",
      "1",
      "-3",
      "-2"
    ],
    "correctAnswer": 3
  },
  {
    "id": 5,
    "text": "Titik puncak dari grafik fungsi kuadrat \\(y = x^2 - 4x + 7\\) adalah...",
    "options": [
      "(2, 3)",
      "(-2, 19)",
      "(4, 7)",
      "(2, 7)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 6,
    "text": "Jika \\(g(x) = x + 1\\) dan \\((f \\circ g)(x) = x^2 + 3x + 2\\), maka \\(f(x) = \\dots\\)",
    "options": [
      "\\(x^2 + x\\)",
      "\\(x^2 + 5x + 6\\)",
      "\\(x^2 + 3x + 1\\)",
      "\\(x^2 + 2x + 1\\)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 7,
    "text": "Suku ke-10 dari barisan aritmetika 3, 7, 11, 15, \\dots adalah...",
    "options": [
      "39",
      "43",
      "35",
      "40"
    ],
    "correctAnswer": 0
  },
  {
    "id": 8,
    "text": "Jumlah tak hingga dari deret geometri \\(16 + 8 + 4 + 2 + \\dots\\) adalah...",
    "options": [
      "32",
      "64",
      "30",
      "16"
    ],
    "correctAnswer": 0
  },
  {
    "id": 9,
    "text": "Jika diketahui matriks \\(A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}\\) dan \\(B = \\begin{pmatrix} 5 & 1 \\\\ 0 & 2 \\end{pmatrix}\\), maka matriks \\(A + 2B\\) adalah...",
    "options": [
      "\\(\\begin{pmatrix} 7 & 2 \\\\ 3 & 6 \\end{pmatrix}\\)",
      "\\(\\begin{pmatrix} 12 & 3 \\\\ 3 & 8 \\end{pmatrix}\\)",
      "\\(\\begin{pmatrix} 10 & 2 \\\\ 0 & 4 \\end{pmatrix}\\)",
      "\\(\\begin{pmatrix} 12 & 3 \\\\ 6 & 8 \\end{pmatrix}\\)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 10,
    "text": "Determinan dari matriks \\(C = \\begin{pmatrix} 5 & 2 \\\\ -3 & 1 \\end{pmatrix}\\) adalah...",
    "options": [
      "-1",
      "1",
      "11",
      "5"
    ],
    "correctAnswer": 2
  },
  {
    "id": 11,
    "text": "Rata-rata nilai ulangan matematika dari 5 siswa adalah 80. Jika digabungkan dengan nilai seorang siswa baru yang mendapat nilai 92, maka rata-rata nilai mereka sekarang adalah...",
    "options": [
      "82",
      "85",
      "80",
      "86"
    ],
    "correctAnswer": 0
  },
  {
    "id": 12,
    "text": "Dari angka 1, 2, 3, 4, dan 5 akan disusun sebuah bilangan yang terdiri dari tiga angka berbeda. Banyaknya bilangan yang dapat disusun adalah...",
    "options": [
      "125",
      "60",
      "12",
      "20"
    ],
    "correctAnswer": 1
  },
  {
    "id": 13,
    "text": "Sebuah dadu dilempar sekali. Peluang muncul mata dadu bilangan prima adalah...",
    "options": [
      "\\(\\frac{1}{6}\\)",
      "\\(\\frac{1}{3}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{2}{3}\\)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 14,
    "text": "Nilai dari \\(\\lim_{x \\to 2} (x^2 + 3x - 5)\\) adalah...",
    "options": [
      "5",
      "0",
      "15",
      "Tidak terdefinisi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 15,
    "text": "Turunan pertama dari fungsi \\(f(x) = 4x^3 - 2x^2 + 5x - 1\\) adalah...",
    "options": [
      "\\(12x^2 - 4x + 5\\)",
      "\\(4x^2 - 2x + 5\\)",
      "\\(12x^3 - 4x^2 + 5\\)",
      "\\(3x^2 - 2x + 5\\)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 16,
    "text": "Nilai dari \\(\\int (3x^2 + 4x) dx\\) adalah...",
    "options": [
      "\\(6x + 4 + C\\)",
      "\\(x^3 + 2x^2 + C\\)",
      "\\(3x^3 + 4x^2 + C\\)",
      "\\(x^3 + 4x^2 + C\\)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 17,
    "text": "Sebuah tangga sepanjang 10 meter disandarkan pada dinding. Jika jarak ujung bawah tangga ke dinding adalah 6 meter, maka tinggi dinding yang dicapai oleh ujung atas tangga adalah...",
    "options": [
      "8 meter",
      "4 meter",
      "16 meter",
      "\\(\\sqrt{136}\\) meter"
    ],
    "correctAnswer": 0
  },
  {
    "id": 18,
    "text": "Nilai dari \\(\\sin(30^\\circ) + \\cos(60^\\circ)\\) adalah...",
    "options": [
      "\\(\\frac{1}{2}\\)",
      "1",
      "\\(\\sqrt{3}\\)",
      "0"
    ],
    "correctAnswer": 1
  },
  {
    "id": 19,
    "text": "Jika diketahui \\(\\tan(A) = \\frac{3}{4}\\) dan A adalah sudut lancip, maka nilai \\(\\cos(A)\\) adalah...",
    "options": [
      "\\(\\frac{3}{5}\\)",
      "\\(\\frac{4}{3}\\)",
      "\\(\\frac{5}{4}\\)",
      "\\(\\frac{4}{5}\\)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 20,
    "text": "Luas sebuah lingkaran adalah \\(49\\pi\\) cm\\(^2\\). Keliling lingkaran tersebut adalah...",
    "options": [
      "\\(7\\pi\\) cm",
      "\\(14\\pi\\) cm",
      "49 cm",
      "\\(24.5\\pi\\) cm"
    ],
    "correctAnswer": 1
  }
    ]
  },
  // Untuk tryout yang 'Segera Hadir', Anda tidak perlu membuat datanya di sini.
};
