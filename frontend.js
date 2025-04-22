
//GET MICROPHONE ACCESS
// window.onload = askMicrophoneAccess;

// async function askMicrophoneAccess() {
//   const spinner = document.querySelector('.animate-spin');

//   try {
//     await navigator.mediaDevices.getUserMedia({ audio: true });

//     if (spinner) spinner.innerText = "✅ Mic access granted. Redirecting...";
//       window.location.href = 'index.html';
//   } catch (err) {
//     const message = document.getElementById('micError');
//     if (message) message.innerHTML = "❌ Mic access denied.<br>Please refresh to try again.";
//     if (spinner) spinner.style.display = "none";
//   }
// }
  
// main page
async function sendToGroq() {
  const userInput = document.getElementById('userInput').value;
  const responseBox = document.getElementById('responseBox');

  try {
    const res = await fetch('/api/groq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: userInput }],
        model: 'mixtral-8x7b-32768',
        temperature: 0.7,
        max_tokens: 300,
        top_p: 1,
        stream: true,
        stop: null,
      }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      fullResponse += chunk;
      responseBox.value = fullResponse;
    }
  } catch (err) {
    console.error('Error:', err);
    responseBox.value = 'Something went wrong.';
  }
}



  let isExpanded = true;

function togglePanel() {
  const left = document.getElementById("leftPanel");
  const right = document.getElementById("rightPanel");

  if (isExpanded) {
    right.style.display = "none";
    left.style.width = "100%";
  } else {
    right.style.display = "block";
    left.style.width = "70%";
  }

  isExpanded = !isExpanded;
}
