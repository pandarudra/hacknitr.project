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

    hack.innerHTML = "Ransomware";
    o.innerHTML = "Virus";
    t.innerHTML = "Cyber Stalking";
    tr.innerHTML = "Malaware";
  } else if (r >= 3 && r < 6) {
    n = 0;

    hack.innerHTML = "Malware";
    o.innerHTML =
      "Exercise Caution with Emails<br>Be Careful with Downloads<br>Enable Firewall Protection<br>Keep Software Updated";
    t.innerHTML = "Ransomware";
    tr.innerHTML = "Virus";
  } else {
    n = -1;

    hack.innerHTML = "Phishing and Social Engineering Attacks";
    o.innerHTML = "Vishing";
    t.innerHTML = "Malaware";
    tr.innerHTML = "Cyber Stalking";
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
