import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    type: "",
    date: "",
    time: "",
    guests: 2,
    name: "",
    email: "",
  });

  if (!isOpen) return null;

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-xl bg-winery-dark/80">
      <div className="w-full max-w-2xl bg-winery-green border border-winery-gold/20 p-6 md:p-10 relative animate-slide-up shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-winery-cream/50 hover:text-winery-gold transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="mb-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-winery-gold mb-2 block">
            Step {step} of 3
          </span>
          <h2 className="text-3xl font-serif italic">
            Book Your Tasting Experience
          </h2>
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-winery-cream/60 mb-3 block">
                Select Experience
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Heritage Tour",
                  "Blind Tasting",
                  "Cellar Reserve",
                  "Sunset Picnic",
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setForm({ ...form, type })}
                    className={`p-6 border text-left transition-all ${form.type === type ? "border-winery-gold bg-winery-gold/10" : "border-winery-cream/10 hover:border-winery-gold/40"}`}
                  >
                    <span className="text-sm font-serif italic text-winery-cream">
                      {type}
                    </span>
                  </button>
                ))}
              </div>
            </label>
            <button
              disabled={!form.type}
              onClick={nextStep}
              className="w-full py-4 bg-winery-gold text-winery-dark text-xs uppercase tracking-[0.2em] font-bold mt-8 disabled:opacity-30 rounded-full"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-winery-cream/60 mb-2 block">
                  Date
                </span>
                <input
                  type="date"
                  className="w-full bg-transparent border border-winery-cream/20 p-3 outline-none focus:border-winery-gold text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-winery-cream/60 mb-2 block">
                  Time
                </span>
                <select className="w-full bg-transparent border border-winery-cream/20 p-3 outline-none focus:border-winery-gold text-sm appearance-none">
                  <option>10:00</option>
                  <option>14:00</option>
                  <option>16:00</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-winery-cream/60 mb-2 block">
                Number of Guests
              </span>
              <input
                type="number"
                min="1"
                max="12"
                defaultValue="2"
                className="w-full bg-transparent border border-winery-cream/20 p-3 outline-none focus:border-winery-gold text-sm"
              />
            </label>
            <div className="flex gap-4">
              <button
                onClick={prevStep}
                className="flex-1 py-4 border border-winery-gold/20 text-winery-gold text-xs uppercase tracking-widest rounded-full"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="flex-1 py-4 bg-winery-gold text-winery-dark text-xs uppercase tracking-widest font-bold rounded-full"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in text-center py-10">
            <svg
              className="w-16 h-16 text-winery-gold mx-auto mb-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-serif italic">
              Reservation Confirmed
            </h3>
            <p className="text-sm font-light text-winery-cream/60 max-w-sm mx-auto">
              An invitation with the estate access details has been sent to your
              digital cellar.
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-10 py-4 bg-winery-gold text-winery-dark text-xs uppercase tracking-widest font-bold rounded-full"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
