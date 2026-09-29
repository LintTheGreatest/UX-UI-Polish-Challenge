let i = 0;
function handleRSVP() {
    const message = document.createElement("p");
    if (i == 0) { 
        message.textContent = "You're on the list — see you there!";
        message.classList.add("feedback-message");
        i = 1;
    }
  const rsvpButton = document.getElementById("rsvpBtn");
  rsvpButton.after(message);
}

let cnt = 0;
function updtRSVP() {
    let cntTxt = document.getElementById("RSVPCount");
    cnt = cnt + 1;
    cntTxt.innerHTML = cnt;
}