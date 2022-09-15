import React from "react";
import './Spacer.scss';

interface SpacerProps {
  text: string;
  type: string;
  onClick: () => void;
}

const Spacer: React.FC<SpacerProps> = (props) => {
  const { text, type, onClick } = props;
  return (
    <div>
      <br></br>
    </div>
  );
};

export default Spacer;
