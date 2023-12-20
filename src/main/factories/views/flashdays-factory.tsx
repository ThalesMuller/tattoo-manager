import React from "react";

import { Flashdays } from "@presentation/pages/Flashdays";
import { RequiredFieldValidator } from "@validation/RequiredFieldValidator";

export const makeFlashdays: React.FC = () => {
  return <Flashdays validation={new RequiredFieldValidator()} />;
};
