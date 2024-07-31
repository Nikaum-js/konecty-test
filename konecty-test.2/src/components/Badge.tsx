interface BadgeProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export function Badge({ title, isActive = false, onClick }: BadgeProps) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center rounded-full py-4 px-4 h-9 cursor-pointer ${
        isActive ? 'isActive' : 'bg-white'
      }`}
    >
      <p
        className={`font-inter font-medium text-base ${isActive ? 'text-white' : 'text-black'}`}
      >
        {title}
      </p>
    </div>
  );
}
