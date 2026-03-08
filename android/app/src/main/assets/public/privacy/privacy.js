(function(){
  const lang = localStorage.getItem('lang') || localStorage.getItem('language') || 'ar';
  const T = lang === 'ar' ? {
    hdrTitle:'سياسة الخصوصية', heroH1:'🔒 سياسة الخصوصية', heroP:'نحن نأخذ خصوصيتك بجدية تامة',
    updated:'آخر تحديث: مارس 2026',
    s1Title:'البيانات التي نجمعها', s1Text:'نجمع المعلومات التالية عند تسجيلك:',
    s1List:['البريد الإلكتروني واسم المستخدم','الصورة الشخصية (اختياري)','المنشورات والتعليقات التي تنشرها','بيانات الاستخدام وتوقيت الدخول'],
    s2Title:'كيف نستخدم بياناتك', s2Text:'نستخدم بياناتك لـ:',
    s2List:['تشغيل خدمة AA Hub وتحسينها','إرسال إشعارات مهمة عن حسابك','حماية المنصة من الإساءة','تحسين تجربة المستخدم'],
    s3Title:'لا نبيع بياناتك أبداً', s3Text:'نلتزم بعدم بيع أو تأجير أو مشاركة بياناتك الشخصية مع أي طرف ثالث لأغراض تجارية. بياناتك تبقى ملكك.',
    s4Title:'أمان البيانات', s4Text:'نستخدم Firebase من Google لتخزين البيانات بأمان. جميع الاتصالات مشفرة بـ HTTPS. نطبق إجراءات أمنية صارمة لحماية حسابك.',
    s5Title:'حقوقك', s5Text:'يحق لك في أي وقت:',
    s5List:['طلب نسخة من بياناتك','تعديل معلوماتك الشخصية','حذف حسابك نهائياً','التواصل معنا للاستفسار'],
    s6Title:'التواصل', s6Text:'لأي استفسار عن خصوصيتك تواصل معنا عبر: ', s6Link:'صفحة التواصل',
    footerTerms:'الشروط والأحكام', footerContact:'تواصل معنا',
  } : {
    hdrTitle:'Privacy Policy', heroH1:'🔒 Privacy Policy', heroP:'We take your privacy very seriously',
    updated:'Last updated: March 2026',
    s1Title:'Data We Collect', s1Text:'We collect the following when you register:',
    s1List:['Email address and username','Profile photo (optional)','Posts and comments you publish','Usage data and login timestamps'],
    s2Title:'How We Use Your Data', s2Text:'We use your data to:',
    s2List:['Operate and improve AA Hub','Send important account notifications','Protect the platform from abuse','Improve user experience'],
    s3Title:'We Never Sell Your Data', s3Text:'We are committed to never selling, renting, or sharing your personal data with any third party for commercial purposes. Your data remains yours.',
    s4Title:'Data Security', s4Text:'We use Firebase by Google to store data securely. All communications are encrypted with HTTPS. We apply strict security measures to protect your account.',
    s5Title:'Your Rights', s5Text:'You have the right at any time to:',
    s5List:['Request a copy of your data','Edit your personal information','Permanently delete your account','Contact us with inquiries'],
    s6Title:'Contact', s6Text:'For any privacy inquiries, contact us via: ', s6Link:'Contact Page',
    footerTerms:'Terms & Conditions', footerContact:'Contact Us',
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
  document.getElementById('s2-text').textContent = T.s2Text;
  document.getElementById('s3-title').textContent = T.s3Title;
  document.getElementById('s3-text').textContent = T.s3Text;
  document.getElementById('s4-title').textContent = T.s4Title;
  document.getElementById('s4-text').textContent = T.s4Text;
  document.getElementById('s5-title').textContent = T.s5Title;
  document.getElementById('s5-text').textContent = T.s5Text;
  document.getElementById('s6-title').textContent = T.s6Title;
  document.getElementById('s6-text').textContent = T.s6Text;
  document.getElementById('s6-link').textContent = T.s6Link;
  document.getElementById('footer-terms').textContent = T.footerTerms;
  document.getElementById('footer-contact').textContent = T.footerContact;
  ['s1-list','s2-list','s5-list'].forEach((id,i)=>{
    const list = [T.s1List,T.s2List,T.s5List][i];
    const el = document.getElementById(id);
    el.innerHTML = list.map(x=>`<li>${x}</li>`).join('');
  });
})();
