// Quiz Data
const quizQuestions = [
    {
        english: "How does your skin feel 2 hours after washing?",
        korean: "세안 후 2시간 뒤 피부 상태는?",
        options: [
            { english: "Very tight and dry", korean: "매우 당기고 건조함", scores: { dry: 2, oily: 0, combination: 0, sensitive: 1, normal: 0 } },
            { english: "Comfortable, not tight or oily", korean: "편안하고, 당기지도 번들거리지도 않음", scores: { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 2 } },
            { english: "Oily all over", korean: "전체적으로 번들거림", scores: { dry: 0, oily: 2, combination: 0, sensitive: 0, normal: 0 } },
            { english: "Oily in T-zone, dry on cheeks", korean: "T존은 번들, 볼은 건조", scores: { dry: 0, oily: 0, combination: 2, sensitive: 0, normal: 0 } },
            { english: "Slightly irritated or red", korean: "약간 자극받거나 붉어짐", scores: { dry: 0, oily: 0, combination: 0, sensitive: 2, normal: 0 } }
        ]
    },
    {
        english: "How visible are your pores?",
        korean: "모공이 얼마나 눈에 띄나요?",
        options: [
            { english: "Almost invisible", korean: "거의 보이지 않음", scores: { dry: 2, oily: 0, combination: 0, sensitive: 1, normal: 1 } },
            { english: "Small and barely noticeable", korean: "작고 거의 눈에 띄지 않음", scores: { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 2 } },
            { english: "Large and visible all over", korean: "크고 전체적으로 잘 보임", scores: { dry: 0, oily: 2, combination: 0, sensitive: 0, normal: 0 } },
            { english: "Large on nose/forehead only", korean: "코/이마에만 크게 보임", scores: { dry: 0, oily: 0, combination: 2, sensitive: 0, normal: 0 } },
            { english: "Varies depending on skin condition", korean: "피부 컨디션에 따라 다름", scores: { dry: 0, oily: 0, combination: 1, sensitive: 1, normal: 0 } }
        ]
    },
    {
        english: "How often do you get breakouts?",
        korean: "여드름이나 트러블이 얼마나 자주 생기나요?",
        options: [
            { english: "Rarely or never", korean: "거의 없거나 전혀 없음", scores: { dry: 1, oily: 0, combination: 0, sensitive: 0, normal: 2 } },
            { english: "Occasionally, around period", korean: "가끔, 생리 전후로", scores: { dry: 0, oily: 0, combination: 1, sensitive: 0, normal: 1 } },
            { english: "Frequently, especially in T-zone", korean: "자주, 특히 T존에", scores: { dry: 0, oily: 2, combination: 1, sensitive: 0, normal: 0 } },
            { english: "When using new products", korean: "새 제품 사용 시", scores: { dry: 0, oily: 0, combination: 0, sensitive: 2, normal: 0 } },
            { english: "Constantly battling breakouts", korean: "항상 트러블과 싸우는 중", scores: { dry: 0, oily: 2, combination: 0, sensitive: 1, normal: 0 } }
        ]
    },
    {
        english: "How does your skin react to new products?",
        korean: "새로운 화장품 사용 시 반응은?",
        options: [
            { english: "Usually fine, no reaction", korean: "보통 괜찮고, 반응 없음", scores: { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 2 } },
            { english: "Sometimes stings or burns", korean: "가끔 따끔거리거나 화끈거림", scores: { dry: 1, oily: 0, combination: 0, sensitive: 2, normal: 0 } },
            { english: "Often breaks out", korean: "자주 트러블 발생", scores: { dry: 0, oily: 2, combination: 0, sensitive: 1, normal: 0 } },
            { english: "Gets red and irritated easily", korean: "쉽게 붉어지고 자극받음", scores: { dry: 0, oily: 0, combination: 0, sensitive: 2, normal: 0 } },
            { english: "Depends on the product type", korean: "제품 종류에 따라 다름", scores: { dry: 0, oily: 0, combination: 2, sensitive: 1, normal: 0 } }
        ]
    },
    {
        english: "How does your skin change with seasons?",
        korean: "계절이 바뀌면 피부가 어떻게 변하나요?",
        options: [
            { english: "Gets very dry in winter", korean: "겨울에 매우 건조해짐", scores: { dry: 2, oily: 0, combination: 0, sensitive: 1, normal: 0 } },
            { english: "Gets very oily in summer", korean: "여름에 매우 기름져짐", scores: { dry: 0, oily: 2, combination: 1, sensitive: 0, normal: 0 } },
            { english: "Stays pretty consistent", korean: "꽤 일정하게 유지됨", scores: { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 2 } },
            { english: "Becomes more sensitive", korean: "더 민감해짐", scores: { dry: 0, oily: 0, combination: 0, sensitive: 2, normal: 0 } },
            { english: "Oilier in summer, drier in winter", korean: "여름에 지성, 겨울에 건성", scores: { dry: 0, oily: 0, combination: 2, sensitive: 0, normal: 0 } }
        ]
    },
    {
        english: "What is your skin tone like?",
        korean: "피부 톤이 어떤가요?",
        options: [
            { english: "Often looks dull and flaky", korean: "자주 칙칙하고 각질이 일어남", scores: { dry: 2, oily: 0, combination: 0, sensitive: 0, normal: 0 } },
            { english: "Even and healthy looking", korean: "균일하고 건강해 보임", scores: { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 2 } },
            { english: "Shiny, tends to look greasy", korean: "번들거리고, 기름져 보이는 경향", scores: { dry: 0, oily: 2, combination: 0, sensitive: 0, normal: 0 } },
            { english: "Uneven, shiny and dry patches", korean: "고르지 않고, 번들/건조 부분 공존", scores: { dry: 0, oily: 0, combination: 2, sensitive: 0, normal: 0 } },
            { english: "Often red or blotchy", korean: "자주 붉거나 얼룩덜룩함", scores: { dry: 0, oily: 0, combination: 0, sensitive: 2, normal: 0 } }
        ]
    },
    {
        english: "What is your biggest skin concern?",
        korean: "가장 큰 피부 고민은?",
        options: [
            { english: "Dryness and fine lines", korean: "건조함과 잔주름", scores: { dry: 2, oily: 0, combination: 0, sensitive: 0, normal: 0 } },
            { english: "Excess oil and large pores", korean: "과도한 유분과 넓은 모공", scores: { dry: 0, oily: 2, combination: 0, sensitive: 0, normal: 0 } },
            { english: "Keeping skin balanced", korean: "피부 밸런스 유지", scores: { dry: 0, oily: 0, combination: 2, sensitive: 0, normal: 0 } },
            { english: "Redness and irritation", korean: "붉음과 자극", scores: { dry: 0, oily: 0, combination: 0, sensitive: 2, normal: 0 } },
            { english: "Maintaining current condition", korean: "현재 상태 유지", scores: { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 2 } }
        ]
    }
];

// Skin Type Results Data
const skinTypeResults = {
    dry: {
        emoji: "🏜️",
        english: "Dry Skin",
        korean: "건성 피부",
        description: "Your skin lacks natural oils and moisture, often feeling tight and showing flakiness. It may be prone to fine lines and rough texture.",
        tips: [
            "💧 Use gentle, hydrating cleansers (avoid foaming)",
            "🧴 Layer hydrating toners and essences",
            "🌙 Apply rich cream moisturizers, especially at night",
            "☀️ Never skip sunscreen (look for hydrating formulas)",
            "🚫 Avoid hot water and harsh exfoliants"
        ],
        products: [
            { name: "COSRX Snail Mucin Essence", brand: "COSRX", emoji: "🐌", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000151510" },
            { name: "Laneige Water Bank Cream", brand: "Laneige", emoji: "💧", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000174432" },
            { name: "Etude SoonJung Toner", brand: "Etude", emoji: "🌿", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000138713" }
        ]
    },
    oily: {
        emoji: "✨",
        english: "Oily Skin",
        korean: "지성 피부",
        description: "Your skin produces excess sebum, often looking shiny and prone to enlarged pores and breakouts. The good news? Oily skin tends to age slower!",
        tips: [
            "🫧 Use gentle foaming cleansers twice daily",
            "💨 Look for lightweight, oil-free moisturizers",
            "🧪 Incorporate BHA/salicylic acid for pores",
            "📝 Use blotting papers during the day",
            "🚫 Don't skip moisturizer - dehydration increases oil"
        ],
        products: [
            { name: "COSRX BHA Blackhead Power Liquid", brand: "COSRX", emoji: "🧪", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000151509" },
            { name: "Innisfree No-Sebum Powder", brand: "Innisfree", emoji: "💨", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000174726" },
            { name: "Some By Mi AHA BHA PHA Toner", brand: "Some By Mi", emoji: "🌟", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000117282" }
        ]
    },
    combination: {
        emoji: "⚖️",
        english: "Combination Skin",
        korean: "복합성 피부",
        description: "Your T-zone (forehead, nose, chin) is oily while your cheeks are normal to dry. This is the most common skin type and requires balanced care.",
        tips: [
            "🎯 Use different products for different zones",
            "🧴 Gel moisturizers work well overall",
            "🔄 Multi-mask: clay on T-zone, hydrating on cheeks",
            "💧 Focus hydration on dry areas",
            "🧪 Use BHA only on oily zones"
        ],
        products: [
            { name: "Klairs Supple Preparation Toner", brand: "Klairs", emoji: "💧", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000120761" },
            { name: "Innisfree Green Tea Seed Serum", brand: "Innisfree", emoji: "🍵", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000174716" },
            { name: "COSRX Oil-Free Moisturizing Lotion", brand: "COSRX", emoji: "🌊", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000151512" }
        ]
    },
    sensitive: {
        emoji: "🌸",
        english: "Sensitive Skin",
        korean: "민감성 피부",
        description: "Your skin easily reacts to products and environmental factors, often becoming red, itchy, or irritated. It needs extra gentle care and soothing ingredients.",
        tips: [
            "🌿 Choose fragrance-free, hypoallergenic products",
            "🧪 Patch test ALL new products for 24-48 hours",
            "❄️ Use lukewarm water, never hot",
            "🛡️ Look for centella, aloe, and ceramides",
            "🚫 Avoid alcohol, essential oils, and harsh actives"
        ],
        products: [
            { name: "Etude SoonJung 2x Barrier Cream", brand: "Etude", emoji: "🛡️", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000138714" },
            { name: "COSRX Centella Blemish Cream", brand: "COSRX", emoji: "🌿", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000151516" },
            { name: "Pyunkang Yul Essence Toner", brand: "Pyunkang Yul", emoji: "💚", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000117547" }
        ]
    },
    normal: {
        emoji: "😊",
        english: "Normal Skin",
        korean: "중성 피부",
        description: "Congratulations! Your skin is well-balanced with good moisture levels, small pores, and few imperfections. Focus on maintenance and prevention.",
        tips: [
            "✨ Maintain with a simple, consistent routine",
            "☀️ Prioritize sun protection for anti-aging",
            "💧 Stay hydrated inside and out",
            "🔄 Can experiment with various products",
            "😴 Focus on getting enough sleep"
        ],
        products: [
            { name: "Beauty of Joseon Glow Serum", brand: "Beauty of Joseon", emoji: "✨", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000175238" },
            { name: "Round Lab Dokdo Toner", brand: "Round Lab", emoji: "🌊", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000155498" },
            { name: "Isntree Hyaluronic Acid Toner", brand: "Isntree", emoji: "💧", link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000159684" }
        ]
    }
};

// Procedures Data
const proceduresData = [
    {
        english: "Botox",
        korean: "보톡스",
        description: "Relaxes facial muscles to reduce wrinkles and prevent new ones from forming. Most popular for forehead lines, crow's feet, and frown lines.",
        priceKRW: "₩50,000 - ₩200,000",
        priceUSD: "$40 - $150",
        duration: "10-15 min",
        downtime: "None",
        lasts: "3-6 months",
        rank: "#1 Popular",
        tags: ["Anti-wrinkle", "Prevention", "Quick"]
    },
    {
        english: "Rejuran",
        korean: "리쥬란",
        description: "Salmon DNA injections that promote skin regeneration, improve elasticity, and reduce fine lines. A Korean favorite for natural skin improvement.",
        priceKRW: "₩150,000 - ₩300,000",
        priceUSD: "$115 - $230",
        duration: "30-40 min",
        downtime: "1-2 days",
        lasts: "6-12 months",
        rank: "#2 Popular",
        tags: ["Regeneration", "Anti-aging", "K-Beauty Exclusive"]
    },
    {
        english: "Ultherapy",
        korean: "울쎄라",
        description: "Non-invasive ultrasound treatment that lifts and tightens skin by stimulating collagen production deep within the skin layers.",
        priceKRW: "₩500,000 - ₩2,000,000",
        priceUSD: "$380 - $1,500",
        duration: "60-90 min",
        downtime: "None to minimal",
        lasts: "1-2 years",
        rank: "#3 Popular",
        tags: ["Lifting", "Tightening", "Non-invasive"]
    },
    {
        english: "Skin Booster",
        korean: "물광주사",
        description: "Micro-injections of hyaluronic acid for intense hydration, giving skin a dewy 'glass skin' glow that Koreans love.",
        priceKRW: "₩150,000 - ₩350,000",
        priceUSD: "$115 - $270",
        duration: "30-45 min",
        downtime: "1-3 days",
        lasts: "4-6 months",
        rank: "#4 Popular",
        tags: ["Glass Skin", "Hydration", "Glow"]
    },
    {
        english: "Laser Toning",
        korean: "레이저토닝",
        description: "Gentle laser treatment that evens out skin tone, reduces pigmentation, and minimizes pores. Popular for maintaining clear skin.",
        priceKRW: "₩50,000 - ₩150,000",
        priceUSD: "$40 - $115",
        duration: "15-30 min",
        downtime: "None",
        lasts: "Cumulative",
        rank: "#5 Popular",
        tags: ["Brightening", "Pores", "Maintenance"]
    },
    {
        english: "Dermal Filler",
        korean: "필러",
        description: "Injectable gel that adds volume, contours facial features, and fills in wrinkles. Common areas include nose, chin, lips, and under-eyes.",
        priceKRW: "₩200,000 - ₩500,000",
        priceUSD: "$150 - $380",
        duration: "15-30 min",
        downtime: "1-3 days",
        lasts: "6-18 months",
        rank: "#6 Popular",
        tags: ["Contouring", "Volume", "Instant Results"]
    }
];

// App State
let currentQuestion = 0;
let scores = { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 0 };

// DOM Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizStart = document.getElementById('quiz-start');
const quizQuestionsEl = document.getElementById('quiz-questions');
const quizResult = document.getElementById('quiz-result');
const questionContainer = document.getElementById('question-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const resultContent = document.getElementById('result-content');
const proceduresGrid = document.getElementById('procedures-grid');

// Initialize App
function init() {
    setupTabs();
    setupQuiz();
    renderProcedures();
}

// Tab Navigation
function setupTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            // Update button states
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update panel visibility
            tabPanels.forEach(panel => {
                panel.classList.add('hidden');
                if (panel.id === tabId) {
                    panel.classList.remove('hidden');
                }
            });
        });
    });
}

// Quiz Functions
function setupQuiz() {
    startQuizBtn.addEventListener('click', startQuiz);
}

function startQuiz() {
    currentQuestion = 0;
    scores = { dry: 0, oily: 0, combination: 0, sensitive: 0, normal: 0 };

    quizStart.classList.add('hidden');
    quizQuestionsEl.classList.remove('hidden');
    quizResult.classList.add('hidden');

    renderQuestion();
}

function renderQuestion() {
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestion + 1} / ${quizQuestions.length}`;

    let optionsHTML = question.options.map((option, index) => `
        <button class="option-btn" data-index="${index}">
            <span class="english">${option.english}</span>
            <span class="korean">${option.korean}</span>
        </button>
    `).join('');

    questionContainer.innerHTML = `
        <p class="question-text">${question.english}</p>
        <p class="question-text-korean">${question.korean}</p>
        <div class="options-list">
            ${optionsHTML}
        </div>
    `;

    // Add click handlers to options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => selectOption(parseInt(btn.dataset.index)));
    });
}

function selectOption(optionIndex) {
    const question = quizQuestions[currentQuestion];
    const selectedScores = question.options[optionIndex].scores;

    // Add scores
    Object.keys(selectedScores).forEach(type => {
        scores[type] += selectedScores[type];
    });

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizQuestionsEl.classList.add('hidden');
    quizResult.classList.remove('hidden');

    // Find highest score
    const skinType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const result = skinTypeResults[skinType];

    const tipsHTML = result.tips.map(tip => `<li>${tip}</li>`).join('');
    const productsHTML = result.products.map(product => `
        <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="product-item">
            <span class="product-emoji">${product.emoji}</span>
            <div class="product-info">
                <span class="product-name">${product.name}</span>
                <span class="product-brand">${product.brand}</span>
            </div>
            <span class="product-arrow">→</span>
        </a>
    `).join('');

    resultContent.innerHTML = `
        <div class="result-emoji">${result.emoji}</div>
        <h2 class="result-type">${result.english}</h2>
        <p class="result-type-korean">${result.korean}</p>

        <div class="result-description">
            <h4>About Your Skin</h4>
            <p>${result.description}</p>
            <h4>Care Tips</h4>
            <ul>${tipsHTML}</ul>
        </div>

        <div class="recommended-products">
            <h4>🛒 Recommended Products (Olive Young)</h4>
            ${productsHTML}
        </div>

        <button class="secondary-btn" id="retake-btn">Retake Quiz 다시하기</button>
    `;

    document.getElementById('retake-btn').addEventListener('click', () => {
        quizResult.classList.add('hidden');
        quizStart.classList.remove('hidden');
    });
}

// Procedures Functions
function renderProcedures() {
    proceduresGrid.innerHTML = proceduresData.map(procedure => `
        <div class="procedure-card">
            <div class="procedure-header">
                <div>
                    <div class="procedure-title">${procedure.english}</div>
                    <div class="procedure-title-korean">${procedure.korean}</div>
                </div>
                <span class="procedure-rank">${procedure.rank}</span>
            </div>
            <p class="procedure-description">${procedure.description}</p>
            <div class="procedure-details">
                <div class="detail-item">
                    <div class="detail-label">Price</div>
                    <div class="detail-value">${procedure.priceKRW}</div>
                    <div class="detail-value-sub">${procedure.priceUSD}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Duration</div>
                    <div class="detail-value">${procedure.duration}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Downtime</div>
                    <div class="detail-value">${procedure.downtime}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Lasts</div>
                    <div class="detail-value">${procedure.lasts}</div>
                </div>
            </div>
            <div class="procedure-tags">
                ${procedure.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
