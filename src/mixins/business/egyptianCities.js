export default {
  data() {
    return {
      egyptianCities: [
        {
          arabic: "القاهرة",
          english: "Cairo",
          cities: [
            { arabic: "15 مايو", english: "15 May" },
            { arabic: "الازبكية", english: "Al Azbakeyah" },
            { arabic: "البساتين", english: "Al Basatin" },
            { arabic: "التبين", english: "Tebin" },
            { arabic: "الخليفة", english: "El-Khalifa" },
            { arabic: "الدراسة", english: "El darrasa" },
            { arabic: "الدرب الاحمر", english: "Aldarb Alahmar" },
            { arabic: "الزاوية الحمراء", english: "Zawya al-Hamra" },
            { arabic: "الزيتون", english: "El-Zaytoun" },
            { arabic: "الساحل", english: "Sahel" },
            { arabic: "السلام", english: "El Salam" },
            { arabic: "السيدة زينب", english: "Sayeda Zeinab" },
            { arabic: "الشرابية", english: "El Sharabeya" },
            { arabic: "مدينة الشروق", english: "Shorouk" },
            { arabic: "الظاهر", english: "El Daher" },
            { arabic: "العتبة", english: "Ataba" },
            { arabic: "القاهرة الجديدة", english: "New Cairo" },
            { arabic: "المرج", english: "El Marg" },
            { arabic: "عزبة النخل", english: "Ezbet el Nakhl" },
            { arabic: "المطرية", english: "Matareya" },
            { arabic: "المعادى", english: "Maadi" },
            { arabic: "المعصرة", english: "Maasara" },
            { arabic: "المقطم", english: "Mokattam" },
            { arabic: "المنيل", english: "Manyal" },
            { arabic: "الموسكى", english: "Mosky" },
            { arabic: "النزهة", english: "Nozha" },
            { arabic: "الوايلى", english: "Waily" },
            { arabic: "باب الشعرية", english: "Bab al-Shereia" },
            { arabic: "بولاق", english: "Bolaq" },
            { arabic: "جاردن سيتى", english: "Garden City" },
            { arabic: "حدائق القبة", english: "Hadayek El-Kobba" },
            { arabic: "حلوان", english: "Helwan" },
            { arabic: "دار السلام", english: "Dar Al Salam" },
            { arabic: "شبرا", english: "Shubra" },
            { arabic: "طره", english: "Tura" },
            { arabic: "عابدين", english: "Abdeen" },
            { arabic: "عباسية", english: "Abaseya" },
            { arabic: "عين شمس", english: "Ain Shams" },
            { arabic: "مدينة نصر", english: "Nasr City" },
            { arabic: "مصر الجديدة", english: "New Heliopolis" },
            { arabic: "مصر القديمة", english: "Masr Al Qadima" },
            { arabic: "منشية ناصر", english: "Mansheya Nasir" },
            { arabic: "مدينة بدر", english: "Badr City" },
            { arabic: "مدينة العبور", english: "Obour City" },
            { arabic: "وسط البلد", english: "Cairo Downtown" },
            { arabic: "الزمالك", english: "Zamalek" },
            { arabic: "قصر النيل", english: "Kasr El Nile" },
            { arabic: "الرحاب", english: "Rehab" },
            { arabic: "القطامية", english: "Katameya" },
            { arabic: "مدينتي", english: "Madinty" },
            { arabic: "روض الفرج", english: "Rod Alfarag" },
            { arabic: "شيراتون", english: "Sheraton" },
            { arabic: "الجمالية", english: "El-Gamaleya" },
            { arabic: "العاشر من رمضان", english: "10th of Ramadan City" },
            { arabic: "الحلمية", english: "Helmeyat Alzaytoun" },
            { arabic: "النزهة الجديدة", english: "New Nozha" },
            { arabic: "العاصمة الإدارية", english: "Capital New" },
          ],
        },
        {
          arabic: "الجيزة",
          english: "Giza",
          cities: [
            { arabic: "الجيزة", english: "Giza" },
            { arabic: "السادس من أكتوبر", english: "Sixth of October" },
            { arabic: "الشيخ زايد", english: "Cheikh Zayed" },
            { arabic: "الحوامدية", english: "Hawamdiyah" },
            { arabic: "البدرشين", english: "Al Badrasheen" },
            { arabic: "الصف", english: "Saf" },
            { arabic: "أطفيح", english: "Atfih" },
            { arabic: "العياط", english: "Al Ayat" },
            { arabic: "الباويطي", english: "Al-Bawaiti" },
            { arabic: "منشأة القناطر", english: "ManshiyetAl Qanater" },
            { arabic: "أوسيم", english: "Oaseem" },
            { arabic: "كرداسة", english: "Kerdasa" },
            { arabic: "أبو النمرس", english: "Abu Nomros" },
            { arabic: "كفر غطاطي", english: "Kafr Ghati" },
            { arabic: "منشأة البكاري", english: "Manshiyet Al Bakari" },
            { arabic: "الدقى", english: "Dokki" },
            { arabic: "العجوزة", english: "Agouza" },
            { arabic: "الهرم", english: "Haram" },
            { arabic: "الوراق", english: "Warraq" },
            { arabic: "امبابة", english: "Imbaba" },
            { arabic: "بولاق الدكرور", english: "Boulaq Dakrour" },
            { arabic: "الواحات البحرية", english: "Al Wahat Al Baharia" },
            { arabic: "العمرانية", english: "Omraneya" },
            { arabic: "المنيب", english: "Moneeb" },
            { arabic: "بين السرايات", english: "Bin Alsarayat" },
            { arabic: "الكيت كات", english: "Kit Kat" },
            { arabic: "المهندسين", english: "Mohandessin" },
            { arabic: "فيصل", english: "Faisal" },
            { arabic: "أبو رواش", english: "Abu Rawash" },
            { arabic: "حدائق الأهرام", english: "Hadayek Alahram" },
            { arabic: "الحرانية", english: "Haraneya" },
            { arabic: "حدائق اكتوبر", english: "Hadayek October" },
            { arabic: "صفط اللبن", english: "Saft Allaban" },
            { arabic: "القرية الذكية", english: "Smart Village" },
            { arabic: "ارض اللواء", english: "Ard Ellwaa" },
          ],
        },
        {
          arabic: "الأسكندرية",
          english: "Alexandria",
          cities: [
            { arabic: "ابو قير", english: "Abu Qir" },
            { arabic: "الابراهيمية", english: "Al Ibrahimeyah" },
            { arabic: "الأزاريطة", english: "Azarita" },
            { arabic: "الانفوشى", english: "Anfoushi" },
            { arabic: "الدخيلة", english: "Dekheila" },
            { arabic: "السيوف", english: "El Soyof" },
            { arabic: "العامرية", english: "Ameria" },
            { arabic: "اللبان", english: "El Labban" },
            { arabic: "المفروزة", english: "Al Mafrouza" },
            { arabic: "المنتزه", english: "El Montaza" },
            { arabic: "المنشية", english: "Mansheya" },
            { arabic: "الناصرية", english: "Naseria" },
            { arabic: "امبروزو", english: "Ambrozo" },
            { arabic: "باب شرق", english: "Bab Sharq" },
            { arabic: "برج العرب", english: "Bourj Alarab" },
            { arabic: "ستانلى", english: "Stanley" },
            { arabic: "سموحة", english: "Smouha" },
            { arabic: "سيدى بشر", english: "Sidi Bishr" },
            { arabic: "شدس", english: "Shads" },
            { arabic: "غيط العنب", english: "Gheet Alenab" },
            { arabic: "فلمينج", english: "Fleming" },
            { arabic: "فيكتوريا", english: "Victoria" },
            { arabic: "كامب شيزار", english: "Camp Shizar" },
            { arabic: "كرموز", english: "Karmooz" },
            { arabic: "محطة الرمل", english: "Mahta Alraml" },
            { arabic: "مينا البصل", english: "Mina El-Basal" },
            { arabic: "العصافرة", english: "Asafra" },
            { arabic: "العجمي", english: "Agamy" },
            { arabic: "بكوس", english: "Bakos" },
            { arabic: "بولكلي", english: "Boulkly" },
            { arabic: "كليوباترا", english: "Cleopatra" },
            { arabic: "جليم", english: "Glim" },
            { arabic: "المعمورة", english: "Al Mamurah" },
            { arabic: "المندرة", english: "Al Mandara" },
            { arabic: "محرم بك", english: "Moharam Bek" },
            { arabic: "الشاطبي", english: "Elshatby" },
            { arabic: "سيدي جابر", english: "Sidi Gaber" },
            { arabic: "الساحل الشمالي", english: "North Coast-sahel" },
            { arabic: "الحضرة", english: "Alhadra" },
            { arabic: "العطارين", english: "Alattarin" },
            { arabic: "سيدي كرير", english: "Sidi Kerir" },
            { arabic: "الجمرك", english: "Elgomrok" },
            { arabic: "المكس", english: "Al Max" },
            { arabic: "مارينا", english: "Marina" },
          ],
        },
        {
          arabic: "الدقهلية",
          english: "Dakahlia",
          cities: [
            { arabic: "المنصورة", english: "Mansoura" },
            { arabic: "طلخا", english: "Talkha" },
            { arabic: "ميت غمر", english: "Mitt Ghamr" },
            { arabic: "دكرنس", english: "Dekernes" },
            { arabic: "أجا", english: "Aga" },
            { arabic: "منية النصر", english: "Menia El Nasr" },
            { arabic: "السنبلاوين", english: "Sinbillawin" },
            { arabic: "الكردي", english: "El Kurdi" },
            { arabic: "بني عبيد", english: "Bani Ubaid" },
            { arabic: "المنزلة", english: "Al Manzala" },
            { arabic: "تمي الأمديد", english: "tami al'amdid" },
            { arabic: "الجمالية", english: "aljamalia" },
            { arabic: "شربين", english: "Sherbin" },
            { arabic: "المطرية", english: "Mataria" },
            { arabic: "بلقاس", english: "Belqas" },
            { arabic: "ميت سلسيل", english: "Meet Salsil" },
            { arabic: "جمصة", english: "Gamasa" },
            { arabic: "محلة دمنة", english: "Mahalat Damana" },
            { arabic: "نبروه", english: "Nabroh" },
          ],
        },
        {
          arabic: "البحر الأحمر",
          english: "Red Sea",
          cities: [
            { arabic: "الغردقة", english: "Hurghada" },
            { arabic: "رأس غارب", english: "Ras Ghareb" },
            { arabic: "سفاجا", english: "Safaga" },
            { arabic: "القصير", english: "El Qusiar" },
            { arabic: "مرسى علم", english: "Marsa Alam" },
            { arabic: "الشلاتين", english: "Shalatin" },
            { arabic: "حلايب", english: "Halaib" },
            { arabic: "الدهار", english: "Aldahar" },
          ],
        },
        {
          arabic: "البحيرة",
          english: "Beheira",
          cities: [
            { arabic: "دمنهور", english: "Damanhour" },
            { arabic: "كفر الدوار", english: "Kafr El Dawar" },
            { arabic: "رشيد", english: "Rashid" },
            { arabic: "إدكو", english: "Edco" },
            { arabic: "أبو المطامير", english: "Abu al-Matamir" },
            { arabic: "أبو حمص", english: "Abu Homs" },
            { arabic: "الدلنجات", english: "Delengat" },
            { arabic: "المحمودية", english: "Mahmoudiyah" },
            { arabic: "الرحمانية", english: "Rahmaniyah" },
            { arabic: "إيتاي البارود", english: "Itai Baroud" },
            { arabic: "حوش عيسى", english: "Housh Eissa" },
            { arabic: "شبراخيت", english: "Shubrakhit" },
            { arabic: "كوم حمادة", english: "Kom Hamada" },
            { arabic: "بدر", english: "Badr" },
            { arabic: "وادي النطرون", english: "Wadi Natrun" },
            { arabic: "النوبارية الجديدة", english: "New Nubaria" },
            { arabic: "النوبارية", english: "Alnoubareya" },
          ],
        },
        {
          arabic: "الفيوم",
          english: "Fayoum",
          cities: [
            { arabic: "الفيوم", english: "Fayoum" },
            { arabic: "الفيوم الجديدة", english: "Fayoum El Gedida" },
            { arabic: "طامية", english: "Tamiya" },
            { arabic: "سنورس", english: "Snores" },
            { arabic: "إطسا", english: "Etsa" },
            { arabic: "إبشواي", english: "Epschway" },
            { arabic: "يوسف الصديق", english: "Yusuf El Sediaq" },
            { arabic: "الحادقة", english: "Hadqa" },
            { arabic: "اطسا", english: "Atsa" },
            { arabic: "الجامعة", english: "Algamaa" },
            { arabic: "السيالة", english: "Sayala" },
          ],
        },
        {
          arabic: "الغربية",
          english: "Gharbiya",
          cities: [
            { arabic: "طنطا", english: "Tanta" },
            { arabic: "المحلة الكبرى", english: "Al Mahalla Al Kobra" },
            { arabic: "كفر الزيات", english: "Kafr El Zayat" },
            { arabic: "زفتى", english: "Zefta" },
            { arabic: "السنطة", english: "El Santa" },
            { arabic: "قطور", english: "Qutour" },
            { arabic: "بسيون", english: "Basion" },
            { arabic: "سمنود", english: "Samannoud" },
          ],
        },
        {
          arabic: "الإسماعلية",
          english: "Ismailia",
          cities: [
            { arabic: "الإسماعيلية", english: "Ismailia" },
            { arabic: "فايد", english: "Fayed" },
            { arabic: "القنطرة شرق", english: "Qantara Sharq" },
            { arabic: "القنطرة غرب", english: "Qantara Gharb" },
            { arabic: "التل الكبير", english: "El Tal El Kabier" },
            { arabic: "أبو صوير", english: "Abu Sawir" },
            { arabic: "القصاصين الجديدة", english: "Kasasien El Gedida" },
            { arabic: "نفيشة", english: "Nefesha" },
            { arabic: "الشيخ زايد", english: "Sheikh Zayed" },
          ],
        },
        {
          arabic: "المنوفية",
          english: "Menofia",
          cities: [
            { arabic: "شبين الكوم", english: "Shbeen El Koom" },
            { arabic: "مدينة السادات", english: "Sadat City" },
            { arabic: "منوف", english: "Menouf" },
            { arabic: "سرس الليان", english: "Sars El-Layan" },
            { arabic: "أشمون", english: "Ashmon" },
            { arabic: "الباجور", english: "Al Bagor" },
            { arabic: "قويسنا", english: "Quesna" },
            { arabic: "بركة السبع", english: "Berkat El Saba" },
            { arabic: "تلا", english: "Tala" },
            { arabic: "الشهداء", english: "Al Shohada" },
          ],
        },
        {
          arabic: "المنيا",
          english: "Minya",
          cities: [
            { arabic: "المنيا", english: "Minya" },
            { arabic: "المنيا الجديدة", english: "Minya El Gedida" },
            { arabic: "العدوة", english: "El Adwa" },
            { arabic: "مغاغة", english: "Magagha" },
            { arabic: "بني مزار", english: "Bani Mazar" },
            { arabic: "مطاي", english: "Mattay" },
            { arabic: "سمالوط", english: "Samalut" },
            { arabic: "المدينة الفكرية", english: "Madinat El Fekria" },
            { arabic: "ملوي", english: "Meloy" },
            { arabic: "دير مواس", english: "Deir Mawas" },
            { arabic: "ابو قرقاص", english: "Abu Qurqas" },
            { arabic: "ارض سلطان", english: "Ard Sultan" },
          ],
        },
        {
          arabic: "القليوبية",
          english: "Qaliubiya",
          cities: [
            { arabic: "بنها", english: "Banha" },
            { arabic: "قليوب", english: "Qalyub" },
            { arabic: "شبرا الخيمة", english: "Shubra Al Khaimah" },
            { arabic: "القناطر الخيرية", english: "Al Qanater Charity" },
            { arabic: "الخانكة", english: "Khanka" },
            { arabic: "كفر شكر", english: "Kafr Shukr" },
            { arabic: "طوخ", english: "Tukh" },
            { arabic: "قها", english: "Qaha" },
            { arabic: "العبور", english: "Obour" },
            { arabic: "الخصوص", english: "Khosous" },
            { arabic: "شبين القناطر", english: "Shibin Al Qanater" },
            { arabic: "مسطرد", english: "Mostorod" },
          ],
        },
        {
          arabic: "الوادي الجديد",
          english: "New Valley",
          cities: [
            { arabic: "الخارجة", english: "El Kharga" },
            { arabic: "باريس", english: "Paris" },
            { arabic: "موط", english: "Mout" },
            { arabic: "الفرافرة", english: "Farafra" },
            { arabic: "بلاط", english: "Balat" },
            { arabic: "الداخلة", english: "Dakhla" },
          ],
        },
        {
          arabic: "السويس",
          english: "Suez",
          cities: [
            { arabic: "السويس", english: "Suez" },
            { arabic: "الجناين", english: "Alganayen" },
            { arabic: "عتاقة", english: "Ataqah" },
            { arabic: "العين السخنة", english: "Ain Sokhna" },
            { arabic: "فيصل", english: "Faysal" },
          ],
        },
        {
          arabic: "اسوان",
          english: "Aswan",
          cities: [
            { arabic: "أسوان", english: "Aswan" },
            { arabic: "أسوان الجديدة", english: "Aswan El Gedida" },
            { arabic: "دراو", english: "Drau" },
            { arabic: "كوم أمبو", english: "Kom Ombo" },
            { arabic: "نصر النوبة", english: "Nasr Al Nuba" },
            { arabic: "كلابشة", english: "Kalabsha" },
            { arabic: "إدفو", english: "Edfu" },
            { arabic: "الرديسية", english: "Al-Radisiyah" },
            { arabic: "البصيلية", english: "Al Basilia" },
            { arabic: "السباعية", english: "Al Sibaeia" },
            { arabic: "ابوسمبل السياحية", english: "Abo Simbl Al Siyahia" },
            { arabic: "مرسى علم", english: "Marsa Alam" },
          ],
        },
        {
          arabic: "اسيوط",
          english: "Assiut",
          cities: [
            { arabic: "أسيوط", english: "Assiut" },
            { arabic: "أسيوط الجديدة", english: "Assiut El Gedida" },
            { arabic: "ديروط", english: "Dayrout" },
            { arabic: "منفلوط", english: "Manfalut" },
            { arabic: "القوصية", english: "Qusiya" },
            { arabic: "أبنوب", english: "Abnoub" },
            { arabic: "أبو تيج", english: "Abu Tig" },
            { arabic: "الغنايم", english: "El Ghanaim" },
            { arabic: "ساحل سليم", english: "Sahel Selim" },
            { arabic: "البداري", english: "El Badari" },
            { arabic: "صدفا", english: "Sidfa" },
          ],
        },
        {
          arabic: "بني سويف",
          english: "Beni Suef",
          cities: [
            { arabic: "بني سويف", english: "Bani Sweif" },
            { arabic: "بني سويف الجديدة", english: "Beni Suef El Gedida" },
            { arabic: "الواسطى", english: "Al Wasta" },
            { arabic: "ناصر", english: "Naser" },
            { arabic: "إهناسيا", english: "Ehnasia" },
            { arabic: "ببا", english: "beba" },
            { arabic: "الفشن", english: "Fashn" },
            { arabic: "سمسطا", english: "Somasta" },
            { arabic: "الاباصيرى", english: "Alabbaseri" },
            { arabic: "مقبل", english: "Mokbel" },
          ],
        },
        {
          arabic: "بورسعيد",
          english: "Port Said",
          cities: [
            { arabic: "بورسعيد", english: "PorSaid" },
            { arabic: "بورفؤاد", english: "Port Fouad" },
            { arabic: "العرب", english: "Alarab" },
            { arabic: "حى الزهور", english: "Zohour" },
            { arabic: "حى الشرق", english: "Alsharq" },
            { arabic: "حى الضواحى", english: "Aldawahi" },
            { arabic: "حى المناخ", english: "Almanakh" },
            { arabic: "حى مبارك", english: "Mubarak" },
            { arabic: "دمياط", english: "Damietta" },
          ],
        },
        {
          arabic: "دمياط",
          english: "Damietta",
          cities: [
            { arabic: "دمياط", english: "Damietta" },
            { arabic: "دمياط الجديدة", english: "New Damietta" },
            { arabic: "رأس البر", english: "Ras El Bar" },
            { arabic: "فارسكور", english: "Faraskour" },
            { arabic: "الزرقا", english: "Zarqa" },
            { arabic: "السرو", english: "alsaru" },
            { arabic: "الروضة", english: "alruwda" },
            { arabic: "كفر البطيخ", english: "Kafr El-Batikh" },
            { arabic: "عزبة البرج", english: "Azbet Al Burg" },
            { arabic: "ميت أبو غالب", english: "Meet Abou Ghalib" },
            { arabic: "كفر سعد", english: "Kafr Saad" },
          ],
        },
        {
          arabic: "الشرقية",
          english: "Sharkia",
          cities: [
            { arabic: "الزقازيق", english: "Zagazig" },
            { arabic: "العاشر من رمضان", english: "Al Ashr Men Ramadan" },
            { arabic: "منيا القمح", english: "Minya Al Qamh" },
            { arabic: "بلبيس", english: "Belbeis" },
            { arabic: "مشتول السوق", english: "Mashtoul El Souq" },
            { arabic: "القنايات", english: "Qenaiat" },
            { arabic: "أبو حماد", english: "Abu Hammad" },
            { arabic: "القرين", english: "El Qurain" },
            { arabic: "ههيا", english: "Hehia" },
            { arabic: "أبو كبير", english: "Abu Kabir" },
            { arabic: "فاقوس", english: "Faccus" },
            { arabic: "الصالحية الجديدة", english: "El Salihia El Gedida" },
            { arabic: "الإبراهيمية", english: "Al Ibrahimiyah" },
            { arabic: "ديرب نجم", english: "Deirb Negm" },
            { arabic: "كفر صقر", english: "Kafr Saqr" },
            { arabic: "أولاد صقر", english: "Awlad Saqr" },
            { arabic: "الحسينية", english: "Husseiniya" },
            { arabic: "صان الحجر القبلية", english: "san alhajar alqablia" },
            { arabic: "منشأة أبو عمر", english: "Manshayat Abu Omar" },
          ],
        },
        {
          arabic: "جنوب سيناء",
          english: "South Sinai",
          cities: [
            { arabic: "الطور", english: "Al Toor" },
            { arabic: "شرم الشيخ", english: "Sharm El-Shaikh" },
            { arabic: "دهب", english: "Dahab" },
            { arabic: "نويبع", english: "Nuweiba" },
            { arabic: "طابا", english: "Taba" },
            { arabic: "سانت كاترين", english: "Saint Catherine" },
            { arabic: "أبو رديس", english: "Abu Redis" },
            { arabic: "أبو زنيمة", english: "Abu Zenaima" },
            { arabic: "رأس سدر", english: "Ras Sidr" },
          ],
        },
        {
          arabic: "كفر الشيخ",
          english: "Kafr Al sheikh",
          cities: [
            { arabic: "كفر الشيخ", english: "Kafr El Sheikh" },
            {
              arabic: "وسط البلد كفر الشيخ",
              english: "Kafr El Sheikh Downtown",
            },
            { arabic: "دسوق", english: "Desouq" },
            { arabic: "فوه", english: "Fooh" },
            { arabic: "مطوبس", english: "Metobas" },
            { arabic: "برج البرلس", english: "Burg Al Burullus" },
            { arabic: "بلطيم", english: "Baltim" },
            { arabic: "مصيف بلطيم", english: "Masief Baltim" },
            { arabic: "الحامول", english: "Hamol" },
            { arabic: "بيلا", english: "Bella" },
            { arabic: "الرياض", english: "Riyadh" },
            { arabic: "سيدي سالم", english: "Sidi Salm" },
            { arabic: "قلين", english: "Qellen" },
            { arabic: "سيدي غازي", english: "Sidi Ghazi" },
          ],
        },
        {
          arabic: "مطروح",
          english: "Matrouh",
          cities: [
            { arabic: "مرسى مطروح", english: "Marsa Matrouh" },
            { arabic: "الحمام", english: "El Hamam" },
            { arabic: "العلمين", english: "Alamein" },
            { arabic: "الضبعة", english: "Dabaa" },
            { arabic: "النجيلة", english: "Al-Nagila" },
            { arabic: "سيدي براني", english: "Sidi Brani" },
            { arabic: "السلوم", english: "Salloum" },
            { arabic: "سيوة", english: "Siwa" },
            { arabic: "مارينا", english: "Marina" },
            { arabic: "الساحل الشمالى", english: "North Coast" },
          ],
        },
        {
          arabic: "الأقصر",
          english: "Luxor",
          cities: [
            { arabic: "الأقصر", english: "Luxor" },
            { arabic: "الأقصر الجديدة", english: "New Luxor" },
            { arabic: "إسنا", english: "Esna" },
            { arabic: "طيبة الجديدة", english: "New Tiba" },
            { arabic: "الزينية", english: "Al ziynia" },
            { arabic: "البياضية", english: "Al Bayadieh" },
            { arabic: "القرنة", english: "Al Qarna" },
            { arabic: "أرمنت", english: "Armant" },
            { arabic: "الطود", english: "Al Tud" },
          ],
        },
        {
          arabic: "قنا",
          english: "Qena",
          cities: [
            { arabic: "قنا", english: "Qena" },
            { arabic: "قنا الجديدة", english: "New Qena" },
            { arabic: "ابو طشت", english: "Abu Tesht" },
            { arabic: "نجع حمادي", english: "Nag Hammadi" },
            { arabic: "دشنا", english: "Deshna" },
            { arabic: "الوقف", english: "Alwaqf" },
            { arabic: "قفط", english: "Qaft" },
            { arabic: "نقادة", english: "Naqada" },
            { arabic: "فرشوط", english: "Farshout" },
            { arabic: "قوص", english: "Quos" },
          ],
        },
        {
          arabic: "شمال سيناء",
          english: "North Sinai",
          cities: [
            { arabic: "العريش", english: "Arish" },
            { arabic: "الشيخ زويد", english: "Sheikh Zowaid" },
            { arabic: "نخل", english: "Nakhl" },
            { arabic: "رفح", english: "Rafah" },
            { arabic: "بئر العبد", english: "Bir al-Abed" },
            { arabic: "الحسنة", english: "Al Hasana" },
          ],
        },
        {
          arabic: "سوهاج",
          english: "Sohag",
          cities: [
            { arabic: "سوهاج", english: "Sohag" },
            { arabic: "سوهاج الجديدة", english: "Sohag El Gedida" },
            { arabic: "أخميم", english: "Akhmeem" },
            { arabic: "أخميم الجديدة", english: "Akhmim El Gedida" },
            { arabic: "البلينا", english: "Albalina" },
            { arabic: "المراغة", english: "El Maragha" },
            { arabic: "المنشأة", english: "almunsha'a" },
            { arabic: "دار السلام", english: "Dar AISalaam" },
            { arabic: "جرجا", english: "Gerga" },
            { arabic: "جهينة الغربية", english: "Jahina Al Gharbia" },
            { arabic: "ساقلته", english: "Saqilatuh" },
            { arabic: "طما", english: "Tama" },
            { arabic: "طهطا", english: "Tahta" },
            { arabic: "الكوثر", english: "Alkawthar" },
          ],
        },
      ],
    };
  },
};
