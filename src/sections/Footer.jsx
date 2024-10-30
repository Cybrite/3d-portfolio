const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/Cybrite"
            target="_blank"
            rel="noreferrer"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/harsh-verma-1287b72b1"
            target="_blank"
            rel="noreferrer"
            className="w-1/2 h-1/3"
          >
            <img src="/assets/Linkdn.png" alt="linkdin" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/harsh_krv/"
            className="w-1/2 h-1/2"
            target="_blank "
            rel="noreferrer"
          >
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Harsh Kumar Verma. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
