import { ReactNode } from "react";

type TPrimaryButtonProps = {
  handleOnClick?: () => void;
  children: ReactNode;
};

export default function PrimaryButton({
  handleOnClick = () => {},
  children,
}: TPrimaryButtonProps) {
  return (
    <button
      className="w-full px-4 py-1 bg-white text-gray-600 text-center rounded-full hover:bg-gray-200 outline-none transition-all ease-out"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
