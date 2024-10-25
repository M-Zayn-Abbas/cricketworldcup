const speakersData = [
  {
    name: "Sachin Tendulkar",
    image: "sachintendulkar.png",
    description: "Legendary Indian cricketer and ambassador of the ICC Cricket World Cup 2024.",
    role: "Ambassador",
    team: "India"
  },
  {
    name: "Ricky Ponting",
    image: "rickyponting.png",
    description: "Former Australian captain and cricket commentator for the 2024 World Cup.",
    role: "Commentator",
    team: "Australia"
  }
];

const moreSpeakers = [
  {
    name: "Mithali Raj",
    image: "mithaliraj.png",
    description: "Indian women's cricket star and ICC ambassador.",
    role: "Ambassador",
    team: "India"
  },
  {
    name: "Kevin Pietersen",
    image: "kevinpeterson.png",
    description: "Former England cricketer and 2024 World Cup commentator.",
    role: "Commentator",
    team: "England"
  },
  {
    name: "Michael Clarke",
    image: "michaelclark.png",
    description: "Ex-Australian captain and analyst for the World Cup.",
    role: "Analyst",
    team: "Australia"
  },
  {
    name: "Jacques Kallis",
    image: "jacqueskallis.png",
    description: "South African cricket legend and ICC World Cup analyst.",
    role: "Analyst",
    team: "South Africa"
  }
];

function displaySpeakers(speakers) {
  const speakersContainer = document.getElementById("speakers-container");

  speakers.forEach(speaker => {
    const speakerDiv = document.createElement("div");
    speakerDiv.classList.add("speaker");

    const img = document.createElement("img");
    img.src = speaker.image;
    img.alt = speaker.name;

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("speaker-info");

    const h3 = document.createElement("h3");
    h3.textContent = speaker.name;

    const descriptionP = document.createElement("p");
    descriptionP.textContent = speaker.description;

    const roleTeamP = document.createElement("p");
    roleTeamP.textContent = `${speaker.name} - Role: ${speaker.role}, Team: ${speaker.team}`;
    roleTeamP.style.color = "#ec5242 "; // Set the text color to orange

    infoDiv.appendChild(h3);
    infoDiv.appendChild(roleTeamP);
    infoDiv.appendChild(descriptionP);
    
    speakerDiv.appendChild(img);
    speakerDiv.appendChild(infoDiv);

    speakersContainer.appendChild(speakerDiv);
  });
}

  
  function showMoreSpeakers() {
    displaySpeakers(moreSpeakers);
    document.querySelector(".more-btn").style.display = "none"; // Hide button after showing more speakers
  }
  
  window.onload = () => displaySpeakers(speakersData);