const speakersData = [
    {
      name: "Sachin Tendulkar",
      image: "sachintendulkar.png",
      description: "Legendary Indian cricketer and ambassador of the ICC Cricket World Cup 2024."
    },
    {
      name: "Ricky Ponting",
      image: "sachintendulkar.png",
      description: "Former Australian captain and cricket commentator for the 2024 World Cup."
    }
];

function createSpeakersSection() {
    const speakersContainer = document.getElementById("speakers-container");

    speakersData.forEach(speaker => {
      const speakerDiv = document.createElement("div");
      speakerDiv.classList.add("speaker");

      const img = document.createElement("img");
      img.src = speaker.image;
      img.alt = speaker.name;

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("speaker-info");

      const h3 = document.createElement("h3");
      h3.textContent = speaker.name;

      const p = document.createElement("p");
      p.textContent = speaker.description;



      infoDiv.appendChild(h3);
      infoDiv.appendChild(p);

      speakerDiv.appendChild(img);
      speakerDiv.appendChild(infoDiv);

      speakersContainer.appendChild(speakerDiv);
    });
}

window.onload = createSpeakersSection;
