import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-screen-xl px-4 py-2 text-center text-secondary">
      <div>
     <strong> We are not affiliated with Instagram or Meta</strong> <br /> <br />

<span className="text-sm">© 2020-2024 fastvideosave. All rights reserved.</span>
      </div>
      <div className="flex flex-col items-center gap-2 text-center text-xs">
        <div
          aria-label="Disclaimer"
          className="text-sm font-semibold text-black"
        >
        </div>
        {/* <div className="flex items-center gap-1">
          <Link
            href="/terms-of-service"
            className="text-sm text-primary hover:underline"
          >
            Terms of Service
          </Link>
          <span aria-hidden="true">|</span>
          <Link
            href="/privacy-policy"
            className="text-sm text-primary hover:underline"
          >
            Privacy Policy
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
