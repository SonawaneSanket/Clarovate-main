"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function TextCard({ title, url, excerpt }: any) {
  return (
    <div className="border border-fire-200 bg-fire-100 p-4 flex items-start flex-col rounded-lg shadow-lg">
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
      <div>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => window && window.open(url, "_blank")}
        >
          Read more
          <ExternalLink className="h-2 w-2" />
        </Button>
      </div>
    </div>
  );
}
