/**
 * Custom Trade Icons
 *
 * Blueprint-style icons designed for electrical trade context.
 * These replace generic Lucide icons with industry-specific imagery.
 *
 * Style: Technical drawing aesthetic - 1.5px strokes, angular corners,
 * minimal curves, reminiscent of electrical schematics and blueprints.
 */

import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true as const,
};

/**
 * Duplex Outlet - The universal symbol of electrical work
 * Replaces generic "Zap" for electrical context
 */
export function OutletIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Outer plate */}
      <rect x="4" y="2" width="16" height="20" rx="1" />
      {/* Top receptacle - left slot */}
      <line x1="9" y1="6" x2="9" y2="9" />
      {/* Top receptacle - right slot */}
      <line x1="15" y1="6" x2="15" y2="9" />
      {/* Top receptacle - ground */}
      <circle cx="12" cy="10.5" r="1" strokeWidth="1.25" />
      {/* Bottom receptacle - left slot */}
      <line x1="9" y1="14" x2="9" y2="17" />
      {/* Bottom receptacle - right slot */}
      <line x1="15" y1="14" x2="15" y2="17" />
      {/* Bottom receptacle - ground */}
      <circle cx="12" cy="18.5" r="1" strokeWidth="1.25" />
    </svg>
  );
}

/**
 * SolidBolt - Company logo mark
 *
 * A hex bolt head viewed from above. The single most universal
 * fastener across electrical, HVAC, plumbing, and general trades.
 * Every tradesperson has turned thousands of these.
 *
 * The hexagonal shape is geometric, works at any size, and
 * communicates "solid" construction — fitting for "SolidWork."
 */
export function SolidBoltIcon({ size = 24, className, ...props }: IconProps) {
  // Hex bolt head: regular hexagon centered at 12,12
  // r=10 outer hex, r=5 inner socket
  const outerR = 10;
  const innerR = 4.5;
  const cx = 12;
  const cy = 12;

  function hexPoints(r: number): string {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(' ');
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={true}
      className={className}
      {...props}
    >
      {/* Outer hex — filled with currentColor to create the bolt face */}
      <polygon
        points={hexPoints(outerR)}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {/* Inner hex socket — cut out to background */}
      <polygon
        points={hexPoints(innerR)}
        fill="var(--color-ink, #0d0d0f)"
        stroke="var(--color-ink, #0d0d0f)"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Wire Spool - Represents wire/cable materials
 */
export function WireSpoolIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Spool body */}
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <ellipse cx="12" cy="18" rx="8" ry="3" />
      <line x1="4" y1="6" x2="4" y2="18" />
      <line x1="20" y1="6" x2="20" y2="18" />
      {/* Wire wraps */}
      <ellipse cx="12" cy="10" rx="5" ry="1.5" strokeDasharray="2 2" />
      <ellipse cx="12" cy="14" rx="5" ry="1.5" strokeDasharray="2 2" />
      {/* Center core */}
      <line x1="12" y1="6" x2="12" y2="18" strokeWidth="1" />
    </svg>
  );
}

/**
 * Panel Schedule - Represents electrical panels/breaker boxes
 */
export function PanelIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Panel box */}
      <rect x="3" y="2" width="18" height="20" rx="1" />
      {/* Main breaker */}
      <rect x="6" y="4" width="12" height="3" rx="0.5" />
      {/* Left column breakers */}
      <rect x="6" y="9" width="5" height="2" rx="0.25" />
      <rect x="6" y="12" width="5" height="2" rx="0.25" />
      <rect x="6" y="15" width="5" height="2" rx="0.25" />
      <rect x="6" y="18" width="5" height="2" rx="0.25" />
      {/* Right column breakers */}
      <rect x="13" y="9" width="5" height="2" rx="0.25" />
      <rect x="13" y="12" width="5" height="2" rx="0.25" />
      <rect x="13" y="15" width="5" height="2" rx="0.25" />
      <rect x="13" y="18" width="5" height="2" rx="0.25" />
    </svg>
  );
}

/**
 * Blueprint/Drawing - Represents construction plans
 * Replaces generic FileText
 */
export function BlueprintIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Paper with folded corner */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      {/* Blueprint grid lines */}
      <line x1="8" y1="12" x2="16" y2="12" strokeDasharray="1 1" strokeWidth="1" />
      <line x1="8" y1="15" x2="16" y2="15" strokeDasharray="1 1" strokeWidth="1" />
      {/* Small floor plan sketch */}
      <rect x="8" y="10" width="3" height="2" strokeWidth="1" />
      <rect x="13" y="10" width="3" height="2" strokeWidth="1" />
    </svg>
  );
}

/**
 * Conduit Run - Represents electrical conduit/raceway
 */
export function ConduitIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Main conduit path with 90-degree bend */}
      <path d="M4 8h8a4 4 0 0 1 4 4v8" fill="none" />
      {/* Parallel line for conduit thickness */}
      <path d="M4 11h5a7 7 0 0 1 7 7v2" fill="none" />
      {/* Junction box */}
      <rect x="2" y="7" width="4" height="5" rx="0.5" />
      {/* End fitting */}
      <rect x="14" y="18" width="4" height="4" rx="0.5" />
    </svg>
  );
}

/**
 * Hard Hat - Represents field work
 */
export function HardHatIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Helmet dome */}
      <path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      {/* Brim */}
      <path d="M2 14h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
      {/* Inner suspension hint */}
      <path d="M8 14v-2a4 4 0 0 1 8 0v2" strokeWidth="1" />
    </svg>
  );
}

/**
 * Estimate Document - Represents bids/quotes
 */
export function EstimateIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Document */}
      <rect x="4" y="2" width="16" height="20" rx="1" />
      {/* Dollar sign */}
      <path d="M12 7v10M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2.5-3 2.5-3 1.1-3 2.5 1.3 2.5 3 2.5" />
    </svg>
  );
}

/**
 * Switch Symbol - Single pole switch (electrical schematic style)
 */
export function SwitchIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Base terminal */}
      <circle cx="6" cy="18" r="2" />
      {/* Switch arm */}
      <line x1="7.5" y1="16.5" x2="18" y2="8" />
      {/* Top terminal */}
      <circle cx="18" cy="6" r="2" />
      {/* Connection points */}
      <line x1="2" y1="18" x2="4" y2="18" />
      <line x1="20" y1="6" x2="22" y2="6" />
    </svg>
  );
}

/**
 * Measurement/Takeoff - Represents counting and measuring
 */
export function TakeoffIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Ruler base */}
      <rect x="2" y="6" width="20" height="4" rx="0.5" />
      {/* Ruler marks */}
      <line x1="6" y1="6" x2="6" y2="8" strokeWidth="1" />
      <line x1="10" y1="6" x2="10" y2="9" strokeWidth="1" />
      <line x1="14" y1="6" x2="14" y2="8" strokeWidth="1" />
      <line x1="18" y1="6" x2="18" y2="9" strokeWidth="1" />
      {/* Checkmarks for counted items */}
      <polyline points="5 15 7 17 11 13" strokeWidth="1.5" />
      <polyline points="13 15 15 17 19 13" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Spec Flag - Represents important notes/warnings
 * Replaces generic AlertTriangle
 */
export function SpecFlagIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Flag pole */}
      <line x1="5" y1="4" x2="5" y2="22" />
      {/* Flag */}
      <path d="M5 4h14l-3 5 3 5H5" />
      {/* Exclamation in flag */}
      <line x1="11" y1="7" x2="11" y2="10" strokeWidth="2" />
      <circle cx="11" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Clock/Timer - Styled for technical context
 * Labor hours, time estimates
 */
export function LaborClockIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Clock face */}
      <circle cx="12" cy="12" r="9" />
      {/* Hour marks (cardinal only for cleaner look) */}
      <line x1="12" y1="5" x2="12" y2="6" strokeWidth="2" />
      <line x1="19" y1="12" x2="18" y2="12" strokeWidth="2" />
      <line x1="12" y1="19" x2="12" y2="18" strokeWidth="2" />
      <line x1="5" y1="12" x2="6" y2="12" strokeWidth="2" />
      {/* Hands */}
      <line x1="12" y1="12" x2="12" y2="8" strokeWidth="2" />
      <line x1="12" y1="12" x2="15" y2="14" strokeWidth="2" />
      {/* Center dot */}
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

/**
 * Technical Checkmark - Blueprint style confirmation
 */
export function TechCheckIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Angular checkmark */}
      <polyline points="4 12 9 17 20 6" strokeWidth="2.5" />
    </svg>
  );
}

/**
 * Technical X - Blueprint style rejection/negative
 */
export function TechXIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Angular X */}
      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2.5" />
      <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2.5" />
    </svg>
  );
}

/**
 * Receipt/Expense - Paper receipt for expense tracking
 */
export function ReceiptIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Receipt with torn edge */}
      <path d="M4 2v20l2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 2 1.5V2z" />
      {/* Text lines */}
      <line x1="8" y1="6" x2="16" y2="6" strokeWidth="1" />
      <line x1="8" y1="9" x2="16" y2="9" strokeWidth="1" />
      <line x1="8" y1="12" x2="12" y2="12" strokeWidth="1" />
      {/* Total line */}
      <line x1="8" y1="16" x2="16" y2="16" strokeWidth="2" />
    </svg>
  );
}

/**
 * Compliance Shield - Represents regulatory compliance
 * More technical than generic shield
 */
export function ComplianceIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Shield shape */}
      <path d="M12 2L4 5v6c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V5l-8-3z" />
      {/* Checkmark inside */}
      <polyline points="8 12 11 15 16 9" strokeWidth="2" />
    </svg>
  );
}

/**
 * Pilot/Beta Badge - Represents pilot program status
 */
export function PilotBadgeIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Badge shape */}
      <path d="M12 2l2.4 5.3L20 8l-4 4.2.8 5.8-4.8-2.7-4.8 2.7.8-5.8L4 8l5.6-.7L12 2z" />
    </svg>
  );
}

/**
 * Precision/Target - Represents accuracy and precision
 * More technical than generic target
 */
export function PrecisionIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Crosshair circles */}
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      {/* Crosshair lines */}
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  );
}

/**
 * Simplicity/Clean - Represents no bloat, clean design
 */
export function SimplicityIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Minimal square */}
      <rect x="4" y="4" width="16" height="16" rx="2" />
      {/* Single centered element */}
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/**
 * Team/Crew - Represents trade workers, field crew
 */
export function CrewIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Hard hat 1 (center) */}
      <path d="M8 14c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      <path d="M6 14h12v1.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V14z" />
      {/* Hard hat 2 (left) */}
      <path d="M2 18c0-1.7 1.3-3 3-3s3 1.3 3 3" strokeWidth="1.25" />
      <path d="M1 18h6v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z" strokeWidth="1.25" />
      {/* Hard hat 3 (right) */}
      <path d="M16 18c0-1.7 1.3-3 3-3s3 1.3 3 3" strokeWidth="1.25" />
      <path d="M15 18h6v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z" strokeWidth="1.25" />
    </svg>
  );
}

/**
 * Export/Download - Technical style download
 */
export function ExportIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Document base */}
      <rect x="4" y="4" width="16" height="16" rx="1" />
      {/* Arrow down */}
      <line x1="12" y1="8" x2="12" y2="16" strokeWidth="2" />
      <polyline points="8 13 12 17 16 13" strokeWidth="2" />
    </svg>
  );
}

/**
 * Eye/Visibility - For monitoring, clarity concepts
 */
export function ClarityIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Eye shape */}
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      {/* Pupil */}
      <circle cx="12" cy="12" r="3" />
      {/* Highlight */}
      <circle cx="13.5" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}

/**
 * Lock/Security - Technical padlock
 */
export function SecureLockIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Lock body */}
      <rect x="5" y="11" width="14" height="10" rx="1" />
      {/* Shackle */}
      <path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" />
      {/* Keyhole */}
      <circle cx="12" cy="15" r="1.5" />
      <line x1="12" y1="16.5" x2="12" y2="18" strokeWidth="2" />
    </svg>
  );
}

/**
 * Server/Infrastructure - For hosting, data concepts
 */
export function InfrastructureIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      {...defaultProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      {/* Server rack */}
      <rect x="4" y="2" width="16" height="6" rx="1" />
      <rect x="4" y="10" width="16" height="6" rx="1" />
      <rect x="4" y="18" width="16" height="4" rx="1" />
      {/* LEDs/indicators */}
      <circle cx="7" cy="5" r="1" fill="currentColor" />
      <circle cx="7" cy="13" r="1" fill="currentColor" />
      <circle cx="7" cy="20" r="1" fill="currentColor" />
      {/* Vent lines */}
      <line x1="11" y1="5" x2="17" y2="5" strokeWidth="1" />
      <line x1="11" y1="13" x2="17" y2="13" strokeWidth="1" />
    </svg>
  );
}
