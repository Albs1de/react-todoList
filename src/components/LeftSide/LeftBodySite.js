import ButtonLeft from "./ButtonPanel";
import LeftTitle from "./TitlePanelLeft";

const LeftBodySite = ({ titleValue, buttonName, onClick, children }) => {
  return (
    <div className="leftSide">
      <LeftTitle>{titleValue}</LeftTitle>
      <ButtonLeft onClick={onClick}>{buttonName}</ButtonLeft> {children}
    </div>
  );
};

export default LeftBodySite;
