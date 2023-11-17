interface TitleProps {
  title: string;
}

export const TitleGeneric = ({ title }: TitleProps) => {
  return (
    <h1 className=" uppercase -tracking-tighter font-semibold sm:flex sm:justify-center sm:text-[24px] sm:mb-4">
      {title}
    </h1>
  );
};
