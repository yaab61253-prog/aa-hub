(function(){
  const lang = localStorage.getItem('lang') || localStorage.getItem('language') || 'ar';
  const T = lang === 'ar' ? {
    hdrTitle: 'من نحن',
    heroP: 'منصة التواصل الاجتماعي السريعة والعصرية، مبنية بشغف من فريق NebulaSpectra Studio.',
    statUsers: 'مستخدم', statPosts: 'منشور', statFounded: 'تأسيس',
    whatTitle: 'ما هو AA Hub؟',
    whatText: 'AA Hub منصة تواصل اجتماعي سريعة وحديثة تتيح لك مشاركة أفكارك، متابعة الأخبار، والتواصل مع مجتمع نشط حول العالم.',
    missionTitle: 'مهمتنا',
    missionText: 'نؤمن بأن التواصل الاجتماعي يجب أن يكون بسيطاً وسريعاً وآمناً. هدفنا بناء مجتمع رقمي صحي يعبّر فيه الجميع بحرية.',
    valuesTitle: 'قيمنا',
    valuesText: 'الخصوصية أولاً — لا نبيع بياناتك.<br><br>الشفافية — نكون صريحين دائماً.<br><br>الإبداع — نطور المنصة باستمرار.',
    footerPrivacy: 'سياسة الخصوصية', footerTerms: 'الشروط',
  } : {
    hdrTitle: 'About Us',
    heroP: 'A fast and modern social networking platform, built with passion by the NebulaSpectra Studio team.',
    statUsers: 'Users', statPosts: 'Posts', statFounded: 'Founded',
    whatTitle: 'What is AA Hub?',
    whatText: 'AA Hub is a fast and modern social networking platform that lets you share your thoughts, follow the latest news, and connect with an active community around the world.',
    missionTitle: 'Our Mission',
    missionText: 'We believe social networking should be simple, fast, and secure. Our goal is to build a healthy digital community where everyone can express themselves freely.',
    valuesTitle: 'Our Values',
    valuesText: 'Privacy first — we never sell your data.<br><br>Transparency — we are always honest.<br><br>Innovation — we continuously improve the platform.',
    footerPrivacy: 'Privacy Policy', footerTerms: 'Terms',
  };
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('hdr-title').textContent = T.hdrTitle;
  document.getElementById('hero-p').textContent = T.heroP;
  document.getElementById('stat-users').textContent = T.statUsers;
  document.getElementById('stat-posts').textContent = T.statPosts;
  document.getElementById('stat-founded').textContent = T.statFounded;
  document.getElementById('what-title').textContent = T.whatTitle;
  document.getElementById('what-text').textContent = T.whatText;
  document.getElementById('mission-title').textContent = T.missionTitle;
  document.getElementById('mission-text').textContent = T.missionText;
  document.getElementById('values-title').textContent = T.valuesTitle;
  document.getElementById('values-text').innerHTML = T.valuesText;
  document.getElementById('footer-privacy').textContent = T.footerPrivacy;
  document.getElementById('footer-terms').textContent = T.footerTerms;
  lucide.createIcons();
})();
