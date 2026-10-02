import { motion } from "framer-motion";
import connectImg from "../../assets/connect.png";
import scheduleImg from "../../assets/schedule.png";
import fulfillFlowImg from "../../assets/fulfillFlowImg.png";

function Shot({ src, className, caption }) {
    return (
        <motion.div
            className={`absolute overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-glow ${className}`}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2 }}
        >
            <img
                src={src}
                alt={caption}
                className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" />

            <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur-glass">
                {caption}
            </div>
        </motion.div>
    );
}

export default function HeroMontage() {
    return (
        <div className="relative h-[290px] w-full md:h-[320px]">
            {/* Pink glow */}
            <div
                className="absolute -inset-10 rounded-[32px] opacity-60 blur-2xl"
                style={{
                    background:
                        "radial-gradient(circle at 70% 30%, rgba(232,90,174,0.45), transparent 55%)",
                }}
            />

            {/* Outer glass frame */}
            <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-glass shadow-glow" />

            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
            >
                {/* Back card */}
                <Shot
                    src={scheduleImg}
                    caption="Scheduling"
                    className="
            left-[10%] top-[10%]
            h-[64%] w-[78%]
            md:left-[11%] md:top-[9%]
            md:h-[64%] md:w-[76%]
          "
                />

                {/* Front-left card */}
                <Shot
                    src={fulfillFlowImg}
                    caption="FulfillFlow"
                    className="
            hidden md:block
            bottom-[8%] left-[5%]
            h-[46%] w-[54%]"
                />

                {/* Front-right card */}
                <Shot
                    src={connectImg}
                    caption="Connect (Realtime)"
                    className="
            hidden md:block
            right-[5%] top-[6%]
            h-[46%] w-[52%]"
                />
            </motion.div>

            {/* Subtle floating effect */}
            <motion.div
                className="pointer-events-none absolute inset-0"
                animate={{ y: [0, -5, 0] }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}