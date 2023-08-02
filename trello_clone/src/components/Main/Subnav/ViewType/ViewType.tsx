import React from 'react';

interface ViewTypeProps {
  close: () => void;
  open: boolean;
  setActiveBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewType = ({open, close, setActiveBtn}: ViewTypeProps) => {
  return <div>ViewType</div>;
};

export default ViewType;
