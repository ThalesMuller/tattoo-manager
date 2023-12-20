import React from "react";

import { Flashes } from "@presentation/pages/Flashes";
import { RequiredFieldValidator } from "@validation/RequiredFieldValidator";
import { makeDatabaseListFlashes } from "../use-cases/database-list-flashes-factory";

export const makeFlashes: React.FC = () => {
  return <Flashes validation={new RequiredFieldValidator()} watchFlashes={makeDatabaseListFlashes()} />;
};
