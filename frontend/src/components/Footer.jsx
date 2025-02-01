const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="footer-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        
{/* Left section: Social Media */}
<div className="footer1">
  <p className="text-xl font-bold mb-4">INTERESTFUSION</p>
  <div className="social-media-links">
    {/* <div className="flex justify-evenly w-full"> */}
    <div className="lg:flex lg:justify-between lg:w-full">
      <div>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
      </div>
      <div>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
      </div>
      <div>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>


        {/* Middle section: Company Links */}
        <div className="footer2">
          <p className="text-xl font-bold mb-4">Company</p>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Connections</li>
          </ul>
        </div>

        {/* Right section: Contact Us */}
        <div className="footer3">
          <p className="text-xl font-bold mb-4">Contact Us</p>
          <ul className="space-y-2">
            <li>+91 1234567899</li>
            <li>interestfusion@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer4 mt-8 text-center text-sm text-gray-400">
        <p>Copyright © InterestFusion {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
