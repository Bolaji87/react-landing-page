interface NavItemProps {
  href: string;
  text: string;
}
function NavItem({ href, text }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className="duration-300 font-medium ease-linear hover:text-primary"
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
