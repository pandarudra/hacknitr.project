let start = document.querySelector(".btns");
let hack = document.querySelector(".hack");
let o = document.querySelector(".o");
let t = document.querySelector(".t");
let tr = document.querySelector(".tr");
let x = document.querySelector(".x");
let r;
let n;
let c;
start.onclick = () => {
  hack.style.visibility = "visible";
  r = Math.floor(Math.random() * 10);
  if (r >= 0 && r < 3) {
    n = 1;

    hack.innerHTML =
      "The laymen users receive an email with a suspicious link. How can they identify and avoid phishing?";
    o.innerHTML = " clicks the mail but not the link sent ";
    t.innerHTML =
      "clicks the link without doble checking the sender's identity ";
    tr.innerHTML = "sends the information after clicking the link";
  } else if (r >= 3 && r < 6) {
    n = 0;

    hack.innerHTML =
      "Imagine you've discovered an unknown device connected to your home network. What steps would you take to investigate and secure your network?";
    o.innerHTML =
      "As a user, describe the procedures you would follow upon discovering an unfamiliar device connected to your home network.";
    t.innerHTML =
      "Share your knowledge on securing a home network and the steps you'd recommend to others facing a similar situation.";
    tr.innerHTML =
      "share your feelings on securing a home and the steps you'd recommend to others facing a similar situation.";
  } else {
    n = -1;

    hack.innerHTML =
      "As a user, your antivirus software has detected a potential threat on your computer. What actions would you take to mitigate the risk and prevent further compromise?";
    o.innerHTML =
      "Share your knowledge on collaborative efforts among users to identify and halt lateral movement by an unauthorized intruder within a network.";
    t.innerHTML =
      "Share your expertise in handling potential threats detected by antivirus software and preventing their escalation on a personal computer.";
    tr.innerHTML =
      "Describe the steps you would follow as a user when your antivirus software flags a potential threat, focusing on mitigating risks and preventing further compromise.";
  }
};
o.onclick = () => {
  c = 1;
  if (c == n) {
    x.innerHTML = "WIN!";
  } else if (c != n) {
    x.innerHTML = "LOST!";
  }
};
t.onclick = () => {
  c = 0;
  if (c == n) {
    x.innerHTML = "WIN!";
  } else if (c != n) {
    x.innerHTML = "LOST!";
  }
};
tr.onclick = () => {
  c = -1;
  if (c == n) {
    x.innerHTML = "WIN!";
  } else if (c != n) {
    x.innerHTML = "LOST!";
  }
};
