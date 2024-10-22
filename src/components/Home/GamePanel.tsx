"use client";

import Link from "next/link";
import PrimaryButton from "../PrimaryButton";

const GamePanel = () => (
  <div className="relative flex flex-col items-between justify-end w-full rounded-lg bg-indigo-950 h-[240px]">
    <div className="p-7 flex justify-between items-center">
      <div>
        <h3>Snake game</h3>
        <div>+10pts</div>
      </div>
      <div>
        <PrimaryButton>
          <Link href="/game">Play</Link>
        </PrimaryButton>
      </div>
    </div>
  </div>
);

export default GamePanel;