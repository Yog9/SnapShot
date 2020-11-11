import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import TooltipContent from "./TooltipContent";

const Tooltip = ({ tooltipId }) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  });

  const getTooltipContent = (dataTip) => {
    let coords = JSON.parse(dataTip);
    if (coords !== null) {
      return (
        <TooltipContent coords={coords} />
      );
    } else {
      return ('');
    }
  };

  return (
    <ReactTooltip
        id={tooltipId}
        effect='solid'
        delayHide={300}
        delayUpdate={100}
        getContent={getTooltipContent} />
  );
};

export default Tooltip;