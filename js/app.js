/* 
  Main Application Controller & Interactive Logic
*/

document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  renderMacContributions();
  renderLeninCharacteristics();
  renderOriginTimeline();
  renderProletarianForms();
  renderVietnamFeatures();
  renderFlashcards();
  initStruggleTabs();
  initMindmap();
  initQuizEngine();
  initModalEvents();
});

/* 1. Scroll Progress Bar & Nav Highlights */
function initProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Progress bar calculation
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';

    // Active Section Highlight
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });
}

/* 2. Render C.Mac 1852 3 Contributions */
function renderMacContributions() {
  const container = document.getElementById('mac-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.macContributions.map(item => `
    <div class="glass-card mac-card">
      <div class="mac-badge">0${item.id}</div>
      <h3>${item.title}</h3>
      <p style="color: #f1f5f9; font-weight: 500; margin-bottom: 0.8rem;">"${item.content}"</p>
      <p style="font-size: 0.9rem; color: #94a3b8;">${item.detail}</p>
    </div>
  `).join('');
}

/* 3. Render Lenin 4 Characteristics */
function renderLeninCharacteristics() {
  const container = document.getElementById('char-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.leninCharacteristics.map((char, index) => `
    <div class="glass-card char-card ${index === 0 ? 'active' : ''}" onclick="selectCharacteristic('${char.id}', this)">
      <div class="char-icon"><i class="fas fa-layer-group"></i></div>
      <div class="char-title">${char.title}</div>
      <p style="font-size: 0.88rem; color: #94a3b8;">${char.short}</p>
    </div>
  `).join('');
}

function selectCharacteristic(id, cardEl) {
  document.querySelectorAll('.char-card').forEach(c => c.classList.remove('active'));
  cardEl.classList.add('active');

  const charData = APP_DATA.leninCharacteristics.find(c => c.id === id);
  const detailBox = document.getElementById('char-detail-box');
  if (detailBox && charData) {
    detailBox.innerHTML = `
      <h4 style="color: #f59e0b; font-size: 1.15rem; margin-bottom: 0.5rem;">${charData.title}</h4>
      <p style="color: #f1f5f9; font-size: 1rem; line-height: 1.7;">${charData.full}</p>
    `;
  }
}

/* 4. Render Origin Timeline */
function renderOriginTimeline() {
  const container = document.getElementById('origin-timeline');
  if (!container) return;

  container.innerHTML = APP_DATA.originTimeline.map((step, idx) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-step">${step.stage}</div>
        <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 0.4rem;">${step.title}</h4>
        <p style="font-size: 0.9rem; color: #94a3b8;">${step.desc}</p>
      </div>
    </div>
  `).join('');
}

/* 5. Render Proletarian Struggle 3 Forms */
function renderProletarianForms() {
  const container = document.getElementById('forms-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.proletarianStruggleForms.map((form, idx) => `
    <div class="glass-card form-card ${idx === 1 ? 'highest' : ''}">
      <span style="font-size: 0.75rem; font-weight: 700; color: ${idx === 1 ? '#ef4444' : '#f59e0b'}; text-transform: uppercase; letter-spacing: 0.05em;">${form.badge}</span>
      <h3 style="color: #fff; font-size: 1.25rem; margin: 0.5rem 0;">${form.name}</h3>
      <p style="font-size: 0.92rem; color: #cbd5e1; margin-bottom: 1rem;">${form.desc}</p>
      <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 8px; border-left: 2px solid ${idx === 1 ? '#ef4444' : '#f59e0b'}; font-size: 0.85rem; color: #94a3b8;">
        <strong>Vai trò:</strong> ${form.role}
      </div>
    </div>
  `).join('');
}

/* 6. Render Vietnam Features */
function renderVietnamFeatures() {
  const container = document.getElementById('vn-features-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.vietnamFeatures.map(item => `
    <div class="vn-card">
      <div class="vn-card-title"><i class="fas fa-flag"></i> ${item.title}</div>
      <p style="font-size: 0.92rem; color: #cbd5e1;">${item.desc}</p>
    </div>
  `).join('');
}

/* 7. Struggle Tabs Toggle */
function initStruggleTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

/* 8. Mindmap Initialization */
let mindmapInstance = null;
function initMindmap() {
  mindmapInstance = new MindmapEngine('mindmap-wrapper', 'mindmap-svg', APP_DATA.mindmapData);

  document.getElementById('mm-zoom-in')?.addEventListener('click', () => mindmapInstance.zoomIn());
  document.getElementById('mm-zoom-out')?.addEventListener('click', () => mindmapInstance.zoomOut());
  document.getElementById('mm-reset')?.addEventListener('click', () => mindmapInstance.resetView());
}

/* 9. Flashcards Render & Logic */
function renderFlashcards() {
  const container = document.getElementById('flashcards-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.flashcards.map(card => `
    <div class="flashcard" onclick="this.classList.toggle('flipped')">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <span style="font-size: 0.75rem; color: #f59e0b; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Thuật ngữ / Câu hỏi</span>
          <h4 style="font-size: 1.1rem; line-height: 1.4;">${card.term}</h4>
          <small style="margin-top: 1.5rem; color: #64748b;"><i class="fas fa-sync-alt"></i> Bấm để lật thẻ</small>
        </div>
        <div class="flashcard-back">
          <span style="font-size: 0.75rem; color: #6ee7b7; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Định nghĩa / Đáp án</span>
          <p style="font-size: 0.92rem; line-height: 1.6;">${card.definition}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* 10. Quiz Engine Logic */
let currentQuestionIndex = 0;
let userScore = 0;
let answered = false;

function initQuizEngine() {
  renderQuestion();
}

function renderQuestion() {
  const qData = APP_DATA.quizQuestions[currentQuestionIndex];
  const qNumEl = document.getElementById('quiz-num');
  const qTextEl = document.getElementById('quiz-question');
  const optionsEl = document.getElementById('quiz-options');
  const explanationEl = document.getElementById('quiz-explanation');
  const nextBtn = document.getElementById('quiz-next-btn');

  if (!qData || !qTextEl) return;

  answered = false;
  explanationEl.style.display = 'none';
  nextBtn.style.display = 'none';

  qNumEl.textContent = `Câu ${currentQuestionIndex + 1} / ${APP_DATA.quizQuestions.length}`;
  qTextEl.textContent = qData.question;

  optionsEl.innerHTML = qData.options.map((opt, idx) => `
    <button class="quiz-option-btn" onclick="checkQuizAnswer(${idx})">
      <span style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700;">${String.fromCharCode(65 + idx)}</span>
      ${opt}
    </button>
  `).join('');
}

function checkQuizAnswer(selectedIdx) {
  if (answered) return;
  answered = true;

  const qData = APP_DATA.quizQuestions[currentQuestionIndex];
  const optionBtns = document.querySelectorAll('.quiz-option-btn');
  const explanationEl = document.getElementById('quiz-explanation');
  const scoreEl = document.getElementById('quiz-score');
  const nextBtn = document.getElementById('quiz-next-btn');

  if (selectedIdx === qData.answer) {
    optionBtns[selectedIdx].classList.add('correct');
    userScore += 10;
    playBeepSound(600, 0.15); // Audio feedback
  } else {
    optionBtns[selectedIdx].classList.add('incorrect');
    optionBtns[qData.answer].classList.add('correct');
    playBeepSound(250, 0.25);
  }

  scoreEl.textContent = `Điểm: ${userScore}`;
  explanationEl.innerHTML = `<strong>Giải thích:</strong> ${qData.explanation}`;
  explanationEl.style.display = 'block';

  if (currentQuestionIndex < APP_DATA.quizQuestions.length - 1) {
    nextBtn.textContent = "Câu kế tiếp →";
  } else {
    nextBtn.textContent = "Xem kết quả chung cuộc 🎉";
  }
  nextBtn.style.display = 'inline-flex';
}

function nextQuizQuestion() {
  if (currentQuestionIndex < APP_DATA.quizQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showFinalQuizResult();
  }
}

function showFinalQuizResult() {
  const quizCard = document.getElementById('quiz-card-body');
  if (!quizCard) return;

  const maxScore = APP_DATA.quizQuestions.length * 10;
  const percentage = Math.round((userScore / maxScore) * 100);

  quizCard.innerHTML = `
    <div style="text-align: center; padding: 2rem 0;">
      <div style="font-size: 3.5rem; margin-bottom: 1rem;">🏆</div>
      <h3 style="font-size: 1.8rem; color: #fff; font-family: 'Space Grotesk', sans-serif;">Hoàn thành Bài Trắc Nghiệm!</h3>
      <p style="color: #94a3b8; margin: 0.5rem 0 1.5rem;">Bạn đã nắm vững lý luận Giai cấp & Đấu tranh giai cấp</p>
      
      <div style="font-size: 3rem; font-weight: 800; color: #f59e0b; font-family: 'Space Grotesk', sans-serif;">
        ${userScore} / ${maxScore} <span style="font-size: 1.2rem; color: #94a3b8;">(${percentage}%)</span>
      </div>

      <p style="color: #e2e8f0; max-width: 500px; margin: 1.5rem auto; line-height: 1.6;">
        ${percentage >= 80 ? '🌟 Tuyệt vời! Bạn có hiểu biết xuất sắc về kiến thức Triết học Mác - Lênin.' : '👍 Khá tốt! Bạn có thể xem lại sơ đồ tư duy và các thẻ lật để đạt điểm tuyệt đối.'}
      </p>

      <button class="btn btn-primary" onclick="resetQuiz()" style="margin-top: 1rem;">
        <i class="fas fa-redo"></i> Làm lại bài trắc nghiệm
      </button>
    </div>
  `;
}

function resetQuiz() {
  currentQuestionIndex = 0;
  userScore = 0;
  location.reload();
}

/* 11. Audio Feedback using Web Audio API */
function playBeepSound(freq, duration) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Ignore audio restrictions if blocked
  }
}

/* 12. Modal Close Events */
function initModalEvents() {
  const modal = document.getElementById('node-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}
