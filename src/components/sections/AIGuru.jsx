// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiSend, FiStar,  } from "react-icons/fi";

// const suggestions = [
//   "Which puja is good for new home?",
//   "Marriage compatibility rituals?",
//   "How to remove negative energy?",
//   "Best puja for wealth and success?",
// ];

// const TypingDots = () => (
//   <div className="flex gap-1 items-center">
//     <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
//     <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:150ms]" />
//     <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:300ms]" />
//   </div>
// );

// export default function AIGuru() {
//   const [messages, setMessages] = useState([
//     {
//       role: "ai",
//       text: "Namaste 🙏 I am your AI Guru. Ask me anything about rituals, astrology, or puja guidance.",
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [thinking, setThinking] = useState(false);

//   const bottomRef = useRef(null);

//   // useEffect(() => {
//   //   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   // }, [messages, loading]);

//   const streamText = (text, callback) => {
//     let i = 0;
//     const interval = setInterval(() => {
//       callback(text.slice(0, i));
//       i++;
//       if (i > text.length) clearInterval(interval);
//     }, 15);
//   };

//   const handleSend = (msg) => {
//     const userText = msg || input;
//     if (!userText.trim()) return;

//     setMessages((prev) => [...prev, { role: "user", text: userText }]);
//     setInput("");
//     setThinking(true);

//     setTimeout(() => {
//       setThinking(false);
//       setLoading(true);

//       const reply = `For "${userText}", I recommend Griha Pravesh Puja combined with Vastu Shanti. This helps balance energy, remove negativity and bring prosperity.`;

//       let streamed = "";

//       setMessages((prev) => [...prev, { role: "ai", text: "" }]);

//       streamText(reply, (val) => {
//         streamed = val;
//         setMessages((prev) => {
//           const updated = [...prev];
//           updated[updated.length - 1] = {
//             role: "ai",
//             text: streamed,
//           };
//           return updated;
//         });
//       });

//       setTimeout(() => setLoading(false), 1200);
//     }, 800);
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-[#050816] px-4 py-24 overflow-hidden">

//       {/* background glow */}
//       <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[160px] top-10 left-10" />
//       <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[160px] bottom-10 right-10" />

//       <div className="relative w-full max-w-3xl">

//         {/* HEADER */}
//         <div className="text-center mb-6">
//           <span className="text-amber-400 tracking-[0.3em] text-xs uppercase flex items-center justify-center gap-2">
//             <FiStar className="animate-pulse" />
//             AI GURU
//           </span>

//           <h2
//             className="mt-4 text-4xl md:text-5xl font-bold text-white"
//             style={{ fontFamily: "Cinzel" }}
//           >
//             Spiritual AI Advisor
//           </h2>

//           <p className="text-slate-400 mt-2 text-sm md:text-base">
//             Real-time personalized ritual guidance
//           </p>
//         </div>

//         {/* SUGGESTIONS */}
//         <div className="flex flex-wrap gap-2 justify-center mb-4">
//           {suggestions.map((s, i) => (
//             <button
//               key={i}
//               onClick={() => handleSend(s)}
//               className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-amber-400/40 transition"
//             >
//               {s}
//             </button>
//           ))}
//         </div>

//         {/* CHAT BOX */}
//         <div className="relative backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[72vh]">

//           {/* messages */}
//           <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">

//             <AnimatePresence>
//               {messages.map((msg, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 10, scale: 0.98 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//                 >
//                   <div
//                     className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-md rounded-2xl ${
//                       msg.role === "user"
//                         ? "bg-amber-400 text-black rounded-br-sm"
//                         : "bg-white/5 text-slate-200 border border-white/10 rounded-bl-sm"
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>

//             {/* AI thinking state */}
//             {thinking && (
//               <div className="flex justify-start">
//                 <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl flex items-center gap-2">
//                   <TypingDots />
//                   <span className="text-xs text-slate-400">AI is thinking...</span>
//                 </div>
//               </div>
//             )}

//             {/* typing indicator */}
//             {loading && !thinking && (
//               <div className="flex justify-start">
//                 <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl">
//                   <TypingDots />
//                 </div>
//               </div>
//             )}

//             <div ref={bottomRef} />
//           </div>

//           {/* input */}
//           <div className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-xl flex gap-3 items-center">

//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask about rituals, astrology, puja..."
//               className="flex-1 bg-white/5 text-white px-4 py-3 rounded-xl outline-none border border-white/10 focus:border-amber-400/50 transition"
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handleSend()}
//               className="bg-amber-400 text-black p-3 rounded-xl shadow-lg"
//             >
//               <FiSend />
//             </motion.button>
//           </div>

          
//         </div>


//       </div>
//     </section>
//   );
// }







import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiStar, FiArrowRight } from "react-icons/fi";

const TypingDots = () => (
  <div className="flex gap-1 items-center">
    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:150ms]" />
    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:300ms]" />
  </div>
);

export default function AIGuru() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Namaste 🙏 I am your AI Guru. Ask me anything about rituals, astrology, puja guidance.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");
  const [cooldown, setCooldown] = useState(false);

  const bottomRef = useRef(null);
  const abortRef = useRef(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // smooth scroll (no input jump)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const stopGeneration = () => {
    setIsStopped(true);
    abortRef.current?.abort();
    setLoading(false);
    setThinking(false);
  };

  const streamText = async (text, aiIndex) => {
    let current = "";

    for (let i = 0; i < text.length; i++) {
      if (isStopped) return;

      current += text[i];

      setMessages((prev) => {
        const updated = [...prev];
        updated[aiIndex] = { role: "ai", text: current };
        return updated;
      });

      await new Promise((r) => setTimeout(r, 10));
    }
  };

  const handleSend = async (msg) => {
    const userText = msg || input;

    if (!userText.trim() || loading || cooldown) return;

    setInput("");
    setIsStopped(false);
    setLastPrompt(userText);

    setCooldown(true);
    setTimeout(() => setCooldown(false), 1500);

    const aiIndex = messages.length + 1;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "ai", text: "" },
    ]);

    setLoading(true);
    setThinking(true);

    try {
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          signal: abortRef.current.signal,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `
You are AI Guru, a Hindu spiritual assistant.

Rules:
- Be calm, spiritual, and respectful
- Give practical step-by-step answers
- Keep it simple

User: ${userText}
                    `,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "🙏 Sorry, I couldn't understand.";

      setThinking(false);
      await streamText(aiText, aiIndex);
    } catch (err) {
      console.error(err);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "ai",
          text: "⚠️ AI Guru is temporarily unavailable.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
      setThinking(false);
    }
  };

  const regenerate = () => {
    if (lastPrompt) handleSend(lastPrompt);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050816] px-4 py-24 overflow-hidden">

      {/* premium glow background */}
      <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[160px] top-10 left-10" />
      <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[160px] bottom-10 right-10" />

      <div className="relative w-full max-w-3xl">

        {/* HEADER */}
        <div className="text-center mb-6">

          <span className="text-amber-400 text-xs uppercase flex items-center justify-center gap-2 tracking-[0.3em]">
            <FiStar className="animate-pulse" />
            AI GURU
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Spiritual AI Advisor
          </h2>

          <p className="text-slate-400 mt-2 text-sm">
            Real-time ritual & astrology guidance
          </p>

          {/* 🔥 PREMIUM ENTRY BUTTON */}
          <motion.a
            href="/ai-guru"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="
              relative inline-flex items-center gap-2 mt-5 px-6 py-2.5
              rounded-2xl text-sm font-medium
              text-amber-200
              bg-white/5
              border border-amber-400/20
              backdrop-blur-xl
              overflow-hidden
            "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 opacity-0 hover:opacity-100 transition" />

            <span className="relative flex items-center gap-2">
              Go To Full Page For More Features
              <FiArrowRight />
            </span>
          </motion.a>

        </div>

        {/* CHAT BOX */}
        <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-3xl flex flex-col h-[72vh] overflow-hidden shadow-2xl">

          {/* messages */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">

            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm rounded-2xl ${
                      msg.role === "user"
                        ? "bg-amber-400 text-black"
                        : "bg-white/5 text-slate-200 border border-white/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {thinking && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl">
                  <TypingDots />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <div className="p-4 border-t border-white/10 flex gap-2 items-center">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about puja, astrology..."
              className="flex-1 bg-white/5 px-4 py-3 rounded-xl text-white outline-none border border-white/10"
            />

            {loading ? (
              <button
                onClick={stopGeneration}
                className="px-4 py-3 text-xs rounded-xl bg-red-500/10 text-red-300 border border-red-500/20"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={() => handleSend()}
                className="bg-amber-400 text-black p-3 rounded-xl"
              >
                <FiSend />
              </button>
            )}

            <button
              onClick={regenerate}
              className="text-xs px-3 text-slate-300"
            >
              ↻
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}