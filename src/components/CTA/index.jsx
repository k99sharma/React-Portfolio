import { Link } from "react-router-dom";

// cta component
export default function CTA() {
  return (
    <div className="cta flex flex-col md:flex-row bg-primary items-center justify-around text-center text-neutral-1 w-5/6 px-5 py-10 rounded-lg">
      <div className="cta__heading font-bold text-3xl">Get In Touch</div>

      <div className="cta__subheading font-semibold text-sm md:text-md lg:text-lg my-8 md:my-5">
        <p>
          Message me if you have any work <br /> opportunities or a cool project
          idea!
        </p>
      </div>

      <div className="cta__button">
        <Link to="/contact">
          <button
            className="border-neutral-1 border-2 font-semibold hover:bg-neutral-1 hover:text-neutral-0 px-5 md:px-10 py-4 rounded-3xl"
            type="button"
            role="navigation"
            aria-label="cta"
          >
            {`Let's do this`}
          </button>
        </Link>
      </div>
    </div>
  );
}
