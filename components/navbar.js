function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navul") {
      x.className += " responsive";
    } else {
      x.className = "navul";
    }
  }


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');

    const header =  `
      <nav class="navbar" >
            <img src="images/logo.png" alt="" width="100" height="100">
            <ul class="navul" id="myTopnav">
                <li><a href="index.html">Home</a></li>
                <div class="dropdown" id="dropdown">
                    <button class="dropbtn" aria-haspopup="true" aria-expanded="false">
                        <a href="service.html">Services</a>
                        <i class="ri-arrow-down-s-line"></i>
                    </button>
                    <div class="dropdown-content">
                        <div>
                            <span>Design Services</span>
                            <ul>
                                <li><a href="service.html#design-services">Landscape Design</a></li>
                                <li><a href="service.html#design-services">Garden Design</a></li>
                            </ul>
                        </div>
                        <div>
                            <span>Installation Services</span>
                            <ul>
                                <li><a href="service.html#installation-services">Plant Installation</a></li>
                                <li><a href="service.html#installation-services">Sod and Turf Installation</a></li>
                                <li><a href="service.html#installation-services">Hardscaping</a></li>
                                <li><a href="service.html#installation-services">Irrigation System Installation</a></li>
                                <li><a href="service.html#installation-services">Water Features</a></li>
                            </ul>
                        </div>
                        <div>
                            <span>Maintenance Services</span>
                            <ul>
                                <li><a href="service.html#maintenance-services">Lawn Care</a></li>
                                 <li><a href="service.html#maintenance-services">Garden Maintenance</a></li>
                                <li><a href="service.html#maintenance-services">Tree and Shrub Care</a></li>
                                <li><a href="service.html#maintenance-services">Irrigation System Maintenance</a></li>
                                <li><a href="service.html#maintenance-services">Pest and Weed Management</a></li>
                            </ul>
                        </div>
                        <div>
                            <span>Specialty Services</span>
                            <ul>
                                <li><a href="service.html#specialty-services">Landscape Lighting</a></li>
                                <li><a href="service.html#specialty-services">Landscape Renovation</a></li>
                                <li><a href="service.html#specialty-services">Commercial Landscaping</a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contacts.html">Contact Us</a></li>
            </ul>
            <div class="social-icons">
                <a href="#"><i class="ri-instagram-line"></i></a>
                <a href="#"><i class="ri-facebook-line"></i></a>
            </div>
            <a href="javascript:void(0);" class="hamburger" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </nav>`;

    nav.innerHTML = header;

    // Highlight the current page link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar ul li a, .dropbtn a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

});
