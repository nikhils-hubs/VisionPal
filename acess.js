
//GET MICROPHONE ACCESS
window.onload = askMicrophoneAccess;

async function askMicrophoneAccess() {
  const spinner = document.querySelector('.animate-spin');

  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });

    if (spinner) spinner.innerText = "✅ Mic access granted. Redirecting...";
      window.location.href = 'index.html';
  } catch (err) {
    const message = document.getElementById('micError');
    if (message) message.innerHTML = "❌ Mic access denied.<br>Please refresh to try again.";
    if (spinner) spinner.style.display = "none";
  }
}
// machudye ye chod bkl makichut git hub ki