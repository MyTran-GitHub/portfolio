/* @ds-bundle: {"format":3,"namespace":"PaperdoodleDesignSystem_9051b3","components":[{"name":"Highlight","sourcePath":"components/brand/Highlight.jsx"},{"name":"WashiTape","sourcePath":"components/brand/WashiTape.jsx"},{"name":"WrittenHeading","sourcePath":"components/brand/WrittenHeading.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"}],"sourceHashes":{"components/brand/Highlight.jsx":"baf6abd2b443","components/brand/WashiTape.jsx":"b4e9d3612554","components/brand/WrittenHeading.jsx":"98943e14151c","components/feedback/Badge.jsx":"1e0411cb5e36","components/forms/Button.jsx":"6007cb579019","components/forms/Checkbox.jsx":"2f4854ad4c34","components/forms/Input.jsx":"cbbcb54cd46b","components/layout/Card.jsx":"dab624e5b13f","components/layout/Divider.jsx":"9b11a2136fc6","ui_kits/portfolio/App.jsx":"d0c8ac837715","ui_kits/portfolio/Extras.jsx":"749240a14940","ui_kits/portfolio/Hero.jsx":"6b5382ab5c47","ui_kits/portfolio/Journey.jsx":"40b360c25e07","ui_kits/portfolio/Nav.jsx":"96505de83d81","ui_kits/portfolio/Projects.jsx":"99b7973afb8e","ui_kits/portfolio/data.js":"9eb62684d66b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PaperdoodleDesignSystem_9051b3 = window.PaperdoodleDesignSystem_9051b3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Highlight.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-hl{ position:relative; padding:0 .12em; color:inherit; white-space:pre-wrap;
  background-repeat:no-repeat; background-position:0 60%; background-size:0% 88%;
  border-radius:6px 8px 7px 9px; }
.pd-hl[data-animate="true"]{ animation:pd-highlight-swipe var(--dur-slow) var(--ease-out) forwards; }
.pd-hl--static{ background-size:100% 88%; }
.pd-hl--yellow{ background-image:linear-gradient(var(--hi-yellow),var(--hi-yellow)); }
.pd-hl--pink{ background-image:linear-gradient(var(--hi-pink),var(--hi-pink)); }
.pd-hl--mint{ background-image:linear-gradient(var(--hi-mint),var(--hi-mint)); }
.pd-hl--blue{ background-image:linear-gradient(var(--accent-soft),var(--accent-soft)); }
@media (prefers-reduced-motion: reduce){
  .pd-hl[data-animate="true"]{ animation:none; background-size:100% 88%; }
}
`;

/**
 * Highlight — wraps text in a highlighter swipe that can sweep in on view.
 */
function Highlight({
  color = 'yellow',
  animate = false,
  className = '',
  children,
  ...rest
}) {
  useSketchStyle('pd-hl-css', CSS);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    if (!animate) return;
    const t = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(t);
  }, [animate]);
  return /*#__PURE__*/React.createElement("mark", _extends({
    className: `pd-hl pd-hl--${color} ${!animate ? 'pd-hl--static' : ''} ${className}`,
    "data-animate": animate && on
  }, rest), children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/brand/WashiTape.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-tape{
  display:inline-block; position:relative;
  font-family:var(--font-accent); font-size:var(--fs-caption); color:var(--ink-800);
  padding:6px 18px; line-height:1.2; text-align:center;
  background:rgba(246,222,113,0.72);
  box-shadow:0 1px 4px rgba(34,31,26,.18);
  transform:rotate(var(--tilt-3));
  -webkit-mask-image:linear-gradient(90deg, transparent 0, #000 6px, #000 calc(100% - 6px), transparent 100%);
          mask-image:linear-gradient(90deg, transparent 0, #000 6px, #000 calc(100% - 6px), transparent 100%);
}
.pd-tape::before,.pd-tape::after{ content:''; position:absolute; top:0; bottom:0; width:8px;
  background:repeating-linear-gradient(90deg, transparent 0 1px, rgba(255,255,255,.35) 1px 2px); }
.pd-tape::before{ left:0; } .pd-tape::after{ right:0; }
.pd-tape--pink{ background:rgba(244,183,200,0.72); }
.pd-tape--mint{ background:rgba(191,227,194,0.72); }
.pd-tape--blue{ background:rgba(220,230,245,0.82); }
.pd-tape--paper{ background:rgba(250,244,230,0.9); border:1px dashed var(--ink-300); }
`;

/**
 * WashiTape — a strip of translucent decorative tape with a tiny tilt, for
 * "taping" labels, notes and photos onto the page.
 */
function WashiTape({
  color = 'yellow',
  tilt,
  className = '',
  children,
  style = {},
  ...rest
}) {
  useSketchStyle('pd-tape-css', CSS);
  const s = tilt != null ? {
    ...style,
    transform: `rotate(${tilt}deg)`
  } : style;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `pd-tape pd-tape--${color} ${className}`,
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { WashiTape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WashiTape.jsx", error: String((e && e.message) || e) }); }

// components/brand/WrittenHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-written{ font-family:var(--font-script); font-weight:var(--fw-bold);
  color:var(--text-heading); line-height:var(--lh-tight); letter-spacing:var(--ls-tight);
  margin:0; display:inline-block; position:relative; }
.pd-written--display{ font-size:var(--fs-display); }
.pd-written--h1{ font-size:var(--fs-h1); }
.pd-written--h2{ font-size:var(--fs-h2); }
.pd-written__ink{ display:inline-block; }
.pd-written[data-animate="true"] .pd-written__ink{
  animation:pd-write-on var(--dur-write) var(--ease-in-out) both; }
.pd-written__rule{ display:block; height:10px; margin-top:2px; overflow:visible; }
.pd-written__rule path{ fill:none; stroke:var(--accent); stroke-width:3.5; stroke-linecap:round;
  stroke-dasharray:340; stroke-dashoffset:340; }
.pd-written[data-animate="true"] .pd-written__rule path{
  animation:pd-rule-draw var(--dur-write) var(--ease-out) both; animation-delay:calc(var(--dur-write) * .55); }
@keyframes pd-rule-draw{ to{ stroke-dashoffset:0; } }
@media (prefers-reduced-motion: reduce){
  .pd-written[data-animate="true"] .pd-written__ink{ animation:none; clip-path:none; }
  .pd-written[data-animate="true"] .pd-written__rule path{ animation:none; stroke-dashoffset:0; }
}
`;

/**
 * WrittenHeading — the signature header that reveals itself left→right as if
 * being hand-written, in the flowing script face. Optionally draws an
 * underline doodle just after the text finishes.
 */
function WrittenHeading({
  children,
  as = 'h1',
  level = 'display',
  underline = false,
  animate = true,
  className = '',
  ...rest
}) {
  useSketchStyle('pd-written-css', CSS);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    if (!animate) return;
    const t = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(t);
  }, [animate]);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `pd-written pd-written--${level} ${className}`,
    "data-animate": on
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "pd-written__ink"
  }, children), underline && /*#__PURE__*/React.createElement("svg", {
    className: "pd-written__rule",
    viewBox: "0 0 320 10",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6 C 70 2, 150 9, 220 4 S 300 7, 317 5"
  })));
}
Object.assign(__ds_scope, { WrittenHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WrittenHeading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-badge{
  display:inline-flex; align-items:center; gap:var(--space-1);
  font-family:var(--font-marker); font-size:var(--fs-caption); letter-spacing:var(--ls-wide);
  line-height:1; padding:5px 12px;
  border:var(--border-ink-thin);
  border-radius:var(--radius-pill);
  background:var(--surface-card); color:var(--text-heading);
  transform:rotate(var(--tilt-2));
}
.pd-badge--blue{ background:var(--accent-soft); color:var(--accent-ink); border-color:var(--accent-ink); }
.pd-badge--lav{ background:var(--lavender-100); color:var(--accent-2-ink); border-color:var(--accent-2-ink); }
.pd-badge--red{ background:var(--danger-soft); color:var(--danger); border-color:var(--danger); }
.pd-badge--mint{ background:var(--hi-mint); color:#2c5a32; border-color:#2c5a32; }
.pd-badge--yellow{ background:var(--hi-yellow); color:var(--ink-900); border-color:var(--ink-800); }
.pd-badge--solid{ background:var(--ink-800); color:var(--paper-50); border-color:var(--ink-900); }
`;

/**
 * Badge — a small hand-drawn pill for tags, statuses and labels.
 */
function Badge({
  tone = 'default',
  className = '',
  children,
  ...rest
}) {
  useSketchStyle('pd-badge-css', CSS);
  const map = {
    default: '',
    blue: 'pd-badge--blue',
    lavender: 'pd-badge--lav',
    red: 'pd-badge--red',
    mint: 'pd-badge--mint',
    yellow: 'pd-badge--yellow',
    solid: 'pd-badge--solid'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `pd-badge ${map[tone] || ''} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Injects a component's CSS once per document. */
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-btn{
  font-family:var(--font-marker);
  font-size:var(--fs-small);
  letter-spacing:var(--ls-wide);
  line-height:1;
  display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);
  cursor:pointer;
  border:var(--border-ink);
  border-radius:var(--radius-sketch-1);
  background:var(--surface-card);
  color:var(--text-heading);
  padding:0 var(--space-5);
  height:var(--control-md);
  box-shadow:var(--shadow-paper);
  transform:rotate(var(--tilt-2));
  transition:transform var(--dur-fast) var(--ease-doodle),
             box-shadow var(--dur-fast) var(--ease-out),
             background var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent;
}
.pd-btn:hover{ transform:rotate(0deg) translate(-1px,-1px); box-shadow:var(--shadow-lift); }
.pd-btn:active{ transform:translate(1px,2px) rotate(0deg); box-shadow:1px 1px 0 rgba(34,31,26,.2); }
.pd-btn:focus-visible{ outline:none; box-shadow:var(--shadow-lift), var(--focus-ring); }
.pd-btn[disabled]{ cursor:not-allowed; opacity:.5; box-shadow:none; transform:none; }

.pd-btn--primary{ background:var(--accent); color:var(--text-on-accent); border-color:var(--accent-ink); }
.pd-btn--primary:hover{ background:var(--accent-ink); }
.pd-btn--secondary{ background:var(--accent-2); color:var(--accent-2-ink); border-color:var(--accent-2-ink); }
.pd-btn--ghost{ background:transparent; box-shadow:none; border-color:transparent; }
.pd-btn--ghost:hover{ background:var(--surface-hover); box-shadow:none; border-color:var(--stroke-soft); }
.pd-btn--danger{ background:var(--danger-soft); color:var(--danger); border-color:var(--danger); }
.pd-btn--danger:hover{ background:var(--danger); color:var(--paper-50); }

.pd-btn--sm{ height:var(--control-sm); font-size:var(--fs-caption); padding:0 var(--space-3); border-radius:var(--radius-sketch-2); }
.pd-btn--lg{ height:var(--control-lg); font-size:var(--fs-body); padding:0 var(--space-8); }
.pd-btn--block{ display:flex; width:100%; }
`;

/**
 * Button — a hand-drawn action control with a wobbly ink border and a tiny tilt.
 */
function Button({
  variant = 'secondary',
  size = 'md',
  block = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  useSketchStyle('pd-btn-css', CSS);
  const cls = ['pd-btn', `pd-btn--${variant}`, size !== 'md' ? `pd-btn--${size}` : '', block ? 'pd-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-check{ display:inline-flex; align-items:center; gap:var(--space-3); cursor:pointer;
  font-family:var(--font-body); font-size:var(--fs-body); color:var(--text-heading); user-select:none; }
.pd-check input{ position:absolute; opacity:0; width:0; height:0; }
.pd-check__box{
  flex:none; width:26px; height:26px; display:grid; place-items:center;
  background:var(--surface-card);
  border:var(--border-ink);
  border-radius:var(--radius-sketch-3);
  transform:rotate(var(--tilt-1));
  transition:background var(--dur-fast), transform var(--dur-fast) var(--ease-doodle);
}
.pd-check:hover .pd-check__box{ transform:rotate(0) scale(1.05); }
.pd-check__mark{ width:18px; height:18px; stroke:var(--accent-ink); stroke-width:3.2;
  fill:none; stroke-linecap:round; stroke-linejoin:round;
  stroke-dasharray:26; stroke-dashoffset:26; transition:stroke-dashoffset var(--dur-base) var(--ease-out); }
.pd-check input:checked + .pd-check__box{ background:var(--accent-soft); }
.pd-check input:checked + .pd-check__box .pd-check__mark{ stroke-dashoffset:0; }
.pd-check input:focus-visible + .pd-check__box{ box-shadow:0 0 0 3px var(--accent-soft); }
.pd-check--radio .pd-check__box{ border-radius:50%; }
.pd-check--radio .pd-check__dot{ width:12px; height:12px; border-radius:var(--radius-blob);
  background:var(--accent-ink); transform:scale(0); transition:transform var(--dur-fast) var(--ease-doodle); }
.pd-check--radio input:checked + .pd-check__box .pd-check__dot{ transform:scale(1); }
.pd-check[data-disabled="true"]{ opacity:.5; cursor:not-allowed; }
`;

/**
 * Checkbox — a hand-drawn tick that draws itself on when checked.
 * Set `type="radio"` styling via the `radio` flag for a single-choice dot.
 */
function Checkbox({
  label,
  radio = false,
  disabled = false,
  className = '',
  ...rest
}) {
  useSketchStyle('pd-check-css', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: `pd-check ${radio ? 'pd-check--radio' : ''} ${className}`,
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: radio ? 'radio' : 'checkbox',
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pd-check__box",
    "aria-hidden": "true"
  }, radio ? /*#__PURE__*/React.createElement("span", {
    className: "pd-check__dot"
  }) : /*#__PURE__*/React.createElement("svg", {
    className: "pd-check__mark",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 13 l6 6 L21 4"
  }))), label && /*#__PURE__*/React.createElement("span", {
    className: "pd-check__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-field{ display:flex; flex-direction:column; gap:var(--space-2); font-family:var(--font-marker); }
.pd-field__label{ color:var(--text-heading); font-size:var(--fs-small); letter-spacing:var(--ls-normal); }
.pd-field__hint{ color:var(--text-muted); font-size:var(--fs-caption); font-family:var(--font-body); }
.pd-field__hint--error{ color:var(--danger); }

.pd-input{
  font-family:var(--font-body); font-size:var(--fs-body); color:var(--text-heading);
  background:var(--surface-card);
  border:var(--border-ink);
  border-radius:var(--radius-sketch-2);
  padding:0 var(--space-4); height:var(--control-md);
  box-shadow:var(--shadow-inset);
  transition:border-color var(--dur-fast), box-shadow var(--dur-fast);
  width:100%; box-sizing:border-box;
}
.pd-input::placeholder{ color:var(--text-faint); }
.pd-input:hover{ border-color:var(--ink-900); }
.pd-input:focus{ outline:none; border-color:var(--accent); box-shadow:var(--shadow-inset), 0 0 0 3px var(--accent-soft); }
.pd-input--textarea{ height:auto; min-height:96px; padding:var(--space-3) var(--space-4); resize:vertical; line-height:var(--lh-normal); }
.pd-input--error{ border-color:var(--danger); }
.pd-input[disabled]{ opacity:.55; cursor:not-allowed; background:var(--surface-sunken); }
`;

/**
 * Input — a text field on paper with an inked, wobbly border and a pressed-in well.
 * Renders a <textarea> when multiline is set.
 */
function Input({
  label,
  hint,
  error,
  multiline = false,
  id,
  className = '',
  ...rest
}) {
  useSketchStyle('pd-input-css', CSS);
  const autoId = React.useId();
  const fieldId = id || autoId;
  const Tag = multiline ? 'textarea' : 'input';
  const inputCls = ['pd-input', multiline ? 'pd-input--textarea' : '', error ? 'pd-input--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "pd-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    className: inputCls,
    "aria-invalid": !!error
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `pd-field__hint ${error ? 'pd-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-card{
  position:relative;
  background:var(--surface-card);
  border:var(--border-ink);
  border-radius:var(--radius-sketch-1);
  box-shadow:var(--shadow-paper);
  padding:var(--space-6);
  color:var(--text-body);
  transition:transform var(--dur-base) var(--ease-doodle), box-shadow var(--dur-base) var(--ease-out);
}
.pd-card--tilt{ transform:rotate(var(--tilt-1)); }
.pd-card--stack{ box-shadow:var(--shadow-stack); }
.pd-card--flat{ box-shadow:none; }
.pd-card--interactive{ cursor:pointer; }
.pd-card--interactive:hover{ transform:rotate(0) translate(-2px,-3px); box-shadow:var(--shadow-lift); }
.pd-card--interactive:active{ transform:translate(1px,2px); box-shadow:var(--shadow-paper); }
.pd-card__title{ font-family:var(--font-marker); font-size:var(--fs-h3); color:var(--text-heading); margin:0 0 var(--space-2); }
.pd-card__body{ font-family:var(--font-body); font-weight:var(--fw-light); line-height:var(--lh-normal); }
`;

/**
 * Card — a sheet of paper with an inked wobbly border and a resting shadow.
 * Variants control tilt, the stacked-paper shadow and interactivity.
 */
function Card({
  title,
  tilt = false,
  stack = false,
  flat = false,
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  useSketchStyle('pd-card-css', CSS);
  const cls = ['pd-card', tilt ? 'pd-card--tilt' : '', stack ? 'pd-card--stack' : '', flat ? 'pd-card--flat' : '', interactive ? 'pd-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    className: "pd-card__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "pd-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSketchStyle(id, css) {
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.pd-divider{ display:flex; align-items:center; gap:var(--space-3); color:var(--text-muted);
  font-family:var(--font-marker); font-size:var(--fs-small); margin:var(--space-6) 0; }
.pd-divider__line{ flex:1; height:0; border:none; border-top:var(--border-dashed); }
.pd-divider--plain .pd-divider__line{ border-top:2px solid var(--stroke); }
.pd-divider--wavy .pd-divider__line{
  border:none; height:8px;
  background:
    radial-gradient(circle at 6px 8px, transparent 6px, var(--stroke) 6px 7.4px, transparent 7.4px) 0 -4px / 12px 12px repeat-x;
}
.pd-divider__label{ flex:none; }
.pd-divider__doodle{ flex:none; font-family:var(--font-accent); color:var(--ink-400); }
`;

/**
 * Divider — a dashed or wavy hand-drawn rule, optionally with a centered label.
 */
function Divider({
  label,
  variant = 'dashed',
  doodle,
  className = '',
  ...rest
}) {
  useSketchStyle('pd-divider-css', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `pd-divider pd-divider--${variant} ${className}`,
    role: "separator"
  }, rest), /*#__PURE__*/React.createElement("hr", {
    className: "pd-divider__line"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "pd-divider__label"
  }, label), doodle && /*#__PURE__*/React.createElement("span", {
    className: "pd-divider__doodle"
  }, doodle), (label || doodle) && /*#__PURE__*/React.createElement("hr", {
    className: "pd-divider__line"
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
/* App — orchestrates the portfolio screens and the page-flip into project detail. */
const PF_CSS = `
.pf-frame{ width:1126px; max-width:100%; margin:0 auto; min-height:100vh;
  background:var(--surface-page); background-image:var(--paper-grain);
  border-inline:var(--border-ink); box-sizing:border-box; position:relative; overflow:hidden; }

/* nav */
.pf-nav{ position:sticky; top:0; z-index:20; display:flex; align-items:center; justify-content:space-between;
  padding:14px 40px; background:color-mix(in srgb, var(--surface-page) 86%, transparent);
  backdrop-filter:blur(4px); border-bottom:var(--border-ink); }
.pf-nav__brand{ font-family:var(--font-script); font-weight:var(--fw-bold); font-size:30px; line-height:1;
  color:var(--text-heading); background:none; border:none; cursor:pointer; padding:0; }
.pf-nav__links{ display:flex; align-items:center; gap:6px; }
.pf-nav__link{ font-family:var(--font-marker); font-size:var(--fs-small); color:var(--text-body);
  background:none; border:none; cursor:pointer; padding:8px 12px; border-radius:var(--radius-soft);
  transition:background var(--dur-fast), color var(--dur-fast); }
.pf-nav__link:hover{ background:var(--surface-hover); color:var(--text-heading); }
.pf-nav__resume{ font-family:var(--font-marker); font-size:var(--fs-small); letter-spacing:var(--ls-wide);
  margin-left:8px; padding:8px 16px; color:var(--text-on-accent); background:var(--accent);
  border:var(--border-ink); border-color:var(--accent-ink); border-radius:var(--radius-sketch-1);
  text-decoration:none; box-shadow:var(--shadow-paper); transform:rotate(var(--tilt-2));
  transition:transform var(--dur-fast) var(--ease-doodle), box-shadow var(--dur-fast); }
.pf-nav__resume:hover{ transform:rotate(0) translate(-1px,-1px); box-shadow:var(--shadow-lift); color:var(--text-on-accent); }

/* hero */
.pf-hero{ padding:64px 56px 56px; display:flex; flex-direction:column; align-items:flex-start; gap:0; }
.pf-hero__tape{ margin-bottom:14px; }
.pf-hero__name{ font-size:84px; line-height:1.04; white-space:nowrap; margin:0; }
.pf-hero__role{ align-self:stretch; font-family:var(--font-marker); font-size:var(--fs-lead); color:var(--text-body); margin:18px 0 0; }
.pf-hero__role-em{ color:var(--accent-ink); background:linear-gradient(var(--mark),var(--mark)); background-repeat:no-repeat; background-position:0 78%; background-size:100% 42%; padding:0 .1em; border-radius:6px 8px 7px 9px; }
.pf-hero__dot{ color:var(--text-faint); margin:0 6px; }
.pf-hero__blurb{ align-self:stretch; font-family:var(--font-body); font-weight:var(--fw-light); font-size:var(--fs-lead);
  line-height:var(--lh-normal); color:var(--text-body); max-width:60ch; margin:20px 0 0; }
.pf-hero__tech{ display:flex; flex-wrap:wrap; gap:10px; margin:22px 0 6px; }
.pf-hero__cta{ display:flex; gap:14px; margin-top:18px; }

/* sections */
.pf-section{ padding:48px 56px; border-top:var(--border-dashed); }
.pf-section__title{ font-size:var(--fs-h1); margin:0 0 8px; }
.pf-section__lead{ font-family:var(--font-body); font-weight:var(--fw-light); color:var(--text-muted);
  font-size:var(--fs-body); margin:0 0 28px; }

/* timeline */
.pf-timeline{ list-style:none; margin:28px 0 0; padding:0 0 0 28px; position:relative; }
.pf-timeline::before{ content:''; position:absolute; left:6px; top:6px; bottom:6px; width:0;
  border-left:var(--border-dashed); }
.pf-timeline__item{ position:relative; padding-bottom:24px; }
.pf-timeline__item:last-child{ padding-bottom:0; }
.pf-timeline__node{ position:absolute; left:-28px; top:10px; width:16px; height:16px;
  background:var(--accent-soft); border:var(--border-ink); border-color:var(--accent-ink);
  border-radius:var(--radius-blob); transform:translateX(-1px); }
.pf-timeline__card{ background:var(--surface-card); border:var(--border-ink); border-radius:var(--radius-sketch-1);
  box-shadow:var(--shadow-paper); padding:var(--space-5) var(--space-6); }
.pf-timeline__head{ display:flex; align-items:center; gap:12px; justify-content:space-between; }
.pf-timeline__when{ font-family:var(--font-marker); font-size:var(--fs-small); color:var(--text-muted); }
.pf-timeline__title{ font-family:var(--font-marker); font-size:var(--fs-h3); color:var(--text-heading); margin:8px 0 4px; }
.pf-timeline__note{ font-family:var(--font-body); font-weight:var(--fw-light); font-size:var(--fs-body);
  line-height:var(--lh-normal); color:var(--text-body); margin:0; }

/* projects grid */
.pf-projects{ display:grid; grid-template-columns:repeat(2, 1fr); gap:34px 30px; margin-top:10px; }
.pf-project{ position:relative; }
.pf-project__tape{ position:absolute; top:-12px; left:50%; transform:translateX(-50%) rotate(-4deg); z-index:5; }
.pf-project__card{ height:100%; }
.pf-project__tag{ font-family:var(--font-marker); font-size:var(--fs-caption); letter-spacing:var(--ls-wide);
  text-transform:uppercase; color:var(--accent-ink); }
.pf-project__name{ font-family:var(--font-marker); font-size:var(--fs-h2); color:var(--text-heading); margin:4px 0 8px; }
.pf-project__summary{ font-family:var(--font-body); font-weight:var(--fw-light); font-size:var(--fs-body);
  line-height:var(--lh-normal); color:var(--text-body); margin:0 0 14px; }
.pf-project__tech{ display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
.pf-project__more{ font-family:var(--font-marker); font-size:var(--fs-caption); color:var(--text-muted); }
.pf-project__open{ display:inline-block; margin-top:16px; font-family:var(--font-marker);
  font-size:var(--fs-small); color:var(--accent); letter-spacing:var(--ls-normal); }

/* skills */
.pf-skills{ display:grid; grid-template-columns:repeat(3, 1fr); gap:24px; margin-top:14px; }
.pf-skills__group{ font-family:var(--font-marker); font-size:var(--fs-h3); color:var(--text-heading); margin:0 0 14px; }
.pf-skills__items{ display:flex; flex-wrap:wrap; gap:10px; }

/* footer */
.pf-footer{ padding:54px 56px 64px; border-top:var(--border-ink); background:var(--surface-sunken); }
.pf-footer__title{ font-size:var(--fs-h2); margin:0 0 6px; }
.pf-footer__line{ font-family:var(--font-body); font-weight:var(--fw-light); color:var(--text-body); margin:0 0 22px; }
.pf-footer__links{ display:flex; flex-direction:column; gap:10px; }
.pf-footer__link{ font-family:var(--font-marker); font-size:var(--fs-body); color:var(--accent-ink);
  display:inline-flex; align-items:center; gap:10px; width:fit-content; text-decoration:none;
  border-bottom:2px solid transparent; transition:border-color var(--dur-fast); }
.pf-footer__link:hover{ border-bottom-color:var(--accent); }
.pf-footer__ico{ width:20px; height:20px; }
.pf-footer__sig{ font-family:var(--font-accent); font-size:var(--fs-caption); color:var(--text-faint); margin:30px 0 0; }

/* page-flip into detail */
.pf-flip{ position:absolute; inset:0; z-index:30; background:var(--surface-page); background-image:var(--paper-grain);
  overflow-y:auto; transform-origin:left center; will-change:transform; }
.pf-flip--in{ animation:pd-page-flip-in var(--dur-flip) var(--ease-out) both; }
.pf-flip--out{ animation:pd-page-flip-out var(--dur-flip) var(--ease-in-out) both; }
.pf-detail{ padding:40px 56px 64px; }
.pf-detail__back{ margin-bottom:20px; }
.pf-detail__sheet{ background:var(--surface-card); border:var(--border-ink); border-radius:var(--radius-sketch-1);
  box-shadow:var(--shadow-stack); padding:40px 44px; max-width:760px; }
.pf-detail__tag{ font-family:var(--font-marker); font-size:var(--fs-small); letter-spacing:var(--ls-wide);
  text-transform:uppercase; color:var(--accent-ink); }
.pf-detail__title{ font-size:var(--fs-display); margin:6px 0 0; }
.pf-detail__summary{ font-family:var(--font-body); font-weight:var(--fw-light); font-size:var(--fs-lead);
  line-height:var(--lh-normal); color:var(--text-body); margin:14px 0 0; }
.pf-detail__tech{ display:flex; flex-wrap:wrap; gap:10px; margin:20px 0 0; }
.pf-detail__points{ font-family:var(--font-body); font-weight:var(--fw-light); font-size:var(--fs-body);
  line-height:var(--lh-loose); color:var(--text-body); margin:0; padding-left:22px; }
.pf-detail__points li{ margin-bottom:8px; }
.pf-detail__actions{ display:flex; gap:14px; margin-top:28px; }

@media (max-width:760px){
  .pf-nav{ padding:12px 18px; } .pf-nav__links{ gap:0; }
  .pf-hero{ padding:44px 22px 36px; } .pf-hero__name{ font-size:52px; white-space:normal; }
  .pf-hero__role{ white-space:normal; font-size:var(--fs-body); }
  .pf-section,.pf-footer{ padding:36px 22px; }
  .pf-projects,.pf-skills{ grid-template-columns:1fr; }
  .pf-detail{ padding:28px 22px; } .pf-detail__sheet{ padding:26px 22px; }
}
@media (prefers-reduced-motion: reduce){
  .pf-flip--in,.pf-flip--out{ animation:none; }
}
`;
function App() {
  const [detail, setDetail] = React.useState(null);
  const [closing, setClosing] = React.useState(false);
  React.useEffect(() => {
    if (document.getElementById('pf-css')) return;
    const el = document.createElement('style');
    el.id = 'pf-css';
    el.textContent = PF_CSS;
    document.head.appendChild(el);
  }, []);
  const open = id => {
    setClosing(false);
    setDetail(id);
  };
  const back = () => {
    setClosing(true);
    window.setTimeout(() => {
      setDetail(null);
      setClosing(false);
    }, 700);
  };
  const nav = id => {
    if (detail) back();
    const go = () => {
      if (id === 'top') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      const el = document.getElementById(id);
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 64,
        behavior: 'smooth'
      });
    };
    detail ? window.setTimeout(go, 720) : go();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-frame"
  }, /*#__PURE__*/React.createElement(Nav, {
    onNav: nav
  }), /*#__PURE__*/React.createElement(Hero, {
    onNav: nav
  }), /*#__PURE__*/React.createElement(Journey, null), /*#__PURE__*/React.createElement(Projects, {
    onOpen: open
  }), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(Footer, null), detail && /*#__PURE__*/React.createElement("div", {
    className: `pf-flip ${closing ? 'pf-flip--out' : 'pf-flip--in'}`
  }, /*#__PURE__*/React.createElement(ProjectDetail, {
    id: detail,
    onBack: back
  })));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Extras.jsx
try { (() => {
/* Skills + Footer. */
function Skills() {
  const {
    WrittenHeading,
    Badge,
    Card
  } = window.PaperdoodleDesignSystem_9051b3;
  const D = window.PD_DATA;
  const tones = {
    Languages: 'blue',
    'Frameworks & Libraries': 'lavender',
    'Developer Tools': 'mint'
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section",
    id: "skills"
  }, /*#__PURE__*/React.createElement(WrittenHeading, {
    as: "h2",
    level: "h1",
    underline: true,
    animate: false,
    className: "pf-section__title"
  }, "In the toolbox"), /*#__PURE__*/React.createElement("div", {
    className: "pf-skills"
  }, Object.entries(D.skills).map(([group, items], i) => /*#__PURE__*/React.createElement(Card, {
    key: group,
    tilt: i % 2 === 0,
    className: "pf-skills__card"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pf-skills__group"
  }, group), /*#__PURE__*/React.createElement("div", {
    className: "pf-skills__items"
  }, items.map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s,
    tone: tones[group]
  }, s)))))));
}
window.Skills = Skills;
function Footer() {
  const {
    WrittenHeading,
    Button
  } = window.PaperdoodleDesignSystem_9051b3;
  const D = window.PD_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    className: "pf-footer",
    id: "footer"
  }, /*#__PURE__*/React.createElement(WrittenHeading, {
    as: "h2",
    level: "h2",
    animate: false,
    className: "pf-footer__title"
  }, "Let\u2019s build something."), /*#__PURE__*/React.createElement("p", {
    className: "pf-footer__line"
  }, "Always up for a good problem \u2014 say hi."), /*#__PURE__*/React.createElement("div", {
    className: "pf-footer__links"
  }, /*#__PURE__*/React.createElement("a", {
    className: "pf-footer__link",
    href: `mailto:${D.contact.email}`
  }, D.contact.email), /*#__PURE__*/React.createElement("a", {
    className: "pf-footer__link pf-footer__link--gh",
    href: `https://${D.contact.github}`,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "pf-footer__ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("use", {
    href: "../../assets/icons.svg#github-icon"
  })), D.contact.github), /*#__PURE__*/React.createElement("a", {
    className: "pf-footer__link",
    href: `https://${D.contact.linkedin}`,
    target: "_blank",
    rel: "noreferrer"
  }, D.contact.linkedin)), /*#__PURE__*/React.createElement("p", {
    className: "pf-footer__sig"
  }, "drawn & taped together \xB7 ", new Date().getFullYear()));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Extras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — the signature written-on name, a taped note, and tech badges. */
function Hero({
  onNav
}) {
  const {
    WrittenHeading,
    Highlight,
    Button,
    Badge,
    WashiTape
  } = window.PaperdoodleDesignSystem_9051b3;
  const D = window.PD_DATA;
  return /*#__PURE__*/React.createElement("header", {
    className: "pf-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement(WashiTape, {
    color: "yellow",
    tilt: -3,
    className: "pf-hero__tape"
  }, "hello, I\u2019m \u2014"), /*#__PURE__*/React.createElement(WrittenHeading, {
    level: "display",
    underline: true,
    animate: true,
    className: "pf-hero__name"
  }, D.name), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero__role"
  }, D.subtitle, " ", /*#__PURE__*/React.createElement("span", {
    className: "pf-hero__dot"
  }, "\xB7"), " ", /*#__PURE__*/React.createElement("span", {
    className: "pf-hero__role-em"
  }, D.role)), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero__blurb"
  }, D.blurb), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__tech"
  }, ['C++', 'React', 'TypeScript', 'Python', 'Node.js'].map((t, i) => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: ['blue', 'lavender', 'mint', 'yellow', 'blue'][i]
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('projects')
  }, "See my work"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => onNav('footer')
  }, "Get in touch")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Journey.jsx
try { (() => {
/* Journey — a dashed-spine timeline of education & experience. */
function Journey() {
  const {
    WrittenHeading,
    Badge
  } = window.PaperdoodleDesignSystem_9051b3;
  const D = window.PD_DATA;
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section",
    id: "journey"
  }, /*#__PURE__*/React.createElement(WrittenHeading, {
    as: "h2",
    level: "h1",
    underline: true,
    animate: false,
    className: "pf-section__title"
  }, "The journey so far"), /*#__PURE__*/React.createElement("ol", {
    className: "pf-timeline"
  }, D.journey.map((j, i) => /*#__PURE__*/React.createElement("li", {
    className: "pf-timeline__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-timeline__node",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-timeline__card",
    style: {
      transform: `rotate(${i % 2 ? 0.5 : -0.6}deg)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-timeline__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-timeline__when"
  }, j.when), /*#__PURE__*/React.createElement(Badge, {
    tone: j.tone
  }, j.org)), /*#__PURE__*/React.createElement("h3", {
    className: "pf-timeline__title"
  }, j.title), /*#__PURE__*/React.createElement("p", {
    className: "pf-timeline__note"
  }, j.note))))));
}
window.Journey = Journey;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Journey.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
/* Top navigation — sticky paper bar with a script wordmark. */
function Nav({
  onNav
}) {
  const links = [['journey', 'Journey'], ['projects', 'Projects'], ['skills', 'Skills']];
  return /*#__PURE__*/React.createElement("nav", {
    className: "pf-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pf-nav__brand",
    onClick: () => onNav('top')
  }, "Jay\xA0Chen"), /*#__PURE__*/React.createElement("div", {
    className: "pf-nav__links"
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: "pf-nav__link",
    onClick: () => onNav(id)
  }, label)), /*#__PURE__*/React.createElement("a", {
    className: "pf-nav__resume",
    href: "#",
    onClick: e => e.preventDefault()
  }, "R\xE9sum\xE9")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
/* Projects — a grid of taped project cards that flip open to a detail page. */
function Projects({
  onOpen
}) {
  const {
    WrittenHeading,
    Card,
    Badge,
    WashiTape
  } = window.PaperdoodleDesignSystem_9051b3;
  const D = window.PD_DATA;
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section",
    id: "projects"
  }, /*#__PURE__*/React.createElement(WrittenHeading, {
    as: "h2",
    level: "h1",
    underline: true,
    animate: false,
    className: "pf-section__title"
  }, "A few things I\u2019ve built"), /*#__PURE__*/React.createElement("p", {
    className: "pf-section__lead"
  }, "Tap any project to flip to its page."), /*#__PURE__*/React.createElement("div", {
    className: "pf-projects"
  }, D.projects.map(p => /*#__PURE__*/React.createElement("div", {
    className: "pf-project",
    key: p.id,
    style: {
      transform: `rotate(${p.tilt}deg)`
    }
  }, p.tape && /*#__PURE__*/React.createElement(WashiTape, {
    color: p.tone,
    className: "pf-project__tape",
    tilt: p.tilt > 0 ? -4 : 4
  }, p.tape), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    className: "pf-project__card",
    onClick: () => onOpen(p.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-project__tag"
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    className: "pf-project__name"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "pf-project__summary"
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    className: "pf-project__tech"
  }, p.tech.slice(0, 4).map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: p.tone
  }, t)), p.tech.length > 4 && /*#__PURE__*/React.createElement("span", {
    className: "pf-project__more"
  }, "+", p.tech.length - 4)), /*#__PURE__*/React.createElement("span", {
    className: "pf-project__open"
  }, "open page \u2192"))))));
}
window.Projects = Projects;

/* Project detail — the page the grid flips to. */
function ProjectDetail({
  id,
  onBack
}) {
  const {
    WrittenHeading,
    Badge,
    Button,
    Divider
  } = window.PaperdoodleDesignSystem_9051b3;
  const D = window.PD_DATA;
  const p = D.projects.find(x => x.id === id) || D.projects[0];
  return /*#__PURE__*/React.createElement("article", {
    className: "pf-detail"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onBack,
    className: "pf-detail__back"
  }, "\u2190 back to projects"), /*#__PURE__*/React.createElement("div", {
    className: "pf-detail__sheet"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-detail__tag"
  }, p.tag), /*#__PURE__*/React.createElement(WrittenHeading, {
    level: "h1",
    underline: true,
    animate: true,
    className: "pf-detail__title"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "pf-detail__summary"
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    className: "pf-detail__tech"
  }, p.tech.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: p.tone
  }, t))), /*#__PURE__*/React.createElement(Divider, {
    label: "what it does",
    doodle: "\u2726"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "pf-detail__points"
  }, p.points.map((pt, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, pt))), /*#__PURE__*/React.createElement("div", {
    className: "pf-detail__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "View repo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onBack
  }, "More projects"))));
}
window.ProjectDetail = ProjectDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
/* Portfolio content — Jay Chen. Sourced from the repo's PRD.md + Resume.md.
   Plain global so every Babel screen script can read window.PD_DATA. */
window.PD_DATA = {
  name: 'Jay Chen',
  role: 'Software Engineer',
  subtitle: 'M.S. Computer Science @ CSI',
  blurb: "I build full-stack apps, dabble in machine learning, and keep a soft spot for C++. Currently finishing my Master's at the College of Staten Island and tutoring the next round of CS students.",
  contact: {
    email: 'jaychenjjc@gmail.com',
    github: 'github.com/JMyoi',
    linkedin: 'linkedin.com/in/jaychen09'
  },
  journey: [{
    when: '2026 — Present',
    title: 'CS Tutor',
    org: 'College of Staten Island',
    note: 'Tutoring intro/intermediate CS — C++, OOP, pointers, dynamic memory, data structures & algorithms.',
    tone: 'blue'
  }, {
    when: '2026 — 2027',
    title: "M.S. Computer Science",
    org: 'CSI · CUNY',
    note: 'Data structures & algorithms, machine learning, software engineering.',
    tone: 'lavender'
  }, {
    when: '2024',
    title: 'Data Science / ML Intern',
    org: 'MyLua Health',
    note: 'Built a maternal-health web scraper & DB; clustering + collaborative filtering for squad matching; AWS Lambda × Zapier integrations.',
    tone: 'mint'
  }, {
    when: '2023',
    title: 'Full-Stack Web Dev',
    org: 'NYC TTP Residency · CSI',
    note: 'HTML, CSS, JavaScript, React, PostgreSQL, Node, Express, Git.',
    tone: 'yellow'
  }, {
    when: '2021 — 2025',
    title: 'B.S. Computer Science',
    org: 'CSI · CUNY',
    note: 'OOD, operating systems, databases, AI, discrete math, graph theory.',
    tone: 'blue'
  }],
  projects: [{
    id: 'budgetflow',
    name: 'BudgetFlow',
    tag: 'Full-stack finance',
    tone: 'mint',
    tape: 'AI-powered',
    tilt: -1.4,
    tech: ['TypeScript', 'Next.js', 'React', 'Tailwind', 'PostgreSQL', 'Prisma', 'OpenAI'],
    summary: 'A personal finance & budget tracker that turns a photo of a receipt into structured expenses.',
    points: ['Leverages GPT-4o mini to parse transaction images directly into expense entries — no manual data entry.', 'Interactive dashboard with dynamic charts and multi-field filtering (date, category, amount).', 'Monthly budgeting with spend-vs-budget analysis and category-level breakdowns.']
  }, {
    id: 'battleship',
    name: 'Battleship',
    tag: 'C++ game',
    tone: 'yellow',
    tape: 'with AI',
    tilt: 0.8,
    tech: ['C++', 'Raylib'],
    summary: 'A fully graphical Battleship — local PvP and single-player against an AI, built on Raylib.',
    points: ['Modular architecture separating game logic from the GUI (Controller, Player, Board, Ship).', 'Full Raylib GUI: ship placement with rotation, turn-based firing, hit/miss rendering, sound design.', 'Three AI modes — Easy (random), Medium (hunt-and-target with axis-locking), Hard (perfect knowledge).']
  }, {
    id: 'chitchat',
    name: 'Chitchat',
    tag: 'Social platform',
    tone: 'lavender',
    tape: 'team of 4',
    tilt: -0.6,
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    summary: 'A full-stack PERN social media platform built with a 4-person capstone team.',
    points: ['Responsive React front-end with Tailwind; RESTful Express API layer.', 'PostgreSQL + Sequelize relational schema with robust storage and retrieval.', 'Git/GitHub collaboration across the team for the full build.']
  }, {
    id: 'lms',
    name: 'Library Mgmt System',
    tag: 'Java · GUI',
    tone: 'blue',
    tape: '',
    tilt: 1.1,
    tech: ['Java', 'Swing'],
    summary: 'Software to organize, catalog, circulate and track a library’s materials — terminal + GUI versions.',
    points: ['Automates cataloging, circulation and tracking of library resources.', 'Built first as a terminal foundation, then a full GUI version.']
  }, {
    id: 'dsa',
    name: "Jay's C++ DSA Library",
    tag: 'Library',
    tone: 'mint',
    tape: '',
    tilt: -1.1,
    tech: ['C++'],
    summary: 'A reusable collection of data structures and algorithms in modern C++.',
    points: ['Hand-rolled containers and algorithms for study and reuse.', 'A growing personal reference implementation.']
  }, {
    id: 'sorting',
    name: 'Sorting Analysis',
    tag: 'Algorithms',
    tone: 'yellow',
    tape: '',
    tilt: 0.6,
    tech: ['C++', 'Analysis'],
    summary: 'Analyzing the running time and step counts of classic sorting algorithms.',
    points: ['Empirical comparison of running time and number of steps.', 'Visual write-up of algorithmic trade-offs.']
  }],
  skills: {
    Languages: ['C++', 'JavaScript', 'TypeScript', 'Java', 'Python', 'HTML', 'CSS'],
    'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind', 'Raylib'],
    'Developer Tools': ['Git / GitHub', 'Postman', 'PostgreSQL', 'Prisma']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.WashiTape = __ds_scope.WashiTape;

__ds_ns.WrittenHeading = __ds_scope.WrittenHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

})();
