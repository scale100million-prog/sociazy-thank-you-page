import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, Mail, PhoneCall, Building2 } from "lucide-react";

declare global {
  interface Window {
    fbq?: any;
  }
}

export default function App() {
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
      <main className="flex-1 max-w-3xl mx-auto px-4 pt-8 pb-16 sm:pt-12 sm:pb-20 md:py-16 md:pb-24 w-full flex flex-col items-center">
        
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
            Welcome to Sociazy! <span className="inline-block animate-wiggle">🎉</span> You have just taken the first step towards putting your portal inquiries, arrears notices, and tradie follow-ups on autopilot, so your rent roll can grow without your payroll growing with it.
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
                  Our team will reach out to you before the call to confirm your slot. Be ready at your scheduled time.
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
                    <li>The number of doors you currently manage.</li>
                    <li>The software your rent roll runs on, such as PropertyMe, PropertyTree, or Console Cloud.</li>
                    <li>How your team handles portal inquiries, arrears, and tradie jobs today.</li>
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

    </div>
  );
}
