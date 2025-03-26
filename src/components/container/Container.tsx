import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  py?: 120 | 10;
  className?: string;
}

export const Container = ({ children, py, className }: ContainerProps) => {
  let pyStyle: string = "";

  switch (py) {
    case 120:
      pyStyle = "py-[120px]"
      break;
    case 10:
      pyStyle = "py-2.5"
      break;
  }

  return (
    <section
      className={clsx(
        className,
        py ? pyStyle : "py-[var(--margin-y)]",
        "px-[var(--margin-x)]"
      )}
    >
      {children}
    </section>
  );
};
