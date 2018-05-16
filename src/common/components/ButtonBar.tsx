import * as React from 'react';

// export default class ButtonBar extends React.Component {
// }
// This is the functional component. There is no render() method.
// The function is the render method.

interface Props {
  onNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onPrevious: () => void;
  nextButtonDisabled: boolean;
  previousButtonDisabled: boolean;
}

const ButtonBar = ({ onNext, onPrevious, previousButtonDisabled, nextButtonDisabled }: Props) => {

  const prevProps = {
    className: "btn btn-lg btn-success text-white",
    onClick: onPrevious,
    disabled: previousButtonDisabled
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <button {...prevProps}
        >
          Previous
        </button>
      </div>
      <div className="col text-right">
        <button
          className="btn btn-lg btn-success text-white"
          onClick={onNext}
          disabled={nextButtonDisabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ButtonBar;
