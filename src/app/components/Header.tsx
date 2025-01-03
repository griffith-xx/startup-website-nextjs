const Header = ({ title }: { title: string }) => {
  return (
    <h1 className="uppercase text-[#74C69D] font-bold mb-4 text-center">
      {title}
    </h1>
  );
};

export default Header;
