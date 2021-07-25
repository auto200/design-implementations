import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ComponentLayout: React.FC<{ bgColor: string }> = ({
  children,
  bgColor,
}) => {
  return (
    <>
      <div style={{ backgroundColor: bgColor }}>
        <Link href="/">
          <a
            className={`inline-block m-1 p-1 text-4xl bg-gray-700 rounded-full text-gray-100 font-bold sm:ml-5 sm:mt-5`}
          >
            <AiOutlineArrowLeft />
          </a>
        </Link>
      </div>
      <div
        className={`min-h-screen flex items-center justify-center`}
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </>
  );
};

export default ComponentLayout;
