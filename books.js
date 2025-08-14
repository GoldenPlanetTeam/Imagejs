
    const books = [
  {
    title: "المغامرة",
    author: "نبيل فاروق",
    description: "رواية بوليسية شيقة مليئة بالغموض والتشويق.",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1580947252i/51008637.jpg",
    pdf: "المغامرة.pdf"
  },
  {
    title: "اللص والكلاب",
    author: "نجيب محفوظ",
    description: "تحفة أدبية عن الصراع الداخلي والعدالة الاجتماعية.",
    img: "https://1.bp.blogspot.com/-x7Sb0kC1th8/YDPg_8KjaLI/AAAAAAAAFSU/WlLYZXbeh3srCSS43rHnhGr8mZEQacrvACLcBGAsYHQ/s666/hoo7.jpg",
    pdf: "اللص و الكلاب.pdf"
  },
  {
    title: "يوميات طبيب في الصعيد الجواني",
    author: "نبيل فاروق",
    description: "مواقف حقيقية لطبيب شاب يبدأ عمله في أعماق صعيد مصر.",
    img: "https://png.pngtree.com/png-clipart/20230914/original/pngtree-cartoon-doctor-clipart-cartoon-cute-doctor-man-with-glasses-vector-png-image_12147998.png",
    pdf: "يوميات طبيب فى الصعيد الجواني.pdf"
  },
  {
    title: "حول العالم في 80 يوم",
    author: "جول فيرن",
    description: "رحلة مغامرة كلاسيكية مليئة بالإثارة والمتعة.",
    img: "https://assets.asfar.io/uploads/2022/03/18225044/around-the-world-in-80days-jules-verne-afaq.jpg",
    pdf: "حول العالم في 80 يوما.pdf"
  },
  {
    title: "كتاب حروب (الجزء الأول)",
    author: "نبيل فاروق",
    description: "تطور أساليب الحروب وأسلحتها عبر الأجيال.",
    img: "https://th.bing.com/th/id/OIP.7qAE7GGHiTlA8eQphQ91tgHaLk",
    pdf: "حروب ج1.pdf"
  },
  {
    title: "كتاب حروب (الجزء الثاني)",
    author: "نبيل فاروق",
    description: "استكمال لرحلة فهم تطورات الحروب الحديثة.",
    img: "https://dardawen.com/wp-content/uploads/2022/01/%D8%AD%D8%B1%D9%88%D8%A8-%D8%AC-2-scaled.jpg",
    pdf: "حروب ج2.pdf"
  },
  {
    title: "أرض زيكولا",
    author: "عمرو عبدالحميد",
    description: "أرض زيكولا لا تتعامل بالنقود، بل بالـ وحدات العقلية.",
    img: "https://th.bing.com/th/id/R.c7219a5e90f134af0b70af6d62e1ed5a?rik=ZVyuuzf99HOCwg&pid=ImgRaw&r=0",
    pdf: "ارض زيكولا.pdf"
  },
  {
    title: "أماريتا",
    author: "عمرو عبدالحميد",
    description: "ينتقل البطل خالد إلى مملكة عدوّة لزيكولا بقوانين مختلفة.",
    img: "https://tse1.mm.bing.net/th/id/OIP.alRsBbaYZXRXSkoBaK1xXwHaLH",
    pdf: "أماريتا.pdf"
  },
  {
    title: "وادي الذئاب المنسية",
    author: "عمرو عبدالحميد",
    description: "يعيش البشر والذئاب والملديون في سلمٍ امتد آلاف السنين.",
    img: "https://tse4.mm.bing.net/th/id/OIP.PnprB90Wunom0VZ1nq3YcwHaNK",
    pdf: "وادي الذئاب المنسية.pdf"
  },
  {
    title: "يوتوبيا",
    author: "أحمد خالد توفيق",
    description: "مجتمع مستقبلي منقسم بين الأغنياء والفقراء وسط صراع.",
    img: "https://tse4.mm.bing.net/th/id/OIP.z-1PSyTaM_v98TeJ8SE3OwHaKs",
    pdf: "يوتوبيا.pdf"
  },
  
  {
    title: "علاقات خطرة",
    author: "محمد طه",
    description: "كتاب مبسّط باللهجة العامية، يعرّفك على نفسك أولًا، ثم يعلّمك كيف تتعامل مع علاقاتك وتحدد السامة منها",
    img: "https://th.bing.com/th/id/R.b8bfbd94dd4cf38de4490b39584c8887?rik=sX2y5%2b2YnPHE2Q&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0552%2f1532%2f5392%2fproducts%2f7ed5762ea2452e66b59c5cdf20f09d71_1200x1200.jpg%3fv%3d1628289850&ehk=d9BsniwjcPH5v7%2b%2f1OReyc5kZZBOBWlB5%2f1B%2fcvofE8%3d&risl=&pid=ImgRaw&r=0",
    pdf: "علاقات خطرة.pdf"
  },
  {
    title: "العقرب 1 (سيف العدالة)",
    author: "نبيل فاروق",
    description: "حين يتحوّل الجاسوس إلى مطارد ومطارد في آنٍ واحد، تبدأ لعبة الموت بينه وبين أقوى تنظيمات العالم!",
    img: "https://diwanegypt.com/wp-content/uploads/2021/07/9789778200782.jpg",
    pdf: "العقرب 1.pdf"
  },
  {
    title: "العقرب 2 (ملك الجريمة)",
    author: "نبيل فاروق",
    description: "عندما يظن الجميع أن العقرب انتهى، يعود من بين الظلال ليقلب موازين الخطر ويخوض أخطر مواجهة في حياته!",
    img: "https://cdn.abjjad.com/pub/ea35e496-5729-4539-b34c-8a23151c156d.png",
    pdf: "العقرب 2.pdf"
  },
  {
    title: "العقرب 3 (الامبراطورة)",
    author: "نبيل فاروق",
    description: "في سباق مع الزمن، يقاتل العقرب وسط مؤامرة قاتلة ليمنع كارثة عالمية قد تبتلع الجميع!",
    img: "https://www.anglo-egyptian.com/books_posters/43082.jpg",
    pdf: "العقرب 3.pdf"
  },
  {
    title: "العقرب 4 (مملكة الشر)",
    author: "نبيل فاروق",
    description: "في عالم يكتظ بالأسرار والخيانة، يظهر العقرب ليقلب الموازين بنقمة لا ترحم وخطة لا تخطئ!",
    img: "https://cdn.abjjad.com/pub/b97187d2-1b62-4e5c-836a-ace06330951f.png",
    pdf: "العقرب 4.pdf"
  },
  {
    title: "العقرب 5 (مهمة رسمية)",
    author: "نبيل فاروق",
    description: "حين تتداخل الدماء بالأسرار، يعود العقرب لينفذ عدالته الخاصة وسط عالم لا يرحم!",
    img: "https://diwanegypt.com/wp-content/uploads/2021/07/9789778200805.jpg",
    pdf: "العقرب 5.pdf"
  },
  {
    title: "العقرب 6 (خلف القناع)",
    author: "نبيل فاروق",
    description: "في عمق القبو، يقف العقرب بقناع صامت وابتسامة ساخرة، حاملاً في حضنه الأسرار التي ستقلب كل شيء رأسًا على عقب!",
    img: "https://diwanegypt.com/wp-content/uploads/2021/07/9789778200775.jpg",
    pdf: "العقرب 6.pdf"
  },
  {
    title: "شهرزاد اون فاير",
    author: "هبة السواح",
    description: "رحلة لاكتشاف نفسك من جديد، بصوت شهرزاد اللي قررت تبقى هي البطلة مش الحكاية",
    img: "https://hebaelsawah.com/cdn/shop/products/Shahr-Zad-on-Fire---1_900x.png?v=1611152664",
    pdf: "شهرزاد اون فاير.pdf"
  },
  {
    title: "سندريلا سيكريت",
    author: "هبة السواح",
    description: "سندريلا رجعت من الحفلة، وقررت تلبس الكعب وتبدأ تبني مملكتها بنفسها!",
    img: "https://hebaelsawah.com/cdn/shop/products/Secret-1_900x.png?v=1611152929",
    pdf: "سندريلا سيكريت.pdf"
  },
  {
    title: "الميرانتي أمير البحار",
    author: "أحمد خالد توفيق",
    description: "رواية بحرية⚓مليئة بالإثارة من عالم القتال والمؤامرات في أعالي البحار.",
    img: "https://naibook.com/wp-content/uploads/2023/03/Nai-bookstore-B-almeranti.jpg",
    pdf: "الميرانتي أمير البحار.pdf"
  }
  ,  {
    title: "حكايات الغرفة 207 ( سر الغرفة 207 )",
    author: "أحمد خالد توفيق",
    description: "رعب نفسي... وأسرار لا تنتهي خلف باب واحد.",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667439931i/63209920.jpg",
    pdf: "حكايات_الغرفة_207.pdf"
  },
  {
    title: "الذين هبطوا من السماء",
    author: "أنيس منصور",
    description: "كتاب يثير الدهشة، يجمع فيه أنيس منصور قصصاً غامضة وأدلة محتملة عن كائنات من عوالم أخرى هبطت إلى كوكبنا وغيّرت مجرى التاريخ.",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1475966936i/5959791.jpg",
    pdf: "الذين هبطوا من السماء.pdf"
  },
  {
    title: "الذين عادوا إلى السماء",
    author: "أنيس منصور",
    description: "رحلة مشوّقة ينسج فيها أنيس منصور خيوط الأساطير والعلوم ليروي احتمالات مذهلة عن أصول الإنسان وزيارات من كائنات فضائية قديمة للأرض.",
    img: "https://tse4.mm.bing.net/th/id/OIP.MRJDIfzVprqeTB9fLOsq1AHaKW?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    pdf: "الذين عادوا إلى السماء.pdf"
  }
    ];

