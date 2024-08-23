let slideIndex = 0;

// Select the dynamically created slides
function showSlide(index) {
    const slides = document.querySelectorAll('.slideshow-services'); // Update class name to match your slides
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slideshow-services').length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + document.querySelectorAll('.slideshow-services').length) % document.querySelectorAll('.slideshow-services').length;
    showSlide(slideIndex);
}

const data = [
    {
        title: "Design Services",
        p: "Our landscaping design service offers a comprehensive solution for creating beautiful outdoor spaces.",
        img: "images/landscaping-design.jpg",
    },
    {
        title: "Maintenance Services",
        p: "Our maintenance services ensure that your outdoor spaces remain vibrant and healthy, offering comprehensive care for your lawn, garden, and overall landscape.",
        img: "images/lawn-care.jpg",
    },
    {
        title: "Installation Services",
        p: "We offer professional installation services to bring your landscape vision to life, including planting, hardscaping, and irrigation system setup.",
        img: "images/irrigation-installation.jpg",
    },
    {
        title: "Specialty Services",
        p: "Our specialty services cater to unique landscape needs, including custom lighting, renovation, and commercial landscaping projects, ensuring exceptional results.",
        img: "images/specialty-services.jpg",
    },
];

// Show the first slide initially
document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('services-section');
    let slidesHTML = '';

    data.forEach(item => {
        slidesHTML += `
            <img src="/images/trees.png" alt="tree filler" class="filler" />
            <div class="slideshow-services">
                <img src="${item.img}" alt="${item.title}" />
                <div class="service-content">
                    <h3>${item.title}</h3>
                    <p>${item.p}</p>
                    <a href="contacts.html" class="enquireBtn">Enquire Services</a>
                </div>
            </div>`;
    });

    div.innerHTML = slidesHTML;
    
    showSlide(slideIndex); // Show the first slide after the DOM content is loaded
    
    // Change slide every 30 seconds (30000 milliseconds)
    setInterval(nextSlide, 10000); // Adjusted to 30 seconds
});
