import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";

function CTA() {
  return (
    <section className="pb-20 relative">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              Quick Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                own AI{" "}
              </span>
              Business.{" "}
            </h1>
            <Paragraph className="pt-10">
              Leverage Our AI-Powered platform to revolutionalize your digital
              marketing efforts. Get data-driven insights and automation at your
              fingertips.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 text-primary text-white">
              <Button>Get In Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
