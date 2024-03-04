import { LogoHeader } from "@/components/Logo";

const HeaderBase = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className="w-full fixed z-10 top-0 lg:px-[80px]">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-white-header border-[3px] border-[#fff] bg-opacity-30 backdrop-blur-[10px]"></div>

      <div className="container !p-[18px] md:!pt-[34px] md:!pb-[31px] flex justify-between md:items-center relative z-10">
        <LogoHeader />

        {children}
      </div>
    </header>
  );
};

export default HeaderBase;
