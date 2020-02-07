import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';

const SECTORS = [
  'Entertainment',
  'Health',
  'Food',
  'Education',
  'Beauty',
  'Fashion',
  'Miscellaneous',
];

const LegendColors = {
  Entertainment: 'bg-blue-300',
  Health: 'bg-green-400',
  Food: 'bg-purple-400',
  Education: 'bg-teal-300',
  Beauty: 'bg-yellow-300',
  Fashion: 'bg-pink-400',
  Miscellaneous: 'bg-indigo-400',
};

const LegendCard = styled.button`
  ${tw`w-full w-1/6 my-2 md:my-4 mx-2 rounded-full bg-white max-w-sm overflow-hidden`}
`;

interface RenderOptionsProps {
  setSelectedSector: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSector: null | string;
  expenses: GetExpenses_me_expenses[];
}
const RenderOptions: React.FC<RenderOptionsProps> = ({
  setSelectedSector,
  selectedSector,
  expenses,
}) => {
  const sectorsUsed: any[] = [];
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    if (!sectorsUsed.includes(expense.sectorOfExpense)) {
      sectorsUsed.push(expense.sectorOfExpense);
    }
    if (JSON.stringify(SECTORS.sort()) === JSON.stringify(sectorsUsed.sort())) {
      break;
    }
  }
  return (
    <>
      {selectedSector === null ? (
        sectorsUsed.map((key: string, index) => (
          <LegendCard
            // eslint-disable-next-line
            key={index}
            onClick={() => {
              setSelectedSector(key);
            }}
            type="button"
          >
            <div
              className={`${
                // eslint-disable-next-line
                (LegendColors as any)[`${key}`]
              } w-full text-center text-sm sm:text-md md:text-lg text-gray-800`}
            >
              <div className="p-2 m-auto">{key}</div>
            </div>
          </LegendCard>
        ))
      ) : (
        <LegendCard
          onClick={() => {
            setSelectedSector(null);
          }}
          type="button"
        >
          <div
            className={`${
              // eslint-disable-next-line
              (LegendColors as any)[`${selectedSector}`]
            } w-full text-center text-sm sm:text-md md:text-lg text-gray-800`}
          >
            <div className="p-2 m-auto">{selectedSector}</div>
          </div>
        </LegendCard>
      )}
    </>
  );
};

export default RenderOptions;
