type ButtonProps = {
  title: string;
  color: string;
};

const Button = ({ title, color }: ButtonProps) => {
  return (
    <button
      className={`
    rounded-[5px]
    w-[148px] 
    h-[48px]
    flex
    items-center
    justify-center
    text-xl
    ${color}`}
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
