// Generates images/topo.svg: hand-feel contour lines (two hills and a
// ridge) for the hero and section breaks. Re-run to tweak: node tools/topo.mjs
import { writeFileSync } from 'fs';

const W = 1600, H = 900;
const hills = [
  { cx: 1180, cy: 330, rings: 11, r0: 26, step: 30, a: [0.16, 0.09, 0.05], ph: [0.4, 1.9, 3.1], squash: 0.78 },
  { cx: 260, cy: 760, rings: 8, r0: 30, step: 34, a: [0.2, 0.08, 0.06], ph: [2.2, 0.7, 1.3], squash: 0.7 },
  { cx: 760, cy: -40, rings: 6, r0: 60, step: 38, a: [0.12, 0.1, 0.04], ph: [1.1, 2.6, 0.2], squash: 0.6 }
];

function ring(h, k) {
  const r = h.r0 + k * h.step, pts = [];
  for (let i = 0; i < 72; i++) {
    const t = (i / 72) * Math.PI * 2;
    const wob = 1 + h.a[0] * Math.sin(3 * t + h.ph[0] + k * 0.12) + h.a[1] * Math.sin(5 * t + h.ph[1] - k * 0.08) + h.a[2] * Math.sin(8 * t + h.ph[2] + k * 0.3);
    pts.push([h.cx + Math.cos(t) * r * wob, h.cy + Math.sin(t) * r * wob * h.squash]);
  }
  // closed Catmull-Rom to cubic Beziers
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length; i++) {
    const p0 = pts[(i - 1 + pts.length) % pts.length], p1 = pts[i], p2 = pts[(i + 1) % pts.length], p3 = pts[(i + 2) % pts.length];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + 'Z';
}

const paths = hills.flatMap(h => Array.from({ length: h.rings }, (_, k) =>
  `<path d="${ring(h, k)}" stroke-width="${k % 5 === 4 ? 1.6 : 0.9}"/>`)).join('\n');
writeFileSync(new URL('../images/topo.svg', import.meta.url), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#b9703f">
${paths}
</svg>
`);
console.log('wrote images/topo.svg');
