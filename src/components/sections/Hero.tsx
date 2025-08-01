
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";
import Numbers from "./Numbers";

function Hero() {
  return (
    <section className="relative pt-32 lg:pt-36">
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap:12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Empower Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">
              with AI
            </span>
          </h1>

          <Paragraph className="mt-8">
            Our AI Saas platform seamlessly integrares with your existing
            workflows to deliver real-time insights, intelligent automation, and
            data-driven decision-making. Experience a future where your business
            runs smarter, faster, and more efficiently.
          </Paragraph>

          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <form
                action="#"
                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 5h18M3 5l9 7 9-7M21 5v14H3V5z" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full py-3 outline-none bg-transparent"
                />
                <Button className="min-w-max text-white">
                  <span className=" sm:flex relative z-[5]">Get Started</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </Container>

      <Numbers />
    </section>
  );
}

export default Hero;
