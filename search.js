// استخراج الكلمة المفتاحية من الرابط
const urlParams = new URLSearchParams(window.location.search);
const initialQuery = urlParams.get("query");

if (initialQuery) {
  searchBox.value = initialQuery;
  const inputEvent = new Event("input");
  searchBox.dispatchEvent(inputEvent);
}
    const books = [
      {
        title: "الأعداد الخاصة",
        author: "نبيل فاروق",
        link: "series-a3dad-khaassa.html",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJSVYtOABWFHyLhbXO9-v3i5g-9P5LaXboxdFsdk9KwF7vvF1cJMhDvQpfa_FdMik-hCbdQbuj95NJq_CbAz-Y9zsTSdpRNB_pmU4_15ZV3-8Zh16cXGexzTeQlNp2RFW1cqLN7IsrdT4/w1200-h630-p-k-no-nu/%25D9%2583%25D8%25AA%25D8%25A7%25D8%25A8%2B%25D8%25A7%25D9%2588%25D9%2586%2B-%2B%25D8%25A7%25D9%2584%25D8%25A7%25D8%25B9%25D8%25AF%25D8%25A7%25D8%25AF%2B%25D8%25A7%25D9%2584%25D8%25AE%25D8%25A7%25D8%25B5%25D8%25A9%2B%25D8%25AF.%25D9%2586%25D8%25A8%25D9%258A%25D9%2584%2B%25D9%2581%25D8%25A7%25D8%25B1%25D9%2588%25D9%2582.jpg",
      },
      {
        title: "ما وراء الطبيعة",
        author: "أحمد خالد توفيق",
        link: "series-ma-waraa-eltabiaa.html",
        image: "https://i.ibb.co/W4GYcYrp/3fv3xg2i.png",
      },
      {
        title: "العميل السري",
        author: "نبيل فاروق",
        link: "series-ameel.html",
        image:
          "https://tse4.mm.bing.net/th/id/OIP.9Dz4GgFb3kLSmtGiNUPaGwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        title: "المغامرة",
        author: "نبيل فاروق",
        link: "المغامرة.pdf",
        image:
          "https://tse1.mm.bing.net/th/id/OIP.U2WySt-x4RmVcfuQ2H7OTAAAAA?rs=1&pid=ImgDetMain",
      },
            {
        title: "اللص والكلاب",
        author: "نجيب محفوظ",
        link: "اللص و الكلاب.pdf",
        image: "https://1.bp.blogspot.com/-x7Sb0kC1th8/YDPg_8KjaLI/AAAAAAAAFSU/WlLYZXbeh3srCSS43rHnhGr8mZEQacrvACLcBGAsYHQ/s666/hoo7.jpg"
      },
      {
        title: "حول العالم في 80 يوم",
        author: "جول فيرن",
        link: "حول العالم في 80 يوما.pdf",
        image: "https://assets.asfar.io/uploads/2022/03/18225044/around-the-world-in-80days-jules-verne-afaq.jpg"
      },
      {
        title: "رجل المستحيل",
        author: "نبيل فاروق",
        link: "series-mostaheel.html",
        image: "https://aswatonline.com/wp-content/uploads/2020/12/38764-640x435.jpg"
      },
      {
        title: "ملف المستقبل",
        author: "نبيل فاروق",
        link: "series-mustaqbal.html",
        image: "https://mostaql.hsoubcdn.com/uploads/thumbnails/1471757/633c78da725dc/%D9%85%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84.jpg"
      },
      {
        title: "المغامرون الخمسة",
        author: "محمود سالم",
        link: "series-moghameroon.html",
        image: "المغامرون الخمسه .png"
      },
      {
  title:"شهرزاد اون فاير",
  author:"هبة السواح",
  link:"شهرزاد اون فاير.pdf",
  image:"https://hebaelsawah.com/cdn/shop/products/Shahr-Zad-on-Fire---1_900x.png?v=1611152664"
        },

{
  title:"سندريلا سيكريت",
  author:"هبة السواح",
  link:"سندريلا سيكريت.pdf",
  image:"https://hebaelsawah.com/cdn/shop/products/Secret-1_900x.png?v=1611152929"
        },
        {
  title:"الميرانتي أمير البحار",
  author:"أحمد خالد توفيق",
  link:"الميرانتي أمير البحار.pdf",
  image:"https://naibook.com/wp-content/uploads/2023/03/Nai-bookstore-B-almeranti.jpg"
        },

{
  title:"حكايات الغرفة 207 ( سر الغرفة 207 )",
  author:"أحمد خالد توفيق",
  link:"حكايات_الغرفة_207.pdf",
  image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667439931i/63209920.jpg"
        },
        {
  title:"الذين هبطوا من السماء",
  author:"أنيس منصور",
  link:"الذين هبطوا من السماء.pdf",
  image:"https://cdn.abjjad.com/pub/9d499ad6-a779-4997-a8cd-71d0e01972d9.png"
        },

{
  title:"الذين عادوا إلى السماء",
  author:"أنيس منصور",
  link:"الذين عادوا إلى السماء.pdf",
  image:"https://th.bing.com/th/id/R.31124321fcd5a6ba9e4c1f5f2ceb2ad4?rik=5jQMaAlIgM06bw&riu=http%3a%2f%2fbookbuzz.store%2fcdn%2fshop%2fproducts%2f181527_1200x1200.jpg%3fv%3d1670753130&ehk=qmZ0MsHlJyxyFm9RcQiafI9fJ%2bOWj2wAcxOQLkIFSUQ%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            title: "يوميات طبيب في الصعيد الجواني",
            author: "نبيل فاروق",
            link: "يوميات طبيب فى الصعيد الجواني.pdf",
            image: "https://png.pngtree.com/png-clipart/20230914/original/pngtree-cartoon-doctor-clipart-cartoon-cute-doctor-man-with-glasses-vector-png-image_12147998.png"
        },
      {
        title: "كتاب حروب (الجزء الأول)",
        author: "نبيل فاروق",
        link: "حروب ج1.pdf",
        image: "https://th.bing.com/th/id/OIP.7qAE7GGHiTlA8eQphQ91tgHaLk"
      },
      {
        title: "كتاب حروب (الجزء الثاني)",
        author: "نبيل فاروق",
        link: "حروب ج2.pdf",
        image: "https://dardawen.com/wp-content/uploads/2022/01/%D8%AD%D8%B1%D9%88%D8%A8-%D8%AC-2-scaled.jpg"
      },
     {
        title: "العملية شبل",
        author: "نبيل فاروق",
        link: "https://www.youtube.com/watch?si=hypCkyYCJvZys6HG&v=wCuGRoHtTl0&feature=youtu.be",
        image: "https://i1.sndcdn.com/artworks-eaPXKyqpdDFJ7wnd-ByyV9Q-t500x500.jpg"
       },
       {
  title:"أرض زيكولا",
  author:"عمرو عبدالحميد",
  link:"أرض زيكولا.pdf",
  image:"https://th.bing.com/th/id/R.c7219a5e90f134af0b70af6d62e1ed5a?rik=ZVyuuzf99HOCwg&pid=ImgRaw&r=0"
        },
        {
      title:"يوتوبيا",
      author:"أحمد خالد توفيق",
      link:"يوتوبيا.pdf",
      image:"https://tse4.mm.bing.net/th/id/OIP.z-1PSyTaM_v98TeJ8SE3OwHaKs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        ,},{
  title:"علاقات خطرة",
  author:"محمد طه",
  link:"علاقات خطرة.pdf",
  image:"https://th.bing.com/th/id/R.b8bfbd94dd4cf38de4490b39584c8887?rik=sX2y5%2b2YnPHE2Q&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0552%2f1532%2f5392%2fproducts%2f7ed5762ea2452e66b59c5cdf20f09d71_1200x1200.jpg%3fv%3d1628289850&ehk=d9BsniwjcPH5v7%2b%2f1OReyc5kZZBOBWlB5%2f1B%2fcvofE8%3d&risl=&pid=ImgRaw&r=0"
        ,},{
  title:"العقرب 1 (سيف العدالة)",
  author:"نبيل فاروق",
  link:"العقرب 1.pdf",
  image:"https://diwanegypt.com/wp-content/uploads/2021/07/9789778200782.jpg"
        },

{
  title:"العقرب 2 (ملك الجريمة)",
  author:"نبيل فاروق",
  link:"العقرب 2.pdf",
  image:"https://cdn.abjjad.com/pub/ea35e496-5729-4539-b34c-8a23151c156d.png"
        },

{
  title:"العقرب 3 (الامبراطورة)",
  author:"نبيل فاروق",
  link:"العقرب 3.pdf",
  image:"https://www.anglo-egyptian.com/books_posters/43082.jpg"
        },

{
  title:"العقرب 4 (مملكة الشر)",
  author:"نبيل فاروق",
  link:"العقرب 4.pdf",
  image:"https://cdn.abjjad.com/pub/b97187d2-1b62-4e5c-836a-ace06330951f.png"
        },

{
  title:"العقرب 5 (مهمة رسمية)",
  author:"نبيل فاروق",
  link:"العقرب 5.pdf",
  image:"https://diwanegypt.com/wp-content/uploads/2021/07/9789778200805.jpg"
        },

{
  title:"العقرب 6 (خلف القناع)",
  author:"نبيل فاروق",
  link:"العقرب 6.pdf",
  image:"https://diwanegypt.com/wp-content/uploads/2021/07/9789778200775.jpg"
        },



{
  title:"أرض زيكولا 2 (أماريتا)",
  author:"عمرو عبدالحميد",
  link:"أماريتا.pdf",
  image:"https://tse1.mm.bing.net/th/id/OIP.alRsBbaYZXRXSkoBaK1xXwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
       , },

        {
          title:"أرض زيكولا 3 (وادي الذئاب المنسية)",
          author:"عمرو عبدالحميد",
          link:"وادي الذئاب المنسية.pdf",
          image:"https://tse4.mm.bing.net/th/id/OIP.PnprB90Wunom0VZ1nq3YcwHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
       , },
       //series ameel
    ///////////////
       {
  title:"الكود السري",
  author:"نبيل فاروق",
  link:"العميل السري/001 الكود السري.pdf",
  image:"https://assets.asfar.io/uploads/2020/11/1-%D8%A7%D9%84%D9%83%D9%88%D8%AF-%D8%A7%D9%84%D8%B3%D8%B1%D9%8A.jpg"
        },

{
  title:"صفر على عشر",
  author:"نبيل فاروق",
  link:"العميل السري/002 صفر على عشر.pdf",
  image:"https://tse2.mm.bing.net/th/id/OIP._SVTppydyNN91eJltzgnpAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },

{
  title:"صفر صفران ثلاثة اصفار",
  author:"نبيل فاروق",
  link:"العميل السري/003 صفر صفران ثلاثة اصفار.pdf",
  image:"https://tse4.mm.bing.net/th/id/OIP.rcCgi_3whvPrUxKRRAi1PgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },

{
  title:"ساعة الصفر",
  author:"نبيل فاروق",
  link:"العميل السري/004 ساعة الصفر.pdf",
  image:"https://assets.asfar.io/uploads/2020/11/4-%D8%B3%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%B5%D9%81%D8%B1.jpg"
        },

{
  title:"صفر الأصفار",
  author:"نبيل فاروق",
  link:"العميل السري/005 صفر الأصفار.pdf",
  image:"https://assets.asfar.io/uploads/2020/11/5-%D8%B5%D9%81%D8%B1-%D8%A7%D9%84%D8%A3%D8%B5%D9%81%D8%A7%D8%B1-300x422.jpg"
        },

{
  title:"صفر بوند",
  author:"نبيل فاروق",
  link:"العميل السري/006 صفر بوند.pdf",
  image:"https://assets.asfar.io/uploads/2020/11/6-%D8%B5%D9%81%D8%B1-%D8%A8%D9%88%D9%86%D8%AF.jpg"
        },

{
  title:"صفر على الشمال",
  author:"نبيل فاروق",
  link:"العميل السري/007 صفر على الشمال.pdf",
  image:"https://tse3.mm.bing.net/th/id/OIP.FwjO53FgJop1kyQAM0Px1QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
    //series moghameron




































    //
    {
    "title": "لغز الكوخ المحترق",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/001%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%83%D9%88%D8%AE%20%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D8%B1%D9%82.pdf",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-TgzUO9AinvvzVBJ0NLHUwzBd40mC_2-Og&s"
  },
  {
    "title": "لغز البيت الخفي",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/002%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%A8%D9%8A%D8%AA%20%D8%A7%D9%84%D8%AE%D9%81%D9%89.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/8/87/%D8%BA%D9%84%D8%A7%D9%81_%D9%83%D8%AA%D8%A7%D8%A8_%D9%84%D8%BA%D8%B2_%D8%A7%D9%84%D8%A8%D9%8A%D8%AA_%D8%A7%D9%84%D8%AE%D9%81%D9%8A_-_002.png"
  },
  {
    "title": "لغز العقد المفقود",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/003%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B9%D9%82%D8%AF%20%D8%A7%D9%84%D9%85%D9%81%D9%82%D9%88%D8%AF.pdf",
    "image": "https://bookbuzz.store/cdn/shop/products/p_202207281207_0013.jpg?v=1659273396"
  },
  {
    "title": "الشبح الأسود",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/004%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B4%D8%A8%D8%AD%20%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/a/ae/%D8%BA%D9%84%D8%A7%D9%81_%D9%83%D8%AA%D8%A7%D8%A8_%D9%84%D8%BA%D8%B2_%D8%A7%D9%84%D8%B4%D8%A8%D8%AD_%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF_-_004.png"
  },
  {
    "title": "لغز المنزل رقم ٩٨",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/005%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%20%D8%B1%D9%82%D9%85%20%D9%A9%D9%A8.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/b/b6/%D8%BA%D9%84%D8%A7%D9%81_%D9%83%D8%AA%D8%A7%D8%A8_%D9%84%D8%BA%D8%B2_%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84_%D8%B1%D9%82%D9%85_98_-_005.png"
  },
  {
    "title": "لغز الألغاز",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/006%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%A3%D9%84%D8%BA%D8%A7%D8%B2.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.xuri0yGCMPSAx4Rry04N_gHaJ-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز الرسائل الغامضة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/007%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D8%A6%D9%84%20%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%B6%D8%A9.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/49534.jpg"
  },
  {
    "title": "لغز الأمير المخطوف",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/008%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D8%AE%D8%B7%D9%88%D9%81.pdf.pdf",
    "image": "https://www.noor-book.com/publice/covers_cache_webp/19/f/c/7/45c09d228ffc72aab203ec01eb5d3051.jpg.webp"
  },
  {
    "title": "لغز القفاز الأحمر",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/009%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%82%D9%81%D8%A7%D8%B2%20%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1.pdf",
    "image": "https://m.media-amazon.com/images/I/516pi98BmrL.jpg"
  },
  {
    "title": "لغز القصر الأخضر",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/010%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%82%D8%B5%D8%B1%20%D8%A7%D9%84%D8%A3%D8%AE%D8%B6%D8%B1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.hbIB1QAbV7sbF6wXdvZHhgHaK1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز اللص الشبح",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/011%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%84%D8%B5%20%D8%A7%D9%84%D8%B4%D8%A8%D8%AD.pdf",
    "image": "https://alqarii.com/uploads/book/102019/Nu7gqiiaK7e-5C1ZnEMtC-LywAgb8rGXUeksTcLFCfPmBdcRs8--sbxO4BAp-2rY2WMTjLcesB4nPgGVLoU4bg.jpg"
  },
  {
    "title": "لغز اختفاء الخنفس",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/012%20%D9%84%D8%BA%D8%B2%20%D8%A7%D8%AE%D8%AA%D9%81%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AE%D9%86%D9%81%D8%B3.pdf",
    "image": "https://kolalkotob.com/media/imgs/books/%D9%84%D8%BA%D8%B2%20%D8%A7%D8%AE%D8%AA%D9%81%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AE%D9%86%D9%81%D8%B3%20:%20%D8%B3%D9%84%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9%20-%20%D9%83%D8%AA%D8%A7%D8%A8%20-%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%B3%D8%A7%D9%84%D9%85%20-%20%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%83%D9%84%20%D8%A7%D9%84%D9%83%D8%AA%D8%A8"
  },
  {
    "title": "لغز سرقة البنسيون",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/013%20%D9%84%D8%BA%D8%B2%20%D8%B3%D8%B1%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D9%86%D8%B3%D9%8A%D9%88%D9%86.pdf",
    "image": "https://kolalkotob.com/media/imgs/books/%D9%84%D8%BA%D8%B2%20%D8%B3%D8%B1%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D9%86%D8%B3%D9%8A%D9%88%D9%86%20:%20%D8%B3%D9%84%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9%20-%20%D9%83%D8%AA%D8%A7%D8%A8%20-%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%B3%D8%A7%D9%84%D9%85%20-%20%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%83%D9%84%20%D8%A7%D9%84%D9%83%D8%AA%D8%A8"
  },
  {
    "title": "لغز الوثائق السرية",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/014%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%88%D8%AB%D8%A7%D8%A6%D9%82%20%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D8%A9.pdf",
    "image": "https://th.bing.com/th/id/R.2b9ebde9c7cdc95bb2b6db670548e130?rik=JKKGJnY6JC6aig&riu=http%3a%2f%2fbookbuzz.store%2fcdn%2fshop%2fproducts%2fAVvXsEjnZdfYgj09MJyNRydqRhXnPDhAjDeg3tDM9LtCrdOQok3FgnbNS2p94d_tKL9WwuiyLQriTx3Y46cvW0julZqLQY6el9mtA1vxbAPfE5ylw-UToWm9OYCXSPhE1VIfB8zUiX7OwM6KOHectVcrGZuAI5Be-7HLkn4IvIC81cNiGMVZUOD_1200x1200.jpg%3fv%3d1636818870&ehk=XVbgAKKBwSLMRaWbpk3pRkasgaAYdZ7rfkTRnZx0g6A%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز الجزيرة المهجورة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/015%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D9%87%D8%AC%D9%88%D8%B1%D8%A9.pdf",
    "image": "https://www.noor-book.com/publice/covers_cache_webp/19/f/d/9/72bdb261b2fd92efe126130c4007f0b6.jpg.webp"
  },
  {
    "title": "لغز الحقيبة السوداء",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/016%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%AD%D9%82%D9%8A%D8%A8%D8%A9%20%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.aBZTMjhtnInEVWg8JeEyVQHaKf?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز التسعة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/017%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D8%A9.pdf",
    "image": "https://kolalkotob.com/media/imgs/books/%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D8%A9%20-%20%D8%B3%D9%84%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9%20-%20%D8%B1%D9%88%D8%A7%D9%8A%D8%A9%20-%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%B3%D8%A7%D9%84%D9%85%20-%20%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%83%D9%84%20%D8%A7%D9%84%D9%83%D8%AA%D8%A8"
  },
  {
    "title": "لغز الغابة الملعونة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/018%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%BA%D8%A7%D8%A8%D8%A9%20%D8%A7%D9%84%D9%85%D9%84%D8%B9%D9%88%D9%86%D8%A9.pdf",
    "image": "https://kolalkotob.com/public/media/imgs/books/%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%BA%D8%A7%D8%A8%D8%A9%20%D8%A7%D9%84%D9%85%D9%84%D8%B9%D9%88%D9%86%D8%A9%20:%20%D8%B3%D9%84%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9%20-%20%D9%83%D8%AA%D8%A7%D8%A8%20-%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%B3%D8%A7%D9%84%D9%85%20-%20%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%83%D9%84%20%D8%A7%D9%84%D9%83%D8%AA%D8%A8"
  },
  {
    "title": "لغز وادي الذئاب",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/019%20%D9%84%D8%BA%D8%B2%20%D9%88%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B0%D8%A6%D8%A7%D8%A8.pdf",
    "image": "https://al-balsam.com/cdn/shop/files/6c286220345d63708e7fd3bd68df1457.jpg?v=1692795756&width=1946"
  },
  {
    "title": "لغز الرسالة الطائرة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/020%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D8%B1%D8%A9.pdf",
    "image": "https://blogger.googleusercontent.com/img/a/AVvXsEgwLnFyfddBQEOyjPYvNucYokrLDBBkH3GqpuhAs-JJNrIsF6I9eB0zuUfkppWUkA05qY4sjLKWlKoGhiF1dZcI7dEiLmrP_qYSzOnbiM8f4dVHvYg_yDrhkMbcczwYwsGgY7Pakdq0tjKkVE2j8InqdjzAF77F8Jwt1dN3T_Z5ZFxOzHikiZEAMQ=w470-h640"
  },
  {
    "title": "لغز الشيء المجهول",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/021%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B4%D9%8A%D8%A1%20%D8%A7%D9%84%D9%85%D8%AC%D9%87%D9%88%D9%84.pdf",
    "image": "https://th.bing.com/th/id/R.473a26e343a6ffc0edb5075a697ad62e?rik=GWSNADNI0NFNOg&riu=http%3a%2f%2fglobal.al-balsam.com%2fcdn%2fshop%2ffiles%2f49556.jpg%3fv%3d1693121974&ehk=1NCbDVris5xcfdSGITUZ1LCWuweq4h3BEjuKOM0NqLk%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز المهرب الدولي",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/022%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%85%D9%87%D8%B1%D8%A8%20%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A.pdf",
    "image": "https://kolalkotob.com/media/imgs/books/%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%85%D9%87%D8%B1%D8%A8%20%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%20:%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9%20-%20%D9%83%D8%AA%D8%A7%D8%A8%20-%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%B3%D8%A7%D9%84%D9%85%20-%20%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%83%D9%84%20%D8%A7%D9%84%D9%83%D8%AA%D8%A8.jpeg"
  },
  {
    "title": "لغز الرجل الثاني",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/023%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B1%D8%AC%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.A_wrUFrCbmeOjGaelSyS2gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز المتحف",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/024%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D9%81.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.8dLxqT-6a1gL3YsvYdoQZQHaKh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز قصر الصبار",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/025%20%D9%84%D8%BA%D8%B2%20%D9%82%D8%B5%D8%B1%20%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.kkWxo6if5Jex7Ou0q7ANIgHaKH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز ورقة الكوتشينة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/026%20%D9%84%D8%BA%D8%B2%20%D9%88%D8%B1%D9%82%D8%A9%20%D8%A7%D9%84%D9%83%D9%88%D8%AA%D8%B4%D9%8A%D9%86%D8%A9.pdf",
    "image": "https://th.bing.com/th/id/R.86cefa52d16c5b27d0a3e74946555e37?rik=oNcCohhibalzyg&riu=http%3a%2f%2fal-balsam.com%2fcdn%2fshop%2ffiles%2f49682.jpg%3fv%3d1734619338&ehk=8rf7HGNKYczLB00HuSj7aeKhJxbLiZXO1BezyLuFe%2bc%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز الشارع المسدود",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/027%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D9%85%D8%B3%D8%AF%D9%88%D8%AF.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/49557.jpg"
  },
  {
    "title": "لغز الساق الخشبية",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/028%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B3%D8%A7%D9%82%20%D8%A7%D9%84%D8%AE%D8%B4%D8%A8%D9%8A%D8%A9.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.LPOY1fiPKXM2hTWTOYatzgHaKH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز الموسيقار الصغير",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/029%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1.pdf",
    "image": "https://kolalkotob.com/media/imgs/books/%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%20:%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9%20-%20%D9%83%D8%AA%D8%A7%D8%A8%20-%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%B3%D8%A7%D9%84%D9%85%20-%20%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%83%D9%84%20%D8%A7%D9%84%D9%83%D8%AA%D8%A8.jpeg"
  },
  {
    "title": "لغز القرد",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/030%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%82%D8%B1%D8%AF.pdf",
    "image": "https://global.al-balsam.com/cdn/shop/files/AVvXsEj2fXgYBkcTUAFY24mrqQHMmDS-nuXBnpJVtyWQ86QyVP_rkx2kE_xBVVI30u2OUw9MbX4weBcSQklK658d6-ODpqh-hXw2hQAp3QBUQV_JC-amoQFub4Kic961S82ZG9KhHNOmhL_qH2RkI9mvM7gfxatMH31Fhqwgd9wscITHhAHZGPv.webp?v=1699263008&width=1946"
  },
  {
    "title": "لغز الفارس المقنع",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/031%20-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%81%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D9%85%D9%82%D9%86%D8%B9.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.FSDcuL1DpQ1idjoggpZaQgHaKG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز كلب البحر",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/032%20-%20%D9%84%D8%BA%D8%B2%20%D9%83%D9%84%D8%A8%20%D8%A7%D9%84%D8%A8%D8%AD%D8%B1.pdf",
    "image": "https://global.al-balsam.com/cdn/shop/files/49663.jpg?v=1693120719&width=1946"
  },
  {
    "title": "لغز المدينة العائمة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/033%20-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D8%A6%D9%85%D8%A9.pdf",
    "image": "https://al-balsam.com/cdn/shop/files/7f8786e84dee4ae6e1a5e53ecd2f435d.jpg?v=1692795484&width=1946"
  },
  {
    "title": "لغز الساعة السادسة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/034%20-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B3%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%D8%A9.pdf",
    "image": "https://th.bing.com/th/id/R.56c1a34a8f302b5f76443fc0356ea709?rik=Q51hwOw%2bT%2f2u%2bg&riu=http%3a%2f%2fal-balsam.com%2fcdn%2fshop%2ffiles%2fp_202207281207_0004_1400x_c7c4844b-4f8f-4949-8e86-0721acd21d9b.webp%3fv%3d1699262317&ehk=0j79HmQzyxbV5Vdbp79qAAJsYQ1D0M%2fFypUtv8cSGfk%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز الرجل الذي طار",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/039%20-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B1%D8%AC%D9%84%20%D8%A7%D9%84%D8%B0%D9%8A%20%D8%B7%D8%A7%D8%B1.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/49533.jpg"
  },
  {
    "title": "لغز القبر الملكي",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/040%20-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%82%D8%A8%D8%B1%20%D8%A7%D9%84%D9%85%D9%84%D9%83%D9%8A.pdf",
    "image": "https://th.bing.com/th/id/R.a548009c99e58598f95d013e7ee8cc85?rik=vVP%2bfdcdqJM%2fGA&riu=http%3a%2f%2fal-balsam.com%2fcdn%2fshop%2ffiles%2fAVvXsEgBYVgSvoTOkKQpv-PGgy07PNTG8Y5jyhvJqhMCJ4wOPsWvgedWHKdDp0nM28g_IDSda1brk6nyALIrI42h9lK3Qa5NbkJII25RxCbZl2RotlHbtcdbNKlMMkvm13SxGoN7z2p-JDZtGvKYf7UhbtAvn4QinNT-ghVD8MNDPIJTK6sqX5T.webp%3fv%3d1734619250&ehk=Zkv69rY7Oys7ewfiZEzI0jJidMZgnT2COxalIPsYInU%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز ملك الشطرنج",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/041%20-%20%D9%84%D8%BA%D8%B2%20%D9%85%D9%84%D9%83%20%D8%A7%D9%84%D8%B4%D8%B7%D8%B1%D9%86%D8%AC.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.J5mt7Qe64QFWqroqmp_bqAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز الفهود السبعة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/042%20-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%81%D9%87%D9%88%D8%AF%20%D8%A7%D9%84%D8%B3%D8%A8%D8%B9%D8%A9.pdf",
    "image": "https://th.bing.com/th/id/R.3d0cae2b3a03cc9b502ffcb966b5a018?rik=iuFIMwiS%2feFU0w&riu=http%3a%2f%2fbookbuzz.store%2fcdn%2fshop%2fproducts%2fAVvXsEjNz2GQKj0nxY0EshU5XcPC_uaBMTdpta_OdKMhN56lkbNtcs4plM8O6d5eEUzx5k5D-LQdYvqUYB3eu56DOwc8L3dkvACmFRbYiJ5yh-9f4f4a4Eu-7AIoJAjRfm7rVrXalO59tEXdsyn33rXduA2oQVE-rU4O82tzop_B0CoRHtIZdmh_1200x1200.jpg%3fv%3d1636818903&ehk=SbA9OBk0TZekg1ogxZYdxF4aTuH0HhTkuOAvviIzMOI%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز عصابة التزييف",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/043%20-%20%D9%84%D8%BA%D8%B2%20%D8%B9%D8%B5%D8%A7%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B2%D9%8A%D9%8A%D9%81.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.aKWGeQt4Nwtcdh7f-DxZfgHaKh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز زعيم العصابة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/044%20-%20%D9%84%D8%BA%D8%B2%20%D8%B2%D8%B9%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%B5%D8%A7%D8%A8%D8%A9.pdf",
    "image": "https://kolalkotob.com/public/media/imgs/books/%D9%84%D8%BA%D8%B2%20%D8%B2%D8%B9%D9%8A%D9%85%20%D8%A7%D9%84%D8%B9%D8%B5%D8%A7%D8%A8%D8%A9%20-%20%D8%B3%D9%84%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9%20-%20%D8%B1%D9%88%D8%A7%D9%8A%D8%A9%20-%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%B3%D8%A7%D9%84%D9%85%20-%20%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%83%D9%84%20%D8%A7%D9%84%D9%83%D8%AA%D8%A8"
  },
  {
    "title": "لغز الطفل المخطوف",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/049%20-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B7%D9%81%D9%84%20%D8%A7%D9%84%D9%85%D8%AE%D8%B7%D9%88%D9%81.pdf",
    "image": "https://wamdabook.com/media/books/image/23710.2019-12-14.1576324144.webp"
  },
  {
    "title": "لغز الثعبان الأعمى",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/050%20-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%AB%D8%B9%D8%A8%D8%A7%D9%86%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D9%89.pdf",
    "image": "https://th.bing.com/th/id/R.9e2a4ba6c9f6d5cc909beef891444009?rik=pGI1WnvVsohj9A&riu=http%3a%2f%2fbookbuzz.store%2fcdn%2fshop%2fproducts%2fAVvXsEiy5fw4diukM2X9tWUuw4TBfwjz0SQ2cpwjq7dySejsbKSjdyXyOGTLOu8kBSZKB2GjN6rILauNE1l6aiCEXrO4hfWhYZwpeQMDwhsaAh_vxX2Hzu4FPZm8ILZ2ZKkq0TbZnvHCH_t8Zqw6iUAhKLrZRtJkFQzwZFveKG9GWB3j13fkrrX_1200x1200.jpg%3fv%3d1636818908&ehk=n3Ck8M%2bsLQvSO0MJn82b5zIlf1XYOdeE3iOOFnh%2btQE%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز رجل الصندوق",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/051%20-%20%D9%84%D8%BA%D8%B2%20%D8%B1%D8%AC%D9%84%20%D8%A7%D9%84%D8%B5%D9%86%D8%AF%D9%88%D9%82.pdf",
    "image": "https://al-balsam.com/cdn/shop/files/AVvXsEhJflgi4zRUrUuw3eWzKYPPbiigbLB-9R2M7QLuw3MnzYTdPaV-MlJTJUvdXaSoylCsj7vrqt1zTssqrf9a3zazIl3Fjkr3YVC6_NTM9atYjQ5eT1o1ooR5-p8ADNZt3S3l2Do1cwuIu2WYvhXm7J4Rnd2JhYRoHjrgi30huA9cAvqWz1Q.webp?v=1699262536&width=1946"
  },
  {
    "title": "لغز أبو طرطور",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/052-%20%D9%84%D8%BA%D8%B2%20%D8%A3%D8%A8%D9%88%20%D8%B7%D8%B1%D8%B7%D9%88%D8%B1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.u6e91NgJ4lYfGWVyakdWdgHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز عين السمكة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/053-%20%D9%84%D8%BA%D8%B2%20%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%D8%A9.pdf",
    "image": "https://th.bing.com/th/id/R.a45444b41946e2d4046c4341c7a12fbf?rik=gvoMMo8frun8Nw&riu=http%3a%2f%2fbookbuzz.store%2fcdn%2fshop%2fproducts%2f202111131134_0009_1200x1200.jpg%3fv%3d1636818914&ehk=jgyrH3AwIjlFrUGKLa0D6hDY0cGEBs9AwNsePQFQ%2fiQ%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز عصابة يوم الخميس",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/054-%20%D9%84%D8%BA%D8%B2%20%D8%B9%D8%B5%D8%A7%D8%A8%D8%A9%20%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D8%AE%D9%85%D9%8A%D8%B3.pdf",
    "image": "https://th.bing.com/th/id/R.176ef7fb74d7f570a56985fd344ed759?rik=xAmfKpHpUShIHg&riu=http%3a%2f%2fal-balsam.com%2fcdn%2fshop%2ffiles%2f2b83a2bd6ce435f19f8fb8f1efcfe3ea.jpg%3fv%3d1734619373&ehk=%2fYtZafm%2bpshZqTGMNX26pV%2bvHZdNPzAuNKwnFqAn7xc%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز الحقيبة الدبلوماسية",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/055-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%AD%D9%82%D9%8A%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AF%D8%A8%D9%84%D9%88%D9%85%D8%A7%D8%B3%D9%8A%D8%A9.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/cccccccc-202404061314-page-0001-652e3d62-02e6-4fad-9aca-9dff3e50e835-1400x.webp"
  },
  {
    "title": "لغز جاسوس السويس",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/056-%20%D9%84%D8%BA%D8%B2%20%D8%AC%D8%A7%D8%B3%D9%88%D8%B3%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/cccccccc-202404061314-page-0002-43412795-77f6-4261-bf2b-7a4437d0db70-1400x.webp"
  },
  {
    "title": "لغز الساحر العظيم",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/059-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AD%D8%B1%20%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85.pdf",
    "image": "https://global.al-balsam.com/cdn/shop/files/89f1e9c12777d615c3197a2479be23a3.jpg?v=1692795848"
  },
  {
    "title": "لغز شاطئ السموم",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/060-%20%D9%84%D8%BA%D8%B2%20%D8%B4%D8%A7%D8%B7%D8%A6%20%D8%A7%D9%84%D8%B3%D9%85%D9%88%D9%85.pdf",
    "image": "https://al-balsam.com/cdn/shop/files/45c359c766cb8fad776d83e078d8738f.jpg?v=1692795332&width=1946"
  },
  {
    "title": "لغز الفانلة الحمراء",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/061-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%81%D8%A7%D9%86%D9%84%D8%A9%20%D8%A7%D9%84%D8%AD%D9%85%D8%B1%D8%A7%D8%A1.pdf",
    "image": "https://bookbuzz.store/cdn/shop/products/AVvXsEgg_OBAi1-TSdFrQX7X-3gwGLmxQKJonlWEEAcO8-52p5L1iDTnjQ2Pgj_FSASzvKMeDqeJJGP63YXk7ZJ2i9oht0vdbG0XOW7KWU-diRrxZLNJaSTMSm01UEXygTIRDrXE5DurIBzGyQqJYgszJipKHXA6-JYhuikHl6YBI42CMr4J9PX_1400x.jpg?v=1636818921"
  },
  {
    "title": "لغز العقل الالكتروني",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/062-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B9%D9%82%D9%84%20%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A.pdf",
    "image": "https://m.media-amazon.com/images/I/51FvoYWWHcL.jpg"
  },
  {
    "title": "لغز الهارب الصغير",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/063-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%87%D8%A7%D8%B1%D8%A8%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/49613.jpg"
  },
  {
    "title": "لغز الأخرس",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/068-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%A3%D8%AE%D8%B1%D8%B3.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/416083507_862524722547800_8350401240917607112_n_360x.jpg"
  },
  {
    "title": "لغز غابة الشيطان",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/069-%20%D9%84%D8%BA%D8%B2%20%D8%BA%D8%A7%D8%A8%D8%A9%20%D8%A7%D9%84%D8%B4%D9%8A%D8%B7%D8%A7%D9%86.pdf",
    "image": "https://th.bing.com/th/id/R.b30ae3e87f60571a06e8b4233473a611?rik=TEf1o0eiqx75aA&riu=http%3a%2f%2fglobal.al-balsam.com%2fcdn%2fshop%2ffiles%2f202111131147_0001_1400x_27ee7c62-b9bf-4146-8605-7c1b87adbda1.webp%3fv%3d1699261795&ehk=hvkK8tGzP6J2blZoAdNHLe8c2yqaecBKZ%2bV%2bddAXqHg%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز الضباب الغامض",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/070-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B6%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%B6.pdf",
    "image": "https://th.bing.com/th/id/R.e8ea1f0dab2d7d8aa19ec58bf9f3d6d8?rik=1gNP7DLlR4%2bcKQ&riu=http%3a%2f%2fal-balsam.com%2fcdn%2fshop%2ffiles%2f49562.jpg%3fv%3d1734619391&ehk=PaCYJhl0oLJAaYE6u%2bC60XxtuVeARHIFNotTIlSac3A%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز البيضة المجوفة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/071-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A9%20%D8%A7%D9%84%D9%85%D8%AC%D9%88%D9%81%D8%A9.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.HwNv7z-jnvXujJkan5mvYgHaKh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز عبيط القرية",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/072-%20%D9%84%D8%BA%D8%B2%20%D8%B9%D8%A8%D9%8A%D8%B7%20%D8%A7%D9%84%D9%82%D8%B1%D9%8A%D8%A9.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.G5w_Wq0XSD-7Put7nlwrcwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز العنكبوت الذهبي",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/075-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B9%D9%86%D9%83%D8%A8%D9%88%D8%AA%20%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/cccccccc_202404061314_page-0004_1400x.jpg"
  },
  {
    "title": "لغز الكلب ذو الرأسين",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/076-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%83%D9%84%D8%A8%20%D8%B0%D9%88%20%D8%A7%D9%84%D8%B1%D8%A3%D8%B3%D9%8A%D9%86.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.GYeESEvHs_oreNuee55vVgHaKZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز الزجاجة الصفراء",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/077%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%D8%A9%20%D8%A7%D9%84%D8%B5%D9%81%D8%B1%D8%A7%D8%A1.pdf",
    "image": "https://th.bing.com/th/id/R.4a0689edeffa90c766bdaec398b5d663?rik=%2fQO2aakGUgQppw&riu=http%3a%2f%2fbookbuzz.store%2fcdn%2fshop%2fproducts%2fAVvXsEgkzMBR6K5T5b9aslGhcTyn41ew64w4YMCOQPw5fgcbMoE_LBkDDmzpbkCFLq6NjXq1WzBnXO1TNGqGW4l04JmDWqNMYDipHQ57rMf-W3insBYNMZaZlcuHwsxiRHyViICzisF9t7pnROU70aBhie3sottkuzTnSFb5NI_dyV0o3YWIcMG_1200x1200.jpg%3fv%3d1636818936&ehk=YOLNPjcv4YU55j7SHtkXpvbbUB%2fWWAb5vtQYhTf5oLg%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز المدينة الغارقة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/078-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%BA%D8%A7%D8%B1%D9%82%D8%A9.pdf",
    "image": "https://cdn.shopify.com/s/files/1/0552/1532/5392/products/AVvXsEgCJODSpBCCIb2mxKsLVhGI57pwfZ0vHdmNpQIXpLMqTxL1cTooAY1jgoNuz5QqkMh4eYuXe8ZEgE1EhDA5dOwLV5fefvCNoqTa2UBf4uNce4e3zniMDyflORkSzWNiXwA0VCKUCPgH0AUxbMdOtUpr63imQi-MPw03asb7VhySLt2guPb_700x@2x.jpg?v=1636818938"
  },
  {
    "title": "لغز وادي المساخيط",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/079-%20%D9%84%D8%BA%D8%B2%20%D9%88%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AE%D9%8A%D8%B7.pdf",
    "image": "https://th.bing.com/th/id/R.9a83c05b562722b3a951e2df04087f0c?rik=jmw8KWrQ1Eh9lQ&riu=http%3a%2f%2fglobal.al-balsam.com%2fcdn%2fshop%2ffiles%2ff9ab4d6ec20a937ee5aa12ad5b64f149.jpg%3fv%3d1734619384&ehk=lWwC8c%2beKWEZeb7LeiAnLC4hINpm18rapNl7qsyX02Q%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز الرجل الأزرق",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/080-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B1%D8%AC%D9%84%20%D8%A7%D9%84%D8%A3%D8%B2%D8%B1%D9%82.pdf",
    "image": "https://al-balsam.com/cdn/shop/files/c112088fb5e3d67b92f26ecdd1d36b87.jpg?v=1693123793&width=1946"
  },
  {
    "title": "لغز العملاق",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/081-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D9%82.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.mszKqiLBDRG-x5cujFenLAHaKh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز الألف وجه",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/084-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%A3%D9%84%D9%81%20%D9%88%D8%AC%D9%87.pdf",
    "image": "https://bookbuzz.store/cdn/shop/products/202111131141_0001_700x.jpg?v=1636818946"
  },
  {
    "title": "لغز مزرعة الرياح",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/087-%20%D9%84%D8%BA%D8%B2%20%D9%85%D8%B2%D8%B1%D8%B9%D8%A9%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%AD.pdf",
    "image": "https://kolalkotob.com/media/imgs/books/%D9%84%D8%BA%D8%B2%20%D9%85%D8%B2%D8%B1%D8%B9%D8%A9%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%AD%20:%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9%20-%20%D9%83%D8%AA%D8%A7%D8%A8%20-%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%B3%D8%A7%D9%84%D9%85%20-%20%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D9%83%D9%84%20%D8%A7%D9%84%D9%83%D8%AA%D8%A8.jpeg"
  },
  {
    "title": "لغز الزائر الغامض",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/089-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B2%D8%A7%D8%A6%D8%B1%20%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%B6.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/AVvXsEgver7Lw0i51gKudiRuYQ4UBPIRDjp2NVap6z-grAPt8PeU1wxpw8Xie6WYaDAz_VRHFXZfnjYnBj72qSlbAa6mIa_JhOG8qaihshBS5T9vb_uvPdp9u6vWmJWd6m-cGcZffAKDIvmPUD4QwNFeD_93iZuNrNnnaldCcEi-shWHn57VIb0_1400x.jpg"
  },
  {
    "title": "لغز العميل السري",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/091-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B9%D9%85%D9%8A%D9%84%20%D8%A7%D9%84%D8%B3%D8%B1%D9%8A.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/5d49ab866dfd6e91c8aec73c0d2686e1.jpg"
  },
  {
    "title": "لغز الدائرة الخضراء",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/093-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AE%D8%B6%D8%B1%D8%A7%D8%A1.pdf",
    "image": "https://th.bing.com/th/id/R.57bd68e7497d21d483852d81ad2b519a?rik=F6%2fy6mjZLhevMw&riu=http%3a%2f%2fbookbuzz.store%2fcdn%2fshop%2fproducts%2fAVvXsEgieTMtPSDp3pgN3lDAOtM7CWLnmsfJB6A4lkbbxsCegkSlI_i9xztC9A-9ZiQzAwjO-Kp1lmKqfNVJ5exNVB0BnxfoU1rr1v8OXXBYMg4IU9KG1taZM3WW0hWA3I8jCIQv2lx42MpYvs2EawA2CRwa-sYqRPeoIo-eTXHe9wcQeavXn3G_1200x1200.jpg%3fv%3d1636818952&ehk=X7dPnZWSPY8Ms848iI1ZD5Q47lX4xFhlWEazG4A1L%2bY%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "لغز الفيلم الملون",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/095-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%81%D9%8A%D9%84%D9%85%20%D8%A7%D9%84%D9%85%D9%84%D9%88%D9%86.pdf",
    "image": "https://wamdabook.com/media/books/image/65408.2019-12-14.1576333152.webp"
  },
  {
    "title": "لغز بلا نهاية",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/101-%20%D9%84%D8%BA%D8%B2%20%D8%A8%D9%84%D8%A7%20%D9%86%D9%87%D8%A7%D9%8A%D8%A9.pdf",
    "image": "https://al-balsam.com/cdn/shop/files/49622.jpg?v=1693120548&width=1946"
  },
  {
    "title": "لغز الشاويش فرقع",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/106-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B4%D8%A7%D9%88%D9%8A%D8%B4%20%D9%81%D8%B1%D9%82%D8%B9.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.2PKexaxXRiDhU3Rt-TaaVgHaKX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز بائع البالونات",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/116-%20%D9%84%D8%BA%D8%B2%20%D8%A8%D8%A7%D8%A6%D8%B9%20%D8%A7%D9%84%D8%A8%D8%A7%D9%84%D9%88%D9%86%D8%A7%D8%AA.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.SdF4KWzGiSNoEbFg3jsGZQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز الكاميرا السرية",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/126-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%8A%D8%B1%D8%A7%20%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D8%A9.pdf",
    "image": "https://global.al-balsam.com/cdn/shop/files/49588.jpg?v=1693121705&width=1946"
  },
  {
    "title": "لغز ثعلب الصحراء",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/129-%20%D9%84%D8%BA%D8%B2%20%D8%AB%D8%B9%D9%84%D8%A8%20%D8%A7%D9%84%D8%B5%D8%AD%D8%B1%D8%A7%D8%A1.pdf",
    "image": "https://sanadbooks.com/images/detailed/81/49625.jpg"
  },
  {
    "title": "لغز عباس الأقرع",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/130-%20%D9%84%D8%BA%D8%B2%20%D8%B9%D8%A8%D8%A7%D8%B3%20%D8%A7%D9%84%D8%A3%D9%82%D8%B1%D8%B9.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.8iGBGHFdZeHEnDckNpqxRAHaKj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز من الماضى",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/133-%20%D9%84%D8%BA%D8%B2%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%A7%D8%B6%D9%89.pdf",
    "image": "https://www.neelwafurat.com/images/eg/abookstore/covers/normal/49/49675.jpg"
  },
  {
    "title": "لغز منتصف النهار",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/136-%20%D9%84%D8%BA%D8%B2%20%D9%85%D9%86%D8%AA%D8%B5%D9%81%20%D8%A7%D9%84%D9%86%D9%87%D8%A7%D8%B1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.5EQQe6qLwIbhl5cEK0nVBgHaKU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز الجاسوس الترانزستور",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/140-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%AC%D8%A7%D8%B3%D9%88%D8%B3%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D9%86%D8%B2%D8%B3%D8%AA%D9%88%D8%B1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.Rpp3Jv_RTv3oiTYT0CM9zgHaKb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز كذبة ابريل",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/144-%20%D9%84%D8%BA%D8%B2%20%D9%83%D8%B0%D8%A8%D8%A9%20%D8%A7%D8%A8%D8%B1%D9%8A%D9%84.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.Kv3M3gw6Wnv7_ffkfnhR3gHaKb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز حمام السباحة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/176-%20%D9%84%D8%BA%D8%B2%20%D8%AD%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%B3%D8%A8%D8%A7%D8%AD%D8%A9.pdf",
    "image": "https://bookbuzz.store/cdn/shop/products/AVvXsEiwrVheUSALas-9vXMJHBd3AXXXdXtB_oVggC8UdHczYJ7j0sm5Q5sIVcLoYK7uJlHzDecuvG3GGjikri1S8Djj6HoxMApQnfXltHuD-rTDNPrAInk56zrCIoUidX3LU8havnhHMZsMZcGTpDnjYj5zGi6uIr7fVGnrolMCzc5MdJqBCDx_1400x.jpg?v=1636818982"
  },
  {
    "title": "لغز الطيور المهاجرة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/182-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%AC%D8%B1%D8%A9.pdf",
    "image": "https://ketabpedia.com/wp-content/uploads/2019/04/brsf194.jpg"
  },
  {
    "title": "لغز البحر الميت",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/183-%20%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%20%D8%A7%D9%84%D9%85%D9%8A%D8%AA.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.OVD6Q8hJlVJI30R99ic0iwHaKH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز عصابة الأشباح",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/184-%20%D9%84%D8%BA%D8%B2%20%D8%B9%D8%B5%D8%A7%D8%A8%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B4%D8%A8%D8%A7%D8%AD.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.NLH_djSDH99MHGWlSMsNZgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "المغامرون الخمسة والرقم الناقص",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86_%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9_%D9%88%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%86%D8%A7%D9%82%D8%B5_%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86_%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9_188_45811.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.CXPxaCwQEbBf4K_YYN3BywHaKQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز السلعوة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D8%B3%D9%84%D8%B9%D9%88%D8%A9%20-%20%D8%B3%D9%84%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9_%20187_87795_Foulabook.com_.pdf",
    "image": "https://i.ibb.co/GhqKHLN/Whats-App-Image-2025-07-04-at-15-26-17-0fa3db57.jpg"
  },
  {
    "title": "لغز الفتاة المشلولة",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/%D9%84%D8%BA%D8%B2%20%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9%20%D8%A7%D9%84%D9%85%D8%B4%D9%84%D9%88%D9%84%D8%A9%20-%20185.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.L5__sQ5Zsnp9jbAaYfAjuQHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "لغز عمارة العفاريت",
    "author": "محمود سالم",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9/%D9%84%D8%BA%D8%B2%20%D8%B9%D9%85%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B9%D9%81%D8%A7%D8%B1%D9%8A%D8%AA%20-%20%D8%B3%D9%84%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%AE%D9%85%D8%B3%D8%A9_%20186_39412_Foulabook.com_%20(1).pdf",
    "image": "https://i.ibb.co/4nmMfV7X/20250704-1541-simple-compose-01jzaq6y3nf8fsf2rspx2afp0h.png"
  },

  //series mostaheel 





































  ///////////////////////////////////////
  //////////////////////////////////////
   {
    "title": "العدد 1 - الإختفاء الغامض",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/001%20%D8%A7%D9%84%D8%A3%D8%AE%D8%AA%D9%81%D8%A7%D8%A1%20%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%B6.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.z6cPzyQ6oI5mhqmLZZY4fAAAAA?r=0&rs=1&pid=ImgDetMain"
  },
  {
    "title": "العدد 2 - سباق الموت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/002%20%D8%B3%D8%A8%D8%A7%D9%82%20%D8%A7%D9%84%D9%85%D9%88%D8%AA.pdf",
    "image": "https://www.alarabimag.com/images/thumbs/22136.jpg"
  },
  {
    "title": "العدد 3 - قناع الخطر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/003%20%D9%82%D9%86%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AE%D8%B7%D8%B1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/3-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-%D9%82%D9%86%D8%A7%D8%B9-%D8%A7%D9%84%D8%AE%D8%B7%D8%B1.jpg"
  },
  {
    "title": "العدد 4 - صائد الجواسيس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/004%20%D8%B5%D8%A7%D8%A6%D8%AF%20%D8%A7%D9%84%D8%AC%D9%88%D8%A7%D8%B3%D9%8A%D8%B3.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.sHtmdX-uvy6N1nYl0akx_gHaLH?r=0&rs=1&pid=ImgDetMain"
  },
  {
    "title": "العدد 5 - الجليد الدامي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/004%20%D8%B5%D8%A7%D8%A6%D8%AF%20%D8%A7%D9%84%D8%AC%D9%88%D8%A7%D8%B3%D9%8A%D8%B3.pdf",
    "image": "https://cdn.abjjad.com/pub/02c723bd-a781-4714-9d6b-01201bb66e9b.png"
  },
  {
    "title": "العدد 6 - قتال الذئاب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/006%20%D9%82%D8%AA%D8%A7%D9%84%20%D8%A7%D9%84%D8%B0%D8%A6%D8%A7%D8%A8.pdf",
    "image": "https://cdn.abjjad.com/pub/41c76632-6c0a-4547-9071-eab851e6a34b.png"
  },
  {
    "title": "العدد 7 - بريق الماس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/007%20%D8%A8%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%85%D8%A7%D8%B3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.k-J4AVMnrmp71aU5c2OFNQAAAA?r=0&rs=1&pid=ImgDetMain"
  },
  {
    "title": "العدد 8 - غريم الشيطان",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/008%20%D8%BA%D8%B1%D9%8A%D9%85%20%D8%A7%D9%84%D8%B4%D9%8A%D8%B7%D8%A7%D9%86.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.GQyKHlq2eYCjB7Hdl1v3CgAAAA?r=0&rs=1&pid=ImgDetMain"
  },
  {
    "title": "العدد 9 - أنياب الثعبان",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/009%20%D8%A3%D9%86%D9%8A%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AB%D8%B9%D8%A8%D8%A7%D9%86.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.MIOAvQUhvo1LSBaSZVSqvQHaJj?r=0&rs=1&pid=ImgDetMain"
  },
  {
    "title": "العدد 10 - المال الملعون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/010%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D9%84%D8%B9%D9%88%D9%86.pdf",
    "image": "https://img.youm7.com/ArticleImgs/2020/12/9/56068-%D8%A7%D9%84%D9%85%D8%A7%D9%84-%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%86.JPG"
  },
  {
    "title": "العدد 11 - المؤامره الخفيه",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/011%20%D8%A7%D9%84%D9%85%D8%A4%D8%A7%D9%85%D8%B1%D9%87%20%D8%A7%D9%84%D8%AE%D9%81%D9%8A%D9%87.pdf",
    "image": "https://img.youm7.com/ArticleImgs/2020/12/9/59286-%D8%A7%D9%84%D9%85%D8%A4%D8%A7%D9%85%D8%B1%D8%A9-%D8%A7%D9%84%D8%AE%D9%81%D9%8A%D8%A9.JPG"
  },
  {
    "title": "العدد 12 - حلفاء الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/012%20%D8%AD%D9%84%D9%81%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B4%D8%B1.pdf",
    "image": "https://th.bing.com/th/id/OIP.K0v39oV7bpSyNM7KWCoy0gHaD4?w=195&h=102&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    "title": "العدد 13 - أرض الأهوال",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84/013%20%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D9%84.pdf",
    "image": "https://wamdabook.com/media/books/image/48385.2018-12-26.1545844887.webp"
  },
  {
    "title": "العدد 14 -  عملية مونت كارلو",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/014%20%D8%B9%D9%85%D9%84%D9%8A%D8%A9%20%D9%85%D9%88%D9%86%D8%AA%20%D9%83%D8%A7%D8%B1%D9%84%D9%88.pdf",
    "image": "https://s3.amazonaws.com/jarir-files/images/original/42014.jpg"
  },
  {
    "title": "العدد 15 - إمبراطورية السم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/015%20%D8%A5%D9%85%D8%A8%D8%B1%D8%A7%D8%B7%D9%88%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B3%D9%85.pdf",
    "image": "https://cdn.abjjad.com/pub/77983eda-47b8-4ee0-a3e6-573412980a7b.png"
  },
  {
    "title": "العدد 16 - الخدعة الاخيرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/016%20%D8%A7%D9%84%D8%AE%D8%AF%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%D8%A9.pdf",
    "image": "https://cdn.abjjad.com/pub/390f1cfe-db5c-4843-a322-205ce4b5d99b.png"
  },
  {
    "title": "العدد 17 - انتقام العقرب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/017%20%D8%A7%D9%86%D8%AA%D9%82%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%82%D8%B1%D8%A8.pdf",
    "image": "https://media.s-bol.com/NRn49BD29lML/vNLRvL/550x765.jpg"
  },
  {
    "title": "العدد 18 - قاهر العمالقة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/018%20%D9%82%D8%A7%D9%87%D8%B1%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9%20%D8%AC1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.UMCorIpSxy4gJMCcAljGGAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 19 - ابواب الجحيم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/019%20%D8%A7%D8%A8%D9%88%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/6fe9abd9-4c00-43cc-a74c-6077f25a0379-192X290.png"
  },
  {
    "title": "العدد 20 - ثعلب الثلوج",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/020%20%D8%AB%D8%B9%D9%84%D8%A8%20%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.GWMvZhPiEufK58ephlJsxAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 21 - مضيق النيران",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/021%20%D9%85%D8%B6%D9%8A%D9%82%20%D8%A7%D9%84%D9%86%D9%8A%D8%B1%D8%A7%D9%86.pdf",
    "image": "https://media.s-bol.com/gPxk1jONMnmj/rPvOM6/550x765.jpg"
  },
  {
    "title": "العدد 22 - أصابع الدمار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/022%20%D8%A3%D8%B5%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D8%B1.pdf",
    "image": "https://media.s-bol.com/7k75v6nQm2A8/mAN8YR/550x765.jpg"
  },
  {
    "title": "العدد - فارس اللؤلؤ",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/023%20%D9%81%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D9%84%D8%A4%D9%84%D8%A4.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.1BEJOZnYEaRIrB7Y641T6wHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 24 - الضباب القاتل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/024%20%D8%A7%D9%84%D8%B6%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D9%82%D8%A7%D8%AA%D9%84.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.1WFDuQR-p3lBgEVf2rawngAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 25 - الخنجر الفضى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/025%20%D8%A7%D9%84%D8%AE%D9%86%D8%AC%D8%B1%20%D8%A7%D9%84%D9%81%D8%B6%D9%89.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.Zmrz98tIGARa7MxypuWNsAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 26 - اخر الجبابرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/026%20%D8%A7%D8%AE%D8%B1%20%D8%A7%D9%84%D8%AC%D8%A8%D8%A7%D8%A8%D8%B1%D8%A9.pdf",
    "image": "https://media.s-bol.com/mPVo1Eko9Gr0/WZop6n/550x765.jpg"
  },
  {
    "title": "العدد 27 - الجوهرة السوداء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/027%20%D8%A7%D9%84%D8%AC%D9%88%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1.pdf",
    "image": "https://media.s-bol.com/7k75v6GzVlRr/vNLR88/550x765.jpg"
  },
  {
    "title": "العدد 28 - قلب العاصفة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/028%20%D9%82%D9%84%D8%A8%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%81%D8%A9.pdf",
    "image": "https://media.s-bol.com/3G05olmvqPRA/PPWgzA/550x765.jpg"
  },
  {
    "title": "العدد 29 - الصراع الشيطاني",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/029%20%D8%A7%D9%84%D8%B5%D8%B1%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B4%D9%8A%D8%B7%D8%A7%D9%86%D9%8A.pdf",
    "image": "https://cdn.abjjad.com/pub/26244f97-6a16-4758-9521-36b29e45d7ff.png"
  },
  {
    "title": "العدد 30 - الرمال المحرقة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/030%20%D8%A7%D9%84%D8%B1%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%AD%D8%B1%D9%82%D8%A9.pdf",
    "image": "https://media.s-bol.com/q9XvPjqYLwZ0/9lYG9J/550x765.jpg"
  },
  {
    "title": "العدد 31 - الخطوة الاولى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/031%20%D8%A7%D9%84%D8%AE%D8%B7%D9%88%D8%A9%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%89.pdf",
    "image": "https://media.s-bol.com/JRjmVZ46gMmv/wO72Kr/550x765.jpg"
  },
  {
    "title": "العدد 32 - خيط اللهب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/032%20%D8%AE%D9%8A%D8%B7%20%D8%A7%D9%84%D9%84%D9%87%D8%A8.pdf",
    "image": "https://media.s-bol.com/q9XvPjkARMpp/23D27M/550x765.jpg"
  },
  {
    "title": "العدد 33 - القوة أ",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/033%20%D8%A7%D9%84%D9%82%D9%88%D8%A9%20%D8%A3.pdf",
    "image": "https://cdn.abjjad.com/pub/ca519d87-ea08-494d-a1bb-0695e03fb208.png"
  },
  {
    "title": "العدد 34 - مارد الغضب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/034%20%D9%85%D8%A7%D8%B1%D8%AF%20%D8%A7%D9%84%D8%BA%D8%B6%D8%A8.pdf",
    "image": "https://media.s-bol.com/NRnqZxvZZ7Kv/6gKGBO/550x765.jpg"
  },
  {
    "title": "035 قراصنة الجو",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/035%20%D9%82%D8%B1%D8%A7%D8%B5%D9%86%D8%A9%20%D8%A7%D9%84%D8%AC%D9%88.pdf",
    "image": "https://media.s-bol.com/xmVlJkwokq19/wXABDR/550x765.jpg"
  },
  {
    "title": "العدد 36 - ذئب الاحراش",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/036%20%D8%B0%D8%A6%D8%A8%20%D8%A7%D9%84%D8%A7%D8%AD%D8%B1%D8%A7%D8%B4.pdf",
    "image": "https://cdn.abjjad.com/pub/6145a4b0-e3f9-40a0-9875-21ffc6f229bf.png"
  },
  {
    "title": "العدد 37 - مخلب الشيطان",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/037%20%D9%85%D8%AE%D9%84%D8%A8%20%D8%A7%D9%84%D8%B4%D9%8A%D8%B7%D8%A7%D9%86.pdf",
    "image": "https://media.s-bol.com/gPxk1j1BX7vG/RZ095R/550x765.jpg"
  },
  {
    "title": "العدد 38 - لعبة المحترفين",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/038%20%D9%84%D8%B9%D8%A8%D8%A9%20%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D8%B1%D9%81%D9%8A%D9%86.pdf",
    "image": "https://www.zaadbooks.com/tempImage/img-30-15645-%D9%84%D8%B9%D8%A8%D8%A9-%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D8%B1%D9%81%D9%8A%D9%86---%D8%B3%D9%84%D8%B3%D9%84%D8%A9-%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84-%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B2%D8%A7%D8%AF-1.jpg"
  },
  {
    "title": "العدد 39 - أعماق الخطر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/039%20%D8%A3%D8%B9%D9%85%D8%A7%D9%82%20%D8%A7%D9%84%D8%AE%D8%B7%D8%B1.pdf",
    "image": "https://cdn.abjjad.com/pub/5f92413a-ebca-4758-95b1-0dd4722eac53.png"
  },
  {
    "title": "العدد 40 - مهنتي القتل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/040%20%D9%85%D9%87%D9%86%D8%AA%D9%8A%20%D8%A7%D9%84%D9%82%D8%AA%D9%84.pdf",
    "image": "https://media.s-bol.com/mP2ErZwVk4qn/MR2pPA/550x765.jpg"
  },
  {
    "title": "العدد 41 - الانتحاريون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/041%20%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%AD%D8%A7%D8%B1%D9%8A%D9%88%D9%86.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.SaZHRSeWxLbKv99jWvl6LgHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 42 - الهدف القاتل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/042%20%D8%A7%D9%84%D9%87%D8%AF%D9%81%20%D8%A7%D9%84%D9%82%D8%A7%D8%AA%D9%84.pdf",
    "image": "https://media.s-bol.com/xmVlOEGBG0Xl/Xg04Ym/550x765.jpg"
  },
  {
    "title": "العدد 43 - المخاطر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/043%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D8%B7%D8%B1.pdf",
    "image": "https://media.s-bol.com/mPVoLQR2Wg7A/VYno7z/550x765.jpg"
  },
  {
    "title": "العدد 44 - العين الثالثة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/044%20%D8%A7%D9%84%D8%B9%D9%8A%D9%86%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/YRQMoA2x3yrO/4lqXY6/550x765.jpg"
  },
  {
    "title": "العدد 45 - القضبان الجليدية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/045%20%D8%A7%D9%84%D9%82%D8%B6%D8%A8%D8%A7%D9%86%20%D8%A7%D9%84%D8%AC%D9%84%D9%8A%D8%AF%D9%8A%D8%A9%20%D8%AC2.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.VHTZ8YEQQlknTHfbN7V8fwHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 46 - لهيب الثلج",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/046%20%D9%84%D9%87%D9%8A%D8%A8%20%D8%A7%D9%84%D8%AB%D9%84%D8%AC%20%D8%AC3.pdf",
    "image": "https://media.s-bol.com/R7ML2qA51RAV/05mQXX/550x765.jpg"
  },
  {
    "title": "العدد 47 - الرصاصة الذهبية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/047%20%D8%A7%D9%84%D8%B1%D8%B5%D8%A7%D8%B5%D8%A9%20%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%D8%A9%20%D8%AC1.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP._5Iar3aOvMfHKXpPxi1lPgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 48 - شيطان المافيا",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/048%20%D8%B4%D9%8A%D8%B7%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%A7%D9%81%D9%8A%D8%A7%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/NRE8QmgAkow8/V4k601/862x1200.jpg"
  },
  {
    "title": "العدد 49 - الضربة القاضية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/049%20%D8%A7%D9%84%D8%B6%D8%B1%D8%A8%D8%A9%20%D8%A7%D9%84%D9%82%D8%A7%D8%B6%D9%8A%D8%A9%20%D8%AC3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP._RNnjniXOlUwTQwohwwD8QHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 50 - مهمة خاصة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/050%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://media.s-bol.com/YRBGkvvpPLk2/LLW0vD/550x765.jpg"
  },
  {
    "title": "العدد 51 - سم الكوبرا",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/051%20%D8%B3%D9%85%20%D8%A7%D9%84%D9%83%D9%88%D8%A8%D8%B1%D8%A7.pdf",
    "image": "https://cdn.abjjad.com/pub/cd40727d-5a08-440f-8ec9-22a39f065965.png"
  },
  {
    "title": "العدد 52 - جبال الموت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/052%20%D8%AC%D8%A8%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%D8%AC1.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.psMhfIrD81osLgsyvQxMNwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 53 - ذئاب ودماء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/053%20%D8%B0%D8%A6%D8%A7%D8%A8%20%D9%88%D8%AF%D9%85%D8%A7%D8%A1%20%D8%AC2.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.p1ZL0j4DSNqDMZNz4m5YEQHaJn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 54 - رحلة الهلاك",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/054%20%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D9%87%D9%84%D8%A7%D9%83%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/99692a41-fda7-42d9-8f0a-66549d293d66.png"
  },
  {
    "title": "العدد 55 - أفعى برشلونة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/055%20%D8%A3%D9%81%D8%B9%D9%89%20%D8%A8%D8%B1%D8%B4%D9%84%D9%88%D9%86%D8%A9%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/3G05olrP7yY4/7jVYpQ/550x765.jpg"
  },
  {
    "title": "العدد 56 - الفهد الأبيض",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/056%20%D8%A7%D9%84%D9%81%D9%87%D8%AF%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6.pdf",
    "image": "https://media.s-bol.com/q9V2w4Rx1R9y/Yjng0p/550x765.jpg"
  },
  {
    "title": "العدد 57 - عملية الادغال",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/057%20%D8%B9%D9%85%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AF%D8%BA%D8%A7%D9%84.pdf",
    "image": "https://media.s-bol.com/3G05olDP5Z9r/qGL6l7/550x765.jpg"
  },
  {
    "title": "العدد 58 - اعدام بطل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/058%20%D8%A7%D8%B9%D8%AF%D8%A7%D9%85%20%D8%A8%D8%B7%D9%84%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.iilmXT4PzXty313MudchowHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 59 - انتقام شبح",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/059%20%D8%A7%D9%86%D8%AA%D9%82%D8%A7%D9%85%20%D8%B4%D8%A8%D8%AD%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/q9XvPjJNl0A2/jx65Yy/550x765.jpg"
  },
  {
    "title": "العدد 60 - دونا كارولينا",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/060%20%D8%AF%D9%88%D9%86%D8%A7%20%D9%83%D8%A7%D8%B1%D9%88%D9%84%D9%8A%D9%86%D8%A7.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.hVVJRhtSwth8rcJt2GPnBgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 61 - ملائكة الجحيم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/061%20%D9%85%D9%84%D8%A7%D8%A6%D9%83%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/7knANK8OoJXr/Xg04pk/550x765.jpg"
  },
  {
    "title": "العدد 62 - ملك العصابات",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/062%20%D9%85%D9%84%D9%83%20%D8%A7%D9%84%D8%B9%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/472612ac-67de-451c-9ebf-67a608c608f5.png"
  },
  {
    "title": "العدد 63 - الجاسوس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/063%20%D8%A7%D9%84%D8%AC%D8%A7%D8%B3%D9%88%D8%B3%20%D8%AC3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.YsFr6foF5F3N_LzAIinpCQHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 64 - تحت الصفر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/064%20%D8%AA%D8%AD%D8%AA%20%D8%A7%D9%84%D8%B5%D9%81%D8%B1%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/b0a5b64e-1cd3-49be-97af-db0474083670.png"
  },
  {
    "title": "العدد 65 - الجليد المشتعل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/065%20%D8%A7%D9%84%D8%AC%D9%84%D9%8A%D8%AF%20%D8%A7%D9%84%D9%85%D8%B4%D8%AA%D8%B9%D9%84%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/R7rx4gZBQYAV/lzEX2j/550x765.jpg"
  },
  {
    "title": "العدد 66 - ألف وجه",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/066%20%D8%A3%D9%84%D9%81%20%D9%88%D8%AC%D9%87%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/q9XvPjq16JlG/kyXB2J/550x765.jpg"
  },
  {
    "title": "العدد 67 - الجحيم المزدوج",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/067%20%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85%20%D8%A7%D9%84%D9%85%D8%B2%D8%AF%D9%88%D8%AC%20%D8%AC2.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.weQLB45Fjndmr9pzUkE8owHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 68 - قلعة الصقور",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/068%20%D9%82%D9%84%D8%B9%D8%A9%20%D8%A7%D9%84%D8%B5%D9%82%D9%88%D8%B1%20%D8%AC1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.gVN0zcE-LXiRQNkNffzUngHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 69 - أجنحة الإنتقام",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/069%20%20%D8%A3%D8%AC%D9%86%D8%AD%D8%A9%20%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D9%82%D8%A7%D9%85%20%D8%AC2.pdf",
    "image": "https://mktbtypdf.com/wp-content/uploads/2023/02/%D8%A3%D8%AC%D9%86%D8%AD%D8%A9-%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D9%82%D8%A7%D9%85-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-pdf.jpg"
  },
  {
    "title": "العدد 70 - أباطرة الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/070%20%D8%A3%D8%A8%D8%A7%D8%B7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%20%D8%AC3.pdf",
    "image": "https://media.s-bol.com/0BBnR6EZlK7K/K0GKX8/550x766.jpg"
  },
  {
    "title": "العدد 71 - ضد القانون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/071%20%D8%B6%D8%AF%20%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/By74Lj98mJ4x/WZopEn/550x765.jpg"
  },
  {
    "title": "العدد 72 - شريعة الغاب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/072%20%D8%B4%D8%B1%D9%8A%D8%B9%D8%A9%20%D8%A7%D9%84%D8%BA%D8%A7%D8%A8%20%D8%AC2.pdf",
    "image": "https://wamdabook.com/media/books/image/35120.2018-12-27.1545897198.webp"
  },
  {
    "title": "العدد 73 - المعتقل الرهيب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/073%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%82%D9%84%20%D8%A7%D9%84%D8%B1%D9%87%D9%8A%D8%A8%20%D8%AC1.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.cY3vYqvcUCzcAFe1rqypdgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 74 - الدائرة الجهنمية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/074%20%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D9%87%D9%86%D9%85%D9%8A%D8%A9%20%D8%AC2.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.fDxcfmcTsSOI_MU4gydFYwHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 75 - أسوار الجحيم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/075%20%D8%A3%D8%B3%D9%88%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85%20%D8%AC3.pdf",
    "image": "https://www.4readlib.com/uploads/images/zahef1677708261.png"
  },
  {
    "title": "العدد 76 - النهر الأسود",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/076%20%D8%A7%D9%84%D9%86%D9%87%D8%B1%20%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF%20%D8%AC1.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.-TcfGjr6baPejRFRltZs_gHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 77 - عمالقة مارسيليا",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/077%20%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9%20%D9%85%D8%A7%D8%B1%D8%B3%D9%8A%D9%84%D9%8A%D8%A7%20%D8%AC2.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.syhbhTLFvn2CHyrI02_QwwHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 78 - صحراء الدم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/078%20%D8%B5%D8%AD%D8%B1%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AF%D9%85%20%D8%AC1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.y4ioPi9zy4lF14E2JqYzbAHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 79 - صفقة الموت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/079%20%D8%B5%D9%81%D9%82%D8%A9%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/0ddb9088-837d-4fea-8d26-a00ab6f976fc.png"
  },
  {
    "title": "العدد 80 - وكر الإرهاب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/080%20%D9%88%D9%83%D8%B1%20%D8%A7%D9%84%D8%A5%D8%B1%D9%87%D8%A7%D8%A8%20%D8%AC3.pdf",
    "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700218482i/202321759.jpg"
  },
  {
    "title": "العدد 81 - الرجل الآخر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/081%20%D8%A7%D9%84%D8%B1%D8%AC%D9%84%20%D8%A7%D9%84%D8%A2%D8%AE%D8%B1%20%D8%AC1_(0).pdf",
    "image": "https://th.bing.com/th/id/R.2f5ee369886c4038eb07762374707532?rik=QOdXgaqCBjKhaw&pid=ImgRaw&r=0"
  },
  {
    "title": "العدد 82 - الأخطبوط",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/082%20%D8%A7%D9%84%D8%A3%D8%AE%D8%B7%D8%A8%D9%88%D8%B7%20%D8%AC2.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.2LDasLKblQLyL-NXm9ls8AHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 83 - معركة القمة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/083%20%D9%85%D8%B9%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D9%82%D9%85%D8%A9%20%D8%AC3.pdf",
    "image": "https://media.s-bol.com/By8nl0NV982o/z1EZx8/550x765.jpg"
  },
  {
    "title": "العدد 84 - جزيرة الجحيم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/084%20%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85%20%D8%AC4.pdf",
    "image": "https://media.s-bol.com/xmNXvmZWLlqq/MMWNAP/550x765.jpg"
  },
  {
    "title": "العدد 85 - لمسة الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/085%20%D9%84%D9%85%D8%B3%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/R7r9oD5nrDLY/qGL6nD/550x765.jpg"
  },
  {
    "title": "العدد 86 - الثعلب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/086%20%D8%A7%D9%84%D8%AB%D8%B9%D9%84%D8%A8%20%D8%AC2.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.sFU1jnGbBxrBNgkkzdM6rgHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 87 - خط المواجهة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/087%20%D8%AE%D8%B7%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9%20%D8%AC3.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.EitkHDAk8sD763YWGJRW9AHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 88 - سفير الخطر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/088%20%D8%B3%D9%81%D9%8A%D8%B1%20%D8%A7%D9%84%D8%AE%D8%B7%D8%B1%20%D8%AC1.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.kJ_zBuc_Ch1b7DgzOlVFuwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 89 - قبضة السفاح",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/089%20%D9%82%D8%A8%D8%B6%D8%A9%20%D8%A7%D9%84%D8%B3%D9%81%D8%A7%D8%AD%20%D8%AC2.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.Okh43RT5rsIZU4mhzgg0-wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 90 - الهدف",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/090%20%D8%A7%D9%84%D9%87%D8%AF%D9%81%20%D8%AC3.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.N9rG7KotAPwRJvzqPA_bigHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 91 - الوجه الخفى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/091%20%D8%A7%D9%84%D9%88%D8%AC%D9%87%20%D8%A7%D9%84%D8%AE%D9%81%D9%89%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.suiD1qh4hWNrgCGR46NRlQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 92 - الخطر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/092%20%D8%A7%D9%84%D8%AE%D8%B7%D8%B1%20%D8%AC2.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.MgDGr9NkZnnp1u43dKWsxQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 93 - أرض العدو",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/093%20%D8%A3%D8%B1%D8%B6%20%D8%A7%D9%84%D8%B9%D8%AF%D9%88%20%D8%AC3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.hKkOtvsZobQCLcW-uzsvXgHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 94 - كتيبة الدمار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/094%20%D9%83%D8%AA%D9%8A%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D8%B1%20%D8%AC1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.JLJL4-V5HcUW84MpohNBugHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 95 - الصراع الوحشي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/095%20%D8%A7%D9%84%D8%B5%D8%B1%D8%A7%D8%B9%20%D8%A7%D9%84%D9%88%D8%AD%D8%B4%D9%8A%20%D8%AC2.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.Q5HYz8uU0c30-_wM95BERQHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 96 - المعركة الفاصلة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/096%20%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D9%81%D8%A7%D8%B5%D9%84%D8%A9%20%D8%AC3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.ZL1cY6fUgqibC1Ln9v88tgHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 97 - الصقر الأعمى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/097%20%D8%A7%D9%84%D8%B5%D9%82%D8%B1%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D9%89%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.lIkuikY3L_qZkGt_pYYGowHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 98 - القناص",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/098%20%D8%A7%D9%84%D9%82%D9%86%D8%A7%D8%B5%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/6jm0P868jnp9/9qy5wx/550x765.jpg"
  },
  {
    "title": "العدد 98 - مذاق الدم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/099%20%D9%85%D8%B0%D8%A7%D9%82%20%D8%A7%D9%84%D8%AF%D9%85%20%D8%AC3.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.SX8Jct1jDYPel2rZtb0ltwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 100 - الضربة القاصمة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/100%20%D8%A7%D9%84%D8%B6%D8%B1%D8%A8%D8%A9%20%D8%A7%D9%84%D9%82%D8%A7%D8%B5%D9%85%D8%A9%20%D8%AC4.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.vZ11DZ0GuTbaYi5ClJ2A3gHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 101 - انقلاب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/101%20%D8%A7%D9%86%D9%82%D9%84%D8%A7%D8%A8.pdf",
    "image": "https://cdn.abjjad.com/pub/00895df2-2ce3-4b7e-bc83-a7b7bd8fed6f.png"
  },
  {
    "title": "العدد 102 - نهر الدم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/102%20%D9%86%D9%87%D8%B1%20%D8%A7%D9%84%D8%AF%D9%85.pdf",
    "image": "https://media.s-bol.com/mPK2Pj1kQYVp/jyWR65/550x765.jpg"
  },
  {
    "title": "العدد 103 - المحترف",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/103%20%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D8%B1%D9%81.pdf",
    "image": "https://media.s-bol.com/xmYVmwj4KN2l/6kp8Gn/550x765.jpg"
  },
  {
    "title": "العدد 104 - الإعصار الأحمر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/104%20%D8%A7%D9%84%D8%A5%D8%B9%D8%B5%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/YRjQRN8qp1Op/vO62Lr/550x765.jpg"
  },
  {
    "title": "العدد 105 - عقارب الساعة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/105%20%D8%B9%D9%82%D8%A7%D8%B1%D8%A8%20%D8%A7%D9%84%D8%B3%D8%A7%D8%B9%D8%A9%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/105-%D8%B9%D9%82%D8%A7%D8%B1%D8%A8-%D8%A7%D9%84%D8%B3%D8%A7%D8%B9%D8%A9.jpg"
  },
  {
    "title": "العدد 106 - الأفعى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/106%20%D8%A7%D9%84%D8%A3%D9%81%D8%B9%D9%89%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/106-%D8%A7%D9%84%D8%A3%D9%81%D8%B9%D9%89.jpg"
  },
  {
    "title": "العدد 107 - إتحاد القتلة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/107%20%D8%A5%D8%AA%D8%AD%D8%A7%D8%AF%20%D8%A7%D9%84%D9%82%D8%AA%D9%84%D8%A9%20%D8%AC2.pdf",
    "image": "https://s3.amazonaws.com/jarir-files/images/original/42107.jpg"
  },
  {
    "title": "العدد 108 - الفخ",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/108%20%D8%A7%D9%84%D9%81%D8%AE%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/108-%D8%A7%D9%84%D9%81%D8%AE.jpg"
  },
  {
    "title": "العدد 109 - قبضة الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/109%20%D9%82%D8%A8%D8%B6%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%20%D8%AC4.pdf",
    "image": "https://cdn.abjjad.com/pub/b2581228-849a-47f2-9e98-401baf0b67cb.png"
  },
  {
    "title": "العدد 110 - إغتيال",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/110%20%D8%A5%D8%BA%D8%AA%D9%8A%D8%A7%D9%84%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/NRE8MG5wpBPL/BD253n/550x765.jpg"
  },
  {
    "title": "العدد 111 - معبد الجريمة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/111%20%D9%85%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%AC%D8%B1%D9%8A%D9%85%D8%A9%20%D8%AC2.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.XxVXgauTaxpZhkTRv3QXYQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 112 - الفريق الأسود",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/112%20%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF%20%D8%AC3.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.BiEwjXFU2nR8gC3hagZJqQHaKT?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 113 - رياح الخطر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/113%20%D8%B1%D9%8A%D8%A7%D8%AD%20%D8%A7%D9%84%D8%AE%D8%B7%D8%B1%20%D8%AC1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.no9usIvgB1YWvZGGsKGksgHaKT?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 114 - ممر الجحيم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/114%20%D9%85%D9%85%D8%B1%20%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/mP2ErZEnmYDO/V4kBDW/550x765.jpg"
  },
  {
    "title": "العدد 115 -  بلا رحمة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/115%20%20%D8%A8%D9%84%D8%A7%20%D8%B1%D8%AD%D9%85%D8%A9%20%D8%AC3.pdf",
    "image": "https://media.s-bol.com/mP2ElpPqV6zA/1gnRE3/550x765.jpg"
  },
  {
    "title": "العدد 116 - مهرجان الموت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/116%20%D9%85%D9%87%D8%B1%D8%AC%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%D8%AC4.pdf",
    "image": "https://cdn.abjjad.com/pub/ddda35ae-4e4e-450d-85ec-a293a515726a.png"
  },
  {
    "title": "العدد 117 - عمالقة الجبال",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/117%20%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AC%D8%A8%D8%A7%D9%84%20%D8%AC5.pdf",
    "image": "https://media.s-bol.com/mPK2PgvmYYBn/rKWkV6/550x765.jpg"
  },
  {
    "title": "العدد 118 - الأربعة الكبار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/118%20%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%B9%D8%A9%20%D8%A7%D9%84%D9%83%D8%A8%D8%A7%D8%B1%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.68zlruMdXky23gPMfdFgTgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "الغدد 119 - فوق القمة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/119%20%D9%81%D9%88%D9%82%20%D8%A7%D9%84%D9%82%D9%85%D8%A9%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/JRYPGMGWAzvD/nLoK6D/550x765.jpg"
  },
  {
    "title": "العدد 120 - السنيورا",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/120%20%D8%A7%D9%84%D8%B3%D9%86%D9%8A%D9%88%D8%B1%D8%A7%20%D8%AC3.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.LLMRfC7o9XW08aikvJIG5QHaJj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد وجه الأفعى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/121%20%D9%88%D8%AC%D9%87%20%D8%A7%D9%84%D8%A3%D9%81%D8%B9%D9%89%20%D8%AC4.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.BYCoo43ew1g8Zs2vMe8gzwHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 122 - الأصابع الذهبية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/122%20%D8%A7%D9%84%D8%A3%D8%B5%D8%A7%D8%A8%D8%B9%20%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%D8%A9%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/R7ZM7DBPkrow/5joy0R/550x765.jpg"
  },
  {
    "title": "العدد 123 - المستحيل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/123%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84%20%D8%AC2.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.F6CLvnLgqbQ33o1nhVozewAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 124 - اللمسة الأخيرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/124%20%D8%A7%D9%84%D9%84%D9%85%D8%B3%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%D8%A9%20%D8%AC3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.GNzJKSdxTl6ckkOzOlyERQHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 125 - عملية النيل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/125%20%D8%B9%D9%85%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D9%86%D9%8A%D9%84%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.c9bjBGKe8NosiGqiZpXqCQHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 126 - ساعة الصفر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/126%20%D8%B3%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D8%B5%D9%81%D8%B1%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/JRYPGglKRjn9/lJmG86/550x765.jpg"
  },
  {
    "title": "العدد 127 - نقطة الضعف",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/127%20%D9%86%D9%82%D8%B7%D8%A9%20%D8%A7%D9%84%D8%B6%D8%B9%D9%81%20%D8%AC1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.SxPkvujoSsj75AbylYs1OAHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 128 - الصحوة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/128%20%D8%A7%D9%84%D8%B5%D8%AD%D9%88%D8%A9%20%D8%AC2.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.e9W2cPIN9pbZAJ4t-0J24wHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 129 - القراصنة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/129%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B5%D9%86%D8%A9%20%D8%AC3.pdf",
    "image": "https://media.s-bol.com/ByD8yj6LYzr2/V1zOn1/550x765.jpg"
  },
  {
    "title": "العدد 130 - محيط الدم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/130%20%D9%85%D8%AD%D9%8A%D8%B7%20%D8%A7%D9%84%D8%AF%D9%85%20%D8%AC4.pdf",
    "image": "https://media.s-bol.com/xmYVxOzLmMNE/KMlrGr/550x765.jpg"
  },
  {
    "title": "العدد 131 - الحدود",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/131%20%D8%A7%D9%84%D8%AD%D8%AF%D9%88%D8%AF%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/xmVlJqpw7jWn/lJmnl5/550x765.jpg"
  },
  {
    "title": "العدد 132 - فريق المستحيل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/132%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84%20%D8%AC2.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.xXFyJUEPqC3TSumYCl8kCAHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 133 - نمور الثلوج",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/133%20%D9%86%D9%85%D9%88%D8%B1%20%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC%20%D8%AC3.pdf",
    "image": "https://latrach-edition.com/5247-large_default/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-133-%D9%86%D9%85%D9%88%D8%B1-%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC.jpg"
  },
  {
    "title": "العدد 134 - الابطال",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/134%20%D8%A7%D9%84%D8%A7%D8%A8%D8%B7%D8%A7%D9%84%20%D8%AC4.pdf",
    "image": "https://media.s-bol.com/7knANrKVoJ7O/wXAWZw/550x765.jpg"
  },
  {
    "title": "العدد 135 - الاستاذ",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/135%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%A7%D8%B0%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/135-%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0.jpg"
  },
  {
    "title": "العدد 136 - المغامرة الكبرى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/136%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D8%A9%20%D8%A7%D9%84%D9%83%D8%A8%D8%B1%D9%89%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/R7ML2q8JRBMO/xYBXjn/550x765.jpg"
  },
  {
    "title": "العدد 137 - مدينة الذئاب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/137%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B0%D8%A6%D8%A7%D8%A8%20%D8%AC3.pdf",
    "image": "https://media.s-bol.com/mP2El46gq103/gAGz66/550x765.jpg"
  },
  {
    "title": "العدد 138 - الضحايا",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/138%20%D8%A7%D9%84%D8%B6%D8%AD%D8%A7%D9%8A%D8%A7%20%D8%AC4.pdf",
    "image": "https://cdn.abjjad.com/pub/c6e18997-0f6e-4f13-a6d6-04070fc63289.png"
  },
  {
    "title": "العدد 139 - الوحش الادمى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/139%20%D8%A7%D9%84%D9%88%D8%AD%D8%B4%20%D8%A7%D9%84%D8%A7%D8%AF%D9%85%D9%89%20%D8%AC5.pdf",
    "image": "https://media.s-bol.com/xmVlO4VL2QBq/5mrY3R/550x765.jpg"
  },
  {
    "title": "العدد 140 - المواجهة الأخيرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/140%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%D8%A9%20%D8%AC6.pdf",
    "image": "https://media.s-bol.com/xmVlJqmOOJ0l/xYBDA9/550x765.jpg"
  },
  {
    "title": "العدد 141 - رمال و دماء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/141%20%D8%B1%D9%85%D8%A7%D9%84%20%D9%88%20%D8%AF%D9%85%D8%A7%D8%A1%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/c3685340-e6a4-4921-8487-5868a4d80406.png"
  },
  {
    "title": "العدد 142 - رجل وجيش",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/142%20%D8%B1%D8%AC%D9%84%20%D9%88%D8%AC%D9%8A%D8%B4%20%D8%AC2.pdf",
    "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1358928682i/6384910.jpg"
  },
  {
    "title": "العدد 143 - الأوراق المكشوفة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/143%20%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D8%A7%D9%82%20%D8%A7%D9%84%D9%85%D9%83%D8%B4%D9%88%D9%81%D8%A9%20%D8%AC1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.yt_cgT_l47JsqG89hm9G9QHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 144 - المحترفون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/144%20%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D8%B1%D9%81%D9%88%D9%86%20%D8%AC2.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.b7I33uvw4u4eLyviuMM4UgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 145 - الورقة الأخيرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/145%20%D8%A7%D9%84%D9%88%D8%B1%D9%82%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%D8%A9%20%D8%AC3.pdf",
    "image": "https://cdn.abjjad.com/pub/0a267bed-e0a3-4e45-ad9f-affd56bf734c.png"
  },
  {
    "title": "العدد 146 - المأزق",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/146%20%D8%A7%D9%84%D9%85%D8%A3%D8%B2%D9%82%20%D8%AC1.pdf",
    "image": "https://media.s-bol.com/80Jj3OKnylYL/VOOzDqM/550x765.jpg"
  },
  {
    "title": "العدد 147 - الغامضة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/147%20%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%B6%D8%A9%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/147-%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%B6%D8%A9.jpg"
  },
  {
    "title": "العدد  148 - الخطة ب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/148%20%D8%A7%D9%84%D8%AE%D8%B7%D8%A9%20%D8%A8%20%D8%AC3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.tmpRXPBU-l66syY44cBHeAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 149 - المصيدة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/149%20%D8%A7%D9%84%D9%85%D8%B5%D9%8A%D8%AF%D8%A9%20%D8%AC4.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.CYWf7LryN5LDxGRT6ukBWgHaKT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 150 - النهاية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/150%20%D8%A7%D9%84%D9%86%D9%87%D8%A7%D9%8A%D8%A9%20%D8%AC5.pdf",
    "image": "https://media.s-bol.com/xmVlRy504L8J/JO2m5l/550x765.jpg"
  },
  {
    "title": "العدد 151 - العوده",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/151%20%D8%A7%D9%84%D8%B9%D9%88%D8%AF%D9%87%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/043a1afd-0da5-4209-8291-a960211fc89f.png"
  },
  {
    "title": "العدد 152 - القناع",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/152%20%D8%A7%D9%84%D9%82%D9%86%D8%A7%D8%B9%20%D8%AC2.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.8V_DzzQEv7ObkwhLalIAkAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 153 - الأحراش",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/153%20%D8%A7%D9%84%D8%A3%D8%AD%D8%B1%D8%A7%D8%B4%20%D8%AC3.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.CgQpZxo1evjAubMTKwnhHAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 154 - الحرب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/154%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%20%D8%AC4.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/154-%D8%A7%D9%84%D8%AD%D8%B1%D8%A8.jpg"
  },
  {
    "title": "العدد 155 - الإرهاب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/155%20%D8%A7%D9%84%D8%A5%D8%B1%D9%87%D8%A7%D8%A8%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/155-%D8%A7%D9%84%D8%A5%D8%B1%D9%87%D8%A7%D8%A8.jpg"
  },
  {
    "title": "العدد 156 - المواجهة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/156%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/67d68422-d9f6-497f-b6a1-94a0bc33d5fd.png"
  },
  {
    "title": "العدد 157 - المدرب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/157%20%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.NOfM5vCZe1jGGs06gBOaYgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 158 - الخطة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/158%20%D8%A7%D9%84%D8%AE%D8%B7%D8%A9%20%D8%AC2.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.J1vc72qpPAdOAOHu5phcHwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 159 - الهجوم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/159%20%D8%A7%D9%84%D9%87%D8%AC%D9%88%D9%85%20%D8%AC3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.619HjRx1BdiZxrNT0yFSjgHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 160 - الوداع",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/رجل-المستحيل/160%20%D8%A7%D9%84%D9%88%D8%AF%D8%A7%D8%B9%20%D8%AC4.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.jdgD_32m9Gyphbk-ZRW1QgHaKj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  //series mostackbal
  














































  //



















  ////////////////////////////////////////////////////
  {
    "title": "العدد 1 - أشعة الموت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/1-%D8%A3%D8%B4%D8%B9%D8%A9%20%D8%A7%D9%84%D9%85%D9%88%D8%AA.pdf",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3BAGNfvnVR4bmuTIB-V6uXF8Zj4VafjdIg&s"
  },
  {
    "title": "العدد 2 - اختفاء صاروخ",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/2-%D8%A7%D8%AE%D8%AA%D9%81%D8%A7%D8%A1%20%D8%B5%D8%A7%D8%B1%D9%88%D8%AE.pdf",
    "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1358580669i/7814097.jpg"
  },
  {
    "title": "العدد 3 - مدينة الأعماق",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/3-%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%82.pdf",
    "image": "https://kitab-pdf.net/wp-content/uploads/2018/09/%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%82.jpg"
  },
  {
    "title": "العدد 4 - غزاة الفضاء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/4-%D8%BA%D8%B2%D8%A7%D8%A9%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1.pdf",
    "image": "https://www.noor-book.com/publice/covers_cache_webp/6/b/6/5/2dd9003a64b65b9b2592ceebbc0ba07d.png.webp"
  },
  {
    "title": "العدد 5 - القنبلة الغامضة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/5-%D8%A7%D9%84%D9%82%D9%86%D8%A8%D9%84%D8%A9%20%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%B6%D8%A9.pdf",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0uNPF1FHGHPrG7WU11zNMC-DsGeoU1-zRQ&s"
  },
  {
    "title": "العدد 6 - زائر من المستقبل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/6-%D8%B2%D8%A7%D8%A6%D8%B1%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.TajE0gk8AuSmlPascrUivwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 7 - جنون طائرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/7-%D8%AC%D9%86%D9%88%D9%86%20%D8%B7%D8%A7%D8%A6%D8%B1%D8%A9.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.rWhevZXt7fH-4TEflnq_lwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 8 - الارتجاج القاتل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/8-%D8%A7%D9%84%D8%A7%D8%B1%D8%AA%D8%AC%D8%A7%D8%AC%20%D8%A7%D9%84%D9%82%D8%A7%D8%AA%D9%84.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.3epzjDRgdn7nC_uaCJEU5wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 9 - صراع الحوس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/9-%D8%B5%D8%B1%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AD%D9%88%D8%B3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.TuMoy8iNmZ2_Z3NvvHU9lAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 10 - الفارس المجهول",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/10-%D8%A7%D9%84%D9%81%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D9%85%D8%AC%D9%87%D9%88%D9%84.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.rGU8KALxr8XoSsui46TjowAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 11 - منطقة الرعب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/11-%D9%85%D9%86%D8%B7%D9%82%D8%A9%20%D8%A7%D9%84%D8%B1%D8%B9%D8%A8.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.bQVzTGoC9F8l7z2loRFIiwHaJk?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 12 - طريق الأشباح",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/12-%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%A3%D8%B4%D8%A8%D8%A7%D8%AD.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.VoZ6xvg6cGe_L63lftQEugHaK4?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 13 - الزمن المفقود",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/13-%D8%A7%D9%84%D8%B2%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D9%81%D9%82%D9%88%D8%AF.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.ankv-JVoPy-Zh8nshTjIvwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 14 - نداء النجوم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/14-%D9%86%D8%AF%D8%A7%D8%A1%20%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85.pdf",
    "image": "https://cdn.abjjad.com/pub/cd0a32d3-7dce-47eb-aa76-cd4a1c833777.png"
  },
  {
    "title": "العدد 15 - مثلث الغموض",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/15-%D9%85%D8%AB%D9%84%D8%AB%20%D8%A7%D9%84%D8%BA%D9%85%D9%88%D8%B6.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.vwS7Du2FgXgXtL84Fm65LgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 16 - الوباء الجهنمي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/16-%D8%A7%D9%84%D9%88%D8%A8%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AC%D9%87%D9%86%D9%85%D9%8A.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.yFAqlMpH6TNJV4Hx63S9oAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 17 - نبض الخلود",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/17-%D9%86%D8%A8%D8%B6%20%D8%A7%D9%84%D8%AE%D9%84%D9%88%D8%AF.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.3TtnvUQ_hm2MBBUQB_0sWwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 18 - ظلال الفزع",
    "author": "نبيل فاروق",
    "link": "ظلال الفزع سلسلة ملف المستقبل.pdf",
    "image": "https://cdn.abjjad.com/pub/f3ebe585-d882-4708-a447-d0da969bb5ca.png"
  },
  {
    "title": "العدد 19- عيون الهلاك",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/19-%D8%B9%D9%8A%D9%88%D9%86%20%D8%A7%D9%84%D9%87%D9%84%D8%A7%D9%83.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/19-%D8%B9%D9%8A%D9%88%D9%86-%D8%A7%D9%84%D9%87%D9%84%D8%A7%D9%83.jpg"
  },
  {
    "title": "العدد 20 - العقول المعدنية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/20-%D8%A7%D9%84%D8%B9%D9%82%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A%D8%A9.pdf",
    "image": "https://cdn.abjjad.com/pub/9ee47c41-460c-4fe2-9592-96b45eafe3a4.png"
  },
  {
    "title": "العدد 21 - أطياف الماضي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/21-%D8%A3%D8%B7%D9%8A%D8%A7%D9%81%20%D8%A7%D9%84%D9%85%D8%A7%D8%B6%D9%8A.pdf",
    "image": "https://cdn.abjjad.com/pub/be0a7cab-75c6-4688-ac9e-aac5b93d80e2.png"
  },
  {
    "title": "العدد 22 - ليلة الرعب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/22-%D9%84%D9%8A%D9%84%D8%A9%20%D8%A7%D9%84%D8%B1%D8%B9%D8%A8.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/22-%D9%84%D9%8A%D9%84%D8%A9-%D8%A7%D9%84%D8%B1%D8%B9%D8%A8.jpg"
  },
  {
    "title": "العدد 23 - بصمات السحرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/23-%D8%A8%D8%B5%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D8%AD%D8%B1%D8%A9.pdf",
    "image": "https://cdn.abjjad.com/pub/ebea2430-5e04-4003-b44e-cea393b17405.png"
  },
  {
    "title": "العدد 24 - الضوء الاسود",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/024%20%D8%A7%D9%84%D8%B6%D9%88%D8%A1%20%D8%A7%D9%84%D8%A7%D8%B3%D9%88%D8%AF.pdf",
    "image": "https://cdn.abjjad.com/pub/ebea2430-5e04-4003-b44e-cea393b17405.png"
  },
  {
    "title": "العدد 25 - صحوة الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/025%20%D8%B5%D8%AD%D9%88%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1.pdf",
    "image": "https://cdn.abjjad.com/pub/03c0afe9-af0b-492c-ad5b-458c92468e88.png"
  },
  {
    "title": "العدد 26 - لعنة الفضاء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/026%20%D9%84%D8%B9%D9%86%D8%A9%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/26-%D9%84%D8%B9%D9%86%D8%A9-%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1.jpg"
  },
  {
    "title": "العدد 27 - الفخ الزجاجي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/027%20%D8%A7%D9%84%D9%81%D8%AE%20%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%D9%8A.pdf",
    "image": "https://www.zaadbooks.com/tempImage/img-30-15605-%D8%A7%D9%84%D9%81%D8%AE-%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%D9%89---%D8%B3%D9%84%D8%B3%D9%84%D8%A9-%D9%85%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84-%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D8%B2%D8%A7%D8%AF-1.jpg"
  },
  {
    "title": "العدد 28 - النهر المقدس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/028%20%D8%A7%D9%84%D9%86%D9%87%D8%B1%20%D8%A7%D9%84%D9%85%D9%82%D8%AF%D8%B3.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.jRd8uMiG_dKS2BEQmJMyjQHaJc?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 29 - الايقاع المفترس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/029%20%D8%A7%D9%84%D8%A7%D9%8A%D9%82%D8%A7%D8%B9%20%D8%A7%D9%84%D9%85%D9%81%D8%AA%D8%B1%D8%B3.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.2lMV6dcmcy81p71KVuyd0wHaJw?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 30 - النار الباردة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/030%20%D8%A7%D9%84%D9%86%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D8%AF%D8%A9.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/30-%D8%A7%D9%84%D9%86%D8%A7%D8%B1-%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D8%AF%D8%A9.jpg"
  },
  {
    "title": "العدد 31 - رنين الصمت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/031%20%D8%B1%D9%86%D9%8A%D9%86%20%D8%A7%D9%84%D8%B5%D9%85%D8%AA.pdf",
    "image": "https://cdn.abjjad.com/pub/cad85d40-937b-4600-849f-f4d7e600fcd0.png"
  },
  {
    "title": "العدد 32 - الافق الاخضر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/032%20%D8%A7%D9%84%D8%A7%D9%81%D9%82%20%D8%A7%D9%84%D8%A7%D8%AE%D8%B6%D8%B1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/32-%D8%A7%D9%84%D8%A3%D9%81%D9%82-%D8%A7%D9%84%D8%A3%D8%AE%D8%B6%D8%B1.jpg"
  },
  {
    "title": "العدد 33 - حارس الارواح",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/033%20%D8%AD%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D8%A7%D8%B1%D9%88%D8%A7%D8%AD.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.m1m_i_g3d83O_vdECgryigHaJp?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 34 - وحش المحيط",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/034%20%D9%88%D8%AD%D8%B4%20%D8%A7%D9%84%D9%85%D8%AD%D9%8A%D8%B7.pdf",
    "image": "https://cdn.abjjad.com/pub/d028434b-f0c1-4cb1-a7f3-60da03c46d22.png"
  },
  {
    "title": "العدد 35 - مرآة الغد",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/035%20%D9%85%D8%B1%D8%A2%D8%A9%20%D8%A7%D9%84%D8%BA%D8%AF.pdf",
    "image": "https://cdn.abjjad.com/pub/08f88ed9-96de-4ef6-8876-5c1094c15c30.png"
  },
  {
    "title": "العدد 36 - الموت الازرق",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/036%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B2%D8%B1%D9%82%20%D8%AC1.pdf",
    "image": "https://i.ytimg.com/vi/5ZvBejDdE2k/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCgfw0iTPHEm-baBtAzUhdebTh2cw"
  },
  {
    "title": "العدد 37 - السماء المظلمة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/037%20%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1%20%D8%A7%D9%84%D9%85%D8%B8%D9%84%D9%85%D8%A9%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/79c1e069-83a5-4f63-b1e8-9a5f49442f33.png"
  },
  {
    "title": "العدد 38 - من وراء النجوم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/038%20%D9%85%D9%86%20%D9%88%D8%B1%D8%A7%D8%A1%20%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85%20%D8%AC3.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.LOBUIsIvRw-syzE5zQU2XAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 39 - الثلوج الساخنة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/039%20%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86%D8%A9.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/39-%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC-%D8%A7%D9%84%D8%B3%D8%A7%D8%AE%D9%86%D8%A9.jpg"
  },
  {
    "title": "العدد 40 - علامات الخوف",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/040%20%D8%B9%D9%84%D8%A7%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AE%D9%88%D9%81.pdf",
    "image": "https://cdn.abjjad.com/pub/8ed73bff-a7f1-49d4-922f-2e412da7ad6a.png"
  },
  {
    "title": "العدد 41 - مملكة النار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/041%20%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D9%86%D8%A7%D8%B1.pdf",
    "image": "https://wamdabook.com/media/books/image/17645.2019-01-05.1546692706.webp"
  },
  {
    "title": "العدد 42 - الارض الثانية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/042%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/42-%D8%A7%D9%84%D8%A3%D8%B1%D8%B6-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9.jpg"
  },
  {
    "title": "العدد 43 - ثقب في التاريخ",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/043%20%D8%AB%D9%82%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE.pdf",
    "image": "https://cdn.abjjad.com/pub/01d38498-8ac7-478d-a2b9-4d99de78dca6.png"
  },
  {
    "title": "العدد 44 - الخارقون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/044%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D9%82%D9%88%D9%86.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/44-%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D9%82%D9%88%D9%86.jpg"
  },
  {
    "title": "العدد 45 - السحاب الاحمر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/045%20%D8%A7%D9%84%D8%B3%D8%AD%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A7%D8%AD%D9%85%D8%B1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/45-%D8%A7%D9%84%D8%B3%D8%AD%D8%A7%D8%A8-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1.jpg"
  },
  {
    "title": "العدد 46 - الكوكب الملعون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/046%20%D8%A7%D9%84%D9%83%D9%88%D9%83%D8%A8%20%D8%A7%D9%84%D9%85%D9%84%D8%B9%D9%88%D9%86.pdf",
    "image": "https://cdn.abjjad.com/pub/8b0ea634-0f15-4291-a22d-102ba352a61e.png"
  },
  {
    "title": "العدد 47 - المقاتل الاخير",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/047%20%D8%A7%D9%84%D9%85%D9%82%D8%A7%D8%AA%D9%84%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/47-%D8%A7%D9%84%D9%85%D9%82%D8%A7%D8%AA%D9%84-%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1-783x1024.jpg"
  },
  {
    "title": "العدد 48 - سجن القمر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/048%20%D8%B3%D8%AC%D9%86%20%D8%A7%D9%84%D9%82%D9%85%D8%B1.pdf",
    "image": "https://cdn.abjjad.com/pub/33a2a152-537c-4377-8f64-bc7bed4c609a.png"
  },
  {
    "title": "العدد 49 - غزو الارض",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/049%20%D8%BA%D8%B2%D9%88%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6.pdf",
    "image": "https://cdn.abjjad.com/pub/90fcd365-74fa-4346-8535-9003c4361f67.png"
  },
  {
    "title": "العدد 50 - الأسطورة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/050%20%D8%A7%D9%84%D8%A3%D8%B3%D8%B7%D9%88%D8%B1%D8%A9.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.DueJwu5plFfMUodxlXrRTAHaJx?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 51 - الخلية القاتلة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/051%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D9%82%D8%A7%D8%AA%D9%84%D8%A9%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/51-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D9%82%D8%A7%D8%AA%D9%84%D8%A9.jpg"
  },
  {
    "title": "العدد 52 - العدو الخفي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/052%20%D8%A7%D9%84%D8%B9%D8%AF%D9%88%20%D8%A7%D9%84%D8%AE%D9%81%D9%8A%20%D8%AC2.pdf",
    "image": "https://media.s-bol.com/VDOV5kjZOwvv/n5lK18E/550x810.jpg"
  },
  {
    "title": "العدد 53 - أمطار الموت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/053%20%D8%A7%D9%85%D8%B7%D8%A7%D8%B1%20%D8%A7%D9%84%D9%85%D9%88%D8%AA.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.MKYe8og1mF9S8kZBxAiPzAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 54 - عبر العصور",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/054%20%D8%B9%D8%A8%D8%B1%20%D8%A7%D9%84%D8%B9%D8%B5%D9%88%D8%B1%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/2b50b0e3-40c1-4c97-bc3c-bdc86a7b0b57.png"
  },
  {
    "title": "العدد 55 - أسرى الزمن",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/055%20%D8%A7%D8%B3%D8%B1%D9%89%20%D8%A7%D9%84%D8%B2%D9%85%D9%86%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/6dca1af3-7831-4c37-bb99-bd1cf2304828.png"
  },
  {
    "title": "العدد 56 - شيطان الاجيال",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/056%20%D8%B4%D9%8A%D8%B7%D8%A7%D9%86%20%D8%A7%D9%84%D8%A7%D8%AC%D9%8A%D8%A7%D9%84%20%D8%AC3.pdf",
    "image": "https://cdn.abjjad.com/pub/bad76984-fefb-41ba-a70c-f729030c8c82.png"
  },
  {
    "title": "العدد 57 - منطقة الضياع",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/057%20%D9%85%D9%86%D8%B7%D9%82%D8%A9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D8%B9.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/57-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D8%B9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 58 - معركة الكواكب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/058%20%D9%85%D8%B9%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D9%83%D9%88%D8%A7%D9%83%D8%A8%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/8c49626f-9d19-4b5b-bc65-b6d70a8f681a.png"
  },
  {
    "title": "العدد 59 - جحيم ارغوران",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/059%20%D8%AC%D8%AD%D9%8A%D9%85%20%D8%A7%D8%B1%D8%BA%D9%88%D8%B1%D8%A7%D9%86%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/8aaa052e-0623-4552-b9f0-bf096fdac513.png"
  },
  {
    "title": "العدد 60 - أرض العمالقة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/060%20%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/60-%D8%A3%D8%B1%D8%B6-%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 61 - الكابوس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/061%20%D8%A7%D9%84%D9%83%D8%A7%D8%A8%D9%88%D8%B3.pdf",
    "image": "https://cdn.abjjad.com/pub/4cadf986-d207-49f9-b54a-79651ae99c6e.png"
  },
  {
    "title": "العدد 62 - سادة الاعماق",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/062%20%D8%B3%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%82%20%D8%AC1.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.j7M1NkNV1ACJxql-t-bsgQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 63 - المحيط الملتهب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/063%20%D8%A7%D9%84%D9%85%D8%AD%D9%8A%D8%B7%20%D8%A7%D9%84%D9%85%D9%84%D8%AA%D9%87%D8%A8%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/0f13a061-a057-4204-91d8-ad8461bf4d66.png"
  },
  {
    "title": "العدد 64 - السيف البلوري",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/064%20%D8%A7%D9%84%D8%B3%D9%8A%D9%81%20%D8%A7%D9%84%D8%A8%D9%84%D9%88%D8%B1%D9%8A%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/f8011724-6e5e-470a-a427-58a17fa8b03b.png"
  },
  {
    "title": "العدد 65 - أبواب الموت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/065%20%D8%A7%D8%A8%D9%88%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/65-%D8%A3%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D8%AA-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 66 - الشمس الزرقاء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/066%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%B2%D8%B1%D9%82%D8%A7%D8%A1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/66-%D8%A7%D9%84%D8%B4%D9%85%D8%B3-%D8%A7%D9%84%D8%B2%D8%B1%D9%82%D8%A7%D8%A1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-793x1024.jpg"
  },
  {
    "title": "العدد 67 - شيطان الفضاء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/067%20%D8%B4%D9%8A%D8%B7%D8%A7%D9%86%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1.pdf",
    "image": "https://cdn.abjjad.com/pub/a49d3268-48fc-4b49-8c23-e14279c86e8f.png"
  },
  {
    "title": "العدد 68 - عقول الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/068%20%D8%B9%D9%82%D9%88%D9%84%20%D8%A7%D9%84%D8%B4%D8%B1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/68-%D8%B9%D9%82%D9%88%D9%84-%D8%A7%D9%84%D8%B4%D8%B1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 69 - العالم الآخر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/069%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A2%D8%AE%D8%B1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.co4flEk8pCuzlywHOTEgwwHaJ2?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 70 - الستار الأسود",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/070%20%D8%A7%D9%84%D8%B3%D8%AA%D8%A7%D8%B1%20%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/70-%D8%A7%D9%84%D8%B3%D8%AA%D8%A7%D8%B1-%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 71 - أمير الظلام",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/071%20%D8%A3%D9%85%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%85%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/71-%D8%A3%D9%85%D9%8A%D8%B1-%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%85-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-768x1007.jpg"
  },
  {
    "title": "العدد 72 - ابن الشيطان",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/072%20%D8%A7%D8%A8%D9%86%20%D8%A7%D9%84%D8%B4%D9%8A%D8%B7%D8%A7%D9%86%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.zLINArPtIH81wCj9D7xhVQHaJn?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 73 - مبعوث الجحيم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/073%20%D9%85%D8%A8%D8%B9%D9%88%D8%AB%20%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85%20%D8%AC2.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.r6Cxcz8Fqb21blpzjCuaOQHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 74 - الصراع الجهنمي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/074%20%D8%A7%D9%84%D8%B5%D8%B1%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AC%D9%87%D9%86%D9%85%D9%8A%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/74-%D8%A7%D9%84%D8%B5%D8%B1%D8%A7%D8%B9-%D8%A7%D9%84%D8%AC%D9%87%D9%86%D9%85%D9%8A-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 75 - الجولة الأخيرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/075%20%D8%A7%D9%84%D8%AC%D9%88%D9%84%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%D8%A9%20%D8%AC4.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/75-%D8%A7%D9%84%D8%AC%D9%88%D9%84%D8%A9-%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%D8%A9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 76 - الاحتلال",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/076%20%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%84%D8%A7%D9%84%20%D8%AC1.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.E3vO3y9b76DJVoZ5OArVKAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 77 - المقاومة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/077%20%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%85%D8%A9%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/77-%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%85%D8%A9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-777x1024.jpg"
  },
  {
    "title": "العدد 78 - الصراع",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/078%20%D8%A7%D9%84%D8%B5%D8%B1%D8%A7%D8%B9%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/78-%D8%A7%D9%84%D8%B5%D8%B1%D8%A7%D8%B9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-768x1021.jpg"
  },
  {
    "title": "العدد 79 - التحدي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/079%20%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A%20%D8%AC4.pdf",
    "image": "https://th.bing.com/th/id/R.17329234dc1910107b9daf4d93cb9bfd?rik=k%2f4AdHcBllKlcg&pid=ImgRaw&r=0"
  },
  {
    "title": "العدد 80 - النصر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/080%20%D8%A7%D9%84%D9%86%D8%B5%D8%B1%20%D8%AC5.pdf",
    "image": "https://ketabpedia.com/wp-content/uploads/2020/07/bnr47489.png"
  },
  {
    "title": "العدد 81 - رمز القوة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/081%20%D8%B1%D9%85%D8%B2%20%D8%A7%D9%84%D9%82%D9%88%D8%A9%20%D8%AC1.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.S7QvQ2rdlMZr_Ju5DKUy2QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 82 - حصن الاشرار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/082%20%D8%AD%D8%B5%D9%86%20%D8%A7%D9%84%D8%A7%D8%B4%D8%B1%D8%A7%D8%B1%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/c6e3fa66-a1a1-4334-9c5d-cd2c7c95965c.png"
  },
  {
    "title": "العدد 83 - أرض العدم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/083%20%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D8%B9%D8%AF%D9%88%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/83-%D8%A3%D8%B1%D8%B6-%D8%A7%D9%84%D8%B9%D8%AF%D9%85-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 84 - كنز الفضاء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/084%20%D9%83%D9%86%D8%B2%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/84-%D9%83%D9%86%D8%B2-%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 85 - الأمل الفيروزي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/085%20%D8%A7%D9%84%D8%A3%D9%85%D9%84%20%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B2%D9%8A%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/85-%D8%A7%D9%84%D8%A3%D9%85%D9%84-%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B2%D9%8A-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 86 - الامبراطور",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/086%20%D8%A7%D9%84%D8%A7%D9%85%D8%A8%D8%B1%D8%A7%D8%B7%D9%88%D8%B1%20%D8%AC3.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.w9LIUDCRcbnxVF0GNxVSKgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 87 - نصف آلي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/087%20%D9%86%D8%B5%D9%81%20%D8%A2%D9%84%D9%8A%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/119e306a-04cf-4791-b3d0-726d8fb010cb.png"
  },
  {
    "title": "العدد 88 - الانفجار الحي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/088%20%D8%A7%D9%84%D8%A7%D9%86%D9%81%D8%AC%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AD%D9%8A%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/88-%D8%A7%D9%84%D8%A7%D9%86%D9%81%D8%AC%D8%A7%D8%B1-%D8%A7%D9%84%D8%AD%D9%8A-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 89 - البركان",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/089%20%D8%A7%D9%84%D8%A8%D8%B1%D9%83%D8%A7%D9%86%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/89-%D8%A7%D9%84%D8%A8%D8%B1%D9%83%D8%A7%D9%86-768x1007.jpg"
  },
  {
    "title": "العدد 90 - رعب في الاعماق",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/090%20%D8%B1%D8%B9%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%82%20%D8%AC2.pdf",
    "image": "https://cdn.abjjad.com/pub/3a48b1d6-127c-4023-8d38-a4c4cae579b3.png"
  },
  {
    "title": "العدد 91 - ضد الزمن",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/091%20%D8%B6%D8%AF%20%D8%A7%D9%84%D8%B2%D9%85%D9%86%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/abd7a3dc-2ac6-4b29-8fc8-2a0ae7e2cc39.png"
  },
  {
    "title": "العدد 92 - الرحلة الرهيبة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/092%20%D8%A7%D9%84%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A7%D9%84%D8%B1%D9%87%D9%8A%D8%A8%D8%A9%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/92-%D8%A7%D9%84%D8%B1%D8%AD%D9%84%D8%A9-%D8%A7%D9%84%D8%B1%D9%87%D9%8A%D8%A8%D8%A9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 93 - نقطة الصفر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/093%20%D9%86%D9%82%D8%B7%D8%A9%20%D8%A7%D9%84%D8%B5%D9%81%D8%B1%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/93-%D9%86%D9%82%D8%B7%D8%A9-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 94 - الساحر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/094%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AD%D8%B1%20%D8%AC1.pdf",
    "image": "https://www.noor-book.com/publice/covers_cache_webp/16/4/0/f/5b9c7fd23540fff60d3d1f500ca88468.png.webp"
  },
  {
    "title": "العدد 95 - القوة السوداء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/095%20%D8%A7%D9%84%D9%82%D9%88%D8%A9%20%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1%20%D8%AC2.pdf",
    "image": "https://alqarii.com/uploads/book/122019-0/fc13d7a8876849740102f11ff84839e8.jpg"
  },
  {
    "title": "العدد 96 - بذور الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/096%20%D8%A8%D8%B0%D9%88%D8%B1%20%D8%A7%D9%84%D8%B4%D8%B1%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/96-%D8%A8%D8%B0%D9%88%D8%B1-%D8%A7%D9%84%D8%B4%D8%B1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 97 - لهيب الكوكب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/097%20%D9%84%D9%87%D9%8A%D8%A8%20%D8%A7%D9%84%D9%83%D9%88%D9%83%D8%A8%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/97-%D9%84%D9%87%D9%8A%D8%A8-%D8%A7%D9%84%D9%83%D9%88%D8%A7%D9%83%D8%A8-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-768x992.jpg"
  },
  {
    "title": "العدد 98 - نيران الكون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/098%20%D9%86%D9%8A%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%83%D9%88%D9%86%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/98-%D9%86%D9%8A%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D9%83%D9%88%D9%86-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-770x1024.jpg"
  },
  {
    "title": "العدد 99 - الانفجار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/099%20%D8%A7%D9%84%D8%A7%D9%86%D9%81%D8%AC%D8%A7%D8%B1%20%D8%AC3.pdf",
    "image": "https://cdn.abjjad.com/pub/5a95e8cc-00e1-402d-b302-9b004418623e.png"
  },
  {
    "title": "العدد 100 - الزمن = صفر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/100%20%D8%A7%D9%84%D8%B2%D9%85%D9%86%20%3D%20%D8%B5%D9%81%D8%B1%20%D8%AC4.pdf",
    "image": "https://cdn.abjjad.com/pub/3f8c32eb-6b58-456c-b865-67642b5cb973.png"
  },
  {
    "title": "العدد 101 - الحرباء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/101%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D8%A7%D8%A1%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/101-%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D8%A7%D8%A1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 102 - التوأم الرهيب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/102%20%D8%A7%D9%84%D8%AA%D9%88%D8%A3%D9%85%20%D8%A7%D9%84%D8%B1%D9%87%D9%8A%D8%A8%20%D8%AC2.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.H8bMFDaASzreLp8TYs3ofgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 103 - الأرض المفقودة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/103%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D9%85%D9%81%D9%82%D9%88%D8%AF%D8%A9%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/fa3a33b7-c410-4043-87ca-63ba8dd0bcdc.png"
  },
  {
    "title": "العدد 104 - أنياب ومخالب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/104%20%D8%A3%D9%86%D9%8A%D8%A7%D8%A8%20%D9%88%D9%85%D8%AE%D8%A7%D9%84%D8%A8%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/104-%D8%A3%D9%86%D9%8A%D8%A7%D8%A8-%D9%88%D9%85%D8%AE%D8%A7%D9%84%D8%A8-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 105 - وجوه من ثلج",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/105%20%D9%88%D8%AC%D9%88%D9%87%20%D9%85%D9%86%20%D8%AB%D9%84%D8%AC.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.OK1jxo1cIEHHHBm14go7FQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 106 - بلا أثر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/106%20%D8%A8%D9%84%D8%A7%20%D8%A3%D8%AB%D8%B1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/106-%D8%A8%D9%84%D8%A7-%D8%A3%D8%AB%D8%B1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 107 - لعنة الدم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/107%20%D9%84%D8%B9%D9%86%D8%A9%20%D8%A7%D9%84%D8%AF%D9%85%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/8b12d85a-4675-4e37-8ad7-0aac946af0c6.png"
  },
  {
    "title": "العدد 108 - مصيدة الفضاء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/108%20%D9%85%D8%B5%D9%8A%D8%AF%D8%A9%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/108-%D9%85%D8%B5%D9%8A%D8%AF%D8%A9-%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-766x1024.jpg"
  },
  {
    "title": "العدد 109 - الدوامة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/109%20%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%85%D8%A9%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/109-%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%85%D8%A9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-781x1024.jpg"
  },
  {
    "title": "العدد 110 - الفجوة السوداء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/110%20%D8%A7%D9%84%D9%81%D8%AC%D9%88%D8%A9%20%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1%20%D8%AC2.pdf",
    "image": "https://wamdabook.com/media/books/image/17188.2019-01-05.1546699552.webp"
  },
  {
    "title": "العدد 111 - كوكب الطغاة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/111%20%D9%83%D9%88%D9%83%D8%A8%20%D8%A7%D9%84%D8%B7%D8%BA%D8%A7%D8%A9%20%D8%AC3.pdf",
    "image": "https://alqarii.com/uploads/book/122019-0/6b5d68b3f8cf2300eeb9f1b39be8905e.jpg"
  },
  {
    "title": "العدد 112 - بصمة الموت",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/112%20%D8%A8%D8%B5%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%D8%AC1.pdf",
    "image": "https://cdn.abjjad.com/pub/308a3f60-6fba-420e-be2a-791db4c87719.png"
  },
  {
    "title": "العدد 113 - حرب الفيروسات",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/113%20%D8%AD%D8%B1%D8%A8%20%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B3%D8%A7%D8%AA%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/113-%D8%AD%D8%B1%D8%A8-%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B3%D8%A7%D8%AA.jpg"
  },
  {
    "title": "العدد 114 - الرعب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/114%20%D8%A7%D9%84%D8%B1%D8%B9%D8%A8%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/114-%D8%A7%D9%84%D8%B1%D8%B9%D8%A8-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 115 - العدو الخارق",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/115%20%D8%A7%D9%84%D8%B9%D8%AF%D9%88%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D9%82%20%D8%AC1.pdf",
    "image": "https://latrach-edition.com/5546-large_default/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-115-%D8%A7%D9%84%D8%B9%D8%AF%D9%88%D9%91-%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D9%82.jpg"
  },
  {
    "title": "العدد 116 - العاصفة النووية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/116%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%81%D8%A9%20%D8%A7%D9%84%D9%86%D9%88%D9%88%D9%8A%D8%A9%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/116-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%81%D8%A9-%D8%A7%D9%84%D9%86%D9%88%D9%88%D9%8A%D8%A9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 117 - فارس الزمن",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/117%20%D9%81%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D8%B2%D9%85%D9%86%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/117-%D9%81%D8%A7%D8%B1%D8%B3-%D8%A7%D9%84%D8%B2%D9%85%D9%86-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 118 - ألف عصر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/118%20%D8%A3%D9%84%D9%81%20%D8%B9%D8%B5%D8%B1%20%D8%AC2.pdf",
    "image": "https://latrach-edition.com/5552-medium_default/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-118-%D8%A3%D9%84%D9%81-%D8%B9%D8%B5%D8%B1.jpg"
  },
  {
    "title": "العدد 119 - زمن الدم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/119%20%D8%B2%D9%85%D9%86%20%D8%A7%D9%84%D8%AF%D9%85%20%D8%AC3.pdf",
    "image": "https://alqarii.com/uploads/book/122019-0/883306717f43d509c8e682eab9108763.jpg"
  },
  {
    "title": "العدد 120 - الفارس الثاني",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/120%20%D8%A7%D9%84%D9%81%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%AC4.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/120-%D8%A7%D9%84%D9%81%D8%A7%D8%B1%D8%B3-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.jpg"
  },
  {
    "title": "العدد 121 - المجهول",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/121%20%D8%A7%D9%84%D9%85%D8%AC%D9%87%D9%88%D9%84%20%D8%AC1.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.yvnZmS2vqhkmrkCoQ_VtiAHaJ8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 122 - الظلال الرهيبة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/122%20%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%87%D9%8A%D8%A8%D8%A9%20%D8%AC2.pdf",
    "image": "https://www.noor-book.com/publice/covers_cache_webp/16/b/9/e/da42c176f9b9e2d7966e78d6f0143232.png.webp"
  },
  {
    "title": "العدد 123 - دائرة الظل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/123%20%D8%AF%D8%A7%D8%A6%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B8%D9%84%20%D8%AC3.pdf",
    "image": "https://alqarii.com/uploads/book/122019-0/15a37301c359c9119af9654a5603858d.jpg"
  },
  {
    "title": "العدد 124 - الغزاة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/124%20%D8%A7%D9%84%D8%BA%D8%B2%D8%A7%D8%A9%20%D8%AC4.pdf",
    "image": "https://alqarii.com/uploads/book/122019-0/0d9b300d603dde57cfade4466c464ab1.jpg"
  },
  {
    "title": "العدد 125 - كرة النار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/125%20%D9%83%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D8%A7%D8%B1%20%D8%AC1.pdf",
    "image": "https://wamdabook.com/media/books/image/21619.2019-01-05.1546707883.webp"
  },
  {
    "title": "العدد 126 - لهيب الرعب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/126%20%D9%84%D9%87%D9%8A%D8%A8%20%D8%A7%D9%84%D8%B1%D8%B9%D8%A8%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/126-%D9%84%D9%87%D9%8A%D8%A8-%D8%A7%D9%84%D8%B1%D8%B9%D8%A8-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 127 - طريق النجوم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/127%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.56rD9zLdb2e5x_sEltJ2RgHaJ5?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 128 - الزمن الآخر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/128%20%D8%A7%D9%84%D8%B2%D9%85%D9%86%20%D8%A7%D9%84%D8%A2%D8%AE%D8%B1%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/128-%D8%A7%D9%84%D8%B2%D9%85%D9%86-%D8%A7%EF%BB%B5%D8%AE%D8%B1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 129 - وراء العقل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/129%20%D9%88%D8%B1%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B9%D9%82%D9%84%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.8SvWMtd6EQU92_N3TQJNEwHaJ5?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 130 - القوة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/130%20%D8%A7%D9%84%D9%82%D9%88%D8%A9%20%D8%AC2.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.UuP3vdMRKGTaUawJQqrdpQHaJ2?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 131 - العاصفة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/131%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%81%D8%A9%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/131-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%81%D8%A9-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 132 - الرمال الحية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/132%20%D8%A7%D9%84%D8%B1%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A9%20%D8%AC2.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.sfYUuhEVtugRa27-1ZrTOAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 133 - نقطة التماس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/133%20%D9%86%D9%82%D8%B7%D8%A9%20%D8%A7%D9%84%D8%AA%D9%85%D8%A7%D8%B3%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/133-%D9%86%D9%82%D8%B7%D8%A9-%D8%A7%D9%84%D8%AA%D9%85%D8%A7%D8%B3-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 134 - سادة الكون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/134%20%D8%B3%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D9%83%D9%88%D9%86%20%D8%AC4.pdf",
    "image": "https://latrach-edition.com/5586-large_default/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-134-%D8%B3%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D9%83%D9%88%D9%86-.jpg"
  },
  {
    "title": "العدد 135 - فودو",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/135%20%D9%81%D9%88%D8%AF%D9%88%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/135-%D9%81%D9%88%D8%AF%D9%88-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 136 - الأحراش الفسفورية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/136%20%D8%A7%D9%84%D8%A7%D8%AD%D8%B1%D8%A7%D8%B4%20%D8%A7%D9%84%D9%81%D8%B3%D9%81%D9%88%D8%B1%D9%8A%D8%A9%20%D8%AC2.pdf",
    "image": "https://tahmil-kutubpdf.net/assets/bimgs/136.pdf.jpg"
  },
  {
    "title": "العدد 137 - الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/137%20%D8%A7%D9%84%D8%B4%D8%B1%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/137-%D8%A7%D9%84%D8%B4%D8%B1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 138 - الأعماق",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/138%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%82%20%D8%AC1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.KbuOsOE9bNgImrDqdVIv7gHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 139 - حرب الأشباح",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/139%20%D8%AD%D8%B1%D8%A8%20%D8%A7%D9%84%D8%A3%D8%B4%D8%A8%D8%A7%D8%AD%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/139-%D8%AD%D8%B1%D8%A8-%D8%A7%D9%84%D8%A3%D8%B4%D8%A8%D8%A7%D8%AD-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 140 - قراصنة الزمن",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/140%20%D9%82%D8%B1%D8%A7%D8%B5%D9%86%D8%A9%20%D8%A7%D9%84%D8%B2%D9%85%D9%86%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/140-%D9%82%D8%B1%D8%A7%D8%B5%D9%86%D8%A9-%D8%A7%D9%84%D8%B2%D9%85%D9%86-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 141 - الثعابين",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/141%20%D8%A7%D9%84%D8%AB%D8%B9%D8%A7%D8%A8%D9%8A%D9%86%20%D8%AC1.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.yHxb4qdY_Z4xhbphRIc_pwHaJ_?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 142 - أنياب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/142%20%D8%A3%D9%86%D9%8A%D8%A7%D8%A8%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/142-%D8%A3%D9%86%D9%8A%D8%A7%D8%A8-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 143 - بلا جسد",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/143%20%D8%A8%D9%84%D8%A7%20%D8%AC%D8%B3%D8%AF%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/143-%D8%A8%D9%84%D8%A7-%D8%AC%D8%B3%D8%AF-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 144 - العقل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/144%20%D8%A7%D9%84%D8%B9%D9%82%D9%84%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/144-%D8%A7%D9%84%D8%B9%D9%82%D9%84-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 145 - الخصم الرهيب",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/145%20%D8%A7%D9%84%D8%AE%D8%B5%D9%85%20%D8%A7%D9%84%D8%B1%D9%87%D9%8A%D8%A8.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/145-%D8%A7%D9%84%D8%AE%D8%B5%D9%85-%D8%A7%D9%84%D8%B1%D9%87%D9%8A%D8%A8-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 146 - البقعة المظلمة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/146%20%D8%A7%D9%84%D8%A8%D9%82%D8%B9%D8%A9%20%D8%A7%D9%84%D9%85%D8%B8%D9%84%D9%85%D8%A9.pdf",
    "image": "https://www.neelwafurat.com/images/eg/abookstore/covers/normal/67/67050.gif"
  },
  {
    "title": "العدد 147 - الصحوة الكبرى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/147%20%D8%A7%D9%84%D8%B5%D8%AD%D9%88%D8%A9%20%D8%A7%D9%84%D9%83%D8%A8%D8%B1%D9%89%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/147-%D8%A7%D9%84%D8%B5%D8%AD%D9%88%D8%A9-%D8%A7%D9%84%D9%83%D8%A8%D8%B1%D9%89-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-789x1024.jpg"
  },
  {
    "title": "العدد 148 - عودة الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/148%20%D8%B9%D9%88%D8%AF%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/148-%D8%B9%D9%88%D8%AF%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 149 - المخ",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/149%20%D8%A7%D9%84%D9%85%D8%AE%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/149-%D8%A7%D9%84%D9%85%D8%AE-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 150 - آخر العمالقة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/150%20%D8%A2%D8%AE%D8%B1%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9%20%D8%AC4.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.vYxtDU1YjZfhVu93F7XHiQHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 151 - بلا وعي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/151%20%D8%A8%D9%84%D8%A7%20%D9%88%D8%B9%D9%8A%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/151-%D8%A8%D9%84%D8%A7-%D9%88%D8%B9%D9%8A-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 152 - الفيروس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/152%20%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B3%20%D8%AC2.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/152-%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B3-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 153 - المفقودون",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/153%20%D8%A7%D9%84%D9%85%D9%81%D9%82%D9%88%D8%AF%D9%88%D9%86%20%D8%AC1.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/153-%D8%A7%D9%84%D9%85%D9%81%D9%82%D9%88%D8%AF%D9%88%D9%86-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 154 - الزئبق الجاف",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/154%20%D8%A7%D9%84%D8%B2%D8%A6%D8%A8%D9%82%20%D8%A7%D9%84%D8%AC%D8%A7%D9%81%20%D8%AC2.pdf",
    "image": "https://maktbtna.com/uploads/books/covers/ae3c3d1bc3ca7c90b8ff39aaab526284.png"
  },
  {
    "title": "العدد 155 - الكهف",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/155%20%D8%A7%D9%84%D9%83%D9%87%D9%81%20%D8%AC3.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/155-%D8%A7%D9%84%D9%83%D9%87%D9%81-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },
  {
    "title": "العدد 156 - عالم جديد",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/156%20%D8%B9%D8%A7%D9%84%D9%85%20%D8%AC%D8%AF%D9%8A%D8%AF%20%D8%AC1.pdf",
    "image": "https://www.4readlib.com/uploads/images/zahef1677707655.png"
  },
  {
    "title": "العدد 157 - أطلال الماضي",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/157%20%D8%A7%D8%B7%D9%84%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%A7%D8%B6%D9%8A%20%D8%AC2.pdf",
    "image": "https://latrach-edition.com/5632-large_default/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-157-%D8%A3%D8%B7%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D9%85%D8%A7%D8%B6%D9%89.jpg"
  },
  {
    "title": "العدد 158 - حرب الغد",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/158%20%D8%AD%D8%B1%D8%A8%20%D8%A7%D9%84%D8%BA%D8%AF%20%D8%AC3.pdf",
    "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1358594782i/9327306.jpg"
  },
  {
    "title": "العدد 159 - نيران المستقبل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/159%20%D9%86%D9%8A%D8%B1%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84%20%D8%AC4.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/159-%D9%86%D9%8A%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82-736x1024.jpg"
  },
  {
    "title": "العدد 160 - نهاية العالم",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreya.netlify.app/ملف-المستقبل/160%20%D9%86%D9%87%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%AC5.pdf",
    "image": "https://assets.asfar.io/uploads/2020/11/160-%D9%86%D9%87%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-%D9%86%D8%A8%D9%8A%D9%84-%D9%81%D8%A7%D8%B1%D9%88%D9%82.jpg"
  },

  //mawarraaeltabiaa



    {
    "title": "العدد 1 - مصاص الدماء و اسطورة الرجل الذئب",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/1_%D9%85%D8%B5%D8%A7%D8%B5_%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D8%A1_%D9%88_%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9_%D8%A7%D9%84%D8%B1%D8%AC%D9%84_%D8%A7%D9%84%D8%B0%D8%A6%D8%A8.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.3dHKVlT9_o4w6zwOVTpoLgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 2 - اسطورة النداهة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/2-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D8%AF%D8%A7%D9%87%D8%A9.pdf",
    "image": "https://cdn.abjjad.com/pub/796faf97-2ecd-493a-9145-95f49844120b.png"
  },
  {
    "title": "العدد 3 - اسطورة وحش البحيرة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/3-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D9%88%D8%AD%D8%B4%20%D8%A7%D9%84%D8%A8%D8%AD%D9%8A%D8%B1%D8%A9.pdf",
    "image": "https://cdn.abjjad.com/pub/00183edd-6a7d-4fed-947c-a3186efb2e6d.png"
  },
  {
    "title": "العدد 4 - اسطورة اكل البشر",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/4-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%83%D9%84%20%D8%A7%D9%84%D8%A8%D8%B4%D8%B1.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.hyyMxSG68KnoDRAbIbkxugHaKx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 5 - اسطورة الموتى الاحياء",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/5-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%D9%89%20%D8%A7%D9%84%D8%A7%D8%AD%D9%8A%D8%A7%D8%A1.pdf",
    "image": "https://media.s-bol.com/YRx331ppQMWY/OO5v8G/550x800.jpg"
  },
  {
    "title": "العدد 6 - اسطورة رأس ميدوسا",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/6-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B1%D8%A3%D8%B3%20%D9%85%D9%8A%D8%AF%D9%88%D8%B3%D8%A7.pdf",
    "image": "https://cdn.abjjad.com/pub/fd36aaae-7bfc-44a4-9964-9555401088be.png"
  },
  {
    "title": "العدد 7 - اسطورة حارس الكهف",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/7-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%AD%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D9%83%D9%87%D9%81.pdf",
    "image": "https://cdn.abjjad.com/pub/e5ff451a-173b-47b4-937d-7e5cc146a0d7.png"
  },
  {
    "title": "العدد 8 - اسطورة ارض اخرى",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/8-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D8%B1%D8%B6%20%D8%A7%D8%AE%D8%B1%D9%89.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.dfYCHJ8RIy5niA8NwzR1jgHaKx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 9 - اسطورة لعنة الفرعون",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/9-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D9%84%D8%B9%D9%86%D8%A9%20%D8%A7%D9%84%D9%81%D8%B1%D8%B9%D9%88%D9%86.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.yembkzYNxubYmaBGmHRVuQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 10 - حلقة الرعب",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/10-%20%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B1%D8%B9%D8%A8.pdf",
    "image": "https://cdn.abjjad.com/pub/a3565e4f-ccee-492c-9728-9c2ba780fe99.png"
  },
  {
    "title": "العدد 11 - اسطورة الكاهن الاخير",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/11-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%83%D8%A7%D9%87%D9%86%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1.pdf",
    "image": "https://cdn.abjjad.com/pub/372cf3e7-a92e-4757-9e6f-7d6e867e1154.png"
  },
  {
    "title": "العدد 12 - اسطورة البيت",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/12-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%AA.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.b54RlTgxXZPDQFSXGTsIAQHaKx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 13 - اسطورة اللهب الازرق",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/13-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%84%D9%87%D8%A8%20%D8%A7%D9%84%D8%A7%D8%B2%D8%B1%D9%82.pdf",
    "image": "https://cdn.abjjad.com/pub/2ec73675-1bb8-4a47-83e5-ad5a3011be2c.png"
  },
  {
    "title": "العدد 14 - اسطورة رجل الثلوج",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/14-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B1%D8%AC%D9%84%20%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC.pdf",
    "image": "https://cdn.abjjad.com/pub/2b6f08f3-e6d0-4076-9dac-6f02a9778509.png"
  },
  {
    "title": "العدد 15 - اسطورة النبات",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/15-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.d0gjCvkXOo3GGDDV5cWHIwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 16 - اسطورة النافارى",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/16-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D8%A7%D9%81%D8%A7%D8%B1%D9%89.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.ktj9EX98HANcP4eHpRfiFgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 17 - اسطورة حسناء المقبرة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/17-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%AD%D8%B3%D9%86%D8%A7%D8%A1%20%D8%A7%D9%84%D9%85%D9%82%D8%A8%D8%B1%D8%A9.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.ODN00pXmIX0MWR0f1YemlwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 18 - اسطورة الغرباء",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/18-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D8%A7%D8%A1.pdf",
    "image": "https://cdn.abjjad.com/pub/01f50ef6-3787-473b-8542-362baade38c4.png"
  },
  {
    "title": "العدد 19 - اسطورة بو",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/19-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A8%D9%88.pdf",
    "image": "https://media.s-bol.com/NRj33zEg58k2/jxOwvY/550x800.jpg"
  },
  {
    "title": "العدد 20 - حكايات التاروت",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/20-%20%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%88%D8%AA.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.6nmuBQVZRgFMX9-vHcnzDwHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 21 - اسطورة عدو الشمس",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/21-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B9%D8%AF%D9%88%20%D8%A7%D9%84%D8%B4%D9%85%D8%B3.pdf",
    "image": "https://media.s-bol.com/q95zzykX4YEk/nBNAzD/550x800.jpg"
  },
  {
    "title": "العدد 22 - اسطورة المينوتور",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/22-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D9%8A%D9%86%D9%88%D8%AA%D9%88%D8%B1.pdf",
    "image": "https://cdn.abjjad.com/pub/9135ed5d-82da-4282-8050-5896d5c02d74.png"
  },
  {
    "title": "العدد 23 - اسطورة رعب المستنقعات",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/23-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B1%D8%B9%D8%A8%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D9%82%D8%B9%D8%A7%D8%AA.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.OewJhGt2JwEKmeheEljNIAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 24 - اسطورة ايجور",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/24-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%8A%D8%AC%D9%88%D8%B1.pdf",
    "image": "https://fergianibooks.com/cdn/shop/files/8129a241530d1a1ab5cad8974bcbfb42.jpg?v=1711746585&width=1445"
  },
  {
    "title": "العدد 25 - اسطورة الجنرال العائد",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/25-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D9%86%D8%B1%D8%A7%D9%84%20%D8%A7%D9%84%D8%B9%D8%A7%D8%A6%D8%AF.pdf",
    "image": "https://cdn.abjjad.com/pub/1755f707-c54b-44e0-80e6-d3a4701b8f5a.png"
  },
  {
    "title": "العدد 26 - اسطورة المواجهة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/26-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.D9IWwxRBEig58jNQJdfzjgHaK_?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 27 - اسطورتنا",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/27-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%AA%D9%86%D8%A7.pdf",
    "image": "https://media.s-bol.com/xmVKmArRKLz3/yZxRzR/550x800.jpg"
  },
  {
    "title": "العدد 28 - اسطورة اخر الليل",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/28-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D8%AE%D8%B1%20%D8%A7%D9%84%D9%84%D9%8A%D9%84.pdf",
    "image": "https://fergianibooks.com/cdn/shop/files/3aa44b1e54c4f1fa95df354561f3b547.jpg?v=1711746612&width=1445"
  },
  {
    "title": "العدد 29 - اسطورة الجاثوم",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/29-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AC%D8%A7%D8%AB%D9%88%D9%85.pdf",
    "image": "https://cdn.abjjad.com/pub/75aea035-7c20-4ba7-8c39-d23e206eda4c.png"
  },
  {
    "title": "العدد 30 - اسطورة بعد منتصف الليل",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/30-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A8%D8%B9%D8%AF%20%D9%85%D9%86%D8%AA%D8%B5%D9%81%20%D8%A7%D9%84%D9%84%D9%8A%D9%84.pdf",
    "image": "https://fergianibooks.com/cdn/shop/files/7bd5dce7d0e77e289aca0f297785728c.jpg?v=1711746624&width=1946"
  },
  {
    "title": "العدد 31 - اسطورتها",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/31-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%AA%D9%87%D8%A7.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.7uYI_46JPzBTtcgqXiByqQHaKx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "32 - اسطورة رفعت",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/32-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B1%D9%81%D8%B9%D8%AA.pdf",
    "image": "https://media.s-bol.com/mP2EDkgQLBlG/GL2j3Q/550x800.jpg"
  },
  {
    "title": "العدد 33 - اسطورة ارض المغول",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/33-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D9%85%D8%BA%D9%88%D9%84.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.NrwG1ER3oKRocaUULAmF4AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 34 - اسطورة الشاحبين",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/34-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D8%AD%D8%A8%D9%8A%D9%86.pdf",
    "image": "https://media.s-bol.com/R7MLEOVl3WpR/2jo5PK/550x800.jpg"
  },
  {
    "title": "العدد 35 - أسطورة دماء دراكيولا",
    "author": "أحمد خالد توفيق",
    "link": "أسطورة دماء دراكيولا - سلسلة ما وراء الطبيعة.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.c-GxJuRTdbOn62Hvc8GgJgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 36 - اسطورة الفصيلة الاخيرة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/36-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%81%D8%B5%D9%8A%D9%84%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%D8%A9.pdf",
    "image": "https://tse3.mm.bing.net/th/id/OIP.IfJWnfH7RqhcL9Cjd6uJEgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 37 - اسطورة الدمية",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/37%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AF%D9%85%D9%8A%D8%A9.pdf",
    "image": "https://media.s-bol.com/mP6vvrKO72Wr/nBNAg4/550x800.jpg"
  },
  {
    "title": "العدد 38 - اسطورة النصف الاخر",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/38%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D8%B5%D9%81%20%D8%A7%D9%84%D8%A7%D8%AE%D8%B1.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.9pupDQQLhkBc5Higc3HjIQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 39 - اسطورة التوءمين",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/39%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D9%88%D8%A1%D9%85%D9%8A%D9%86.pdf",
    "image": "https://media.s-bol.com/NRE3RgZJK2q2/05P4ry/550x800.jpg"
  },
  {
    "title": "العدد 40 - وراء الباب المغلق",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/40%20-%20%D9%88%D8%B1%D8%A7%D8%A1%20%D8%A7%D9%84%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D8%BA%D9%84%D9%82.pdf",
    "image": "https://cdn.abjjad.com/pub/7cb29383-d067-486f-9711-acbb52228819.png"
  },
  {
    "title": "العدد 41 - اسطورة فرانكشتاين",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/41-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D9%81%D8%B1%D8%A7%D9%86%D9%83%D8%B4%D8%AA%D8%A7%D9%8A%D9%86.pdf",
    "image": "https://cdn.abjjad.com/pub/86bab3f5-9bf8-4503-81dc-42cdeaa3e499.png"
  },
  {
    "title": "العدد 42 - اسطورة الكلمات السبع",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/42%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%83%D9%84%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D8%A8%D8%B9.pdf",
    "image": "https://cdn.abjjad.com/pub/d03afca7-3fea-4b02-8e80-cdf2e9ac47dc.png"
  },
  {
    "title": "العدد 43 - اسطورة تختلف",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/43%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%AA%D8%AE%D8%AA%D9%84%D9%81.pdf",
    "image": "https://cdn.abjjad.com/pub/4d22ef79-7c64-4e1a-abc6-3aa9f7781821-192X290.png"
  },
  {
    "title": "العدد 44 - اسطورة رجل بكين",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/44%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B1%D8%AC%D9%84%20%D8%A8%D9%83%D9%8A%D9%86.pdf",
    "image": "https://media.s-bol.com/Byp33kpw2ZPY/EA6gqN/550x800.jpg"
  },
  {
    "title": "العدد 45 - اسطورة بيت الافاعي",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/45%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A8%D9%8A%D8%AA%20%D8%A7%D9%84%D8%A7%D9%81%D8%A7%D8%B9%D9%8A.pdf",
    "image": "https://th.bing.com/th/id/R.92a426f96ce56472fedbbfee3217eb42?rik=HXhsklFU0%2bSSmA&riu=http%3a%2f%2ffergianibooks.com%2fcdn%2fshop%2ffiles%2f1985da1a2481f7899ef4fbba92254446.jpg%3fv%3d1711746837&ehk=%2bHlklLW2i4yVUZ8DVgc18DutmWLF17BT7X%2bwGjequfI%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "title": "العدد 46 - اسطورة طفل اخر",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/46%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B7%D9%81%D9%84%20%D8%A7%D8%AE%D8%B1.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.PuTkPPLA4Vkh3HjyZ-fCSAHaKx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 47 - اسطورة المنزل رقم 5",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/47%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%20%D8%B1%D9%82%D9%85%205.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.9A2NKikhQnFfoQy3B4LURgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 48 - اسطورة المومياء",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/48%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D9%88%D9%85%D9%8A%D8%A7%D8%A1.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.isgCymTBLdPizQmP9JsWbQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 49 - اسطورة العشيرة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/49%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B4%D9%8A%D8%B1%D8%A9.pdf",
    "image": "https://media.s-bol.com/mP6vvrmz6mZr/VY0DN9/550x800.jpg"
  },
  {
    "title": "العدد 50 - في جانب النجوم",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/50%20-%20%D9%81%D9%8A%20%D8%AC%D8%A7%D9%86%D8%A8%20%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85.pdf",
    "image": "https://cdn.abjjad.com/pub/a383b3d6-4e13-4ad0-9b1c-b8420af0d0c6.png"
  },
  {
    "title": "العدد 51 - اسطورة الرقم المشئوم",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/51%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%20%D8%A7%D9%84%D9%85%D8%B4%D8%A6%D9%88%D9%85.pdf",
    "image": "https://cdn.abjjad.com/pub/12bed107-0e93-48d8-a840-20bce5f4a533.png"
  },
  {
    "title": "العدد 52 - اسطورة مملة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/52%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D9%85%D9%85%D9%84%D8%A9.pdf",
    "image": "https://media.s-bol.com/JRA333GjMVAP/kyOxrY/550x800.jpg"
  },
  {
    "title": "العدد 55 - اسطورة 099####",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/55%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20099%23%23%23%23.pdf",
    "image": "https://cdn.abjjad.com/pub/f6aee432-b1d8-487d-aa7b-9ccb804d5c14.jpg"
  },
  {
    "title": "العدد 56 - اسطورة ملك الذباب",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/56%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D9%85%D9%84%D9%83%20%D8%A7%D9%84%D8%B0%D8%A8%D8%A7%D8%A8.pdf",
    "image": "https://cdn.abjjad.com/pub/d7e10c76-8d76-4714-8bfa-4e2b01d6dd6b.png"
  },
  {
    "title": "العدد 57 - اسطورة المقبرة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/57%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D9%82%D8%A8%D8%B1%D8%A9.pdf",
    "image": "https://media.s-bol.com/mP6vvrj2BpzE/EA6gxK/550x800.jpg"
  },
  {
    "title": "العدد 58 - اسطورة ارض العضايا",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/58%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D8%B9%D8%B6%D8%A7%D9%8A%D8%A7.pdf",
    "image": "https://media.s-bol.com/NRj33zny6zRz/7jWxpw/550x800.jpg"
  },
  {
    "title": "العدد 59 - اسطورة رونيل السوداء",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/59%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B1%D9%88%D9%86%D9%8A%D9%84%20%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.c8aGaL8YbxvWdx_paZIx9QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 60 - المتحف الاسود",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/60%20-%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D9%81%20%D8%A7%D9%84%D8%A7%D8%B3%D9%88%D8%AF.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.pxlzEyg2UcQ2uFXfFei8OAHaKx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 61 - اسطورة الشيئ",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/61-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D9%8A%D8%A6.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.TJCpg8joIA4hpnnOOp0IlAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 62 - اسطورة صندوق بندورا",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/62%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B5%D9%86%D8%AF%D9%88%D9%82%20%D8%A8%D9%86%D8%AF%D9%88%D8%B1%D8%A7.pdf",
    "image": "https://media.s-bol.com/JRA333LOKjQg/lzMy2l/550x800.jpg"
  },
  {
    "title": "العدد 63 - اسطورة المحركين",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/63%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%AD%D8%B1%D9%83%D9%8A%D9%86.pdf",
    "image": "https://cdn.abjjad.com/pub/fb54cf11-f8a1-43fa-bcf3-21216eddc794.png"
  },
  {
    "title": "العدد 64 - اسطورتهم",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/64%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%AA%D9%87%D9%85.pdf",
    "image": "https://www.rewayatmasreya.com/wp-content/uploads/2021/10/64-%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%AA%D9%87%D9%85.png"
  },
  {
    "title": "العدد 65 - اسطورة العلامات الدامية",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/65%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AF%D8%A7%D9%85%D9%8A%D8%A9.pdf",
    "image": "https://cdn.abjjad.com/pub/34fd2f2b-12af-4245-9e48-36142d0394ab.png"
  },
  {
    "title": "العدد 66 - اسطورة الرجال الذين لم يعودوا كذلك",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/66_%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9_%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D9%84_%D8%A7%D9%84%D8%B0%D9%8A%D9%86_%D9%84%D9%85_%D9%8A%D8%B9%D9%88%D8%AF%D9%88%D8%A7_%D9%83%D8%B0%D9%84%D9%83.pdf",
    "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700040930i/202166635.jpg"
  },
  {
    "title": "العدد 67 - اسطورة بيت الاشباح",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/67%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A8%D9%8A%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B4%D8%A8%D8%A7%D8%AD.pdf",
    "image": "https://cdn.abjjad.com/pub/f13b1d55-cbc7-48b5-8793-c19cf83bad19.png"
  },
  {
    "title": "العدد 68 - اسطورة ارض الظلام",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/68%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D8%B1%D8%B6%20%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%85.pdf",
    "image": "https://cdn.abjjad.com/pub/89406115-da1b-49ce-83d5-f18224bc4f65.png"
  },
  {
    "title": "العدد 69 - اسطورة نادي الغيلان",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/69%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D9%86%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D8%BA%D9%8A%D9%84%D8%A7%D9%86.pdf",
    "image": "https://www.rewayatmasreya.com/wp-content/uploads/2021/10/69-%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9-%D9%86%D8%A7%D8%AF%D9%8A-%D8%A7%D9%84%D8%BA%D9%8A%D9%84%D8%A7%D9%86.png"
  },
  {
    "title": "العدد 70 - الحلقات المنسية",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/70%20-%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D9%86%D8%B3%D9%8A%D8%A9.pdf",
    "image": "https://media.s-bol.com/R7n33QL89BXE/xP706J/550x800.jpg"
  },
  {
    "title": "العدد 71 - اسطورة الظلال",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/71%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%84.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.gqSZax3azQANjXCzVDilPQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 72 - اسطورة الطوطم",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/72%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B7%D9%88%D8%B7%D9%85.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.vdpeqmfC8yt6mlPDgdSM2wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 73 - اسطورة شبه مخيفة",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/73%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%B4%D8%A8%D9%87%20%D9%85%D8%AE%D9%8A%D9%81%D8%A9.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.MwH2OogoAztj6mUZSzq65gHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 74 - اسطورة اغنية الموت",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/74%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D8%BA%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%88%D8%AA.pdf",
    "image": "https://cdn.abjjad.com/pub/c55184a9-88e6-4fd6-a13b-56e7e18cf90a.png"
  },
  {
    "title": "العدد 75 - اسطورة الطفيل",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/75%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B7%D9%81%D9%8A%D9%84.pdf",
    "image": "https://img1.od-cdn.com/ImageType-400/6251-1/%7BCEEAA33B-D1D5-47A4-B9C8-CBD2973E1C2D%7DIMG400.JPG"
  },
  {
    "title": "العدد 76 - اسطورة معرض الرعب",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/76%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D9%85%D8%B9%D8%B1%D8%B6%20%D8%A7%D9%84%D8%B1%D8%B9%D8%A8.pdf",
    "image": "https://tse4.mm.bing.net/th/id/OIP.tlPPaODVbOKMkHhf5KklRAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 77 - اسطورة الفتاة الزرقاء",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/77%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B2%D8%B1%D9%82%D8%A7%D8%A1.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.gTehRyiet5b_Gr13hyydFAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 78 - اسطورة حامل الضياء",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/78_%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9_%D8%AD%D8%A7%D9%85%D9%84_%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D8%A1_%D8%A7%D9%84%D8%AC%D8%B2%D8%A1_%D8%A7%D9%84%D8%A7%D9%88%D9%84.pdf",
    "image": "https://cdn.abjjad.com/pub/f6ad6839-b84c-4941-8760-9b2439c565e6.jpg"
  },
  {
    "title": "العدد 79 - اسطورة حامل الضياء (الجزء الثاني)",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/79_%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9_%D8%AD%D8%A7%D9%85%D9%84_%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D8%A1_%D8%A7%D9%84%D8%AC%D8%B2%D8%A1_%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf",
    "image": "https://tse2.mm.bing.net/th/id/OIP.ipqW7XSVnE-ranpzLJCUtAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 80 - اسطورة الاساطير (الجزء الاول)",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/80%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D8%A7%D8%B7%D9%8A%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.pdf",
    "image": "https://tse1.mm.bing.net/th/id/OIP.e-Z3cac9pns_vXqhjuls-QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    "title": "العدد 81 - اسطورة الاساطير (الجزء الثاني)",
    "author": "أحمد خالد توفيق",
    "link": "https://files-rewayatmasreyaa.netlify.app/ما%20وراء%20الطبيعة/81%20-%20%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D8%A7%D8%B7%D9%8A%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.pdf",
    "image": "https://th.bing.com/th/id/R.dc336fe8a9650a56af3439c368932381?rik=1UGE1X20jGTVGQ&riu=http%3a%2f%2ffergianibooks.com%2fcdn%2fshop%2ffiles%2f727f867589d6d4b8c8df663e3fab53b0.jpg%3fv%3d1711747098&ehk=EgNg2oENC6mm85oRQeCelVCBFtvJp9ADlBSqKrMqc%2b4%3d&risl=&pid=ImgRaw&r=0"
  }
,//a3dad
    {
    "title": "العدد 1 - المعركة الكبرى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D9%83%D8%A8%D8%B1%D9%89%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/5/5c/%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%83%D8%A9_%D8%A7%D9%84%D9%83%D8%A8%D8%B1%D9%89_1.jpg"
  },
  {
    "title": "العدد 2 - بلا حدود",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A8%D9%84%D8%A7%20%D8%AD%D8%AF%D9%88%D8%AF%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/8/83/%D8%A8%D9%84%D8%A7_%D8%AD%D8%AF%D9%88%D8%AF_2.png/300px-%D8%A8%D9%84%D8%A7_%D8%AD%D8%AF%D9%88%D8%AF_2.png"
  },
  {
    "title": "العدد 3 - العميل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%B9%D9%85%D9%8A%D9%84.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/8/86/%D8%A7%D9%84%D8%B9%D9%85%D9%8A%D9%84_3.png"
  },
  {
    "title": "العدد 4 - الحلقة الجهنمية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AC%D9%87%D9%86%D9%85%D9%8A%D8%A9%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/1/10/%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_%D8%A7%D9%84%D8%AC%D9%87%D9%86%D9%85%D9%8A%D8%A9_4.png/300px-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9_%D8%A7%D9%84%D8%AC%D9%87%D9%86%D9%85%D9%8A%D8%A9_4.png"
  },
  {
    "title": "العدد 5 - الزهرة السوداء",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/d/da/%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A9_%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1_5.jpg/225px-%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A9_%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1_5.jpg"
  },
  {
    "title": "العدد 6 - أسير الثلوج",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A3%D8%B3%D9%8A%D8%B1%20%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC%20%D8%B1%D8%AC%D9%84%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/0/0d/%D8%A3%D8%B3%D9%8A%D8%B1_%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC_6.png/300px-%D8%A3%D8%B3%D9%8A%D8%B1_%D8%A7%D9%84%D8%AB%D9%84%D9%88%D8%AC_6.png"
  },
  {
    "title": "العدد 7 - سرى للغاية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%B3%D8%B1%D9%8A%20%D9%84%D9%84%D8%BA%D8%A7%D9%8A%D8%A9%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/6/62/%D8%B3%D8%B1%D9%8A_%D9%84%D9%84%D8%BA%D8%A7%D9%8A%D8%A9_7.png/300px-%D8%B3%D8%B1%D9%8A_%D9%84%D9%84%D8%BA%D8%A7%D9%8A%D8%A9_7.png"
  },
  {
    "title": "العدد 8 - الموت لا ياتى مرتين",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D9%85%D9%88%D8%AA_%D9%84%D8%A7_%D9%8A%D8%A7%D8%AA%D9%8A_%D9%85%D8%B1%D8%AA%D9%8A%D9%86_%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF_%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/a/af/%D8%A7%D9%84%D9%85%D9%88%D8%AA_%D9%84%D8%A7_%D9%8A%D8%A3%D8%AA%D9%8A_%D9%85%D8%B1%D8%AA%D9%8A%D9%86_8.JPG"
  },
  {
    "title": "العدد 9 - المواجهة الاولى",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89%20%D8%B1%D8%AC%D9%84%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AD%D9%8A%D9%84.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/0/0f/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89_9.png/300px-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89_9.png"
  },
  {
    "title": "العدد 10 - ساعات الخطر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%B3%D8%A7%D8%B9%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AE%D8%B7%D8%B1%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/1/17/%D8%B3%D8%A7%D8%B9%D8%A7%D8%AA_%D8%A7%D9%84%D8%AE%D8%B7%D8%B1_10.png/300px-%D8%B3%D8%A7%D8%B9%D8%A7%D8%AA_%D8%A7%D9%84%D8%AE%D8%B7%D8%B1_10.png"
  },
  {
    "title": "العدد 11 - عملية عنق الزجاجة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%B9%D9%85%D9%84%D9%8A%D8%A9%20%D8%B9%D9%86%D9%82%20%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/c/c2/%D8%B9%D9%85%D9%84%D9%8A%D8%A9_%D8%B9%D9%86%D9%82_%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC%D8%A9_11.jpg"
  },
  {
    "title": "العدد 12 - الحصار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%AD%D8%B5%D8%A7%D8%B1%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/7/74/%D8%A7%D9%84%D8%AD%D8%B5%D8%A7%D8%B1_12.png/300px-%D8%A7%D9%84%D8%AD%D8%B5%D8%A7%D8%B1_12.png"
  },
  {
    "title": "العدد 13 - الطيف",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%B7%D9%8A%D9%81%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/0/0a/%D8%A7%D9%84%D8%B7%D9%8A%D9%81_13.png/300px-%D8%A7%D9%84%D8%B7%D9%8A%D9%81_13.png"
  },
  {
    "title": "العدد 14 - تحت علم مصر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%AA%D8%AD%D8%AA%20%D8%B9%D9%84%D9%85%20%D9%85%D8%B5%D8%B1%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/1/1f/%D8%AA%D8%AD%D8%AA_%D8%B9%D9%84%D9%85_%D9%85%D8%B5%D8%B1_14.png"
  },
  {
    "title": "العدد 15 - س - 18",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%B3%20-%2018%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/0/0e/%D8%B3_-_18_15.png/300px-%D8%B3_-_18_15.png"
  },
  {
    "title": "العدد 16 - البداية",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/4/47/%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9_16.jpg"
  },
  {
    "title": "العدد 17 - كائنات",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D9%83%D8%A7%D8%A6%D9%86%D8%A7%D8%AA%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/2/20/%D9%83%D8%A7%D8%A6%D9%86%D8%A7%D8%AA_17.png/300px-%D9%83%D8%A7%D8%A6%D9%86%D8%A7%D8%AA_17.png"
  },
  {
    "title": "العدد 18 - أنياب الأسد",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A3%D9%86%D9%8A%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A3%D8%B3%D8%AF%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/1/15/%D8%A3%D9%86%D9%8A%D8%A7%D8%A8_%D8%A7%D9%84%D8%A3%D8%B3%D8%AF_18.png/300px-%D8%A3%D9%86%D9%8A%D8%A7%D8%A8_%D8%A7%D9%84%D8%A3%D8%B3%D8%AF_18.png"
  },
  {
    "title": "العدد 19 - الجيل الثالث",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%AC%D9%8A%D9%84%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/4/45/%D8%A7%D9%84%D8%AC%D9%8A%D9%84_%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB_19.png/300px-%D8%A7%D9%84%D8%AC%D9%8A%D9%84_%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB_19.png"
  },
  {
    "title": "العدد 20 - الجحيم !",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/4/44/%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85_%21.png/300px-%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85_%21.png"
  },
  {
    "title": "العدد 21 - البارون الأحمر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D9%88%D9%86%20%D8%A7%D9%84%D8%A7%D8%AD%D9%85%D8%B1%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/d/d0/%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D9%88%D9%86_%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1_21.png/300px-%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D9%88%D9%86_%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1_21.png"
  },
  {
    "title": "العدد 22 - الشمس الباردة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D8%AF%D8%A9%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/f/f6/%D8%A7%D9%84%D8%B4%D9%85%D8%B3_%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D8%AF%D8%A9_22.jpg/300px-%D8%A7%D9%84%D8%B4%D9%85%D8%B3_%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D8%AF%D8%A9_22.jpg"
  },
  {
    "title": "العدد 23 - أدهم!",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D8%AF%D9%87%D9%85%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/0/0c/%D8%A3%D8%AF%D9%87%D9%85_%21_23.jpg/300px-%D8%A3%D8%AF%D9%87%D9%85_%21_23.jpg"
  },
  {
    "title": "العدد 24 - الفجوة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D9%81%D8%AC%D9%88%D8%A9%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/9/9c/%D8%A7%D9%84%D9%81%D8%AC%D9%88%D8%A9_24.jpg"
  },
  {
    "title": "العدد 25 - الموت في قطرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%B1%D8%A9%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/3/3c/%D8%A7%D9%84%D9%85%D9%88%D8%AA_%D9%81%D9%8A_%D9%82%D8%B7%D8%B1%D8%A9_25.jpg/300px-%D8%A7%D9%84%D9%85%D9%88%D8%AA_%D9%81%D9%8A_%D9%82%D8%B7%D8%B1%D8%A9_25.jpg"
  },
  {
    "title": "العدد 26 - خدعة القرن",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%AE%D8%AF%D8%B9%D8%A9%20%D8%A7%D9%84%D9%82%D8%B1%D9%86%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/c/c8/%D8%AE%D8%AF%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%B1%D9%86_26.jpg/300px-%D8%AE%D8%AF%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%B1%D9%86_26.jpg"
  },
  {
    "title": "العدد 27 - قوس أنوبيس",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D9%82%D9%88%D8%B3%20%D8%A7%D9%86%D9%88%D8%A8%D9%8A%D8%B3%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/thumb/2/2e/%D9%82%D9%88%D8%B3_%D8%A3%D9%86%D9%88%D8%A8%D9%8A%D8%B3_27.jpg/300px-%D9%82%D9%88%D8%B3_%D8%A3%D9%86%D9%88%D8%A8%D9%8A%D8%B3_27.jpg"
  },
  {
    "title": "العدد 28 - قلعة الشر",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D9%82%D9%84%D8%B9%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/8/8d/%D9%82%D9%84%D8%B9%D8%A9_%D8%A7%D9%84%D8%B4%D8%B1_28.jpg"
  },
  {
    "title": "العدد 29 - أورار",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%88%D8%B1%D8%A7%D8%B1%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/6/6a/%D8%A3%D9%88%D8%B1%D8%A7%D8%B1_29.JPG"
  },
  {
    "title": "العدد 30 - الكلمة الأخيرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D9%83%D9%84%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%D8%A9%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/3/3a/%D8%A7%D9%84%D9%83%D9%84%D9%85%D8%A9_%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%D8%A9_30.JPG"
  },
  {
    "title": "العدد 31 - الدائرة",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D8%A9%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/8/8b/%D8%A7%D9%84%D8%AF%D8%A7%D8%A6%D8%B1%D8%A9_31.JPG"
  },
  {
    "title": "العدد 32 - المتسلسل",
    "author": "نبيل فاروق",
    "link": "https://files-rewayatmasreyaa.netlify.app/%D8%A7%D9%84%D8%A3%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9/%D8%A7%D9%84%D9%85%D8%AA%D8%B3%D9%84%D8%B3%D9%84%20-%20%D8%A7%D9%84%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9.pdf",
    "image": "https://upload.wikimedia.org/wikipedia/ar/4/4d/%D8%A7%D9%84%D9%85%D8%AA%D8%B3%D9%84%D8%B3%D9%84_32.JPG"
  },
    ];
