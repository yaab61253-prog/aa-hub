const firebaseConfig = {
    apiKey: "AIzaSyBD6Vm6VlBKoIUaqL8wtvlrWiMMvmBbTnk",
    authDomain: "ad-chat-2134a.firebaseapp.com",
    databaseURL: "https://ad-chat-2134a-default-rtdb.firebaseio.com",
    projectId: "ad-chat-2134a",
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const isArabic = (navigator.language || navigator.userLanguage || 'ar').startsWith('ar');

const T = isArabic ? {
    loading: 'جاري التحقق من الرابط...',
    resetTitle: 'إعادة تعيين كلمة المرور',
    resetSubtitle: 'أدخل كلمة مرور جديدة وقوية',
    labelNew: 'كلمة المرور الجديدة',
    labelConfirm: 'تأكيد كلمة المرور',
    placeholderNew: 'أدخل كلمة مرور جديدة',
    placeholderConfirm: 'أعد كتابة كلمة المرور',
    resetBtn: 'تغيير كلمة المرور',
    saving: 'جاري الحفظ...',
    successTitle: 'تم بنجاح! 🎉',
    successMsg: 'تم تغيير كلمة مرورك بنجاح. يمكنك الآن تسجيل الدخول.',
    successBtn: 'الذهاب لتسجيل الدخول',
    errorTitle: 'الرابط غير صالح',
    errorBtn: 'العودة للرئيسية',
    errExpired: 'انتهت صلاحية الرابط. اطلب رابطاً جديداً.',
    errInvalid: 'الرابط غير صالح أو تم استخدامه مسبقاً.',
    errDefault: 'الرابط منتهي الصلاحية أو تم استخدامه مسبقاً.',
    errWrongLink: 'رابط غير صحيح. تأكد من النقر على الرابط من الإيميل مباشرة.',
    errShort: '⚠️ كلمة المرور يجب أن تكون 6 أحرف على الأقل',
    errNoMatch: '❌ كلمتا المرور غير متطابقتين',
    okMatch: 'كلمتا المرور متطابقتان',
    errWeak: '⚠️ كلمة المرور ضعيفة جداً.',
    errExpiredReset: '❌ انتهت صلاحية الرابط. اطلب رابطاً جديداً.',
    errGeneral: 'حدث خطأ، حاول مرة أخرى.',
    strength: ['', 'ضعيفة جداً', 'ضعيفة', 'متوسطة', 'قوية', 'قوية جداً 💪'],
} : {
    loading: 'Verifying link...',
    resetTitle: 'Reset Password',
    resetSubtitle: 'Enter a new strong password',
    labelNew: 'New Password',
    labelConfirm: 'Confirm Password',
    placeholderNew: 'Enter new password',
    placeholderConfirm: 'Re-enter password',
    resetBtn: 'Change Password',
    saving: 'Saving...',
    successTitle: 'Done! 🎉',
    successMsg: 'Your password has been changed. You can now log in.',
    successBtn: 'Go to Login',
    errorTitle: 'Invalid Link',
    errorBtn: 'Back to Home',
    errExpired: 'Link has expired. Please request a new one.',
    errInvalid: 'Invalid link or already used.',
    errDefault: 'Link expired or already used.',
    errWrongLink: 'Invalid link. Please click the link from the email directly.',
    errShort: '⚠️ Password must be at least 6 characters',
    errNoMatch: '❌ Passwords do not match',
    okMatch: 'Passwords match',
    errWeak: '⚠️ Password is too weak.',
    errExpiredReset: '❌ Link expired. Request a new one.',
    errGeneral: 'An error occurred. Please try again.',
    strength: ['', 'Very weak', 'Weak', 'Fair', 'Strong', 'Very strong 💪'],
};

document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', isArabic ? 'ar' : 'en');

document.getElementById('loading-text').textContent = T.loading;
document.getElementById('reset-title').textContent = T.resetTitle;
document.getElementById('reset-subtitle').textContent = T.resetSubtitle;
document.getElementById('label-new').textContent = T.labelNew;
document.getElementById('label-confirm').textContent = T.labelConfirm;
document.getElementById('new-password').placeholder = T.placeholderNew;
document.getElementById('confirm-password').placeholder = T.placeholderConfirm;
document.getElementById('reset-btn').textContent = T.resetBtn;
document.getElementById('success-title').textContent = T.successTitle;
document.getElementById('success-msg').textContent = T.successMsg;
document.getElementById('success-btn').textContent = T.successBtn;
document.getElementById('error-title').textContent = T.errorTitle;
document.getElementById('error-btn').textContent = T.errorBtn;

const params = new URLSearchParams(window.location.search);
const mode = params.get('mode');
const oobCode = params.get('oobCode');

window.addEventListener('load', () => {
    if (mode === 'resetPassword' && oobCode) {
        firebase.auth().verifyPasswordResetCode(oobCode)
            .then(() => showState('reset'))
            .catch((err) => {
                let msg = T.errDefault;
                if (err.code === 'auth/invalid-action-code') msg = T.errInvalid;
                else if (err.code === 'auth/expired-action-code') msg = T.errExpired;
                document.getElementById('error-msg').textContent = msg;
                showState('error');
            });
    } else {
        document.getElementById('error-msg').textContent = T.errWrongLink;
        showState('error');
    }
});

function showState(name) {
    document.querySelectorAll('.state').forEach(s => s.classList.remove('active'));
    document.getElementById('state-' + name).classList.add('active');
}

function checkStrength(val) {
    const fill = document.getElementById('strength-fill');
    const label = document.getElementById('strength-label');
    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    const colors = ['', '#ef4444', '#f97316', '#eab308', '#22c55e', '#A855F7'];
    const widths = ['0%', '25%', '50%', '70%', '85%', '100%'];
    fill.style.width = widths[score] || '0%';
    fill.style.background = colors[score] || '';
    label.textContent = T.strength[score] || '';
    label.style.color = colors[score] || '';
}

function doReset() {
    const newPass = document.getElementById('new-password').value;
    const confirmPass = document.getElementById('confirm-password').value;
    const matchLabel = document.getElementById('match-label');
    const btn = document.getElementById('reset-btn');

    if (newPass.length < 6) {
        matchLabel.textContent = T.errShort;
        matchLabel.style.color = '#f97316';
        return;
    }
    if (newPass !== confirmPass) {
        matchLabel.textContent = T.errNoMatch;
        matchLabel.style.color = '#ef4444';
        return;
    }

    matchLabel.textContent = T.okMatch;
    matchLabel.style.color = '#A855F7';
    btn.disabled = true;
    btn.textContent = T.saving;

    firebase.auth().confirmPasswordReset(oobCode, newPass)
        .then(() => showState('success'))
        .catch((err) => {
            btn.disabled = false;
            btn.textContent = T.resetBtn;
            let msg = T.errGeneral;
            if (err.code === 'auth/weak-password') msg = T.errWeak;
            if (err.code === 'auth/expired-action-code') msg = T.errExpiredReset;
            matchLabel.textContent = msg;
            matchLabel.style.color = '#ef4444';
        });
}
