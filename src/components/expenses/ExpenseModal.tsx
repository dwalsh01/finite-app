import React from 'react';

const ExpenseModal = () => {
  // const [visible] = React.useState(true);

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-400">
      <div className="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
        <div className=" visih-screen w-full absolute flex items-center justify-center bg-modal">
          <div className="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll">
            <div className="mb-4">
              <h1>Welcome!</h1>
            </div>
            <div className="mb-8">
              <p>Ready to get started? Keep scrolling to see some great components.</p>
            </div>
            <div className="flex justify-center">
              <button
                className="flex-no-shrink text-white py-2 px-4 rounded bg-teal hover:bg-teal-dark"
                type="button"
              >
                Esketit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
