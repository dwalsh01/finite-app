import React from 'react';
import AddIncomeForm from './AddIncomeForm';

const AddIncomeModal: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);
  const handleKeyDown = React.useCallback(
    (ev: KeyboardEvent) => {
      const isEscape = ev.key === 'Escape' || ev.key === 'Esc' || ev.keyCode === 27;
      if (isEscape && toggle) {
        setToggle(prev => !prev);
      }
    },
    [toggle],
  );
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  return (
    <div className="flex items-center justify-center overflow-auto text-base">
      <button
        type="button"
        // className="p-2 mx-2 bg-green-200 hover:bg-green-300 text-green-700 rounded uppercase"
        className="p-2 mx-2 bg-green-200 hover:bg-green-300 text-green-700 rounded uppercase"
        onClick={() => setToggle(prev => !prev)}
      >
        Add Income
      </button>

      <div
        className={`${
          !toggle ? 'opacity-0 pointer-events-none' : 'z-50'
        } modal fixed w-full h-full top-0 left-0 flex items-center justify-center`}
      >
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 z-50" />

        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          {/* eslint-disable-next-line */}
          <div
            className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
            onClick={() => setToggle(prev => !prev)}
            role="button"
            tabIndex={0}
          >
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
            <span className="text-sm">(Esc)</span>
          </div>

          <div className="modal-content py-4 text-left px-6 z-50">
            <div className="flex justify-between items-center pb-3">
              <p className="pl-8 text-2xl font-bold">Add Income</p>
              {/* eslint-disable-next-line */}
              <div
                className="modal-close cursor-pointer z-50"
                onClick={() => setToggle(false)}
                role="button"
                tabIndex={0}
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>
            </div>
            <AddIncomeForm setToggle={setToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncomeModal;
