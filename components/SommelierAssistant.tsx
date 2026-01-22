import React, { useState } from "react";
import { getSommelierAdvice } from "../geminiService";
import { Wine } from "../types";

interface SommelierAssistantProps {
  wine: Wine;
}

const SommelierAssistant: React.FC<SommelierAssistantProps> = ({ wine }) => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    const result = await getSommelierAdvice(wine.name, query);
    setResponse(result || "");
    setLoading(false);
  };

  return (
    <div className="bg-winery-dark/40 border border-winery-gold/20 p-6 md:p-8 mt-12 backdrop-blur-md">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-winery-gold/10 flex items-center justify-center text-winery-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 22s-2-1-2-4-3-4-3-4V5c0-1.1.9-2 2-2V2H5v1c1.1 0 2 .9 2 2v9s0 1-3 4-2 4-2 4h20Z" />
            <path d="M7 8h10" />
          </svg>
        </div>
        <div>
          <h4 className="font-serif italic text-lg">Digital Sommelier</h4>
          <p className="text-[10px] uppercase tracking-widest text-winery-gold/60">
            Expert guidance instantly
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {response && (
          <div className="p-4 bg-winery-cream/5 border-l-2 border-winery-gold animate-fade-in">
            <p className="text-sm font-light leading-relaxed italic text-winery-cream/90">
              {response}
            </p>
          </div>
        )}

        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about pairing or notes..."
            className="w-full bg-transparent border-b border-winery-cream/20 py-3 text-sm focus:border-winery-gold outline-none transition-colors pr-10"
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          />
          <button
            onClick={handleAsk}
            disabled={loading}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-winery-gold hover:text-winery-cream transition-colors disabled:opacity-50"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SommelierAssistant;
