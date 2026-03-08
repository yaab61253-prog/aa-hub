(function(){
    const lang = localStorage.getItem('lang') || localStorage.getItem('language') || 'ar';
    const T = lang === 'ar' ? {
      title:'الصفحة غير موجودة',
      sub:'يبدو أن الصفحة التي تبحث عنها<br>لم تعد موجودة أو تم نقلها',
      btn:'العودة للرئيسية',
    } : {
      title:'Page Not Found',
      sub:'It looks like the page you\'re looking for<br>no longer exists or has been moved',
      btn:'Back to Home',
    };
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('p404-title').textContent = T.title;
    document.getElementById('p404-sub').innerHTML = T.sub;
    document.getElementById('p404-btn').textContent = T.btn;
  })();