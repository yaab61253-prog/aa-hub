(function(){
  const lang = localStorage.getItem('lang') || localStorage.getItem('language') || 'ar';
  const T = lang === 'ar' ? {
    hdrTitle:'الشروط والأحكام', heroH1:'📋 الشروط والأحكام', heroP:'يرجى قراءة هذه الشروط قبل استخدام AA Hub',
    updated:'آخر تحديث: مارس 2026',
    s1Title:'القبول بالشروط', s1Text:'باستخدامك لـ AA Hub، فأنت توافق على هذه الشروط والأحكام. إذا لم توافق، يرجى عدم استخدام المنصة.',
    s2Title:'شروط الحساب',
    s2List:['يجب أن يكون عمرك 13 سنة فأكثر','تقديم معلومات صحيحة عند التسجيل','المسؤولية الكاملة عن حسابك وكلمة مرورك','ممنوع إنشاء حسابات متعددة للتحايل على الحظر'],
    s3Title:'المحتوى المحظور', s3Warn:'⚠️ يُمنع منعاً باتاً نشر:',
    s3List:['محتوى يحرض على الكراهية أو العنصرية','مواد إباحية أو محتوى للبالغين','معلومات شخصية لأشخاص آخرين دون إذنهم','محتوى مسروق أو ينتهك حقوق الملكية','الإعلانات والسبام غير المرخص'],
    s4Title:'حقوق المحتوى', s4Text:'المحتوى الذي تنشره يبقى ملكك. بنشره على AA Hub، تمنحنا ترخيصاً لعرضه على المنصة فقط. لا ندّعي ملكية محتواك.',
    s5Title:'إنهاء الحساب', s5Text:'نحتفظ بحق تعليق أو حذف أي حساب يخالف هذه الشروط. يمكنك أنت أيضاً حذف حسابك في أي وقت من الإعدادات.',
    s6Title:'تحديثات الشروط', s6Text:'قد نحدّث هذه الشروط من حين لآخر. سيتم إشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار داخل التطبيق.',
    footerPrivacy:'سياسة الخصوصية', footerContact:'تواصل معنا',
  } : {
    hdrTitle:'Terms & Conditions', heroH1:'📋 Terms & Conditions', heroP:'Please read these terms before using AA Hub',
    updated:'Last updated: March 2026',
    s1Title:'Acceptance of Terms', s1Text:'By using AA Hub, you agree to these Terms and Conditions. If you do not agree, please do not use the platform.',
    s2Title:'Account Terms',
    s2List:['You must be 13 years or older','Provide accurate information when registering','Full responsibility for your account and password','Creating multiple accounts to bypass bans is prohibited'],
    s3Title:'Prohibited Content', s3Warn:'⚠️ It is strictly prohibited to post:',
    s3List:['Content inciting hatred or racism','Pornographic or adult content','Personal information of others without their consent','Stolen content or content that violates intellectual property rights','Unauthorized advertisements or spam'],
    s4Title:'Content Rights', s4Text:'Content you publish remains yours. By posting on AA Hub, you grant us a license to display it on the platform only. We do not claim ownership of your content.',
    s5Title:'Account Termination', s5Text:'We reserve the right to suspend or delete any account that violates these terms. You can also delete your account at any time from settings.',
    s6Title:'Terms Updates', s6Text:'We may update these terms from time to time. You will be notified of any significant changes via email or an in-app notification.',
    footerPrivacy:'Privacy Policy', footerContact:'Contact Us',
  };
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('hdr-title').textContent = T.hdrTitle;
  document.getElementById('hero-h1').textContent = T.heroH1;
  document.getElementById('hero-p').textContent = T.heroP;
  document.getElementById('updated').textContent = T.updated;
  document.getElementById('s1-title').textContent = T.s1Title;
  document.getElementById('s1-text').textContent = T.s1Text;
  document.getElementById('s2-title').textContent = T.s2Title;
  document.getElementById('s3-title').textContent = T.s3Title;
  document.getElementById('s3-warn').textContent = T.s3Warn;
  document.getElementById('s4-title').textContent = T.s4Title;
  document.getElementById('s4-text').textContent = T.s4Text;
  document.getElementById('s5-title').textContent = T.s5Title;
  document.getElementById('s5-text').textContent = T.s5Text;
  document.getElementById('s6-title').textContent = T.s6Title;
  document.getElementById('s6-text').textContent = T.s6Text;
  document.getElementById('footer-privacy').textContent = T.footerPrivacy;
  document.getElementById('footer-contact').textContent = T.footerContact;
  document.getElementById('s2-list').innerHTML = T.s2List.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('s3-list').innerHTML = T.s3List.map(x=>`<li>${x}</li>`).join('');
})();
