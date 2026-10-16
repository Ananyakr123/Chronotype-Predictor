const questions = [
    {
      id: 1,
      text: "Approximately what time would you get up if you were entirely free to plan your day?",
      options: [
        { text: "05:00 AM–06:30 AM", score: 5 },
        { text: "06:30 AM–07:45 AM", score: 4 },
        { text: "07:45 AM–09:45 AM", score: 3 },
        { text: "09:45 AM–11:00 AM", score: 2 },
        { text: "11:00 AM–12:00 PM (noon)", score: 1 }
      ]
    },
    {
      id: 7,
      text: "During the first half-hour after you wake up in the morning, how tired do you feel?",
      options: [
        { text: "Very tired", score: 1 },
        { text: "Fairly tired", score: 2 },
        { text: "Fairly refreshed", score: 3 },
        { text: "Very refreshed", score: 4 }
      ]
    },
    {
      id: 10,
      text: "At approximately what time in the evening do you feel tired, and, as a result, in need of sleep?",
      options: [
        { text: "08:00 PM–09:00 PM", score: 5 },
        { text: "09:00 PM–10:15 PM", score: 4 },
        { text: "10:15 PM–12:45 AM", score: 3 },
        { text: "12:45 AM–02:00 AM", score: 2 },
        { text: "02:00 AM–03:00 AM", score: 1 }
      ]
    },
    {
      id: 18,
      text: "At approximately what time of day do you usually feel your best?",
      options: [
        { text: "5–8 AM", score: 5 },
        { text: "8–10 AM", score: 4 },
        { text: "10 AM–5 PM", score: 3 },
        { text: "5–10 PM", score: 2 },
        { text: "10 PM–5 AM", score: 1 }
      ]
    },
    {
      id: 19,
      text: "One hears about “morning types” and “evening types.” Which one of these types do you consider yourself to be?",
      options: [
        { text: "Definitely a morning type", score: 6 },
        { text: "Rather more a morning type than an evening type", score: 4 },
        { text: "Rather more an evening type than a morning type", score: 2 },
        { text: "Definitely an evening type", score: 1 }
      ]
    }
  ];
  
  export default questions;