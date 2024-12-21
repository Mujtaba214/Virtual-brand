import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white my-5 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="hover:text-orange-500">Home</a></li>
                            <li><a href="/about" className="hover:text-orange-500">About</a></li>
                            <li><a href="/services" className="hover:text-orange-500">Services</a></li>
                            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>123 Main Street, City, Country</p>
                        <p>Email: <a href="mailto:support@example.com" className="hover:text-orange-500">support@example.com</a></p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 rounded-md w-full bg-gray-800 text-white placeholder-gray-400 mb-4"
                        />
                        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md w-full">Subscribe</button>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="text-center mt-8">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
