const NavFlyOutMenu = () => {
  return (
    <div>
      <FlyoutLink>
        
      </FlyoutLink>
    </div>
  );
};

export const FlyoutLink = ({ children, href, flyOutContent }) => {
  return (
    <div className="relative h-full w-fit">
      <a href={href} className="relative text-white text-sm ml-4">{children}</a>
    </div>
  );
};

export default NavFlyOutMenu;
