import React, { useEffect, useState } from "react";
import Select from "react-select";

interface Props {
  options: any[];
  placeholder: string;
}
const ReactSelect: React.FC<Props> = ({ options, placeholder }) => {
  const [addClass, setAddCalss] = useState<any>(false);
  const handleClass = () => {
    setAddCalss(!addClass);
    
  };
  return (
    <>
      <div className={`${addClass? "toggleIcone":''}`}>
        <Select placeholder={placeholder} options={options} onMenuOpen={handleClass} onMenuClose={handleClass}/>
      </div>
    </>
  );
};

export default ReactSelect;
