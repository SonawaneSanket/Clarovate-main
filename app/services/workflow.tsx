import React from "react";

export default function WorkflowDiagram({
  image,
  title,
  subtitle,
}: {
  image?: string;
  subtitle?: string;
  title?: string;
}) {
  return (
    <div>
      {title && (
        <div className="blade-bottom-padding grid place-content-center place-items-center gap-2">
          <span className="text-3xl md:text-4xl leading-tight max-w-4xl mx-auto px-3 text-balance text-fire-900 font-medium">
            {title}
          </span>
          {subtitle && (
            <span className="text-base md:text-lg text-black max-w-xl mx-auto px-3 font-normal leading-tight">
              {subtitle}
            </span>
          )}
        </div>
      )}
      <div className="w- grid overflow-hidden">
        <img
          alt={title ?? "workflow diagram for the clatrovate media"}
          src={image}
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </div>
    </div>
  );
}
