# ✨ Chronotype Predictor

<p align="center">
  <strong>Discover your natural rhythm. Understand your energy. Own your day.</strong>
</p>

<p align="center">
  A science-informed chronotype assessment that helps you explore when you may naturally feel most awake, focused, and energetic.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-2026-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS-Custom%20Animations-1572B6?logo=css3" alt="CSS" />
  <img src="https://img.shields.io/badge/Status-In%20Development-purple" alt="Project status" />
</p>

---

## 🌌 About the Project

**Chronotype Predictor** is a web application designed to help users understand their natural sleep–wake preferences through an interactive questionnaire.

Your chronotype describes your tendency to feel alert and energetic at particular times of the day. Understanding these preferences can help you reflect on your daily routines and identify times that may suit focused work, learning, exercise, and rest.

The application combines an interactive quiz with a visually immersive, starry-night interface to make exploring your daily rhythm engaging and intuitive.

## ✨ Features

- 🌙 **Interactive Chronotype Quiz** — Answer questions about your natural sleep and wake preferences.
- 🧠 **Science-Informed Assessment** — Uses the reduced Morningness–Eveningness Questionnaire (rMEQ) as the primary assessment approach.
- 📊 **Score-Based Results** — Calculate a questionnaire score and interpret the corresponding chronotype category.
- ⏰ **Daily Rhythm Insights** — Explore how your preferences may relate to focus, energy, and daily scheduling.
- 🌟 **Animated Starry Background** — Custom CSS animations create a calm, nighttime atmosphere.
- 💫 **Responsive Interface** — Designed to provide a clear experience across different screen sizes.
- 📖 **Educational Information** — Learn what chronotypes are and why individual sleep preferences differ.

## 🦉 Explore Your Chronotype

People differ in their preferred timing of sleep and activity. Chronotype is a spectrum rather than a fixed personality type.

The rMEQ assessment can help classify morningness–eveningness preferences into broad categories:

| Chronotype tendency | General description |
|---|---|
| 🌅 Morning-oriented | Tends to prefer earlier sleep and wake times. |
| ☀️ Intermediate | Falls between strong morning and evening preferences. |
| 🌙 Evening-oriented | Tends to prefer later sleep and wake times. |

*The actual categories and score ranges should follow the scoring rules of the questionnaire implemented in the application.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript (ES6+) | Quiz logic, state management, and score calculation |
| HTML5 | Application structure |
| CSS3 | Styling, gradients, and star animations |
| Vite | Development server and build tooling |
| Git & GitHub | Version control and source code hosting |
| Vercel | Deployment and hosting |

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/Ananyakr123/Chronotype-Predictor.git
```

### 2. Navigate to the project directory

```bash
cd Chronotype-Predictor
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 📁 Project Structure

The application is organized around React components, questionnaire data, and custom styling.

```text
Chronotype-Predictor/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   │   └── questions.js
│   ├── css/
│   │   └── landing.css
│   ├── pages/
│   │   └── Landing.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

*The structure above is illustrative. Adjust it to match the actual folders and filenames in your repository.*

## 🎨 Design Philosophy

The interface uses a midnight-inspired visual theme to complement the project's focus on sleep and circadian rhythms.

- **Dark gradients** create depth and a nighttime atmosphere.
- **Twinkling stars** add subtle movement through CSS keyframes and layered shadows.
- **Interactive elements** make the assessment feel approachable.
- **Minimal layouts** keep the focus on the questions and results.

The goal is to combine a calm visual experience with useful, accessible information about sleep preferences.

## 🧪 Scientific Context

Chronotype reflects individual differences in the timing of sleep and wakefulness. It is influenced by biological, environmental, and behavioral factors.

This project uses the reduced Morningness–Eveningness Questionnaire (rMEQ) as its primary assessment approach. Its interpretation should follow the published questionnaire's scoring and classification guidance.

**Important:** This application is intended for educational and self-reflection purposes. It is not a medical diagnostic tool, does not replace professional sleep assessment, and cannot determine a person's exact circadian phase from a questionnaire alone.

## 🗺️ Future Improvements

- [ ] Add a dedicated results page with clear score interpretation.
- [ ] Improve the animated night sky with shooting stars.
- [ ] Add optional educational content about common chronotype misconceptions.
- [ ] Enhance accessibility and keyboard navigation.
- [ ] Add automated tests for quiz navigation and score calculations.
- [ ] Improve mobile responsiveness and loading performance.
- [ ] Provide personalized, evidence-informed scheduling suggestions.

## 🤝 Contributing

Suggestions, bug reports, and improvements are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Commit your work with a descriptive message.
5. Open a pull request.

## 👩‍💻 Author

**Ananya Kumari**

- GitHub: [@Ananyakr123](https://github.com/Ananyakr123)
- Project: [Chronotype Predictor](https://github.com/Ananyakr123/Chronotype-Predictor)

---

<p align="center">
  🌙 <strong>Understand your rhythm. Make your time work for you.</strong> ✨
</p>