import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, Mail, PhoneCall, Building2 } from "lucide-react";

declare global {
  interface Window {
    fbq?: any;
  }
}

export default function App() {
  const handleCommunityClick = () => {
    // Fire Meta Pixel Lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "Lead");
      } catch (err) {
        console.error("Meta Pixel Tracking Error:", err);
      }
    }
    // Redirect to the WhatsApp group in a new tab
    window.open("https://chat.whatsapp.com/GXZQ2Ueqlj7G9KOWT4Rnmn?mode=gi_t", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 font-sans antialiased text-slate-800">
      
      {/* Top Header Navigation - High End Branding */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Elegant Custom Sociazy Logo Icon */}
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-600/20">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900">
              Sociazy
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              Application Received
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl mx-auto px-4 pt-8 pb-48 sm:pt-12 sm:pb-32 md:py-16 md:pb-44 w-full flex flex-col items-center">
        
        {/* Animated Checkmark Emblem */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 sm:mb-6 relative"
        >
          <div className="absolute inset-0 rounded-full bg-emerald-100 blur-xl opacity-50 scale-150"></div>
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-white stroke-[2.5]" />
          </div>
        </motion.div>

        {/* Animated Headline */}
        <motion.h1 
          id="thank-you-headline"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display text-[1.625rem]/[1.15] sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center text-slate-900 mb-4 sm:mb-6"
        >
          Thank You for <span className="whitespace-nowrap">Applying! <span className="inline-block animate-bounce delay-1000">🙏</span></span>
        </motion.h1>

        {/* Core Description Text */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center max-w-2xl mb-6 sm:mb-12"
        >
          <p className="text-sm sm:text-lg text-slate-600 leading-[1.5] sm:leading-relaxed px-3 sm:px-0">
            Welcome to Sociazy! <span className="inline-block animate-wiggle">🎉</span> You have just taken the first step towards turning your tenant and owner conversations into a fully automated WhatsApp system that captures every lead, follows up on time, and stops your team from losing money on missed messages.
          </p>
        </motion.div>

        {/* Note Section Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden"
        >
          {/* Header of the Card */}
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <h2 className="font-display font-medium text-xs tracking-wider text-slate-500 uppercase">
              Important Action Plan & Preparations
            </h2>
          </div>

          {/* Numbered List of Instructions - Premium & Trustworthy Grid */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Item 1 */}
            <div className="flex gap-4 items-start sm:items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-display font-bold text-base flex items-center justify-center">
                1
              </div>
              <div className="flex-1 flex gap-3 items-center">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 hidden sm:block">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  The meeting link has been sent to your email.
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-slate-100"></div>

            {/* Item 2 */}
            <div className="flex gap-4 items-start sm:items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-display font-bold text-base flex items-center justify-center">
                2
              </div>
              <div className="flex-1 flex gap-3 items-center">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 hidden sm:block">
                  <PhoneCall className="w-5 h-5 text-emerald-500" />
                </div>
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  Our team will reach out to you on WhatsApp before the call to confirm your slot. Be ready at your scheduled time.
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-slate-100"></div>

            {/* Item 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-display font-bold text-base flex items-center justify-center">
                3
              </div>
              <div className="flex-1 gap-3 flex items-start">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 mt-0.5 hidden sm:block">
                  <Building2 className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-slate-700 text-sm sm:text-base font-medium mb-2">
                    Before the call, keep handy:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-xs sm:text-sm pl-2 font-normal">
                    <li>The number of properties you currently manage.</li>
                    <li>How you handle tenant and owner messages today.</li>
                  </ul>
                  <p className="text-slate-400 text-xs mt-3 italic font-normal">
                    This will help us show you exactly where your agency is leaking time and money.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Soft Trustworthy Footer text inside page */}
        <p className="text-center text-xs text-slate-400 mt-12 font-normal">
          Sociazy Automated Communication Systems for Property Managers. &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

      </main>

      {/* STICKY FOOTER CTA - WhatsApp Green (#25D366) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] py-4 px-4 sm:px-6">
        <div className="max-w-md mx-auto">
          <button
            id="whatsapp-community-cta"
            onClick={handleCommunityClick}
            className="w-full h-14 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-300 text-white font-sans font-bold text-base sm:text-lg rounded-xl flex items-center justify-center gap-3 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
          >
            {/* Tailored WhatsApp Custom SVG Icon matching exact WhatsApp green styling */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6 flex-shrink-0"
            >
              <path fillRule="evenodd" d="M1.5 12c0-5.799 4.701-10.5 10.5-10.5S22.5 6.201 22.5 12s-4.701 10.5-10.5 10.5a10.457 10.457 0 0 1-5.118-1.326L1.5 22.5l1.326-5.382A10.457 10.457 0 0 1 1.5 12Zm10.5-9a9 9 0 0 0-9 9c0 1.636.438 3.169 1.203 4.496l-.782 3.181 3.181-.782A8.957 8.957 0 0 0 12 21a9 9 0 1 0 0-18Z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Join Our WhatsApp Community
          </button>
        </div>
      </div>

    </div>
  );
}
