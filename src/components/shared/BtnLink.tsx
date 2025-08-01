interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}
function BtnLink({ href, text, className = "" }: BtnLinkProps) {
  return (
    <a
      href={href}
      className={`px-6 py-3  rounded-full outline-none relative overflow-hidden bg-violet-600 cursor-pointer transform transition duration-300 hover:scale-102 ${className}`}
    >
      <span className="relative z-10 text-white"> {text}</span>
    </a>
  );
}

export default BtnLink;
