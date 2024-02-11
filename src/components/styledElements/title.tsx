interface TitleProps {
  title: string;
}

export const TitleGeneric = ({ title }: TitleProps) => {
  return (
    <h1 className=" px-2 uppercase -tracking-tighter font-semibold sm:flex sm:justify-center sm:mb-5 sm:text-[24px]">
      {title}
    </h1>
  );
};
