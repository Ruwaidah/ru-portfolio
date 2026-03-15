import { useState } from "react";

export default function ReasonSelect({ value, onChange }) {
    const [open, setOpen] = useState(false);

    const options = [
        { value: "Project", label: "Project (Build something)" },
        { value: "Job", label: "Job opportunity" },
        { value: "Connect", label: "Connect / Network" },
        { value: "Question", label: "Question" },
        { value: "Other", label: "Other" },
    ];

    const current = options.find((o) => o.value === value)?.label ?? value;

    return (
        <div className="relative">
            <label className="text-sm text-mutetext">Reason</label>

            <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-left text-sm text-text outline-none focus:ring-2 focus:ring-pink-500/30"
            >
                <span className="flex items-center justify-between">
                    {current}
                    <span className="text-mutetext">▾</span>
                </span>
            </button>

            {open && (
                <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-black/70 backdrop-blur-glass shadow-glow">
                    {options.map((o) => (
                        <button
                            key={o.value}
                            type="button"
                            onClick={() => {
                                onChange(o.value);
                                setOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left text-sm transition ${o.value === value
                                ? "bg-pink-500/15 text-pink-200"
                                : "text-text hover:bg-white/10"
                                }`}
                        >
                            {o.label}
                        </button>
                    ))}
                </div>
            )}

            <input type="hidden" name="reason" value={value} />
        </div>
    );
}