import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/magicui/toggle";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/useTheme";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center">
            <Toggle
                variant="default"
                size="sm"
                aria-label="Toggle Theme"
                pressed={theme === "dark"}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                <Sun
                    className={cn(
                        "h-4 w-4 transition-transform",
                        theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"
                    )}
                />
                <Moon
                    className={cn(
                        "absolute h-4 w-4 transition-transform",
                        theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
                    )}
                />
            </Toggle>
        </div>
    );
}
