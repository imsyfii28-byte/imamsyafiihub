import { Article, TrendingKeyword, SearchResult, SearchFilters, Citation, User, UserBookmark, UserHistory, DashboardStats } from '@/types';

const indonesianArticles: Article[] = [
  {
    id: 'article-id-1',
    title: 'Klasifikasi Metode Persalinan pada Ibu Hamil Menggunakan Algoritma Random Forest Berbasis Mobile',
    authors: [
      { name: 'Dewi Marini Umi Atmaja', affiliation: 'Universitas Medika Suherman' },
      { name: 'Arif Rahman Hakim', affiliation: 'Universitas Medika Suherman' },
      { name: 'Amat Basri', affiliation: 'Universitas Medika Suherman' },
      { name: 'Andri Ariyanto', affiliation: 'Universitas Jenderal Achmad Yani' },
    ],
    year: 2023,
    publisher: 'Universitas Muhammadiyah Purwokerto',
    journal: 'JRST: Jurnal Riset Sains dan Teknologi',
    volume: '7',
    issue: '2',
    pages: '161-168',
    doi: '10.30595/jrst.v7i2.16705',
    citationCount: 12,
    abstract: 'Tren angka kematian ibu pada saat melahirkan masih tinggi di Indonesia, yakni sekitar 300 per 100.000 kelahiran. Pemerintah Indonesia berencana untuk menurunkan angka tersebut menjadi 183 per 100.000 kelahiran pada tahun 2024 mendatang. Salah satu faktor penyebab kematian ibu hamil di Indonesia disebabkan oleh hipertensi dan terjadinya pendarahan pada saat melahirkan dan dibutuhkannya metode penanganan dalam persalinan. Metode persalinan pada ibu hamil dapat diklasifikasikan sesuai dengan kondisi ibu untuk menghindari risiko kematian ibu akibat pemilihan metode persalinan yang tidak tepat. Permasalahan tersebut dapat diselesaikan dengan memanfaatkan teknologi Machine Learning menggunakan algoritma random forest, dengan tujuan untuk membangun sebuah sistem yang dapat mengklasifikasi metode persalinan yang tepat berdasarkan kumpulan data persalinan ibu hamil yang telah disediakan.',
    keywords: ['persalinan', 'random forest', 'android', 'machine learning', 'klasifikasi'],
    openAccess: true,
    pdfUrl: 'https://jurnalnasional.ump.ac.id/index.php/JRST/article/view/16705',
    contentType: 'html',
    language: 'id',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2023, 10, 21).toISOString(),
  },
  {
    id: 'article-id-2',
    title: 'Model Optimasi SVM Dengan PSO-GA dan SMOTE Dalam Menangani High Dimensional dan Imbalance Data Banjir',
    authors: [
      { name: 'Raenald Syaputra', affiliation: 'Universitas Muhammadiyah Kalimantan Timur' },
      { name: 'Taghfirul Azhima Yoga Siswa', affiliation: 'Universitas Muhammadiyah Kalimantan Timur' },
      { name: 'Wawan Joko Pranoto', affiliation: 'Universitas Muhammadiyah Kalimantan Timur' },
    ],
    year: 2024,
    publisher: 'Center for Research and Community Service, Institut Informatika Indonesia Surabaya',
    journal: 'Teknika',
    volume: '13',
    issue: '2',
    pages: '273-282',
    doi: '10.34148/teknika.v13i2.876',
    citationCount: 8,
    abstract: 'Banjir merupakan salah satu bencana alam yang sering terjadi di Indonesia, termasuk di Kota Samarinda dengan 18-33 titik desa terdampak dari tahun 2018-2021. Penggunaan machine learning dalam mengklasifikasi bencana banjir sangat penting untuk memprediksi kejadian di masa mendatang. Penelitian ini bertujuan mengidentifikasi fitur-fitur yang diperoleh dari seleksi fitur Genetic Algorithm (GA) yang memiliki pengaruh terhadap akurasi klasifikasi data banjir Kota Samarinda menggunakan algoritma Support Vector Machine (SVM), serta meningkatkan akurasi klasifikasi data banjir di Kota Samarinda dengan mengimplementasikan algoritma SVM yang dikombinasikan dengan metode Synthetic Minority Oversampling Technique (SMOTE) untuk oversampling, seleksi fitur dengan GA dan optimasi menggunakan Particle Swarm Optimization (PSO).',
    keywords: ['klasifikasi banjir', 'svm', 'smote', 'ga', 'pso', 'machine learning'],
    openAccess: true,
    pdfUrl: 'https://ejournal.ikado.ac.id/index.php/teknika/article/view/876',
    language: 'id',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2024, 6, 11).toISOString(),
  },
  {
    id: 'article-id-3',
    title: 'Sentiment Analysis using the Support Vector Machine Algorithm on Covid-19',
    authors: [
      { name: 'Adytyo Wahyu Nugroho', affiliation: 'Islamic University of Indragiri' },
      { name: 'Norhikmah Norhikmah', affiliation: 'Islamic University of Indragiri' },
    ],
    year: 2024,
    publisher: 'Islamic University of Indragiri',
    journal: 'Sistemasi: Jurnal Sistem Informasi',
    volume: '13',
    issue: '4',
    pages: '1758-1772',
    doi: '10.32520/stmsi.v13i4.3778',
    citationCount: 5,
    abstract: 'This massive development of information technology makes it easier for people lives in various fields, one of them is social media, social media that people use a lot to get information about news or events that are happening in Indonesia, one of which is social media Twitter which provides a lot of information for the people of Indonesia, one of which is information about Covid-19 which is currently rife in the territory of Indonesia. Sentiment analysis is a branch of Natural Language Processing (NLP) which can help determine the sentiments that occur in society. This study uses data in the form of tweets to carry out sentiment analysis obtained on Twitter social media.',
    keywords: ['sentiment analysis', 'support vector machine', 'covid-19', 'nlp', 'twitter'],
    openAccess: true,
    pdfUrl: 'https://sistemasi.ftik.unisi.ac.id/index.php/stmsi/article/view/3778',
    language: 'id',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2024, 7, 15).toISOString(),
  },
  {
    id: 'article-id-2',
    title: 'Model Optimasi SVM Dengan PSO-GA dan SMOTE Dalam Menangani High Dimensional dan Imbalance Data Banjir',
    authors: [
      { name: 'Raenald Syaputra', affiliation: 'Universitas Muhammadiyah Kalimantan Timur' },
      { name: 'Taghfirul Azhima Yoga Siswa', affiliation: 'Universitas Muhammadiyah Kalimantan Timur' },
      { name: 'Wawan Joko Pranoto', affiliation: 'Universitas Muhammadiyah Kalimantan Timur' },
    ],
    year: 2024,
    publisher: 'Center for Research and Community Service, Institut Informatika Indonesia Surabaya',
    journal: 'Teknika',
    volume: '13',
    issue: '2',
    pages: '273-282',
    doi: '10.34148/teknika.v13i2.876',
    citationCount: 8,
    abstract: 'Banjir merupakan salah satu bencana alam yang sering terjadi di Indonesia, termasuk di Kota Samarinda dengan 18-33 titik desa terdampak dari tahun 2018-2021. Penggunaan machine learning dalam mengklasifikasi bencana banjir sangat penting untuk memprediksi kejadian di masa mendatang. Penelitian ini bertujuan mengidentifikasi fitur-fitur yang diperoleh dari seleksi fitur Genetic Algorithm (GA) yang memiliki pengaruh terhadap akurasi klasifikasi data banjir Kota Samarinda menggunakan algoritma Support Vector Machine (SVM), serta meningkatkan akurasi klasifikasi data banjir di Kota Samarinda dengan mengimplementasikan algoritma SVM yang dikombinasikan dengan metode Synthetic Minority Oversampling Technique (SMOTE) untuk oversampling, seleksi fitur dengan GA dan optimasi menggunakan Particle Swarm Optimization (PSO).',
    keywords: ['klasifikasi banjir', 'svm', 'smote', 'ga', 'pso', 'machine learning'],
    openAccess: true,
    pdfUrl: 'https://ejournal.ikado.ac.id/index.php/teknika/article/view/876',
    contentType: 'html',
    language: 'id',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2024, 6, 11).toISOString(),
  },
  {
    id: 'article-id-3',
    title: 'Sentiment Analysis using the Support Vector Machine Algorithm on Covid-19',
    authors: [
      { name: 'Adytyo Wahyu Nugroho', affiliation: 'Islamic University of Indragiri' },
      { name: 'Norhikmah Norhikmah', affiliation: 'Islamic University of Indragiri' },
    ],
    year: 2024,
    publisher: 'Islamic University of Indragiri',
    journal: 'Sistemasi: Jurnal Sistem Informasi',
    volume: '13',
    issue: '4',
    pages: '1758-1772',
    doi: '10.32520/stmsi.v13i4.3778',
    citationCount: 5,
    abstract: 'This massive development of information technology makes it easier for people lives in various fields, one of them is social media, social media that people use a lot to get information about news or events that are happening in Indonesia, one of which is social media Twitter which provides a lot of information for the people of Indonesia, one of which is information about Covid-19 which is currently rife in the territory of Indonesia. Sentiment analysis is a branch of Natural Language Processing (NLP) which can help determine the sentiments that occur in society. This study uses data in the form of tweets to carry out sentiment analysis obtained on Twitter social media.',
    keywords: ['sentiment analysis', 'support vector machine', 'covid-19', 'nlp', 'twitter'],
    openAccess: true,
    pdfUrl: 'https://sistemasi.ftik.unisi.ac.id/index.php/stmsi/article/view/3778',
    contentType: 'html',
    language: 'id',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2024, 7, 15).toISOString(),
  },
  {
    id: 'article-id-4',
    title: 'Evaluasi Manajemen Proyek',
    authors: [
      { name: 'Suryanto Suryanto', affiliation: 'Universitas Bina Nusantara' },
      { name: 'Sanyoto Gondodiyoto', affiliation: 'Sekolah Tinggi Akuntansi Negara' },
      { name: 'Desi N I', affiliation: 'Universitas Bina Nusantara' },
    ],
    year: 2009,
    publisher: 'Bina Nusantara University',
    journal: 'CommIT Journal',
    volume: '3',
    issue: '2',
    pages: '82-85',
    doi: '10.21512/commit.v3i2.520',
    citationCount: 12,
    abstract: 'The purpose of this study was to evaluate the project management and make suggestions to the problems being faced by the company. Many companies or individuals working on a project basis (project based), but many of those who do not manage the project well, even with no management at all and let the project flow as it is. Therefore, it needs a proper guidance and methods to support a project management information system.',
    keywords: ['project management', 'evaluation', 'information system'],
    openAccess: true,
    pdfUrl: 'https://journal.binus.ac.id/index.php/commit/article/view/520',
    contentType: 'html',
    language: 'en',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2009, 9, 1).toISOString(),
  },
  {
    id: 'article-id-5',
    title: 'Evaluating User Experience of a Mobile Health Application Halodoc using User Experience Questionnaire and Usability Testing',
    authors: [
      { name: 'Mochammad Aldi Kushendriawan', affiliation: 'Universitas Indonesia' },
      { name: 'Harry Budi Santoso', affiliation: 'Universitas Indonesia' },
      { name: 'Panca O. Hadi Putra', affiliation: 'Universitas Indonesia' },
      { name: 'Martin Schrepp', affiliation: 'Universitas Indonesia' },
    ],
    year: 2021,
    publisher: 'Fakultas Ilmu Komputer, Universitas Indonesia',
    journal: 'Jurnal Sistem Informasi',
    volume: '17',
    issue: '1',
    pages: '1-15',
    doi: '',
    citationCount: 45,
    abstract: 'This paper aims to evaluate the user experience of a mobile health application called Halodoc to keep the user using the application and keep from losing a potential source of revenue for Halodoc. Halodoc is one of the companies that use the internet to provide health services for its users. This paper uses a mixed-method approach using User Experience Questionnaire (UEQ) and Usability Testing.',
    keywords: ['mobile health', 'usability testing', 'user experience', 'halodoc', 'mhealth'],
    openAccess: true,
    pdfUrl: 'https://jsi-tes.pusilkom.com/index.php/jsi/article/view/1063',
    contentType: 'html',
    language: 'en',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2021, 11, 6).toISOString(),
  },
  {
    id: 'article-id-6',
    title: 'Students Learning Interest Using Computer and Android in Acid Base Teaching',
    authors: [
      { name: 'Milanda Putri', affiliation: 'Universitas Islam Negeri Sultan Syarif Kasim Riau' },
      { name: 'Yenni Kurniawati', affiliation: 'Universitas Islam Negeri Sultan Syarif Kasim Riau' },
    ],
    year: 2021,
    publisher: 'Universitas Negeri Malang',
    journal: 'J-PEK (Jurnal Pembelajaran Kimia)',
    volume: '6',
    issue: '2',
    pages: '63-71',
    doi: '10.17977/um026v6i22021p063',
    citationCount: 18,
    abstract: 'This research is motivated by the influence of high technology on education; hence educators need to choose the right technology device to use and compare student learning interests with and without the support of computer and android multimedia. It was quasi-experiment research with posttest only and non-equivalent control group designs.',
    keywords: ['multimedia', 'computer', 'android', 'learning interest', 'acid-base'],
    openAccess: true,
    pdfUrl: 'http://journal2.um.ac.id/index.php/j-pek/article/view/20390',
    contentType: 'html',
    language: 'id',
    type: 'journal',
    subject: 'education',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2021, 11, 1).toISOString(),
  },
  {
    id: 'article-id-7',
    title: 'Designing Mobile-Based Application for Quantifying IT Business Value',
    authors: [
      { name: 'Stanley Karouw', affiliation: 'Sam Ratulangi University Manado' },
    ],
    year: 2014,
    publisher: 'Fakultas Ilmu Komputer, Universitas Indonesia',
    journal: 'Jurnal Sistem Informasi',
    volume: '10',
    issue: '1',
    pages: '1-10',
    doi: '10.21609/jsi.v10i1.373',
    citationCount: 8,
    abstract: 'North Sulawesi province is fostering regional development towards a society which have values, prosperous and competitive cultures. Information Technology (IT) have become a key enabler to accelerate region developments. To optimize IT utilization, local government can used IT Valuation Matrix framework, to identify all IT Business Value which derived from each IT investing type, and then be quantify in reasonable and responsible manner.',
    keywords: ['IT business value', 'mobile application', 'agile', 'software development'],
    openAccess: true,
    pdfUrl: 'http://jsi1.cs.ui.ac.id/index.php/jsi/article/view/373',
    contentType: 'html',
    language: 'en',
    type: 'journal',
    subject: 'computer-science',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2014, 7, 1).toISOString(),
  },
  {
    id: 'article-id-8',
    title: 'The Effectiveness of Exercise Therapy on Reducing Pain in Osteoarthritis Patients: Literature Review',
    authors: [
      { name: 'Warsono Warsono', affiliation: 'Universitas Muhammadiyah Semarang' },
    ],
    year: 2020,
    publisher: 'Universitas Muhammadiyah Semarang',
    journal: 'Media Keperawatan Indonesia',
    volume: '3',
    issue: '2',
    pages: '99-105',
    doi: '10.26714/mki.3.2.2020.99-105',
    citationCount: 22,
    abstract: 'Osteoarthritis (OA) is a chronic joint disorder with damage to the joint cartilage, this causes a decrease in the functional ability and perform daily activities. So intervention is needed in reducing these problems to increase and maintain independence in carrying out training activities. This research used a systematic literature study approach obtained from PubMed database and Science Direct.',
    keywords: ['osteoarthritis', 'exercise therapy', 'pain', 'nursing', 'literature review'],
    openAccess: true,
    pdfUrl: 'https://jurnal.unimus.ac.id/index.php/MKI/article/view/11062',
    contentType: 'html',
    language: 'id',
    type: 'journal',
    subject: 'medicine',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2020, 5, 1).toISOString(),
  },
  {
    id: 'article-id-9',
    title: 'Terapi Spesialis Keperawatan Jiwa terhadap Klien dan Keluarga',
    authors: [
      { name: 'Winda Ratna Wulan', affiliation: 'Universitas Indonesia' },
      { name: 'Achir Yani S. Hamid', affiliation: 'Universitas Indonesia' },
      { name: 'Novy Helena', affiliation: 'Universitas Indonesia' },
    ],
    year: 2015,
    publisher: 'Fakultas Ilmu Keperawatan Universitas Indonesia',
    journal: 'Jurnal Keperawatan Indonesia',
    volume: '18',
    issue: '1',
    pages: '59-66',
    doi: '10.7454/jki.v18i1.399',
    citationCount: 35,
    abstract: 'Sejak Juli 2013, Rumah Sakit Provinsi Jawa Barat membuka Poli Konseling Psikiatri di Grha Atma yang melibatkan perawat spesialis keperawatan jiwa. Penelitian yang dilakukan adalah dengan menggunakan penelitian survei dengan metode kuantitatif dan menggunakan rancangan cross sectional.',
    keywords: ['poliklinik konseling', 'karakteristik klien', 'terapi spesialis keperawatan jiwa'],
    openAccess: true,
    pdfUrl: 'http://jki.ui.ac.id/index.php/jki/article/view/399',
    contentType: 'html',
    language: 'id',
    type: 'journal',
    subject: 'medicine',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2015, 2, 1).toISOString(),
  },
  {
    id: 'article-id-10',
    title: 'Strategies for Supporting Healthcare Workers Resilience and Mental Health During A Pandemic: A Scoping Review',
    authors: [
      { name: 'Eka Oktavianto', affiliation: 'STIKes Surya Global, Yogyakarta' },
      { name: 'I Made Moh. Yanuar Saifudin', affiliation: 'STIKes Surya Global, Yogyakarta' },
      { name: 'Gani Apriningtyas Budiyati', affiliation: 'STIKes Surya Global, Yogyakarta' },
    ],
    year: 2023,
    publisher: 'Fakultas Ilmu Keperawatan Universitas Indonesia',
    journal: 'Jurnal Keperawatan Indonesia',
    volume: '26',
    issue: '1',
    pages: '46-56',
    doi: '10.7454/jki.v26i1.2278',
    citationCount: 42,
    abstract: 'As a group, health workers are at risk of experiencing stress and mental health problems at work, which may negatively affect their resilience. This study assessed the effectiveness of mental health support strategies for health workers during the COVID-19 pandemic.',
    keywords: ['health workers', 'mental health', 'pandemic', 'resilience', 'scoping review'],
    openAccess: true,
    pdfUrl: 'https://jki.ui.ac.id/index.php/jki/article/view/1081',
    contentType: 'html',
    language: 'id',
    type: 'journal',
    subject: 'medicine',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2023, 2, 1).toISOString(),
  },
  {
    id: 'article-id-11',
    title: 'Implementation of brain gym and puzzle therapy and changes in cognitive function among elderly people with dementia in primary health care',
    authors: [
      { name: 'Lisdahayati Lisdahayati', affiliation: 'Poltekkes Kemenkes Palembang' },
      { name: 'I Gusti Ayu Putu Desy Rohana', affiliation: 'Poltekkes Kemenkes Palembang' },
      { name: 'Saprianto Saprianto', affiliation: 'Poltekkes Kemenkes Palembang' },
      { name: 'Gunardi Pome', affiliation: 'Poltekkes Kemenkes Palembang' },
    ],
    year: 2026,
    publisher: 'STIKes Al-Ma\'arif Baturaja',
    journal: 'Lentera Perawat',
    volume: '7',
    issue: '2',
    pages: '472-479',
    doi: '10.52235/lp.v7i2.773',
    citationCount: 3,
    abstract: 'Background: Dementia is a progressive decline in cognitive function that affects memory, thinking, behavior, and activities of daily living, particularly among older adults. This study aimed to describe changes in cognitive function among older adults before and after the implementation of brain gym and puzzle therapy.',
    keywords: ['cognitive dysfunction', 'dementia', 'exercise therapy', 'nursing care', 'primary health care'],
    openAccess: true,
    pdfUrl: 'https://jurnal.stikesalmaarif.ac.id/index.php/lenteraperawat/article/view/773',
    contentType: 'html',
    language: 'en',
    type: 'journal',
    subject: 'medicine',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2026, 5, 1).toISOString(),
  },
  {
    id: 'article-id-12',
    title: 'MEDIA PEMBELAJARAN BAHASA DAN SASTRA (STUDI PUSTAKA)',
    authors: [
      { name: 'Fina Nabilah Layaliya', affiliation: 'Universitas Negeri Semarang' },
      { name: 'Haryadi Haryadi', affiliation: 'Universitas Negeri Semarang' },
      { name: 'Nas Haryati Setyaningsih', affiliation: 'Universitas Negeri Semarang' },
    ],
    year: 2021,
    publisher: 'Program Studi Pendidikan Bahasa dan Sastra Indonesia',
    journal: 'Jurnal Pendidikan Bahasa dan Sastra Indonesia Metalingua',
    volume: '6',
    issue: '2',
    pages: '81-84',
    doi: '10.21107/metalingua.v6i2.12392',
    citationCount: 15,
    abstract: 'Penelitian ini merupakan penelitian kepustakaan yakni data-data atau bahan-bahan yang diperlukan berasal dari perpustakaan baik berupa buku, ensklopedi, kamus, jurnal, dokumen, maupun majalah. Media pembelajaran dibutuhkan dalam mata pelajaran yang diajarkan di sekolah, salah satunya mata pelajaran Bahasa Indonesia.',
    keywords: ['kepustakaan', 'media pembelajaran', 'bahasa dan sastra'],
    openAccess: true,
    pdfUrl: 'https://journal.trunojoyo.ac.id/metalingua/article/view/12392',
    contentType: 'html',
    language: 'id',
    type: 'journal',
    subject: 'education',
    source: 'DOAJ (Indonesia)',
    createdAt: new Date(2021, 9, 1).toISOString(),
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
