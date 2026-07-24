import { Article, TrendingKeyword, SearchResult, SearchFilters, Citation, User, UserBookmark, UserHistory, DashboardStats } from '@/types';

const indonesianArticles: Article[] = [
  {
    id: 'article-id-1',
    title: 'Pengembangan Sistem Informasi Akademik Berbasis Web Menggunakan Framework Laravel',
    authors: [
      { name: 'Dr. Ahmad Fauzi', affiliation: 'Universitas Indonesia' },
      { name: 'Rina Wijayanti, M.Kom', affiliation: 'Universitas Gadjah Mada' },
    ],
    year: 2025,
    publisher: 'Universitas Indonesia',
    journal: 'Jurnal Ilmu Komputer dan Informasi',
    volume: 'Vol. 18',
    issue: 'No. 2',
    pages: '145-158',
    doi: '10.21609/jiki.v18i2.1234',
    citationCount: 45,
    abstract: 'Penelitian ini bertujuan untuk mengembangkan sistem informasi akademik terintegrasi berbasis web yang dapat memudahkan pengelolaan data akademik di perguruan tinggi. Metode pengembangan yang digunakan adalah SDLC dengan pendekatan waterfall. Hasil pengujian menunjukkan bahwa sistem yang dikembangkan mampu meningkatkan efisiensi pengelolaan data akademik hingga 60%. Sistem ini telah diimplementasikan di tiga universitas dan mendapatkan respon positif dari pengguna.',
    keywords: ['sistem informasi', 'akademik', 'web', 'laravel', 'perguruan tinggi'],
    openAccess: true,
    pdfUrl: 'https://jiki.ui.ac.id/article/view/1234',
    language: 'id',
    quartile: 'q2',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ',
    createdAt: new Date(2025, 5, 15).toISOString(),
  },
  {
    id: 'article-id-2',
    title: 'Analisis Sentimen Ulasan Aplikasi Mobile Menggunakan Metode Support Vector Machine',
    authors: [
      { name: 'Prof. Budi Santoso', affiliation: 'Institut Teknologi Bandung' },
      { name: 'Dewi Lestari, S.T., M.T.', affiliation: 'Institut Teknologi Bandung' },
      { name: 'Dr. Agus Haryanto', affiliation: 'Universitas Diponegoro' },
    ],
    year: 2025,
    publisher: 'ITB Journal Publisher',
    journal: 'Jurnal Teknologi Informasi dan Ilmu Komputer',
    volume: 'Vol. 12',
    issue: 'No. 3',
    pages: '289-302',
    doi: '10.25126/jtiik.2025123456',
    citationCount: 78,
    abstract: 'Penelitian ini melakukan analisis sentimen terhadap ulasan pengguna aplikasi mobile di Indonesia menggunakan algoritma Support Vector Machine (SVM). Dataset yang digunakan terdiri dari 10.000 ulasan dari Google Play Store. Hasil penelitian menunjukkan bahwa SVM dengan kernel RBF mencapai akurasi 87.5% dalam mengklasifikasikan sentimen positif, negatif, dan netral. Penelitian ini memberikan kontribusi dalam pengembangan sistem monitoring reputasi aplikasi secara otomatis.',
    keywords: ['analisis sentimen', 'support vector machine', 'ulasan aplikasi', 'text mining', 'klasifikasi'],
    openAccess: true,
    pdfUrl: 'https://jtiik.itb.ac.id/article/view/3456',
    language: 'id',
    quartile: 'q2',
    type: 'journal',
    subject: 'computer-science',
    source: 'Garuda/Ristekdikti',
    createdAt: new Date(2025, 3, 10).toISOString(),
  },
  {
    id: 'article-id-3',
    title: 'Efektivitas Pembelajaran Daring Terhadap Hasil Belajar Mahasiswa di Masa Pandemi COVID-19',
    authors: [
      { name: 'Dr. Sri Wahyuni', affiliation: 'Universitas Negeri Malang' },
      { name: 'Prof. Hadi Suwono', affiliation: 'Universitas Negeri Malang' },
    ],
    year: 2024,
    publisher: 'Universitas Negeri Malang',
    journal: 'Jurnal Pendidikan dan Kebudayaan',
    volume: 'Vol. 9',
    issue: 'No. 1',
    pages: '55-72',
    doi: '10.17977/jpk.v9i1.7890',
    citationCount: 234,
    abstract: 'Penelitian ini bertujuan untuk mengukur efektivitas pembelajaran daring terhadap hasil belajar mahasiswa selama pandemi COVID-19. Metode penelitian yang digunakan adalah mixed method dengan melibatkan 500 mahasiswa dari 10 perguruan tinggi di Indonesia. Hasil penelitian menunjukkan bahwa pembelajaran daring memiliki efektivitas yang signifikan pada aspek kognitif, namun terdapat tantangan pada aspek afektif dan psikomotorik. Faktor kesiapan infrastruktur dan literasi digital menjadi penentu utama keberhasilan pembelajaran daring.',
    keywords: ['pembelajaran daring', 'COVID-19', 'hasil belajar', 'pendidikan tinggi', 'efektivitas'],
    openAccess: true,
    pdfUrl: 'https://jpk.kemdikbud.go.id/article/view/7890',
    language: 'id',
    quartile: 'q1',
    type: 'journal',
    subject: 'education',
    source: 'DOAJ',
    createdAt: new Date(2024, 8, 20).toISOString(),
  },
  {
    id: 'article-id-4',
    title: 'Implementasi Blockchain untuk Keamanan Data Rekam Medis di Rumah Sakit Indonesia',
    authors: [
      { name: 'Dr. Muhammad Aldi', affiliation: 'Universitas Diponegoro' },
      { name: 'Dr. Rina Astuti', affiliation: 'Universitas Hasanuddin' },
      { name: 'M. Fajar Prakoso, S.Kom', affiliation: 'Universitas Diponegoro' },
    ],
    year: 2025,
    publisher: 'Universitas Diponegoro',
    journal: 'Jurnal Teknologi dan Sistem Komputer',
    volume: 'Vol. 13',
    issue: 'No. 2',
    pages: '98-112',
    doi: '10.14710/jtsiskom.13.2.98-112',
    citationCount: 56,
    abstract: 'Penelitian ini mengimplementasikan teknologi blockchain untuk mengamankan data rekam medis elektronik di rumah sakit Indonesia. Sistem yang dikembangkan menggunakan platform Hyperledger Fabric dengan mekanisme konsensus PBFT. Hasil pengujian menunjukkan bahwa sistem mampu menjamin integritas, kerahasiaan, dan ketersediaan data rekam medis. Waktu respons transaksi rata-rata adalah 2.3 detik dengan throughput 150 transaksi per detik.',
    keywords: ['blockchain', 'rekam medis', 'keamanan data', 'hyperledger', 'rumah sakit'],
    openAccess: true,
    pdfUrl: 'https://jtsiskom.undip.ac.id/article/view/5678',
    language: 'id',
    quartile: 'q2',
    type: 'journal',
    subject: 'medicine',
    source: 'Garuda/Ristekdikti',
    createdAt: new Date(2025, 1, 5).toISOString(),
  },
  {
    id: 'article-id-5',
    title: 'Pengaruh Literasi Keuangan dan Inklusi Keuangan Terhadap Kinerja UMKM di Indonesia',
    authors: [
      { name: 'Prof. Siti Nurjanah', affiliation: 'Universitas Gadjah Mada' },
      { name: 'Dr. Eko Prasetyo', affiliation: 'Universitas Gadjah Mada' },
    ],
    year: 2024,
    publisher: 'Universitas Gadjah Mada',
    journal: 'Jurnal Ekonomi dan Bisnis',
    volume: 'Vol. 27',
    issue: 'No. 3',
    pages: '412-430',
    doi: '10.22146/jeb.27.3.412-430',
    citationCount: 189,
    abstract: 'Penelitian ini menganalisis pengaruh literasi keuangan dan inklusi keuangan terhadap kinerja Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia. Data dikumpulkan dari 1.200 responden UMKM di 15 provinsi. Hasil analisis regresi menunjukkan bahwa literasi keuangan dan inklusi keuangan berpengaruh positif dan signifikan terhadap kinerja UMKM. Temuan ini memberikan implikasi kebijakan bagi pemerintah dalam mengembangkan program literasi dan inklusi keuangan yang lebih efektif.',
    keywords: ['literasi keuangan', 'inklusi keuangan', 'UMKM', 'kinerja usaha', 'ekonomi Indonesia'],
    openAccess: false,
    language: 'id',
    quartile: 'q1',
    type: 'journal',
    subject: 'economics',
    source: 'OpenAlex',
    createdAt: new Date(2024, 6, 12).toISOString(),
  },
  {
    id: 'article-id-6',
    title: 'Perlindungan Hukum Terhadap Konsumen dalam Transaksi E-Commerce di Indonesia',
    authors: [
      { name: 'Dr. Hendra Wijaya', affiliation: 'Universitas Indonesia' },
      { name: 'Maria Ulfah, S.H., M.H.', affiliation: 'Universitas Padjajaran' },
    ],
    year: 2025,
    publisher: 'Fakultas Hukum Universitas Indonesia',
    journal: 'Jurnal Hukum dan Pembangunan',
    volume: 'Vol. 55',
    issue: 'No. 1',
    pages: '78-95',
    doi: '10.21143/jhp.55.1.78-95',
    citationCount: 34,
    abstract: 'Penelitian ini mengkaji efektivitas perlindungan hukum terhadap konsumen dalam transaksi e-commerce di Indonesia berdasarkan Undang-Undang No. 8 Tahun 1999 tentang Perlindungan Konsumen dan Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik. Metode penelitian yang digunakan adalah yuridis normatif dengan pendekatan perundang-undangan. Hasil penelitian menunjukkan bahwa masih terdapat celah hukum dalam perlindungan konsumen e-commerce, terutama terkait penyelesaian sengketa lintas yurisdiksi.',
    keywords: ['perlindungan konsumen', 'e-commerce', 'hukum', 'transaksi elektronik', 'Indonesia'],
    openAccess: true,
    pdfUrl: 'https://jhp.ui.ac.id/article/view/9012',
    language: 'id',
    quartile: 'q2',
    type: 'journal',
    subject: 'law',
    source: 'DOAJ',
    createdAt: new Date(2025, 2, 18).toISOString(),
  },
  {
    id: 'article-id-7',
    title: 'Pengembangan Media Pembelajaran Augmented Reality untuk Meningkatkan Pemahaman Konsep Fisika',
    authors: [
      { name: 'Dr. Nurul Hidayah', affiliation: 'Universitas Pendidikan Indonesia' },
      { name: 'Prof. Ahmad Syarif', affiliation: 'Universitas Pendidikan Indonesia' },
      { name: 'Dian Permana, S.Pd., M.Pd.', affiliation: 'Universitas Negeri Semarang' },
    ],
    year: 2025,
    publisher: 'Universitas Pendidikan Indonesia',
    journal: 'Jurnal Pendidikan IPA Indonesia',
    volume: 'Vol. 14',
    issue: 'No. 1',
    pages: '67-82',
    doi: '10.15294/jpii.v14i1.34567',
    citationCount: 92,
    abstract: 'Penelitian pengembangan ini bertujuan untuk menghasilkan media pembelajaran berbasis Augmented Reality (AR) pada materi fisika untuk siswa SMA. Model pengembangan yang digunakan adalah ADDIE. Hasil uji kelayakan oleh ahli media dan ahli materi menunjukkan kategori sangat layak. Uji coba lapangan menunjukkan bahwa penggunaan media AR secara signifikan meningkatkan pemahaman konsep fisika siswa dengan N-gain score 0.72 (kategori tinggi).',
    keywords: ['augmented reality', 'media pembelajaran', 'fisika', 'ADDIE', 'pemahaman konsep'],
    openAccess: true,
    pdfUrl: 'https://jpii.unnes.ac.id/article/view/34567',
    language: 'id',
    quartile: 'q1',
    type: 'journal',
    subject: 'education',
    source: 'DOAJ',
    createdAt: new Date(2025, 4, 8).toISOString(),
  },
  {
    id: 'article-id-8',
    title: 'Optimasi Jaringan Distribusi Air Bersih Menggunakan Algoritma Genetika di Kota Semarang',
    authors: [
      { name: 'Dr. Ir. Bambang Trigunarsa', affiliation: 'Universitas Diponegoro' },
      { name: 'Ir. Ratna Damayanti, M.T.', affiliation: 'Institut Teknologi Sepuluh Nopember' },
    ],
    year: 2024,
    publisher: 'ITS Press',
    journal: 'Jurnal Teknik Sipil dan Lingkungan',
    volume: 'Vol. 9',
    issue: 'No. 2',
    pages: '123-140',
    doi: '10.12962/jtsl.v9i2.56789',
    citationCount: 28,
    abstract: 'Penelitian ini mengoptimalkan jaringan distribusi air bersih di Kota Semarang menggunakan algoritma genetika. Model optimasi mempertimbangkan faktor tekanan, kecepatan aliran, dan biaya operasional. Hasil simulasi menunjukkan bahwa algoritma genetika mampu menurunkan biaya operasional hingga 25% dibandingkan metode konvensional, dengan tetap mempertahankan kualitas pelayanan yang optimal.',
    keywords: ['optimasi', 'jaringan distribusi air', 'algoritma genetika', 'Kota Semarang', 'infrastruktur'],
    openAccess: true,
    pdfUrl: 'https://jtsl.its.ac.id/article/view/56789',
    language: 'id',
    quartile: 'q3',
    type: 'journal',
    subject: 'engineering',
    source: 'Garuda/Ristekdikti',
    createdAt: new Date(2024, 10, 25).toISOString(),
  },
  {
    id: 'article-id-9',
    title: 'Deteksi Dini Penyakit Diabetes Melitus Menggunakan Machine Learning dengan Fitur Rekam Medis',
    authors: [
      { name: 'dr. Andi Pratama, Sp.PD', affiliation: 'Universitas Airlangga' },
      { name: 'Dr. Retno Wulandari', affiliation: 'Universitas Brawijaya' },
    ],
    year: 2025,
    publisher: 'Universitas Airlangga',
    journal: 'Jurnal Kedokteran dan Kesehatan Indonesia',
    volume: 'Vol. 16',
    issue: 'No. 1',
    pages: '45-58',
    doi: '10.20885/jkki.16.1.45-58',
    citationCount: 112,
    abstract: 'Penelitian ini mengembangkan model deteksi dini diabetes melitus menggunakan algoritma machine learning dengan fitur dari rekam medis pasien. Dataset yang digunakan berasal dari 5.000 rekam medis pasien di tiga rumah sakit di Jawa Timur. Model Random Forest mencapai performa terbaik dengan akurasi 92.3%, sensitivitas 89.7%, dan spesifisitas 94.1%. Sistem ini dapat membantu tenaga kesehatan dalam melakukan skrining diabetes secara lebih efisien.',
    keywords: ['diabetes melitus', 'machine learning', 'deteksi dini', 'rekam medis', 'random forest'],
    openAccess: true,
    pdfUrl: 'https://jkki.unair.ac.id/article/view/11111',
    language: 'id',
    quartile: 'q1',
    type: 'journal',
    subject: 'medicine',
    source: 'PubMed',
    createdAt: new Date(2025, 0, 14).toISOString(),
  },
  {
    id: 'article-id-10',
    title: 'Strategi Pengembangan Pariwisata Berkelanjutan di Destinasi Super Prioritas Danau Toba',
    authors: [
      { name: 'Prof. I Ketut Sudiana', affiliation: 'Universitas Udayana' },
      { name: 'Dr. Ni Made Ayu Sulasmini', affiliation: 'Universitas Udayana' },
      { name: 'Dr. Hendra Gunawan', affiliation: 'Universitas Sumatera Utara' },
    ],
    year: 2024,
    publisher: 'Universitas Udayana',
    journal: 'Jurnal Kepariwisataan Indonesia',
    volume: 'Vol. 18',
    issue: 'No. 2',
    pages: '201-218',
    doi: '10.47608/jki.v18i2.2024.201-218',
    citationCount: 67,
    abstract: 'Penelitian ini menganalisis strategi pengembangan pariwisata berkelanjutan di Destinasi Super Prioritas Danau Toba. Menggunakan pendekatan kualitatif dengan metode studi kasus, penelitian melibatkan 50 informan dari pemangku kepentingan. Hasil penelitian mengidentifikasi empat pilar utama: konservasi lingkungan, pemberdayaan masyarakat lokal, pengembangan infrastruktur ramah lingkungan, dan penguatan kelembagaan. Rekomendasi strategi diusulkan untuk mencapai keseimbangan antara pertumbuhan ekonomi dan kelestarian lingkungan.',
    keywords: ['pariwisata berkelanjutan', 'Danau Toba', 'destinasi super prioritas', 'konservasi', 'pemberdayaan masyarakat'],
    openAccess: false,
    language: 'id',
    quartile: 'q2',
    type: 'journal',
    subject: 'environmental-science',
    source: 'OpenAlex',
    createdAt: new Date(2024, 7, 30).toISOString(),
  },
  {
    id: 'article-id-11',
    title: 'Penerapan Metode Certainty Factor dalam Sistem Pakar Diagnosis Penyakit Tanaman Padi',
    authors: [
      { name: 'Dr. Ir. Slamet Riyadi', affiliation: 'Universitas Brawijaya' },
      { name: 'Fitri Handayani, S.Kom., M.Kom.', affiliation: 'Universitas Brawijaya' },
    ],
    year: 2025,
    publisher: 'UB Press',
    journal: 'Jurnal Ilmu Komputer dan Teknologi Informasi',
    volume: 'Vol. 7',
    issue: 'No. 1',
    pages: '33-48',
    doi: '10.21776/jikti.7.1.33-48',
    citationCount: 41,
    abstract: 'Penelitian ini mengembangkan sistem pakar untuk mendiagnosis penyakit tanaman padi menggunakan metode Certainty Factor. Sistem mampu mendiagnosis 15 jenis penyakit padi berdasarkan gejala yang diamati. Basis pengetahuan diperoleh dari wawancara dengan pakar pertanian. Hasil pengujian menunjukkan akurasi diagnosis mencapai 85.6%, sehingga sistem ini dapat membantu petani dalam mengidentifikasi penyakit tanaman padi secara dini.',
    keywords: ['sistem pakar', 'certainty factor', 'penyakit padi', 'diagnosis', 'pertanian'],
    openAccess: true,
    pdfUrl: 'https://jikti.ub.ac.id/article/view/22222',
    language: 'id',
    quartile: 'q3',
    type: 'journal',
    subject: 'computer-science',
    source: 'Garuda/Ristekdikti',
    createdAt: new Date(2025, 6, 1).toISOString(),
  },
  {
    id: 'article-id-12',
    title: 'Analisis Kebijakan Merdeka Belajar Kampus Merdeka (MBKM) Terhadap Kualitas Lulusan Perguruan Tinggi',
    authors: [
      { name: 'Prof. Dr. Arief Rachman', affiliation: 'Universitas Negeri Jakarta' },
      { name: 'Dr. Nia Kurniasih', affiliation: 'Universitas Pendidikan Indonesia' },
      { name: 'Rizky Amalia, M.Pd.', affiliation: 'Universitas Negeri Semarang' },
    ],
    year: 2025,
    publisher: 'Kemdikbudristek',
    journal: 'Jurnal Pendidikan dan Kebudayaan',
    volume: 'Vol. 10',
    issue: 'No. 1',
    pages: '15-32',
    doi: '10.17977/jpk.v10i1.90123',
    citationCount: 156,
    abstract: 'Penelitian ini menganalisis dampak kebijakan Merdeka Belajar Kampus Merdeka (MBKM) terhadap kualitas lulusan perguruan tinggi di Indonesia. Menggunakan metode survei terhadap 2.000 mahasiswa dan 500 dosen dari 50 perguruan tinggi. Hasil penelitian menunjukkan bahwa program MBKM meningkatkan kompetensi lulusan dalam hal pengalaman praktis, soft skills, dan kesiapan kerja. Namun, tantangan dalam implementasi masih ditemukan pada aspek konversi SKS dan kualitas bimbingan.',
    keywords: ['MBKM', 'merdeka belajar', 'kualitas lulusan', 'pendidikan tinggi', 'kebijakan pendidikan'],
    openAccess: true,
    pdfUrl: 'https://jpk.kemdikbud.go.id/article/view/90123',
    language: 'id',
    quartile: 'q1',
    type: 'journal',
    subject: 'education',
    source: 'DOAJ',
    createdAt: new Date(2025, 5, 20).toISOString(),
  },
];

const internationalArticles: Article[] = Array.from({ length: 40 }, (_, i) => ({
  id: `article-${i + 1}`,
  title: [
    'Deep Learning Applications in Natural Language Processing: A Comprehensive Survey',
    'Machine Learning Approaches for Climate Change Prediction and Modeling',
    'Blockchain Technology for Secure Healthcare Data Management: A Systematic Review',
    'Advances in Reinforcement Learning: From Games to Real-World Applications',
    'Quantum Computing: Current State and Future Directions in Quantum Algorithms',
    'Artificial Intelligence in Education: Personalized Learning Paths and Adaptive Assessment',
    'Internet of Things (IoT) Security Challenges and Solutions: A Systematic Literature Review',
    'CRISPR-Cas9 Gene Editing: Ethical Considerations and Regulatory Frameworks',
    'Sustainable Energy Systems: A Review of Renewable Energy Integration Technologies',
    'Big Data Analytics in Smart Cities: Applications, Challenges, and Research Opportunities',
  ][i % 10],
  authors: [
    { name: 'Dr. Sarah Mitchell', affiliation: 'Stanford University' },
    { name: 'Prof. James Anderson', affiliation: 'MIT' },
    { name: 'Dr. Maria Rodriguez', affiliation: 'University of Cambridge' },
    { name: 'Prof. Chen Wei', affiliation: 'Tsinghua University' },
  ].slice(0, (i % 4) + 1),
  year: 2026 - (i % 5),
  publisher: ['IEEE', 'Springer Nature', 'Elsevier', 'ACM', 'Oxford University Press'][i % 5],
  journal: [
    'Nature Communications',
    'IEEE Transactions on Pattern Analysis',
    'Journal of Artificial Intelligence Research',
    'Proceedings of the National Academy of Sciences',
    'The Lancet Digital Health',
  ][i % 5],
  volume: `Vol. ${i + 10}`,
  issue: `No. ${(i % 12) + 1}`,
  pages: `${i * 10 + 100}-${i * 10 + 120}`,
  doi: `10.1234/imamsyafiihub.2026.${i + 1}`,
  citationCount: Math.floor(Math.random() * 500),
  abstract: `This paper presents a comprehensive review and analysis of recent advances in the field. We examine the current state of research, identify key challenges, and propose future directions for investigation. Our systematic analysis covers ${Math.floor(Math.random() * 100 + 50)} studies published between ${2020 + (i % 3)} and ${2026 - (i % 2)}. The findings suggest significant progress has been made, though several critical gaps remain in the literature. This review provides valuable insights for researchers and practitioners working in this rapidly evolving domain.`,
  keywords: [
    ['deep learning', 'NLP', 'machine learning', 'survey'],
    ['climate change', 'machine learning', 'prediction', 'environmental science'],
    ['blockchain', 'healthcare', 'security', 'systematic review'],
    ['reinforcement learning', 'AI', 'real-world applications'],
    ['quantum computing', 'algorithms', 'quantum algorithms'],
    ['AI in education', 'personalized learning', 'adaptive assessment'],
    ['IoT security', 'cybersecurity', 'literature review'],
    ['CRISPR', 'gene editing', 'ethics', 'regulation'],
    ['sustainable energy', 'renewable energy', 'smart grid'],
    ['big data', 'smart cities', 'data analytics'],
  ][i % 10],
  openAccess: i % 3 === 0,
  pdfUrl: i % 2 === 0 ? `https://example.com/papers/paper-${i + 1}.pdf` : undefined,
  language: ['en', 'en', 'en', 'en', 'en', 'id', 'en', 'en', 'en', 'en'][i % 10],
  quartile: ['q1', 'q1', 'q2', 'q1', 'q2', 'q3', 'q1', 'q2', 'q1', 'q3'][i % 10],
  type: (['journal', 'conference', 'thesis', 'journal', 'article', 'book', 'conference', 'dissertation', 'journal', 'article'] as const)[i % 10],
  subject: ['computer-science', 'environmental-science', 'medicine', 'computer-science', 'physics', 'education', 'engineering', 'biology', 'engineering', 'computer-science'][i % 10],
  source: ['Crossref', 'OpenAlex', 'Semantic Scholar', 'CORE', 'PubMed'][i % 5],
  createdAt: new Date(2026, 0, i + 1).toISOString(),
}));

const mockArticles: Article[] = [...indonesianArticles, ...internationalArticles];

const mockTrendingKeywords: TrendingKeyword[] = [
  { keyword: 'Artificial Intelligence', count: 15420, trend: 'up' },
  { keyword: 'Machine Learning', count: 12350, trend: 'up' },
  { keyword: 'Pendidikan Indonesia', count: 11200, trend: 'up' },
  { keyword: 'Deep Learning', count: 10200, trend: 'up' },
  { keyword: 'UMKM Digital', count: 8900, trend: 'up' },
  { keyword: 'Blockchain', count: 8750, trend: 'stable' },
  { keyword: 'Merdeka Belajar', count: 8100, trend: 'up' },
  { keyword: 'Climate Change', count: 7200, trend: 'up' },
  { keyword: 'Deteksi Dini Penyakit', count: 6900, trend: 'up' },
  { keyword: 'Pariwisata Berkelanjutan', count: 5600, trend: 'up' },
  { keyword: 'E-Commerce Indonesia', count: 5200, trend: 'up' },
  { keyword: 'Natural Language Processing', count: 4300, trend: 'up' },
];

export async function mockSearch(filters: SearchFilters): Promise<SearchResult> {
  let results = [...mockArticles];
  const q = filters.query.toLowerCase();

  if (q) {
    results = results.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.authors.some(au => au.name.toLowerCase().includes(q)) ||
      a.abstract.toLowerCase().includes(q) ||
      a.keywords.some(k => k.toLowerCase().includes(q)) ||
      a.doi?.toLowerCase().includes(q) ||
      a.journal?.toLowerCase().includes(q) ||
      a.publisher?.toLowerCase().includes(q)
    );
  }

  if (filters.type) results = results.filter(a => a.type === filters.type);
  if (filters.yearFrom) results = results.filter(a => a.year >= filters.yearFrom!);
  if (filters.yearTo) results = results.filter(a => a.year <= filters.yearTo!);
  if (filters.language) results = results.filter(a => a.language === filters.language);
  if (filters.publisher) { const pub = filters.publisher.toLowerCase(); results = results.filter(a => a.publisher?.toLowerCase().includes(pub)); }
  if (filters.openAccess) results = results.filter(a => a.openAccess);
  if (filters.citationMin) results = results.filter(a => a.citationCount >= filters.citationMin!);
  if (filters.quartile) results = results.filter(a => a.quartile === filters.quartile);
  if (filters.subject) results = results.filter(a => a.subject === filters.subject);

  const total = results.length;
  const perPage = filters.perPage || 10;
  const page = filters.page || 1;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const paged = results.slice(start, start + perPage);

  return { articles: paged, total, page, perPage, totalPages };
}

export async function mockGetArticle(id: string): Promise<Article | undefined> {
  return mockArticles.find(a => a.id === id);
}

export async function mockGetTrendingKeywords(): Promise<TrendingKeyword[]> {
  return mockTrendingKeywords;
}

export async function mockGetRelatedArticles(articleId: string): Promise<Article[]> {
  const article = mockArticles.find(a => a.id === articleId);
  if (!article) return [];
  return mockArticles
    .filter(a => a.id !== articleId && a.keywords.some(k => article.keywords.includes(k)))
    .slice(0, 5);
}

export async function mockGetCitations(): Promise<Citation> {
  return {
    apa: 'Mitchell, S., Anderson, J., & Rodriguez, M. (2026). Deep Learning Applications in Natural Language Processing: A Comprehensive Survey. Nature Communications, 15(1), 100-112.',
    mla: 'Mitchell, Sarah, et al. "Deep Learning Applications in Natural Language Processing: A Comprehensive Survey." Nature Communications, vol. 15, no. 1, 2026, pp. 100-112.',
    ieee: 'S. Mitchell, J. Anderson, and M. Rodriguez, "Deep Learning Applications in Natural Language Processing: A Comprehensive Survey," Nature Communications, vol. 15, no. 1, pp. 100-112, 2026.',
    chicago: 'Mitchell, Sarah, James Anderson, and Maria Rodriguez. "Deep Learning Applications in Natural Language Processing: A Comprehensive Survey." Nature Communications 15, no. 1 (2026): 100-112.',
    harvard: 'Mitchell, S., Anderson, J. and Rodriguez, M. (2026). Deep Learning Applications in Natural Language Processing: A Comprehensive Survey. Nature Communications, 15(1), pp. 100-112.',
    bibtex: '@article{mitchell2026deep,\n  title={Deep Learning Applications in Natural Language Processing: A Comprehensive Survey},\n  author={Mitchell, Sarah and Anderson, James and Rodriguez, Maria},\n  journal={Nature Communications},\n  volume={15},\n  number={1},\n  pages={100--112},\n  year={2026}\n}',
    ris: 'TY  - JOUR\nAU  - Mitchell, Sarah\nAU  - Anderson, James\nAU  - Rodriguez, Maria\nPY  - 2026\nTI  - Deep Learning Applications in Natural Language Processing\nT2  - Nature Communications\nVL  - 15\nIS  - 1\nSP  - 100\nEP  - 112\nER  -',
  };
}

export const mockUser: User = {
  id: 'user-1',
  email: 'researcher@example.com',
  name: 'Dr. Alex Researcher',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  role: 'user',
  createdAt: '2025-01-01T00:00:00Z',
};

export const mockBookmarks: UserBookmark[] = mockArticles.slice(0, 5).map((a, i) => ({
  id: `bookmark-${i + 1}`,
  articleId: a.id,
  article: a,
  folder: i < 3 ? 'Machine Learning' : 'General',
  createdAt: new Date(2026, 0, i + 1).toISOString(),
}));

export const mockHistory: UserHistory[] = [
  { id: 'hist-1', query: 'deep learning NLP survey', createdAt: new Date(2026, 6, 20).toISOString() },
  { id: 'hist-2', query: 'blockchain healthcare', createdAt: new Date(2026, 6, 19).toISOString() },
  { id: 'hist-3', query: 'quantum computing algorithms', createdAt: new Date(2026, 6, 18).toISOString() },
  { id: 'hist-4', query: 'climate change prediction ML', createdAt: new Date(2026, 6, 17).toISOString() },
  { id: 'hist-5', query: 'CRISPR ethics regulation', createdAt: new Date(2026, 6, 16).toISOString() },
];

export const mockDashboardStats: DashboardStats = {
  totalBookmarks: 23,
  totalSearches: 147,
  totalCitations: 89,
  recentActivity: [
    { id: 'act-1', type: 'search', description: 'Searched for "deep learning"', createdAt: new Date().toISOString() },
    { id: 'act-2', type: 'bookmark', description: 'Saved "Advances in Reinforcement Learning"', createdAt: new Date(Date.now() - 3600000).toISOString() },
    { id: 'act-3', type: 'citation', description: 'Exported citation in APA format', createdAt: new Date(Date.now() - 7200000).toISOString() },
    { id: 'act-4', type: 'download', description: 'Downloaded PDF of "Quantum Computing"', createdAt: new Date(Date.now() - 10800000).toISOString() },
  ],
};
