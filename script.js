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

// REFLECTION:
// 1. I did not use an alert for the member counter because that would only be a one time thing that you would constantly have to click. Along with that, alerts halt everything and prevent you from clicking elsewhere on the page which isn't great.
// 2. When you click the member counter button, it activates the updtRSVP function. This function gets the h3 text (the counter) and sets it to a variable to access later. Then, it gets the cnt variable that is added to by 1. Then, it gets the h3 variable created before and sets the inner HTML to be the cnt number. This is then updated on the page. I used the DOM method of selecting and editing elements.
// 3. For the member counter button, I made sure to apply repetition with the fonts, and alignment. It would look weird and off, and also not user-friendly if the button and counter were touching the edge of the screen. It would be somewhat jarring for the user.