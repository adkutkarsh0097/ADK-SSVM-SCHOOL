/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SaraswatiLogo({ className = '', size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: 'h-10 w-10',
    md: 'h-14 w-14',
    lg: 'h-24 w-24',
    xl: 'h-36 w-36',
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`} id="adk-logo-container">
      {/* Scalable inline SVG vector representing the exact elements in the user-uploaded image:
          Red Shield, Golden Yellow Ribbon "SARASWATI SHISHU VIDYA MANDIR", mortarboard hats, peacock feather, and flame */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md select-none"
        id="saraswati-crest-svg"
      >
        {/* Outer Circular Laurel / Leaves branch accents in crimson red wrapper */}
        <g id="laurel-branches" opacity="0.95">
          {/* Left Leaf branch */}
          <path
            d="M110 320C90 280 80 230 100 180C105 165 110 155 106 140C102 125 90 150 85 165C70 215 80 270 105 315C110 322 113 324 110 320Z"
            fill="#991B1B"
          />
          <path d="M78 180C68 195 62 215 65 235C66 240 70 230 73 220C77 200 84 185 86 175" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
          <path d="M73 218C62 232 58 250 63 268C65 272 68 262 70 252C73 235 77 222 79 214" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
          <path d="M70 255C62 270 60 288 68 304C70 307 72 297 73 288C75 273 76 261 74 253" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
          
          {/* Right Leaf branch */}
          <path
            d="M290 320C310 280 320 230 300 180C295 165 290 155 294 140C298 125 310 150 315 165C330 215 320 270 295 315C290 322 287 324 290 320Z"
            fill="#991B1B"
          />
          <path d="M322 180C332 195 338 215 335 235C334 240 330 230 327 220C323 200 316 185 314 175" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
          <path d="M327 218C338 232 342 250 337 268C335 272 332 262 330 252C327 235 323 222 321 214" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
          <path d="M330 255C338 270 340 288 332 304C330 307 328 297 327 288C325 273 324 261 326 253" stroke="#991B1B" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Decorative Peacock Feather on the top left */}
        <g id="peacock-feather" transform="translate(-10, 10)">
          <path d="M125 150C110 120 90 110 100 80C108 65 125 60 135 75C148 95 135 125 125 150Z" fill="#991B1B" />
          {/* Eye of the feather */}
          <ellipse cx="118" cy="92" rx="12" ry="18" transform="rotate(-30, 118, 92)" fill="#D97706" />
          <ellipse cx="118" cy="92" rx="6" ry="10" transform="rotate(-30, 118, 92)" fill="#EF4444" />
        </g>

        {/* Graduation Cap / Mortarboards on top */}
        <g id="graduation-caps" transform="translate(0, -5)">
          {/* Main Cap */}
          <path d="M200 80L290 115L200 150L110 115L200 80Z" fill="#7F1D1D" stroke="#D97706" strokeWidth="3" />
          <path d="M155 132V155C155 168 175 175 200 175C225 175 245 168 245 155V132" fill="#7F1D1D" stroke="#D97706" strokeWidth="2" />
          {/* Cap tassel */}
          <path d="M110 115V165C108 175 112 180 110 185" stroke="#D97706" strokeWidth="3" fill="none" />
          
          {/* Small Flying Cap on the Right */}
          <g transform="translate(70, 20) scale(0.6)">
            <path d="M200 80L290 115L200 150L110 115L200 80Z" fill="#7F1D1D" />
            <path d="M155 132V155C155 168 175 175 200 175C225 175 245 168 245 155V132" fill="#7F1D1D" />
            <path d="M110 115V170" stroke="#7F1D1D" strokeWidth="3" />
          </g>
        </g>

        {/* Central Shield Component */}
        <g id="shield-structure">
          {/* Red/Crimson Main Shield with Golden Yellow Border */}
          <path
            d="M125 145C125 145 200 140 200 140C200 140 275 145 275 145C275 220 285 295 200 340C115 295 125 220 125 145Z"
            fill="#801010"
            stroke="#F59E0B"
            strokeWidth="8"
            strokeLinejoin="round"
          />

          {/* Sparkles / Sunburst symbol in top half */}
          <path d="M200 160C190 180 170 185 155 190C180 190 195 180 200 160Z" fill="#F59E0B" />
          <path d="M200 160C210 180 230 185 245 190C220 190 205 180 200 160Z" fill="#F59E0B" />
          <circle cx="200" cy="180" r="4" fill="#F59E0B" />
          <path d="M175 175L185 182" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <path d="M225 175L215 182" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <path d="M165 160C180 165 190 162 195 155" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <path d="M235 160C220 165 210 162 205 155" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />

          {/* Main Gold Emblem Ribbon (crossing the center of shield) */}
          <path
            d="M105 200H295V235H105L115 217.5L105 200Z"
            fill="#FBBF24"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          
          {/* "SARASWATI" text on the Yellow Ribbon */}
          <text
            x="200"
            y="224"
            textAnchor="middle"
            fill="#7F1D1D"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="bold"
            fontSize="25"
            letterSpacing="1.5"
          >
            SARASWATI
          </text>

          {/* Sub-texts under ribbon inside the shield */}
          <text
            x="200"
            y="262"
            textAnchor="middle"
            fill="#FBBF24"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="bold"
            fontSize="26"
            letterSpacing="1"
          >
            SHISHU
          </text>
          
          <text
            x="200"
            y="284"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="semibold"
            fontSize="14"
            letterSpacing="0.5"
          >
            VIDYA MANDIR
          </text>

          {/* Sparkles / Diamonds on left and right inside shield */}
          <path d="M155 305L160 300L165 305L160 310L155 305Z" fill="#FBBF24" />
          <path d="M245 305L250 300L255 305L250 310L245 305Z" fill="#FBBF24" />

          {/* Diya / Lamp Flame of Knowledge (Deepak) in bottom of shield */}
          <g transform="translate(188, 290) scale(0.6)">
            {/* Peacock flame representation */}
            <path
              d="M20 45C35 45 40 25 20 0C0 25 5 45 20 45Z"
              fill="#FBBF24"
              className="animate-pulse"
            />
            {/* Inner flame core */}
            <path
              d="M20 42C28 42 30 30 20 12C10 30 12 42 20 42Z"
              fill="#EA580C"
            />
            {/* Diya base */}
            <path
              d="M-5 45H45C45 45 45 58 20 58C-5 58 -5 45 -5 45Z"
              fill="#FBBF24"
              opacity="0.9"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
