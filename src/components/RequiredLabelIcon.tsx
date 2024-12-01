import { cn } from "@/lib/utils";
import { AsteriskIcon } from "lucide-react";
import { ComponentPropsWithRef } from "react";

export default function RequiredLabelIcon({
  className,
  ...props
}: ComponentPropsWithRef<typeof AsteriskIcon>) {
  return (
    <AsteriskIcon
      {...props}
      className={cn("text-destructive inline size-3 align-top", className)}
    />
  );
}