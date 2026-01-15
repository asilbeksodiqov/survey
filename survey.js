// Savollar bazasi
const surveyQuestions = [
    // Bo'lim 1: Foydalanuvchi profili
    {
        id: 1,
        question: "Yoshingiz:",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "18-25 yosh" },
            { id: "B", text: "26-35 yosh" },
            { id: "C", text: "36-50 yosh" },
            { id: "D", text: "50 dan yuqori" }
        ],
        section: "Foydalanuvchi profili"
    },
    {
        id: 2,
        question: "Mashg'ulot turingiz:",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Talaba" },
            { id: "B", text: "Davlat xizmatchisi" },
            { id: "C", text: "Tadbirkor" },
            { id: "D", text: "Ishsiz/Uy bekasi" },
            { id: "E", text: "Nafaqaxo'r" }
        ],
        section: "Foydalanuvchi profili"
    },
    {
        id: 3,
        question: "Davlat xizmatlaridan foydalanish chastotasi:",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Haftada kamida 1 marta" },
            { id: "B", text: "Oyda 1-2 marta" },
            { id: "C", text: "Yilda bir necha marta" },
            { id: "D", text: "Deyarli foydalanmayman" }
        ],
        section: "Foydalanuvchi profili"
    },
    
    // Bo'lim 2: Raqamli infratuzilma
    {
        id: 4,
        question: "Davlat xizmatlarini qaysi usulda olish sizga qulay?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "DXMga shaxsan borish" },
            { id: "B", text: "My.gov.uz (kompyuter)" },
            { id: "C", text: "Mobil ilovalar" },
            { id: "D", text: "Telegram-botlar" }
        ],
        section: "Raqamli infratuzilma"
    },
    {
        id: 5,
        question: "Elektron xizmatlardan foydalanishda sizga nima xalaqit beradi?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "ERI kalitini olish murakkabligi" },
            { id: "B", text: "Sayt interfeysining tushunarsizligi" },
            { id: "C", text: "Internet tezligining pastligi" },
            { id: "D", text: "Ma'lumotlarning bazada topilmasligi" }
        ],
        section: "Raqamli infratuzilma"
    },
    {
        id: 6,
        question: "\"Yagona darcha\" tamoyili darajasini qanday baholaysiz?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Alo darajada" },
            { id: "B", text: "Yaxshi" },
            { id: "C", text: "Qoniqarli" },
            { id: "D", text: "Qoniqarsiz" }
        ],
        section: "Raqamli infratuzilma"
    },
    
    // Bo'lim 3: Innovatsion mexanizmlar
    {
        id: 7,
        question: "\"Proaktiv xizmatlar\" tizimidan foydalanganmisiz?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Ha, juda qulay" },
            { id: "B", text: "Eshitganman, lekin foydalanmaganman" },
            { id: "C", text: "Bu nimaligini bilmayman" }
        ],
        section: "Innovatsion mexanizmlar"
    },
    {
        id: 8,
        question: "Shaxsingizni tasdiqlashda qaysi innovatsiyani afzal ko'rasiz?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "ERI (EDS) kaliti" },
            { id: "B", text: "OneID (SMS kod orqali)" },
            { id: "C", text: "Mobile-ID (biometriya/Face ID)" },
            { id: "D", text: "Jismoniy imzo" }
        ],
        section: "Innovatsion mexanizmlar"
    },
    {
        id: 9,
        question: "Davlat xizmatlarida Sun'iy intellekt (Chat-botlar) maslahatidan foydalanishga ishonasizmi?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Ha, vaqtni tejaydi" },
            { id: "B", text: "Faqat oddiy savollar bo'yicha" },
            { id: "C", text: "Yo'q, jonli muloqot afzal" }
        ],
        section: "Innovatsion mexanizmlar"
    },
    {
        id: 10,
        question: "Xizmatlar uchun to'lov tizimlari (Click, Payme, va b.) integratsiyasidan ko'nglingiz to'qmi?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Ha, muammosiz" },
            { id: "B", text: "Ba'zan to'lov tushishi kechikadi" },
            { id: "C", text: "Yo'q, kvitansiya talab qilinishi yoqmaydi" }
        ],
        section: "Innovatsion mexanizmlar"
    },
    
    // Bo'lim 4: Sifat va samaradorlik
    {
        id: 11,
        question: "Innovatsiyalar joriy etilishi korrupsiya darajasini kamaytirdi deb o'ylaysizmi?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Ha, inson omili yo'qoldi" },
            { id: "B", text: "Qisman kamaydi" },
            { id: "C", text: "O'zgarish sezmadim" }
        ],
        section: "Sifat va samaradorlik"
    },
    {
        id: 12,
        question: "Davlat xizmatlari ko'rsatishning shaffofligi sizni qoniqtiradimi?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Ha, arizam holatini onlayn kuzatib boraman" },
            { id: "B", text: "Ma'lumotlar yetarli emas" },
            { id: "C", text: "Shaffoflik darajasi past" }
        ],
        section: "Sifat va samaradorlik"
    },
    {
        id: 13,
        question: "Sizningcha, davlat xizmatlarini ko'rsatishda \"Blokcheyn\" texnologiyasi nima uchun kerak?",
        type: "radio",
        required: true,
        options: [
            { id: "A", text: "Hujjatlar xavfsizligi va qalbakilashtirishning oldini olish uchun" },
            { id: "B", text: "Byurokratiyani kamaytirish uchun" },
            { id: "C", text: "Kerak emas deb hisoblayman" }
        ],
        section: "Sifat va samaradorlik"
    },
    
    // Bo'lim 5: Takliflar (ochiq savollar)
    {
        id: 14,
        question: "Qaysi xizmat turini mutlaqo raqamlashtirish (masofaviy qilish) kerak deb hisoblaysiz? (Masalan: FHDYO, Uy-joy, Avto-maktab va h.k.)",
        type: "textarea",
        required: true,
        section: "Takliflar"
    },
    {
        id: 15,
        question: "Davlat xizmatlari sohasiga qanday yangi innovatsiyani taklif qilgan bo'lardingiz?",
        type: "textarea",
        required: true,
        section: "Takliflar"
    }
];

// Telegram API konfiguratsiyasi
const TELEGRAM_BOT_TOKEN = '8561049037:AAEbMoh0BTPRx5mUR99ui-uyg764vGO8spY';
const TELEGRAM_CHAT_ID = '7123672881';

// Global o'zgaruvchilar
let currentQuestionIndex = 0;
let userAnswers = {};
let surveyStarted = false;

// Initsializatsiya
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        initSurvey();
    }, 1500);
});

function initSurvey() {
    // Progress bar ni sozlash
    updateProgressBar();
    
    // Saqlangan ma'lumotlarni yuklash
    loadProgress();
    
    // Event listenerlar
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    
    // Boshlash animatsiyasi
    setTimeout(() => {
        animateWelcomePage();
    }, 300);
}

function animateWelcomePage() {
    const elements = document.querySelectorAll('.welcome-card, .info-cards, .instructions');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = `slideUp 0.5s var(--ease-out) forwards`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function startSurvey() {
    surveyStarted = true;
    currentQuestionIndex = 0;
    showPage('survey');
    loadQuestion(currentQuestionIndex);
    updateNavigationButtons();
}

function showPage(pageId) {
    // Barcha sahifalarni yashirish
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Faol sahifani ko'rsatish
    document.getElementById(pageId).classList.add('active');
    
    // Progress bar ni yangilash
    updateProgressBar();
}

function loadQuestion(questionIndex) {
    const question = surveyQuestions[questionIndex];
    const container = document.querySelector('.survey-container');
    
    let questionHTML = `
        <div class="section-title">
            <span class="section-number">${question.id}</span>
            ${question.section}
        </div>
        
        <div class="question-card">
            <div class="question-meta">
                <span class="question-type">
                    ${question.type === 'radio' ? 'Tanlovli savol' : 'Ochiq savol'}
                </span>
                <span class="question-required">${question.required ? '*' : ''}</span>
            </div>
            <div class="question-text">${question.question}</div>
    `;
    
    if (question.type === 'radio') {
        questionHTML += `<div class="options-grid">`;
        question.options.forEach(option => {
            const isChecked = userAnswers[question.id] === option.id;
            questionHTML += `
                <div class="option-item">
                    <input type="radio" id="q${question.id}${option.id}" 
                           name="q${question.id}" 
                           value="${option.id}" 
                           class="option-input"
                           ${isChecked ? 'checked' : ''}>
                    <label for="q${question.id}${option.id}" class="option-label">
                        <span class="option-letter">${option.id}</span>
                        ${option.text}
                    </label>
                </div>
            `;
        });
        questionHTML += `</div>`;
    } else if (question.type === 'textarea') {
        const answerValue = userAnswers[question.id] || '';
        questionHTML += `
            <div class="open-question">
                <div class="floating-label floating-textarea ${answerValue ? 'has-value' : ''}">
                    <textarea id="q${question.id}" name="q${question.id}" 
                              placeholder=" " rows="4">${answerValue}</textarea>
                    <label for="q${question.id}">Javobingizni yozing</label>
                </div>
            </div>
        `;
    }
    
    questionHTML += `</div>`;
    container.innerHTML = questionHTML;
    
    // Event listenerlarni qo'shish
    if (question.type === 'radio') {
        container.querySelectorAll('.option-input').forEach(input => {
            input.addEventListener('change', function() {
                saveAnswer(question.id, this.value);
                updateProgressBar();
            });
        });
    } else if (question.type === 'textarea') {
        const textarea = container.querySelector('textarea');
        textarea.addEventListener('input', function() {
            saveAnswer(question.id, this.value);
            updateProgressBar();
        });
    }
    
    // Savolni ko'rsatish animatsiyasi
    setTimeout(() => {
        container.style.animation = 'slideUp 0.5s var(--ease-out) forwards';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
}

function saveAnswer(questionId, answer) {
    userAnswers[questionId] = answer;
    saveProgress();
}

function nextQuestion() {
    // Joriy savolni tekshirish
    if (!validateCurrentQuestion()) {
        showToast({
            type: 'error',
            title: 'Diqqat!',
            message: 'Iltimos, savolga javob bering'
        });
        return; // return qilmasa keyingi savolga o'tib ketadi
    }
    
    // Keyingi savolga o'tish
    if (currentQuestionIndex < surveyQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        updateNavigationButtons();
        updateProgressBar();
    } else {
        // So'rovnomani yakunlash
        submitSurvey();
    }
}

function validateCurrentQuestion() {
    const question = surveyQuestions[currentQuestionIndex];
    const answer = userAnswers[question.id];
    
    if (question.required && (!answer || answer.trim() === '')) {
        return false;
    }
    
    return true;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Oldingi tugma
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Keyingi tugma
    if (currentQuestionIndex === surveyQuestions.length - 1) {
        nextBtn.innerHTML = '<i class="fas fa-paper-plane"></i> So\'rovnomani Yakunlash';
    } else {
        nextBtn.innerHTML = 'Keyingi savol <i class="fas fa-arrow-right"></i>';
    }
}

function updateProgressBar() {
    const answeredCount = Object.keys(userAnswers).filter(key => {
        const answer = userAnswers[key];
        return answer && answer.trim() !== '';
    }).length;
    
    const totalQuestions = surveyQuestions.length;
    const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
    
    // Progress barlarni yangilash
    document.querySelector('.progress-percent').textContent = `${progressPercent}%`;
    document.querySelector('.progress-fill').style.width = `${progressPercent}%`;
    
    // Savol hisobini yangilash
    document.getElementById('currentQuestion').textContent = answeredCount;
    document.getElementById('totalQuestions').textContent = totalQuestions;
}

function saveProgress() {
    localStorage.setItem('surveyProgress', JSON.stringify({
        answers: userAnswers,
        currentIndex: currentQuestionIndex,
        started: surveyStarted
    }));
}

function loadProgress() {
    const saved = localStorage.getItem('surveyProgress');
    if (saved) {
        try {
            const { answers, currentIndex, started } = JSON.parse(saved);
            userAnswers = answers || {};
            currentQuestionIndex = currentIndex || 0;
            surveyStarted = started || false;
            
            // Progress bar ni yangilash
            updateProgressBar();
            
            // Agar survey boshlangan bo'lsa, davom ettirish
            if (surveyStarted && currentQuestionIndex >= 0) {
                showPage('survey');
                loadQuestion(currentQuestionIndex);
                updateNavigationButtons();
            }
        } catch (e) {
            console.error('Progressni yuklashda xatolik:', e);
        }
    }
}

async function submitSurvey() {
    // Barcha savollarni tekshirish
    let allAnswered = true;
    for (let i = 0; i < surveyQuestions.length; i++) {
        const question = surveyQuestions[i];
        if (question.required && (!userAnswers[question.id] || userAnswers[question.id].trim() === '')) {
            allAnswered = false;
            showToast({
                type: 'error',
                title: 'Diqqat!',
                message: `Iltimos, ${question.id}-savolga javob bering`
            });
            
            // Javob berilmagan savolga o'tish
            currentQuestionIndex = i;
            loadQuestion(i);
            updateNavigationButtons();
            return;
        }
    }
    
    // Yuklanish ko'rsatkichi
    const nextBtn = document.getElementById('nextBtn');
    const originalText = nextBtn.innerHTML;
    nextBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yuborilmoqda...';
    nextBtn.disabled = true;
    
    try {
        // Telegram botga ma'lumotlarni yuborish
        await sendToTelegram();
        
        // LocalStorageda saqlash
        localStorage.setItem('surveyResults', JSON.stringify(userAnswers));
        
        // Progressni tozalash
        localStorage.removeItem('surveyProgress');
        
        // Rahmat sahifasiga o'tish
        showPage('thankyou');
        
        showToast({
            type: 'success',
            title: 'Muvaffaqiyatli!',
            message: 'So\'rovnoma yuborildi. Rahmat!'
        });
        
    } catch (error) {
        console.error('Xatolik:', error);
        showToast({
            type: 'error',
            title: 'Xatolik!',
            message: 'Xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.'
        });
    } finally {
        nextBtn.innerHTML = originalText;
        nextBtn.disabled = false;
    }
}

async function sendToTelegram() {
    // Formatlash va tayyorlash
    const message = formatSurveyMessage();
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        const result = await response.json();
        
        if (!result.ok) {
            throw new Error(result.description || 'Telegram API xatosi');
        }
        
        return result;
    } catch (error) {
        console.error('Telegramga yuborishda xatolik:', error);
        throw error;
    }
}

function formatSurveyMessage() {
    const timestamp = new Date().toLocaleString('uz-UZ');
    let message = `<b>📊 YANGI SO'ROVNOMA NATIJALARI</b>\n`;
    message += `<i>⏰ ${timestamp}</i>\n`;
    message += `<i>✅ ${Object.keys(userAnswers).length}/${surveyQuestions.length} savol</i>\n\n`;
    
    // Savollarni guruhlash bo'limlar bo'yicha
    const sections = {};
    surveyQuestions.forEach(question => {
        if (!sections[question.section]) {
            sections[question.section] = [];
        }
        sections[question.section].push(question);
    });
    
    // Har bir bo'lim uchun javoblarni formatlash
    Object.entries(sections).forEach(([sectionName, questions]) => {
        message += `<b>📌 ${sectionName}</b>\n`;
        
        questions.forEach(question => {
            const answer = userAnswers[question.id];
            if (answer && answer.trim() !== '') {
                let answerText = answer;
                
                // Agar bu variantli savol bo'lsa
                if (question.type === 'radio') {
                    const option = question.options.find(opt => opt.id === answer);
                    if (option) {
                        answerText = `${answer}) ${option.text}`;
                    }
                }
                
                message += `<b>${question.id}. ${question.question}</b>\n`;
                message += `🟢 ${answerText}\n\n`;
            }
        });
        
        message += `\n`;
    });
    
    return message;
}

function resetSurvey() {
    if (confirm('Barcha javoblaringiz o\'chiriladi va so\'rovnoma qayta boshlanadi. Rozimisiz?')) {
        // Ma'lumotlarni tozalash
        userAnswers = {};
        currentQuestionIndex = 0;
        surveyStarted = false;
        
        // Storageni tozalash
        localStorage.removeItem('surveyProgress');
        localStorage.removeItem('surveyResults');
        
        // Bosh sahifaga qaytish
        showPage('welcome');
        updateProgressBar();
        
        showToast({
            type: 'success',
            title: 'Tozalandi!',
            message: 'So\'rovnoma yangilandi'
        });
    }
}

function shareSurvey() {
    const text = "Davlat xizmatlari raqamlashtirish bo'yicha so'rovnomada qatnashib, o'z fikringizni bildiring!";
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Davlat Xizmatlari So\'rovnomasi',
            text: text,
            url: url
        });
    } else {
        navigator.clipboard.writeText(`${text}\n${url}`).then(() => {
            showToast({
                type: 'success',
                title: 'Nusxa olindi!',
                message: 'Havola buferga nusxa olindi'
            });
        });
    }
}

function showToast(options) {
    const {
        type = 'info',
        title = '',
        message = '',
        duration = 4000
    } = options;
    
    // Oldingi toastni olib tashlash
    const existingToast = document.querySelector('.toast.show');
    if (existingToast) {
        existingToast.classList.remove('show');
        setTimeout(() => {
            if (existingToast.parentNode) {
                existingToast.parentNode.removeChild(existingToast);
            }
        }, 400);
    }
    
    // Yangi toast yaratish
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="${icons[type] || icons.info}"></i>
        </div>
        <div class="toast-content">
            ${title ? `<div class="toast-title">${title}</div>` : ''}
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Ko'rsatish
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Avtomatik yopish
    if (duration > 0) {
        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 400);
            }
        }, duration);
    }
    
    return toast;
}

// Global funksiyalar
window.showPage = showPage;
window.startSurvey = startSurvey;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.submitSurvey = submitSurvey;
window.resetSurvey = resetSurvey;
window.shareSurvey = shareSurvey;