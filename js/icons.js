/* Hand-authored icon set. Same stroke, same radius, one accent.
   Inline SVGs use CSS variables so they theme and animate. */
(function () {
  var S = 'var(--stamp)';
  var B = 'var(--blob)';
  function icon(name, body) {
    ICONS[name] =
      '<svg class="ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      body +
      '</svg>';
  }
  var ICONS = {};
  window.ICONS = ICONS;

  icon('about',
    '<circle cx="24" cy="17" r="6.5" fill="' + B + '"/>' +
    '<path d="M11 37.5c1.6-6.4 6.6-9.5 13-9.5s11.4 3.1 13 9.5"/>' +
    '<path d="M33 12.5h8M37 8.5v8" stroke="' + S + '"/>');

  icon('research',
    '<circle cx="20" cy="20" r="9" fill="' + B + '"/>' +
    '<path d="M27 27l8 8"/>' +
    '<path d="M16 20h8M20 16v8" stroke="' + S + '"/>');

  icon('projects',
    '<rect x="8" y="14" width="24" height="28" rx="4" fill="' + B + '"/>' +
    '<path d="M16 10h22a2 2 0 0 1 2 2v24"/>' +
    '<path d="M14 24h12M14 30h8" stroke="' + S + '"/>');

  icon('experience',
    '<rect x="9" y="12" width="30" height="26" rx="5" fill="' + B + '"/>' +
    '<path d="M18 12v-2a6 6 0 0 1 12 0v2"/>' +
    '<path d="M16 25h16" stroke="' + S + '"/>' +
    '<circle cx="24" cy="25" r="2.2" fill="' + S + '" stroke="none"/>');

  icon('writing',
    '<path d="M12 10h18l8 8v20a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z" fill="' + B + '"/>' +
    '<path d="M30 10v8h8"/>' +
    '<path d="M15 26h14M15 32h9" stroke="' + S + '"/>');

  icon('skills',
    '<rect x="7" y="10" width="34" height="8" rx="2" fill="' + B + '"/>' +
    '<rect x="7" y="21" width="34" height="8" rx="2"/>' +
    '<rect x="7" y="32" width="34" height="8" rx="2"/>' +
    '<path d="M12 14h6M12 25h10M12 36h8" stroke="' + S + '"/>');

  icon('education',
    '<path d="M8 20l16-8 16 8-16 8-16-8z" fill="' + B + '"/>' +
    '<path d="M14 23v8c3 3 17 3 20 0v-8"/>' +
    '<path d="M40 20v12" stroke="' + S + '"/>');

  icon('awards',
    '<circle cx="24" cy="20" r="9" fill="' + B + '"/>' +
    '<path d="M18 28l-3 12 9-5 9 5-3-12"/>' +
    '<path d="M20 20l2.4 2.4L28 17" stroke="' + S + '"/>');

  icon('contact',
    '<rect x="7" y="12" width="34" height="24" rx="4" fill="' + B + '"/>' +
    '<path d="M8 14l16 12L40 14"/>' +
    '<circle cx="36" cy="30" r="3.2" fill="' + S + '" stroke="none"/>');

  icon('clauseguard',
    '<rect x="10" y="8" width="22" height="30" rx="3" fill="' + B + '"/>' +
    '<path d="M16 16h10M16 22h10"/>' +
    '<circle cx="33" cy="32" r="7" fill="var(--paper)" />' +
    '<path d="M30 32.5l2 2 4-4.5" stroke="' + S + '"/>');

  icon('arrival',
    '<path d="M6 30h36" stroke="' + S + '"/>' +
    '<path d="M10 30V22h20l8 8" fill="' + B + '"/>' +
    '<path d="M14 22v-6h8v6"/>' +
    '<circle cx="16" cy="34" r="2.4"/><circle cx="32" cy="34" r="2.4"/>' +
    '<path d="M30 14v4M30 12a3 3 0 1 1 0 .1"/>');

  icon('gridpulse',
    '<rect x="8" y="14" width="14" height="20" rx="3" fill="' + B + '"/>' +
    '<path d="M12 34v4M18 34v4M10 38h12"/>' +
    '<path d="M26 28c4 0 8-3 8-8a8 8 0 0 0-8-8" stroke="' + S + '"/>' +
    '<path d="M26 24a4 4 0 0 0 4-4" stroke="' + S + '"/>' +
    '<circle cx="34" cy="34" r="5"/>' +
    '<path d="M34 31.5v5M31.5 34h5" stroke="' + S + '"/>');

  icon('askdata',
    '<rect x="6" y="10" width="20" height="14" rx="6" fill="' + B + '"/>' +
    '<path d="M12 24l-2 6 7-4"/>' +
    '<rect x="24" y="22" width="18" height="16" rx="2"/>' +
    '<path d="M28 28h10M28 32h6" stroke="' + S + '"/>');

  icon('reels',
    '<rect x="16" y="6" width="18" height="30" rx="4" fill="' + B + '"/>' +
    '<rect x="11" y="10" width="18" height="30" rx="4" fill="var(--paper)"/>' +
    '<rect x="6" y="14" width="18" height="28" rx="4"/>' +
    '<path d="M13 26l4 3-4 3z" fill="' + S + '" stroke="none"/>');

  icon('motor',
    '<circle cx="22" cy="24" r="10" fill="' + B + '"/>' +
    '<circle cx="22" cy="24" r="3"/>' +
    '<path d="M22 14V9M22 39v-5M12 24H7M37 24h-5"/>' +
    '<path d="M34 12v24" stroke="' + S + '"/>' +
    '<path d="M34 12h5M34 36h5" stroke="' + S + '"/>');

  icon('cosmos',
    '<circle cx="20" cy="22" r="8" fill="' + B + '"/>' +
    '<path d="M14 20c3 2 8 2 12-1"/>' +
    '<path d="M30 14l8-4v22l-8-4z"/>' +
    '<path d="M34 16v12" stroke="' + S + '"/>');

  icon('fab',
    '<path d="M8 38V20l8-6 8 6v18" fill="' + B + '"/>' +
    '<path d="M24 38V16l8-6 8 6v22"/>' +
    '<path d="M14 38v-6h4v6M30 38v-8h4v8"/>' +
    '<path d="M18 16c2 4 2 4 0 8" stroke="' + S + '"/>');

  icon('gtm',
    '<path d="M10 36V14h8l6 8 6-8h8v22" fill="' + B + '"/>' +
    '<path d="M16 28l4-6 4 3 5-8" stroke="' + S + '"/>');

  icon('protein',
    '<path d="M10 30c4-12 8-12 12 0s8 12 12 0" />' +
    '<circle cx="14" cy="24" r="3" fill="' + B + '"/>' +
    '<circle cx="24" cy="30" r="3" fill="' + S + '" stroke="none"/>' +
    '<circle cx="34" cy="22" r="3" fill="' + B + '"/>');

  icon('tutor',
    '<circle cx="18" cy="16" r="5" fill="' + B + '"/>' +
    '<circle cx="32" cy="18" r="4"/>' +
    '<path d="M8 36c1-6 5-9 10-9s9 3 10 9"/>' +
    '<path d="M28 32c1-4 3-6 6-6 2 0 4 1 5 3" stroke="' + S + '"/>');

  icon('golo',
    '<rect x="16" y="10" width="10" height="18" rx="5" fill="' + B + '"/>' +
    '<path d="M13 16a8 8 0 0 0 16 0"/>' +
    '<path d="M21 26v5M17 31h8"/>' +
    '<circle cx="34" cy="32" r="7"/>' +
    '<path d="M31 32.2l2 2 4-4.5" stroke="' + S + '"/>');

  icon('wildfire',
    '<path d="M24 40c8 0 12-6 12-12 0-8-8-12-8-20-6 6-12 10-12 18 0 4 2 6 4 6 0-4 4-6 4-10 4 4 6 8 6 12 0 3-2 6-6 6z" fill="' + B + '"/>' +
    '<path d="M8 40h32" stroke="' + S + '"/>');

  icon('ra',
    '<rect x="18" y="8" width="12" height="20" rx="6" fill="' + B + '"/>' +
    '<path d="M18 20H12a6 6 0 0 0 0 12h6M30 20h6a6 6 0 0 1 0 12h-6"/>' +
    '<path d="M22 34v6M18 40h12" stroke="' + S + '"/>');

  icon('edray',
    '<path d="M6 28h28l8-8H18L10 28z" fill="' + B + '"/>' +
    '<path d="M14 28v6h16v-6"/>' +
    '<path d="M20 14v6" stroke="' + S + '"/>' +
    '<circle cx="20" cy="12" r="2" fill="' + S + '" stroke="none"/>');

  icon('honeywell',
    '<path d="M8 30c8-2 10-10 16-18 4 8 8 12 16 14" fill="' + B + '"/>' +
    '<path d="M18 32l4 6 8-14" stroke="' + S + '"/>');

  icon('honeynode',
    '<circle cx="14" cy="16" r="4" fill="' + B + '"/>' +
    '<circle cx="34" cy="14" r="4"/>' +
    '<circle cx="24" cy="34" r="4" fill="' + B + '"/>' +
    '<path d="M18 18l4 12M30 17l-4 13M18 16h12" stroke="' + S + '"/>');

  icon('varcons',
    '<path d="M24 38s-12-7.5-12-16a7 7 0 0 1 12-4 7 7 0 0 1 12 4c0 8.5-12 16-12 16z" fill="' + B + '"/>' +
    '<path d="M16 23h5l2 4 3-8 2 4h4" stroke="' + S + '"/>');

  icon('dell',
    '<rect x="8" y="12" width="24" height="16" rx="6" fill="' + B + '"/>' +
    '<path d="M14 28l-2 6"/>' +
    '<circle cx="34" cy="32" r="7"/>' +
    '<path d="M34 29v3h3" stroke="' + S + '"/>');

  icon('ieee',
    '<circle cx="16" cy="18" r="4" fill="' + B + '"/>' +
    '<circle cx="32" cy="18" r="4" fill="' + B + '"/>' +
    '<circle cx="24" cy="30" r="4"/>' +
    '<path d="M16 22c2 4 4 5 8 5s6-1 8-5" stroke="' + S + '"/>');

  icon('ibm',
    '<rect x="8" y="10" width="32" height="28" rx="4" fill="' + B + '"/>' +
    '<path d="M8 20h32"/>' +
    '<path d="M18 26h4M26 26h4M18 31h12" stroke="' + S + '"/>');

  icon('essay-reels',
    '<rect x="14" y="6" width="20" height="36" rx="4" fill="' + B + '"/>' +
    '<path d="M22 20l8 5-8 5z" fill="' + S + '" stroke="none"/>' +
    '<path d="M20 34h8" stroke="' + S + '"/>');

  icon('essay-cosmos',
    '<rect x="8" y="12" width="22" height="26" rx="3" fill="' + B + '"/>' +
    '<path d="M14 20h10M14 26h8"/>' +
    '<circle cx="34" cy="16" r="6"/>' +
    '<path d="M34 10v2M34 20v2M28 16h2M38 16h2" stroke="' + S + '"/>');

  icon('essay-delta',
    '<path d="M8 32l12-16 6 8 8-12 8 20" />' +
    '<path d="M14 32l8-10 4 5" stroke="' + S + '"/>' +
    '<circle cx="20" cy="16" r="2" fill="' + S + '" stroke="none"/>');

  icon('essay-tiktok',
    '<rect x="10" y="8" width="28" height="32" rx="6" fill="' + B + '"/>' +
    '<path d="M20 30V18c2 3 5 4 8 4" stroke="' + S + '"/>' +
    '<circle cx="18" cy="30" r="3"/>');

  icon('essay-notion',
    '<rect x="10" y="8" width="28" height="32" rx="4" fill="' + B + '"/>' +
    '<path d="M16 16h16M16 22h16M16 28h10"/>' +
    '<path d="M16 34h6" stroke="' + S + '"/>');

  icon('sk-product',
    '<circle cx="24" cy="24" r="14"/>' +
    '<path d="M24 14v10l7 4" stroke="' + S + '"/>' +
    '<circle cx="24" cy="24" r="2" fill="' + B + '"/>');

  icon('sk-research',
    '<path d="M18 8h12v8l6 14a8 8 0 0 1-14 0l-4-6" fill="' + B + '"/>' +
    '<path d="M18 8h12"/>' +
    '<path d="M16 28h10" stroke="' + S + '"/>');

  icon('sk-technical',
    '<path d="M16 14l-8 10 8 10" />' +
    '<path d="M32 14l8 10-8 10" />' +
    '<path d="M28 10L20 38" stroke="' + S + '"/>');

  icon('sk-tools',
    '<path d="M18 30l-6 6 4 2 6-6"/>' +
    '<rect x="20" y="10" width="10" height="22" rx="3" transform="rotate(40 25 21)" fill="' + B + '"/>' +
    '<circle cx="33" cy="15" r="3" stroke="' + S + '"/>');

  icon('linkedin',
    '<rect x="8" y="8" width="32" height="32" rx="8" fill="' + B + '"/>' +
    '<path d="M16 21v10M16 16.5v.5" />' +
    '<path d="M22 31v-6a4 4 0 0 1 8 0v6" stroke="' + S + '"/>');

  icon('github',
    '<circle cx="24" cy="24" r="14" fill="' + B + '"/>' +
    '<path d="M18 25c0 4 2.2 6 6 6s6-2 6-6"/>' +
    '<path d="M20 23c-2 0-3-1.4-3-3 1.5 0 2.4.6 3 1.6M28 23c2 0 3-1.4 3-3-1.5 0-2.4.6-3 1.6" stroke="' + S + '"/>' +
    '<circle cx="20" cy="22" r=".8" fill="currentColor" stroke="none"/>' +
    '<circle cx="28" cy="22" r=".8" fill="currentColor" stroke="none"/>');

  icon('medium',
    '<circle cx="16" cy="24" r="8" fill="' + B + '"/>' +
    '<ellipse cx="28" cy="24" rx="4.5" ry="7.5"/>' +
    '<ellipse cx="36" cy="24" rx="2" ry="6.5" stroke="' + S + '"/>');

  icon('mail',
    '<rect x="6" y="12" width="36" height="24" rx="4" fill="' + B + '"/>' +
    '<path d="M8 15l16 12L40 15" stroke="' + S + '"/>');

  icon('download',
    '<path d="M24 8v18"/>' +
    '<path d="M16 20l8 8 8-8" stroke="' + S + '"/>' +
    '<path d="M10 38h28"/>');

  icon('external',
    '<path d="M20 14H12a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4v-8"/>' +
    '<path d="M26 10h12v12" stroke="' + S + '"/>' +
    '<path d="M22 26L37 11"/>');

  icon('arrow',
    '<path d="M10 24h24" stroke="' + S + '"/>' +
    '<path d="M26 14l10 10-10 10"/>');

  icon('sun',
    '<circle cx="24" cy="24" r="6" fill="' + B + '"/>' +
    '<path d="M24 8v4M24 36v4M8 24h4M36 24h4M12 12l3 3M33 33l3 3M36 12l-3 3M15 33l-3 3" stroke="' + S + '"/>');

  icon('moon',
    '<path d="M28 10a14 14 0 1 0 8 22 12 12 0 0 1-8-22z" fill="' + B + '"/>' +
    '<circle cx="32" cy="16" r="1.4" fill="' + S + '" stroke="none"/>');

  icon('menu',
    '<path d="M10 16h28" />' +
    '<path d="M10 24h20" stroke="' + S + '"/>' +
    '<path d="M10 32h28"/>');

  icon('close',
    '<path d="M14 14l20 20M34 14L14 34" stroke="' + S + '"/>');

  icon('stamp',
    '<circle cx="24" cy="24" r="12" fill="' + B + '"/>' +
    '<circle cx="24" cy="24" r="7" stroke="' + S + '"/>' +
    '<path d="M24 8v4M24 36v4M8 24h4M36 24h4"/>');

  icon('slip',
    '<path d="M14 6h16l8 8v26a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" fill="' + B + '"/>' +
    '<path d="M30 6v8h8"/>' +
    '<path d="M18 24h12M18 30h8" stroke="' + S + '"/>');

  window.icon = function (name) {
    return ICONS[name] || ICONS.stamp;
  };
})();
