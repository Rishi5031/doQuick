import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Support: ['Help Center', 'Safety', 'Terms of Service', 'Privacy Policy'],
    Services: ['Browse Services', 'Become a Provider', 'Pricing', 'Enterprise'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">ServiceHub</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting local service providers with customers who need them. Building trust, one service at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} ServiceHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
