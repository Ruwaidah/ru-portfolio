import { motion } from "framer-motion";
import connectImg from "../../assets/connect.png";
import scheduleImg from "../../assets/schedule.png";
import petsImg from "../../assets/boo.png";

function Shot({ src, className, caption }) {
    return (
        <motion.div
            className={`absolute overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-glow ${className}`}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2 }}
        >
            <img src={src} alt={caption} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" />
            <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur-glass">
                {caption}
            </div>
        </motion.div>
    );
}

export default function HeroMontage() {
    return (
        <div className="relative h-[300px] w-full md:h-[340px]">
            <div
                className="absolute -inset-10 rounded-[32px] opacity-60 blur-2xl"
                style={{
                    background:
                        "radial-gradient(circle at 70% 30%, rgba(232,90,174,0.45), transparent 55%)",
                }}
            />
            <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-glass shadow-glow" />
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
            >
                <Shot
                    src={scheduleImg}
                    caption="Walmart Scheduling"
                    className="left-[8%] top-[12%] h-[66%] w-[84%] md:left-[10%] md:top-[10%] md:h-[68%] md:w-[80%]"
                />
                <Shot
                    src={connectImg}
                    caption="Connect (Realtime)"
                    className="right-[6%] top-[6%] hidden h-[46%] w-[52%] md:block"
                />
                <Shot
                    src={petsImg}
                    caption="Pet Adoption"
                    className="bottom-[6%] left-[6%] hidden h-[44%] w-[52%] md:block"
                />
            </motion.div>
            <motion.div
                className="pointer-events-none absolute inset-0"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}