import React from "react";

import { Flashes } from "@presentation/pages/Flashes";
import { RequiredFieldValidator } from "@validation/RequiredFieldValidator";
import { makeDatabaseWatchFlashes } from "../use-cases/database-watch-flashes";

export const makeFlashes: React.FC = () => {
  return <Flashes validation={new RequiredFieldValidator()} watchFlashes={makeDatabaseWatchFlashes()} />;
};
