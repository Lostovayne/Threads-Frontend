import { cn } from "@/lib/utils";
import { FC, ReactElement } from "react";

import { Button } from "../ui/button";

type ButtonProps = React.ComponentProps<typeof Button>;

interface ButtonUiComponentProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonUiComponent: FC<ButtonUiComponentProps> = ({
  children,
  variant,
  className,
  ...rest
}): ReactElement => {
  return (
    <>
      <Button
        {...rest}
        variant={variant}
        className={cn(
          "h-[2.15rem] w-full rounded-xl text-sm font-semibold",
          className
        )}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonUiComponent;
