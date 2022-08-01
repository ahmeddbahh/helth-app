export default {
  data() {
    return {
      insuranceCompanies = [
        {
          english: "Medright",
          arabic: "ميد رايت",
        },
        {
          english: "Axa",
          arabic: "أكسا",
        },
        {
          english: "Metlife Alico",
          arabic: "ميتلايف اليكو",
        },
        {
          english: "Engineers Syndicate",
          arabic: "نقابة المهندسين",
        },
        {
          english: "Egycare",
          arabic: "ايجيكير",
        },
        {
          english: "Unicare",
          arabic: "يونى كير",
        },
        {
          english: "Prime Health",
          arabic: "برايم هيلث",
        },
        {
          english: "Egyptian Medical Syndicate",
          arabic: "نقابة الاطباء",
        },
        {
          english: "Diamond Medical Service",
          arabic: "دايموند ميديكال سيرفيس",
        },
        {
          english: "Abu Qir Fertilizers",
          arabic: "ابو قير للاسمدة",
        },
        {
          english: "Academy of Haram Talents ِand their Families",
          arabic: "اكاديمية موهوبين الهرم وذويهم",
        },
        {
          english: "Access",
          arabic: "اكسس",
        },
        {
          english: "Active Company",
          arabic: "شركة اكتف",
        },
        {
          english: "Active for Medical Services",
          arabic: "اكتف للخدمات الصحية",
        },
        {
          english: "Agiba Petroleum Company",
          arabic: "شركة بترول اجيبا",
        },
        {
          english: "Agricultural Bank of Egypt",
          arabic: "البنك الزراعي المصري",
        },
        {
          english: "Agricultural Research Center",
          arabic: "مركز البحوث الزراعية",
        },
        {
          english: "Agricultural Syndicate",
          arabic: "نقابة الزراعيين",
        },
        {
          english: "Agzakhana",
          arabic: "الاجزاخانة",
        },
        {
          english: "Ahly Medical Company (AMC)",
          arabic: "الاهلي للخدمات الطبية",
        },
        {
          english: "Air Cairo",
          arabic: "شركة اير كايرو",
        },
        {
          english: "Al Baraka Bank - Egypt",
          arabic: "بنك البركة - مصر",
        },
        {
          english: "Al Hayat Insurance Company",
          arabic: "شركة الحياة للتأمين",
        },
        {
          english: "Al Mansour International Distribution Company",
          arabic: "شركة المنصور الدولية للتوزيع (مجموعة شركات منصور)",
        },
        {
          english: "Al Mashreq",
          arabic: "المشرق",
        },
        {
          english: "Alashanwladna",
          arabic: "ألاشانولادنا",
        },
        {
          english: "Alexandria Water Company",
          arabic: "شركة المياه بالاسكندرية",
        },
        {
          english: "Alfa Care",
          arabic: "ألفا كير",
        },
        {
          english: "Allianz",
          arabic: "اليانز",
        },
        {
          english: "Allied Doctors",
          arabic: "الأطباء المتحدون",
        },
        {
          english: "Amal Petroleum Company",
          arabic: "شركة الأمل للبترول",
        },
        {
          english: "AMIS",
          arabic: "أميس",
        },
        {
          english: "Amoun Pharmaceuticals",
          arabic: "امون للادوية",
        },
        {
          english: "Amreya Petroleum",
          arabic: "الاميرية للبترول",
        },
        {
          english: "Arab African international bank",
          arabic: "البنك العربي الافريقي",
        },
        {
          english: "Arab Contractors Co.",
          arabic: "شركة المقاولون العرب",
        },
        {
          english: "Arab International Bank",
          arabic: "المصرف العربي الدولي",
        },
        {
          english: "Arab International Organization",
          arabic: "المنظمة العربية الدولية",
        },
        {
          english: "Arco Steel - Arab Co. For Special Steel",
          arabic: "العربية للصلب المخصوص",
        },
        {
          english: "Badr Petroleum Company",
          arabic: "بدر للبترول",
        },
        {
          english: "Bahya Hospital",
          arabic: "مستشفى بهية",
        },
        {
          english: "Bank of Egypt Iran",
          arabic: "بنك مصر ايران",
        },
        {
          english: "Banque du Caire",
          arabic: "بنك القاهرة",
        },
        {
          english: "Banque Misr",
          arabic: "بنك مصر",
        },
        {
          english: "Belayim Petroleum Company",
          arabic: "بترول بلاعيم",
        },
        {
          english: "Beni Suef University",
          arabic: "جامعة بني سويف",
        },
        {
          english: "Bright Medical Technology Care",
          arabic: "برايت ميديكال تكنو كير",
        },
        {
          english: "Bupa Egypt Insurance",
          arabic: "شركة بوبا للتأمين",
        },
        {
          english: "Burj Al Arab Petroleum",
          arabic: "برج العرب للبترول",
        },
        {
          english: "Butagasco Company",
          arabic: "بوتجاسكو",
        },
        {
          english: "Cairo Pyramids Hotel",
          arabic: "	فندق كايرو بيراميدز (موفنبيك سابقا)",
        },
        {
          english: "Care and Cure",
          arabic: "	كير اند كيور",
        },
        {
          english: "CarePlus",
          arabic: "	كير بلاس",
        },
        {
          english: "Cargas",
          arabic: "	كارجاس",
        },
        {
          english: "Central Auditing Organization",
          arabic: "الجهاز المركزي للمحاسبات",
        },
        {
          english: "Central Bank of Egypt",
          arabic: "البنك المركزي المصري",
        },
        {
          english:
            "Chamber of Printing and Packaging Industries (Federation of Egyptian Industries)",
          arabic: "غرفة صناعات الطباعة والتغليف (عضو اتحاد الصناعات المصرية)",
        },
        {
          english: "City Care",
          arabic: "سيتى كير",
        },
        {
          english: "Click Mare Health Care",
          arabic: "كليك مير هيلث كير",
        },
        {
          english: "Commerce Syndicate",
          arabic: "نقابة التجاريين",
        },
        {
          english: "Conex Company",
          arabic: "شركة كونكس",
        },
        {
          english: "Co-operation for petrol",
          arabic: "التعاون للبترول",
        },
        {
          english:
            "Cooperative Association for Housing and Construction (Thomas Sons)",
          arabic: "الجمعية التعاونية للبناء والاسكان (ابناء توماس)",
        },
        {
          english: "Creative for Medical Services",
          arabic: "كرييتيف للخدمات الطبية",
        },
        {
          english: "Dar Petroleum",
          arabic: "دار للبترول",
        },
        {
          english: "Development and Agricultre Credit Bank",
          arabic: "	بنك التنمية والاتمان الزراعى",
        },
        {
          english: "Dubai Foundation for Medical Care and Services",
          arabic: "مؤسسة دبي للرعاية والخدمات الطبية",
        },
        {
          english: "East Delta Electricity Company",
          arabic: "شركة شرق الدلتا لانتاج الكهرباء",
        },
        {
          english: "East Gas Company",
          arabic: "شركة غاز الشرق",
        },
        {
          english: "East Zeit Petroleum 'ZEITCO'",
          arabic: "ايست زيت بتروليوم",
        },
        {
          english: "Eastern Tobacco Company",
          arabic: "الشركة الشرقية للدخان",
        },
        {
          english: "Easy Care",
          arabic: "ايزى كير",
        },
        {
          english: "Educational Syndicate",
          arabic: "نقابة المعلمين",
        },
        {
          english: "Egymed",
          arabic: "ايجيميد",
        },
        {
          english: "Egypt Gas",
          arabic: "غاز مصر",
        },
        {
          english: "Egypt Gym",
          arabic: "جيم مصر",
        },
        {
          english: "Egypt Phosphate",
          arabic: "فوسفات مصر",
        },
        {
          english: "Egyptian Ambulance Organization",
          arabic: "الاسعاف",
        },
        {
          english: "Egyptian Ambulance Organization Employee Syndicate",
          arabic: "النقابة العامة للعاملين بهيئة الاسعاف",
        },
        {
          english: "Egyptian Arab Land Bank",
          arabic: "البنك العقاري المصري العربي",
        },
        {
          english: "Egyptian Bahraini Gas Derivatives Co.",
          arabic: "المصرية البحرينية لمشتقات الغاز",
        },
        {
          english: "Egyptian Company for Sports Services",
          arabic: "الشركة المصرية للخدمات الرياضية",
        },
        {
          english: "Egyptian Drilling Facilities",
          arabic: "المصرية لمنشآت الحفر",
        },
        {
          english: "Egyptian Gas Distribution Company",
          arabic: "الشركة المصرية لتوزيع الغاز",
        },
        {
          english: "Egyptian General Petroleum Corporation (EGPC)",
          arabic: "الهيئة المصرية العامة للبترول (EGPC)",
        },
        {
          english: "Egyptian Natural Gas Holding Company - EGAS",
          arabic: "الشركة المصرية القابضة للغازات الطبيعية - إيجاس",
        },
        {
          english: "Egyptian Nursery Syndicate",
          arabic: "نقابة الحضانات المصرية",
        },
        {
          english: "Egyptian Parliament",
          arabic: "البرلمان  المصري",
        },
        {
          english: "Egyptian Petroleum Carriers",
          arbic: "المصرية لناقلات البترول",
        },
        {
          english: "Egyptian Petroleum Services Company - EPSCO",
          arabic: "الشركة المصرية للخدمات البترولية - ابسكو",
        },
        {
          english: "Egyptian Pharmacists Syndicate",
          arabic: "نقابة صيادلة مصر",
        },
        {
          english:
            "Egyptian-French Companies Society for the Egyptian Civilian Transport",
          arabic: "جمعية الشركات المصرية الفرنسية للنقل المدني المصري",
        },
        {
          english: "El Ahram Establishment",
          arabic: "مؤسسة الاهرام",
        },
        {
          english: "El Gamarek",
          arabic: "الجمارك",
        },
        {
          english: "El Nasr Automotive Company",
          arabic: "شركة النصر للسيارات",
        },
        {
          english: "El Pharaonia Insurance Brokerage",
          arabic: "شركة الفرعونية لوساطة التأمين",
        },
        {
          english: "El Wastani Petroleum Co. WASCO",
          arabic: "شركة الوسطاني للبترول واسكو",
        },
        {
          english: "Elahly medical",
          arabic: "الاهلى الطبية",
        },
        {
          english: "EL-Mashreq for Investment",
          arabic: "المشرق للاستثمار",
        },
        {
          english: "Elmothida",
          arabic: "الموثدة",
        },
        {
          english: "Embassy Of France In Cairo",
          arabic: "سفارة فرنسا بالقاهرة",
        },
        {
          english: "Embassy of the Czech Republic in Cairo",
          arabic: "سفارة جمهورية التشيك بالقاهرة",
        },
        {
          english: "Emergency Benefits Fund for Workers",
          arabic: "صندوق مخصصات الطوارئ للعمال",
        },
        {
          english: "Employees for Human Rights Syndicate",
          arabic: "موظفو نقابة حقوق الانسان",
        },
        {
          english: "Enap Sipetrol International	Enap Sipetrol",
          arabic: "الدولية",
        },
        {
          english: "Enppi - Engineering Co. For The Petroleum and Process Industries",
          arabic: "انبي - الشركة الهندسية للصناعات البترولية والعملية",
        },
        {
          english: "EPS - Electric Power Systems Engineering Co.",
          arabic: "EPS - شركة هندسة نظم القوى الكهربائية",
        },
        {
          english: "Eshpetco - Esh El Mallaha Petroleum",
          arabic: "اشبتكو - عش الملاحة للبترول",
        },
        {
          english: "Establishment of Arab performers",
          arabic: "تأسيس فناني الأداء العرب",
        },
        {
          english: "Establishment of Eduaction News",
          arabic: "تأسيس اخبار التعليم",
        },
        {
          english: "Estsharion Medical Care Company",
          arabic: "شركة استشارون للرعاية الطبية",
        },
        {
          english: "Express International Group",
          arabic: "اكسبريس انترناشونال جروب",
        },
        {
          english: "Extra Care",
          arabic: "رعاية اضافية",
        },
        {
          english: "Ezz steel",
          arabic: "حديد عز",
        },
        {
          english: "Faisal Islamic Bank of Egypt",
          arabic: "بنك فيصل الاسلامي المصري",
        },
        {
          english: "Family Care Cure",
          arabic: "علاج رعاية الأسرة",
        },
        {
          english: "Filmmakers Syndicate",
          arabic: "نقابة المخرجين",
        },
        {
          english: "Fund of Judicial Entities Members",
          arabic: "صندوق أعضاء الجهات القضائية",
        },
        {
          english: "Ganoub El Wadi Petroleum Holding Co.",
          arabic: "شركة جنوب الوادى القابضة للبترول",
        },
        {
          english: "Gasco Medical Care Company",
          arabic: "شركة جاسكو للرعاية الطبية",
        },
        {
          english: "Gastec - Egyptian International Gas Technology Co.",
          arabic: "جاستك - الشركة المصرية الدولية لتكنولوجيا الغاز",
        },
        {
          english: "GEMPETCO - Gemsa Petroleum Co",
          arabic: "جيمبيتكو - شركة جمسة للبترول",
        },
        {
          english: "General Intelligence",
          arabic: "المخابرات العامة",
        },
        {
          english: "General Organization for Export and Import Control",
          arabic: "الهيئة العامة للرقابة على الصادرات والواردات",
        },
        {
          english: "General Petroleum Company",
          arabic: "شركة البترول العامة",
        },
        {
          english: "General Syndicate For Sporting Professions",
          arabic: "النقابة العامة للمهن الرياضية",
        },
        {
          english: "General Union of Social Professions",
          arabic: "النقابة العامة للمهن الاجتماعية",
        },
        {
          english: "Giza Trade Syndiacte",
          arabic: "نقابة تجارة الجيزة",
        },
        {
          english: "Globemed",
          arabic: "غلوب ميد",
        },
        {
          english: "Gupco",
          arabic: "جوبكو",
        },
        {
          english: "Hadayek Al Ahram Club",
          arabic: "نادي حدائق الاهرام",
        },
        {
          english: "Hala Trading, Marketing and Medical Services",
          arabic: "هلا للتجارة والتسويق والخدمات الطبية",
        },
        {
          english: "Hazem Hassan",
          arabic: "حازم حسن",
        },
        {
          english: "Health and Wealth",
          arabic: "الصحة و الغنى",
        },
        {
          english: "Health And Wealth Company",
          arabic: "شركة الصحة والثروة",
        },
        {
          english: "Health care",
          arabic: "الرعاىة الصحية",
        },
        {
          english: "Health Care Fund",
          arabic: "صندوق الرعاية الصحية",
        },
        {
          english: "Health care to the Ministry of Justice",
          arabic: "الرعاية الصحية لوزارة العدل",
        },
        {
          english: "Healthy Club",
          arabic: "كلوب صحي",
        },
        {
          english: "Housing and Building National Research Center",
          arabic: "المركز القومي لبحوث الإسكان والبناء",
        },
        {
          english: "INAYA Egypt",
          arabic: "عناية مصر",
        },
        {
          english: "Incoles Company",
          arabic: "شركة Incoles",
        },
        {
          english: "Information Technology Industry Development Agency",
          arabic: "هيئة تنمية صناعة تكنولوجيا المعلومات",
        },
        {
          english: "Interhealth",
          arabic: "انترهيلث",
        },
        {
          english: "ITIDA",
          arabic: "ايتيدا",
        },
        {
          english: "Journalists Syndicate",
          arabic: "نقابة الصحفيين",
        },
        {
          english: "Khalda Petroleum Company",
          arabic: "شركة خلدا للبترول",
        },
        {
          english: "Khedmty",
          arabic: "خدمتي",
        },
        {
          english: "Kuwait Embassy",
          arabic: "سفارة الكويت",
        },
        {
          english: "Lawyers Syndicate",
          arabic: "نقابة المحامين",
        },
        {
          english: "Life",
          arabic: "حياة",
        },
        {
          english: "Life Healthcare",
          arabic: "لايف للرعاية الصحية",
        },
        {
          english: "Life style",
          arabic: "أسلوب الحياة",
        },
        {
          english: "Magd Health Care",
          arabic: "مجد للرعاية الصحية",
        },
        {
          english: "Majesty Discount Cards",
          arabic: "بطاقات خصم ماجيستي",
        },
        {
          english: "Mansour Chevrolet",
          arabic: "منصور شيفروليه",
        },
        {
          english: "Mansoura University",
          arabic: "جامعة المنصورة",
        },
        {
          english: "Marasem International For Urban Development",
          arabic: "مراسم الدولية للتنمية العمرانية",
        },
        {
          english: "Marina Petroleum Company",
          arabic: "شركة مارينا للبترول",
        },
        {
          english: "Med Alfa",
          arabic: "ميد الفا",
        },
        {
          english: "MedCom",
          arabic: "ميدكوم",
        },
        {
          english: "MEDCOM Health care",
          arabic: "ميدكوم للرعاية الصحية",
        },
        {
          english: "MedGulf Co.",
          arabic: "شركة ميدغلف",
        },
        {
          english: "Medi gold",
          arabic: "ميدي جولد",
        },
        {
          english: "Media Syndicate",
          arabic: "نقابة الإعلاميين",
        },
        {
          english: "Medical Card",
          arabic: "بطاقة طبية",
        },
        {
          english:
            "Medical Services Fund for Workers of the Presidency of the Republic",
          arabic: "صندوق الخدمات الطبية للعاملين برئاسة الجمهورية",
        },
        {
          english: "Medical Union Pharmaceuticals -MUP",
          arabic: "المهن الطبية للادوية - MUP",
        },
        {
          english: "Medicare",
          arabic: "ميديكير",
        },
        {
          english: "MediConsult",
          arabic: "شركة ميدي كوسالت",
        },
        {
          english: "MedNet",
          arabic: "مدنت",
        },
        {
          english: "Medshield",
          arabic: "ميدشيلد",
        },
        {
          english: "MedSure",
          arabic: "مدشور",
        },
        {
          english: "Meridien Hotel",
          arabic: "فندق ميريديان",
        },
        {
          english: "MG",
          arabic: "شركة ام جي",
        },
        {
          english: "Middle Delta Electricity Production Company",
          arabic: "شركة وسط الدلتا لانتاج الكهرباء",
        },
        {
          english: "Ministry of Antiquities	",
          arabic: "وزارة الاثار",
        },
        {
          english: "Ministry of Electricity and Renewable Energy",
          arabic: "وزارة الكهرباء والطاقة المتجددة",
        },
        {
          english: "Ministry of National Organization For Social Insurance",
          arabic: "وزارة الهيئة القومية للتأمينات الاجتماعية",
        },
        {
          english: "Misr Healthcare",
          arabic: "مصر للرعاية الصحية",
        },
        {
          english: "Misr Service Management and Consultancy",
          arabic: "مصر لادارة الخدمات والاستشارات",
        },
        {
          english: "Misrelhayah",
          arabic: "المسرحية",
        },
        {
          english: "MOFTUC",
          arabic: "مفتك",
        },
        {
          english: "MOPCO - Misr Fertilizers Production Co.",
          arabic: "موبكو - شركة مصر لانتاج الاسمدة",
        },
        {
          english: "Mowafer Care",
          arabic: "موفر كير",
        },
        {
          english: "My Pharmacy for Medical Insurance",
          arabic: "صيدليتي للتأمين الطبي",
        },
        {
          english: "Mya Health Care",
          arabic: "ميا هيلث كير",
        },
        {
          english: "National Bank of Egypt",
          arabic: "البنك الأهلي المصري",
        },
        {
          english: "National Defense Council-General Secretariat",
          arabic: "مجلس الدفاع الوطني - الامانة العامة",
        },
        {
          english: "National Investment Bank (NIB)",
          arabic: "بنك الاستثمار القومي (NIB)",
        },
        {
          english: "National Misr Insurance",
          arabic: "الوطنية مصر للتأمين",
        },
        {
          english: "National navigation company",
          arabic: "شركة الملاحة الوطنية",
        },
        {
          english: "National Organization for Social Insurance",
          arabic: "الهيئة الوطنية للتأمينات الاجتماعية",
        },
        {
          english: "New Urban Communities Authority",
          arabic: "هيئة المجتمعات العمرانية الجديدة",
        },
        {
          english: "Next care",
          arabic: "الرعاية التالية",
        },
        {
          english: "Nile Group",
          arabic: "مجموعة النيل",
        },
        {
          english: "Nile Petroleum Company",
          arabic: "شركة النيل للبترول",
        },
        {
          english: "Nilesat",
          arabic: "نايل سات",
        },
        {
          english: "Norpetco - North Bahareya Petroleum",
          arabic: "نوربتكو - شمال البحرية للبترول",
        },
        {
          english: "NPC - Nasr Petroleum Company",
          arabic: "ان بى سى - شركة نصر للبترول",
        },
        {
          english: "NSGB",
          arabic: "ان اس جي بي",
        },
        {
          english: "Nuclear Stations Organization",
          arabic: "هيئة المحطات النووية",
        },
        {
          english: "Nutshell Cuisines",
          arabic: "مطابخ الجوز",
        },
        {
          english: "OAPCO - Oasis Petroleum Co.",
          arabic: "أوابكو - شركة الواحة للبترول",
        },
        {
          english: "Office of the President of the Republic Egypt",
          arabic: "مكتب رئيس جمهورية مصر",
        },
        {
          english: "Oil and Gas Skills OGS",
          arabic: "مهارات النفط والغاز OGS",
        },
        {
          english: "Okazion Care",
          arabic: "أوكازيون كير",
        },
        {
          english: "Omega Care",
          arabic: "أوميغا كير",
        },
        {
          english: "One Care",
          arabic: "رعاية واحدة",
        },
        {
          english: "OSOCO - Offshore Shukeir Oil Co.",
          arabic: "OSOCO - شركة نفط شقير البحرية",
        },
        {
          english: "Petro Amir Petroleum",
          arabic: "بترو امير للبترول",
        },
        {
          english: "Petro Gulf Co.",
          arabic: "شركة بترو جلف",
        },
        {
          english: "Petro Salam",
          arabic: "بترو سلام",
        },
        {
          english: "Petro Sila Company",
          arabic: "شركة بترو سيلا",
        },
        {
          english: "Petro trade",
          arabic: "بترو تريد",
        },
        {
          english: "Petrojet",
          arabic: "بتروجيت",
        },
        {
          english: "Petroleum Air Services company",
          arabic: "شركة خدمات البترول الجوية",
        },
        {
          english: "Petroleum Engineers Syndicate",
          arabic: "نقابة مهندسي البترول",
        },
        {
          english: "Petroleum Gas (Petrogas)",
          arabic: "الغازات البترولية (بتروجاس)",
        },
        {
          english: "Petroleum Pipes Company - Mostorod",
          arabic: "شركة الأنابيب البترولية - مسطرد",
        },
        {
          english: "Petroshahd Petroleum Company",
          arabic: "شركة بتروشهد للبترول",
        },
        {
          english: "Physiotherapy Syndicate",
          arabic: "نقابة العلاج الطبيعي",
        },
        {
          english: "Pico Petroleum",
          arabic: "بيكو بتروليوم",
        },
        {
          english: "Professional",
          arabic: "احترافي",
        },
        {
          english: "Qaroun Petroleum Company",
          arabic: "شركة قارون للبترول",
        },
        {
          english: "Qatar National Bank (QNB)",
          arabic: "بنك قطر الوطني (QNB)",
        },
        {
          english: "Rashpetco - Rashid Petroleum",
          arabic: "راشبتكو - رشيد للبترول",
        },
        {
          english: "Real Estate Registration Office",
          arabic: "مكتب التسجيل العقاري",
        },
        {
          english: "Rotary",
          arabic: "الروتاري",
        },
        {
          english: "Royal Care",
          arabic: "رويال كير",
        },
        {
          english: "Safe Health Care",
          arabic: "الرعاية الصحية الآمنة",
        },
        {
          english: "Sedico Pharmaceuticals Company",
          arabic: "شركة سيديكو للأدوية",
        },
        {
          english: "Sehaty",
          arabic: "صحتي",
        },
        {
          english: "SIAC, Industrial Construction and Engineering Company",
          arabic: "SIAC شركة الإنشاءات الصناعية والهندسة",
        },
        {
          english: "Sianco Egyptian Co.",
          arabic: "شركة صيانكو المصرية",
        },
        {
          english: "Sidco",
          arabic: "سيدكو",
        },
        {
          english: "Sierra Care",
          arabic: "سييرا كير",
        },
        {
          english: "Sinai Cement",
          arabic: "اسمنت سيناء",
        },
        {
          english: "Sinai Petroleum and Mining Services",
          arabic: "سيناء للخدمات البترولية والتعدين",
        },
        {
          english: "Sinai University",
          arabic: "جامعة سيناء",
        },
        {
          english: "SKPC",
          arabic: "اس كا بي سي",
        },
        {
          english: "Sky Time",
          arabic: "توقيت السماء",
        },
        {
          english: "Smart Care",
          arabic: "سمارت كير",
        },
        {
          english: "Smart School",
          arabic: "مدرسة سمارت",
        },
        {
          english:
            "Social Insurance Box for Employees of the International Commercial Bank",
          arabic: "صندوق التأمينات الاجتماعية للعاملين بالبنك التجاري الدولي",
        },
        {
          english: "South Cairo Mills",
          arabic: "مطاحن جنوب القاهرة",
        },
        {
          english: "South Dabaah Petroleum Company",
          arabic: "شركة بترول جنوب الضبعة",
        },
        {
          english: "Special Family Care",
          arabic: "رعاية الأسرة الخاصة",
        },
        {
          english: "Suez Canal Authority",
          arabic: "هيئة قناة السويس",
        },
        {
          english: "Suez Canal Bank Social Insurance Fund for employees",
          arabic: "صندوق بنك قناة السويس للتأمينات الاجتماعية للعاملين",
        },
        {
          english: "Suez Canal Insurance Company - Employees",
          arabic: "شركة قناة السويس للتأمين - موظفين",
        },
        {
          english: "Suez Oil Company",
          arabic: "شركة السويس للبترول",
        },
        {
          english: "Sumed Petroleum Pipelines",
          arabic: "سوميد لأنابيب البترول",
        },
        {
          english: "Syndicate Committee of Hotel InterContinental Cairo Semiramis",
          arabic: "اللجنة النقابية لفندق إنتركونتيننتال سميراميس القاهرة",
        },
        {
          english:
            "Syndicate of Employees in Central Agency For Organization and Administration",
          arabic: "نقابة العاملين بالجهاز المركزي للتنظيم والإدارة",
        },
        {
          english:
            "Syndicate of Employees in Prosecution and Courts of all Egypt Branches",
          arabic: "نقابة العاملين في النيابة والمحاكم بجميع فروع مصر",
        },
        {
          english: "Syndicate of Scientific Professions",
          arabic: "نقابة المهن العلمية",
        },
        {
          english: "Takafol Egyptian Life Company",
          arabic: "شركة تكافل الحياة المصرية",
        },
        {
          english: "Tanmia Petroleum Company",
          arabic: "شركة تنمية للبترول",
        },
        {
          english: "Teachers Syndicate",
          arabic: "نقابة المعلمين",
        },
        {
          english: "Telecom Egypt",
          arabic: "المصرية للاتصالات",
        },
        {
          english: "Tersana Club from Ahmed Orabi",
          arabic: "نادي الترسانة من احمد عرابي",
        },
        {
          english: "Tharwa Petroleum Co.",
          arabic: "شركة ثروة للبترول",
        },
        {
          english: "The Supreme Constitutional Court",
          arabic: "المحكمة الدستورية العليا",
        },
        {
          english: "The United Bank",
          arabic: "المصرف المتحد",
        },
        {
          english: "The Egyptian Ethylene and Derivatives Company",
          arabic: "الشركة المصرية للإيثيلين ومشتقاته",
        },
        {
          english: "Thomas Cook",
          arabic: "توماس كوك",
        },
        {
          english: "Time Health",
          arabic: "صحة الوقت",
        },
        {
          english: "Tour Guides Syndicate",
          arabic: "نقابة المرشدين السياحيين",
        },
        {
          english: "Town Gas",
          arabic: "غاز المدينة",
        },
        {
          english: "Toyota Company",
          arabic: "شركة تويوتا",
        },
        {
          english: "Trance Globe West Garib Company",
          arabic: "شركة ترانس جلوب ويست جريب",
        },
        {
          english: "Travel Choice",
          arabic: "اختيار السفر",
        },
        {
          english: "Tricare",
          arabic: "تريكير",
        },
        {
          english: "Tristar Cargo System",
          arabic: "تريستار لنظم الشحن",
        },
        {
          english: "Tristar Global Health (Paul Hadad)",
          arabic: "تريستار جلوبال هيلث (بول حداد)",
        },
        {
          english: "UBF",
          arabic: "يو بي اف",
        },
        {
          english: "UltraVision",
          arabic: "الترا فيجن",
        },
        {
          english: "Unilever",
          arabic: "يونيليفر",
        },
        {
          english: "United Company",
          arabic: "الشركة المتحدة",
        },
        {
          english: "United Gas Derivatives Company",
          arabic: "شركة مشتقات الغاز المتحدة",
        },
        {
          english: "Vacsera",
          arabic: "فاكسيرا",
        },
        {
          english: "VMEDIX for trading",
          arabic: "فيميديكس للتداول",
        },
        {
          english: "Wadi El Nile",
          arabic: "وادي النيل",
        },
        {
          english: "Watanya Integrated Solutions",
          arabic: "الوطنية للحلول المتكاملة",
        },
        {
          english: "WellCare",
          arabic: "رعاية جيدة",
        },
        {
          english: "WEPCO - Western Desert Operating Petroleum Company",
          arabic: "ويبكو - الصحراء الغربية التشغيل Petr",
        },
        {
          english: "West Bakr Petroleum",
          arabic: "غرب بكر للبترول	",
        },
        {
          english: "West Giza Teachers Syndicate",
          arabic: "نقابة المعلمين غرب الجيزة",
        },
        {
          english: "Witch Care",
          arabic: "رعاية الساحرة",
        },
        {
          english: "X-FASTER Medical",
          arabic: "اكس- فاستر ميديكال",
        },
      ]
    };
  },
};
