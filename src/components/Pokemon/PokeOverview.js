import React, { useState } from "react";

import pokeball_white from "../../assets/img/pokeball-white.png";

const PokeOverview = ({
  flavor_text_sword,
  flavor_text_shield,
  flavor_text_default,
}) => {
  const [version, setVersion] = useState("sword");

  return (
    <>
      {flavor_text_sword == "" && flavor_text_shield == "" ? (
        <h3 className="text-center text-md-left overview">
          {flavor_text_default}
        </h3>
      ) : (
        <>
        </>
      )}
    </>
  );
};

export default PokeOverview;
