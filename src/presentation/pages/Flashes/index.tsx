import React, { useEffect, useState } from "react";
import { Validation } from "@presentation/protocols/validation";
import { ListFlashes } from "@domain/use-cases/ListFlashes";
import { Flash } from "@domain/models/Flash";

interface Props {
  validation: Validation;
  watchFlashes: ListFlashes;
}

export const Flashes: React.FC<Props> = (props: Props) => {
  const { watchFlashes } = props;

  const [flashList, setFlashList] = useState<Flash[]>([]);

  useEffect(() => {
    watchFlashes.watch(setFlashList)
  }, []);


  return (
    <>
      <h1>Flashes</h1>
      <ul>
        {flashList.map((flash) => (
          <li key={flash.id}>{flash.name}</li>
        ))}
      </ul>
    </>
  );
};

