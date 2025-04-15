
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
