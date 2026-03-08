(function(){
  const lang = localStorage.getItem('lang') || localStorage.getItem('language') || 'ar';
  const T = lang === 'ar' ? {
    hdrTitle:'الدعم التقني', heroH1:'🛠️ الدعم التقني', heroP:'كيف يمكننا مساعدتك؟',
    quickTitle:'روابط سريعة',
    contactCardTitle:'تواصل مع الدعم', contactCardSub:'رد خلال 24 ساعة',
    emailCardTitle:'راسلنا بالإيميل',
    faqTitle:'الأسئلة الشائعة',
    faq1Q:'نسيت كلمة المرور — ماذا أفعل؟',
    faq1A:'اضغط على "نسيت كلمة المرور" في شاشة الدخول، أدخل بريدك الإلكتروني وراح تصلك رسالة لإعادة تعيين كلمة المرور فوراً.',
    faq1Tip:'💡 إذا ما وصلتك الرسالة تحقق من مجلد الـ Spam.',
    faq2Q:'كيف أبلّغ عن منشور مسيء؟',
    faq2A:'اضغط على زر العلم 🚩 الموجود بجانب المنشور مباشرةً، اختر سبب البلاغ وسيصل تقريرك لفريقنا فوراً للمراجعة.',
    faq3Q:'كيف أحذف حسابي؟',
    faq3A:'خيار حذف الحساب غير متاح حالياً. إذا كنت تواجه مشكلة تواصل معنا عبر صفحة التواصل وسنساعدك.',
    faq3Warn:'⚠️ هذه الميزة ستكون متاحة في تحديث قادم قريباً.',
    faq4Q:'لم أستلم رسالة التحقق على البريد',
    faq4A:'تحقق من مجلد الـ Spam أو Junk أولاً. إذا لم تجدها اضغط على "إعادة الإرسال" في شاشة التحقق. تأكد أيضاً أن البريد الإلكتروني الذي أدخلته صحيح.',
    faq4Tip:'💡 إذا استمرت المشكلة تواصل معنا وسنحلها لك مباشرة.',
    faq5Q:'التطبيق بطيء أو لا يستجيب',
    faq5A:'جرب الخطوات التالية بالترتيب:<br><br>١ — تأكد من قوة اتصالك بالإنترنت<br>٢ — امسح cache المتصفح وأعد تحميل الصفحة<br>٣ — أغلق التبويبات الزائدة وأعد فتح التطبيق<br>٤ — جرب متصفح آخر مثل Chrome أو Safari',
    faq5Tip:'💡 إذا استمرت المشكلة راسلنا وأخبرنا باسم جهازك ومتصفحك.',
    footerPrivacy:'سياسة الخصوصية', footerTerms:'الشروط',
  } : {
    hdrTitle:'Technical Support', heroH1:'🛠️ Technical Support', heroP:'How can we help you?',
    quickTitle:'Quick Links',
    contactCardTitle:'Contact Support', contactCardSub:'Reply within 24 hours',
    emailCardTitle:'Email Us',
    faqTitle:'Frequently Asked Questions',
    faq1Q:"I forgot my password — what do I do?",
    faq1A:"Tap \"Forgot Password\" on the login screen, enter your email and you'll receive a password reset link instantly.",
    faq1Tip:"💡 If you don't receive the email, check your Spam folder.",
    faq2Q:'How do I report an abusive post?',
    faq2A:'Tap the flag 🚩 button next to the post, choose the reason for the report and it will reach our team immediately for review.',
    faq3Q:'How do I delete my account?',
    faq3A:"Account deletion is not available yet. If you're having an issue, contact us through the contact page and we'll help you.",
    faq3Warn:'⚠️ This feature will be available in an upcoming update.',
    faq4Q:"I didn't receive the verification email",
    faq4A:"Check your Spam or Junk folder first. If you can't find it, press \"Resend\" on the verification screen. Also make sure the email you entered is correct.",
    faq4Tip:"💡 If the problem persists, contact us and we'll resolve it directly.",
    faq5Q:'The app is slow or unresponsive',
    faq5A:'Try the following steps in order:<br><br>1 — Check your internet connection<br>2 — Clear browser cache and reload the page<br>3 — Close extra tabs and reopen the app<br>4 — Try another browser like Chrome or Safari',
    faq5Tip:'💡 If the problem continues, contact us and tell us your device name and browser.',
    footerPrivacy:'Privacy Policy', footerTerms:'Terms',
  };
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('hdr-title').textContent = T.hdrTitle;
  document.getElementById('hero-h1').textContent = T.heroH1;
  document.getElementById('hero-p').textContent = T.heroP;
  document.getElementById('quick-title').textContent = T.quickTitle;
  document.getElementById('contact-card-title').textContent = T.contactCardTitle;
  document.getElementById('contact-card-sub').textContent = T.contactCardSub;
  document.getElementById('email-card-title').textContent = T.emailCardTitle;
  document.getElementById('faq-title').textContent = T.faqTitle;
  document.getElementById('faq1-q').textContent = T.faq1Q;
  document.getElementById('faq1-a').textContent = T.faq1A;
  document.getElementById('faq1-tip').textContent = T.faq1Tip;
  document.getElementById('faq2-q').textContent = T.faq2Q;
  document.getElementById('faq2-a').textContent = T.faq2A;
  document.getElementById('faq3-q').textContent = T.faq3Q;
  document.getElementById('faq3-a').textContent = T.faq3A;
  document.getElementById('faq3-warn').textContent = T.faq3Warn;
  document.getElementById('faq4-q').textContent = T.faq4Q;
  document.getElementById('faq4-a').textContent = T.faq4A;
  document.getElementById('faq4-tip').textContent = T.faq4Tip;
  document.getElementById('faq5-q').textContent = T.faq5Q;
  document.getElementById('faq5-a').innerHTML = T.faq5A;
  document.getElementById('faq5-tip').textContent = T.faq5Tip;
  document.getElementById('footer-privacy').textContent = T.footerPrivacy;
  document.getElementById('footer-terms').textContent = T.footerTerms;
  lucide.createIcons();
})();
