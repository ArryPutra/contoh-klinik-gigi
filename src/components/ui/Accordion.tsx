"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionEntry {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>(() => {
    const firstId = defaultOpenId ?? items[0]?.id;
    return firstId ? { [firstId]: true } : {};
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("onbeforematch" in HTMLElement.prototype)) {
      container.querySelectorAll('[hidden="until-found"]').forEach((el) => {
        el.removeAttribute("hidden");
        const buttonId = el.getAttribute("aria-labelledby");
        if (buttonId) {
          const btn = document.getElementById(buttonId);
          btn?.setAttribute("aria-expanded", "true");
        }
      });
      return;
    }

    const handleBeforeMatch = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const matchedId = target.getAttribute("data-accordion-id");
      if (matchedId) {
        setOpenIds((prev) => ({ ...prev, [matchedId]: true }));
      }
    };

    container.addEventListener("beforematch", handleBeforeMatch);
    return () => {
      container.removeEventListener("beforematch", handleBeforeMatch);
    };
  }, [items]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      ref={containerRef}
      className="divide-y divide-border border-y border-border"
    >
      {items.map((item) => {
        const isOpen = Boolean(openIds[item.id]);
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="interactive-transition flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-text hover:text-accent"
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className={`accordion-chevron h-5 w-5 shrink-0 text-accent ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              data-accordion-id={item.id}
              {...(!isOpen ? ({ hidden: "until-found" } as Record<string, string>) : {})}
            >
              <div className="pb-5 text-base leading-relaxed text-text-muted">
                {item.category && (
                  <p className="mb-1.5 text-xs font-medium text-accent">
                    {item.category}
                  </p>
                )}
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
