import {
  footerDiv1,
  footerHelp,
  footerCompany,
  socialIcons,
} from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div1 max-md:grid">
        <div className="flex gap-32">
          <div className="flex flex-col gap-3">
            {footerDiv1.map((item) => (
              <div key={item.label}>
                <a href={item.href}>
                  <p className="font-bold text-sm uppercase">{item.label}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="max-lg:hidden">
            <div>
              <h2 className="font-bold mb-4">HELP</h2>
              <div className="grid gap-4">
                {footerHelp.map((items) => (
                  <div>
                    <a href={items.href} key={items.label}>
                      <p className="footer-p">{items.label}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-lg:hidden">
            <div>
              <h2 className="font-bold mb-4">COMPANY</h2>
              <div className="grid gap-4">
                {footerCompany.map((items) => (
                  <div>
                    <a href={items.href} key={items.label}>
                      <p className="footer-p">{items.label}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          {socialIcons.map((items) => (
            <div className="footer-social-div" key={items.name}>
              <a href={items.href}>
                <img src={items.icon} alt={items.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-2 mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="18px"
            height="15px"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="text-xs text-start">
            India | It is a Nike Clone made for learning purpose
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
