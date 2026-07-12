import React, { JSX, useState } from "react";

import { SpellsType } from "../page";

interface SlotsProps {
  onChange: (prev: SpellsType) => void;
}

export default function Slots({ onChange }: SlotsProps): JSX.Element {
  const [slots, setSlots] = useState<number[]>(Array(10).fill(0)); // 10 elements initialized to 0

  const handleSlotChange = (value: string, index: number): void => {
    const newSlots = [...slots];
    newSlots[index] = parseInt(value) || 0;
    setSlots(newSlots);
    // @ts-expect-error: Ignore TypeScript error
    onChange((prev: SpellsType) => ({ ...prev, slots: newSlots }));
  };

  return (
    <div className="flex-col border-t-2 p-2 border-gray-300">
      <p className="text-lg font-semibold mb-2">Available Spell Slots</p>
      <div className="flex flex-wrap gap-2">
        {slots.map((slot, index) => (
          <div key={index} className="flex items-center bg-gray-100 p-2 rounded-md space-x-2">
            <p className="text-sm text-gray-900">Level {index}</p>
            <input
              value={slot.toString()}
              onChange={(e) => handleSlotChange(e.target.value, index)}
              type="number"
              className="border border-gray-300 p-2 rounded w-16 bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
