import clsx from "clsx";
import React from "react";

export default function ComingSoon({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "grid place-content-center place-items-center text-center gap-4 blade-top-padding blade-bottom-padding",
        className
      )}
    >
      <span className="text-2xl font-semibold text-fire-950">
        Coming soon...
      </span>
      <span className="text-base leading-tight max-w-2xl">
        we are still under construction. Stay tuned for updates.
      </span>
    </div>
  );
}
