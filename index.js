$(document).ready(function () {
    for (var i = 0; i < 100; i++) {
        // Randomize star size (small: 2px, large: 6-10px)
        var isLargeStar = Math.random() > 0.8; // 20% chance for a large star
        var starSize = isLargeStar ? (6 + Math.random() * 1) : 2; // Large: 6-10px, Small: 2px

        // Generate star with randomized size, position, and animation
        var star = `<div class="star" style="
            animation: twinkle ${((Math.random() * 4) + 4)}s linear ${((Math.random() * 3) + 2)}s infinite;
            top: ${Math.random() * $(window).height()}px; 
            left: ${Math.random() * $(window).width()}px; 
            width: ${starSize}px; 
            height: ${starSize}px;"></div>`;
        
        // Append the star to the solar-system container
        $('.solar-system').append(star);
    }
});

// sun-planets------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const solarSystem = document.querySelector(".solar-system");

    // Sun
    const sun = document.createElement("div");
    sun.classList.add("sun");
    solarSystem.appendChild(sun);

    // Planet data
    const planets = [
        { name: "Mercury", color: "#a9a9a9", size: 10, distance: 100, orbitTime: 4 },
        { name: "Venus", color: "#d2b48c", size: 15, distance: 150, orbitTime: 6 },
        { name: "Earth", color: "#87ceeb", size: 20, distance: 200, orbitTime: 8 },
        { name: "Mars", color: "#ff4500", size: 18, distance: 250, orbitTime: 10 },
        { name: "Jupiter", color: "#d2691e", size: 35, distance: 320, orbitTime: 12 },
        { name: "Saturn", color: "#daa520", size: 30, distance: 400, orbitTime: 14 },
        { name: "Uranus", color: "#40e0d0", size: 25, distance: 480, orbitTime: 16 },
        { name: "Neptune", color: "#1e90ff", size: 22, distance: 560, orbitTime: 18 }
    ];

    // Create planets
    // planets.forEach((planet) => {
    //     const planetElement = document.createElement("div");
    //     planetElement.classList.add("planet");
    //     planetElement.style.backgroundColor = planet.color;
    //     planetElement.style.width = `${planet.size}px`;
    //     planetElement.style.height = `${planet.size}px`;
    //     planetElement.style.animation = `orbit-${planet.name.toLowerCase()} ${planet.orbitTime}s linear infinite`;
    //     planetElement.style.transformOrigin = `${planet.distance}px`;

    //     solarSystem.appendChild(planetElement);
    // });
});
