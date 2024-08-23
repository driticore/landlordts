
document.addEventListener('DOMContentLoaded' , () => {
    const div = document.getElementById('footer-container')

    const footer = `
        <div class="footer-content">
            <div class="footer-section about">
                <h3>About Landlordts</h3>
                <p>Landlordts is dedicated to transforming underdeveloped spaces into beautiful and sustainable outdoor environments across South Africa.</p>
            </div>
    
            <div class="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="service.html">Services</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contacts.html">Contact Us</a></li>
                </ul>
            </div>
    
            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p><i class="fas fa-phone-alt"></i> +27 69 500 5932</p>
                <p><i class="fas fa-envelope"></i> info@landlordts.com</p>
            </div>
    
            <div class="footer-section social">
                <h3>Follow Us</h3>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 LandLordts | Designed by Gourney</p>
        </div> `


    div.innerHTML= footer


})