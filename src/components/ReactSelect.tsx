import React, {useState} from "react";
import Select from "react-select";

interface Props {
  options: any[];
  placeholder: string;
  onChange: (selected: any[]) => void;
  value: any;
}
const ReactSelect: React.FC<Props> = ({ options, placeholder,  onChange, value }) => {
  const [addClass, setAddCalss] = useState<any>(false);
  const handleClass = () => {
    setAddCalss(!addClass);
  };

  const onSelect = (selections: any) => {
    if (selections !== null) {
      onChange(selections)
    } else {
      onChange([])
    }
  }
  return (
    <>
      <div className={`${addClass? "toggleIcone":''} react-select-scroll`}>
        <Select placeholder={placeholder} options={options} onChange={onSelect} value={value} onMenuOpen={handleClass} onMenuClose={handleClass}/>
      </div>
    </> 
  );
};

export default ReactSelect;
