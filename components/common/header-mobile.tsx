import { FC, ReactElement } from "react";

import ButtonUiComponent from "./button-ui";
import ThreadsComponent from "./icons/threads-icon";

const HeaderComponent: FC = (): ReactElement => {
  return (
    <>
      <header className="h-22 hidden flex-col items-center justify-between gap-3 bg-white p-2.5 pt-3 max-lg:flex">
        <div className="size-8">
          <ThreadsComponent />
        </div>
        <div className="flex w-full items-center gap-2">
          <ButtonUiComponent variant="outline" className="bg-white">
            Iniciar sesión
          </ButtonUiComponent>
          <ButtonUiComponent className="dark:bg-black" variant="default">
            Abrir app
          </ButtonUiComponent>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
