import React, { useState } from "react";

const DangerousInput = ({ input }) => {
  const [dangerousInput, setDangerous] = useState("");
  console.log("dangerous Input", dangerousInput);

  const generateDangerous = () => {
    return {
      __html: dangerousInput,
    };
  };
  return (
    <div>
      <input
        type="text"
        name="risky"
        placeholder="Danger..."
        onChange={(e) => setDangerous(e.target.value)}
        value={dangerousInput}
      />
      <div dangerouslySetInnerHTML={generateDangerous()} />
    </div>
  );
};

export default DangerousInput;
