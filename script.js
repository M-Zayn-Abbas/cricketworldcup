// JavaScript data for featured speakers at Cricket World Cup 2024
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
    },
   
  ];
  
  // Function to dynamically create the speakers section
  function createSpeakersSection() {
    const speakersContainer = document.getElementById("speakers-container");
    
    // Loop through each speaker and create the corresponding HTML structure
    speakersData.forEach(speaker => {
      const speakerDiv = document.createElement("div");
      speakerDiv.classList.add("speaker");
  
      // Speaker image
      const img = document.createElement("img");
      img.src = speaker.image;  // You would need actual images in your project directory
      img.alt = speaker.name;
  
      // Speaker info container
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("speaker-info");
  
      // Speaker name
      const h3 = document.createElement("h3");
      h3.textContent = speaker.name;
  
      // Speaker description
      const p = document.createElement("p");
      p.textContent = speaker.description;
  
      // Append elements to the speaker-info div
      infoDiv.appendChild(h3);
      infoDiv.appendChild(p);
  
      // Append the image and info div to the main speaker div
      speakerDiv.appendChild(img);
      speakerDiv.appendChild(infoDiv);
  
      // Append the speaker div to the speakers container
      speakersContainer.appendChild(speakerDiv);
    });
  }
  
  // Call the function to create speakers section when the page loads
  window.onload = createSpeakersSection;
  