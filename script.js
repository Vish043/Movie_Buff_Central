 // Trivia Quiz
 function submitQuiz() {
    const form = document.getElementById('trivia-form');
    let correctAnswers = 0;
    const totalQuestions = 5;
  
    // Check answers for question 1
    const q1 = form.q1.value;
    if (q1 === 'correct') {
      correctAnswers++;
    }
  
    // Check answers for question 2
    const q2 = form.q2.value;
    if (q2 === 'correct') {
      correctAnswers++;
    }

    // Check answers for question 3
    const q3 = form.q3.value;
    if (q3 === 'correct') {
       correctAnswers++;
    }

    // Check answers for question 4
    const q4 = form.q4.value;
    if (q4 === 'correct') {
        correctAnswers++;
    }

    // Check answers for question 5
    const q5 = form.q5.value;
    if (q5 === 'correct') {
       correctAnswers++;
    }
 

    // Calculate the score
    const score = (correctAnswers / totalQuestions) * 100;
  
    // Display an alert with the results
    alert(`You got ${correctAnswers} out of ${totalQuestions} correct! Your score: ${score}%`);
  }


// Quote of the Day
const quotes = [
    "No way I'm helping you people put Jesse Pinkman back inside a cage.",
    "Only you can decide what's best for you, Jesse. Not him, not me.",
    "It's a bad carpenter that blames his hammers, yo.",
    "You're really lucky, you know that? You didn't have to wait your whole life to do something special.",
    "I was being metaphorical. It's a terrible philosophy. I've gone where the universe takes me my whole life. It's better to make those decisions for yourself.",
    "If I were your age, starting fresh... Alaska. It's the last frontier. Up there, you can be anything you want.",
    "A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!",
    "Don Eladio is dead. His capos are dead. You have no one left to fight for. Fill your pockets and leave in peace. Or fight me and die!",
    "I will kill your wife, I will kill your son, I will kill your infant daughter.",
    "Just because you shot Jesse James, don’t make you Jesse James.",
    "All I can do is wait … for the cancer to come back.",
    "I’m not in the meth business. I’m in the empire business.",
    "Shut up and let me die in peace.",
    "I watched Jane die. I was there. And I watched her die. I watched her overdose and choke to death. I could have saved her. But I didn’t.",
    "I did it for me. I liked it. I was good at it. And I was really — I was alive.",
    "Say the words. Say you want this. Nothing happens until I hear you say it",
    "Dude, you’re my hero and shit."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').textContent = quotes[randomIndex];
  }

   // Load a random quote when the page loads
   window.onload = generateQuote;
  