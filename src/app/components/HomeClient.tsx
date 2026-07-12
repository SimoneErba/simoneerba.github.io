"use client";

import React, { JSX, useState } from "react";

import Slots from "./Slots";
import SpellBookDisplay from "./SpellBookDisplay";
import SpellInput from "./SpellInput";
import UserSpells from "./UserSpells";

export interface SpellsType {
  slots: number[];
  spells: SpellType[];
}

interface SpellType {
  name: string;
  level: number;
}

export default function HomeClient(): JSX.Element {
  const [spellLevels, setSpellLevels] = useState<SpellsType>({ spells: [], slots: [] });

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-red-700 p-4 rounded-md mb-4">
        <p className="text-2xl font-bold text-white">D&D Spellbook Generator</p>
        <p className="mt-2 text-sm text-red-100">
          Enter the spells your character knows, set your available spell slots, and this tool will build a random
          subset into a usable spellbook.
        </p>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 rounded-md bg-white max-h-[80vh] p-2">
          {/* @ts-expect-error: Ignore TypeScript error */}
          <SpellInput onChange={setSpellLevels} />
          <UserSpells spellLevels={spellLevels} />
          <Slots onChange={setSpellLevels} />
        </div>

        <div className="flex-1 rounded-md bg-white">
          <SpellBookDisplay spellLevels={spellLevels} />
        </div>
      </div>
    </div>
  );
}
