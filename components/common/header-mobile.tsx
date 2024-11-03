import { Separator } from "@/components/ui/separator";
import { FC, ReactElement } from "react";

import ButtonUiComponent from "./button-ui";
import ThreadsComponent from "./icons/threads-icon";

interface HeaderComponentProps {
  // Prop types here
}

const HeaderComponent: FC<HeaderComponentProps> = ({}): ReactElement => {
  return (
    <>
      <header className="h-22 hidden flex-col items-center justify-between gap-2 p-2.5 max-lg:flex">
        <div className="size-8">
          <ThreadsComponent />
        </div>
        <div className="flex w-full items-center gap-2">
          <ButtonUiComponent variant={"outline"}>
            Iniciar sesión
          </ButtonUiComponent>
          <ButtonUiComponent className="dark:bg-black" variant={"default"}>
            Abrir app
          </ButtonUiComponent>
        </div>
      </header>
      <Separator className="my-1 hidden w-full max-lg:block" />
    </>
  );
};

export default HeaderComponent;
