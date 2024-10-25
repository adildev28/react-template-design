import React from 'react';


   
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-smooth_green to-custom_black text-white py-10 overflow-x-hidden">
      {/* Footer content */}
      <div className="relative container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        
        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4 text-custom_black">Contact us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="icon">🔗</span> {/* Replace with FontAwesome Icon */}
              <span>Creatix</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="icon">🔗</span> {/* Replace with FontAwesome Icon */}
              <span>Creatix</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="icon">🔗</span> {/* Replace with FontAwesome Icon */}
              <span>Creatix</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="icon">🔗</span> {/* Replace with FontAwesome Icon */}
              <span>Creatix</span>
            </li>
          </ul>
        </div>

        {/* Use Cases Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4  text-custom_black">Use Cases</h3>
          <ul className="space-y-2">
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online Whiteboard</li>
            <li>Team Collaboration</li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4  text-custom_black">Explore</h3>
          <ul className="space-y-2">
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development Features</li>
            <li>Design Systems</li>
            <li>Collaboration Features</li>
            <li>Design Process</li>
            <li>FigJam</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4  text-custom_black">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Best Practices</li>
            <li>Colors</li>
            <li>Color Wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource Library</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm">
        &copy; 2022 Creatix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
