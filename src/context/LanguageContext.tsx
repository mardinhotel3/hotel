import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'TR' | 'EN';

interface Translations {
  [key: string]: {
    TR: string;
    EN: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.mardin": { TR: "MARDİN", EN: "MARDIN" },
  "nav.konak": { TR: "KONAK", EN: "MANSION" },
  "nav.vip": { TR: "VIP HİZMETLER", EN: "VIP SERVICES" },
  "nav.odalar": { TR: "ODALAR", EN: "ROOMS" },
  "nav.gastronomi": { TR: "GASTRONOMİ", EN: "GASTRONOMY" },
  "nav.galeri": { TR: "GALERİ", EN: "GALLERY" },
  "nav.iletisim": { TR: "İLETİŞİM", EN: "CONTACT" },
  "nav.rezervasyon": { TR: "Rezervasyon", EN: "Reservation" },
  "nav.rezervasyonYap": { TR: "Rezervasyon Yap", EN: "Book Now" },
  "nav.subtitle": { TR: "Terrace Mardin Otel", EN: "Terrace Mardin Hotel" },

  // Hero
  "hero.slide1.label": { TR: "Mezopotamya'nın Kalbinde", EN: "In the Heart of Mesopotamia" },
  "hero.slide1.title1": { TR: "Tarihin ", EN: "Awaken to the " },
  "hero.slide1.titleEm": { TR: "Sesiyle", EN: "Sound" },
  "hero.slide1.title2": { TR: "Uyandığınız Yer", EN: " of History" },
  "hero.slide1.subtitle": { TR: "Binlerce yıllık tarihin izlerini taşıyan Mardin'in antik sokaklarında, lüks ve otantikliğin buluştuğu eşsiz bir konaklama deneyimi.", EN: "A unique accommodation experience combining luxury and authenticity in the ancient streets of Mardin, bearing the traces of thousands of years of history." },

  "hero.slide2.label": { TR: "Tarihi Taş Odalar", EN: "Historical Stone Rooms" },
  "hero.slide2.title1": { TR: "Geçmişin ", EN: "Elegance of the " },
  "hero.slide2.titleEm": { TR: "Zarafeti", EN: "Past" },
  "hero.slide2.title2": { TR: "Bugünün Konforu", EN: "Comfort of Today" },
  "hero.slide2.subtitle": { TR: "Her odası özgün Mardin taşından işlenmiş, antika mobilyalar ve modern konforun mükemmel birleşimi ile tasarlandı.", EN: "Each room is crafted from authentic Mardin stone, designed with a perfect blend of antique furniture and modern comfort." },

  "hero.slide3.label": { TR: "Teras Gastronomi", EN: "Terrace Gastronomy" },
  "hero.slide3.title1": { TR: "Mezopotamya ", EN: "Mesopotamian " },
  "hero.slide3.titleEm": { TR: "Mutfağı", EN: "Cuisine" },
  "hero.slide3.title2": { TR: "Gün Batımında", EN: "at Sunset" },
  "hero.slide3.subtitle": { TR: "Yüzyıllık tarifleri Mardin'in panoramik manzarası eşliğinde sunan çatı terasımızda unutulmaz bir yemek deneyimi.", EN: "An unforgettable dining experience on our roof terrace, offering century-old recipes accompanied by a panoramic view of Mardin." },

  "hero.btn.rezervasyon": { TR: "Rezervasyon Yap", EN: "Book Now" },
  "hero.btn.kesfet": { TR: "Oteli Keşfet", EN: "Discover Hotel" },
  "hero.badge.label": { TR: "Awarded to", EN: "Awarded to" },
  "hero.badge.hotel": { TR: "Terrace Mardin Otel", EN: "Terrace Mardin Hotel" },
  "hero.scroll": { TR: "Keşfet", EN: "Explore" },

  // About
  "about.label": { TR: "Tarihi Konak Hikayemiz", EN: "Our Historic Mansion Story" },
  "about.title1": { TR: "Mezopotamya'nın ", EN: "A Century-Old Sanctuary " },
  "about.titleEm": { TR: "Kalbinde", EN: "in the Heart" },
  "about.title2": { TR: "Yüzyıllık Bir Sığınak", EN: " of Mesopotamia" },
  "about.desc1": { TR: "1627 yılında inşa edilen bu tarihi yapı, asırlık Mardin taşından örülmüş duvarları ve özgün mimari detaylarıyla bugün lüks bir butik otele dönüştürüldü. Her köşesinde tarihin fısıldadığı konağımız, UNESCO Dünya Mirası listesindeki Mardin'in en prestijli adreslerinden birini oluşturuyor.", EN: "Built in 1627, this historic structure with its century-old Mardin stone walls and original architectural details has been transformed into a luxury boutique hotel today. Our mansion, where history whispers in every corner, forms one of the most prestigious addresses in Mardin, a UNESCO World Heritage site." },
  "about.desc2": { TR: "Orijinal taş kemerler, ahşap tavan detayları ve el yapımı çiniler titizlikle restore edilirken çağdaş konfor anlayışıyla buluşturuldu. Her odamız kendi hikayesini anlatır; sizi geçmişe yolculuğa davet eder.", EN: "Original stone arches, wooden ceiling details, and handmade tiles have been meticulously restored and brought together with a contemporary understanding of comfort. Each room tells its own story; inviting you on a journey into the past." },
  "about.quote": { TR: "\"Mardin'de bir gece geçirmek, tarihle nefes almanın kendisidir.\"", EN: "\"Spending a night in Mardin is breathing history itself.\"" },
  "about.badge.num": { TR: "1627", EN: "1627" },
  "about.badge.text": { TR: "Yılından<br />Beri", EN: "Since<br />Then" },
  "about.stat.oda": { TR: "Eşsiz Oda", EN: "Unique Rooms" },
  "about.stat.tarih": { TR: "Yıllık Tarih", EN: "Years of History" },
  "about.stat.puan": { TR: "Misafir Puanı", EN: "Guest Rating" },
  "about.btn": { TR: "Odalarımızı Keşfet →", EN: "Discover Our Rooms →" },

  // Rooms
  "rooms.label": { TR: "Odalar & Suitler", EN: "Rooms & Suites" },
  "rooms.title1": { TR: "Her Oda Bir ", EN: "Every Room is a " },
  "rooms.titleEm": { TR: "Hikaye", EN: "Story" },
  "rooms.subtitle": { TR: "Özgün Mardin taşından restore edilmiş 18 odamız, tarihi atmosferi çağdaş lüksle buluşturuyor.", EN: "Our 18 rooms, restored from original Mardin stone, bring together historical atmosphere with contemporary luxury." },
  "rooms.gece": { TR: "/ gece", EN: "/ night" },
  "rooms.incele": { TR: "İncele →", EN: "View →" },

  "room1.category": { TR: "Öne Çıkan Oda", EN: "Featured Room" },
  "room1.name": { TR: "Tarihi Taş Suit", EN: "Historical Stone Suite" },
  "room1.guests": { TR: "2 Kişi", EN: "2 Guests" },
  "room1.view": { TR: "Panoramik Şehir", EN: "Panoramic City" },

  "room2.category": { TR: "Klasik Oda", EN: "Classic Room" },
  "room2.name": { TR: "Standart Taş Oda", EN: "Standard Stone Room" },
  "room2.guests": { TR: "2 Kişi", EN: "2 Guests" },
  "room2.view": { TR: "Avlu Manzarası", EN: "Courtyard View" },

  "room3.category": { TR: "Premium Suite", EN: "Premium Suite" },
  "room3.name": { TR: "Teras Suit", EN: "Terrace Suite" },
  "room3.guests": { TR: "2-4 Kişi", EN: "2-4 Guests" },
  "room3.view": { TR: "Mezopotamya Ovası", EN: "Mesopotamian Plains" },

  // Services
  "services.label": { TR: "Hizmetlerimiz", EN: "Our Services" },
  "services.title1": { TR: "Her Detay ", EN: "Every Detail " },
  "services.titleEm": { TR: "Özenle", EN: "Carefully" },
  "services.title2": { TR: " Tasarlandı", EN: " Designed" },
  
  "service1.name": { TR: "VIP Transfer", EN: "VIP Transfer" },
  "service1.desc": { TR: "Havalimanı ve şehir içi ulaşımlarınızda lüks araçlarımız ve profesyonel şoförlerimizle konforlu bir yolculuk deneyimi.", EN: "A comfortable travel experience with our luxury vehicles and professional drivers for your airport and city transfers." },
  
  "service2.name": { TR: "Teras Restoran", EN: "Terrace Restaurant" },
  "service2.desc": { TR: "Mezopotamya mutfağından ilham alan menüler, panoramik şehir manzarası eşliğinde.", EN: "Menus inspired by Mesopotamian cuisine, accompanied by a panoramic city view." },
  
  "service3.name": { TR: "Ücretsiz Otopark", EN: "Free Parking" },
  "service3.desc": { TR: "Konağımıza çok yakın, güvenli ve ücretsiz otopark alanımızla aracınız her zaman güvende ve elinizin altında.", EN: "With our secure and free parking area very close to our mansion, your vehicle is always safe and at hand." },

  "service4.name": { TR: "Concierge", EN: "Concierge" },
  "service4.desc": { TR: "24 saat kişisel concierge ekibimiz her isteğinizi özenle karşılar.", EN: "Our 24-hour personal concierge team carefully fulfills your every request." },

  "service5.name": { TR: "Hızlı İnternet", EN: "High-Speed Internet" },
  "service5.desc": { TR: "Tüm alanlarda gigabit fiber internet bağlantısı, iş seyahatleri için ideal.", EN: "Gigabit fiber internet connection in all areas, ideal for business trips." },

  "service6.name": { TR: "Sabah Kahvaltısı", EN: "Breakfast" },
  "service6.desc": { TR: "Mardin'in yerel lezzetleri ve organik ürünlerle zenginleştirilmiş açık büfe.", EN: "Open buffet enriched with Mardin's local flavors and organic products." },

  "service7.name": { TR: "Sanal Tur", EN: "Virtual Tour" },
  "service7.desc": { TR: "Tarihi Mardin sokaklarında rehberli tur ve profesyonel fotoğraf çekimi.", EN: "Guided tour in the historical streets of Mardin and professional photo shooting." },

  "service8.name": { TR: "Şehir Turları", EN: "City Tours" },
  "service8.desc": { TR: "Yerel rehberlerimizle UNESCO Miras Alanı Mardin'i keşfedin.", EN: "Discover the UNESCO Heritage Site Mardin with our local guides." },

  "services.banner.label": { TR: "Özel Deneyim", EN: "Exclusive Experience" },
  "services.banner.title1": { TR: "VIP Kutlama & ", EN: "VIP Celebration & " },
  "services.banner.titleEm": { TR: "Özel Organizasyon", EN: "Special Event" },
  "services.banner.title2": { TR: " Paketleri", EN: " Packages" },
  "services.banner.desc": { TR: "Evlilik teklifi, doğum günü, yıl dönümü ya da iş toplantısı için tamamen kişiselleştirilmiş organizasyon paketleri sunuyoruz. Ekibimiz her detayı sizin için planlıyor.", EN: "We offer fully personalized organization packages for marriage proposals, birthdays, anniversaries, or business meetings. Our team plans every detail for you." },
  "services.banner.btn": { TR: "Teklif Alın", EN: "Get a Quote" },

  // Gastronomy
  "astro.label": { TR: "Mezopotamya Mutfağı", EN: "Mesopotamian Cuisine" },
  "astro.title1": { TR: "Tarihin ", EN: "The Flavor " },
  "astro.titleEm": { TR: "Lezzetiyle", EN: "of History" },
  "astro.title2": { TR: " Buluşun", EN: "" },
  "astro.desc": { TR: "Binlerce yıllık kültürün süzgecinden geçmiş Mardin mutfağı, özgün baharatları ve asırlık tarifleriyle sizi unutulmaz bir gastronomi yolculuğuna davet ediyor.", EN: "Mardin cuisine, filtered through thousands of years of culture, invites you to an unforgettable gastronomic journey with its unique spices and century-old recipes." },
  
  "astro.dish1.name": { TR: "Kaburga Dolması", EN: "Stuffed Lamb Ribs" },
  "astro.dish1.desc": { TR: "Bademli iç pilav ve özel baharatlarla doldurulmuş, saatlerce kısık ateşte pişmiş kuzu kaburgası.", EN: "Lamb ribs stuffed with almond rice and special spices, cooked for hours over low heat." },
  
  "astro.dish2.name": { TR: "İçli Köfte (Irok)", EN: "Stuffed Meatballs (Irok)" },
  "astro.dish2.desc": { TR: "Mardin usulü kızartılmış, bol baharatlı ve cevizli özel iç dolgulu dışı çıtır lezzet.", EN: "Mardin-style fried, crispy exterior with a spicy and walnut filling." },
  
  "astro.dish3.name": { TR: "Sembusek", EN: "Sembusek (Mardin Pastry)" },
  "astro.dish3.desc": { TR: "İnce hamur arasına baharatlı kıyma ve sebze karışımıyla hazırlanan kapalı lahmacun.", EN: "Closed pastry prepared with a mixture of spicy minced meat and vegetables between thin dough." },
  
  "astro.dish4.name": { TR: "Harire Tatlısı", EN: "Harire Dessert" },
  "astro.dish4.desc": { TR: "Üzüm pekmezi ve tarçının muhteşem uyumuyla hazırlanan geleneksel Süryani tatlısı.", EN: "A traditional Syriac dessert prepared with the perfect harmony of grape molasses and cinnamon." },


  // Gallery
  "gallery.label": { TR: "Fotoğraf Galerisi", EN: "Photo Gallery" },
  "gallery.title1": { TR: "Konağımızı ", EN: "Discover Our Mansion " },
  "gallery.titleEm": { TR: "Gözlerinizle", EN: "Through Your Eyes" },
  "gallery.title2": { TR: " Keşfedin", EN: "" },

  // Reservation
  "reservation.label": { TR: "Çevrimiçi Rezervasyon", EN: "Online Reservation" },
  "reservation.title1": { TR: "Mardin'de ", EN: "An " },
  "reservation.titleEm": { TR: "Unutulmaz", EN: "Unforgettable" },
  "reservation.title2": { TR: " Bir Konaklama", EN: " Stay in Mardin" },
  "reservation.desc": { TR: "Tarihi konağımızda size özel hazırlanmış konforlu odalardan birini ayırtın. Erken rezervasyon avantajları ve özel paketler için bizimle iletişime geçin.", EN: "Book one of our comfortable rooms specially prepared for you in our historical mansion. Contact us for early booking advantages and special packages." },
  "reservation.feat1": { TR: "Ücretsiz İptal", EN: "Free Cancellation" },
  "reservation.feat2": { TR: "En İyi Fiyat Garantisi", EN: "Best Price Guarantee" },
  "reservation.feat3": { TR: "Karşılama Servisi", EN: "Welcome Service" },
  "reservation.feat4": { TR: "Özel Organizasyon", EN: "Special Event" },
  "reservation.feat5": { TR: "Kahvaltı Dahil", EN: "Breakfast Included" },
  "reservation.feat6": { TR: "24/7 Destek", EN: "24/7 Support" },
  
  "form.title": { TR: "Rezervasyon Sorgulama", EN: "Reservation Inquiry" },
  "form.checkin": { TR: "Giriş Tarihi", EN: "Check-in Date" },
  "form.checkout": { TR: "Çıkış Tarihi", EN: "Check-out Date" },
  "form.guests": { TR: "Misafir Sayısı", EN: "Number of Guests" },
  "form.roomType": { TR: "Oda Tipi", EN: "Room Type" },
  "form.name": { TR: "Ad Soyad", EN: "Full Name" },
  "form.namePlaceholder": { TR: "Adınız", EN: "Your Name" },
  "form.phone": { TR: "Telefon", EN: "Phone" },
  "form.email": { TR: "E-posta", EN: "Email" },
  "form.emailPlaceholder": { TR: "ornek@email.com", EN: "example@email.com" },
  "form.submit": { TR: "Rezervasyon Talebi Gönder", EN: "Send Reservation Request" },
  "form.note": { TR: "24 saat içinde size geri dönüş yapacağız.", EN: "We will get back to you within 24 hours." },
  "form.guest1": { TR: "1 Kişi", EN: "1 Guest" },
  "form.guest2": { TR: "2 Kişi", EN: "2 Guests" },
  "form.guest3": { TR: "3 Kişi", EN: "3 Guests" },
  "form.guest4": { TR: "4+ Kişi", EN: "4+ Guests" },
  "form.room1": { TR: "Tüm Odalar", EN: "All Rooms" },
  "form.room2": { TR: "Standart Taş Oda", EN: "Standard Stone Room" },
  "form.room3": { TR: "Tarihi Taş Suit", EN: "Historical Stone Suite" },
  "form.room4": { TR: "Teras Suit", EN: "Terrace Suite" },

  // Testimonials
  "test.label": { TR: "Misafir Yorumları", EN: "Guest Reviews" },
  "test.title1": { TR: "Onlar ", EN: "Let Them " },
  "test.titleEm": { TR: "Anlatsın", EN: "Tell You" },
  
  "test1.text": { TR: "Mardin'e gittiğimde konaklayabileceğim en özel yeri aradım ve bulduk. Taş duvarlar, asırlık tavan detayları ve manzara... Kelimelerle anlatmak yetersiz kalıyor.", EN: "When I went to Mardin, I looked for the most special place to stay and we found it. Stone walls, century-old ceiling details and the view... Words fall short." },
  "test2.text": { TR: "The historical atmosphere, the stunning views over Mesopotamia, and the impeccable service make this a truly unique experience. The breakfast alone is worth the stay.", EN: "The historical atmosphere, the stunning views over Mesopotamia, and the impeccable service make this a truly unique experience. The breakfast alone is worth the stay." },
  "test3.text": { TR: "Teras restoranında gün batımını izlerken yediğimiz Mardin mutfağı... O an için buraya kadar gelmek değer. Personel son derece ilgili.", EN: "The Mardin cuisine we ate while watching the sunset on the terrace restaurant... It's worth coming all this way for that moment. The staff is extremely attentive." },
  "test4.text": { TR: "Konağın her köşesi bir sanat eseri gibi. Mardin'in ruhunu bu kadar iyi yansıtan başka bir yer olduğunu düşünmüyorum.", EN: "Every corner of the mansion is like a work of art. I don't think there's another place that reflects the spirit of Mardin so well." },
  "test5.text": { TR: "Eşimle balayımız için tercih ettik. Bize kendimizi kraliyet ailesindenmişiz gibi hissettirdiler. Şiddetle tavsiye ederim.", EN: "We chose it for our honeymoon. They made us feel like royalty. I highly recommend it." },
  "test6.text": { TR: "Odaların serinliği ve taş işçiliği büyüleyici. Modern teknoloji ile tarihin bu kadar iyi harmanlanması çok başarılı.", EN: "The coolness of the rooms and the stone craftsmanship are fascinating. Such a successful blend of history and modern technology." },
  "test7.text": { TR: "Mardin'in en iyi konumunda. Kale manzarası ve Mezopotamya ovasına bakmak huzur verici. Kahvaltı ise tam bir şölen.", EN: "In the best location of Mardin. Looking at the castle view and the Mesopotamian plain is peaceful. The breakfast is a real feast." },
  "test8.text": { TR: "Personel çok nazik ve her konuda yardımcı oldular. VIP transfer hizmeti çok konforluydu.", EN: "The staff was very kind and helpful in every way. The VIP transfer service was very comfortable." },
  "test9.text": { TR: "Geleneksel Türk hamamı deneyimi harikaydı. Yorgunluğumuzu tamamen attık. Hijyen standartları en üst düzeyde.", EN: "The traditional Turkish bath experience was great. We completely got rid of our tiredness. Hygiene standards are at the highest level." },
  "test10.text": { TR: "Mimarisi karşısında büyülenmemek elde değil. Her detay özenle korunmuş. Gerçek bir tarih yolculuğu.", EN: "It's impossible not to be fascinated by its architecture. Every detail is carefully preserved. A real journey through history." },
  "test11.text": { TR: "Akşam yemeğinde sunulan yöresel lezzetler damak çatlatan cinsten. Özellikle içli köfteyi mutlaka denemelisiniz.", EN: "The local delicacies offered at dinner are mouth-watering. You should definitely try the 'icli kofte'." },
  "test12.text": { TR: "Şehir gürültüsünden uzak, sakin ve huzurlu bir atmosfer. Kitap okumak için terasları harika.", EN: "A calm and peaceful atmosphere away from the city noise. The terraces are great for reading books." },
  "test13.text": { TR: "İnternet hızı bir tarihi konak için şaşırtıcı derecede iyiydi. İşlerimi kolayca halledebileceğim bir ortam sunuldu.", EN: "The internet speed was surprisingly good for a historic mansion. An environment where I could easily handle my business was provided." },
  "test14.text": { TR: "Otelin her noktası fotoğraf çekmek için ideal. Instagram için harika kareler yakaladık.", EN: "Every point of the hotel is ideal for taking photos. We captured great frames for Instagram." },
  "test15.text": { TR: "Yerel rehberlik hizmeti sayesinde Mardin'in bilinmeyen yerlerini keşfettik. Çok profesyonel bir ekipti.", EN: "Thanks to the local guidance service, we discovered unknown places of Mardin. It was a very professional team." },
  "test16.text": { TR: "Yataklar çok konforluydu ve uyku kalitesi mükemmeldi. Sessizlik ve huzur arayanlar için doğru adres.", EN: "The beds were very comfortable and the sleep quality was excellent. The right address for those looking for silence and peace." },
  "test17.text": { TR: "Avluya bakan penceremizden kuş sesleriyle uyanmak paha biçilemezdi.", EN: "Waking up to the sound of birds from our window overlooking the courtyard was priceless." },
  "test18.text": { TR: "Çocuklu bir aile olarak çok rahat ettik. Personel çocuklarımıza karşı çok ilgiliydi.", EN: "We were very comfortable as a family with children. The staff was very attentive to our children." },
  "test19.text": { TR: "Butik otel anlayışını tam olarak karşılayan bir yer. Kişiye özel hizmet kalitesi çok yüksek.", EN: "A place that fully meets the boutique hotel understanding. Personal service quality is very high." },
  "test20.text": { TR: "Mardin'in dar sokaklarında kaybolduktan sonra bu konak tam bir vaha gibi geldi.", EN: "After getting lost in the narrow streets of Mardin, this mansion felt like a real oasis." },
  "test21.text": { TR: "Tarihi dokuyu bozmadan yapılan restorasyon gerçekten takdire şayan. Emeği geçenlere teşekkürler.", EN: "The restoration done without spoiling the historical texture is truly admirable. Thanks to those who contributed." },
  "test22.text": { TR: "Check-in ve check-out işlemleri çok hızlı ve sorunsuz gerçekleşti. Profesyonel yönetim anlayışı.", EN: "Check-in and check-out processes were very fast and smooth. Professional management understanding." },
  "test23.text": { TR: "Oda servisinin hızı ve sunumu çok başarılıydı. Her şey taze ve sıcaktı.", EN: "The speed and presentation of room service were very successful. Everything was fresh and hot." },
  "test24.text": { TR: "Banyodaki buklet malzemeleri bile yerel ve doğal ürünlerden seçilmiş. İnce bir detay.", EN: "Even the amenities in the bathroom were chosen from local and natural products. A fine detail." },
  "test25.text": { TR: "Konak, Mardin'in tüm tarihi mekanlarına yürüme mesafesinde. Lokasyon harika.", EN: "The mansion is within walking distance of all historical sites in Mardin. The location is great." },
  "test26.text": { TR: "Akşamları terasta canlı müzik dinlemek çok keyifliydi. Atmosfer çok romantik.", EN: "Listening to live music on the terrace in the evenings was very pleasant. The atmosphere is very romantic." },
  "test27.text": { TR: "Otel genelinde temizlik kusursuzdu. Her yer tertemiz ve mis gibi kokuyordu.", EN: "Cleanliness throughout the hotel was perfect. Everywhere was spotless and smelled great." },
  "test28.text": { TR: "Mezopotamya ovasının sonsuzluğuna karşı kahve içmek unutulmaz bir deneyim.", EN: "Drinking coffee against the infinity of the Mesopotamian plain is an unforgettable experience." },
  "test29.text": { TR: "Güvenlik ve mahremiyet konusundaki hassasiyetleri için teşekkür ederiz.", EN: "Thank you for your sensitivity regarding security and privacy." },
  "test30.text": { TR: "Mardin'e her geldiğimde mutlaka burada kalacağım. Gerçek bir ev konforu ve otel lüksü.", EN: "I will definitely stay here every time I come to Mardin. Real home comfort and hotel luxury." },

  // Footer
  "footer.tagline": { TR: "Terrace Mardin Butik Otel · est. 1627", EN: "Terrace Mardin Boutique Hotel · est. 1627" },
  "footer.desc": { TR: "Yüzyıllık taş duvarları, özgün Mardin mimarisi ve Mezopotamya manzarasıyla size tarihin içinde lüks bir konaklama sunuyoruz.", EN: "With its century-old stone walls, original Mardin architecture and Mesopotamian view, we offer you a luxurious stay in history." },
  
  "footer.col1.title": { TR: "Keşfet", EN: "Explore" },
  "footer.col1.link1": { TR: "Konak Hakkında", EN: "About the Mansion" },
  "footer.col1.link2": { TR: "Odalar & Suitler", EN: "Rooms & Suites" },
  "footer.col1.link3": { TR: "Hizmetlerimiz", EN: "Our Services" },
  "footer.col1.link4": { TR: "Gastronomi", EN: "Gastronomy" },
  "footer.col1.link5": { TR: "Galeri", EN: "Gallery" },

  "footer.col2.title": { TR: "Bilgi", EN: "Information" },
  "footer.col2.link1": { TR: "Mardin Rehberi", EN: "Mardin Guide" },
  "footer.col2.link2": { TR: "VIP Hizmetler", EN: "VIP Services" },
  "footer.col2.link3": { TR: "Sanal Tur", EN: "Virtual Tour" },
  "footer.col2.link4": { TR: "İptal Koşulları", EN: "Cancellation Policy" },
  "footer.col2.link5": { TR: "SSS", EN: "FAQ" },

  "footer.col3.title": { TR: "İletişim", EN: "Contact" },
  "footer.address": { 
    TR: "Eski Mardin Üçyol 1. Cadde, Şehidiye Mahallesi Yeni Sk. 20. Sk Dış Kapı No: 5<br />Terrace Merdin Butik Otel & Konak", 
    EN: "Eski Mardin Üçyol 1. Cadde, Şehidiye District Yeni Sk. 20. Sk Outer Door No: 5<br />Terrace Merdin Boutique Hotel & Mansion" 
  },
  
  "footer.copy": { TR: "© {year} Terrace Mardin Otel. Tüm hakları saklıdır.", EN: "© {year} Terrace Mardin Hotel. All rights reserved." },
  "footer.bottom1": { TR: "Gizlilik Politikası", EN: "Privacy Policy" },
  "footer.bottom2": { TR: "Kullanım Koşulları", EN: "Terms of Use" },
  "footer.bottom3": { TR: "Çerez Politikası", EN: "Cookie Policy" },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'TR',
  setLang: () => {},
  t: (key: string) => key
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('TR');

  const t = (key: string, params?: Record<string, string>) => {
    let str = translations[key]?.[lang] || key;
    if (params) {
      Object.keys(params).forEach(p => {
        str = str.replace(`{${p}}`, params[p]);
      });
    }
    return str;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
