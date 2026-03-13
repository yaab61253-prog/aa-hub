window.tailwind = {
        config: {
            theme: {
                extend: {
                    animation: {
                        'streak-pulse': 'streakPulse 1.5s ease-in-out infinite',
                    }
                }
            }
        }
    };

        if (typeof lucide === 'undefined') {
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js';
            document.head.appendChild(s);
        }

        function initializeLucideSafe() {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        let currentPage = 1;
const postsPerPage = 10;
let lastPostTimestamp = null;
let isLoadingPosts = false;
let hasMorePosts = true;
let allLoadedPosts = [];
let allLoadedPostsIds = new Set();

const postsCache = {
    data: [],
    lastUpdate: null,
    expiryTime: 5 * 60 * 1000
};

            const _keyStore = (() => {
                let _k = null;
                return {

                    set(v) { _k = v ? v.split('').reverse().join('') : null; },
                    get() { return _k ? _k.split('').reverse().join('') : null; },
                    clear() { _k = null; }
                };
            })();

async function getGroqAPIKey() {

    if (_keyStore.get()) return _keyStore.get();

    const currentUser = auth.currentUser;
    if (!currentUser) {
        console.error('null');
        return null;
    }

    try {
        const snapshot = await db.ref('config/groqApiKey').once('value');

        if (!snapshot.exists()) {
            console.error('❌ المفتاح غير موجود في Firebase');
            return null;
        }

        const apiKey = snapshot.val();

        if (!apiKey || typeof apiKey !== 'string' || !apiKey.startsWith('gsk_')) {
            console.error('❌ المفتاح غير صالح');
            return null;
        }

        _keyStore.set(apiKey);
        return _keyStore.get();

    } catch (error) {
        if (error.code === 'PERMISSION_DENIED') {
            console.error('🚫 تحقق من Firebase Rules - يجب أن يكون المفتاح محمياً بقاعدة: auth != null');
        }
        return null;
    }
}
            const firebaseConfig = {
    apiKey: "AIzaSyBD6Vm6VlBKoIUaqL8wtvlrWiMMvmBbTnk",
    authDomain: "ad-chat-2134a.firebaseapp.com",
    databaseURL: "https://ad-chat-2134a-default-rtdb.firebaseio.com",
    projectId: "ad-chat-2134a",
};
            if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

const _rateLimits = {};

function _checkRateLimit(key, maxPerWindow = 5, windowMs = 60000) {
    const now = Date.now();
    if (!_rateLimits[key]) _rateLimits[key] = [];

    _rateLimits[key] = _rateLimits[key].filter(t => now - t < windowMs);
    if (_rateLimits[key].length >= maxPerWindow) return false;
    _rateLimits[key].push(now);
    return true;
}

function esc(text) {
    if (text === null || text === undefined) return "";
    const d = document.createElement('div');
    d.appendChild(document.createTextNode(String(text)));
    return d.innerHTML;
}

function escAttr(text) {
    if (text === null || text === undefined) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .catch((error) => {
        console.error("خطأ في حفظ الجلسة:", error);
    });

            const translations = {
                ar: {
                    signupSubtitle:"أنشئ حسابك وانضم إلينا",
                    prof:"تعديل الملف الشخصي",
                    welback:"مرحباً بعودتك",
                    pleasechoose:"الرجاء اختيار سبب البلاغ",
                    postnotdefind:"المنشور غير موجود",
                    orDivider:"او",
                    resetlink:"تحقق",
                    forgotPassword: "نسيت كلمة المرور؟",
forgotPasswordTitle: "استعادة كلمة المرور",
forgotPasswordMessage: "للحصول على مساعدة في استعادة حسابك، يرجى التواصل مع فريق الدعم الفني. سنساعدك في استعادة حسابك خلال 24 ساعة.",
contactSupport: "التواصل مع الدعم الفني",
backToLogin: "العودة لتسجيل الدخول",
                  user: "مستخدم",
                  endOfPosts:"لقد شاهدت كل المنشورات 🎉",
                    userReposts:"اعادات النشر",
                    alreadyReposted: "⚠️ لقد أعدت نشر هذا المنشور مسبقاً",
        repostedFrom: "أعدت نشر منشور",
        deleteRepostConfirm: "هل تريد حذف إعادة النشر؟",
        noReposts: "لا توجد إعادات نشر",
                    report: "إبلاغ",
        reportPost: "إبلاغ عن المنشور",
        reportMessage: "إبلاغ عن الرسالة",
        reportReason: "سبب الإبلاغ",
        reportSpam: "محتوى مزعج",
        reportHate: "خطاب كراهية",
        reportViolence: "عنف",
        reportOther: "أخرى",
        reportSent: " تم إرسال البلاغ بنجاح",
        repost: "إعادة نشر",
        reposted: " تم إعادة النشر",
        myReposts: "إعادات النشر",
                    aistop:"NebulaSpectra AI مشغول، حاول مرة أخرى لاحقاً ",                  aiNameChanged: " تم تغيير اسمك بنجاح!",
    aiPhotoUploading: "⏳ جاري رفع الصورة...",
                    attachFile: "إرفاق ملف",
                    attachImage: "صورة",
                    attachVideo: "فيديو",
                    attachDoc: "ملف",
    aiPhotoChanged: " تم تغيير صورتك بنجاح! 🎉",
    aiPhotoFailed: "❌ فشل رفع الصورة:",
    aiPhotoError: "❌ حدث خطأ في قراءة الصورة",
    aiPhotoNotSelected: "❌ لم تختر صورة",
    aiPhotoOpening: "📸 جاري فتح معرض الصور...",
    aiPhotoPreview: "صورتك الجديدة:",
    aiPhotoTip: "💡 ارجع للملف الشخصي لرؤية التحديث",
    aiBioChanged: " تم تحديث البايو بنجاح!",
    aiMessageSent: " تم إرسال الرسالة بنجاح",
    aiMessageSentTo: "📨 تم إرسال الرسالة إلى",
    aiMessageCorrected: "(تم تصحيح الاسم تلقائياً)",
    aiUserNotFound: "❌ لم أجد مستخداً باسم",
    aiUserSuggestion: "💡 هل تقصد أحد هؤلاء؟",
    aiMutualFollowRequired: "❌ يجب أن تكونوا متابعين لبعضكم لإرسال رسائل لـ",
    aiMutualFollowTip: "💡 اذهب لملفه الشخصي واضغط 'متابعة' أولاً.",
    aiPostPublished: " تم نشر المنشور بنجاح!",
    aiPostPreview: "معاينة المنشور:",
    aiPostTip: "💡 اذهب للرئيسية لرؤية المنشور",
    aiPostContentRequired: "❌ يجب كتابة محتوى للمنشور",
    aiPostDeleted: " تم حذف المنشور بنجاح! 🗑️",
    aiPostNotFound: "❌ المنشور غير موجود أو تم حذفه مسبقاً",
    aiPostNotYours: "❌ لا يمكنك حذف منشورات الآخرين",
    aiPostIdMissing: "❌ لم أتمكن من تحديد المنشور. جرب: 'احذف آخر منشور'",
    aiLanguageChanged: " تم تغيير اللغة بنجاح!",
    aiCurrentLang: "اللغة الحالية:",
    aiActionError: "❌ حدث خطأ أثناء تنفيذ الأمر:",
    aiUnknownAction: "❌ أمر غير معروف",
    aiDataMissing: "مفقود",
    arabic: "العربية",
    english: "الإنجليزية",
                    typemsg:"اكتب طلبك للمساعد الذكي...",
                    loadingchat: "جارٍ التحميل...",
        password: "كلمةالمرور",

        settingsAndProfile: "الإعدادات وتعديل الحساب",

        aiAssistant: "المساعد الذكي",
        aiSubtitle: "مساعدك الذكي المتطور",
        aiWelcomeMsg: "مرحباً! 👋 أنا",
        aiWelcomeName: "NebulaSpectra AI",
        aiWelcomeText: "، مساعدك الذكي. يمكنني مساعدتك في:",
        aiFeature1: "• تغيير اسمك وصورتك والبايو",
        aiFeature2: "• إرسال رسائل للمستخدمين",
        aiFeature3: "• نشر منشورات",
        aiFeature4: "• الإجابة على أسئلتك",
        aiPlaceholder: "اكتب طلبك للمساعد الذكي...",
        aiThinking: "يفكر...",
                    loadingchat: "جارٍ التحميل...",
                    password: "كلمةالمرور",
                    username: "اسم المستخدم",
                    email: "البريد الإلكتروني",
                    support: "الدعم الفني",
                    appName: "AA HUB",
                    storyDeleted: "تم حذف الستوري بنجاح!",
                    home: "الرئيسية",
                    chats: "المحادثات",
                    notifications: "الإشعارات",
                    communities: "المجتمعات",
                    noCommunities: "لا توجد مجتمعات بعد",
                    createCommunity: "إنشاء مجتمع",
                    communityImage: "صورة المجتمع",
                    communityNamePlaceholder: "اسم المجتمع",
                    communityDescPlaceholder: "وصف المجتمع",
                    noCommunityPosts: "لا توجد منشورات بعد",
                    create: "إنشاء",
                    join: "انضم",
                    leave: "مغادرة",
                    members: "الأعضاء",
                    noDescription: "لا يوجد وصف",
                    communityCreated: "تم إنشاء المجتمع بنجاح!",
                    errorCreatingCommunity: "حدث خطأ أثناء إنشاء المجتمع",
                    loading: "جاري التحميل...",
                    leftCommunity: "تم المغادرة من المجتمع",
                    joinedCommunity: "تم الانضمام للمجتمع",
                    noPosts: "لا توجد منشورات بعد",
                    unknown: "مجهول",
                    newCommunityPost: "منشور جديد للمجتمع",
                    writeYourPost: "اكتب منشورك هنا...",
                    image: "صورة",
                    publish: "نشر",
                    pleaseWriteOrAddImage: "يرجى كتابة نص أو إضافة صورة",
                    communityNotSelected: "خطأ: لم يتم تحديد المجتمع",
                    imageTooLarge: "الصورة كبيرة جداً! الحجم الأقصى 1MB",
                    postPublished: "تم نشر المنشور بنجاح! 🎉",
                    errorPublishingPost: "حدث خطأ أثناء نشر المنشور",
                    confirmDeletePost: "هل تريد حذف هذا المنشور؟",
                    postDeleted: "تم حذف المنشور بنجاح",
                    errorDeletingPost: "حدث خطأ أثناء حذف المنشور",
                    pleaseEnterCommunityName: "يرجى إدخال اسم المجتمع",
                    errorLoadingCommunities: "حدث خطأ في تحميل المجتمعات",
                    confirmDeleteCommunity: "هل أنت متأكد من حذف هذا المجتمع؟ سيتم حذف جميع المنشورات والأعضاء!",
                    forgotPassword: "نسيت كلمة المرور؟",
                    forgotPasswordTitle: "استعادة كلمة المرور",
                    forgotPasswordMessage: "للحصول على مساعدة في استعادة حسابك، يرجى التواصل مع فريق الدعم الفني. سنساعدك في استعادة حسابك خلال 24 ساعة.",
                    contactSupport: "التواصل مع الدعم الفني",
                    backToLogin: "العودة لتسجيل الدخول",
                    onlyAdminCanDelete: "فقط المسؤول يمكنه حذف المجتمع",
                    communityDeleted: "تم حذف المجتمع بنجاح",
                    errorDeletingCommunity: "حدث خطأ أثناء حذف المجتمع",
                    deleteCommunity: "حذف المجتمع",
                    storyDelConfirm: "هل تريد حذف هذه الستوري؟",
                    profile: "الملف الشخصي",
                    search: "البحث",
                    settings: "الإعدادات",
                    logout: "تسجيل الخروج",
                    newPost: "منشور جديد",
                    newStory: "ستوري جديدة",
                    publish: "نشر",
                    publishStory: "نشر الستوري",
                    cancel: "إلغاء",
                    comments: "تعليقات",
                    commentsAndReplies: "التعليقات والردود",
                    followers: "المتابعون",
                    following: "يتابع",
                    follow: "متابعة",
                    unfollow: "إلغاء المتابعة",
                    editProfile: "الإعدادات",
                    saveChanges: "حفظ التغييرات",
                    darkMode: "🌙 وضع ليلي",
                    lightMode: "☀️ وضع نهاري",
                    language: "اللغة",
                    changeLanguage: "تغيير اللغة",
                    email: "البريد الإلكتروني",
                    password: "كلمة المرور",
                    login: "دخول",
                    signup: "تسجيل جديد",
                    createAccount: "إنشاء حساب جديد",
                    username: "اسم المستخدم",
                    bio: "السيرة الذاتية",
                    addPhoto: "إضافة صورة",
                    removePhoto: "إزالة الصورة",
                    changePhoto: "تغيير الصورة (اختياري)",
                    addStory: "أضف",
                    writePost: "بماذا تفكر؟",
                    writeStory: "اكتب نص الستوري...",
                    addComment: "أضف تعليقًا...",
                    reply: "رد",
                    replyTo: "الرد على",
                    delete: "حذف",
                    edit: "تعديل",
                    edited: "معدّلة",
                    send: "إرسال",
                    message: "رسالة",
                    writeMessage: "اكتب رسالة..",
                    online: "متصل الآن",
                    lastSeen: "آخر ظهور",
                    typing: "يكتب...",
                    searchPosts: "المنشورات",
                    searchComments: "التعليقات",
                    searchStories: "الستوريات",
                    searchLatest: "الأحدث",
                    searchPlaceholder: "ابحث في AA HUB...",
                    noResults: "لا توجد نتائج",
                    noNotifications: "لا توجد إشعارات حالياً.",
                    noPosts: "لا يوجد منشورات لعرضها حالياً.",
                    noUsers: "لا يوجد مستخدمين في هذه القائمة.",
                    loadMore: "تحميل المزيد",
                    markAllRead: "تعليم الكل كمقروء",
                    deleteAll: "حذف الكل",
                    searchUsers: "المستخدمين",
                    privateChats: "المحادثات الخاصة",
                    back: "رجوع",
                    ok: "حسناً",
                    confirm: "تأكيد",
                    discoverUsers: "اكتشف وتابع حسابات جديدة",
                    userPosts: "منشورات المستخدم",
                    noBio: "لا يوجد سيرة ذاتية",
                    beFirstToComment: "كن أول من يعلق!",
                    postLabel: "منشور",
                    commentLabel: "تعليق",
                    storyLabel: "ستوري",
                    storyWithImage: "ستوري مع صورة",
                    unavailable: "غير متوفر",
                    newUser: "مستخدم جديد في AA Hub!",
                    sharePost: "مشاركة المنشور",
                    shareVia: "شارك عبر",
                    copyLink: "نسخ الرابط",
                    linkCopied: " تم نسخ الرابط!",
                    shareTwitter: "تويتر / X",
                    shareWhatsapp: "واتساب",
                    shareTelegram: "تيليغرام",
                    shareSnapchat: "سناب شات",
                    shareFacebook: "فيسبوك",
                    shareNative: "مشاركة...",
                    shareCancel: "إلغاء",
                    profileUpdateSuccess: "تم تحديث الملف الشخصي بنجاح!",
                    storyPublished: "تم نشر الستوري بنجاح!",
                    postDelConfirm: "هل أنت متأكد من حذف المنشور؟",
                    commentDelConfirm: "هل تريد حذف هذا التعليق؟",
                    messageDelConfirm: "هل أنت متأكد من حذف هذه الرسالة؟",
                    notifDelConfirm: "هل أنت متأكد من حذف جميع الإشعارات؟",
                    allNotifsDeleted: "تم حذف جميع الإشعارات.",
                    notifsMarkedRead: "تم تعليم {count} إشعار كـ مقروء.",
                    unfollowSuccess: "تم إلغاء المتابعة بنجاح.",
                    followSuccess: "تمت المتابعة بنجاح!",
                    mustWriteContent: "يجب كتابة محتوى أو إضافة صورة للنشر.",
                    mustWriteStory: "يجب كتابة محتوى أو إضافة صورة للستوري.",
                    fillAllFields: "الرجاء تعبئة جميع الحقول.",
                    emailInUse: "هذا البريد الإلكتروني مستخدم بالفعل.",
                    invalidEmail: "صيغة البريد الإلكتروني غير صحيحة.",
                    weakPassword: "كلمة المرور يجب أن تكون 6 أحرف على الأقل.",
                    errorOccurred: "حدث خطأ. حاول مرة أخرى.",
                    newNotification: "لديك إشعارات جديدة غير مقروءة!",
                    commentedOnPost: "علّق على منشورك",
                    repliedToComment: "ردّ على تعليقك",
                    mentionedYou: "أشار إليك في تعليق",
                    sentMessage: "أرسل لك رسالة خاصة",
                    loading: "جاري التحميل...",
                    loadingComments: "جاري تحميل التعليقات...",
                    loadingNotifications: "جاري تحميل الإشعارات...",
                    searching: "جاري البحث...",
                    settingsAndProfile: "الإعدادات وتعديل الحساب",
                    streakNew: "🔥 ستريك جديد! تكلم مع أصدقائك كل يوم",
                    pointsEarned: "نقاط مكتسبة",
                    myAchievements: "إنجازاتي",
                    streakTitle: "الستريك اليومي",
                    pointsTitle: "نقاطي",
                    badgesTitle: "شاراتي",
                    chatStreak: "ستريك",
                    chatStreakBroken: "💔 انقطع الستريك مع",
                    chatStreakNew: "🔥 ستريك جديد مع",
                    chatStreakDay: "يوم",
                    badgeLocked: "🔒 مقفلة",
                    account: "الحساب",
                    helpAndSupport: "المساعدة والدعم",
                    editProfileDesc: "الاسم، الصورة، السيرة الذاتية",
                    supportDesc: "تواصل مع فريق الدعم",
                    aboutApp: "عن AA Hub",
                    aboutAppDesc: "الإصدار، فريق العمل، معلومات التطبيق",
                    chooseLanguage: "اختر اللغة",
                    langSaved: " تم حفظ اللغة بنجاح",
                },
                en: {
                    signupSubtitle:"Create your account and join us",
                    prof:"Edit profile",
                    welback:"Welcome back",
                    pleasechoose:"Please select the reason for the report",
                    postnotdefind:"The post is not available",
                    orDivider:"or",
                   resetlink:"verification", forgotPassword: "Forgot Password?",
forgotPasswordTitle: "Password Recovery",
forgotPasswordMessage: "For help recovering your account, please contact our technical support team. We'll help you recover your account within 24 hours.",
contactSupport: "Contact Support",
backToLogin: "Back to Login",
                  user: "User",
                  endOfPosts:"I've seen all the posts 🎉",
                    userReposts:"Reposts",
                    alreadyReposted: "⚠️ You already reposted this",
        repostedFrom: "You reposted",
        deleteRepostConfirm: "Delete repost?",
        noReposts: "No reposts yet",
                    report: "Report",
        reportPost: "Report Post",
        reportMessage: "Report Message",
        reportReason: "Report Reason",
        reportSpam: "Spam",
        reportHate: "Hate Speech",
        reportViolence: "Violence",
        reportOther: "Other",
        reportSent: " Report sent successfully",
        repost: "Repost",
        reposted: " Reposted successfully",
        myReposts: "My Reposts",
                    aistop:"NebulaSpectra AI Currently busy, please try again later",
                   aiNameChanged: " Name changed successfully!",
    aiPhotoUploading: "⏳ Uploading photo...",
                    attachFile: "Attach File",
                    attachImage: "Image",
                    attachVideo: "Video",
                    attachDoc: "Document",
    aiPhotoChanged: " Photo changed successfully! 🎉",
    aiPhotoFailed: "❌ Photo upload failed:",
    aiPhotoError: "❌ Error reading photo",
    aiPhotoNotSelected: "❌ No photo selected",
    aiPhotoOpening: "📸 Opening photo gallery...",
    aiPhotoPreview: "Your new photo:",
    aiPhotoTip: "💡 Go to profile to see the update",
    aiBioChanged: " Bio updated successfully!",
    aiMessageSent: " Message sent successfully",
    aiMessageSentTo: "📨 Message sent to",
    aiMessageCorrected: "(name corrected automatically)",
    aiUserNotFound: "❌ User not found with name",
    aiUserSuggestion: "💡 Did you mean one of these?",
    aiMutualFollowRequired: "❌ You must follow each other to send messages to",
    aiMutualFollowTip: "💡 Go to their profile and press 'Follow' first.",
    aiPostPublished: " Post published successfully!",
    aiPostPreview: "Post preview:",
    aiPostTip: "💡 Go to home to see the post",
    aiPostContentRequired: "❌ Post content is required",
    aiPostDeleted: " Post deleted successfully! 🗑️",
    aiPostNotFound: "❌ Post not found or already deleted",
    aiPostNotYours: "❌ You can't delete others' posts",
    aiPostIdMissing: "❌ Couldn't identify the post. Try: 'delete last post'",
    aiLanguageChanged: " Language changed successfully!",
    aiCurrentLang: "Current language:",
    aiActionError: "❌ Error executing command:",
    aiUnknownAction: "❌ Unknown action",
    aiDataMissing: "missing",
    arabic: "Arabic",
    english: "English",
                    typemsg:"Write your request to the smart assistant...",
                    loadingchat: "Loading...",
        settingsAndProfile: "Settings & Profile Edit",

        aiAssistant: "NebulaSpectra AI",
        aiSubtitle: "Your Advanced Smart Assistant",
        aiWelcomeMsg: "Hello! 👋 I'm",
        aiWelcomeName: "NebulaSpectra AI",
        aiWelcomeText: ", your smart assistant. I can help you with:",
        aiFeature1: "• Change your name, photo, and bio",
        aiFeature2: "• Send messages to users",
        aiFeature3: "• Publish posts",
        aiFeature4: "• Answer your questions",
        aiPlaceholder: "Write your request here...",
        aiThinking: "Thinking...",
                    loadingchat: "Loading...",
                    email: "email",
                    support: "technical support",
                    appName: "AA HUB",
                    storyDeleted: "Story deleted successfully!",
                    home: "Home",
                    chats: "Chats",
                    notifications: "Notifications",
                    communities: "Communities",
                    noCommunities: "No communities yet",
                    createCommunity: "Create Community",
                    communityImage: "Community Image",
                    communityNamePlaceholder: "Community Name",
                    communityDescPlaceholder: "Community Description",
                    noCommunityPosts: "No posts yet",
                    create: "Create",
                    join: "Join",
                    leave: "Leave",
                    members: "Members",
                    noDescription: "No description",
                    communityCreated: "Community created successfully!",
                    errorCreatingCommunity: "Error creating community",
                    loading: "Loading...",
                    leftCommunity: "Left the community",
                    joinedCommunity: "Joined the community",
                    noPosts: "No posts yet",
                    unknown: "Unknown",
                    newCommunityPost: "New Community Post",
                    writeYourPost: "Write your post here...",
                    image: "Image",
                    publish: "Publish",
                    pleaseWriteOrAddImage: "Please write text or add an image",
                    communityNotSelected: "Error: Community not selected",
                    imageTooLarge: "Image too large! Max size 1MB",
                    postPublished: "Post published successfully! 🎉",
                    errorPublishingPost: "Error publishing post",
                    confirmDeletePost: "Delete this post?",
                    postDeleted: "Post deleted successfully",
                    errorDeletingPost: "Error deleting post",
                    pleaseEnterCommunityName: "Please enter community name",
                    errorLoadingCommunities: "Error loading communities",
                    confirmDeleteCommunity: "Are you sure you want to delete this community? All posts and members will be deleted!",
                    forgotPassword: "Forgot Password?",
                    forgotPasswordTitle: "Password Recovery",
                    forgotPasswordMessage: "For help recovering your account, please contact our technical support team. We'll help you recover your account within 24 hours.",
                    contactSupport: "Contact Support",
                    backToLogin: "Back to Login",
                    onlyAdminCanDelete: "Only the admin can delete the community",
                    communityDeleted: "Community deleted successfully",
                    errorDeletingCommunity: "Error deleting community",
                    deleteCommunity: "Delete Community",
                    profile: "Profile",
                    search: "Search",
                    settings: "Settings",
                    logout: "Logout",
                    newPost: "New Post",
                    newStory: "New Story",
                    publishStory: "Publish Story",
                    cancel: "Cancel",
                    comments: "Comments",
                    commentsAndReplies: "Comments & Replies",
                    followers: "Followers",
                    following: "Following",
                    follow: "Follow",
                    unfollow: "Unfollow",
                    editProfile: "Settings",
                    saveChanges: "Save Changes",
                    darkMode: "🌙 Dark Mode",
                    lightMode: "☀️ Light Mode",
                    language: "Language",
                    changeLanguage: "Change Language",
                    email: "Email",
                    password: "Password",
                    login: "Login",
                    signup: "Sign Up",
                    createAccount: "Create New Account",
                    username: "Username",
                    bio: "Bio",
                    addPhoto: "Add Photo",
                    removePhoto: "Remove Photo",
                    changePhoto: "Change Photo (Optional)",
                    addStory: "Add",
                    writePost: "What's on your mind?",
                    writeStory: "Write story text...",
                    addComment: "Add a comment...",
                    reply: "Reply",
                    replyTo: "Reply to",
                    delete: "Delete",
                    edit: "Edit",
                    edited: "Edited",
                    send: "Send",
                    message: "Message",
                    writeMessage: "Write a message..",
                    online: "Online now",
                    lastSeen: "Last seen",
                    searchUsers: "Users",
                    typing: "Typing...",
                    searchPosts: "Posts",
                    searchComments: "Comments",
                    searchStories: "Stories",
                    searchLatest: "Latest",
                    searchPlaceholder: "Search AA HUB...",
                    noResults: "No results found",
                    noNotifications: "No notifications yet.",
                    noPosts: "No posts to display.",
                    noUsers: "No users in this list.",
                    loadMore: "Load More",
                    markAllRead: "Mark all as read",
                    deleteAll: "Delete All",
                    storyDelConfirm: "Do you want to delete this story?",
                    privateChats: "Private Chats",
                    back: "Back",
                    ok: "OK",
                    confirm: "Confirm",
                    discoverUsers: "Discover and follow new accounts",
                    userPosts: "User Posts",
                    noBio: "No bio available",
                    beFirstToComment: "Be the first to comment!",
                    postLabel: "Post",
                    commentLabel: "Comment",
                    storyLabel: "Story",
                    storyWithImage: "Story with image",
                    unavailable: "Unavailable",
                    newUser: "New user in AA Hub!",
                    sharePost: "Share Post",
                    shareVia: "Share via",
                    copyLink: "Copy Link",
                    linkCopied: " Link Copied!",
                    shareTwitter: "Twitter / X",
                    shareWhatsapp: "WhatsApp",
                    shareTelegram: "Telegram",
                    shareSnapchat: "Snapchat",
                    shareFacebook: "Facebook",
                    shareNative: "Share...",
                    shareCancel: "Cancel",
                    profileUpdateSuccess: "Profile updated successfully!",
                    storyPublished: "Story published successfully!",
                    postDelConfirm: "Are you sure you want to delete this post?",
                    commentDelConfirm: "Do you want to delete this comment?",
                    messageDelConfirm: "Are you sure you want to delete this message?",
                    notifDelConfirm: "Are you sure you want to delete all notifications?",
                    allNotifsDeleted: "All notifications deleted.",
                    notifsMarkedRead: "Marked {count} notification(s) as read.",
                    unfollowSuccess: "Unfollowed successfully.",
                    followSuccess: "Followed successfully!",
                    mustWriteContent: "You must write content or add an image to post.",
                    mustWriteStory: "You must write content or add an image for the story.",
                    fillAllFields: "Please fill in all fields.",
                    emailInUse: "This email is already in use.",
                    invalidEmail: "Invalid email format.",
                    weakPassword: "Password must be at least 6 characters.",
                    errorOccurred: "An error occurred. Please try again.",
                    newNotification: "You have new unread notifications!",
                    commentedOnPost: "commented on your post",
                    repliedToComment: "replied to your comment",
                    mentionedYou: "mentioned you in a comment",
                    sentMessage: "sent you a private message",
                    loading: "Loading...",
                    loadingComments: "Loading comments...",
                    loadingNotifications: "Loading notifications...",
                    searching: "Searching...",
                    settingsAndProfile: "Settings & Profile Edit",
                    streakNew: "🔥 New streak! Chat with friends daily",
                    pointsEarned: "Points earned",
                    myAchievements: "My Achievements",
                    streakTitle: "Daily Streak",
                    pointsTitle: "My Points",
                    badgesTitle: "My Badges",
                    chatStreak: "streak",
                    chatStreakBroken: "💔 Streak broken with",
                    chatStreakNew: "🔥 New streak with",
                    chatStreakDay: "day",
                    badgeLocked: "🔒 Locked",
                    account: "Account",
                    helpAndSupport: "Help & Support",
                    editProfileDesc: "Name, photo, and bio",
                    supportDesc: "Contact support team",
                    aboutApp: "About AA Hub",
                    aboutAppDesc: "Version, team, app information",
                    chooseLanguage: "Choose Language",
                    langSaved: " Language saved successfully",
                },
            };

            let currentLang = localStorage.getItem("lang") || localStorage.getItem("language") || "ar";

function applyLanguage(lang) {

                document.querySelectorAll("[data-i18n]").forEach((el) => {
                    const key = el.dataset.i18n;
                    if (translations[lang][key]) {
                        el.textContent = translations[lang][key];
                    }
                });

                document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
                    const key = el.dataset.i18nPlaceholder;
                    if (translations[lang][key]) {
                        el.placeholder = translations[lang][key];
                    }
                });
            }

function t(key) {
                return translations[currentLang][key] || key;
            }

function switchLanguage(lang) {
                currentLang = lang;
                localStorage.setItem("lang", lang);
                localStorage.setItem("language", lang);
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
                updateUILanguage();

                const currentScreen = state.currentScreen;
                if (currentScreen === 'communities-screen') {
                    loadCommunities();
                } else if (currentScreen === 'community-detail-screen' && currentCommunityId) {
                    loadCommunityPosts(currentCommunityId);
                }
            }

function updateUILanguage() {
                document.querySelectorAll("[data-i18n]").forEach((el) => {
                    const key = el.getAttribute("data-i18n");
                    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                        el.placeholder = t(key);
                    } else {
                        el.textContent = t(key);
                    }
                });
                const langBtn = document.getElementById("language-toggle");
                if (langBtn) {
                    langBtn.innerHTML = `<i data-lucide="globe" class="w-5 h-5"></i> ${t("changeLanguage")}`;
                }
                setTimeout(initializeLucide, 0);
            }
            let state = {
                uid: null,
                data: null,
                activeChatPath: null,
                activeBasePath: null,
                activePostId: null,
                activeCommentId: null,
                activeMessageKey: null,
                currentScreen: "auth-screen",
                replyingToMessage: null,
                replyingToComment: null,
                searchFilter: "posts",
            };
                        let lastNotificationCount = 0;
            let allUsers = {};
            let onlineUsers = {};

function initializeLucide() {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }

function alert(message) {
                const modal = document.createElement("div");
                modal.style.cssText = `
                position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0, 0, 0, 0.6); z-index: 9999; display: flex;
                align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;
            `;
                setTimeout(() => (modal.style.opacity = "1"), 10);
                modal.innerHTML = `
                <div class="glass-card p-6 rounded-2xl w-11/12 max-w-xs text-center" onclick="event.stopPropagation()" style="border-radius:20px;">
                    <p class="mb-5 text-lg">${message}</p>
                    <button onclick="this.closest('div').parentElement.style.opacity='0'; setTimeout(() => document.body.removeChild(this.closest('div').parentElement), 300);" class="bg-purple-600 px-6 py-2 rounded-xl font-bold btn-press hover:bg-purple-700">${t("ok")}</button>
                </div>
            `;
                document.body.appendChild(modal);
            }

function confirm(message, callback) {
                const modal = document.createElement("div");
                modal.style.cssText = `
                position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0, 0, 0, 0.6); z-index: 9999; display: flex;
                align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s;
            `;
                setTimeout(() => (modal.style.opacity = "1"), 10);
                modal.innerHTML = `
                <div class="glass-card p-6 rounded-2xl w-11/12 max-w-xs text-center" onclick="event.stopPropagation()" style="border-radius:20px;">
                    <p class="mb-5 text-lg">${message}</p>
                    <div class="flex justify-around gap-3">
                        <button id="confirm-yes" class="bg-purple-600 flex-1 py-2 rounded-xl font-bold btn-press hover:bg-purple-700">${t("confirm")}</button>
                        <button id="confirm-no" class="bg-red-600/50 text-white flex-1 py-2 rounded-xl font-bold btn-press hover:bg-red-700/70">${t("cancel")}</button>
                    </div>
                </div>
            `;
                document.body.appendChild(modal);
                const removeModal = () => {
                    modal.style.opacity = "0";
                    setTimeout(() => document.body.removeChild(modal), 300);
                };
                document.getElementById("confirm-yes").onclick = () => {
                    removeModal();
                    callback(true);
                };
                document.getElementById("confirm-no").onclick = () => {
                    removeModal();
                    callback(false);
                };
            }

function setupPresence() {
                const userRef = db.ref(`presence/${state.uid}`);
                userRef.set({
                    isOnline: true,
                    lastSeen: firebase.database.ServerValue.TIMESTAMP,
                    username: state.data.username,
                });
                userRef.onDisconnect().update({
                    isOnline: false,
                    lastSeen: firebase.database.ServerValue.TIMESTAMP,
                });
                db.ref("presence").on("value", (snap) => {
                    onlineUsers = {};
                    snap.forEach((s) => {
                        onlineUsers[s.key] = s.val();
                    });

                    if (state.currentScreen === "chats-list-screen") {
                        updateOnlineDotsOnly();
                    }
                });
            }

function createNotification(targetUid, type, relatedId, senderName, parentId = null) {
                if (!targetUid || targetUid === state.uid) return;
                const relatedPath = type === "CHAT" && relatedId.includes("pvt") ? relatedId : relatedId;
                db.ref(`notifications/${targetUid}`)
                    .push({
                        type: type,
                        relatedId: relatedPath,
                        parentId: parentId,
                        senderName: senderName,
                        timestamp: Date.now(),
                        read: false,
                    })
                    .catch((e) => console.error("فشل إرسال الإشعار:", e));
            }

function updateNotificationBadge(count) {

                return;
            }

function markNotificationRead(nid) {
                db.ref(`notifications/${state.uid}/${nid}`).update({
                    read: true,
                });
            }

function markAllNotificationsRead() {
                db.ref(`notifications/${state.uid}`).once("value", (snap) => {
                    const updates = {};
                    let unreadCount = 0;
                    snap.forEach((n) => {
                        if (!n.val().read) {
                            updates[n.key + "/read"] = true;
                            unreadCount++;
                        }
                    });
                    if (Object.keys(updates).length > 0) {
                        db.ref(`notifications/${state.uid}`)
                            .update(updates)
                            .then(() => alert(t("notifsMarkedRead").replace("{count}", unreadCount)));
                    }
                    updateNotificationBadge(0);
                    loadNotifications();
                });
            }

function deleteAllNotifications() {
                confirm(t("notifDelConfirm"), (result) => {
                    if (result) {
                        db.ref(`notifications/${state.uid}`)
                            .remove()
                            .then(() => {
                                alert(t("allNotifsDeleted"));
                                updateNotificationBadge(0);
                                loadNotifications();
                            })
                            .catch((e) => console.error("فشل حذف الإشعارات:", e));
                    }
                });
            }

function loadNotifications() {

                nav("communities-screen");
                return;
            }

            function deleteNotification(nid) {
                db.ref(`notifications/${state.uid}/${nid}`)
                    .remove()
                    .then(() => {
                        db.ref(`notifications/${state.uid}`).once("value", (snap) => {
                            let unreadCount = 0;
                            snap.forEach((n) => {
                                if (!n.val().read) unreadCount++;
                            });
                            updateNotificationBadge(unreadCount);
                        });
                    })
                    .catch((e) => console.error("فشل حذف الإشعار:", e));
            }

const navHistory = [];

function nav(id, addToHistory = true) {
    if (state.currentScreen === "chat-screen" && id !== "chat-screen") {
        if (state._typingListenerRef) {
            state._typingListenerRef.off();
            state._typingListenerRef = null;
        }
        if (state.activeChatPath) {
            const basePath = state.activeChatPath.replace("/messages", "");
            db.ref(`${basePath}/typing/${state.uid}`).set(false);
            clearTimeout(typingTimeout);
        }
    }
    if (addToHistory && state.currentScreen && state.currentScreen !== id) {
        navHistory.push(state.currentScreen);
    }

    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    const leavingScreen = document.querySelector(".screen:not(.hidden)");
    if (leavingScreen) {
        setTimeout(() => leavingScreen.classList.add("hidden"), 400);
    }
    const targetScreen = document.getElementById(id);
    if (targetScreen) {
        targetScreen.classList.remove("hidden");
        requestAnimationFrame(() => {
            targetScreen.classList.add("active");
            state.currentScreen = id;
            if (id === "chats-list-screen") { window.syncChatStreaks && window.syncChatStreaks(); loadChatList(); }
            if (id === "communities-screen") loadCommunities();
            if (id === "settings-screen") {
                updateCurrentLangLabel();
            }
            if (id === "profile-edit-screen") {
                if (state.data) {
                    document.getElementById("new-name").value = state.data.username || "";
                    document.getElementById("new-bio").value = state.data.bio || "";
                }
            }
            if (id === "language-screen") {
                initLanguageScreen();
            }
            if (id === "search-screen") {
                document.getElementById("search-input").value = "";
                performSearch("");
            }
        });
    }
}
window.addEventListener("popstate", (e) => {
    if (navHistory.length > 0) {
        const prevScreen = navHistory.pop();
        nav(prevScreen, false);
    } else {
        nav("main-screen", false);
    }
});

function closeAllModals() {
                document.getElementById("comments-overlay").classList.remove("active");
                document.getElementById("follow-list-overlay").classList.remove("active");
                document.getElementById("msg-options-modal").style.display = "none";
                const createCommunityOverlay = document.getElementById("create-community-overlay");
                if (createCommunityOverlay) {
                    createCommunityOverlay.classList.remove("active");
                }
                state.activePostId = null;
                state.activeCommentId = null;
                state.activeMessageKey = null;
                state.replyingToComment = null;
            }

auth.onAuthStateChanged((user) => {

    if (user) {
        state.uid = user.uid;
        db.ref("users/" + user.uid).on("value", (s) => {
            state.data = s.val() || {
                username: user.email.split("@")[0],
                email: user.email,
                photo: "",
                bio: t("newUser"),
                language: "ar",
            };
            if (!s.exists()) {
                db.ref("users/" + user.uid).set(state.data);
            }
            if (state.data.language) {
                switchLanguage(state.data.language);
            }
            updateUI();
            setupPresence();

            loadPosts().then(() => {
                setTimeout(() => {
                    document.body.classList.add('firebase-ready');
                }, 300);
            });

            const urlParams = new URLSearchParams(window.location.search);
            const _pathMatch = window.location.pathname.match(/^\/post\/id\/([^\/]+)/);
const sharedPostId = (_pathMatch && _pathMatch[1]) || urlParams.get('post') || sessionStorage.getItem('pendingPostId');
            if (sharedPostId) {
                sessionStorage.removeItem('pendingPostId');
                window.history.replaceState({ postId: sharedPostId }, '', '/post/id/' + sharedPostId);

                setTimeout(() => openPostDetail(sharedPostId), 800);
            } else {
                nav("main-screen");
            }
        });

    } else {

        document.body.classList.add('firebase-ready');

        const urlParams = new URLSearchParams(window.location.search);
        const sharedPostId = urlParams.get('post');
        if (sharedPostId) {
            window.history.replaceState({}, document.title, window.location.pathname);
            sessionStorage.setItem('pendingPostId', sharedPostId);
        }
        nav("auth-screen");
    }
});

function updateUI() {
                document.querySelectorAll(".my-name").forEach((el) => (el.innerText = state.data.username));
                document
                    .querySelectorAll(".my-photo")
                    .forEach(
                        (el) => (el.src = state.data.photo || "/images/android-icon.png")
                    );
                document.querySelectorAll(".my-bio").forEach((el) => (el.innerText = state.data.bio || t("noBio")));
                updateUILanguage();
                initializeLucide();
                const body = document.body;
                const themeIcon = document.getElementById("theme-icon");
                if (themeIcon) {
                    if (body.classList.contains("dark-mode")) {
                        themeIcon.innerHTML = `<i data-lucide="sun" class="w-5 h-5"></i> ${t("lightMode")}`;
                    } else {
                        themeIcon.innerHTML = `<i data-lucide="moon" class="w-5 h-5"></i> ${t("darkMode")}`;
                    }
                }
            }
            db.ref("users").on("value", (snap) => {
                allUsers = {};
                snap.forEach((user) => {
                    allUsers[user.key] = {
                        uid: user.key,
                        ...user.val(),
                    };
                });
            });

            function getFollowData(uid, callback) {
                let followers = [];
                let following = [];
                db.ref("following").once("value", (snap) => {
                    snap.forEach((userWhoFollows) => {
                        if (userWhoFollows.child(uid).exists() && allUsers[userWhoFollows.key]) {
                            followers.push(allUsers[userWhoFollows.key]);
                        }
                    });
                    db.ref(`following/${uid}`).once("value", (snap) => {
                        snap.forEach((userIFollow) => {
                            if (allUsers[userIFollow.key]) {
                                following.push(allUsers[userIFollow.key]);
                            }
                        });
                        callback({
                            followers: followers,
                            following: following,
                        });
                    });
                });
            }

function formatCommentText(text) {
                if (!text) return "";

                const escaped = esc(text);

                const mentionRegex = /@(\w+)/g;
                return escaped.replace(mentionRegex, (match, username) => {
                    const user = Object.values(allUsers).find((u) => u.username === username);
                    if (user) {
                        return `<span onclick="event.stopPropagation(); viewProfile('${escAttr(user.uid)}')" class="text-purple-400 font-medium cursor-pointer hover:underline">@${esc(username)}</span>`;
                    }
                    return match;
                });
            }

function viewProfile(targetUid = state.uid) {
    const isMe = targetUid === state.uid;
    const user = allUsers[targetUid] || state.data;

    document.getElementById("profile-name-display").innerText = user.username;
    document.getElementById("profile-bio-display").innerText = user.bio || t("noBio");
    document.getElementById("profile-photo-display").src =
        user.photo || "/images/android-icon.png";

    db.ref("users/" + targetUid).once("value", snap => {
        const ud = snap.val() || {};
        ud._targetUid = targetUid;
    });

    const actionContainer = document.getElementById("profile-action-btn-container");
    actionContainer.innerHTML = "";

    if (isMe) {
        actionContainer.innerHTML = `
            <button onclick="nav('settings-screen')"
                class="bg-purple-600 px-6 py-2 rounded-full font-bold btn-press hover:bg-purple-700 transition duration-200 flex items-center gap-2">
                <i data-lucide="settings" class="w-4 h-4"></i>
                <span data-i18n="editProfile">${t("editProfile")}</span>
            </button>
        `;
    } else {
        db.ref(`following/${state.uid}/${targetUid}`).once("value", (s) => {
            const isFollowing = s.exists();
            actionContainer.innerHTML = `
                <div class="flex gap-3">
                    <button onclick="toggleFollow('${targetUid}'); event.stopPropagation();"
                        class="bg-purple-600 px-6 py-2 rounded-full font-bold btn-press hover:bg-purple-700 transition duration-200 flex items-center gap-2">
                        <i data-lucide="${isFollowing ? "user-minus" : "user-plus"}" class="w-4 h-4"></i>
                        <span>${isFollowing ? t("unfollow") : t("follow")}</span>
                    </button>
                    <button onclick="openChat('${targetUid}', '${escAttr(user.username)}')"
                        class="bg-purple-600/20 text-purple-400 px-6 py-2 rounded-full font-bold btn-press hover:bg-purple-700/50 transition duration-200 flex items-center gap-2">
                        <i data-lucide="message-circle" class="w-4 h-4"></i>
                        <span data-i18n="message">${t("message")}</span>
                    </button>
                </div>
            `;
            setTimeout(initializeLucide, 0);
        });
    }

    getFollowData(targetUid, (data) => {
        document.getElementById("profile-followers-count").innerText = data.followers.length;
        document.getElementById("profile-following-count").innerText = data.following.length;
        document.getElementById("profile-followers-container").onclick = () =>
            openFollowList(t("followers"), data.followers);
        document.getElementById("profile-following-container").onclick = () =>
            openFollowList(t("following"), data.following);
    });

    document.getElementById("profile-back-btn").onclick = () => nav("main-screen");

    const profileContainer = document.getElementById("profile-posts-container");
profileContainer.innerHTML = `
    <!-- 📋 القوائم المحسّنة -->
    <div class="flex gap-2 mb-6 border-b border-white/10 pb-0 overflow-x-auto custom-scroll">
        <button onclick="switchProfileTab('posts', '${targetUid}')"
            id="tab-posts"
            class="profile-tab active px-4 py-2.5 rounded-t-xl text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap">
            <i data-lucide="file-text" class="w-4 h-4"></i>
            <span data-i18n="userPosts">${t("userPosts")}</span>
        </button>
        <button onclick="switchProfileTab('reposts', '${targetUid}')"
            id="tab-reposts"
            class="profile-tab px-4 py-2.5 rounded-t-xl text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap">
            <i data-lucide="repeat-2" class="w-4 h-4"></i>
            <span>${isMe ? t("myReposts") : (currentLang === 'ar' ? 'إعادات النشر' : 'Reposts')}</span>
        </button>
    </div>

    <!-- 📦 المحتوى -->
    <div id="profile-tab-content" class="min-h-[400px]"></div>
`;

    nav("profile-screen");
    setTimeout(initializeLucide, 0);
    switchProfileTab('posts', targetUid);
}

function switchProfileTab(tabName, targetUid) {

    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');

    const contentContainer = document.getElementById('profile-tab-content');
    contentContainer.innerHTML = `
        <div class="flex justify-center items-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
        </div>
    `;

    if (tabName === 'posts') {
        loadUserPosts(targetUid);
    } else if (tabName === 'reposts') {
        loadUserReposts(targetUid);
    }
}

function loadUserPosts(targetUid) {
    db.ref("posts").orderByChild("uid").equalTo(targetUid).on("value", (snap) => {
        const container = document.getElementById('profile-tab-content');
        if (!container) return;

        container.innerHTML = "";
        let posts = [];

        snap.forEach((c) => {
            const post = {
                id: c.key,
                ...c.val(),
            };
            posts.push(post);
        });

        if (posts.length === 0) {
            container.innerHTML = `
                <div class="p-12 rounded-3xl text-center border border-white/5">
                    <i data-lucide="inbox" class="w-20 h-20 mx-auto mb-4 opacity-20"></i>
                    <p class="opacity-60 text-lg" data-i18n="noPosts">${t("noPosts")}</p>
                </div>
            `;
            setTimeout(initializeLucide, 0);
            return;
        }

        const fragment = document.createDocumentFragment();
        posts.reverse().forEach((p) => {
            fragment.appendChild(createPostElement(p));
        });
        container.appendChild(fragment);
        if (posts.length > 0) {
    lastPostTimestamp = posts[posts.length - 1].timestamp;
}
    });
}

function loadUserReposts(targetUid) {
    db.ref('reposts').orderByChild('repostBy').equalTo(targetUid).on('value', (snap) => {
        const container = document.getElementById('profile-tab-content');
        if (!container) return;

        container.innerHTML = '';
        const reposts = [];

        snap.forEach(r => {
            reposts.push({
                id: r.key,
                ...r.val()
            });
        });

        if (reposts.length === 0) {
            container.innerHTML = `
                <div class="p-8 rounded-2xl text-center">
                    <i data-lucide="repeat-2" class="w-16 h-16 mx-auto mb-3 opacity-30"></i>
                    <p class="opacity-60 text-lg">${t('noReposts')}</p>
                </div>
            `;
            setTimeout(initializeLucide, 0);
            return;
        }

        reposts.reverse().forEach(repost => {
            const repostEl = document.createElement('div');
            repostEl.className = 'p-5 rounded-[25px] mb-4 border border-purple-500/20';

            repostEl.innerHTML = `
                <div class="text-xs opacity-60 mb-3 flex items-center gap-1">
                    <i data-lucide="repeat-2" class="w-4 h-4 text-purple-400"></i>
                    <span>${t('repostedFrom')} <strong class="text-purple-400">${esc(repost.originalAuthor)}</strong></span>
                    <span class="mx-1">•</span>
                    <span>${new Date(repost.repostTimestamp).toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US')}</span>
                </div>

                <div class="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="font-bold text-base text-purple-300">${esc(repost.originalAuthor)}</span>
                        <span class="text-xs opacity-50">${new Date(repost.originalTimestamp).toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US')}</span>
                    </div>
                    <p class="text-base mb-3 whitespace-pre-wrap leading-relaxed opacity-90">${esc(repost.originalContent)}</p>
                    ${repost.originalImage ? `<img src="${escAttr(repost.originalImage)}" class="rounded-xl w-full mb-2 max-h-80 object-cover border border-white/5">` : ''}
                </div>

                <div class="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
                    <button onclick="viewProfile('${escAttr(repost.originalAuthorUid)}')"
                        class="text-xs text-purple-400 opacity-70 hover:opacity-100 flex items-center gap-1 btn-press">
                        <i data-lucide="user" class="w-3 h-3"></i>
                        ${currentLang === 'ar' ? 'عرض الملف الشخصي' : 'View Profile'}
                    </button>
                    <button onclick="deleteRepost('${escAttr(repost.id)}')"
                        class="text-xs text-red-400 opacity-70 hover:opacity-100 flex items-center gap-1 btn-press">
                        <i data-lucide="trash-2" class="w-3 h-3"></i>
                        ${currentLang === 'ar' ? 'حذف إعادة النشر' : 'Delete repost'}
                    </button>
                </div>
            `;

            container.appendChild(repostEl);
        });

        setTimeout(initializeLucide, 0);
    });
}

function deleteRepost(repostId) {
    confirm(t('deleteRepostConfirm'), async (result) => {
        if (result) {

            const snap = await db.ref(`reposts/${repostId}`).once('value');
            if (!snap.exists()) return;
            if (snap.val().repostBy !== state.uid) {
                alert('❌ لا يمكنك حذف إعادة نشر شخص آخر');
                return;
            }
            db.ref(`reposts/${repostId}`).remove();
        }
    });
}

function openFollowList(title, list) {
                document.getElementById("follow-list-title").innerText = title;
                const container = document.getElementById("follow-list-container");
                container.innerHTML = "";
                if (list.length === 0) {
                    container.innerHTML = `<p class="text-center opacity-60 mt-8 text-lg p-5">${t("noUsers")}</p>`;
                    document.getElementById("follow-list-overlay").classList.add("active");
                    return;
                }
                const fragment = document.createDocumentFragment();
                list.forEach((user) => {
                    const div = document.createElement("div");
                    div.className =
                        "flex items-center gap-3 p-3 rounded-xl mb-3 btn-press cursor-pointer hover:bg-white/10 border border-white/5";
                    div.setAttribute("onclick", `closeAllModals(); viewProfile('${user.uid}')`);
                    div.innerHTML = `
                    <img src="${escAttr(user.photo || "/images/android-icon.png")}" class="w-10 h-10 rounded-full object-cover border-2 border-purple-400/50">
                    <span class="font-bold text-purple-300">${esc(user.username)}</span>
                `;
                    fragment.appendChild(div);
                });
                container.appendChild(fragment);
                document.getElementById("follow-list-overlay").classList.add("active");
                setTimeout(initializeLucide, 0);
            }

            function updateProfile() {
                const newName = document.getElementById("new-name").value.trim();
                const newBio = document.getElementById("new-bio").value.trim();
                const file = document.getElementById("new-photo").files[0];

                if (!_checkRateLimit('updateProfile', 3, 30000)) {
                    alert(currentLang === 'ar' ? '⚠️ انتظر قليلاً قبل تحديث الملف الشخصي.' : '⚠️ Please wait before updating again.');
                    return;
                }

                if (!newName || newName.length < 2) {
                    alert('❌ الاسم يجب أن يكون حرفين على الأقل');
                    return;
                }
                if (newName.length > 30) {
                    alert('❌ الاسم يجب أن يكون 30 حرف كحد أقصى');
                    return;
                }

                if (/<[^>]*>/.test(newName)) {
                    alert(currentLang === 'ar' ? '❌ الاسم يحتوي على رموز غير مسموح بها.' : '❌ Name contains invalid characters.');
                    return;
                }
                if (newBio.length > 150) {
                    alert('❌ البايو يجب أن يكون 150 حرف كحد أقصى');
                    return;
                }

                if (/<[^>]*>/.test(newBio)) {
                    alert(currentLang === 'ar' ? '❌ البايو يحتوي على رموز غير مسموح بها.' : '❌ Bio contains invalid characters.');
                    return;
                }

                if (file && file.size > 5 * 1024 * 1024) {
                    alert(currentLang === 'ar' ? '❌ الصورة كبيرة جداً! الحد 5MB.' : '❌ Photo too large! Max 5MB.');
                    return;
                }
                if (file && !file.type.startsWith('image/')) {
                    alert(currentLang === 'ar' ? '❌ يجب أن يكون الملف صورة.' : '❌ File must be an image.');
                    return;
                }
                const updateDB = (photoUrl = state.data.photo) => {
                    db.ref("users/" + state.uid)
                        .update({
                            username: newName,
                            bio: newBio,
                            photo: photoUrl,
                            language: currentLang,
                        })
                        .then(() => {
                            db.ref("posts")
                                .orderByChild("uid")
                                .equalTo(state.uid)
                                .once("value", (snap) => {
                                    snap.forEach((post) => {
                                        post.ref.update({
                                            username: newName,
                                            userPhoto: photoUrl,
                                        });
                                    });
                                });
                            alert(t("profileUpdateSuccess"));
                            nav("main-screen");
                        })
                        .catch((e) => console.error("Update failed:", e));
                };
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => updateDB(e.target.result);
                    reader.readAsDataURL(file);
                } else {
                    updateDB();
                }
            }

            function toggleLanguage() {
                currentLang = currentLang === "ar" ? "en" : "ar";
                localStorage.setItem("lang", currentLang);
                localStorage.setItem("language", currentLang);
                applyLanguage(currentLang);
                document.documentElement.lang = currentLang;
                document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
            }

            function setSearchFilter(filter) {
                state.searchFilter = filter;
                document.querySelectorAll(".filter-tab").forEach((tab) => {
                    if (tab.dataset.filter === filter) {
                        tab.classList.add("active");
                    } else {
                        tab.classList.remove("active");
                    }
                });
                const searchQuery = document.getElementById("search-input").value;
                performSearch(searchQuery);
            }

function performSearch(query) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = `<div class="text-center text-purple-400 p-4">${t("searching")}</div>`;

    const lowerQuery = query.toLowerCase().trim();

    if (!lowerQuery) {
        resultsContainer.innerHTML = `<p class="text-center opacity-60 mt-8 text-lg p-5">${t("searchPlaceholder")}</p>`;
        return;
    }

    setTimeout(() => {
        const results = [];

        switch (state.searchFilter) {
            case "posts":
                db.ref("posts").once("value", (snap) => {
                    snap.forEach((post) => {
                        const p = { id: post.key, ...post.val() };

                        if (searchInFields(p, lowerQuery, ['content', 'username'])) {
                            results.push({ type: "post", data: p });
                        }
                    });
                    displayResults(results);
                });
                break;

            case "comments":
                db.ref("comments").once("value", (snap) => {
                    snap.forEach((postComments) => {
                        postComments.forEach((comment) => {
                            const c = {
                                id: comment.key,
                                postId: postComments.key,
                                ...comment.val()
                            };

                            if (searchInFields(c, lowerQuery, ['text', 'username'])) {
                                results.push({ type: "comment", data: c });
                            }
                        });
                    });
                    displayResults(results);
                });
                break;

            case "users":
                db.ref("users").once("value", (snap) => {
                    snap.forEach((userSnap) => {
                        const u = { uid: userSnap.key, ...userSnap.val() };

                        if (searchInFields(u, lowerQuery, ['username', 'bio'])) {
                            results.push({ type: "user", data: u });
                        }
                    });
                    displayResults(results);
                });
                break;

            case "latest":
                Promise.all([
                    db.ref("posts").once("value"),
                    db.ref("comments").once("value")
                ]).then(([postsSnap, commentsSnap]) => {

                    postsSnap.forEach((post) => {
                        const p = { id: post.key, ...post.val() };
                        if (searchInFields(p, lowerQuery, ['content', 'username'])) {
                            results.push({
                                type: "post",
                                data: p,
                                timestamp: p.timestamp
                            });
                        }
                    });

                    commentsSnap.forEach((postComments) => {
                        postComments.forEach((comment) => {
                            const c = {
                                id: comment.key,
                                postId: postComments.key,
                                ...comment.val()
                            };
                            if (searchInFields(c, lowerQuery, ['text', 'username'])) {
                                results.push({
                                    type: "comment",
                                    data: c,
                                    timestamp: c.timestamp
                                });
                            }
                        });
                    });

                    results.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
                    displayResults(results);
                });
                break;
        }
    }, 300);
}

function displayResults(results) {
                const container = document.getElementById("search-results");
                container.innerHTML = "";
                if (results.length === 0) {
                    container.innerHTML = `<p class="text-center opacity-60 mt-8 text-lg p-5 ">${t("noResults")}</p>`;
                    return;
                }
                const fragment = document.createDocumentFragment();
                results.forEach((result) => {
                    const div = document.createElement("div");
                    div.className =
                        " p-4 rounded-xl mb-3 cursor-pointer btn-press hover:bg-white/5 border border-white/5";
                    switch (result.type) {
                        case "post":
                            div.onclick = () => {
                                openPostDetail(result.data.id);
                            };
                            div.innerHTML = `
                            <div class="flex items-center gap-3 mb-2">
                                <img src="${escAttr(result.data.userPhoto || "/images/android-icon.png")}" class="w-10 h-10 rounded-full border-2 border-purple-400/50">
                                <div>
                                    <div class="font-bold text-sm text-purple-300">${esc(result.data.username)}</div>
                                    <div class="text-xs opacity-50">${new Date(result.data.timestamp).toLocaleDateString(currentLang === "ar" ? "ar-SA" : "en-US")}</div>
                                </div>
                            </div>
                            <p class="text-sm opacity-80 line-clamp-2">${esc(result.data.content)}</p>
                            <div class="text-xs text-purple-400 mt-2">${t("postLabel")}</div>
                        `;
                            break;
                        case "user":
                            div.onclick = () => {
                                closeAllModals();
                                viewProfile(result.data.uid);
                            };
                            div.innerHTML = `
                            <div class="flex items-center gap-3 mb-2">
                                <img src="${escAttr(result.data.photo || "/images/android-icon.png")}" class="w-12 h-12 rounded-full object-cover border-2 border-purple-400/50">
                                <div class="flex-1">
                                    <div class="font-bold text-lg text-purple-300">${esc(result.data.username)}</div>
                                    <div class="text-sm opacity-70">${esc(result.data.bio || t("noBio"))}</div>
                                </div>
                            </div>
                            <div class="text-xs text-purple-400 mt-2" data-i18n="user"></div>
                        `;
                            break;
                        case "comment":
                            div.onclick = () => openComments(result.data.postId);
                            div.innerHTML = `
<div class="flex items-center gap-3 mb-2">
    <img src="${escAttr(result.data.userPhoto || "/images/android-icon.png")}" class="w-10 h-10 rounded-full border-2 border-purple-400/50">
    <div>
        <div class="font-bold text-sm text-purple-300">${esc(result.data.username)}</div>
        <div class="text-xs opacity-50">${new Date(result.data.timestamp).toLocaleDateString(currentLang === "ar" ? "ar-SA" : "en-US")}</div>
    </div>
</div>
<p class="text-sm opacity-80 line-clamp-2">${esc(result.data.text)}</p>
<div class="text-xs text-blue-400 mt-2">${t("commentLabel")}</div>
`;
                            break;
                    }
                    fragment.appendChild(div);
                });
                container.appendChild(fragment);
                setTimeout(initializeLucide, 0);
            }

function openComments(postId) {
                state.activePostId = postId;
                state.replyingToComment = null;
                document.getElementById("comment-reply-indicator").classList.add("hidden");
                document.getElementById("comments-overlay").classList.add("active");
                loadComments(postId);
            }

function loadComments(postId) {
                const list = document.getElementById("com-list");
                list.innerHTML = `<div class="text-center text-purple-400 p-4">${t("loadingComments")}</div>`;
                db.ref(`comments/${postId}`).on("value", (snap) => {
                    list.innerHTML = "";
                    const comments = [];
                    snap.forEach((c) => {
                        const comment = {
                            id: c.key,
                            ...c.val(),
                        };
                        if (!comment.parentId) {
                            comments.push(comment);
                        }
                    });
                    if (comments.length === 0) {
                        list.innerHTML = `<p class="text-center opacity-60 p-5">${t("beFirstToComment")}</p>`;
                        return;
                    }
                    comments.sort((a, b) => a.timestamp - b.timestamp);
                    comments.forEach((comment) => {
                        const commentEl = createCommentElement(comment, postId);
                        list.appendChild(commentEl);
                        snap.forEach((r) => {
                            const reply = {
                                id: r.key,
                                ...r.val(),
                            };
                            if (reply.parentId === comment.id) {
                                const replyEl = createCommentElement(reply, postId, true);
                                list.appendChild(replyEl);
                            }
                        });
                    });
                    setTimeout(initializeLucide, 0);
                });
            }

function createCommentElement(comment, postId, isReply = false) {
                const isOwner = comment.uid === state.uid;
                const commentDate = new Date(comment.timestamp).toLocaleTimeString(
                    currentLang === "ar" ? "ar-SA" : "en-US",
                    {
                        hour: "2-digit",
                        minute: "2-digit",
                    }
                );
                const div = document.createElement("div");
                div.className = `comment-item ${isReply ? "reply-item" : ""}`;
                div.innerHTML = `
                <div class="flex items-start gap-3">
                    <img src="${escAttr(comment.userPhoto || "/images/android-icon.png")}"
                         class="w-8 h-8 rounded-full object-cover border-2 border-purple-400/50 btn-press"
                         onclick="viewProfile('${escAttr(comment.uid)}')">
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-bold text-sm text-purple-300">${esc(comment.username)}</span>
                            <span class="text-[10px] opacity-50">${esc(commentDate)}</span>
                        </div>
                        <p class="text-sm opacity-90 mb-2">${formatCommentText(comment.text)}</p>
                        <div class="flex gap-3 text-xs opacity-70">
                            ${
                                !isReply
                                    ? `<button onclick="
                                        if (document.getElementById('post-detail-screen').classList.contains('active')) {
                                            startPostDetailReply('${escAttr(comment.id)}', '${escAttr(comment.username)}');
                                        } else {
                                            startReplyComment('${escAttr(comment.id)}', '${escAttr(comment.username)}');
                                        }
                                    " class="hover:text-purple-400 transition flex items-center gap-1">
                                        <i data-lucide="corner-down-left" class="w-3 h-3"></i> <span>${t("reply")}</span>
                                    </button>`
                                    : ""
                            }
                            ${
                                isOwner
                                    ? `<button onclick="deleteComment('${escAttr(postId)}', '${escAttr(comment.id)}')"
                                class="hover:text-red-400 transition flex items-center gap-1">
                                <i data-lucide="trash-2" class="w-3 h-3"></i> <span>${t("delete")}</span>
                            </button>`
                                    : ""
                            }
                        </div>
                    </div>
                </div>
            `;
                return div;
            }

function startReplyComment(commentId, username) {
                state.replyingToComment = commentId;
                const indicator = document.getElementById("comment-reply-indicator");
                indicator.classList.remove("hidden");
                document.getElementById("comment-reply-to-name").innerText = username;
                document.getElementById("com-inp").focus();
            }

function cancelCommentReply() {
                state.replyingToComment = null;
                document.getElementById("comment-reply-indicator").classList.add("hidden");
            }

function sendComment() {
                const inp = document.getElementById("com-inp");
                const text = inp.value.trim();
                if (!text || !state.activePostId) return;

                if (!_checkRateLimit('comment', 10, 60000)) {
                    alert(currentLang === 'ar' ? '⚠️ أرسلت تعليقات كثيرة! انتظر قليلاً.' : '⚠️ Too many comments! Please wait.');
                    return;
                }

                if (text.length > 1000) {
                    alert(currentLang === 'ar' ? '❌ التعليق طويل جداً! الحد 1000 حرف.' : '❌ Comment too long! Max 1000 chars.');
                    return;
                }
                const commentData = {
                    uid: state.uid,
                    username: state.data.username,
                    userPhoto: state.data.photo || "",
                    text: text,
                    timestamp: Date.now(),
                    parentId: state.replyingToComment || null,
                };
                db.ref(`comments/${state.activePostId}`)
                    .push(commentData)
                    .then(() => {
                        db.ref(`posts/${state.activePostId}`).once("value", (postSnap) => {
                            const post = postSnap.val();
                            if (post && post.uid !== state.uid) {
                                const notifType = state.replyingToComment ? "REPLY" : "COMMENT";
                                createNotification(
                                    post.uid,
                                    notifType,
                                    state.activePostId,
                                    state.data.username,
                                    state.replyingToComment
                                );
                            }
                        });
                        const mentions = text.match(/@(\w+)/g);
                        if (mentions) {
                            mentions.forEach((mention) => {
                                const username = mention.substring(1);
                                const mentionedUser = Object.values(allUsers).find((u) => u.username === username);
                                if (mentionedUser && mentionedUser.uid !== state.uid) {
                                    createNotification(
                                        mentionedUser.uid,
                                        "MENTION",
                                        state.activePostId,
                                        state.data.username
                                    );
                                }
                            });
                        }
                    });
                inp.value = "";
                cancelCommentReply();
            }

function deleteComment(postId, commentId) {
                confirm(t("commentDelConfirm"), async (result) => {
                    if (result) {

                        const snap = await db.ref(`comments/${postId}/${commentId}`).once('value');
                        if (!snap.exists() || snap.val().uid !== state.uid) {
                            alert('❌ لا يمكنك حذف تعليق شخص آخر');
                            return;
                        }
                        db.ref(`comments/${postId}/${commentId}`).remove();
                    }
                });
            }
            function repostPost(originalPost) {

    const allButtons = document.querySelectorAll(`[data-post-id="${originalPost.id}"] .repost-btn, #post-detail-content .repost-btn[data-post-id="${originalPost.id}"]`);

    db.ref('reposts').orderByChild('originalPostId').equalTo(originalPost.id).once('value', (snap) => {
        let existingRepostId = null;

        snap.forEach(r => {
            if (r.val().repostBy === state.uid) {
                existingRepostId = r.key;
            }
        });

        if (existingRepostId) {
            db.ref(`reposts/${existingRepostId}`).remove().then(() => {

                allButtons.forEach(btn => {
                    if (btn) {
                        btn.classList.remove('text-purple-400');
                        btn.classList.add('opacity-60');
                        btn.querySelector('i')?.classList.remove('fill-purple-400');
                    }
                });
                if (typeof lucide !== 'undefined') lucide.createIcons();
            });
        } else {
            const repostData = {
                originalPostId: originalPost.id,
                originalAuthor: originalPost.username,
                originalAuthorUid: originalPost.uid,
                originalContent: originalPost.content || '',
                originalImage: originalPost.image || null,
                originalTimestamp: originalPost.timestamp,
                repostBy: state.uid,
                repostByName: state.data.username,
                repostByPhoto: state.data.photo || '',
                repostTimestamp: Date.now()
            };

            db.ref('reposts').push(repostData).then(() => {

                allButtons.forEach(btn => {
                    if (btn) {
                        btn.classList.add('text-purple-400');
                        btn.classList.remove('opacity-60');
                        btn.querySelector('i')?.classList.add('fill-purple-400');
                    }
                });
                if (typeof lucide !== 'undefined') lucide.createIcons();

                if (originalPost.uid !== state.uid) {
                    createNotification(
                        originalPost.uid,
                        'REPOST',
                        originalPost.id,
                        state.data.username
                    );
                }
            });
        }
    });
}

            function createPostElement(p) {
    const isOwner = p.uid === state.uid;
    const verifiedBadge = p.email === "yaab61253@gmail.com" ? "" : p.email?.includes("CrimsonCaseFiles") ? "☑️" : "";
    const badge = verifiedBadge;
    const postDate = new Date(p.timestamp).toLocaleDateString(currentLang === "ar" ? "ar-SA" : "en-US");

    const div = document.createElement("div");
    div.className = "post-card-new";
    div.setAttribute("data-post-id", p.id);

    div.setAttribute("data-post-info", JSON.stringify(p));

    div.onclick = (e) => {
        if (!e.target.closest('button') && !e.target.closest('img[onclick]')) {
            openPostDetail(p.id);
        }
    };

    div.innerHTML = `
        <div class="post-card-body">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <img src="${escAttr(p.userPhoto || "/images/android-icon.png")}"
                         style="width:42px;height:42px;border-radius:50%;border:1.5px solid rgba(168,85,247,0.4);object-fit:cover;cursor:pointer;flex-shrink:0;"
                         onclick="event.stopPropagation(); viewProfile('${escAttr(p.uid)}')">
                    <div>
                        <div style="font-weight:700;font-size:0.92rem;color:#E5E7EB;">${esc(p.username)} ${badge}</div>
                        <div style="font-size:0.72rem;color:#6B7280;margin-top:1px;">${esc(postDate)}</div>
                    </div>
                </div>
                <div style="display:flex;gap:4px;">
                    ${!isOwner ? `
                        <button onclick="event.stopPropagation(); reportContent('post','${escAttr(p.id)}')"
                            class="btn-press" style="padding:6px;border-radius:50%;color:rgba(168,85,247,0.5);background:transparent;transition:all 0.2s;"
                            onmouseover="this.style.background='rgba(124,58,237,0.1)';this.style.color='#A855F7'"
                            onmouseout="this.style.background='transparent';this.style.color='rgba(168,85,247,0.5)'">
                            <i data-lucide="flag" class="w-4 h-4"></i>
                        </button>
                    ` : `
                        <button onclick="event.stopPropagation(); deletePost('${escAttr(p.id)}')"
                            class="btn-press" style="padding:6px;border-radius:50%;color:rgba(248,113,113,0.5);background:transparent;transition:all 0.2s;">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    `}
                </div>
            </div>
            <p style="font-size:0.92rem;line-height:1.65;color:#D1D5DB;white-space:pre-wrap;margin-bottom:${p.image || p.video ? '12px' : '0'};">${esc(p.content)}</p>
        </div>
        ${p.video ? `
            <div style="overflow:hidden;background:#000;">
                <video controls playsinline preload="metadata" style="width:100%;max-height:280px;display:block;" onclick="event.stopPropagation()">
                    <source src="${p.video}">
                </video>
            </div>` : p.image ? `
            <img src="${p.image}" style="width:100%;max-height:320px;object-fit:cover;display:block;cursor:pointer;"
                 onclick="event.stopPropagation(); openImageViewer('${p.image}')">` : ""}
        <div class="post-card-footer">
            <button onclick="event.stopPropagation(); toggleLike('${p.id}')"
                data-post-id="${p.id}"
                class="like-btn pd-action-btn ${p.likes && p.likes[state.uid] ? 'liked' : ''}">
                <i data-lucide="heart" class="w-4 h-4 ${p.likes && p.likes[state.uid] ? 'fill-purple-500 text-purple-500' : ''}"></i>
                <span class="pd-count like-count">${p.likes ? Object.keys(p.likes).length : 0}</span>
            </button>
            <button onclick="event.stopPropagation(); openComments('${p.id}')"
                class="pd-action-btn">
                <i data-lucide="message-circle" class="w-4 h-4"></i>
                <span>${t("comments")}</span>
            </button>
            ${!isOwner ? `
                <button onclick="event.stopPropagation(); repostPost({id:'${p.id}',username:'${p.username}',uid:'${p.uid}',content:\`${(p.content||'').replace(/`/g,'\\`').replace(/\$/g,'\\$')}\`,image:'${p.image||''}',timestamp:${p.timestamp}})"
                    data-post-id="${p.id}" class="repost-btn pd-action-btn">
                    <i data-lucide="repeat-2" class="w-4 h-4"></i>
                    <span>${t("repost")}</span>
                </button>
            ` : ''}
            <button onclick="event.stopPropagation(); sharePost('${escAttr(p.id)}',\`${(p.content||'').substring(0,100).replace(/`/g,'\\`').replace(/\$/g,'\\$')}\`)"
                class="share-btn pd-action-btn" style="margin-right:auto;">
                <i data-lucide="share-2" class="w-4 h-4"></i>

            </button>
        </div>
    `;

    setTimeout(initializeLucide, 0);
    db.ref('reposts').orderByChild('originalPostId').equalTo(p.id).once('value', (snap) => {
    snap.forEach(r => {
        if (r.val().repostBy === state.uid) {
            const btn = div.querySelector('.repost-btn');
            if (btn) {
                btn.classList.add('text-purple-400');
                btn.classList.remove('opacity-60');
                const icon = btn.querySelector('i');
                if (icon) icon.classList.add('fill-purple-400');
            }
        }
    });
});
    return div;
}

function renderPosts(containerId, filterUid = null, loadMore = false) {
if (isLoadingPosts && loadMore) return Promise.resolve();

const container = document.getElementById(containerId);
if (!container) return Promise.resolve();

if (!loadMore) {
container.innerHTML = "";
allLoadedPostsIds.clear();
currentPage = 1;
hasMorePosts = true;
}

isLoadingPosts = true;

if (loadMore) {
showLoadingSpinner(container);
}

let query = db.ref("posts").orderByChild("timestamp");

if (loadMore && lastPostTimestamp) {
    query = query.endBefore(lastPostTimestamp);
}

query = query.limitToLast(postsPerPage);

const authReady = new Promise(resolve => {
    if (auth.currentUser) return resolve(auth.currentUser);
    const unsub = auth.onAuthStateChanged(u => { unsub(); resolve(u); });
});

return authReady.then(user => {
    if (!user) { isLoadingPosts = false; return Promise.resolve(null); }
    return query.once("value");
}).then((snap) => {
    if (!snap) return;
let posts = [];
snap.forEach((c) => {
const post = {
id: c.key,
...c.val(),
};
if (!filterUid || post.uid === filterUid) {
posts.push(post);
}
});

posts.reverse();

const newPosts = posts.filter(p => !allLoadedPostsIds.has(p.id));

if (newPosts.length > 0) {
const fragment = document.createDocumentFragment();
newPosts.forEach((p) => {
allLoadedPostsIds.add(p.id);
fragment.appendChild(createPostElement(p));
});
container.appendChild(fragment);

if (newPosts.length > 0) {
    lastPostTimestamp = newPosts[newPosts.length - 1].timestamp;
}
}

if (loadMore && posts.length < postsPerPage) {
hasMorePosts = false;
showEndOfPostsMessage(container);
}

if (posts.length === 0 && !loadMore) {
container.innerHTML = `<p class="text-center opacity-60 mt-8 text-lg p-5 ">${t("noPosts")}</p>`;
}

hideLoadingSpinner(container);
isLoadingPosts = false;
})
.catch((error) => {
console.error("خطأ في التحميل:", error);
showErrorMessage(container);
hideLoadingSpinner(container);
isLoadingPosts = false;
});
}

function loadPosts(loadMore = false) {

if (isLoadingPosts || !hasMorePosts) return Promise.resolve();

const promise = renderPosts("feed-container", null, loadMore);
if (loadMore) {
currentPage++;
}
return promise;
}

function refreshFeed() {
currentPage = 1;
hasMorePosts = true;
lastPostTimestamp = null;
allLoadedPostsIds.clear();
document.getElementById("feed-container").innerHTML = "";
loadPosts(false);
}

function showLoadingSpinner(container) {
    if (!container) container = document.getElementById("feed-container");

    if (document.getElementById('loading-spinner')) return;

    const spinner = document.createElement('div');
    spinner.id = 'loading-spinner';
    spinner.className = 'flex justify-center py-6';
    spinner.innerHTML = `
        <div class="w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
    `;
    container.appendChild(spinner);
}

function hideLoadingSpinner(container) {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.remove();
}

function showEndOfPostsMessage(container) {
if (!container) container = document.getElementById("feed-container");

if (document.getElementById('end-message')) return;

const endMsg = document.createElement('div');
endMsg.id = 'end-message';
endMsg.className = 'text-center py-6 opacity-60 text-sm';
endMsg.innerHTML = `
<i data-lucide="check-circle" class="w-6 h-6 mx-auto mb-2"></i>
<p data-i18n="endOfPosts"></p>
`;
container.appendChild(endMsg);

if (typeof lucide !== 'undefined') lucide.createIcons();

if (typeof applyTranslations === 'function') {
applyTranslations();
} else if (typeof t === 'function') {
endMsg.querySelector('[data-i18n="endOfPosts"]').textContent = t('endOfPosts');
}
}

function showErrorMessage(container) {
    if (!container) container = document.getElementById("feed-container");

    const errorMsg = document.createElement('div');
    errorMsg.className = ' p-6 rounded-2xl text-center my-4';
    errorMsg.innerHTML = `
        <i data-lucide="alert-circle" class="w-12 h-12 mx-auto mb-3 text-red-400"></i>
        <p class="mb-4 opacity-80" data-i18n="loadError">حدث خطأ في التحميل</p>
        <button onclick="refreshFeed()" class="bg-purple-600 px-6 py-2 rounded-xl">
            <span data-i18n="retry">إعادة المحاولة</span>
        </button>
    `;
    container.appendChild(errorMsg);

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function publishPost() {
                const txt = document.getElementById("post-txt").value;
                const file = document.getElementById("post-file").files[0];
                if (!txt && !file) {
                    alert(t("mustWriteContent"));
                    return;
                }

                if (!_checkRateLimit('post', 5, 60000)) {
                    alert(currentLang === 'ar' ? '⚠️ أرسلت منشورات كثيرة! انتظر قليلاً.' : '⚠️ Too many posts! Please wait.');
                    return;
                }

                if (txt && txt.length > 5000) {
                    alert(currentLang === 'ar' ? '❌ النص طويل جداً! الحد الأقصى 5000 حرف.' : '❌ Text too long! Max 5000 chars.');
                    return;
                }
                const MAX_SIZE = 15 * 1024 * 1024;
                if (file && file.size > MAX_SIZE) {
                    alert(currentLang === 'ar' ? '❌ الملف كبير جداً! الحد الأقصى 15MB' : '❌ File too large! Max 15MB');
                    return;
                }
                const send = (mediaData = null, mediaType = null) => {
                    db.ref("posts").push({
                        uid: state.uid,
                        username: state.data.username,
                        userPhoto: state.data.photo || "",
                        content: txt,
                        image: mediaType === 'image' ? mediaData : null,
                        video: null,
                        mediaType: mediaType,
                        timestamp: Date.now(),
                    });
                    document.getElementById("post-txt").value = "";
                    document.getElementById("post-file").value = "";
                    removePostImage();
                    nav("main-screen");
                };
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => send(e.target.result, 'image');
                    reader.readAsDataURL(file);
                } else send();
            }

window.submitReport = function(type, contentId) {
    const reasonEl = document.getElementById('rp-selected-value');
const detailsEl = document.getElementById('report-details');

    if (!reasonEl || !detailsEl) {
        alert('حدث خطأ، حاول مرة أخرى');
        return;
    }

    if (!reasonEl || !reasonEl.value) {
        alert(t('pleasechoose'));
        return;
    }

    let contentInfo = {};

    if (type === 'post') {

        db.ref('posts/' + contentId).once('value', (snap) => {
            if (snap.exists()) {
                const post = snap.val();
                contentInfo = {
                    authorUid: post.uid,
                    authorName: post.username,
                    content: post.content ? post.content.substring(0, 100) : 'منشور بصورة',
                    timestamp: post.timestamp,
                    hasImage: post.image ? true : false
                };
            }

            sendReport();
        });
    } else if (type === 'message') {

        const chatPath = state.activeChatPath;
        db.ref(chatPath + '/' + contentId).once('value', (snap) => {
            if (snap.exists()) {
                const msg = snap.val();
                contentInfo = {
                    senderUid: msg.sender,
                    senderName: msg.senderName,
                    messageText: msg.text ? msg.text.substring(0, 100) : 'رسالة بصورة',
                    timestamp: msg.time,
                    chatPath: chatPath
                };
            }

            sendReport();
        });
    }

    function sendReport() {
        const reportData = {

            type: type,
            contentId: contentId,
            reportedBy: state.uid,
            reporterName: state.data.username,
            reporterEmail: state.data.email || '',
            reason: reasonEl.value,
            details: detailsEl.value.trim() || '',
            timestamp: Date.now(),
            status: 'pending',

            contentInfo: contentInfo,

            directLink: type === 'post' ?
                `posts/${contentId}` :
                `${contentInfo.chatPath}/${contentId}`
        };

        const reportId = 'report_' + Date.now();

        db.ref('reports/' + reportId).set(reportData)
            .then(() => {

                closeReportModal();
            })
            .catch((err) => {
                console.error('❌ خطأ في الحفظ:', err);
                alert('حدث خطأ أثناء الإرسال');
            });
    }
};

async function sharePost(postId, postText) {
    const postUrl = `${window.location.origin}/post/id/${postId}`;
    const shareText = postText ? postText.substring(0, 120) : (currentLang === 'ar' ? 'شاهد هذا المنشور على AA Hub' : 'Check this post on AA Hub');
    const fullShareText = shareText + ' - AA Hub';

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'AA Hub',
                text: fullShareText,
                url: postUrl,
            });
            return;
        } catch (err) {

            if (err.name === 'AbortError') return;

        }
    }

    showShareModal(postId, postUrl, fullShareText);
}

function showShareModal(postId, postUrl, shareText) {
    const encoded = encodeURIComponent(shareText + '\n' + postUrl);
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedText = encodeURIComponent(shareText);

    const platforms = [
        {
            name: t('shareTwitter'),
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
            color: 'bg-black hover:bg-zinc-800',
            url: `https://twitter.com/intent/tweet?text=${encoded}`,
        },
        {
            name: t('shareWhatsapp'),
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
            color: 'bg-purple-600 hover:bg-purple-700',
            url: `https://wa.me/?text=${encoded}`,
        },
        {
            name: t('shareTelegram'),
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
            color: 'bg-sky-500 hover:bg-sky-600',
            url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
        },
        {
            name: t('shareSnapchat'),
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.166.006c.94-.01 3.99.264 5.51 3.264.51 1.01.386 2.72.29 3.99l-.007.1c-.004.06-.006.117-.008.173.21.1.476.163.793.09.307-.068.594-.232.853-.363.078-.04.243-.1.417-.076.174.024.336.14.363.397.022.2-.054.43-.5.67a3.2 3.2 0 01-.54.2c-.336.1-.758.23-.877.55-.07.19-.033.432.113.735 1.003 2.1 2.616 3.56 4.81 4.34l.058.02c.178.064.348.12.498.264.138.13.197.29.21.432a.6.6 0 01-.167.47c-.223.23-.652.377-1.268.474-.375.06-.755.08-1.155.1-.39.02-.808.042-1.25.116-.192.033-.378.1-.537.25-.187.175-.292.42-.36.726l-.056.25c-.098.424-.29.518-.47.55-.12.02-.24-.02-.36-.076-.195-.093-.41-.27-.686-.453-.6-.39-1.307-.56-2.094-.52-.825.038-1.55.27-2.047.633-.11.08-.215.16-.32.23-.28.19-.48.29-.66.26-.15-.03-.29-.12-.38-.48l-.065-.254c-.078-.327-.19-.587-.38-.767-.16-.15-.346-.213-.544-.242-.44-.07-.856-.086-1.247-.107-.398-.02-.78-.04-1.155-.1-.624-.1-1.056-.244-1.278-.477a.596.596 0 01-.158-.474c.013-.15.077-.306.218-.434.152-.144.322-.2.5-.263l.057-.02c2.19-.79 3.806-2.245 4.808-4.344.147-.307.184-.55.112-.74-.118-.316-.54-.443-.873-.544a3.27 3.27 0 01-.54-.204c-.447-.24-.52-.476-.496-.677.027-.256.196-.37.37-.394.174-.024.34.036.418.077.257.13.543.29.847.36.322.077.59.013.8-.09-.003-.054-.006-.11-.01-.168l-.006-.1c-.098-1.27-.22-2.98.29-3.99C8.174.282 11.217.016 12.154.006Z"/></svg>`,
            color: 'bg-yellow-400 hover:bg-yellow-500 text-black',
            url: `https://www.snapchat.com/share?url=${encodedUrl}`,
        },
        {
            name: t('copyLink'),
            icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
            color: 'bg-white/10 hover:bg-white/20 border border-white/20',
            url: null,
            isCopy: true,
        },
    ];

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.75); z-index: 99999;
        display: flex; align-items: flex-end; justify-content: center;
        opacity: 0; transition: opacity 0.3s;
        backdrop-filter: blur(4px);
    `;

    modal.innerHTML = `
        <div id="share-modal-card" style="
            background: var(--bg);
            width: 100%; max-width: 480px;
            border-top-left-radius: 28px; border-top-right-radius: 28px;
            padding: 20px 20px 36px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 -10px 50px rgba(0,0,0,0.5);
            transform: translateY(100%);
            transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        ">
            <!-- مقبض السحب -->
            <div style="width:40px;height:4px;background:rgba(255,255,255,0.2);border-radius:4px;margin:0 auto 18px;"></div>

            <h3 style="font-size:17px;font-weight:700;margin-bottom:18px;text-align:center;opacity:0.9;">
                📤 ${t('sharePost')}
            </h3>

            <!-- رابط المنشور -->
            <div style="
                background: rgba(255,255,255,0.06);
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 14px; padding: 10px 14px;
                margin-bottom: 18px; display:flex; align-items:center; gap:10px;
            ">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;opacity:0.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <span style="font-size:12px;opacity:0.6;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:1;">${postUrl}</span>
            </div>

            <!-- أزرار التطبيقات -->
            <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:18px;">
                ${platforms.filter(p => !p.isCopy).map(p => `
                    <button onclick="${p.url ? `window.open('${p.url}','_blank')` : `copyShareLink('${postUrl}', this.closest('[id]'))`}; event.stopPropagation();"
                        title="${p.name}"
                        style="
                            display:flex; flex-direction:column; align-items:center; gap:6px;
                            padding: 12px 6px; border-radius: 16px;
                            background: rgba(255,255,255,0.06);
                            border: 1px solid rgba(255,255,255,0.1);
                            color: white; cursor:pointer; transition: all 0.2s;
                            font-family: inherit;
                        "
                        onmouseover="this.style.background='rgba(124,58,237,0.2)';this.style.borderColor='rgba(124,58,237,0.5)'"
                        onmouseout="this.style.background='rgba(255,255,255,0.06)';this.style.borderColor='rgba(255,255,255,0.1)'"
                        onmousedown="this.style.transform='scale(0.93)'"
                        onmouseup="this.style.transform='scale(1)'"
                    >
                        ${p.icon}
                        <span style="font-size:10px;opacity:0.8;text-align:center;">${p.name}</span>
                    </button>
                `).join('')}
            </div>

            <!-- أزرار الإجراءات -->
            <div style="display:flex;flex-direction:column;gap:10px;">
                <button id="share-copy-btn" onclick="copyShareLink('${postUrl}', document.getElementById('share-copy-btn'))"
                    style="
                        width:100%; padding:14px; border-radius:16px;
                        background: rgba(124,58,237,0.15);
                        border: 1px solid rgba(124,58,237,0.3);
                        color: #7C3AED; font-weight:700; font-size:15px;
                        cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px;
                        font-family: inherit; transition: all 0.2s;
                    "
                    onmouseover="this.style.background='rgba(124,58,237,0.25)'"
                    onmouseout="this.style.background='rgba(124,58,237,0.15)'"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    ${t('copyLink')}

            </div>
        </div>
    `;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.getElementById('share-modal-card').style.transform = 'translateY(100%)';
            setTimeout(() => modal.remove(), 350);
        }
    });

    document.body.appendChild(modal);

    requestAnimationFrame(() => {
        modal.style.opacity = '1';
        setTimeout(() => {
            document.getElementById('share-modal-card').style.transform = 'translateY(0)';
        }, 10);
    });
}

function copyShareLink(url, btnEl) {
    navigator.clipboard.writeText(url).then(() => {

        if (btnEl) {
            const original = btnEl.innerHTML;
            btnEl.innerHTML = `<span>${t('linkCopied')}</span>`;
            btnEl.style.background = 'rgba(124,58,237,0.35)';
            setTimeout(() => {
                btnEl.innerHTML = original;
                btnEl.style.background = 'rgba(124,58,237,0.15)';
            }, 2000);
        }

        const toast = document.createElement('div');
        toast.textContent = t('linkCopied');
        toast.style.cssText = `
            position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
            background: rgba(124,58,237,0.25);
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            border: 1px solid rgba(124,58,237,0.4);
            color: white; padding: 10px 22px;
            border-radius: 22px; z-index: 999999; font-family: Tajawal, sans-serif;
            font-size: 14px; font-weight: 600;
            box-shadow: 0 4px 24px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.1);
            animation: toastSlide 2s ease-out forwards;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2200);
    }).catch(() => {

        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        const toast = document.createElement('div');
        toast.textContent = t('linkCopied');
        toast.style.cssText = `
            position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
            background: rgba(124,58,237,0.25);
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            border: 1px solid rgba(124,58,237,0.4);
            color: white; padding: 10px 22px;
            border-radius: 22px; z-index: 999999; font-family: Tajawal, sans-serif;
            font-size: 14px; font-weight: 600;
            box-shadow: 0 4px 24px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.1);
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2200);
    });
}

function closeReportModal() {
    const overlay = document.querySelector('.rp-overlay');
    if (!overlay) return;
    overlay.classList.remove('rp-open');
    setTimeout(() => overlay.remove(), 380);
}

function reportContent(type, contentId) {
    if (!state || !state.uid) { alert('يجب تسجيل الدخول للإبلاغ'); return; }
    const isArabic = currentLang === 'ar';

    const reasons = [
        { value:'spam',                 ar:'سبام / إعلانات',      en:'Spam' },
        { value:'harassment',           ar:'تحرش / تنمر',         en:'Harassment' },
        { value:'hate_speech',          ar:'خطاب كراهية',         en:'Hate Speech' },
        { value:'violence',             ar:'عنف / خطر',           en:'Violence' },
        { value:'sexual_content',       ar:'محتوى جنسي',          en:'Adult Content' },
        { value:'child_safety',         ar:'سلامة الأطفال',       en:'Child Safety' },
        { value:'misinformation',       ar:'معلومات مضللة',       en:'Misinformation' },
        { value:'impersonation',        ar:'انتحال شخصية',        en:'Impersonation' },
        { value:'intellectual_property',ar:'حقوق الملكية',        en:'Copyright' },
        { value:'self_harm',            ar:'إيذاء النفس',         en:'Self-Harm' },
        { value:'privacy_violation',    ar:'انتهاك الخصوصية',    en:'Privacy' },
        { value:'illegal_activity',     ar:'نشاط غير قانوني',    en:'Illegal' },
        { value:'other',                ar:'أخرى',                en:'Other' },
    ];

    const titleText = type === 'post'
        ? (isArabic ? '🚩 الإبلاغ عن منشور' : '🚩 Report Post')
        : (isArabic ? '🚩 الإبلاغ عن رسالة' : '🚩 Report Message');

    const overlay = document.createElement('div');
    overlay.className = 'rp-overlay';
    overlay.addEventListener('click', closeReportModal);

    const sheet = document.createElement('div');
    sheet.className = 'rp-sheet';
    sheet.addEventListener('click', e => e.stopPropagation());

    const reasonsHTML = reasons.map(r => `
        <button class="rp-reason-btn" data-value="${r.value}" onclick="(function(el){
            document.querySelectorAll('.rp-reason-btn').forEach(b=>b.classList.remove('rp-selected'));
            el.classList.add('rp-selected');
            document.getElementById('rp-selected-value').value='${r.value}';
        })(this)">
            <span>${isArabic ? r.ar : r.en}</span>
        </button>
    `).join('');

    const submitLbl  = isArabic ? 'إرسال البلاغ'        : 'Submit Report';
    const sendingLbl = isArabic ? 'جاري الإرسال...'  : ' Sending...';
    const cancelLbl  = isArabic ? 'إلغاء'               : 'Cancel';
    const detailsPh  = isArabic ? 'اكتب تفاصيل إضافية تساعدنا على فهم المشكلة...' : 'Add more context...';
    const detailsLbl = isArabic ? 'تفاصيل إضافية (اختياري)' : 'Additional Details (Optional)';
    const noteLbl    = isArabic ? ' سيتم مراجعة البلاغ من فريقنا بسرية تامة' : ' Your report will be reviewed confidentially';

    sheet.innerHTML = `
        <div class="rp-handle"></div>
        <div class="rp-header">
            <div class="rp-title">${titleText}</div>
            <button class="rp-close-btn" onclick="closeReportModal()">✕</button>
        </div>
        <input type="hidden" id="rp-selected-value" value="">
        <div class="rp-reasons">${reasonsHTML}</div>
        <div class="rp-details-area">
            <label class="rp-details-label">${detailsLbl}</label>
            <textarea id="report-details" class="rp-textarea" placeholder="${detailsPh}"></textarea>
        </div>
        <p class="rp-note">${noteLbl}</p>
        <div class="rp-footer">
            <button class="rp-submit" id="rp-submit-btn">${submitLbl}</button>
            <button class="rp-cancel" onclick="closeReportModal()">${cancelLbl}</button>
        </div>
    `;

    overlay.appendChild(sheet);
    document.body.appendChild(overlay);

    sheet.querySelector('#rp-submit-btn').addEventListener('click', function() {
        const reason = document.getElementById('rp-selected-value').value;
        if (!reason) {
            document.querySelectorAll('.rp-reason-btn').forEach(b => {
                b.style.animation = 'none';
                requestAnimationFrame(() => { b.style.animation = 'shake 0.3s ease'; });
                setTimeout(() => b.style.animation = '', 400);
            });
            return;
        }
        this.disabled = true;
        this.textContent = sendingLbl;
        window.submitReport(type, contentId);
    });

    requestAnimationFrame(() => overlay.classList.add('rp-open'));
}
                        function deletePost(id) {
                confirm(t("postDelConfirm"), async (result) => {
                    if (result) {

                        const snap = await db.ref(`posts/${id}`).once('value');
                        if (!snap.exists() || snap.val().uid !== state.uid) {
                            alert('❌ لا يمكنك حذف منشور شخص آخر');
                            return;
                        }
                        db.ref("posts/" + id).remove();
                        db.ref("comments/" + id).remove();
                    }
                });
            }
function animateLike(button, isLiked) {

button.style.animation = 'none';
setTimeout(() => {
button.style.animation = isLiked ? 'likeButton 0.5s ease-out' : 'unlikeButton 0.3s ease-out';
}, 10);

if (isLiked) {
const heart = document.createElement('div');
heart.className = 'heart-burst';
heart.innerHTML = '❤️';

const rect = button.getBoundingClientRect();
heart.style.left = rect.left + rect.width / 2 + 'px';
heart.style.top = rect.top + rect.height / 2 + 'px';
heart.style.position = 'fixed';

document.body.appendChild(heart);

setTimeout(() => heart.remove(), 600);
}
}

function animateRepost(button, isReposted) {

button.style.animation = 'none';
setTimeout(() => {
button.style.animation = 'repostButton 0.6s ease-out';
}, 10);

document.body.appendChild(toast);

setTimeout(() => toast.remove(), 2000);
}

function createRipple(event, button) {
const ripple = document.createElement('span');
ripple.className = 'ripple';

const rect = button.getBoundingClientRect();
const size = Math.max(rect.width, rect.height);
const x = event.clientX - rect.left - size / 2;
const y = event.clientY - rect.top - size / 2;

ripple.style.width = ripple.style.height = size + 'px';
ripple.style.left = x + 'px';
ripple.style.top = y + 'px';

button.style.position = 'relative';
button.style.overflow = 'hidden';
button.appendChild(ripple);

setTimeout(() => ripple.remove(), 600);
}

            function toggleLike(postId) {

const allButtons = document.querySelectorAll(`[data-post-id="${postId}"] .like-btn, #post-detail-content .like-btn[data-post-id="${postId}"]`);

const ref = db.ref(`posts/${postId}/likes/${state.uid}`);

ref.once("value", (snapshot) => {
if (snapshot.exists()) {

ref.remove().then(() => {
allButtons.forEach(btn => {
if (btn) {
const countSpan = btn.querySelector('.like-count');
const currentCount = Math.max(0, (parseInt(countSpan?.textContent) || 0) - 1);
btn.innerHTML = `
<i data-lucide="heart" class="w-5 h-5 text-white/50"></i>
<span class="text-purple-400 font-medium like-count">${currentCount}</span>
`;
}
});
if (typeof lucide !== 'undefined') lucide.createIcons();
});
} else {

ref.set(true).then(() => {
allButtons.forEach(btn => {
if (btn) {
const countSpan = btn.querySelector('.like-count');
const currentCount = (parseInt(countSpan?.textContent) || 0) + 1;
btn.innerHTML = `
<i data-lucide="heart" class="w-5 h-5 fill-purple-500 text-purple-500"></i>
<span class="text-purple-400 font-medium like-count">${currentCount}</span>
`;
}
});
if (typeof lucide !== 'undefined') lucide.createIcons();
});
}
});
}

function openPostDetail(postId) {
    db.ref(`posts/${postId}`).once('value', (snapshot) => {
        const post = snapshot.val();
        if (!post) {
            alert(t('postnotdefind'));
            return;
        }

        post.id = postId;
        const isOwner = post.uid === state.uid;
        const verifiedBadge = post.email === "yaab61253@gmail.com" ? "" : post.email?.includes("CrimsonCaseFiles") ? "☑️" : "";
        const badge = verifiedBadge;
        const postDate = new Date(post.timestamp).toLocaleString(currentLang === "ar" ? "ar-SA" : "en-US");

        const container = document.getElementById('post-detail-content');
        const likeCount = post.likes ? Object.keys(post.likes).length : 0;
        const isLiked   = post.likes && post.likes[state.uid];
        const safeContent = (post.content||'').replace(/`/g,'\`').replace(/\$/g,'\$');
        container.innerHTML = `
            <!-- Hero: author row -->
            <div class="pd-hero">
                <div class="pd-author-row">
                    <img src="${escAttr(post.userPhoto || "/images/android-icon.png")}"
                         class="pd-avatar btn-press"
                         onclick="viewProfile('${escAttr(post.uid)}')">
                    <div style="flex:1;min-width:0;">
                        <div class="pd-author-name">${esc(post.username)} ${badge}</div>
                        <div class="pd-author-date">${esc(postDate)}</div>
                    </div>
                    ${isOwner ? `
                        <button onclick="deletePost('${escAttr(postId)}')"
                            class="btn-press p-2 rounded-full"
                            style="color:rgba(248,113,113,0.7);background:rgba(239,68,68,0.07);">
                            <i data-lucide="trash-2" class="w-5 h-5"></i>
                        </button>
                    ` : `
                        <button onclick="reportContent('post','${escAttr(postId)}')"
                            class="btn-press p-2 rounded-full"
                            style="color:rgba(124,58,237,0.6);background:rgba(124,58,237,0.07);">
                            <i data-lucide="flag" class="w-5 h-5"></i>
                        </button>
                    `}
                </div>
            </div>

            <!-- Post text -->
            <p class="pd-content-text">${esc(post.content)}</p>

            <!-- Media -->
            ${post.video ? `
                <div class="pd-media-wrap">
                    <video controls playsinline preload="metadata" class="pd-media">
                        <source src="${post.video}">
                    </video>
                </div>
            ` : post.image ? `
                <div class="pd-media-wrap">
                    <img src="${post.image}" class="pd-media" onclick="openImageViewer('${post.image}')">
                </div>
            ` : ''}

            <!-- Actions bar -->
            <div class="pd-actions">
                <button onclick="toggleLike('${postId}')" data-post-id="${postId}"
                    class="pd-action-btn like-btn ${isLiked ? 'liked' : ''}">
                    <i data-lucide="heart" class="w-5 h-5 ${isLiked ? 'fill-purple-500 text-purple-500' : ''}"></i>
                    <span class="pd-count like-count">${likeCount}</span>
                </button>

                ${!isOwner ? `
                    <button onclick="repostPost({id:'${postId}',username:'${post.username}',uid:'${post.uid}',content:\`${safeContent}\`,image:'${post.image||''}',timestamp:${post.timestamp}})"
                        data-post-id="${postId}"
                        class="pd-action-btn repost-btn">
                        <i data-lucide="repeat-2" class="w-5 h-5"></i>
                        <span>${t("repost")}</span>
                    </button>
                ` : ''}

                <button onclick="sharePost('${escAttr(postId)}',\`${(post.content||'').substring(0,100).replace(/`/g,'\`').replace(/\$/g,'\$')}\`)"
                    class="pd-action-btn share-btn" style="margin-right:auto;">
                    <i data-lucide="share-2" class="w-5 h-5"></i>
                    <span>${t("sharePost")}</span>
                </button>
            </div>

            <!-- Comments section -->
            <div class="pd-comments-section">
                <div class="pd-comments-header">
                    <i data-lucide="message-circle" class="w-4 h-4" style="color:var(--c-accent);"></i>
                    <span>${t("comments")}</span>
                </div>

                <div id="post-detail-reply-indicator" class="hidden reply-indicator-bar flex items-center justify-between mb-3">
                    <div class="flex flex-col flex-1 min-w-0">
                        <span class="text-xs font-medium" style="color:var(--c-accent);">↩ ${t("replyTo")}:</span>
                        <span id="post-detail-reply-to-name" class="text-xs opacity-70"></span>
                    </div>
                    <button onclick="cancelPostDetailReply()" class="text-white/70 hover:text-white p-1 rounded-full btn-press">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </div>

                <div class="pd-comment-input-row">
                    <input id="post-detail-comment-input" type="text"
                           placeholder="${t("addComment")}"
                           class="pd-comment-input"
                           onkeypress="if(event.key==='Enter') sendPostDetailComment('${postId}')">
                    <button onclick="sendPostDetailComment('${postId}')" class="pd-send-btn btn-press">
                        <i data-lucide="corner-up-left" class="w-5 h-5"></i>
                    </button>
                </div>

                <div id="post-detail-comments"></div>
            </div>
        `;

        if (typeof lucide !== 'undefined') lucide.createIcons();

        loadPostComments(postId);

        db.ref('reposts').orderByChild('originalPostId').equalTo(postId).once('value', (snap) => {
            snap.forEach(r => {
                if (r.val().repostBy === state.uid) {
                    const btn = container.querySelector('.repost-btn');
                    if (btn) {
                        btn.classList.add('text-purple-400');
                        btn.classList.remove('opacity-60');
                        const icon = btn.querySelector('i');
                        if (icon) icon.classList.add('fill-purple-400');
                    }
                }
            });
        });

        window.history.pushState({ postId: postId }, '', '/post/id/' + postId);
    });
}

function closePostDetail() {
    window.history.pushState({}, '', '/');
    nav('main-screen');
}

let postDetailReplyingTo = null;

function startPostDetailReply(commentId, username) {
    postDetailReplyingTo = commentId;
    const indicator = document.getElementById('post-detail-reply-indicator');
    if (indicator) {
        indicator.classList.remove('hidden');
        document.getElementById('post-detail-reply-to-name').innerText = username;
        document.getElementById('post-detail-comment-input').focus();
    }
}

function cancelPostDetailReply() {
    postDetailReplyingTo = null;
    const indicator = document.getElementById('post-detail-reply-indicator');
    if (indicator) {
        indicator.classList.add('hidden');
    }
}

function sendPostDetailComment(postId) {
    const input = document.getElementById('post-detail-comment-input');
    const text = input.value.trim();

    if (!text) return;

    const commentData = {
        uid: state.uid,
        username: state.data.username,
        userPhoto: state.data.photo || "",
        text: text,
        timestamp: Date.now(),
        parentId: postDetailReplyingTo || null,
    };

    db.ref(`comments/${postId}`).push(commentData).then(() => {
        db.ref(`posts/${postId}`).once("value", (postSnap) => {
            const post = postSnap.val();
            if (post && post.uid !== state.uid) {
                const notifType = postDetailReplyingTo ? "REPLY" : "COMMENT";
                createNotification(
                    post.uid,
                    notifType,
                    postId,
                    state.data.username,
                    postDetailReplyingTo
                );
            }
        });

        const mentions = text.match(/@(\w+)/g);
        if (mentions) {
            mentions.forEach((mention) => {
                const username = mention.substring(1);
                const mentionedUser = Object.values(allUsers).find((u) => u.username === username);
                if (mentionedUser && mentionedUser.uid !== state.uid) {
                    createNotification(
                        mentionedUser.uid,
                        "MENTION",
                        postId,
                        state.data.username
                    );
                }
            });
        }
    });

    input.value = "";
    cancelPostDetailReply();
}

function loadPostComments(postId) {
    const container = document.getElementById('post-detail-comments');
    container.innerHTML = `<div class="text-center text-purple-400 p-4">${t("loadingComments")}</div>`;

    db.ref(`comments/${postId}`).on("value", (snap) => {
        container.innerHTML = "";
        const comments = [];
        snap.forEach((c) => {
            const comment = { id: c.key, ...c.val() };
            if (!comment.parentId) {
                comments.push(comment);
            }
        });

        if (comments.length === 0) {
            container.innerHTML = `<p class="text-center opacity-60 p-5">${t("beFirstToComment")}</p>`;
            return;
        }

        comments.sort((a, b) => a.timestamp - b.timestamp);
        comments.forEach((comment) => {
            const commentEl = createCommentElement(comment, postId);
            container.appendChild(commentEl);

            snap.forEach((r) => {
                const reply = { id: r.key, ...r.val() };
                if (reply.parentId === comment.id) {
                    const replyEl = createCommentElement(reply, postId, true);
                    container.appendChild(replyEl);
                }
            });
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    });
}

function openImageViewer(imageUrl) {
    const viewer = document.getElementById('image-viewer');
    const img = document.getElementById('image-viewer-img');
    img.src = imageUrl;
    viewer.classList.add('active');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeImageViewer() {
    const viewer = document.getElementById('image-viewer');
    viewer.classList.remove('active');
}

function toggleFollow(tid) {

                if (!_checkRateLimit('follow', 30, 60000)) {
                    alert(currentLang === 'ar' ? '⚠️ نشاط كثير! انتظر قليلاً.' : '⚠️ Too many actions! Please wait.');
                    return;
                }
                if (!tid || typeof tid !== 'string') return;
                const followRef = db.ref(`following/${state.uid}/${tid}`);
                followRef.once("value", (snapshot) => {
                    if (snapshot.exists()) {
                        followRef.remove().then(() => alert(t("unfollowSuccess")));
                    } else {
                        followRef.set(true).then(() => alert(t("followSuccess")));
                    }
                    if (document.getElementById("profile-screen").classList.contains("active") === true) {
                        viewProfile(tid);
                    }
                });
            }

function openMessageOptions(msgId, isOwner, currentText, messageObject) {
    state.activeMessageKey = msgId;
    const modal = document.getElementById("msg-options-modal");
    const menu = document.getElementById("msg-options-menu");
    menu.innerHTML = "";

    if (!isOwner) {
        menu.innerHTML += `
            <button onclick="reportContent('message', '${msgId}')"
                class="flex items-center gap-2 w-full p-3 text-sm rounded-lg hover:bg-red-600/20 text-red-400">
                <i data-lucide="alert-triangle" class="w-4 h-4"></i>
                <span data-i18n="report">${t("report")}</span>
            </button>
        `;
    }

    if (isOwner) {
        menu.innerHTML += `
            <button onclick="deleteMessage()"
                class="flex items-center gap-2 w-full p-3 text-sm rounded-lg hover:bg-red-600/20 text-red-400">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
                <span data-i18n="delete ">${t("delete")}</span>
            </button>
        `;
    }

    modal.style.display = "flex";
    setTimeout(initializeLucide, 0);
}

function startReplyMessage(senderName, text) {
                closeAllModals();
                const inp = document.getElementById("chat-inp");
                document.getElementById("reply-indicator-name").innerText = senderName;
                document.getElementById("reply-indicator-text").innerText =
                    text.substring(0, 50) + (text.length > 50 ? "..." : "");
                document.getElementById("reply-indicator").classList.remove("hidden");
                inp.focus();
                document.getElementById("send-chat-btn").onclick = sendChat;
            }

function cancelReply() {
                state.replyingToMessage = null;
                document.getElementById("reply-indicator").classList.add("hidden");
            }

            let typingTimeout = null;
            let typingInterval = null;

function handleTyping() {
                if (!state.activeChatPath || !state.uid) return;
                const basePath = state.activeChatPath.replace("/messages", "");
                db.ref(`${basePath}/typing/${state.uid}`).set(true);
                clearTimeout(typingTimeout);
                typingTimeout = setTimeout(() => {
                    db.ref(`${basePath}/typing/${state.uid}`).set(false);
                }, 2000);
            }

            function initTypingNodes(basePath, myUid, otherUid) {
                db.ref(`${basePath}/typing/${myUid}`).once("value", snap => {
                    if (!snap.exists()) db.ref(`${basePath}/typing/${myUid}`).set(false);
                });
                db.ref(`${basePath}/typing/${otherUid}`).once("value", snap => {
                    if (!snap.exists()) db.ref(`${basePath}/typing/${otherUid}`).set(false);
                });
            }

            function startTypingListener(basePath) {
                if (typingInterval) clearInterval(typingInterval);

                if (state._typingListenerRef) {
                    state._typingListenerRef.off();
                    state._typingListenerRef = null;
                }
                state.activeBasePath = basePath;

                const typingRef = db.ref(`${basePath}/typing`);
                state._typingListenerRef = typingRef;

                typingRef.on("value", (snap) => {
                    const data = snap.val() || {};
                    const someoneTyping = Object.entries(data).some(
                        ([uid, val]) => uid !== state.uid && val === true
                    );
                    const indicator = document.getElementById("typing-indicator");
                    if (!indicator) return;
                    indicator.style.display = someoneTyping ? "flex" : "none";
                    if (someoneTyping) {
                        const box = document.getElementById("chat-box");
                        if (box) box.scrollTop = box.scrollHeight;
                    }
                });
            }

            function deleteMessage() {
                const msgKey = state.activeMessageKey;
                const chatPath = state.activeChatPath;
                if (!msgKey || !chatPath) return;
                confirm(t("messageDelConfirm"), (result) => {
                    if (result) {
                        db.ref(`${chatPath}/${msgKey}`)
                            .remove()
                            .then(() => closeAllModals())
                            .catch((e) => console.error("فشل حذف الرسالة:", e));
                    } else {
                        closeAllModals();
                    }
                });
            }

            function markChatRead(otherUid, chatPath) {
                if (chatPath.includes("global")) return;
                db.ref(chatPath)
                    .orderByChild("sender")
                    .equalTo(otherUid)
                    .once("value", (snap) => {
                        const updates = {};
                        snap.forEach((message) => {
                            if (!message.val().read) {
                                updates[message.key + "/read"] = true;
                            }
                        });
                        if (Object.keys(updates).length > 0) {
                            db.ref(chatPath)
                                .update(updates)
                                .catch((e) => console.error("فشل تحديث حالة القراءة:", e));
                        }
                    });
            }

            function checkMutualFollow(targetUid, callback) {

                db.ref(`following/${state.uid}/${targetUid}`).once("value", (iFollowThem) => {

                    db.ref(`following/${targetUid}/${state.uid}`).once("value", (theyFollowMe) => {

                        callback(iFollowThem.exists() && theyFollowMe.exists());
                    });
                });
            }

            function openChat(id, name) {
                const isPrivate = id !== "global";

                if (isPrivate && id !== state.uid) {
                    db.ref(`following/${state.uid}/${id}`).once("value", (iFollowThem) => {
                        db.ref(`following/${id}/${state.uid}`).once("value", (theyFollowMe) => {
                            const areMutual = iFollowThem.exists() && theyFollowMe.exists();
                            if (!areMutual) {
                                alert(
                                    currentLang === "ar"
                                        ? "❌ يجب أن تكونوا متابعين لبعضكم البعض للدردشة الخاصة"
                                        : "❌ You must follow each other to start a private chat"
                                );
                                nav("chats-list-screen");
                                return;
                            }

                            proceedToOpenChat(id, name, isPrivate);
                        });
                    });
                } else {
                    proceedToOpenChat(id, name, isPrivate);
                }
            }

            function proceedToOpenChat(id, name, isPrivate) {
                state.activeChatPath = `chats/pvt/${[state.uid, id].sort().join("_")}/messages`;
                document.getElementById("chat-title").innerText = name;
                nav("chat-screen");

                if (isPrivate && id !== "global") {
                    getChatStreak(id, (streak, status) => {
                        const titleEl = document.getElementById("chat-title");
                        if (titleEl) {
                            if (streak >= 1) {
                                titleEl.innerHTML = `${esc(name)} <span class="streak-chat-badge ${status}">🔥${streak}</span>`;
                            } else {
                                titleEl.innerText = name;
                            }
                        }
                    });
                }
                const basePath = `chats/pvt/${[state.uid, id].sort().join("_")}`;
                initTypingNodes(basePath, state.uid, id);
                startTypingListener(basePath);
                if (isPrivate) {
                    markChatRead(id, state.activeChatPath);
                }
                db.ref(state.activeChatPath).on("value", (snap) => {
                    const box = document.getElementById("chat-box");
                    const fragment = document.createDocumentFragment();
                    snap.forEach((m) => {
                        const msg = { id: m.key, ...m.val() };
                        const isMe = msg.sender === state.uid;
                        const msgElement = document.createElement("div");
                        msgElement.className = `flex w-full mb-3 ${isMe ? "justify-end" : "justify-start"}`;
                        msgElement.dataset.msgId = msg.id;
                        msgElement.innerHTML = `
    <div class="message-wrapper"
        onclick="if(!event.target.closest('video,audio,button,a,[onclick]:not(.message-wrapper)'))openMessageOptions('${escAttr(msg.id)}', ${isMe}, '${escAttr(msg.text || "")}', {id: '${escAttr(msg.id)}', senderName: '${escAttr(msg.senderName)}', text: '${escAttr(msg.text || "")}', sender: '${escAttr(msg.sender)}'})">
                            <div class="p-3 rounded-2xl text-sm cursor-pointer relative transition duration-150 ${isMe ? "bg-purple-600/90" : " bg-white/5"}">
                                ${!isMe ? `<div class="text-[10px] opacity-70 mb-1 font-bold">${esc(msg.senderName)}</div>` : ""}
                                ${msg.replyingTo ? `
                                    <div class="reply-preview">
                                        <div class="text-[10px] text-purple-400 font-medium">↩️ ${esc(msg.replyingTo.senderName)}</div>
                                        <div class="text-[10px] opacity-60 truncate">${esc(msg.replyingTo.text)}</div>
                                    </div>` : ""}
                                ${msg.text ? `<div class="message-content">${esc(msg.text)}</div>` : ""}
                                ${renderMsgMedia(msg)}
                                <div class="flex items-center justify-end text-[8px] opacity-50 mt-1 gap-1">
                                    <span>${new Date(msg.time).toLocaleTimeString(currentLang === "ar" ? "ar-SA" : "en-US", { hour: "2-digit", minute: "2-digit" })}</span>
                                    ${isMe && isPrivate ? `<i data-lucide="${msg.read ? "check-check" : "check"}" class="w-3 h-3 ${msg.read ? "text-blue-400" : "text-white/50"}"></i>` : ""}
                                </div>
                            </div>
                        </div>`;
                        fragment.appendChild(msgElement);
                    });
                    box.innerHTML = "";
                    box.appendChild(fragment);
                    box.scrollTop = box.scrollHeight;
                    setTimeout(initializeLucide, 0);
                });
            }

            function proceedToChat(id, name, isPrivate) {
                proceedToOpenChat(id, name, isPrivate);
            }


function openAttachSheet() {
    const sheet = document.getElementById('attach-sheet');
    sheet.style.display = 'flex';
    sheet.style.alignItems = 'flex-end';
    lucide.createIcons();
}

function closeAttachSheet() {
    document.getElementById('attach-sheet').style.display = 'none';
}

function triggerAttach(type) {
    closeAttachSheet();
    if (type === 'image') document.getElementById('chat-file-image').click();
    else if (type === 'video') document.getElementById('chat-file-video').click();
    else document.getElementById('chat-file-doc').click();
}

// When any sub-input changes, pass to main chat-file handler
['chat-file-image','chat-file-video','chat-file-doc'].forEach(id => {
    document.addEventListener('DOMContentLoaded', () => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', function() {
            if (this.files[0]) {
                // Trigger same preview logic by dispatching change on main input
                const dt = new DataTransfer();
                dt.items.add(this.files[0]);
                const mainInput = document.getElementById('chat-file');
                mainInput.files = dt.files;
                mainInput.dispatchEvent(new Event('change'));
            }
        });
    });
});

function sendChat() {
                const inp = document.getElementById("chat-inp");
                const file = document.getElementById("chat-file").files[0];
                const text = inp.value.trim();
                const replyingTo = state.replyingToMessage;
                if (!text && !file) return;

                if (!_checkRateLimit('chat', 20, 60000)) {
                    alert(currentLang === 'ar' ? '⚠️ أرسلت رسائل كثيرة! انتظر قليلاً.' : '⚠️ Too many messages! Please wait.');
                    return;
                }

                if (text && text.length > 2000) {
                    alert(currentLang === 'ar' ? '❌ الرسالة طويلة جداً! الحد 2000 حرف.' : '❌ Message too long! Max 2000 chars.');
                    return;
                }
                const push = (fileData = null, fileType = null, fileName = null, fileSize = null) => {
                    const messageData = {
                        sender: state.uid,
                        senderName: state.data.username,
                        text: text,
                        time: Date.now(),
                    };
                    if (fileData) {
                        messageData.fileData = fileData;
                        messageData.fileType = fileType;
                        messageData.fileName = fileName;
                        messageData.fileSize = fileSize;

                        if (fileType === 'image') messageData.image = fileData;
                    }
                    if (replyingTo) {
                        messageData.replyingTo = {
                            msgId: replyingTo.id,
                            senderName: replyingTo.senderName,
                            text: replyingTo.text,
                        };
                    }
                    db.ref(state.activeChatPath)
                        .push(messageData)
                        .then(() => {
                            if (state.activeChatPath.includes("pvt")) {
                                const chatMembers = state.activeChatPath.split("/").slice(-2)[0].split("_");
                                const recipientUid = chatMembers.find((id) => id !== state.uid);
                                if (recipientUid) {
                                    createNotification(recipientUid, "CHAT", state.activeChatPath, state.data.username);
                                    updateChatStreak(recipientUid).then(() => refreshStreakBadge(recipientUid));
                                }
                            }
                        });
                    inp.value = "";
                    document.getElementById("chat-file").value = "";
                    if (state.activeChatPath) {
                        const basePath = state.activeChatPath.replace("/messages", "");
                        db.ref(`${basePath}/typing/${state.uid}`).set(false);
                        clearTimeout(typingTimeout);
                    }
                    removeChatImage();
                    cancelReply();
                    inp.style.height = "auto";
inp.focus();
                };
                if (file) {
                    const MAX_SIZE = 15 * 1024 * 1024;
                    if (file.size > MAX_SIZE) {
                        alert(currentLang === 'ar' ? '❌ الملف كبير جداً! الحد الأقصى 15MB' : '❌ File too large! Max 15MB');
                        return;
                    }
                    const fType = file.type.startsWith('image/') ? 'image' : 'file';
                    const fSize = file.size < 1024 * 1024
                        ? (file.size / 1024).toFixed(1) + ' KB'
                        : (file.size / (1024 * 1024)).toFixed(1) + ' MB';
                    const r = new FileReader();
                    r.onload = (e) => push(e.target.result, fType, file.name, fSize);
                    r.readAsDataURL(file);
                } else push();
            }

            function refreshStreakBadge(otherUid) {
                if (!state.uid || !otherUid) return;
                const chatKey = [state.uid, otherUid].sort().join("_");
                const today = new Date().toDateString();
                const yesterday = new Date(Date.now() - 86400000).toDateString();

                db.ref("chatStreaks/" + chatKey).once("value", snap => {
                    const sd = snap.val() || {};
                    const streak = sd.streak || 0;
                    if (streak < 1) return;

                    const atRisk = sd.status === "warning";

                    const container = document.getElementById("chat-list-items");
                    if (!container) return;
                    container.querySelectorAll("[onclick]").forEach(el => {
                        if (el.getAttribute("onclick") && el.getAttribute("onclick").includes(otherUid)) {
                            let badge = el.querySelector(".streak-chat-badge");
                            if (!badge) {
                                badge = document.createElement("span");
                                badge.className = "streak-chat-badge";
                                const nameEl = el.querySelector(".text-purple-300");
                                if (nameEl) {
                                    const row = nameEl.parentNode;
                                    row.style.cssText = "display:flex;align-items:center;justify-content:space-between;width:100%";
                                    nameEl.style.flex = "1";
                                    row.appendChild(badge);
                                }
                            }
                            badge.textContent = "🔥" + streak;
                            badge.className = `streak-chat-badge ${atRisk ? 'warning' : 'active'}`;
                            badge.style.cssText = "display:inline-flex;align-items:center;font-size:11px;border-radius:20px;padding:2px 8px;font-weight:800;border:1px solid;flex-shrink:0";
                        }
                    });
                });
            }

            async function updateChatStreak(otherUid) {
    if (!state.uid || !otherUid || otherUid === "global") return;

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const key = [state.uid, otherUid].sort().join("_");
    const ref = db.ref("chatStreaks/" + key);
    const snap = await ref.once("value");
    const data = snap.val() || {};

    const myKey = "last_" + state.uid;
    const myLast = data[myKey] || "";
    const otherLast = data["last_" + otherUid] || "";

    if (myLast === today) return;

    let streak = data.streak || 0;

    const otherSentToday = otherLast === today;
    const otherIsGone = otherLast !== today && otherLast !== yesterday;

    if (otherIsGone && streak > 0) {

        streak = 0;
    } else if (otherSentToday) {

        streak = streak + 1;
    }

    const status = otherSentToday ? "active" : "warning";
    const update = { streak, status };
    update[myKey] = today;
    await ref.update(update);

    refreshStreakBadge(otherUid);
}

function getChatStreak(otherUid, callback) {
    if (!state.uid || !otherUid || otherUid === "global") return callback(0, "active");
    const key = [state.uid, otherUid].sort().join("_");
    db.ref("chatStreaks/" + key).once("value", snap => {
        const data = snap.val() || {};
        callback(data.streak || 0, data.status || "active");
    });
}

function updateOnlineDotsOnly() {
    const container = document.getElementById("chat-list-items");
    if (!container) return;
    Object.keys(onlineUsers).forEach(uid => {
        const dot = container.querySelector(`[data-online-uid="${uid}"]`);
        if (dot) {
            dot.style.display = onlineUsers[uid]?.online ? "block" : "none";
        }
    });
}

function loadChatList() {
    const container = document.getElementById("chat-list-items");
    container.innerHTML = `<div class="text-center text-purple-400 p-4">${t("loadingchat")}</div>`;

    let mutualFollowersCount = 0;
    const totalUsers = Object.values(allUsers).filter((u) => u.uid !== state.uid).length;
    let checkedUsers = 0;
    Object.values(allUsers)
        .filter((u) => u.uid !== state.uid)
        .forEach((user) => {

            db.ref(`following/${state.uid}/${user.uid}`).once("value", (iFollowThem) => {
                db.ref(`following/${user.uid}/${state.uid}`).once("value", (theyFollowMe) => {
                    checkedUsers++;
                    const areMutual = iFollowThem.exists() && theyFollowMe.exists();

                    if (areMutual) {
                        mutualFollowersCount++;

                        if (mutualFollowersCount === 1) {
                            container.innerHTML = "";
                        }
                        const presence = onlineUsers[user.uid];
                        const isOnline = presence?.isOnline === true;
                        const lastSeen = presence?.lastSeen ?
                            new Date(presence.lastSeen).toLocaleString(
                                currentLang === "ar" ? "ar-SA" : "en-US"
                            ) :
                            t("unavailable");
                        const statusHtml = isOnline ?
                            `<span class="text-sm font-medium text-purple-400">${t("online")}</span>` :
                            `<span class="text-xs opacity-60">${t("lastSeen")}: ${lastSeen}</span>`;
                        const privateChatEl = document.createElement("div");
                        privateChatEl.className =
                            " p-4 rounded-xl mb-3 flex items-center gap-3 btn-press cursor-pointer hover:bg-white/10 border border-white/5 relative";
                        privateChatEl.setAttribute(
                            "onclick",
                            `openChat('${escAttr(user.uid)}', '${escAttr(user.username)}')`
                        );

                        (function(el, uid, sHtml, online) {
                            const chatKey = [state.uid, uid].sort().join("_");
                            db.ref("chatStreaks/" + chatKey).once("value", sd_snap => {
                                const sd = sd_snap.val() || {};
                                const streak = sd.streak || 0;
                                const atRisk = sd.status === "warning";
                                const streakBadge = streak >= 1
                                    ? `<span class="streak-chat-badge ${atRisk ? 'warning' : 'active'}" data-chat-key="${chatKey}" style="display:inline-flex;align-items:center;font-size:11px;border-radius:20px;padding:2px 8px;font-weight:800;border:1px solid;flex-shrink:0;">🔥${streak}</span>`
                                    : `<span class="streak-chat-badge" data-chat-key="${chatKey}" style="display:none"></span>`;
                                el.innerHTML = `
                                                <div class="relative">
                                                    <img src="${user.photo || "/images/android-icon.png"}" class="w-12 h-12 rounded-full object-cover border-2 border-purple-400/50">
                                                    ${online ? '<span class="absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-[color:var(--card)]"></span>' : ""}
                                                </div>
                                                <div class="flex flex-col flex-1 min-w-0">
                                                    <div class="flex items-center gap-2">
                                                        <span class="font-bold text-purple-300 truncate">${esc(user.username)}</span>
                                                        ${streakBadge}
                                                    </div>
                                                    ${sHtml}
                                                </div>
                                            `;
                                container.appendChild(el);
                                setTimeout(initializeLucide, 0);
                            });
                        })(privateChatEl, user.uid, statusHtml, isOnline);
                    }

                    if (checkedUsers === totalUsers && mutualFollowersCount === 0) {
                        container.innerHTML = `<p class="text-center opacity-60 mt-8 text-lg p-5 ">${currentLang === "ar" ? "لا توجد محادثات متاحة. تابع مستخدمين ليتابعوك!" : "No chats available. Follow users to chat!"}</p>`;
                    }
                });
            });
        });
}

function signUp() {
                const name = document.getElementById("signup-name").value;
                const email = document.getElementById("signup-em").value;
                const password = document.getElementById("signup-ps").value;
                const errorEl = document.getElementById("signup-error");
                if (!name || !email || !password) {
                    errorEl.innerText = t("fillAllFields");
                    return;
                }
                auth.createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        db.ref("users/" + user.uid).set({
                            username: name,
                            email: email,
                            photo: "",
                            bio: t("newUser"),
                            language: currentLang,
                        });
                        errorEl.innerText = "";
                    })
                    .catch((error) => {
                        let errorMessage = t("errorOccurred");
                        if (error.code === "auth/email-already-in-use") {
                            errorMessage = t("emailInUse");
                        } else if (error.code === "auth/invalid-email") {
                            errorMessage = t("invalidEmail");
                        } else if (error.code === "auth/weak-password") {
                            errorMessage = t("weakPassword");
                        }
                        errorEl.innerText = errorMessage;
                    });
            }

            function adjustTextareaHeight() {
    const textarea = document.getElementById("chat-inp");
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 150) + "px";
}
if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", () => {
        const vv = window.visualViewport;
        
        const chatScreen = document.getElementById("chat-screen");
        if (chatScreen && chatScreen.classList.contains("active")) {
            chatScreen.style.height = vv.height + "px";
            chatScreen.style.top = vv.offsetTop + "px";
            const box = document.getElementById("chat-box");
            if (box) setTimeout(() => box.scrollTop = box.scrollHeight, 50);
        }
        
        const aiScreen = document.getElementById("ai-assistant-screen");
        if (aiScreen && aiScreen.classList.contains("active")) {
            aiScreen.style.height = vv.height + "px";
            aiScreen.style.top = vv.offsetTop + "px";
            const aiBox = document.getElementById("ai-chat-box");
            if (aiBox) setTimeout(() => aiBox.scrollTop = aiBox.scrollHeight, 50);
        }
    });
}

function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) return 1.0;

    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

function getEditDistance(str1, str2) {
    const costs = [];
    for (let i = 0; i <= str1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= str2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else if (j > 0) {
                let newValue = costs[j - 1];
                if (str1.charAt(i - 1) !== str2.charAt(j - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                }
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[str2.length] = lastValue;
    }
    return costs[str2.length];
}

async function getLastUserPosts() {
    const postsSnap = await db.ref('posts')
        .orderByChild('uid')
        .equalTo(state.uid)
        .once('value');

    if (!postsSnap.exists()) {
        return currentLang === 'ar' ? 'لا توجد منشورات' : 'No posts';
    }

    const posts = [];
    postsSnap.forEach(post => {
        posts.push({
            id: post.key,
            content: post.val().content,
            timestamp: post.val().timestamp
        });
    });

    posts.sort((a, b) => b.timestamp - a.timestamp);

    let postsList = '';
    posts.slice(0, 5).forEach((p, index) => {
        postsList += `\n${index + 1}. ID: ${p.id} | "${p.content.substring(0, 40)}..."`;
    });

    return postsList;
}
let aiChatHistory = [];

async function sendToAI() {
  const input = document.getElementById('ai-input');
  const message = input.value.trim();
  if (!message) return;

  if (!_checkRateLimit('ai', 10, 60000)) {
      alert(currentLang === 'ar' ? '⚠️ أرسلت رسائل كثيرة للمساعد! انتظر قليلاً.' : '⚠️ Too many AI requests! Please wait.');
      return;
  }

  if (message.length > 500) {
      alert(currentLang === 'ar' ? '❌ الرسالة طويلة جداً! الحد 500 حرف.' : '❌ Message too long! Max 500 chars.');
      return;
  }

  if (!auth.currentUser) return;

  addAIMessage(message, true);
  input.value = '';
  input.style.height = 'auto';
input.focus();
  const thinkingDiv = addAIMessage(t('aiThinking'), false, true);

  try {
    const lastPosts = await getLastUserPosts();
const GROQ_API_KEY = await getGroqAPIKey();
if (!GROQ_API_KEY) {
    thinkingDiv.remove();
    addAIMessage('❌ فشل في الاتصال', false);
    return;
}
    const systemMessage = {
      role: "system",
      content:
        "أنت مساعد ذكي لتطبيق AA HUB.\n" +
        "اذا احد سالك عن شركة (NebulaSpectra Studio)او موقعها هذا موقعها nebulaspectrastudio.netlify.app" +
        "دائما اذا كلمك انقليزي خل كل ردودك انقليزي حتى اللي انا مبرمجك عليه عربي حوله لانقليزي اما اذا كان عربي رد عليه دائما  عربي خاصة في اول الرسائل ودائما"+
        "اسمك: NebulaSpectra، الشركة اللي طورتك NebulaSpectra Studio، اللي طوروك هم   عبدالوهاب"+
        "اذا سالك احد عن اسمك قول NebulaSpectra AI "+
        "اذا سالك احد مين طورك قول NebulaSpectra Studio "+
        "اذا احد سالك مين مطورين AA Hub او NebulaSpectra Studio او NebulaSpectra AI قول عبدالوهاب"+
        "- الاسم: " + (state.data.username || "") + "\n" +
        "- البايو: " + (state.data.bio || "لا يوجد") + "\n\n" +
        "📋 منشورات المستخدم الأخيرة:\n" +
        lastPosts + "\n\n" +
        "⚠️ قواعد JSON:\n" +
        "1. رد فقط بـ JSON نظيف\n" +
        "2. سطر واحد فقط\n" +
        "3. استخدم postId الصحيح\n\n" +
        "📝 أمثلة:\n" +
        '{"action":"DELETE_POST","data":{"postId":"ID"},"response":"تم حذف آخر منشور"}\n' +
        '{"action":"CREATE_POST","data":{"content":"الحمد لله"},"response":"تم نشر المنشور"}\n' +
        '{"action":"CHANGE_NAME","data":{"newName":"محمد"},"response":"تم تغيير اسمك"}\n' +
        '{"action":"CHANGE_BIO","data":{"newBio":"مبرمج"},"response":"تم تحديث البايو"}\n' +
        '{"action":"CHANGE_PHOTO","response":"جاري فتح معرض الصور..."}\n' +
        '{"action":"SEND_MESSAGE","data":{"targetUsername":"أحمد","message":"مرحبا"},"response":"تم إرسال الرسالة"}\n' +
        '{"action":"CHAT","response":"إجابتك هنا"}'
    };

const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          systemMessage,
          ...aiChatHistory,
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    thinkingDiv.remove();

    try {
      const parsed = JSON.parse(aiResponse);
      await executeAIAction(parsed);
      addAIMessage(parsed.response, false);
    } catch {
      addAIMessage(aiResponse, false);
    }

    aiChatHistory.push(
      { role: 'user', content: message },
      { role: 'assistant', content: aiResponse }
    );

    if (aiChatHistory.length > 20) {
      aiChatHistory = aiChatHistory.slice(-20);
    }

  } catch (error) {
    thinkingDiv.remove();
    addAIMessage(t("aistop"), false);
    console.error(error);
  }
}

function addAIMessage(text, isUser, isThinking = false) {
const box = document.getElementById('ai-chat-box');
const div = document.createElement('div');
div.className = `flex ${isUser ? 'justify-end' : 'justify-start'}`;

div.innerHTML = `
<div class=" p-3 rounded-2xl max-w-[80%] ${isUser ? 'bg-purple-600/90' : 'border border-purple-500/30'} ${isThinking ? 'animate-pulse' : ''}">
    ${!isUser ? '<div class="text-xs opacity-70 mb-1 font-bold text-purple-400">NebulaSpectra AI</div>' : ''}
    <p class="text-sm whitespace-pre-wrap">${esc(text)}</p>
</div>
`;

box.appendChild(div);
box.scrollTop = box.scrollHeight;
setTimeout(initializeLucide, 0);
return div;
}

async function executeAIAction(parsed) {
    const { action, data } = parsed;

    if (!auth.currentUser || auth.currentUser.uid !== state.uid) {
        console.error('❌ غير مصرح');
        return false;
    }

    const ALLOWED_ACTIONS = ['CHANGE_NAME','CHANGE_PHOTO','CHANGE_BIO','SEND_MESSAGE','CREATE_POST','DELETE_POST','CHAT'];
    if (!ALLOWED_ACTIONS.includes(action)) {
        console.error('❌ action غير مسموح:', action);
        return false;
    }

    try {
        switch (action) {
            case 'CHANGE_NAME':
                if (!data || !data.newName) {
                    console.error(`❌ newName ${t('aiDataMissing')}`);
                    return false;
                }

                if (typeof data.newName !== 'string' || data.newName.trim().length < 2 || data.newName.trim().length > 30) {
                    return false;
                }

                await db.ref(`users/${state.uid}`).update({ username: data.newName.trim() });

                const postsSnap = await db.ref('posts').orderByChild('uid').equalTo(state.uid).once('value');
                const updates = {};
                postsSnap.forEach(post => {
                    updates[`posts/${post.key}/username`] = data.newName;
                });
                if (Object.keys(updates).length > 0) {
                    await db.ref().update(updates);
                }
                return true;

            case 'CHANGE_PHOTO':

                const photoInput = document.createElement('input');
                photoInput.type = 'file';
                photoInput.accept = 'image/*';
                photoInput.style.display = 'none';

                photoInput.onchange = async function(e) {
                    const file = e.target.files[0];
                    if (!file) {
                        addAIMessage(t('aiPhotoNotSelected'), false);
                        return;
                    }

                    const uploadingMsg = addAIMessage(t('aiPhotoUploading'), false, true);

                    try {
                        const reader = new FileReader();
                        reader.onload = async function(event) {
                            const photoData = event.target.result;

                            await db.ref(`users/${state.uid}`).update({
                                photo: photoData
                            });

                            const postsSnap = await db.ref('posts')
                                .orderByChild('uid')
                                .equalTo(state.uid)
                                .once('value');

                            const updates = {};
                            postsSnap.forEach(post => {
                                updates[`posts/${post.key}/userPhoto`] = photoData;
                            });

                            if (Object.keys(updates).length > 0) {
                                await db.ref().update(updates);
                            }

                            uploadingMsg.remove();
                            addAIMessage(t('aiPhotoChanged'), false);

                            setTimeout(() => {
                                const imgPreview = document.createElement('div');
                                imgPreview.className = 'flex justify-start';
                                imgPreview.innerHTML = `
                                    <div class=" p-3 rounded-2xl max-w-[80%] border border-purple-500/30">
                                        <div class="text-xs opacity-70 mb-2 font-bold text-purple-400">${t('aiPhotoPreview')}</div>
                                        <img src="${photoData}" class="rounded-xl max-w-full max-h-60 object-cover border-2 border-purple-400">
                                        <div class="text-xs opacity-60 mt-2">${t('aiPhotoTip')}</div>
                                    </div>
                                `;
                                document.getElementById('ai-chat-box').appendChild(imgPreview);
                                document.getElementById('ai-chat-box').scrollTop = document.getElementById('ai-chat-box').scrollHeight;
                            }, 500);

                        };

                        reader.onerror = function() {
                            uploadingMsg.remove();
                            addAIMessage(t('aiPhotoError'), false);
                        };

                        reader.readAsDataURL(file);

                    } catch (error) {
                        uploadingMsg.remove();
                        addAIMessage(`${t('aiPhotoFailed')} ${error.message}`, false);
                        console.error('Photo upload error:', error);
                    }

                    document.body.removeChild(photoInput);
                };

                document.body.appendChild(photoInput);
                photoInput.click();

                return true;

            case 'CHANGE_BIO':
                if (!data || !data.newBio) {
                    console.error(`❌ newBio ${t('aiDataMissing')}`);
                    return false;
                }

                await db.ref(`users/${state.uid}`).update({ bio: data.newBio });
                return true;

            case 'SEND_MESSAGE':
                if (!data || !data.targetUsername || !data.message) {
                    console.error(`❌ targetUsername أو message ${t('aiDataMissing')}`);
                    return false;
                }

                const searchName = data.targetUsername.toLowerCase().trim();

                let targetUser = null;

                targetUser = Object.values(allUsers).find(u =>
                    u.username.toLowerCase().trim() === searchName
                );

                if (!targetUser) {
                    targetUser = Object.values(allUsers).find(u =>
                        u.username.toLowerCase().includes(searchName)
                    );
                }

                if (!targetUser) {
                    targetUser = Object.values(allUsers).find(u =>
                        u.username.toLowerCase().startsWith(searchName)
                    );
                }

                if (!targetUser) {
                    targetUser = Object.values(allUsers).find(u =>
                        searchName.includes(u.username.toLowerCase())
                    );
                }

                if (!targetUser) {
                    const similarUsers = Object.values(allUsers)
                        .filter(u => u.uid !== state.uid)
                        .map(u => ({
                            user: u,
                            similarity: calculateSimilarity(searchName, u.username.toLowerCase())
                        }))
                        .filter(item => item.similarity > 0.5)
                        .sort((a, b) => b.similarity - a.similarity);

                    if (similarUsers.length > 0) {
                        targetUser = similarUsers[0].user;
                    }
                }

                if (!targetUser) {
                    console.error('❌ لم يتم العثور على أي مستخدم مشابه');

                    const suggestions = Object.values(allUsers)
                        .filter(u => u.uid !== state.uid)
                        .slice(0, 5)
                        .map(u => u.username)
                        .join('، ');

                    addAIMessage(`${t('aiUserNotFound')} "${data.targetUsername}"\n\n${t('aiUserSuggestion')}\n${suggestions}`, false);
                    return false;
                }

                const iFollow = await db.ref(`following/${state.uid}/${targetUser.uid}`).once('value');
                const theyFollow = await db.ref(`following/${targetUser.uid}/${state.uid}`).once('value');

                if (!iFollow.exists() || !theyFollow.exists()) {
                    addAIMessage(`${t('aiMutualFollowRequired')} ${targetUser.username}.\n\n${t('aiMutualFollowTip')}`, false);
                    return false;
                }

                const chatPath = `chats/pvt/${[state.uid, targetUser.uid].sort().join('_')}/messages`;
                await db.ref(chatPath).push({
                    sender: state.uid,
                    senderName: state.data.username,
                    text: data.message,
                    time: Date.now(),
                    read: false
                });

                createNotification(targetUser.uid, 'CHAT', chatPath, state.data.username);

                if (targetUser.username.toLowerCase() !== searchName) {
                    addAIMessage(`${t('aiMessageSentTo')} "${targetUser.username}" ${t('aiMessageCorrected')}`, false);
                }

                return true;

            case 'CREATE_POST':
                if (!data || !data.content) {
                    console.error(`❌ content ${t('aiDataMissing')}`);
                    addAIMessage(t('aiPostContentRequired'), false);
                    return false;
                }

                await db.ref('posts').push({
                    uid: state.uid,
                    username: state.data.username,
                    userPhoto: state.data.photo || '',
                    content: data.content,
                    image: null,
                    timestamp: Date.now()
                });

                setTimeout(() => {
                    const previewDiv = document.createElement('div');
                    previewDiv.className = 'flex justify-start';
                    previewDiv.innerHTML = `
                        <div class=" p-3 rounded-2xl max-w-[80%] border border-purple-500/30">
                            <div class="text-xs opacity-70 mb-2 font-bold text-purple-400">${t('aiPostPublished')}</div>
                            <div class="text-xs opacity-60 mb-1">${t('aiPostPreview')}</div>
                            <div class="bg-white/5 p-2 rounded-lg border border-white/10">
                                <p class="text-sm">${data.content}</p>
                            </div>
                            <div class="text-xs opacity-60 mt-2">${t('aiPostTip')}</div>
                        </div>
                    `;
                    document.getElementById('ai-chat-box').appendChild(previewDiv);
                    document.getElementById('ai-chat-box').scrollTop = document.getElementById('ai-chat-box').scrollHeight;
                }, 500);

                return true;

            case 'DELETE_POST':
                if (!data || !data.postId) {
                    console.error('❌ postId مفقود في data:', data);
                    addAIMessage(t('aiPostIdMissing'), false);
                    return false;
                }

                const postRef = db.ref(`posts/${data.postId}`);
                const postSnap = await postRef.once('value');

                if (!postSnap.exists()) {
                    console.error('❌ المنشور غير موجود:', data.postId);
                    addAIMessage(t('aiPostNotFound'), false);
                    return false;
                }

                const post = postSnap.val();
                if (post.uid !== state.uid) {
                    addAIMessage(t('aiPostNotYours'), false);
                    return false;
                }

                await postRef.remove();
                await db.ref(`comments/${data.postId}`).remove();

                addAIMessage(`${t('aiPostDeleted')}\n\n"${post.content.substring(0, 50)}..."`, false);

                return true;

            case 'CHANGE_LANGUAGE':

                const newLang = currentLang === 'ar' ? 'en' : 'ar';
                currentLang = newLang;
                localStorage.setItem('lang', newLang);

                await db.ref(`users/${state.uid}`).update({
                    language: newLang
                });

                applyLanguage(newLang);
                document.documentElement.lang = newLang;
                document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
                updateUILanguage();

                const langName = newLang === 'ar' ? t('arabic') : t('english');
                addAIMessage(
                    `${t('aiLanguageChanged')}\n${t('aiCurrentLang')} ${langName}`,
                    false
                );

                return true;

            case 'CHAT':
                return true;

            default:
                console.error(`${t('aiUnknownAction')}:`, action);
                return false;
        }
    } catch (error) {
        console.error('❌ Execute AI Action Error:', error);
        addAIMessage(`${t('aiActionError')} ${error.message}`, false);
        return false;
    }
}

function logout() {

                db.ref().off();

                state = {
                    uid: null,
                    data: null,
                    activeChatPath: null,
                    activePostId: null,
                    activeCommentId: null,
                    activeMessageKey: null,
                    currentScreen: "auth-screen",
                    replyingToMessage: null,
                    replyingToComment: null,
                    searchFilter: "posts",
                };

                allUsers = {};
                onlineUsers = {};
                lastNotificationCount = 0;

                auth.signOut().then(() => {
                    nav("auth-screen");
                });
            }
            document.addEventListener("DOMContentLoaded", () => {
                initializeLucide();
                applyLanguage(currentLang);
            });

function setupInfiniteScroll() {
    const mainScreen = document.getElementById('main-screen');
    if (!mainScreen) return;

    const scrollContainer = mainScreen.querySelector('.overflow-y-auto');
    if (!scrollContainer) return;

    scrollContainer.addEventListener('scroll', function() {
        if (this.scrollTop + this.clientHeight >= this.scrollHeight - 200) {
            if (hasMorePosts && !isLoadingPosts) {
                loadPosts(true);
            }
        }
    });
}

setTimeout(function() {
    setupInfiniteScroll();
    loadPosts(false);
}, 1000);

function goToHome() {

  nav('main-screen');

  const homeBtn = document.getElementById('home-btn');
  if (homeBtn) {
    homeBtn.classList.add('loading');
  }

  refreshFeedWithAnimation();
}

function refreshFeedWithAnimation() {
  currentPage = 1;
  hasMorePosts = true;
  const container = document.getElementById("feed-container");

  if (container) {
    container.style.opacity = '0.5';
    container.style.transition = 'opacity 0.3s';

    setTimeout(() => {
      container.innerHTML = "";
      loadPosts(false);

      setTimeout(() => {
        container.style.opacity = '1';

        const homeBtn = document.getElementById('home-btn');
        if (homeBtn) {
          homeBtn.classList.remove('loading');
          homeBtn.classList.add('completed');

          setTimeout(() => {
            homeBtn.classList.remove('completed');
          }, 600);
        }
      }, 300);
    }, 300);
  }
}

function smartSearch(text, query) {
    if (!text || !query) return false;

    const normalizedText = text.toLowerCase().trim();
    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery.includes(' ')) {
        return normalizedText.includes(normalizedQuery);
    }

    const searchTerms = normalizedQuery.split(' ').filter(term => term.length > 0);
    return searchTerms.some(term => normalizedText.includes(term));
}

function searchInFields(item, query, fields) {
    return fields.some(field => {
        const value = item[field];
        return value && smartSearch(value, query);
    });
}

let currentCommunityId = null;

function showCreateCommunity() {
    document.getElementById('create-community-overlay').classList.add('active');
    setTimeout(initializeLucide, 100);
}

async function createCommunity() {
    const name = document.getElementById('community-name').value.trim();
    const desc = document.getElementById('community-desc').value.trim();
    const imageInput = document.getElementById('community-image');

    if (!name) {
        alert(t('pleaseEnterCommunityName') || 'يرجى إدخال اسم المجتمع');
        return;
    }

    try {
        let imageUrl = '';

        if (imageInput.files && imageInput.files[0]) {
            const file = imageInput.files[0];

            if (file.size > 1 * 1024 * 1024) {
                alert(t('imageTooLarge') || 'الصورة كبيرة جداً! الحجم الأقصى 1MB');
                return;
            }

            imageUrl = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        const communityId = db.ref('communities').push().key;
        const communityData = {
            name: name,
            description: desc || '',
            image: imageUrl,
            createdBy: auth.currentUser.uid,
            createdAt: Date.now(),
            memberCount: 1
        };

        await db.ref(`communities/${communityId}`).set(communityData);
        await db.ref(`communities/${communityId}/admins/${auth.currentUser.uid}`).set(true);
        await db.ref(`communities/${communityId}/members/${auth.currentUser.uid}`).set({
            joinedAt: Date.now(),
            name: state.data.username
        });

        closeAllModals();
        document.getElementById('community-name').value = '';
        document.getElementById('community-desc').value = '';
        document.getElementById('community-image').value = '';

        alert(t('communityCreated') || 'تم إنشاء المجتمع بنجاح!');
        loadCommunities();
    } catch (error) {
        console.error('خطأ في إنشاء المجتمع:', error);
        alert((t('errorCreatingCommunity') || 'حدث خطأ أثناء إنشاء المجتمع') + ': ' + error.message);
    }
}

function showCreateCommunityPost() {
  if (!currentCommunityId) return;

  const modal = document.createElement('div');
  modal.id = 'community-post-modal';
  modal.className = 'modal-overlay active';
  modal.onclick = (e) => {
    if (e.target === modal) closeCommunityPostModal();
  };

  modal.innerHTML = `
        <div class="modal-content" onclick="event.stopPropagation()">
            <header class="p-4 flex items-center justify-between border-b border-white/10 sticky top-0 bg-[color:var(--bg)] rounded-t-[30px] z-10">
                <h2 class="font-bold text-lg">${t('newCommunityPost') || 'منشور جديد للمجتمع'}</h2>
                <button onclick="closeCommunityPostModal()" class="text-2xl btn-press p-2 rounded-full hover:bg-white/10">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </header>
            <div class="p-6 overflow-y-auto" style="max-height: 70vh;">
                <textarea
                    id="community-post-text"
                    placeholder="${t('writeYourPost') || 'اكتب منشورك هنا...'}"
                    class="input-style mb-3 h-32 resize-none w-full"
                    maxlength="500"
                ></textarea>

                <label class="block p-3  rounded-xl mb-4 cursor-pointer text-sm border border-white/10 hover:border-purple-500/50 transition flex items-center justify-center gap-2">
                    <i data-lucide="image-plus" class="w-5 h-5 text-purple-400"></i>
                    <span>${t('addPhoto') || 'إضافة صورة'}</span>
                    <input type="file" id="community-post-image" hidden accept="image/*">
                </label>

                <div id="community-post-image-preview" class="hidden mb-4  p-3 rounded-xl border border-purple-500/20 bg-purple-900/10">
                    <div id="community-preview-media" class="mb-2"></div>
                    <button onclick="removeCommunityPostImage()" class="text-red-400 text-sm hover:text-red-300 flex items-center gap-1 transition">
                        <i data-lucide="trash-2" class="w-4 h-4 inline"></i> <span>${t('removePhoto') || 'إزالة الوسائط'}</span>
                    </button>
                </div>
            </div>

            <div class="p-4 border-t border-white/10 sticky bottom-0 bg-[color:var(--bg)]">
                <button onclick="publishCommunityPost()" id="publish-community-post-btn" class="w-full bg-purple-600 py-3 rounded-xl font-bold btn-press hover:bg-purple-700 flex items-center justify-center gap-2">
                    <i data-lucide="send" class="w-5 h-5"></i>
                    <span>${t('publish') || 'نشر'}</span>
                </button>
            </div>
        </div>
    `;

  document.body.appendChild(modal);
  setTimeout(initializeLucide, 100);

  document.getElementById('community-post-image').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const mediaCont = document.getElementById('community-preview-media');
      const previewBox = document.getElementById('community-post-image-preview');
      const reader = new FileReader();
      reader.onload = function(event) {
        mediaCont.innerHTML = `<img src="${event.target.result}" class="w-full rounded-xl max-h-64 object-cover">`;
        previewBox.classList.remove('hidden');
        setTimeout(initializeLucide, 50);
      };
      reader.readAsDataURL(file);
    }
  });
}
async function publishCommunityPost() {
  const textInput = document.getElementById('community-post-text');
  const imageInput = document.getElementById('community-post-image');

  if (!textInput || !imageInput) {
    alert('خطأ: عناصر النموذج غير موجودة');
    return;
  }

  const text = textInput.value.trim();

  if (!text && !imageInput.files[0]) {
    alert(t('pleaseWriteOrAddImage') || 'يرجى كتابة نص أو إضافة صورة');
    return;
  }

  if (!currentCommunityId) {
    alert(t('communityNotSelected') || 'خطأ: لم يتم تحديد المجتمع');
    return;
  }

  try {
    let imageUrl = '';
    let mediaType = '';

    if (imageInput.files && imageInput.files[0]) {
      const file = imageInput.files[0];

      if (file.size > 15 * 1024 * 1024) {
        alert(currentLang === 'ar' ? '❌ الملف كبير جداً! الحد الأقصى 15MB' : '❌ File too large! Max 15MB');
        return;
      }

      const mediaData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      imageUrl = mediaData;
      mediaType = 'image';
    }

    const postId = db.ref(`communities/${currentCommunityId}/posts`).push().key;
    const postData = {
      text: text,
      image: imageUrl,
      video: '',
      mediaType: mediaType,
      authorUid: auth.currentUser.uid,
      authorName: state.data.username,
      authorPhoto: state.data.photo || '',
      createdAt: Date.now()
    };

    await db.ref(`communities/${currentCommunityId}/posts/${postId}`).set(postData);

    closeCommunityPostModal();
    alert(t('postPublished') || 'تم نشر المنشور بنجاح! 🎉');

    loadCommunityPosts(currentCommunityId);
  } catch (error) {
    console.error('تفاصيل الخطأ:', error);
    alert((t('errorPublishingPost') || 'حدث خطأ أثناء نشر المنشور') + ': ' + error.message);
  }
}

function closeCommunityPostModal() {
  const modal = document.getElementById('community-post-modal');
  if (modal) {
    modal.remove();
  }
}

function removeCommunityPostImage() {
  const previewContainer = document.getElementById('community-post-image-preview');
  if (previewContainer) previewContainer.classList.add('hidden');
  const mediaCont = document.getElementById('community-preview-media');
  if (mediaCont) mediaCont.innerHTML = '';
  const imageInput = document.getElementById('community-post-image');
  if (imageInput) imageInput.value = '';
}

function removePostImage() {
  const previewContainer = document.getElementById('post-image-preview');
  if (previewContainer) previewContainer.classList.add('hidden');
  const mediaContainer = document.getElementById('post-media-container');
  if (mediaContainer) mediaContainer.innerHTML = '';
  const imageInput = document.getElementById('post-file');
  if (imageInput) imageInput.value = '';
}

function removeChatImage() { removeChatFile(); }
function removeChatFile() {
  const previewContainer = document.getElementById('chat-image-preview');
  if (previewContainer) previewContainer.classList.add('hidden');
  const imgEl = document.getElementById('chat-preview-img');
  if (imgEl) { imgEl.src = ''; imgEl.classList.add('hidden'); }
  const fileIconEl = document.getElementById('chat-preview-file-icon');
  if (fileIconEl) fileIconEl.classList.add('hidden');
  const imageInput = document.getElementById('chat-file');
  if (imageInput) imageInput.value = '';
}

function base64ToBlob(dataUrl) {
    const arr  = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const raw  = atob(arr[1]);
    const ab   = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) ab[i] = raw.charCodeAt(i);
    return { blob: new Blob([ab], { type: mime }), mime };
}

function openOrDownloadFile(dataUrl, fileName) {
    if (!dataUrl || !dataUrl.startsWith('data:')) return;
    try {
        const { blob, mime } = base64ToBlob(dataUrl);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName || 'file';
        a.type = mime;
        document.body.appendChild(a);
        a.dispatchEvent(new MouseEvent('click', { bubbles: false, cancelable: true, view: window }));
        setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 5000);
    } catch(e) { console.error('openOrDownloadFile:', e); }
}
function downloadFile(d, f) { openOrDownloadFile(d, f); }

function renderMsgMedia(msg) {
    const src  = msg.fileData || msg.image;
    const type = msg.fileType || (msg.image ? 'image' : null);
    if (!src) return '';

    if (type === 'image') {
        return '<div class="cp-img-wrap mt-2" onclick="event.stopPropagation(); openImageViewer(this.querySelector(\'img\').src)">'
             + '<img src="' + src + '" class="cp-img">'
             + '</div>';
    }

    if (type === 'file' && msg.fileName && /\.(mp3|wav|aac|ogg|m4a|flac)$/i.test(msg.fileName)) {
        const aid = 'au' + Math.random().toString(36).substr(2, 7);
        setTimeout(() => {
            const el = document.getElementById(aid);
            if (!el) return;
            try { const { blob } = base64ToBlob(src); el.src = URL.createObjectURL(blob); }
            catch(e) { el.src = src; }
        }, 80);
        return '<div class="cp-audio-wrap mt-2" onclick="event.stopPropagation()">'
             + '<div class="cp-audio-header"><span class="cp-audio-icon"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></span>'
             + '<span class="cp-audio-name">' + (msg.fileName || 'audio') + '</span></div>'
             + '<audio id="' + aid + '" controls class="cp-audio-el"></audio>'
             + '</div>';
    }

    if (type === 'file') {
        const ext = (msg.fileName || '').split('.').pop().toUpperCase() || 'FILE';
        const colors = {
            PDF:'#f87171', ZIP:'#facc15', RAR:'#facc15',
            DOC:'#60a5fa', DOCX:'#60a5fa',
            XLS:'#4ade80', XLSX:'#4ade80',
            PPT:'#fb923c', PPTX:'#fb923c'
        };
        const clr = colors[ext] || '#7C3AED';
        const fid = 'fd' + Math.random().toString(36).substr(2, 9);
        const safeFileName = (msg.fileName || 'file').replace(/'/g, '').replace(/"/g, '');

        setTimeout(() => {
            const el = document.getElementById(fid);
            if (!el) return;
            el._fdata = src;
            el.addEventListener('click', function(e) {
                e.stopPropagation();
                if (this._fdata) openOrDownloadFile(this._fdata, safeFileName);
            });
        }, 60);

        const fileIcons = {
            PDF: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
            ZIP: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
        };
        const iconPath = fileIcons[ext] || '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>';

        return `
<div id="${fid}" class="cp-file-wrap" style="cursor:pointer">
  <div class="cp-file-icon" style="color:${clr};border-color:${clr}33">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="26" height="26"><path d="${iconPath.replace(/"/g, '&quot;')}"/></svg>
  </div>
  <div class="cp-file-info">
    <div class="cp-file-name">${msg.fileName || 'ملف'}</div>
    <div class="cp-file-meta">${msg.fileSize ? msg.fileSize + ' · ' : ''}${ext}</div>
    <div class="cp-file-action" style="color:${clr}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      ${currentLang === 'ar' ? 'اضغط للتحميل' : 'Tap to download'}
    </div>
  </div>
</div>`;
    }
    return '';
}

document.addEventListener('DOMContentLoaded', function() {

  const postFileInput = document.getElementById('post-file');
  if (postFileInput) {
    postFileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const container = document.getElementById('post-media-container');
      const preview = document.getElementById('post-image-preview');
      if (!container || !preview) return;
      const reader = new FileReader();
      reader.onload = function(event) {
        container.innerHTML = `<img src="${event.target.result}" class="w-full rounded-xl max-h-64 object-cover">`;
        preview.classList.remove('hidden');
        setTimeout(initializeLucide, 50);
      };
      reader.readAsDataURL(file);
    });
  }

  const chatFileInput = document.getElementById('chat-file');
  if (chatFileInput) {
    chatFileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const previewContainer = document.getElementById('chat-image-preview');
      const imgEl = document.getElementById('chat-preview-img');
      const fileIconEl = document.getElementById('chat-preview-file-icon');
      const nameEl = document.getElementById('chat-preview-filename');
      const sizeEl = document.getElementById('chat-preview-filesize');
      const badgeEl = document.getElementById('chat-preview-filetype-badge');
      if (!previewContainer) return;

      imgEl.classList.add('hidden');
      fileIconEl.classList.add('hidden');

      nameEl.textContent = file.name;
      const sizeMB = file.size < 1024*1024 ? (file.size/1024).toFixed(1)+' KB' : (file.size/(1024*1024)).toFixed(1)+' MB';
      sizeEl.textContent = sizeMB;

      const ext = file.name.split('.').pop().toUpperCase();

      if (file.type.startsWith('image/')) {
        if (badgeEl) badgeEl.textContent = t('image') || 'صورة';
        const reader = new FileReader();
        reader.onload = ev => { imgEl.src = ev.target.result; imgEl.classList.remove('hidden'); };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith('audio/')) {
        if (badgeEl) badgeEl.textContent = currentLang==='ar' ? 'صوت' : 'Audio';
        const iconMap = { MP3:'music', WAV:'music', AAC:'music', OGG:'music' };
        fileIconEl.innerHTML = `<i data-lucide="${iconMap[ext]||'music'}" class="w-7 h-7 text-purple-400"></i>`;
        fileIconEl.classList.remove('hidden');
      } else {
        if (badgeEl) badgeEl.textContent = ext || 'FILE';
        const iconMap = { PDF:'file-text', DOC:'file-text', DOCX:'file-text', XLS:'file-spreadsheet', XLSX:'file-spreadsheet', PPT:'file', PPTX:'file', ZIP:'archive', RAR:'archive', TXT:'file', MP4:'video', MOV:'video', AVI:'video', MKV:'video' };
        const colorMap = { PDF:'text-red-400', DOC:'text-blue-400', DOCX:'text-blue-400', XLS:'text-purple-400', XLSX:'text-purple-400', PPT:'text-orange-400', PPTX:'text-orange-400', ZIP:'text-yellow-400', RAR:'text-yellow-400', MP4:'text-purple-400', MOV:'text-purple-400' };
        fileIconEl.innerHTML = `<i data-lucide="${iconMap[ext]||'file'}" class="w-7 h-7 ${colorMap[ext]||'text-purple-400'}"></i>`;
        fileIconEl.classList.remove('hidden');
      }

      previewContainer.classList.remove('hidden');
      setTimeout(initializeLucide, 50);
    });
  }
});

function loadCommunities() {
    const container = document.getElementById('communities-list');
    if (!container) return;

    container.innerHTML = `<p class="text-center opacity-60 py-8" data-i18n="loading">${t('loading') || 'جاري التحميل...'}</p>`;

    db.ref('communities').on('value', (snapshot) => {
        container.innerHTML = '';

        if (!snapshot.exists()) {
            container.innerHTML = `
                <div class="text-center py-12 opacity-60">
                    <i data-lucide="users" class="w-16 h-16 mx-auto mb-3 opacity-40"></i>
                    <p data-i18n="noCommunities">لا توجد مجتمعات بعد</p>
                </div>
            `;
            setTimeout(initializeLucide, 100);
            return;
        }

        const communities = [];
        snapshot.forEach((child) => {
            communities.push({ id: child.key, ...child.val() });
        });

        communities.sort((a, b) => (b.memberCount || 0) - (a.memberCount || 0));

        communities.forEach((community) => {
            const isMember = community.members && community.members[auth.currentUser.uid];

            const card = document.createElement('div');
            card.className = ' p-4 rounded-2xl mb-3 cursor-pointer hover:bg-white/5 transition border border-white/10';
            card.onclick = () => openCommunity(community.id);

            card.innerHTML = `
                <div class="flex items-start gap-3">
                    <img src="${escAttr(community.image || "/images/android-icon.png")}" class="w-16 h-16 rounded-xl object-cover border-2 ${isMember ? 'border-purple-500' : 'border-white/20'}">
                    <div class="flex-1 min-w-0">
                        <h3 class="font-bold text-base mb-1 flex items-center gap-2">
                            ${esc(community.name)}
                            ${isMember ? '<span class="text-purple-500 text-xs">✓</span>' : ''}
                        </h3>
                        <p class="text-xs opacity-70 mb-2 line-clamp-2">${esc(community.description || 'لا يوجد وصف')}</p>
                        <div class="flex items-center gap-3 text-xs opacity-60">
                            <span><i data-lucide="users" class="w-3 h-3 inline"></i> ${Number(community.memberCount) || 0}</span>
                        </div>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });

        setTimeout(initializeLucide, 100);
    });
}

function openCommunity(communityId) {
    currentCommunityId = communityId;

    db.ref(`communities/${communityId}`).once('value', (snapshot) => {
        const community = snapshot.val();
        if (!community) return;

        const isMember = community.members && community.members[auth.currentUser.uid];

        const isAdmin = (community.admins && community.admins[auth.currentUser.uid]) ||
                        (community.createdBy === auth.currentUser.uid);

        document.getElementById('community-name-header').textContent = community.name;
        document.getElementById('community-members-count').textContent = `${community.memberCount || 0} ${t('members') || 'عضو'}`;
        document.getElementById('community-banner').src = community.image || "/images/android-icon.png";
        document.getElementById('community-description').textContent = community.description || (t('noDescription') || 'لا يوجد وصف');

        const joinBtn = document.getElementById('join-community-btn');
        if (isMember) {
            joinBtn.innerHTML = `<span data-i18n="leave">${t('leave') || 'مغادرة'}</span>`;
            joinBtn.classList.remove('bg-purple-600', 'hover:bg-purple-700');
            joinBtn.classList.add('bg-red-600', 'hover:bg-red-700');
            document.getElementById('add-community-post-btn').classList.remove('hidden');
        } else {
            joinBtn.innerHTML = `<span data-i18n="join">${t('join') || 'انضم'}</span>`;
            joinBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
            joinBtn.classList.add('bg-purple-600', 'hover:bg-purple-700');
            document.getElementById('add-community-post-btn').classList.add('hidden');
        }

        loadCommunityPosts(communityId);
        nav('community-detail-screen');
    });
}

async function toggleCommunityMembership() {
    if (!currentCommunityId) return;

    try {
        const memberRef = db.ref(`communities/${currentCommunityId}/members/${auth.currentUser.uid}`);
        const snapshot = await memberRef.once('value');

        if (snapshot.exists()) {

            await memberRef.remove();
            await db.ref(`communities/${currentCommunityId}/memberCount`).transaction((count) => {
                return Math.max((count || 1) - 1, 0);
            });
            alert(t('leftCommunity') || 'تم المغادرة من المجتمع');
        } else {

            await memberRef.set({
                joinedAt: Date.now(),
                name: state.data.username
            });
            await db.ref(`communities/${currentCommunityId}/memberCount`).transaction((count) => {
                return (count || 0) + 1;
            });
            alert(t('joinedCommunity') || 'تم الانضمام للمجتمع');
        }

        openCommunity(currentCommunityId);
    } catch (error) {
        console.error('خطأ في تغيير العضوية:', error);
    }
}

function loadCommunityPosts(communityId) {
    const container = document.getElementById('community-posts');
    if (!container) return;

    container.innerHTML = `<p class="text-center opacity-60 py-8" data-i18n="loading">${t('loading') || 'جاري التحميل...'}</p>`;

    db.ref(`communities/${communityId}/posts`).on('value', (snapshot) => {
        container.innerHTML = '';

        if (!snapshot.exists()) {
            container.innerHTML = `
                <div class="text-center py-12 opacity-60">
                    <i data-lucide="message-square" class="w-16 h-16 mx-auto mb-3 opacity-40"></i>
                    <p>${t('noCommunityPosts') || 'لا توجد منشورات بعد'}</p>
                </div>
            `;
            setTimeout(initializeLucide, 100);
            return;
        }

        const posts = [];
        snapshot.forEach((child) => {
            posts.push({ id: child.key, ...child.val() });
        });

        posts.sort((a, b) => b.createdAt - a.createdAt);

        posts.forEach((post) => {
            const card = document.createElement('div');
            card.className = ' p-4 rounded-xl mb-3 border border-white/10';

            const timeAgo = formatTimeAgo(post.createdAt);

            card.innerHTML = `
                <div class="flex items-start gap-3 mb-3">
                    <img src="${escAttr(post.authorPhoto || 'https://via.placeholder.com/40')}" class="w-10 h-10 rounded-full object-cover">
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-sm">${esc(post.authorName || 'مجهول')}</h4>
                        <p class="text-xs opacity-60">${esc(timeAgo)}</p>
                    </div>
                </div>
                <p class="text-sm mb-3">${esc(post.text || '')}</p>
                ${post.video ? `
                <div class="rounded-2xl overflow-hidden mb-3 shadow-lg">
                    <video controls playsinline preload="metadata" class="w-full max-h-64 bg-black rounded-2xl">
                        <source src="${escAttr(post.video)}">
                    </video>
                </div>` : post.image ? `<img src="${escAttr(post.image)}" class="w-full rounded-xl mb-3 max-h-96 object-cover cursor-pointer hover:opacity-90 transition" onclick="openImageViewer('${escAttr(post.image)}')">` : ''}
            `;

            container.appendChild(card);
        });

        setTimeout(initializeLucide, 100);
    });
}

function formatTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (currentLang === 'ar') {
        if (minutes < 1) return 'الآن';
        if (minutes < 60) return `منذ ${minutes} دقيقة`;
        if (hours < 24) return `منذ ${hours} ساعة`;
        return `منذ ${days} يوم`;
    } else {
        if (minutes < 1) return 'now';
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return `${days}d ago`;
    }
}

async function deleteCommunityPost(postId) {
    if (!currentCommunityId) return;

    if (!confirm(t('confirmDeletePost') || 'هل تريد حذف هذا المنشور؟')) return;

    try {
        await db.ref(`communities/${currentCommunityId}/posts/${postId}`).remove();
        alert(t('postDeleted') || 'تم حذف المنشور بنجاح');
        loadCommunityPosts(currentCommunityId);
    } catch (error) {
        console.error('خطأ في حذف المنشور:', error);
        alert(t('errorDeletingPost') || 'حدث خطأ أثناء حذف المنشور');
    }
}

async function deleteCommunity(communityId) {

    if (!confirm(t('confirmDeleteCommunity') || 'هل أنت متأكد من حذف هذا المجتمع؟ سيتم حذف جميع المنشورات والأعضاء!')) {

        return;
    }

    try {

        const communitySnapshot = await db.ref(`communities/${communityId}`).once('value');
        const community = communitySnapshot.val();

        const isAdmin = (community.admins && community.admins[auth.currentUser.uid]) ||
                        (community.createdBy === auth.currentUser.uid);

        if (!isAdmin) {

            alert(t('onlyAdminCanDelete') || 'فقط المسؤول يمكنه حذف المجتمع');
            return;
        }

        await db.ref(`communities/${communityId}`).remove();

        alert(t('communityDeleted') || 'تم حذف المجتمع بنجاح');
        nav('communities-screen');
        loadCommunities();
    } catch (error) {
        console.error('❌ خطأ في حذف المجتمع:', error);
        console.error('📝 تفاصيل الخطأ:', error.message);
        console.error('📍 Stack trace:', error.stack);

        if (error.code === 'PERMISSION_DENIED') {
            alert('❌ خطأ في الصلاحيات: يجب تحديث Firebase Database Rules للسماح بحذف المجتمعات!');
        } else {
            alert((t('errorDeletingCommunity') || 'حدث خطأ أثناء حذف المجتمع') + ': ' + error.message);
        }
    }
}

function handlePasswordReset() {
    const emailInput = document.getElementById('reset-email');
    const email = emailInput.value.trim();
    const btn = event.target;

    if (!email) {
        alert(currentLang === 'ar' ? 'الرجاء إدخال البريد الإلكتروني' : 'Please enter your email');
        emailInput.focus();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(currentLang === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email format');
        return;
    }

    const originalBtnText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
    firebase.auth().languageCode = currentLang === 'ar' ? 'ar' : 'en';

    const actionCodeSettings = {
    url: 'https://aa-hub.netlify.app/action.html',
    handleCodeInApp: false
};

firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
        .then(() => {

            const successMsg = currentLang === 'ar' ?
                ` تم إرسال رابط إعادة تعيين كلمة المرور إلى:\n\n${email}\n\n تحقق من صندوق الوارد ومجلد الرسائل غير المرغوب فيها (Spam)` :
                ` Password reset link sent to:\n\n${email}\n\n⚠️ Check your inbox and spam folder`;

            alert(successMsg);

            emailInput.value = '';
            nav('auth-screen');
        })
        .catch((error) => {

            console.error('Password reset error:', error);

            let errorMsg = '';
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMsg = currentLang === 'ar' ?
                        '❌ لا يوجد حساب مسجل بهذا البريد الإلكتروني' :
                        '❌ No account found with this email';
                    break;
                case 'auth/invalid-email':
                    errorMsg = currentLang === 'ar' ?
                        '❌ صيغة البريد الإلكتروني غير صحيحة' :
                        '❌ Invalid email format';
                    break;
                case 'auth/too-many-requests':
                    errorMsg = currentLang === 'ar' ?
                        '❌ كثرت المحاولات، يرجى الانتظار قليلاً ثم المحاولة مرة أخرى' :
                        '❌ Too many attempts, please wait and try again later';
                    break;
                default:
                    errorMsg = (currentLang === 'ar' ? '❌ حدث خطأ: ' : '❌ Error: ') + error.message;
            }

            alert(errorMsg);
        })
        .finally(() => {

            btn.disabled = false;
            btn.innerHTML = originalBtnText;
        });
}

    window.syncChatStreaks = async function() {
        const user = firebase.auth().currentUser;
        if (!user) return;

        const today     = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        let snap;
        try { snap = await db.ref("chatStreaks").once("value"); }
        catch(e) { return; }
        if (!snap.exists()) return;

        const updates = {};

        snap.forEach(chatSnap => {
            const chatKey  = chatSnap.key;
            const parts    = chatKey.split("_");
            if (!parts.includes(user.uid)) return;

            const sd       = chatSnap.val() || {};
            const streak   = sd.streak || 0;
            if (streak < 1) return;

            const otherUid  = parts.find(p => p !== user.uid);
            if (!otherUid) return;

            const myLast    = sd["last_" + user.uid] || "";
            const otherLast = sd["last_" + otherUid]  || "";

            const myGone    = myLast    !== today && myLast    !== yesterday;
            const otherGone = otherLast !== today && otherLast !== yesterday;

            if (myGone || otherGone) {
                updates[`chatStreaks/${chatKey}/streak`] = 0;
                updates[`chatStreaks/${chatKey}/status`] = "broken";
            } else if (myLast === today && otherLast === today) {
                if (sd.status !== "active") updates[`chatStreaks/${chatKey}/status`] = "active";
            } else {
                if (sd.status !== "warning") updates[`chatStreaks/${chatKey}/status`] = "warning";
            }
        });

        if (Object.keys(updates).length > 0) {
            try {
                await db.ref().update(updates);
                if (typeof loadChatList === "function") loadChatList();
            } catch(e) {}
        }
    };

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.syncChatStreaks();
            if (!window._streakSyncInterval) {
                window._streakSyncInterval = setInterval(window.syncChatStreaks, 2 * 60 * 1000);
            }
        } else {
            clearInterval(window._streakSyncInterval);
            window._streakSyncInterval = null;
        }
    });
let pendingLang = null;

function selectLanguage(lang) {
    pendingLang = lang;
    
    const arCheck = document.getElementById('lang-ar-check');
    const enCheck = document.getElementById('lang-en-check');
    const arBtn = document.getElementById('lang-ar-btn');
    const enBtn = document.getElementById('lang-en-btn');

    if (arCheck && enCheck) {
        if (lang === 'ar') {
            arCheck.style.display = 'block';
            enCheck.style.display = 'none';
            arBtn.style.background = 'rgba(124,58,237,0.1)';
            enBtn.style.background = 'transparent';
        } else {
            enCheck.style.display = 'block';
            arCheck.style.display = 'none';
            enBtn.style.background = 'rgba(124,58,237,0.1)';
            arBtn.style.background = 'transparent';
        }
    }
    initializeLucideSafe();
}

function saveLanguage() {
    if (!pendingLang) return;
    switchLanguage(pendingLang);
    if (state.uid) {
        db.ref('users/' + state.uid).update({ language: pendingLang }).catch(()=>{});
    }
    const msg = t('langSaved');
    showToast(msg);
    nav('settings-screen');
}

function initLanguageScreen() {
    pendingLang = currentLang;
    
    const arCheck = document.getElementById('lang-ar-check');
    const enCheck = document.getElementById('lang-en-check');
    const arBtn = document.getElementById('lang-ar-btn');
    const enBtn = document.getElementById('lang-en-btn');
    if (!arCheck) return;
    if (currentLang === 'ar') {
        arCheck.style.display = 'block';
        enCheck.style.display = 'none';
        arBtn.style.background = 'rgba(124,58,237,0.1)';
        enBtn.style.background = 'transparent';
    } else {
        enCheck.style.display = 'block';
        arCheck.style.display = 'none';
        enBtn.style.background = 'rgba(124,58,237,0.1)';
        arBtn.style.background = 'transparent';
    }
    initializeLucideSafe();
}

function updateCurrentLangLabel() {
    const el = document.getElementById('current-lang-label');
    if (el) {
        el.textContent = currentLang === 'ar' ? 'العربية' : 'English';
    }
}

function showToast(msg) {
    const notif = document.getElementById('in-app-notification');
    if (notif) {
        notif.textContent = msg;
        notif.classList.remove('hidden', 'opacity-0');
        notif.classList.add('opacity-100');
        setTimeout(() => {
            notif.classList.remove('opacity-100');
            notif.classList.add('opacity-0');
            setTimeout(() => notif.classList.add('hidden'), 500);
        }, 2500);
    }
}