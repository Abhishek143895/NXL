export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Nexloom</h3>
            <p className="opacity-60 max-w-sm leading-relaxed">
              Building the future of digital experiences with AI, modern tech, and creative strategies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 opacity-60">
              <li><a href="#services" className="hover:opacity-100 transition-opacity">AI Solutions</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Web Development</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">App Development</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 opacity-60">
              <li><a href="#why-nexloom" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#process" className="hover:opacity-100 transition-opacity">Our Process</a></li>
              <li><a href="#products" className="hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--card-border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-50 text-sm">
            © {new Date().getFullYear()} Nexloom. All rights reserved.
          </p>
          <div className="flex gap-6 opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="Twitter">𝕏</a>
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="LinkedIn">in</a>
            <a href="#" className="hover:opacity-100 transition-opacity" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
