import { LogoHeader } from "@/components/Logo";

const HeaderBase = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header className="w-full fixed z-10 max-md:border-2 md:border-y-[3px top-0 lg:px-[80px]">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-white bg-opacity-30 backdrop-blur-[5px]"></div>

      <div className="container !p-[18px] md:!pt-[34px] md:!pb-[31px] flex justify-between md:items-center relative z-10">
        <LogoHeader />

        {children}
      </div>
    </header>
  );
};

export default HeaderBase;
