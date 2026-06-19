// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import ChatBubble from "../../components/ai-guru/ChatBubble";
// import ChatInput from "../../components/ai-guru/ChatInput";

// const AIGuru = () => {
//   const [messages, setMessages] = useState([
//     {
//       id: "init",
//       role: "ai",
//       text: "🕉️ Namaste! I am your AI Guru. Ask me about puja, rituals, astrology, muhurat, or mantras.",
//     },
//   ]);

//   const [loading, setLoading] = useState(false);

//   const chatRef = useRef(null);
//   const abortRef = useRef(null);

//   const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

//   // 📜 SYSTEM PROMPT (CORE BRAIN)
//   const SYSTEM_PROMPT = `
// You are "AI Guru", a calm Hindu spiritual guide.

// Rules:
// - Always respond in simple structured steps
// - Be respectful and spiritual
// - If user asks puja → give step-by-step guide
// - If muhurat → give timing guidance
// - If mantra → give mantra + meaning
// - Keep answers short and clear
// `;

//   // 🧠 build last context (memory)
//   const buildContext = () => {
//     return messages.slice(-8).map((m) => ({
//       role: m.role === "ai" ? "model" : "user",
//       parts: [{ text: m.text }],
//     }));
//   };

//   const handleSend = async (text) => {
//     if (!text.trim() || loading) return;

//     const userMessage = {
//       id: Date.now(),
//       role: "user",
//       text,
//     };

//     const aiId = Date.now() + 1;

//     setMessages((prev) => [
//       ...prev,
//       userMessage,
//       { id: aiId, role: "ai", text: "..." },
//     ]);

//     setLoading(true);

//     try {
//       // abort previous request
//       if (abortRef.current) abortRef.current.abort();
//       abortRef.current = new AbortController();

//       const res = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
//         {
//           method: "POST",
//           signal: abortRef.current.signal,
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 role: "user",
//                 parts: [
//                   {
//                     text: SYSTEM_PROMPT + "\n\nUser: " + text,
//                   },
//                 ],
//               },
//               ...buildContext(),
//             ],
//           }),
//         }
//       );

//       const data = await res.json();

//       const aiText =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ Unable to respond right now.";

//       // smooth replace AI placeholder
//       setMessages((prev) =>
//         prev.map((m) =>
//           m.id === aiId ? { ...m, text: aiText } : m
//         )
//       );
//     } catch (err) {
//       setMessages((prev) =>
//         prev.map((m) =>
//           m.role === "ai" && m.text === "..."
//             ? { ...m, text: "⚠️ AI Guru is temporarily unavailable." }
//             : m
//         )
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // auto scroll
//   useEffect(() => {
//     chatRef.current?.scrollTo({
//       top: chatRef.current.scrollHeight,
//       behavior: "smooth",
//     });
//   }, [messages]);

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#050816] via-[#0b1024] to-[#050816] text-white">

//       {/* HEADER */}
//       <div className="sticky top-0 z-10 backdrop-blur-xl bg-[#050816]/70 border-b border-white/10 text-center py-4">
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
//           AI Guru 🕉️
//         </h1>
//         <p className="text-xs text-slate-400">
//           Production Stable Version
//         </p>
//       </div>

//       {/* CHAT */}
//       <div
//         ref={chatRef}
//         className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-3xl mx-auto w-full"
//       >
//         {messages.map((msg) => (
//           <motion.div
//             key={msg.id}
//             initial={{ opacity: 0, y: 6 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <ChatBubble role={msg.role} text={msg.text} />
//           </motion.div>
//         ))}
//       </div>

//       {/* INPUT */}
//       <div className="sticky bottom-0 border-t border-white/10 bg-[#050816]/80 backdrop-blur-xl p-4">
//         <ChatInput onSend={handleSend} loading={loading} />
//       </div>
//     </div>
//   );
// };

// export default AIGuru;







// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import ChatBubble from "../../components/ai-guru/ChatBubble";
// import ChatInput from "../../components/ai-guru/ChatInput";

// const AIGuru = () => {
//   const [messages, setMessages] = useState([
//     {
//       id: "welcome",
//       role: "ai",
//       text: "🙏 Namaste! I am your AI Guru. Ask me about puja, muhurat, rituals, astrology, mantras, or spiritual guidance.",
//     },
//   ]);

//   const [loading, setLoading] = useState(false);

//   const chatRef = useRef(null);
//   const abortRef = useRef(null);

//   const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

//   const sleep = (ms) =>
//     new Promise((resolve) => setTimeout(resolve, ms));

//   // Streaming effect
//   const streamText = async (text, messageId) => {
//     let current = "";

//     for (let i = 0; i < text.length; i++) {
//       current += text[i];

//       setMessages((prev) =>
//         prev.map((msg) =>
//           msg.id === messageId
//             ? { ...msg, text: current }
//             : msg
//         )
//       );

//       await sleep(8);
//     }
//   };

//   const handleSend = async (text) => {
//     if (!text.trim() || loading) return;

//     const userId = Date.now();
//     const aiId = Date.now() + 1;

//     setMessages((prev) => [
//       ...prev,
//       {
//         id: userId,
//         role: "user",
//         text,
//       },
//       {
//         id: aiId,
//         role: "ai",
//         text: "",
//       },
//     ]);

//     setLoading(true);

//     try {
//       if (abortRef.current) {
//         abortRef.current.abort();
//       }

//       abortRef.current = new AbortController();

//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
//         {
//           method: "POST",
//           signal: abortRef.current.signal,
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 role: "user",
//                 parts: [
//                   {
//                     text: `
// You are AI Guru, an expert Hindu spiritual assistant.

// You help users with:
// - Puja guidance
// - Rituals
// - Muhurat
// - Mantras
// - Astrology basics
// - Festival information
// - Spiritual advice

// Rules:
// - Be respectful
// - Use simple language
// - Use bullet points when possible
// - Give step-by-step ritual instructions
// - Keep answers practical and easy to understand

// User Question:
// ${text}
//                     `,
//                   },
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();

//       console.log(data);

//       const aiText =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "🙏 I couldn't understand properly. Please try again.";

//       await streamText(aiText, aiId);
//     } catch (error) {
//       console.error(error);

//       setMessages((prev) =>
//         prev.map((msg) =>
//           msg.id === aiId
//             ? {
//                 ...msg,
//                 text: "⚠️ AI Guru is temporarily unavailable.",
//               }
//             : msg
//         )
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     chatRef.current?.scrollTo({
//       top: chatRef.current.scrollHeight,
//       behavior: "smooth",
//     });
//   }, [messages]);

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#050816] via-[#0b1024] to-[#050816] text-white">

//       {/* Header */}
//       <div className="sticky top-0 z-20 backdrop-blur-xl bg-[#050816]/80 border-b border-white/10 text-center py-4">
//         <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
//           AI Guru 🕉️
//         </h1>

//         <p className="text-slate-400 text-sm mt-1">
//           Your Intelligent Spiritual Assistant
//         </p>
//       </div>

//       {/* Chat */}
//       <div
//         ref={chatRef}
//         className="flex-1 overflow-y-auto px-4 py-6 max-w-4xl mx-auto w-full space-y-4"
//       >
//         {messages.map((msg) => (
//           <motion.div
//             key={msg.id}
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <ChatBubble role={msg.role} text={msg.text} />
//           </motion.div>
//         ))}

//         {loading && (
//           <div className="text-xs text-slate-400 animate-pulse">
//             AI Guru is thinking...
//           </div>
//         )}
//       </div>

//       {/* Input */}
//       <div className="sticky bottom-0 bg-[#050816]/80 backdrop-blur-xl border-t border-white/10 p-4">
//         <ChatInput onSend={handleSend} loading={loading} />
//       </div>
//     </div>
//   );
// };

// export default AIGuru;















import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ChatBubble from "../../components/ai-guru/ChatBubble";
import ChatInput from "../../components/ai-guru/ChatInput";

const copyMessage = async (text) => {
  await navigator.clipboard.writeText(text);
};

const AIGuru = () => {

const [messages, setMessages] = useState(() => {
  const saved = localStorage.getItem("aiGuruChats");

  return saved
    ? JSON.parse(saved)
    : [
        {
          id: "welcome",
          role: "ai",
          text: "🙏 Namaste! I am your AI Guru. Ask me about puja, muhurat, rituals, astrology, mantras, or spiritual guidance.",
        },
      ];
});

  const [loading, setLoading] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");

  const chatRef = useRef(null);
  const abortRef = useRef(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Streaming effect
  const streamText = async (text, messageId) => {
    let current = "";

    // for (let i = 0; i < text.length; i++) {
    //   current += text[i];

    //   setMessages((prev) =>
    //     prev.map((msg) =>
    //       msg.id === messageId
    //         ? { ...msg, text: current }
    //         : msg
    //     )
    //   );

    //   await sleep(8);
    // }

    for (let i = 0; i < text.length; i++) {
  if (isStopped) break;

  current += text[i];

  setMessages((prev) =>
    prev.map((msg) =>
      msg.id === messageId
        ? { ...msg, text: current }
        : msg
    )
  );

  await sleep(8);
}

  };

  const regenerateResponse = () => {
  if (lastPrompt) {
    handleSend(lastPrompt);
  }
};

const stopGeneration = () => {
  setIsStopped(true);

  if (abortRef.current) {
    abortRef.current.abort();
  }

  setLoading(false);
};

  const handleSend = async (text) => {
    if (!text.trim() || loading) return;
    setIsStopped(false);
     setLastPrompt(text);

    const userId = Date.now();
    const aiId = Date.now() + 1;

    setMessages((prev) => [
      ...prev,
      {
        id: userId,
        role: "user",
        text,
      },
      {
        id: aiId,
        role: "ai",
        text: "",
      },
    ]);

    setLoading(true);

    try {
      if (abortRef.current) {
        abortRef.current.abort();
      }

      abortRef.current = new AbortController();

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          signal: abortRef.current.signal,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `
You are AI Guru, an expert Hindu spiritual assistant.

You help users with:
- Puja guidance
- Rituals
- Muhurat
- Mantras
- Astrology basics
- Festival information
- Spiritual advice

Rules:
- Be respectful
- Use simple language
- Use bullet points when possible
- Give step-by-step ritual instructions
- Keep answers practical and easy to understand

User Question:
${text}
                    `,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "🙏 I couldn't understand properly. Please try again.";

      await streamText(aiText, aiId);
    } catch (error) {
      console.error(error);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiId
            ? {
                ...msg,
                text: "⚠️ AI Guru is temporarily unavailable.",
              }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

useEffect(() => {
  const limitedMessages = messages.slice(-100);

  localStorage.setItem(
    "aiGuruChats",
    JSON.stringify(limitedMessages)
  );
}, [messages]);

  const handleQuickAction = (action, message) => {
  handleSend(`${action}: ${message}`);
};

  return (
    
    <div className="min-h-screen pt-20   flex flex-col bg-gradient-to-b from-[#050816] via-[#0b1024] to-[#050816] text-white">
  
      <div className="absolute top-20  w-72 h-72 bg-amber-500/20 blur-[120px] rounded-full" />

<div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Header */}
    
    <div className="sticky top-0 z-10 backdrop-blur-xl bg-[#050816]/70 border-b border-white/10">
      
    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500/20 blur-3xl rounded-full" />

  <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
    <div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
        AI Guru 🕉️
      </h1>
      {/* <p className="text-xs text-slate-400">
  {messages.length - 1} Messages
</p> */}


<div className="flex items-center gap-3 mt-1">
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
    <span className="text-xs text-green-400">
      Online
    </span>
  </div>

  <span className="text-xs text-slate-500">
    {messages.length - 1} Messages
  </span>
</div>

    </div>

    

   <button
  onClick={() =>
    setMessages([
      {
        id: "welcome",
        role: "ai",
        text:
          "🙏 Namaste! I am AI Guru. Ask me about puja, muhurat, rituals, astrology, mantras, or spiritual guidance.",
      },
    ])
  }
  className="
    group relative overflow-hidden
    px-4 py-2 rounded-xl
    text-sm font-medium
    border border-red-500/20
    bg-red-500/10
    text-red-300
    hover:bg-red-500/20
    transition-all duration-300
  "
>
  <span className="relative z-10 flex items-center gap-2">
    🗑️ Clear Chat
  </span>

  {/* glow effect */}
  <span className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />
</button>


  </div>
</div>


{messages.length <= 1 && (
  <div className="max-w-5xl mx-auto px-4 py-6">

    {/* Entire Hero Section */}

    <div className="max-w-5xl mx-auto px-4 py-6">
  <div
    className="
      relative
      overflow-hidden
      rounded-[32px]
      border border-white/10
      bg-gradient-to-br
      from-amber-500/10
      via-white/5
      to-orange-500/10
      backdrop-blur-xl
      p-6 md:p-8
    "
  >
    {/* Glow */}
    <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 blur-3xl rounded-full" />
    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500/20 blur-3xl rounded-full" />







    <div className="relative z-10">
      <span
        className="
          inline-flex
          items-center
          gap-2
          px-3 py-1
          rounded-full
          border border-amber-400/20
          bg-amber-400/10
          text-amber-300
          text-xs
        "
      >
        🟢 AI Guru Online
      </span>

      <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
        Your Personal
        <span className="block bg-gradient-to-r from-amber-300 to-orange-500 text-transparent bg-clip-text">
          Spiritual Assistant
        </span>
      </h2>

      <p className="mt-4 text-slate-400 max-w-2xl">
        Get instant guidance on puja, rituals, mantras,
        astrology, festivals, muhurat, and spiritual practices.
      </p>

      <div className=" hidden sm:flex flex-wrap gap-3 mt-6">
        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
          🕉️ Ritual Guidance
        </div>

        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
          📿 Mantras
        </div>

        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
          ✨ Muhurat
        </div>

        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
          🔮 Astrology
        </div>
      </div>
    </div>


<div className="sm:grid hidden grid-cols-2 md:grid-cols-4 gap-4 mt-6">
  <div className="rounded-3xl border border-amber-500/20 bg-white/5 backdrop-blur-xl p-5">
    <p className="text-xs text-slate-400">📅 Tithi</p>
    <h3 className="text-xl font-bold mt-2">Ekadashi</h3>
    <p className="text-xs text-slate-500 mt-1">
      Auspicious for fasting & devotion
    </p>
  </div>

  <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-5">
    <p className="text-xs text-slate-400">⭐ Nakshatra</p>
    <h3 className="text-xl font-bold mt-2">Rohini</h3>
    <p className="text-xs text-slate-500 mt-1">
      Good for prosperity & growth
    </p>
  </div>

  <div className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-5">
    <p className="text-xs text-slate-400">🌅 Sunrise</p>
    <h3 className="text-xl font-bold mt-2">5:47 AM</h3>
    <p className="text-xs text-slate-500 mt-1">
      Begin prayers before sunrise
    </p>
  </div>

  <div className="rounded-3xl border border-orange-500/20 bg-white/5 backdrop-blur-xl p-5">
    <p className="text-xs text-slate-400">✨ Muhurat</p>
    <h3 className="text-lg font-bold mt-2">
      12:02 - 12:48 PM
    </h3>
    <p className="text-xs text-slate-500 mt-1">
      Abhijit Muhurat
    </p>
  </div>
</div>


  </div>
</div>

  </div>
)}





















{messages.length <= 1 && (
  <div className="max-w-4xl mx-auto w-full px-4 pt-4">

    {/* Quick Prompt Cards */}

<div className="max-w-4xl mx-auto w-full px-4 pt-4">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

    {[
      "🕉️ How to perform Ganesh Puja?",
      "📅 Today's auspicious muhurat",
      "📿 Meaning of Gayatri Mantra",
      "✨ Rituals for positive energy",
    ].map((prompt) => (
      <button
        key={prompt}
        onClick={() => handleSend(prompt)}
        className="
          p-4
          rounded-2xl
          bg-white/5
          border border-white/10
          hover:border-amber-400/40
          hover:bg-white/10
          transition-all
          text-sm
          text-left
        "
      >
        {prompt}
      </button>
    ))}

  </div>
</div>


  </div>
)}







      {/* Chat */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto px-4 py-6 max-w-4xl mx-auto w-full space-y-4"
      >
        
        {messages.map((msg, i) => (
  <motion.div
    key={msg.id || i}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-2"
  >
    <ChatBubble role={msg.role} text={msg.text} />

 {msg.role === "ai" && msg.text && (
  <div className="flex flex-wrap gap-2 ml-2">

    <button
      onClick={() => copyMessage(msg.text)}
      className="
        px-3 py-1
        text-xs
        rounded-full
        bg-emerald-500/10
        border border-emerald-500/20
        hover:border-emerald-400/50
        transition
      "
    >
      📋 Copy
    </button>


    <button
  onClick={regenerateResponse}
  className="
    px-3 py-1
    text-xs
    rounded-full
    bg-purple-500/10
    border border-purple-500/20
    hover:bg-purple-500/20
    transition
  "
>
  🔁 Regenerate
</button>

    {[
      "📖 Explain More",
      "🪜 Give Steps",
      "🕉️ Related Mantra",
      "✨ Benefits",
    ].map((action) => (
          <button
            key={action}
            onClick={() =>
              handleQuickAction(action, msg.text)
            }
            className="
              px-3 py-1
              text-xs
              rounded-full
              bg-white/5
              border border-white/10
              hover:border-amber-400/40
              hover:bg-white/10
              transition
            "
          >
            {action}
          </button>

          
        ))}
      </div>
    )}
  </motion.div>
))}

        {/* {loading && (
          <div className="text-xs text-slate-400 animate-pulse">
            AI Guru is thinking...
          </div>
        )} */}

{loading && (
  <div className="flex items-center gap-2 px-3">
    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.15s]" />
    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.3s]" />

    <span className="text-xs text-slate-400 ml-2">
      AI Guru is thinking...
    </span>
  </div>
)}

      </div>

      {/* Input */}
      {/* <div className="sticky  bottom-0 mt-10 bg-[#050816]/80 backdrop-blur-xl border-t border-white/10 p-3">
        {/* <ChatInput onSend={handleSend} loading={loading} /> */}
        {/* <div className="flex items-center gap-2">
  <ChatInput onSend={handleSend} loading={loading} />
{loading && (
  <button
    onClick={stopGeneration}
    className="
      px-3 py-2
      text-xs
      rounded-xl
      bg-red-500/10
      border border-red-500/20
      text-red-300
      hover:bg-red-500/20
      transition
    "
  >
    Stop
  </button>
)}
</div>
      </div> */} 


<div className="sticky bottom-0 mt-10 bg-[#050816]/80 backdrop-blur-xl border-t border-white/10 p-3">
  
  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">

    {/* Input takes full width */}
    <div className="flex-1">
      <ChatInput onSend={handleSend} loading={loading} />
    </div>

    {/* Buttons row */}
    <div className="flex items-center gap-2 sm:shrink-0">

      {loading && (
        <button
          onClick={stopGeneration}
          className="
            w-full sm:w-auto
            px-4 py-2
            text-xs
            rounded-xl
            bg-red-500/10
            border border-red-500/20
            text-red-300
            hover:bg-red-500/20
            transition
          "
        >
            ⛔ Stop
        </button>
      )}

    </div>

    
  </div>
</div>


    </div>
  );
};

export default AIGuru;



