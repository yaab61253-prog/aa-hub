(function(){
  const lang = localStorage.getItem('lang') || localStorage.getItem('language') || 'ar';
  const T = lang === 'ar' ? {
    hdrTitle: 'تواصل معنا', heroH1: 'تواصل معنا 👋',
    heroP: 'فريقنا جاهز للإجابة على استفساراتك',
    emailLbl: 'البريد الإلكتروني', twitterLbl: 'تويتر / X', instagramLbl: 'إنستغرام',
    footerPrivacy: 'سياسة الخصوصية', footerTerms: 'الشروط',
  } : {
    hdrTitle: 'Contact Us', heroH1: 'Contact Us 👋',
    heroP: 'Our team is ready to answer your questions',
    emailLbl: 'Email', twitterLbl: 'Twitter / X', instagramLbl: 'Instagram',
    footerPrivacy: 'Privacy Policy', footerTerms: 'Terms',
  };
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('hdr-title').textContent = T.hdrTitle;
  document.getElementById('hero-h1').textContent = T.heroH1;
  document.getElementById('hero-p').textContent = T.heroP;
  document.getElementById('email-lbl').textContent = T.emailLbl;
  document.getElementById('twitter-lbl').textContent = T.twitterLbl;
  document.getElementById('instagram-lbl').textContent = T.instagramLbl;
  document.getElementById('footer-privacy').textContent = T.footerPrivacy;
  document.getElementById('footer-terms').textContent = T.footerTerms;
  lucide.createIcons();
})();
