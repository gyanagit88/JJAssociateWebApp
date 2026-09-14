import React from 'react';

interface JagannathLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'light' | 'dark' | 'emblem-only';
  showText?: boolean;
}

/**
 * Option 1: "The Dharmic Scales of Nyaya"
 * Seamless fusion of Lord Jagannath's sacred iconography with the Scales of Justice (Nyaya / Labour Law).
 * - Sacred large round eyes form the twin balanced legal scale pans (Nyaya Chakra)
 * - Forehead Urdhva Pundra / Tilak integrates with the central vertical balance beam of justice
 * - Divine Red Smile serves as the stable base foundation of legal protection
 * - Gold aura and sacred vermilion red touches
 */
export const JagannathLogo: React.FC<JagannathLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showText = true,
}) => {
  const sizeMap = {
    sm: { icon: 'w-9 h-9', text: 'text-sm', sub: 'text-[10px]' },
    md: { icon: 'w-11 h-11', text: 'text-base sm:text-lg', sub: 'text-[11px]' },
    lg: { icon: 'w-14 h-14', text: 'text-xl sm:text-2xl', sub: 'text-xs sm:text-sm' },
    xl: { icon: 'w-20 h-20', text: 'text-2xl sm:text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem: Fusion of Lord Jagannath & Labour Law Scales of Justice */}
      <div
        className={`relative ${currentSize.icon} shrink-0 rounded-xl bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 p-0.5 shadow-md border border-amber-400/40 flex items-center justify-center overflow-hidden group`}
        title="Jay Jagannath Associates - Dharmic Scales of Nyaya & Labour Law"
      >
        {/* Subtle Gold Aura Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-blue-600/15 to-red-500/20 opacity-85 group-hover:opacity-100 transition-opacity" />

        {/* Master Sacred Fusion SVG */}
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full relative z-10 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Halo & Dharma Wheel Boundary */}
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="url(#goldGradOption1)"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            opacity="0.8"
          />
          <circle
            cx="60"
            cy="60"
            r="49"
            stroke="#F59E0B"
            strokeWidth="0.8"
            opacity="0.5"
          />

          {/* ===== 1. LABOUR LAW BALANCE BEAM (HORIZONTAL) ===== */}
          {/* Main top balance arm suspended across the crown */}
          <path
            d="M26 38 L94 38"
            stroke="url(#goldGradOption1)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Balance Beam End Knobs */}
          <circle cx="26" cy="38" r="3" fill="#F59E0B" stroke="#78350F" strokeWidth="0.5" />
          <circle cx="94" cy="38" r="3" fill="#F59E0B" stroke="#78350F" strokeWidth="0.5" />

          {/* ===== 2. CENTRAL PILLAR OF JUSTICE + SACRED FOREHEAD TILAK ===== */}
          {/* Crown Peak / Scale Top Finial */}
          <path
            d="M54 18 Q60 12 66 18 L64 38 L56 38 Z"
            fill="url(#goldGradOption1)"
          />
          {/* Top Pivot Wheel */}
          <circle cx="60" cy="38" r="4.5" fill="#DC2626" stroke="url(#goldGradOption1)" strokeWidth="1.5" />
          <circle cx="60" cy="38" r="2" fill="#FEF08A" />

          {/* Sacred Urdhva Pundra / Tilak forming the central spine */}
          <path
            d="M55 38 L55 64 Q60 70 65 64 L65 38 Z"
            fill="url(#goldGradOption1)"
            opacity="0.9"
          />
          {/* Central Vermilion Red Line (Dharma Pillar) */}
          <path
            d="M58.5 24 L61.5 24 L61.5 60 Q60 62 58.5 60 Z"
            fill="#DC2626"
          />
          <circle cx="60" cy="65" r="2" fill="#DC2626" />

          {/* ===== 3. SUSPENSION CHAINS CONNECTING BEAM TO SCALES / EYES ===== */}
          {/* Left suspension strings */}
          <line x1="26" y1="38" x2="33" y2="49" stroke="url(#goldGradOption1)" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
          <line x1="50" y1="38" x2="47" y2="49" stroke="url(#goldGradOption1)" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
          {/* Right suspension strings */}
          <line x1="70" y1="38" x2="73" y2="49" stroke="url(#goldGradOption1)" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
          <line x1="94" y1="38" x2="87" y2="49" stroke="url(#goldGradOption1)" strokeWidth="1.2" strokeDasharray="1.5 1.5" />

          {/* ===== 4. LORD JAGANNATH SACRED EYES AS THE TWIN SCALES OF JUSTICE ===== */}
          {/* Left Eye / Scale Pan */}
          <g>
            {/* Outer Sacred Red Border / Scale Pan Housing */}
            <circle cx="40" cy="62" r="16" fill="#DC2626" stroke="url(#goldGradOption1)" strokeWidth="1.2" />
            {/* White Radiance Ring */}
            <circle cx="40" cy="62" r="13" fill="#FFFFFF" />
            {/* Black Deep Eye Pupil */}
            <circle cx="40" cy="62" r="7.5" fill="#090D16" />
            {/* Divine Light Spark */}
            <circle cx="42.5" cy="59.5" r="2.3" fill="#FEF08A" />
            {/* Scale Pan Bottom Arch Highlight */}
            <path
              d="M26 66 Q40 80 54 66"
              stroke="url(#goldGradOption1)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.85"
            />
          </g>

          {/* Right Eye / Scale Pan */}
          <g>
            {/* Outer Sacred Red Border / Scale Pan Housing */}
            <circle cx="80" cy="62" r="16" fill="#DC2626" stroke="url(#goldGradOption1)" strokeWidth="1.2" />
            {/* White Radiance Ring */}
            <circle cx="80" cy="62" r="13" fill="#FFFFFF" />
            {/* Black Deep Eye Pupil */}
            <circle cx="80" cy="62" r="7.5" fill="#090D16" />
            {/* Divine Light Spark */}
            <circle cx="82.5" cy="59.5" r="2.3" fill="#FEF08A" />
            {/* Scale Pan Bottom Arch Highlight */}
            <path
              d="M66 66 Q80 80 94 66"
              stroke="url(#goldGradOption1)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.85"
            />
          </g>

          {/* ===== 5. SACRED GOLDEN NOSE & CENTRAL HARMONY ===== */}
          <path
            d="M58 56 Q60 52 62 56 L62 70 Q60 74 58 70 Z"
            fill="url(#goldGradOption1)"
          />

          {/* ===== 6. DIVINE SMILING LIPS & STATUTORY LEGAL FOUNDATION ===== */}
          {/* Sacred Jagannath Divine Smile */}
          <path
            d="M36 82 Q60 102 84 82 Q60 92 36 82 Z"
            fill="#DC2626"
            stroke="url(#goldGradOption1)"
            strokeWidth="1.4"
          />

          {/* Solid Foundation Platform of Law (Dharma Base) */}
          <path
            d="M44 100 L76 100"
            stroke="url(#goldGradOption1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="60" cy="100" r="2.5" fill="#DC2626" />

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradOption1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Corporate Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight leading-none ${
                variant === 'light' ? 'text-white' : 'text-slate-900'
              } ${currentSize.text}`}
            >
              JAY JAGANNATH ASSOCIATES
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[11px] sm:text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wide">
              “We Value Your Business”
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
