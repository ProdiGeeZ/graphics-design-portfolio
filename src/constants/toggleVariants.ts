import { cva } from "class-variance-authority"

export const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-500 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-neutral-100 data-[state=on]:text-neutral-900 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:hover:bg-neutral-800 dark:hover:text-neutral-400 dark:data-[state=on]:bg-neutral-800 dark:data-[state=on]:text-neutral-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-neutral-200 bg-transparent shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
      },
      size: {
        default: "h-12 w-12",
        sm: "h-10 w-10",
        lg: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);