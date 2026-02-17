import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export const VisitCounter = () => {
    const [count, setCount] = useState(12543); // Initial base count
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage for existing count or Initialize
        const storedCount = localStorage.getItem("site_visits");
        let currentCount = storedCount ? parseInt(storedCount) : 12543;

        // Increment count on mount (new session/visit)
        // To prevent incrementing on every refresh, we could use session storage check
        // But for "live" feel, incrementing is fine or we can just increment once per session.
        // Let's increment if it's a new session (using sessionStorage to track session)

        if (!sessionStorage.getItem("visit_counted")) {
            currentCount += Math.floor(Math.random() * 3) + 1; // Random increment 1-3
            localStorage.setItem("site_visits", currentCount.toString());
            sessionStorage.setItem("visit_counted", "true");
        }

        setCount(currentCount);
        setIsVisible(true);
    }, []);

    return (
        <div
            className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/10 
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
        >
            <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-primary-foreground/80">
                <Users className="w-3.5 h-3.5" />
                <span className="tabular-nums tracking-wider">
                    {count.toLocaleString()}
                </span>
                <span className="hidden sm:inline">visitas</span>
            </div>
        </div>
    );
};
