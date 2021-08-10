/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

const { PACKAGE_VERSION } = imports.misc.config;
function ShellVersionMatch(version) {
    return PACKAGE_VERSION.match(new RegExp(`^${version}`)) !== null;
}

const Clutter$r = imports.gi.Clutter;
function polyfillClutter() {
    const OldClutter = Clutter$r;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Down'))
        OldClutter.KEY_Down = OldClutter.Down;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Right'))
        OldClutter.KEY_Right = OldClutter.Right;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Left'))
        OldClutter.KEY_Left = OldClutter.Left;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Up'))
        OldClutter.KEY_Up = OldClutter.Up;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Escape'))
        OldClutter.KEY_Escape = OldClutter.Escape;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_ISO_Left_Tab'))
        OldClutter.KEY_ISO_Left_Tab = OldClutter.ISO_Left_Tab;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_KP_Enter'))
        OldClutter.KEY_KP_Enter = OldClutter.KP_Enter;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Return'))
        OldClutter.KEY_Return = OldClutter.Return;
    if (!Object.hasOwnProperty.call(OldClutter, 'KEY_Tab'))
        OldClutter.KEY_Tab = OldClutter.Tab;
}
function SetAllocation(actor, box, flags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        const compat = actor;
        compat.set_allocation(box, flags);
    }
    else {
        actor.set_allocation(box);
    }
}
function Allocate(actor, box, flags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        const compat = actor;
        compat.allocate(box, flags);
    }
    else {
        actor.allocate(box);
    }
}
function AllocatePreferredSize(actor, flags) {
    if (ShellVersionMatch('3.34') || ShellVersionMatch('3.36')) {
        const compat = actor;
        compat.allocate_preferred_size(flags);
    }
    else {
        actor.allocate_preferred_size(actor.x, actor.y);
    }
}

const Me$Q = imports.misc.extensionUtils.getCurrentExtension();
const GObject$8 = imports.gi.GObject;
const Signals$5 = imports.signals;
function registerGObjectClass(target) {
    if (Object.prototype.hasOwnProperty.call(target, 'metaInfo')) {
        return GObject$8.registerClass(target.metaInfo, target);
    }
    else {
        return GObject$8.registerClass(target);
    }
}
class WithSignals {
    emit(name, ...params) { }
    connect(name, callback) {
        return 0;
    }
    disconnect(id) { }
}
Signals$5.addSignalMethods(WithSignals.prototype);

const Me$P = imports.misc.extensionUtils.getCurrentExtension();
const St$j = imports.gi.St;
const Clutter$q = imports.gi.Clutter;
const GLib$m = imports.gi.GLib;
let RippleWave = class RippleWave extends St$j.Widget {
    _init({ mouseX, mouseY, size, }) {
        super._init({
            style_class: 'ripple-wave',
        });
        this.destroyed = false;
        this.connect('destroy', () => {
            this.destroyed = true;
        });
        this.set_pivot_point(0.5, 0.5);
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.fullSize = size * 3;
        this.width = this.fullSize;
        this.height = this.fullSize;
        this.x = Math.round(this.mouseX - this.width / 2);
        this.y = Math.round(this.mouseY - this.height / 2);
        this.scale_x = 32 / this.fullSize;
        this.scale_y = 32 / this.fullSize;
        GLib$m.idle_add(GLib$m.PRIORITY_DEFAULT, () => {
            this.ease({
                scale_x: 1,
                scale_y: 1,
                duration: (this.fullSize / 800) * 1000,
                mode: Clutter$q.AnimationMode.EASE_OUT_QUAD,
            });
            return GLib$m.SOURCE_REMOVE;
        });
    }
    removeIn(second) {
        this.ease({
            opacity: 0,
            duration: second * 1000,
            mode: Clutter$q.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                GLib$m.idle_add(GLib$m.PRIORITY_DEFAULT, () => {
                    if (!this.destroyed) {
                        this.remove_all_transitions();
                        this.destroy();
                    }
                    return false;
                });
            },
        });
    }
};
RippleWave = __decorate([
    registerGObjectClass
], RippleWave);
let RippleBackground = class RippleBackground extends St$j.Widget {
    _init(eventListener) {
        super._init({
            clip_to_allocation: true,
        });
        this.displayed = true;
        eventListener.connect('event', (actor, event) => {
            const eventType = event.type();
            if ([
                Clutter$q.EventType.BUTTON_PRESS,
                Clutter$q.EventType.TOUCH_BEGIN,
            ].indexOf(eventType) > -1) {
                const [_, x, y] = this.transform_stage_point(...event.get_coords());
                this.createRippleWave(x, y);
            }
            else if ([
                Clutter$q.EventType.BUTTON_RELEASE,
                Clutter$q.EventType.TOUCH_END,
                Clutter$q.EventType.LEAVE,
            ].indexOf(eventType) > -1) {
                this.removeRippleWave();
            }
            return false;
        });
        const deactivateId = global.stage.connect('deactivate', this.removeRippleWave.bind(this));
        this.connect('destroy', () => {
            if (deactivateId)
                global.stage.disconnect(deactivateId);
        });
    }
    createRippleWave(x, y) {
        this.lastWave = new RippleWave({
            mouseX: x,
            mouseY: y,
            size: Math.max(this.width, this.height),
        });
        this.add_child(this.lastWave);
    }
    removeRippleWave() {
        if (this.lastWave) {
            const waveToDelete = this.lastWave;
            delete this.lastWave;
            waveToDelete.removeIn(0.8);
        }
    }
};
RippleBackground = __decorate([
    registerGObjectClass
], RippleBackground);

const Clutter$p = imports.gi.Clutter;
const GObject$7 = imports.gi.GObject;
const Meta$a = imports.gi.Meta;
const St$i = imports.gi.St;
const Me$O = imports.misc.extensionUtils.getCurrentExtension();
let MatButton = class MatButton extends St$i.Widget {
    _init(params) {
        const isPrimary = params.primary;
        const child = params.child;
        const super_params = params;
        delete super_params.child;
        delete super_params.primary;
        Object.assign(super_params, {
            reactive: true,
            track_hover: true,
            clip_to_allocation: true,
        });
        super._init(super_params);
        this.set_child(child);
        this.rippleBackground = new RippleBackground(this);
        this.add_child(this.rippleBackground);
        this.add_style_class_name('mat-button');
        if (isPrimary) {
            this.add_style_class_name('primary');
        }
        const clickAction = new Clutter$p.ClickAction();
        clickAction.connect('clicked', (action) => {
            this.clicked = true;
            const button = action.get_button();
            this.emit('clicked', button);
            if (button === Clutter$p.BUTTON_PRIMARY || button === 0) {
                this.emit('primary-action');
            }
            if (button === Clutter$p.BUTTON_SECONDARY) {
                this.emit('secondary-action');
            }
            this.rippleBackground.removeRippleWave();
            return true;
        });
        clickAction.connect('long-press', this._onLongPress.bind(this));
        this.add_action(clickAction);
        this.connect('enter-event', () => {
            global.display.set_cursor(Meta$a.Cursor.POINTING_HAND);
        });
        this.connect('leave-event', () => {
            global.display.set_cursor(Meta$a.Cursor.DEFAULT);
        });
    }
    _onLongPress(action, actor, state) {
        if (state == Clutter$p.LongPressState.CANCEL) {
            const event = Clutter$p.get_current_event();
            if (this._longPressLater)
                return true;
            this._longPressLater = Meta$a.later_add(Meta$a.LaterType.BEFORE_REDRAW, () => {
                delete this._longPressLater;
                if (this.clicked) {
                    delete this.clicked;
                    return false;
                }
                action.release();
                this.emit('drag-start', event);
                return false;
            });
        }
        if (state == Clutter$p.LongPressState.ACTIVATE) {
            this.emit('secondary-action');
        }
        return true;
    }
    vfunc_get_preferred_width(forHeight) {
        if (!this.child)
            return super.vfunc_get_preferred_width(forHeight);
        return this.child.vfunc_get_preferred_width(forHeight);
    }
    vfunc_get_preferred_height(forWidth) {
        if (!this.child)
            return super.vfunc_get_preferred_height(forWidth);
        return this.child.vfunc_get_preferred_height(forWidth);
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        if (this.child) {
            Allocate(this.child, contentBox, flags);
        }
        if (this.rippleBackground.get_parent()) {
            Allocate(this.rippleBackground, contentBox, flags);
        }
    }
    set_child(child) {
        if (!child)
            return;
        if (this.child) {
            this.remove_child(this.child);
        }
        this.child = child;
        this.add_child(child);
    }
};
MatButton.metaInfo = {
    GTypeName: 'MatButton',
    Signals: {
        clicked: {
            param_types: [GObject$7.TYPE_INT],
        },
        'primary-action': {},
        'secondary-action': {},
        'drag-start': {
            param_types: [Clutter$p.Event.$gtype],
        },
    },
};
MatButton = __decorate([
    registerGObjectClass
], MatButton);

const GLib$l = imports.gi.GLib;
const Meta$9 = imports.gi.Meta;
const Me$N = imports.misc.extensionUtils.getCurrentExtension();
const Main$m = imports.ui.main;
let MatPanelButton = class MatPanelButton extends MatButton {
    _init(params = {}) {
        super._init(params);
        this.add_style_class_name('mat-panel-button');
        const panelSizeSignal = Me$N.msThemeManager.connect('panel-size-changed', () => {
            this.queue_relayout();
        });
        this.monitorIndex = this.findMonitor();
        const monitorSignal = Main$m.layoutManager.connect('monitors-changed', () => {
            GLib$l.idle_add(GLib$l.PRIORITY_LOW, () => {
                this.monitorIndex = this.findMonitor();
                return false;
            });
        });
        this.connect('destroy', () => {
            Me$N.msThemeManager.disconnect(panelSizeSignal);
            Main$m.layoutManager.disconnect(monitorSignal);
        });
    }
    findMonitor() {
        const [x, y] = this.get_transformed_position();
        return (global.display.get_monitor_index_for_rect(new Meta$9.Rectangle({ x: x, y: y, width: 0, height: 0 })) || global.display.get_current_monitor());
    }
    vfunc_get_preferred_width(_forHeight) {
        return [
            Me$N.msThemeManager.getPanelSize(this.monitorIndex),
            Me$N.msThemeManager.getPanelSize(this.monitorIndex),
        ];
    }
    vfunc_get_preferred_height(_forWidth) {
        return [
            Me$N.msThemeManager.getPanelSize(this.monitorIndex),
            Me$N.msThemeManager.getPanelSize(this.monitorIndex),
        ];
    }
};
MatPanelButton.metaInfo = {
    GTypeName: 'MatPanelButton',
};
MatPanelButton = __decorate([
    registerGObjectClass
], MatPanelButton);

const Me$M = imports.misc.extensionUtils.getCurrentExtension();
const Signals$4 = imports.signals;
const Clutter$o = imports.gi.Clutter;
class MsManager extends WithSignals {
    constructor() {
        super();
        this.signals = [];
    }
    observe(subject, property, callback) {
        const signal = {
            from: subject,
            id: subject.connect(property, callback),
        };
        this.signals.push(signal);
        if (subject instanceof Clutter$o.Actor) {
            subject.connect('destroy', () => {
                this.signals.splice(this.signals.indexOf(signal), 1);
            });
        }
        return () => {
            subject.disconnect(signal.id);
        };
    }
    destroy() {
        this.signals.forEach((signal) => {
            if (signal.from) {
                try {
                    signal.from.disconnect(signal.id);
                }
                catch (error) {
                    Me$M.log(`Failed to disconnect signal ${signal.id} from ${signal.from} ${signal.from.constructor.name} ${signal.from.toString()}  `);
                }
            }
        });
    }
}

const Gio$d = imports.gi.Gio;
const Me$L = imports.misc.extensionUtils.getCurrentExtension();
const getSettings = (key) => {
    const schema = Gio$d.SettingsSchemaSource.new_from_directory(Me$L.dir.get_child('schemas').get_path(), Gio$d.SettingsSchemaSource.get_default(), false).lookup(Me$L.metadata[key], true);
    if (schema !== null) {
        return new Gio$d.Settings({
            settings_schema: schema,
        });
    }
    else {
        throw Error('Cannot find schema');
    }
};

const Gio$c = imports.gi.Gio;
const { byteArray } = imports;
const GLib$k = imports.gi.GLib;
const St$h = imports.gi.St;
const Main$l = imports.ui.main;
const Me$K = imports.misc.extensionUtils.getCurrentExtension();
const VerticalPanelPositionEnum = {
    LEFT: 0,
    RIGHT: 1,
};
const HorizontalPanelPositionEnum = {
    TOP: 0,
    BOTTOM: 1,
};
const PanelIconStyleEnum = {
    HYBRID: 0,
    CATEGORY: 1,
    APPLICATION: 2,
};
const FocusEffectEnum = {
    NONE: 0,
    DEFAULT: 1,
    BORDER: 2,
};
class MsThemeManager extends MsManager {
    constructor() {
        super();
        this.themeContext = St$h.ThemeContext.get_for_stage(global.stage);
        this.theme = this.themeContext.get_theme();
        this.themeSettings = getSettings('theme');
        this.themeFile = Gio$c.file_new_for_path(`${GLib$k.get_user_cache_dir()}/${Me$K.uuid}-theme.css`);
        this.themeValue = this.themeSettings.get_string('theme');
        this.primary = this.themeSettings.get_string('primary-color');
        this.observe(this.themeContext, 'changed', () => {
            Me$K.log('theme changed');
            this.theme = this.themeContext.get_theme();
            if (Main$l.uiGroup.has_style_class_name('no-theme')) {
                Main$l.uiGroup.remove_style_class_name('no-theme');
            }
            if (!this.theme.application_stylesheet) {
                Main$l.uiGroup.add_style_class_name('no-theme');
            }
        });
        this.observe(this.themeSettings, 'changed::theme', (schema) => {
            this.themeValue = schema.get_string('theme');
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::primary-color', (schema) => {
            this.primary = schema.get_string('primary-color');
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::vertical-panel-position', () => {
            this.emit('vertical-panel-position-changed');
        });
        this.observe(this.themeSettings, 'changed::horizontal-panel-position', () => {
            this.emit('horizontal-panel-position-changed');
        });
        this.observe(this.themeSettings, 'changed::panel-opacity', () => {
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::surface-opacity', () => {
            this.regenerateStylesheet();
        });
        this.observe(this.themeSettings, 'changed::panel-size', () => {
            this.emit('panel-size-changed');
        });
        this.observe(this.themeSettings, 'changed::blur-background', () => {
            this.emit('blur-background-changed');
        });
        this.observe(this.themeSettings, 'changed::panel-icon-style', () => {
            this.emit('panel-icon-style-changed');
        });
        this.observe(this.themeSettings, 'changed::panel-icon-color', () => {
            this.emit('panel-icon-color-changed');
        });
        this.observe(this.themeSettings, 'changed::clock-horizontal', () => {
            this.emit('clock-horizontal-changed');
        });
        this.observe(this.themeSettings, 'changed::clock-app-launcher', () => {
            this.emit('clock-app-launcher-changed');
        });
        this.observe(this.themeSettings, 'changed::focus-effect', () => {
            this.emit('focus-effect-changed');
        });
    }
    get verticalPanelPosition() {
        return this.themeSettings.get_enum('vertical-panel-position');
    }
    get horizontalPanelPosition() {
        return this.themeSettings.get_enum('horizontal-panel-position');
    }
    get panelOpacity() {
        return this.themeSettings.get_int('panel-opacity');
    }
    get panelIconStyle() {
        return this.themeSettings.get_enum('panel-icon-style');
    }
    set panelIconStyle(value) {
        this.themeSettings.set_enum('panel-icon-style', value);
    }
    get panelIconColor() {
        return this.themeSettings.get_boolean('panel-icon-color');
    }
    get surfaceOpacity() {
        return this.themeSettings.get_int('surface-opacity');
    }
    get blurBackground() {
        return this.themeSettings.get_boolean('blur-background');
    }
    get clockHorizontal() {
        return this.themeSettings.get_boolean('clock-horizontal');
    }
    get clockAppLauncher() {
        return this.themeSettings.get_boolean('clock-app-launcher');
    }
    getPanelSize(monitorIndex) {
        return (this.themeSettings.get_int('panel-size') *
            global.display.get_monitor_scale(monitorIndex));
    }
    getPanelSizeNotScaled() {
        return this.themeSettings.get_int('panel-size');
    }
    get focusEffect() {
        return this.themeSettings.get_enum('focus-effect');
    }
    isColorDark(color) {
        color = color.replace('#', '');
        const r = parseInt(color.substring(0, 2), 16);
        const g = parseInt(color.substring(2, 4), 16);
        const b = parseInt(color.substring(4, 6), 16);
        const linearColors = [r / 255, g / 255, b / 255];
        for (let i = 0; i < linearColors.length; ++i) {
            if (linearColors[i] <= 0.03928) {
                linearColors[i] = linearColors[i] / 12.92;
            }
            else {
                linearColors[i] = Math.pow((linearColors[i] + 0.055) / 1.055, 2.4);
            }
        }
        const luminance = 0.2126 * linearColors[0] +
            0.7152 * linearColors[1] +
            0.0722 * linearColors[2];
        return luminance < 0.179;
    }
    async readFileContent(file) {
        return new Promise((resolve, reject) => {
            file.load_contents_async(null, (obj, res) => {
                const [success, contents] = obj.load_contents_finish(res);
                if (success) {
                    const content = byteArray.toString(contents);
                    resolve(content);
                }
                else {
                    reject(success);
                }
            });
        });
    }
    async writeContentToFile(content, file) {
        return new Promise((resolve, _) => {
            const contentBytes = new GLib$k.Bytes(byteArray.fromString(content));
            file.replace_async(null, false, Gio$c.FileCreateFlags.NONE, GLib$k.PRIORITY_DEFAULT, null, (file, res) => {
                const stream = file.replace_finish(res);
                stream.write_bytes_async(contentBytes, GLib$k.PRIORITY_DEFAULT, null, (ioStream, wRes) => {
                    ioStream.write_bytes_finish(wRes);
                    stream.close(null);
                    resolve(file);
                });
            });
        });
    }
    async buildThemeStylesheetToFile(file) {
        const originThemeFile = Gio$c.file_new_for_path(`${Me$K.path}/style-${this.themeValue}-theme.css`);
        let content = await this.readFileContent(originThemeFile);
        content = content.replace(/#3f51b5/g, this.primary);
        content = content.replace(/0.876/g, `${this.panelOpacity / 100}`);
        content = content.replace(/0.987/g, `${this.surfaceOpacity / 100}`);
        await this.writeContentToFile(content, file);
    }
    async regenerateStylesheet() {
        this.unloadStylesheet();
        if (!this.theme.application_stylesheet) {
            Main$l.uiGroup.add_style_class_name('no-theme');
        }
        if (ShellVersionMatch('3.34')) {
            this.themeContext.set_theme(new St$h.Theme());
        }
        await this.buildThemeStylesheetToFile(this.themeFile);
        this.theme.load_stylesheet(this.themeFile);
        GLib$k.idle_add(GLib$k.PRIORITY_DEFAULT_IDLE, () => {
            this.themeContext.set_theme(this.theme);
            Main$l.reloadThemeResource();
            Main$l.loadTheme();
            return GLib$k.SOURCE_REMOVE;
        });
    }
    unloadStylesheet() {
        if (Main$l.uiGroup.has_style_class_name('no-theme')) {
            Main$l.uiGroup.remove_style_class_name('no-theme');
        }
        this.theme.unload_stylesheet(this.themeFile);
    }
    destroy() {
        super.destroy();
        if (!Me$K.locked) {
            this.unloadStylesheet();
        }
    }
}

const GLib$j = imports.gi.GLib;
function assert(shouldBeTrue, message) {
    if (!shouldBeTrue) {
        throw Error('Assertion failed: ' + message);
    }
}
function logAssert(shouldBeTrue, message) {
    if (!shouldBeTrue) {
        GLib$j.log_structured('Material Shell', GLib$j.LogLevelFlags.FLAG_FATAL, {
            MESSAGE: 'Assertion failed: ' + message,
            STACKTRACE: new Error().stack,
        });
    }
    return shouldBeTrue;
}

const GLib$i = imports.gi.GLib;
const Main$k = imports.ui.main;
const Me$J = imports.misc.extensionUtils.getCurrentExtension();
const range = (to) => Array(to)
    .fill(0)
    .map((_, i) => i);
function throttle(func, wait, options) {
    let context;
    let args, result;
    let timeout = null;
    let previous = 0;
    const definedOptions = Object.assign({
        trailing: true,
        leading: true,
    }, options);
    const later = function () {
        previous = definedOptions.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout)
            context = args = null;
        return false;
    };
    return function (...args) {
        const now = Date.now();
        if (!previous && definedOptions.leading === false)
            previous = now;
        const remaining = wait - (now - previous);
        context = this;
        if (remaining <= 0 || remaining > wait) {
            if (timeout !== null) {
                GLib$i.source_remove(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout)
                context = args = null;
        }
        else if (!timeout && definedOptions.trailing !== false) {
            timeout = GLib$i.timeout_add(GLib$i.PRIORITY_DEFAULT, remaining, later);
        }
        return result;
    };
}
const isParentOfActor = (parent, actor) => {
    if (!parent || !actor) {
        return false;
    }
    let isParent = false;
    let parentOfActor = actor;
    while (parentOfActor.get_parent() && !isParent) {
        isParent = parentOfActor === parent;
        parentOfActor = parentOfActor.get_parent();
    }
    return isParent;
};
const reparentActor = (actor, parent) => {
    if (!actor || !parent)
        return;
    Me$J.reparentInProgress = true;
    const restoreFocusTo = actor.has_key_focus()
        ? actor
        : isParentOfActor(actor, global.stage.key_focus)
            ? global.stage.key_focus
            : null;
    const currentParent = actor.get_parent();
    if (restoreFocusTo) {
        Main$k.layoutManager.uiGroup.grab_key_focus();
    }
    if (currentParent) {
        currentParent.remove_child(actor);
    }
    parent.add_child(actor);
    if (restoreFocusTo) {
        restoreFocusTo.grab_key_focus();
    }
    Me$J.reparentInProgress = false;
};
const InfinityTo0 = (number) => {
    return Math.abs(number) === Infinity ? 0 : number;
};

const Clutter$n = imports.gi.Clutter;
const Gio$b = imports.gi.Gio;
const GnomeDesktop$2 = imports.gi.GnomeDesktop;
const St$g = imports.gi.St;
const Main$j = imports.ui.main;
const Me$I = imports.misc.extensionUtils.getCurrentExtension();
let MsStatusArea = class MsStatusArea extends Clutter$n.Actor {
    _init() {
        super._init({
            layout_manager: new Clutter$n.BoxLayout({
                orientation: Clutter$n.Orientation.VERTICAL,
                pack_start: true,
            }),
        });
        this.gnomeShellPanel = Main$j.panel;
        this.leftBoxActors = [];
        this.centerBoxActors = [];
        this.rightBoxActors = [];
        this.dateMenu = this.gnomeShellPanel.statusArea.dateMenu;
        this.enable();
    }
    enable() {
        this.verticaliseDateMenuButton();
        this.stealPanelActors();
        this.overridePanelMenuSide();
    }
    verticaliseDateMenuButton() {
        assert(this.msDateMenuBox === undefined, 'date menu button has alreayd been verticalized');
        this.originalDateMenuBox = this.dateMenu._clockDisplay.get_parent();
        this.dateMenu.remove_child(this.originalDateMenuBox);
        this.msDateMenuBox = new MsDateMenuBox(this.dateMenu);
        this.dateMenu.add_child(this.msDateMenuBox);
    }
    unVerticaliseDateMenuButton() {
        assert(this.msDateMenuBox !== undefined, "date menu button hasn't been verticalized");
        this.msDateMenuBox.destroy();
        delete this.msDateMenuBox;
        this.dateMenu.add_child(this.originalDateMenuBox);
    }
    stealPanelActors() {
        this.gnomeShellPanel._leftBox
            .get_children()
            .filter((actor) => {
            return (actor !=
                this.gnomeShellPanel.statusArea.activities.container &&
                actor != this.gnomeShellPanel.statusArea.appMenu.container);
        })
            .forEach((actor) => {
            this.stealActor(actor, this.leftBoxActors);
        });
        this.leftBoxActorAddedSignal = this.gnomeShellPanel._leftBox.connect('actor-added', (_, actor) => {
            this.stealActor(actor, this.leftBoxActors);
        });
        this.gnomeShellPanel._centerBox.get_children().forEach((actor) => {
            this.stealActor(actor, this.centerBoxActors);
        });
        this.centerBoxActorAddedSignal =
            this.gnomeShellPanel._centerBox.connect('actor-added', (_, actor) => {
                this.stealActor(actor, this.centerBoxActors);
            });
        this.gnomeShellPanel._rightBox
            .get_children()
            .reverse()
            .forEach((actor) => {
            this.stealActor(actor, this.rightBoxActors);
        });
        this.rightBoxActorAddedSignal = this.gnomeShellPanel._rightBox.connect('actor-added', (_, actor) => {
            this.stealActor(actor, this.rightBoxActors);
        });
    }
    stealActor(actor, container) {
        container.push(actor);
        actor.connect('destroy', () => {
            container.splice(container.indexOf(actor), 1);
        });
        actor.y_expand = false;
        actor.x_expand = true;
        this.recursivelySetVertical(actor, true);
        reparentActor(actor, this);
    }
    restorePanelActors() {
        this.gnomeShellPanel._leftBox.disconnect(this.leftBoxActorAddedSignal);
        this.gnomeShellPanel._centerBox.disconnect(this.centerBoxActorAddedSignal);
        this.gnomeShellPanel._rightBox.disconnect(this.rightBoxActorAddedSignal);
        this.leftBoxActors.forEach((actor) => {
            if (!actor)
                return;
            this.recursivelySetVertical(actor, false);
            reparentActor(actor, this.gnomeShellPanel._leftBox);
        });
        this.centerBoxActors.forEach((actor) => {
            if (!actor)
                return;
            this.recursivelySetVertical(actor, false);
            reparentActor(actor, this.gnomeShellPanel._centerBox);
        });
        this.rightBoxActors.reverse().forEach((actor) => {
            if (!actor)
                return;
            this.recursivelySetVertical(actor, false);
            reparentActor(actor, this.gnomeShellPanel._rightBox);
        });
    }
    recursivelySetVertical(actor, value) {
        if (actor instanceof St$g.BoxLayout) {
            actor.vertical = value;
            actor.set_x_align(Clutter$n.ActorAlign.CENTER);
        }
        if (actor instanceof St$g.Icon &&
            actor.has_style_class_name('popup-menu-arrow')) {
            actor.visible = !value;
        }
        if (actor.has_style_class_name &&
            actor.has_style_class_name('panel-button')) {
            actor.y_expand = !value;
        }
        actor.get_children().forEach((child) => {
            this.recursivelySetVertical(child, value);
        });
    }
    overridePanelMenuSide() {
        this.gnomeShellPanel.menuManager._menus.forEach((menuData) => {
            if (menuData.menu._boxPointer) {
                menuData.menu._boxPointer.oldArrowSideFunction =
                    menuData.menu._boxPointer._calculateArrowSide;
                menuData.menu._boxPointer._calculateArrowSide = function () {
                    return Me$I.msThemeManager.verticalPanelPosition ===
                        VerticalPanelPositionEnum.LEFT
                        ? St$g.Side.LEFT
                        : St$g.Side.RIGHT;
                };
            }
        });
    }
    restorePanelMenuSide() {
        this.gnomeShellPanel.menuManager._menus.forEach((menuData) => {
            if (menuData.menu._boxPointer) {
                menuData.menu._boxPointer._calculateArrowSide =
                    menuData.menu._boxPointer.oldArrowSideFunction;
                delete menuData.menu._boxPointer.oldArrowSideFunction;
            }
        });
    }
    disable() {
        Me$I.logFocus('disable statusArea');
        this.unVerticaliseDateMenuButton();
        this.restorePanelMenuSide();
        this.restorePanelActors();
        this.gnomeShellPanel.statusArea.aggregateMenu.set_y_expand(true);
    }
};
MsStatusArea.metaInfo = {
    GTypeName: 'MsStatusArea',
};
MsStatusArea = __decorate([
    registerGObjectClass
], MsStatusArea);
let MsDateMenuBox = class MsDateMenuBox extends St$g.Widget {
    _init(dateMenu) {
        super._init({
            x_align: Clutter$n.ActorAlign.CENTER,
            layout_manager: new Clutter$n.BinLayout(),
        });
        this.dateMenu = dateMenu;
        this.indicatorActor =
            this.dateMenu._indicator instanceof Clutter$n.Actor
                ? this.dateMenu._indicator
                : this.dateMenu._indicator.actor;
        this._wallClock = new GnomeDesktop$2.WallClock({ time_only: true });
        this.clockLabel = new St$g.Label({});
        this.notificationIcon = new St$g.Icon({
            gicon: Gio$b.icon_new_for_string(`${Me$I.path}/assets/icons/bell-symbolic.svg`),
        });
        this.notificationIconRing = new St$g.Icon({
            style_class: 'primary',
            gicon: Gio$b.icon_new_for_string(`${Me$I.path}/assets/icons/bell-ring-symbolic.svg`),
        });
        this.dndIcon = new St$g.Icon({
            gicon: Gio$b.icon_new_for_string(`${Me$I.path}/assets/icons/bell-off-symbolic.svg`),
        });
        this._settings = new Gio$b.Settings({
            schema_id: 'org.gnome.desktop.notifications',
        });
        this.iconDisplay = new Clutter$n.Actor();
        this.iconDisplay.add_child(this.notificationIcon);
        this.iconDisplay.add_child(this.notificationIconRing);
        this.iconDisplay.add_child(this.dndIcon);
        if (Me$I.msThemeManager.clockHorizontal) {
            this.add_child(this.iconDisplay);
        }
        else {
            this.add_child(this.clockLabel);
        }
        Me$I.msThemeManager.connect('clock-horizontal-changed', () => {
            if (Me$I.msThemeManager.clockHorizontal) {
                this.remove_child(this.clockLabel);
                this.add_child(this.iconDisplay);
            }
            else {
                this.remove_child(this.iconDisplay);
                this.add_child(this.clockLabel);
            }
            this.updateVisibility();
        });
        this.updateVisibility();
        this.updateClock();
        this.dateMenuSignal = this._wallClock.connect('notify::clock', this.updateClock.bind(this));
        this.indicatorSignal = this.indicatorActor.connect('notify::visible', this.updateVisibility.bind(this));
        this.connect('destroy', () => {
            this.indicatorActor.disconnect(this.indicatorSignal);
            this._wallClock.disconnect(this.dateMenuSignal);
            delete this._wallClock;
        });
    }
    updateClock() {
        const clockSections = this._wallClock.clock
            .replace(/∶/g, ' ')
            .split(' ');
        if (!clockSections[0])
            clockSections.shift();
        const markup = clockSections
            .map((section) => `<span>${section}</span>`)
            .join('\n');
        this.clockLabel.clutter_text.set_markup(markup);
        this.updateVisibility();
    }
    updateVisibility() {
        const doNotDisturb = !this._settings.get_boolean('show-banners');
        if (this.indicatorActor.visible) {
            if (Me$I.msThemeManager.clockHorizontal) {
                if (doNotDisturb) {
                    this.dndIcon.show();
                    this.notificationIconRing.hide();
                }
                else {
                    this.dndIcon.hide();
                    this.notificationIconRing.show();
                }
                this.notificationIcon.hide();
            }
            else {
                if (doNotDisturb) {
                    if (this.clockLabel.has_style_class_name('primary')) {
                        this.clockLabel.remove_style_class_name('primary');
                    }
                    return;
                }
                if (this.clockLabel.has_style_class_name('primary'))
                    return;
                this.clockLabel.add_style_class_name('primary');
            }
        }
        else {
            if (Me$I.msThemeManager.clockHorizontal) {
                this.notificationIcon.show();
                this.notificationIconRing.hide();
                this.dndIcon.hide();
            }
            else {
                if (!this.clockLabel.has_style_class_name('primary'))
                    return;
                this.clockLabel.remove_style_class_name('primary');
            }
        }
    }
};
MsDateMenuBox.metaInfo = {
    GTypeName: 'MsDateMenuBox',
};
MsDateMenuBox = __decorate([
    registerGObjectClass
], MsDateMenuBox);

const Util$1 = imports.misc.util;
const updateTitleBarVisibility = function (metaWindow) {
    const msWorkspaceIsInFloatLayout = metaWindow.msWindow.msWorkspace.layout.state.key === 'float';
    const shouldTitleBarBeVisible = msWorkspaceIsInFloatLayout;
    if (!metaWindow.titleBarVisible ||
        metaWindow.titleBarVisible !== shouldTitleBarBeVisible) {
        setTitleBarVisibility(metaWindow, shouldTitleBarBeVisible);
    }
};
const setTitleBarVisibility = function (metaWindow, visible) {
    const windowXID = getWindowXID(metaWindow);
    if (!windowXID || metaWindow.is_client_decorated() || !metaWindow.decorated)
        return;
    Util$1.spawn([
        'xprop',
        '-id',
        windowXID,
        '-f',
        '_MOTIF_WM_HINTS',
        '32c',
        '-set',
        '_MOTIF_WM_HINTS',
        `2, 0, ${visible ? '1' : '2'} 0, 0`,
    ]);
    metaWindow.titleBarVisible = visible;
};
const getWindowXID = function (win) {
    const desc = win.get_description() || '';
    const match = desc.match(/0x[0-9a-f]+/) || [null];
    return match[0];
};

const Clutter$m = imports.gi.Clutter;
const GLib$h = imports.gi.GLib;
const GObject$6 = imports.gi.GObject;
const St$f = imports.gi.St;
const Animation$1 = imports.ui.animation;
const Me$H = imports.misc.extensionUtils.getCurrentExtension();
let AppPlaceholder = class AppPlaceholder extends St$f.Widget {
    _init(app) {
        super._init({
            x_align: Clutter$m.ActorAlign.CENTER,
            y_align: Clutter$m.ActorAlign.CENTER,
            layout_manager: new Clutter$m.BinLayout(),
            reactive: true,
        });
        this.pressed = false;
        this.vertical = true;
        this.app = app;
        this.icon = this.app.create_icon_texture(248);
        this.icon.set_style('padding:24px');
        this.spinnerContainer = new Clutter$m.Actor({});
        this.spinnerContainer.set_opacity(0);
        this.appTitle = new St$f.Label({
            text: app.get_name(),
            style_class: 'headline-4 text-high-emphasis',
        });
        this.callToAction = new St$f.Label({
            text: 'Click anywhere to launch',
            style_class: 'headline-5 text-medium-emphasis',
            style: 'margin-top:32px;',
        });
        this.identityContainer = new St$f.BoxLayout({
            vertical: true,
            x_align: Clutter$m.ActorAlign.START,
            y_align: Clutter$m.ActorAlign.CENTER,
            x_expand: true,
            y_expand: true,
            style: 'padding:24px; text-align:start;',
        });
        [
            this.appTitle,
            this.callToAction,
            this.spinnerContainer,
        ].forEach((actor) => this.identityContainer.add_child(actor));
        this.box = new St$f.BoxLayout({
            vertical: false,
            style: 'padding:48px; border-radius:48px',
        });
        this.box.add_child(this.icon);
        this.box.add_child(this.identityContainer);
        this.add_style_class_name('surface-darker');
        this.add_child(this.box);
        this.clickableContainer = new RippleBackground(this);
        this.clickableContainer.x_expand = true;
        this.clickableContainer.y_expand = true;
        this.add_child(this.clickableContainer);
        this.connect('event', (actor, event) => {
            switch (event.type()) {
                case Clutter$m.EventType.BUTTON_PRESS:
                case Clutter$m.EventType.TOUCH_BEGIN:
                    this.pressed = true;
                    break;
                case Clutter$m.EventType.BUTTON_RELEASE:
                case Clutter$m.EventType.TOUCH_END:
                    this.activate(event.get_button());
                    this.pressed = false;
                    break;
                case Clutter$m.EventType.LEAVE:
                    this.pressed = false;
                    break;
                default:
                    break;
            }
        });
        this.connect('key-press-event', (entry, event) => {
            const symbol = event.hardware_keycode;
            switch (symbol) {
                case Clutter$m.KEY_Return:
                case Clutter$m.KEY_KP_Enter:
                    this.activate(0);
                    return Clutter$m.EVENT_STOP;
            }
            return Clutter$m.EVENT_PROPAGATE;
        });
        this.connect('key-focus-in', () => {
            this.box.add_style_class_name('surface');
        });
        this.connect('key-focus-out', () => {
            this.box.remove_style_class_name('surface');
        });
    }
    setOrientation(width, height) {
        const vertical = width < height;
        if (vertical === this.vertical)
            return;
        this.vertical = vertical;
        this.box.vertical = this.vertical;
        this.identityContainer.x_align = this.vertical
            ? Clutter$m.ActorAlign.CENTER
            : Clutter$m.ActorAlign.START;
        this.appTitle.x_align = this.vertical
            ? Clutter$m.ActorAlign.CENTER
            : Clutter$m.ActorAlign.START;
        this.callToAction.x_align = this.vertical
            ? Clutter$m.ActorAlign.CENTER
            : Clutter$m.ActorAlign.START;
    }
    vfunc_allocate(...args) {
        const width = args[0].get_width();
        const height = args[0].get_height();
        GLib$h.idle_add(GLib$h.PRIORITY_DEFAULT_IDLE, () => {
            this.setOrientation(width, height);
            return GLib$h.SOURCE_REMOVE;
        });
        super.vfunc_allocate(...args);
    }
    activate(button) {
        if (this.waitForReset)
            return;
        this.waitForReset = true;
        this.clickableContainer.reactive = false;
        this._spinner = new Animation$1.Spinner(16);
        let spinnerActor;
        if (ShellVersionMatch('3.34')) {
            spinnerActor = this._spinner.actor;
        }
        else {
            spinnerActor = this._spinner;
        }
        this.spinnerContainer.add_child(spinnerActor);
        this._spinner.play();
        this.spinnerContainer.set_opacity(255);
        this.emit('activated', button);
    }
    reset() {
        this.clickableContainer.reactive = true;
        if (this._spinner) {
            if (ShellVersionMatch('3.34')) {
                this._spinner.actor.destroy();
            }
            else {
                this._spinner.destroy();
            }
        }
        this.spinnerContainer.set_opacity(0);
        this.waitForReset = false;
    }
};
AppPlaceholder.metaInfo = {
    GTypeName: 'AppPlaceholder',
    Signals: {
        activated: {
            param_types: [GObject$6.TYPE_INT],
            accumulator: 0.0,
        },
    },
};
AppPlaceholder = __decorate([
    registerGObjectClass
], AppPlaceholder);

const Me$G = imports.misc.extensionUtils.getCurrentExtension();
const Main$i = imports.ui.main;
const Clutter$l = imports.gi.Clutter;
const GLib$g = imports.gi.GLib;
const GObject$5 = imports.gi.GObject;
const Meta$8 = imports.gi.Meta;
const St$e = imports.gi.St;
const isWayland = GLib$g.getenv('XDG_SESSION_TYPE').toLowerCase() === 'wayland';
let MsWindow = class MsWindow extends Clutter$l.Actor {
    _init(
        { app, metaWindowIdentifier, metaWindow, persistent, initialAllocation, msWorkspace, }
    ) {
        super._init({
            reactive: true,
            x: initialAllocation ? initialAllocation.x || 0 : 0,
            y: initialAllocation ? initialAllocation.y || 0 : 0,
            width: initialAllocation ? initialAllocation.width || 0 : 0,
            height: initialAllocation ? initialAllocation.height || 0 : 0,
        });
        this.app = app;
        this._persistent = persistent;
        this.msWorkspace = msWorkspace;
        this.dialogs = [];
        this.metaWindowIdentifier = metaWindowIdentifier;
        this.windowClone = new Clutter$l.Clone();
        this.placeholder = new AppPlaceholder(this.app);
        this.metaWindowSignals = [];
        this.placeholder.connect('activated', (_) => {
            this.emit('request-new-meta-window');
        });
        this.destroyId = this.connect('destroy', this._onDestroy.bind(this));
        this.connect('parent-set', () => {
            this.msContent.style_changed();
            this.updateMetaWindowVisibility();
        });
        this.connect('notify::visible', () => {
            this.updateMetaWindowVisibility();
        });
        this.msContent = new MsWindowContent({
            placeholder: this.placeholder,
            clone: this.windowClone,
        });
        this.add_child(this.msContent);
        if (metaWindow) {
            this.setWindow(metaWindow);
        }
        this.setMsWorkspace(msWorkspace);
    }
    get state() {
        return {
            appId: this.app.get_id(),
            metaWindowIdentifier: this.metaWindowIdentifier,
            persistent: this._persistent,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        };
    }
    get metaWindow() {
        return (this._metaWindow ||
            (this.dialogs &&
                this.dialogs[this.dialogs.length - 1] &&
                this.dialogs[this.dialogs.length - 1].metaWindow));
    }
    get title() {
        if (!this.app)
            return '';
        return this.metaWindow
            ? this.metaWindow.get_title()
            : this.app.get_name();
    }
    set persistent(boolean) {
        this._persistent = boolean;
        Me$G.stateManager.stateChanged();
    }
    delayGetMetaWindowActor(metaWindow, delayedCount, resolve, reject) {
        if (delayedCount < 20) {
            GLib$g.timeout_add(GLib$g.PRIORITY_DEFAULT, 50, () => {
                const actor = metaWindow.get_compositor_private();
                if (actor && actor.get_texture()) {
                    resolve(actor);
                }
                else {
                    this.delayGetMetaWindowActor(metaWindow, delayedCount++, resolve, reject);
                }
                return GLib$g.SOURCE_REMOVE;
            });
        }
        else {
            reject();
        }
    }
    get dragged() {
        var _a;
        return (((_a = Me$G.msWindowManager.msDndManager.dragInProgress) === null || _a === void 0 ? void 0 : _a.msWindow) === this);
    }
    get followMetaWindow() {
        if (!this.msWorkspace)
            return false;
        return ((this.msWorkspace &&
            this.msWorkspace.layout.state.key === 'float') ||
            (this.metaWindow && this.metaWindow.fullscreen));
    }
    async onMetaWindowActorExist(metaWindow) {
        return new Promise((resolve, reject) => {
            if (!metaWindow) {
                return resolve();
            }
            const actor = metaWindow.get_compositor_private();
            if (actor && actor.get_texture()) {
                resolve(actor);
            }
            else {
                this.delayGetMetaWindowActor(metaWindow, 0, resolve, reject);
            }
        });
    }
    async onMetaWindowFirstFrameDrawn() {
        return new Promise((resolve) => {
            if (!this.metaWindow) {
                return resolve();
            }
            if (this.metaWindow.firstFrameDrawn) {
                resolve();
            }
            else {
                this.metaWindow
                    .get_compositor_private()
                    .connect('first-frame', () => {
                    resolve();
                });
            }
        });
    }
    vfunc_allocate(box, flags) {
        box.x1 = Math.round(box.x1);
        box.y1 = Math.round(box.y1);
        box.x2 = Math.round(box.x2);
        box.y2 = Math.round(box.y2);
        SetAllocation(this, box, flags);
        const contentBox = Clutter$l.ActorBox.new(0, 0, box.get_width(), box.get_height());
        Allocate(this.msContent, contentBox, flags);
        const workArea = Main$i.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
        const monitorInFullScreen = global.display.get_monitor_in_fullscreen(this.msWorkspace.monitor.index);
        const offsetX = monitorInFullScreen
            ? this.msWorkspace.monitor.x
            : workArea.x;
        const offsetY = monitorInFullScreen
            ? this.msWorkspace.monitor.y
            : workArea.y;
        [...this.dialogs]
            .sort((firstDialog, secondDialog) => firstDialog.metaWindow.user_time -
            secondDialog.metaWindow.user_time)
            .forEach((dialog) => {
            Me$G.logFocus('Allocate', dialog.metaWindow.title);
            const dialogFrame = dialog.metaWindow.get_buffer_rect();
            const x1 = dialogFrame.x - box.x1 - offsetX;
            const x2 = x1 + dialogFrame.width;
            const y1 = dialogFrame.y - box.y1 - offsetY;
            const y2 = y1 + dialogFrame.height;
            const dialogBox = Clutter$l.ActorBox.new(x1, y1, x2, y2);
            Allocate(dialog.clone, dialogBox, flags);
        });
    }
    set_position(x, y) {
        if (this.followMetaWindow)
            return;
        super.set_position(x, y);
    }
    set_size(width, height) {
        if (this.followMetaWindow)
            return;
        super.set_size(width, height);
    }
    getRelativeMetaWindowPosition(metaWindow) {
        const x = this.x;
        const y = this.y;
        const currentFrameRect = metaWindow.get_frame_rect();
        const workArea = Main$i.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
        return {
            x: this.dragged ? currentFrameRect.x : workArea.x + x,
            y: this.dragged ? currentFrameRect.y : workArea.y + y,
        };
    }
    delayUpdateMetaWindowPositionAndSize() {
        GLib$g.timeout_add(GLib$g.PRIORITY_DEFAULT, 100, () => {
            this.updateDelayed = false;
            this.updateMetaWindowPositionAndSize();
            return GLib$g.SOURCE_REMOVE;
        });
    }
    updateMetaWindowPositionAndSize() {
        const windowActor = this._metaWindow &&
            this._metaWindow.get_compositor_private();
        if (this.destroyed ||
            !windowActor ||
            !this.mapped ||
            this.width === 0 ||
            this.height === 0 ||
            !this._metaWindow.firstFrameDrawn ||
            this.followMetaWindow ||
            this.updateDelayed ||
            this._metaWindow.minimized) {
            return;
        }
        let shouldBeMaximizedHorizontally = this._metaWindow
            .maximized_horizontally;
        let shouldBeMaximizedVertically = this._metaWindow.maximized_vertically;
        if (this.get_parent() ===
            this.msWorkspace.msWorkspaceActor.tileableContainer) {
            shouldBeMaximizedHorizontally =
                this.x === 0 &&
                    this.width ===
                        this.msWorkspace.msWorkspaceActor.tileableContainer.allocation.get_width();
            shouldBeMaximizedVertically =
                this.y === 0 &&
                    this.height ===
                        this.msWorkspace.msWorkspaceActor.tileableContainer.allocation.get_height();
        }
        const needToChangeMaximizeHorizontally = shouldBeMaximizedHorizontally !==
            this._metaWindow.maximized_horizontally;
        const needToChangeMaximizeVertically = shouldBeMaximizedVertically !==
            this._metaWindow.maximized_vertically;
        let needToMove = false;
        let needToResize = false;
        let needToMoveOrResize = false;
        let moveTo, resizeTo;
        if (!shouldBeMaximizedHorizontally || !shouldBeMaximizedVertically) {
            const currentFrameRect = this._metaWindow.get_frame_rect();
            const contentBox = this.msContent.allocation;
            if (this._metaWindow.allows_resize()) {
                moveTo = this.getRelativeMetaWindowPosition(this._metaWindow);
                resizeTo = {
                    width: this.width,
                    height: this.height,
                };
            }
            else {
                const relativePosition = this.getRelativeMetaWindowPosition(this._metaWindow);
                moveTo = {
                    x: relativePosition.x +
                        (contentBox.get_width() - currentFrameRect.width) / 2,
                    y: relativePosition.y +
                        (contentBox.get_height() - currentFrameRect.height) / 2,
                };
                resizeTo = {
                    width: currentFrameRect.width,
                    height: currentFrameRect.height,
                };
            }
            needToMove =
                currentFrameRect.x !== moveTo.x ||
                    currentFrameRect.y !== moveTo.y;
            needToResize =
                currentFrameRect.width !== resizeTo.width ||
                    currentFrameRect.height !== resizeTo.height;
            needToMoveOrResize = needToMove || needToResize;
        }
        if (!needToChangeMaximizeHorizontally &&
            !needToChangeMaximizeVertically &&
            !needToMoveOrResize) {
            return;
        }
        if (windowActor.lastResize &&
            Date.now() - windowActor.lastResize < 100) {
            this.updateDelayed = true;
            return this.delayUpdateMetaWindowPositionAndSize();
        }
        if (needToChangeMaximizeHorizontally ||
            needToChangeMaximizeVertically) {
            const shouldMaximizeHorizontally = shouldBeMaximizedHorizontally &&
                !this._metaWindow.maximized_horizontally;
            const shouldMaximizeVertically = shouldBeMaximizedVertically &&
                !this._metaWindow.maximized_vertically;
            const shouldUnMaximizeHorizontally = !shouldBeMaximizedHorizontally &&
                this._metaWindow.maximized_horizontally;
            const shouldUnMaximizeVertically = !shouldBeMaximizedVertically &&
                this._metaWindow.maximized_vertically;
            const callback = () => {
                if (shouldMaximizeVertically && shouldUnMaximizeVertically) {
                    this._metaWindow.unmaximize(Meta$8.MaximizeFlags.BOTH);
                }
                else if (shouldUnMaximizeHorizontally) {
                    this._metaWindow.unmaximize(Meta$8.MaximizeFlags.HORIZONTAL);
                }
                else if (shouldUnMaximizeVertically) {
                    this._metaWindow.unmaximize(Meta$8.MaximizeFlags.VERTICAL);
                }
                if (shouldMaximizeHorizontally && shouldMaximizeVertically) {
                    this._metaWindow.maximize(Meta$8.MaximizeFlags.BOTH);
                }
                else if (shouldMaximizeHorizontally) {
                    this._metaWindow.maximize(Meta$8.MaximizeFlags.HORIZONTAL);
                }
                else if (shouldMaximizeVertically) {
                    this._metaWindow.maximize(Meta$8.MaximizeFlags.VERTICAL);
                }
            };
            if (isWayland) {
                GLib$g.idle_add(GLib$g.PRIORITY_DEFAULT_IDLE, () => {
                    callback();
                    return GLib$g.SOURCE_REMOVE;
                });
            }
            else {
                callback();
            }
        }
        if (needToMoveOrResize) {
            if (!this.dragged) {
                moveTo.x = Math.max(Math.min(moveTo.x, this.msWorkspace.monitor.x +
                    this.msWorkspace.monitor.width -
                    resizeTo.width), this.msWorkspace.monitor.x);
                moveTo.y = Math.max(Math.min(moveTo.y, this.msWorkspace.monitor.y +
                    this.msWorkspace.monitor.height -
                    resizeTo.height), this.msWorkspace.monitor.y);
            }
            if (isWayland) {
                GLib$g.idle_add(GLib$g.PRIORITY_DEFAULT_IDLE, () => {
                    if (needToResize) {
                        this._metaWindow.move_resize_frame(true, moveTo.x, moveTo.y, resizeTo.width, resizeTo.height);
                    }
                    else {
                        this._metaWindow.move_frame(true, moveTo.x, moveTo.y);
                    }
                    return GLib$g.SOURCE_REMOVE;
                });
            }
            else {
                if (needToResize) {
                    Me$G.logFocus('move_resize_frame', this.title, moveTo.x, moveTo.y, resizeTo.width, resizeTo.height);
                    this._metaWindow.move_resize_frame(true, moveTo.x, moveTo.y, resizeTo.width, resizeTo.height);
                    GLib$g.idle_add(GLib$g.PRIORITY_DEFAULT_IDLE, () => {
                        const currentFrameRect = this._metaWindow.get_frame_rect();
                        if (currentFrameRect.x !== moveTo.x ||
                            currentFrameRect.y !== moveTo.y) {
                            Me$G.logFocus('enforce position of', this.title);
                            this._metaWindow.move_frame(true, moveTo.x, moveTo.y);
                        }
                        return GLib$g.SOURCE_REMOVE;
                    });
                }
                else {
                    Me$G.logFocus('only_move', this.title, moveTo.x, moveTo.y);
                    this._metaWindow.move_frame(true, moveTo.x, moveTo.y);
                }
            }
        }
    }
    mimicMetaWindowPositionAndSize() {
        if (!this.metaWindow || this.dragged)
            return;
        const workArea = Main$i.layoutManager.getWorkAreaForMonitor(this.metaWindow.get_monitor());
        const currentFrameRect = this.metaWindow.get_frame_rect();
        const newPosition = {
            x: currentFrameRect.x -
                (this.metaWindow.fullscreen
                    ? this.msWorkspace.monitor.x
                    : workArea.x) -
                this.msContent.x,
            y: currentFrameRect.y -
                (this.metaWindow.fullscreen
                    ? this.msWorkspace.monitor.y
                    : workArea.y) -
                this.msContent.y,
        };
        const newSize = {
            width: currentFrameRect.width + this.msContent.x * 2,
            height: currentFrameRect.height + this.msContent.y * 2,
        };
        super.set_position(newPosition.x, newPosition.y);
        super.set_size(newSize.width, newSize.height);
    }
    resizeDialogs() {
        this.dialogs.forEach((dialog) => {
            const { metaWindow } = dialog;
            const frame = metaWindow.get_frame_rect();
            const workArea = Main$i.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
            const monitorInFullScreen = global.display.get_monitor_in_fullscreen(this.msWorkspace.monitor.index);
            const offsetX = monitorInFullScreen
                ? this.msWorkspace.monitor.x
                : workArea.x;
            const offsetY = monitorInFullScreen
                ? this.msWorkspace.monitor.y
                : workArea.y;
            const needMove = frame.x - offsetX < this.x ||
                frame.x - offsetX + frame.width > this.x + this.width ||
                frame.y - offsetY < this.y ||
                frame.y - offsetY + frame.height > this.y + this.height;
            const needResize = frame.width > this.width || frame.height > this.height;
            if (needResize && metaWindow.resizeable) {
                const minWidth = Math.min(frame.width, this.width);
                const minHeight = Math.min(frame.height, this.height);
                Me$G.logFocus('resize', this.title, needMove
                    ? offsetX + this.x + (this.width - minWidth) / 2
                    : frame.x, needMove
                    ? offsetY + this.y + (this.height - minHeight) / 2
                    : frame.y);
                metaWindow.move_resize_frame(true, needMove
                    ? offsetX + this.x + (this.width - minWidth) / 2
                    : frame.x, needMove
                    ? offsetY + this.y + (this.height - minHeight) / 2
                    : frame.y, minWidth, minHeight);
            }
            else if (needMove && metaWindow.allows_move()) {
                Me$G.logFocus('move', this.title, offsetX + this.x + (this.width - frame.width) / 2, offsetY + this.y + (this.height - frame.height) / 2);
                metaWindow.move_frame(true, offsetX + this.x + (this.width - frame.width) / 2, offsetY + this.y + (this.height - frame.height) / 2);
            }
        });
    }
    resizeMetaWindows() {
        if (this._metaWindow) {
            this.followMetaWindow
                ? this.mimicMetaWindowPositionAndSize()
                : this.updateMetaWindowPositionAndSize();
        }
        this.resizeDialogs();
    }
    registerOnMetaWindowSignals() {
        if (!this.metaWindow)
            return;
        this.metaWindowSignals.push(this.metaWindow.connect('notify::title', (_) => {
            this.emit('title-changed', this.title);
        }), this.metaWindow.connect('position-changed', () => {
            if (this.followMetaWindow) {
                this.mimicMetaWindowPositionAndSize();
            }
        }), this.metaWindow.connect('size-changed', () => {
            if (this.followMetaWindow) {
                this.mimicMetaWindowPositionAndSize();
            }
        }), this.metaWindow.connect('notify::fullscreen', () => {
            if (this.followMetaWindow) {
                this.mimicMetaWindowPositionAndSize();
            }
        }));
    }
    unregisterOnMetaWindowSignals() {
        if (!this.metaWindow)
            return;
        this.metaWindowSignals.forEach((signalId) => {
            this.metaWindow.disconnect(signalId);
        });
        this.metaWindowSignals = [];
    }
    setMsWorkspace(msWorkspace) {
        this.msWorkspace = msWorkspace;
        [
            ...this.dialogs.map((dialog) => dialog.metaWindow),
            this.metaWindow,
        ].forEach((metaWindow) => {
            if (metaWindow) {
                updateTitleBarVisibility(metaWindow);
                this.updateWorkspaceAndMonitor(metaWindow);
            }
        });
        this.resizeMetaWindows();
    }
    async setWindow(metaWindow) {
        this._metaWindow = metaWindow;
        metaWindow.msWindow = this;
        this.registerOnMetaWindowSignals();
        this.updateWorkspaceAndMonitor(metaWindow);
        this.windowClone.set_source(metaWindow.get_compositor_private());
        await this.onMetaWindowsChanged();
    }
    unsetWindow() {
        this.unregisterOnMetaWindowSignals();
        this.reactive = true;
        delete this._metaWindow;
        delete this.metaWindowUpdateInProgressPromise;
        this.onMetaWindowsChanged();
    }
    updateWorkspaceAndMonitor(metaWindow) {
        if (metaWindow && this.msWorkspace) {
            if (metaWindow.get_monitor() != this.msWorkspace.monitor.index)
                metaWindow.move_to_monitor(this.msWorkspace.monitor.index);
            const workspace = Me$G.msWorkspaceManager.getWorkspaceOfMsWorkspace(this.msWorkspace);
            if (workspace && metaWindow.get_workspace() != workspace) {
                metaWindow.change_workspace(workspace);
            }
        }
    }
    addDialog(metaWindow) {
        this.updateWorkspaceAndMonitor(metaWindow);
        const clone = new Clutter$l.Clone({
            source: metaWindow.get_compositor_private(),
        });
        const dialog = {
            metaWindow,
            clone,
        };
        metaWindow.msWindow = this;
        this.dialogs.push(dialog);
        this.add_child(clone);
        this.resizeDialogs();
        this.onMetaWindowsChanged();
        if (this.msWorkspace.tileableFocused === this) {
            this.grab_key_focus();
        }
    }
    removeDialog(dialog) {
        this.dialogs.splice(this.dialogs.indexOf(dialog), 1);
        this.remove_child(dialog.clone);
        dialog.clone.destroy();
    }
    async onMetaWindowsChanged() {
        if (this.metaWindow) {
            this.metaWindowIdentifier = Me$G.msWindowManager.buildMetaWindowIdentifier(this.metaWindow);
            this.reactive = false;
            await this.onMetaWindowActorExist(this.metaWindow);
            await this.onMetaWindowFirstFrameDrawn();
            updateTitleBarVisibility(this.metaWindow);
            this.resizeMetaWindows();
            if (!this._metaWindow) {
                if (!this.msContent.has_style_class_name('surface-darker')) {
                    this.msContent.add_style_class_name('surface-darker');
                }
            }
            else {
                if (this.msContent.has_style_class_name('surface-darker')) {
                    this.msContent.remove_style_class_name('surface-darker');
                }
            }
            if (this.placeholder.get_parent()) {
                this.fadeOutPlaceholder();
            }
        }
        else {
            this.reactive = false;
            if (this.msContent.has_style_class_name('surface-darker')) {
                this.msContent.remove_style_class_name('surface-darker');
            }
            if (!this.placeholder.get_parent()) {
                this.msContent.add_child(this.placeholder);
            }
        }
        this.emit('title-changed', this.title);
    }
    grab_key_focus() {
        if (this.dialogs.length) {
            this.onFocus();
        }
        if (!Me$G.msWindowManager.msFocusManager.requestFocus(this))
            return;
        if (this.metaWindow) {
            this.metaWindow.activate(global.get_current_time());
        }
        else {
            this.placeholder.grab_key_focus();
        }
    }
    onFocus() {
        if (this.dialogs.length) {
            [...this.dialogs]
                .sort((firstDialog, secondDialog) => {
                return (firstDialog.metaWindow.user_time -
                    secondDialog.metaWindow.user_time);
            })
                .forEach((dialog, index, array) => {
                this.set_child_above_sibling(dialog.clone, null);
                if (index === array.length - 1) {
                    dialog.metaWindow.activate(global.get_current_time());
                }
            });
        }
    }
    metaWindowUnManaged(metaWindow) {
        const isMainMetaWindow = metaWindow === this._metaWindow;
        const dialog = this.dialogs.find((dialog) => dialog.metaWindow === metaWindow);
        if (!isMainMetaWindow && dialog === undefined) {
            return;
        }
        if (dialog) {
            this.removeDialog(dialog);
        }
        if (isMainMetaWindow) {
            this._metaWindow = null;
        }
        GLib$g.idle_add(GLib$g.PRIORITY_DEFAULT_IDLE, () => {
            if (!this.dialogs.length && !this._metaWindow) {
                this.kill();
            }
            return GLib$g.SOURCE_REMOVE;
        });
    }
    kill() {
        const dialogPromises = this.dialogs.map((dialog) => {
            return new Promise((resolve) => {
                delete dialog.metaWindow.msWindow;
                if (dialog.metaWindow.get_compositor_private()) {
                    dialog.metaWindow.connect('unmanaged', (_) => {
                        resolve();
                    });
                    dialog.metaWindow.delete(global.get_current_time());
                }
            });
        });
        const promise = new Promise((resolve) => {
            if (this.metaWindow &&
                this.metaWindow.get_compositor_private()) {
                delete this.metaWindow.msWindow;
                this.metaWindow.connect('unmanaged', (_) => {
                    resolve();
                });
                this.metaWindow.delete(global.get_current_time());
            }
            else {
                resolve();
            }
        });
        Promise.all([...dialogPromises, promise]).then(() => {
            if (this._persistent) {
                this.dialogs = [];
                this.unsetWindow();
            }
            else {
                this._metaWindow = null;
                if (!this.destroyed) {
                    this._onDestroy();
                    this.msWorkspace.removeMsWindow(this);
                    if (this.destroyId)
                        this.disconnect(this.destroyId);
                    this.destroy();
                }
            }
        });
        return promise;
    }
    fadeOutPlaceholder() {
        const onComplete = () => {
            this.placeholder.set_opacity(255);
            if (this.metaWindow) {
                this.msContent.remove_child(this.placeholder);
            }
            this.placeholder.reset();
        };
        this.placeholder.ease({
            opacity: 0,
            duration: 250,
            mode: Clutter$l.AnimationMode.EASE_OUT_CUBIC,
            onComplete,
        });
    }
    freezeAllocation() {
        this.set_width(this.allocation.get_width());
        this.set_height(this.allocation.get_height());
    }
    unFreezeAllocation() {
        this.set_width(-1);
        this.set_height(-1);
    }
    updateMetaWindowVisibility() {
        if (this.metaWindow) {
            const shouldBeHidden = !this.visible ||
                this.get_parent() === null ||
                Me$G.msWindowManager.msDndManager.dragInProgress;
            if (shouldBeHidden && !this.metaWindow.minimized) {
                this.metaWindow.minimize();
            }
            else if (!shouldBeHidden && this.metaWindow.minimized) {
                this.metaWindow.unminimize();
            }
        }
    }
    toString() {
        const string = super.toString();
        return `${string.slice(0, string.length - 1)} ${this.app.get_name()}]`;
    }
    _onDestroy() {
        this.destroyed = true;
        this.unregisterOnMetaWindowSignals();
    }
};
MsWindow.metaInfo = {
    GTypeName: 'MsWindow',
    Signals: {
        title_changed: {
            param_types: [GObject$5.TYPE_STRING],
            accumulator: 0,
        },
        dragged_changed: {
            param_types: [GObject$5.TYPE_BOOLEAN],
            accumulator: 0,
        },
        request_new_meta_window: {
            param_types: [],
            accumulator: 0,
        },
    },
};
MsWindow = __decorate([
    registerGObjectClass
], MsWindow);
let MsWindowContent = class MsWindowContent extends St$e.Widget {
    _init({ placeholder, clone, }) {
        super._init({ clip_to_allocation: true });
        this.placeholder = placeholder;
        this.clone = clone;
        this.add_child(this.clone);
        this.add_child(this.placeholder);
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        const metaWindow = this.get_parent()
            .metaWindow;
        if (metaWindow && metaWindow.firstFrameDrawn) {
            const windowFrameRect = metaWindow.get_frame_rect();
            const windowBufferRect = metaWindow.get_buffer_rect();
            if (metaWindow.get_compositor_private()) {
                let x1, x2, y1, y2;
                if (metaWindow.resizeable || metaWindow.fullscreen) {
                    x1 = windowBufferRect.x - windowFrameRect.x;
                    y1 = windowBufferRect.y - windowFrameRect.y;
                    x2 = x1 + windowBufferRect.width;
                    y2 = y1 + windowBufferRect.height;
                }
                else {
                    const monitor = this.get_parent().msWorkspace.monitor;
                    const workArea = Main$i.layoutManager.getWorkAreaForMonitor(monitor.index);
                    x1 = windowBufferRect.x - workArea.x - this.get_parent().x;
                    y1 = windowBufferRect.y - workArea.y - this.get_parent().y;
                    x2 = x1 + windowBufferRect.width;
                    y2 = y1 + windowBufferRect.height;
                }
                const cloneBox = Clutter$l.ActorBox.new(x1, y1, x2, y2);
                Allocate(this.clone, cloneBox, flags);
            }
            else {
                AllocatePreferredSize(this.clone, flags);
            }
        }
        else {
            AllocatePreferredSize(this.clone, flags);
        }
        if (this.placeholder.get_parent() === this) {
            const height = box.get_height();
            const width = box.get_width();
            GLib$g.idle_add(GLib$g.PRIORITY_DEFAULT_IDLE, () => {
                this.placeholder.set_size(width, height);
                return GLib$g.SOURCE_REMOVE;
            });
            Allocate(this.placeholder, box, flags);
        }
    }
};
MsWindowContent.metaInfo = {
    GTypeName: 'MsWindowContent',
};
MsWindowContent = __decorate([
    registerGObjectClass
], MsWindowContent);

const Clutter$k = imports.gi.Clutter;
const GObject$4 = imports.gi.GObject;
const St$d = imports.gi.St;
const DND$4 = imports.ui.dnd;
const Me$F = imports.misc.extensionUtils.getCurrentExtension();
let ReorderableList = class ReorderableList extends Clutter$k.Actor {
    _init(vertical = false, classAccepted = []) {
        super._init({
            layout_manager: new Clutter$k.BoxLayout({
                orientation: vertical
                    ? Clutter$k.Orientation.VERTICAL
                    : Clutter$k.Orientation.HORIZONTAL,
            }),
        });
        this.vertical = vertical;
        this.classAccepted = classAccepted;
        this.dragInProgress = false;
        this.connect('actor-added', (_, actor) => {
            if (!actor._draggable && actor !== this.placeHolder)
                this.makeActorDraggable(actor);
        });
        this.placeHolder = new DropPlaceholder();
        this.placeHolder.connect('drag-dropped', (_, source) => {
            if (source._draggable._dragActor.get_parent()) {
                source._draggable._dragActor.get_parent().remove_child(source);
            }
        });
    }
    makeActorDraggable(nonDraggableActor) {
        const actor = nonDraggableActor;
        actor.originalHandleDragOver = actor.handleDragOver;
        actor.originalAcceptDrop = actor.acceptDrop;
        actor.handleDragOver = (source, _, x, y) => {
            const originalResult = actor.originalHandleDragOver
                ? actor.originalHandleDragOver(source, actor, x, y)
                : null;
            const isForeignActor = source != this.draggedActor &&
                this.classAccepted.some((aClass) => source instanceof aClass);
            if (isForeignActor && !this.foreignActor) {
                this.foreignEntered(source);
            }
            if (source === this.draggedActor || isForeignActor) {
                if (actor.draggable != undefined && actor.draggable === false)
                    return DND$4.DragMotionResult.NO_DROP;
                const actorIndex = this.get_children()
                    .filter((actor) => actor != this.placeHolder)
                    .indexOf(actor);
                const after = this.vertical
                    ? y > actor.height / 2
                    : x > actor.width / 2;
                this.placeHolder.resize(source.width, source.height);
                this.movePlaceholder(actorIndex + (after ? 1 : 0));
                return DND$4.DragMotionResult.NO_DROP;
            }
            return originalResult || DND$4.DragMotionResult.MOVE_DROP;
        };
        actor.acceptDrop = (source) => {
            if (source._draggable._dragActor.get_parent()) {
                source._draggable._dragActor.get_parent().remove_child(source);
            }
            if (source === this.draggedActor || source === this.foreignActor) {
                return true;
            }
            return actor.originalAcceptDrop
                ? actor.originalAcceptDrop(source)
                : false;
        };
        const isMatButton = actor instanceof MatButton;
        actor._draggable = DND$4.makeDraggable(actor, {
            restoreOnSuccess: false,
            manualMode: isMatButton,
        });
        if (isMatButton) {
            actor.connect('drag-start', (_, event) => {
                const [x, y] = event.get_coords();
                actor._draggable.startDrag(x, y, global.get_current_time(), event.get_event_sequence(), event.get_device());
            });
        }
        let originalIndex = null;
        actor._draggable.connect('drag-begin', () => {
            originalIndex = this.get_children().indexOf(actor);
            this.placeHolder.resize(actor.width, actor.height);
            this.draggedActor = actor;
            this.movePlaceholder(originalIndex);
            this.emit('drag-start');
        });
        actor._draggable.connect('drag-cancelled', () => {
            assert(originalIndex !== null, 'drag cancelled before it was started');
            this.set_child_at_index(this.placeHolder, originalIndex);
        });
        actor._draggable.connect('drag-end', () => {
            const placeholderIndex = this.get_children().indexOf(this.placeHolder);
            if (this.placeHolder.get_parent() == this)
                this.remove_child(this.placeHolder);
            if (this.draggedActor) {
                reparentActor(this.draggedActor, this);
                this.set_child_at_index(this.draggedActor, placeholderIndex);
                if (placeholderIndex !== originalIndex) {
                    this.emit('actor-moved', this.draggedActor, placeholderIndex);
                }
            }
            this.draggedActor = null;
            originalIndex = null;
            this.emit('drag-end');
        });
    }
    movePlaceholder(toIndex) {
        if (this.placeHolder.get_parent()) {
            this.set_child_at_index(this.placeHolder, toIndex);
        }
        else {
            this.insert_child_at_index(this.placeHolder, toIndex);
        }
    }
    foreignEntered(actor) {
        this.foreignActor = actor;
        const connectCancelId = actor._draggable.connect('drag-cancelled', () => {
            if (this.placeHolder.get_parent() == this)
                this.remove_child(this.placeHolder);
        });
        const connectEndId = actor._draggable.connect('drag-end', () => {
            let placeholderIndex = undefined;
            const actor = this.foreignActor;
            assert(actor !== undefined, 'drag ended before it was started');
            if (this.placeHolder.get_parent()) {
                placeholderIndex = this.get_children().indexOf(this.placeHolder);
                this.remove_child(this.placeHolder);
            }
            actor._draggable.disconnect(connectCancelId);
            actor._draggable.disconnect(connectEndId);
            delete this.foreignActor;
            if (placeholderIndex !== undefined) {
                this.emit('foreign-actor-inserted', actor, placeholderIndex);
            }
        });
    }
};
ReorderableList.metaInfo = {
    GTypeName: 'ReorderableList',
    Signals: {
        'drag-start': {},
        'drag-end': {},
        'actor-moved': {
            param_types: [Clutter$k.Actor.$gtype, GObject$4.TYPE_INT],
        },
        'foreign-actor-inserted': {
            param_types: [Clutter$k.Actor.$gtype, GObject$4.TYPE_INT],
        },
    },
};
ReorderableList = __decorate([
    registerGObjectClass
], ReorderableList);
let DropPlaceholder = class DropPlaceholder extends St$d.Widget {
    _init() {
        super._init({ style_class: 'drop-placeholder' });
        this._delegate = this;
    }
    handleDragOver(source) {
        return DND$4.DragMotionResult.MOVE_DROP;
    }
    acceptDrop(source) {
        this.emit('drag-dropped', source);
        return true;
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
    }
};
DropPlaceholder.metaInfo = {
    GTypeName: 'DropPlaceHolder',
    Signals: {
        'drag-dropped': {
            param_types: [Clutter$k.Actor.$gtype],
        },
        'drag-over': {},
    },
};
DropPlaceholder = __decorate([
    registerGObjectClass
], DropPlaceholder);

const Clutter$j = imports.gi.Clutter;
const Gio$a = imports.gi.Gio;
const GLib$f = imports.gi.GLib;
const GObject$3 = imports.gi.GObject;
const Shell$7 = imports.gi.Shell;
const St$c = imports.gi.St;
const DND$3 = imports.ui.dnd;
const PopupMenu$4 = imports.ui.popupMenu;
const Main$h = imports.ui.main;
const Me$E = imports.misc.extensionUtils.getCurrentExtension();
const dragData = null;
let TaskBar = class TaskBar extends St$c.Widget {
    _init(msWorkspace, panelMenuManager) {
        super._init({
            name: 'taskBar',
            x_expand: true,
            reactive: true,
        });
        this._delegate = this;
        this.taskActiveIndicator = new TaskActiveIndicator({
            style_class: 'task-active-indicator',
        });
        this.add_child(this.taskActiveIndicator);
        this.taskButtonContainer = new ReorderableList(false, [TaskBarItem]);
        this.taskButtonContainer.connect('actor-moved', (_, item, index) => {
            this.msWorkspace.setTileableAtIndex(item.tileable, index);
            this.msWorkspace.focusTileable(item.tileable);
        });
        this.taskButtonContainer.connect('foreign-actor-inserted', (_, actor, index) => {
            if (actor.tileable instanceof MsWindow) {
                Me$E.msWorkspaceManager.setWindowToMsWorkspace(actor.tileable, this.msWorkspace);
                this.msWorkspace.setTileableAtIndex(actor.tileable, index);
                this.msWorkspace.focusTileable(actor.tileable);
                Me$E.msWorkspaceManager.stateChanged();
            }
        });
        this.taskButtonContainer.connect('drag-start', (_, actor, foreignActor) => {
            this.taskActiveIndicator.hide();
        });
        this.taskButtonContainer.connect('drag-end', (_, actor, foreignActor) => {
            this.taskActiveIndicator.show();
        });
        this.add_child(this.taskButtonContainer);
        this.msWorkspace = msWorkspace;
        this.connect('destroy', this._onDestroy.bind(this));
        this.msWorkspaceSignals = [
            msWorkspace.connect('tileableList-changed', () => {
                this.onTileableListChange();
            }),
            msWorkspace.connect('tileable-focus-changed', (_, tileable, oldTileable) => {
                this.onFocusChanged(tileable, oldTileable);
            }),
        ];
        this.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter$j.ScrollDirection.UP:
                    this.msWorkspace.focusPreviousTileable();
                    break;
                case Clutter$j.ScrollDirection.DOWN:
                    this.msWorkspace.focusNextTileable();
                    break;
            }
        });
        this.tracker = Shell$7.WindowTracker.get_default();
        this.windowFocused = null;
        this.items = [];
        this.menuManager = panelMenuManager;
        this.updateItems();
    }
    onTileableListChange() {
        this.updateItems();
    }
    onFocusChanged(tileableFocused, oldTileableFocused) {
        if (tileableFocused === oldTileableFocused) {
            return;
        }
        const previousItem = this.getTaskBarItemOfTileable(oldTileableFocused);
        const nextItem = this.getTaskBarItemOfTileable(tileableFocused);
        if (previousItem) {
            if (previousItem.has_style_class_name('active')) {
                previousItem.setActive(false);
            }
        }
        if (!nextItem)
            return;
        nextItem.setActive(true);
    }
    getActiveItem() {
        return this.items[this.msWorkspace.focusedIndex];
    }
    updateItems() {
        this.items.forEach((item) => item.destroy());
        this.items = this.msWorkspace.tileableList.map((tileable, _index) => {
            let item;
            if (tileable instanceof MsWindow) {
                item = new TileableItem(tileable);
                this.menuManager.addMenu(item.menu);
                item.connect('middle-clicked', (_) => {
                    tileable.kill();
                });
                item.connect('close-clicked', (_) => {
                    tileable.kill();
                });
            }
            else {
                item = new IconTaskBarItem(tileable, Gio$a.icon_new_for_string(`${Me$E.path}/assets/icons/plus-symbolic.svg`));
            }
            item.connect('left-clicked', (_) => {
                this.msWorkspace.focusTileable(tileable);
            });
            this.taskButtonContainer.add_child(item);
            return item;
        });
        if (this.items[this.msWorkspace.focusedIndex]) {
            this.items[this.msWorkspace.focusedIndex].setActive(true);
        }
    }
    getTaskBarItemOfTileable(tileable) {
        return this.items.find((item) => {
            return item.tileable === tileable;
        });
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        Allocate(this.taskButtonContainer, contentBox, flags);
        const taskActiveIndicatorBox = new Clutter$j.ActorBox({
            x1: this.getActiveItem().x,
            x2: this.getActiveItem().x + this.getActiveItem().width,
            y1: contentBox.get_height() - this.taskActiveIndicator.height,
            y2: contentBox.get_height(),
        });
        Allocate(this.taskActiveIndicator, taskActiveIndicatorBox, flags);
    }
    _onDestroy() {
        this.msWorkspaceSignals.forEach((signal) => this.msWorkspace.disconnect(signal));
    }
};
TaskBar = __decorate([
    registerGObjectClass
], TaskBar);
let TaskActiveIndicator = class TaskActiveIndicator extends St$c.Widget {
    _init(...args) {
        super._init(...args);
    }
    prepareAnimation(newAllocation) {
        this.translation_x = this.translation_x + this.x - newAllocation.x1;
        this.scale_x = (this.width * this.scale_x) / newAllocation.get_width();
    }
    animate() {
        this.ease({
            translation_x: 0,
            scale_x: 1,
            duration: 250,
            mode: Clutter$j.AnimationMode.EASE_OUT_QUAD,
        });
    }
    vfunc_allocate(...args) {
        if (this.width && this.mapped) {
            this.prepareAnimation(args[0]);
            GLib$f.idle_add(GLib$f.PRIORITY_DEFAULT_IDLE, () => {
                this.animate();
                return GLib$f.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
};
TaskActiveIndicator.metaInfo = {
    GTypeName: 'TaskActiveIndicator',
};
TaskActiveIndicator = __decorate([
    registerGObjectClass
], TaskActiveIndicator);
let TaskBarItem = class TaskBarItem extends MatButton {
    _init(contentActor, draggable) {
        super._init({
            style_class: 'task-bar-item ',
        });
        this.y_expand = true;
        this._delegate = this;
        this.draggable = draggable;
        this.contentActor = contentActor;
        this.monitor = Main$h.layoutManager.primaryMonitor;
        this.set_child(this.contentActor);
        this.connect('primary-action', () => {
            this.emit('left-clicked');
        });
        this.connect('secondary-action', () => {
            this.menu.toggle();
        });
        this.connect('clicked', (actor, button) => {
            if (button === Clutter$j.BUTTON_MIDDLE) {
                this.emit('middle-clicked');
            }
        });
    }
    vfunc_parent_set() {
        if (this.get_parent()) {
            this.monitor = Main$h.layoutManager.findMonitorForActor(this.get_parent());
        }
        else {
            this.monitor = Main$h.layoutManager.findMonitorForActor(this);
        }
    }
    vfunc_get_preferred_height(_forWidth) {
        const height = Me$E.msThemeManager.getPanelSize(this.monitor);
        return [height, height];
    }
    setActive(active) {
        if (!active && this.has_style_class_name('active')) {
            this.remove_style_class_name('active');
        }
        if (active && !this.has_style_class_name('active')) {
            this.add_style_class_name('active');
        }
    }
};
TaskBarItem.metaInfo = {
    GTypeName: 'TaskBarItem',
    Signals: {
        'drag-dropped': {},
        'drag-over': {
            param_types: [GObject$3.TYPE_BOOLEAN],
        },
        'left-clicked': {},
        'middle-clicked': {},
    },
};
TaskBarItem = __decorate([
    registerGObjectClass
], TaskBarItem);
let TileableItem = class TileableItem extends TaskBarItem {
    _init(tileable) {
        const container = new St$c.BoxLayout({
            style_class: 'task-bar-item-content',
        });
        super._init(container, true);
        this.container = container;
        this.tileable = tileable;
        this.app = tileable.app;
        if (ShellVersionMatch('3.34')) {
            this.startIconContainer = new St$c.Bin({
                y_align: 1,
            });
        }
        else {
            this.startIconContainer = new St$c.Bin({
                y_align: Clutter$j.ActorAlign.CENTER,
            });
        }
        if (ShellVersionMatch('3.34')) {
            this.endIconContainer = new St$c.Bin({
                y_align: 1,
            });
        }
        else {
            this.endIconContainer = new St$c.Bin({
                y_align: Clutter$j.ActorAlign.CENTER,
            });
        }
        this.menu = new PopupMenu$4.PopupMenu(this, 0.5, St$c.Side.TOP);
        this.menu.actor.add_style_class_name('horizontal-panel-menu');
        this.makePersistentAction = this.menu.addAction('Make this fully persistent', () => {
            this.tileable.persistent = true;
            this.endIconContainer.set_child(this.persistentIcon);
            this.makePersistentAction.hide();
            this.unmakePersistentAction.show();
        }, Gio$a.icon_new_for_string(`${Me$E.path}/assets/icons/pin-symbolic.svg`));
        this.unmakePersistentAction = this.menu.addAction('Unmake this fully persistent', () => {
            this.tileable.persistent = false;
            this.endIconContainer.set_child(this.closeButton);
            this.makePersistentAction.show();
            this.unmakePersistentAction.hide();
        }, Gio$a.icon_new_for_string(`${Me$E.path}/assets/icons/pin-off-symbolic.svg`));
        if (this.tileable._persistent) {
            this.makePersistentAction.hide();
        }
        else {
            this.unmakePersistentAction.hide();
        }
        this.menu.addAction('Close', () => {
            this.emit('close-clicked');
        }, Gio$a.icon_new_for_string(`${Me$E.path}/assets/icons/close-symbolic.svg`));
        Main$h.uiGroup.add_actor(this.menu.actor);
        this.menu.actor.hide();
        this.title = new St$c.Label({
            style_class: 'task-bar-item-title',
            y_align: Clutter$j.ActorAlign.CENTER,
        });
        Me$E.tooltipManager.add(this.title, { relativeActor: this });
        this.signalManager = new MsManager();
        this.style = getSettings('theme').get_string('taskbar-item-style');
        this.signalManager.observe(getSettings('theme'), 'changed::taskbar-item-style', () => {
            this.style = getSettings('theme').get_string('taskbar-item-style');
            this.updateTitle();
            this.setStyle();
        });
        this.signalManager.observe(this.tileable, 'title-changed', () => this.updateTitle());
        this.setStyle();
        this.connect('destroy', this._onDestroy.bind(this));
        this.closeIcon = new St$c.Icon({
            style_class: 'task-small-icon',
            gicon: Gio$a.icon_new_for_string(`${Me$E.path}/assets/icons/close-symbolic.svg`),
        });
        this.closeButton = new St$c.Button({
            style_class: 'task-close-button',
            child: this.closeIcon,
        });
        this.closeButton.connect('clicked', () => {
            this.emit('close-clicked');
        });
        this.persistentIcon = new St$c.Icon({
            style_class: 'task-small-icon',
            gicon: Gio$a.icon_new_for_string(`${Me$E.path}/assets/icons/pin-symbolic.svg`),
        });
        if (this.tileable._persistent) {
            this.endIconContainer.set_child(this.persistentIcon);
        }
        else {
            this.endIconContainer.set_child(this.closeButton);
        }
        this.container.add_child(this.startIconContainer);
        this.container.add_child(this.title);
        this.container.add_child(this.endIconContainer);
    }
    setStyle() {
        this.updateTitle();
        if (this.style == 'icon') {
            this.title.hide();
        }
        else {
            this.title.show();
        }
    }
    buildIcon(height) {
        if (this.icon)
            this.icon.destroy();
        this.lastHeight = height;
        this.icon = this.app.create_icon_texture(height / 2);
        this.icon.style_class = 'app-icon';
        this.icon.set_size(height / 2, height / 2);
        this.startIconContainer.set_child(this.icon);
        const smallIconSize = Math.max(Math.round(height / 3), 18);
        this.persistentIcon.set_icon_size(smallIconSize);
        this.closeIcon.set_icon_size(smallIconSize);
        this.queue_relayout();
    }
    setActive(active) {
        super.setActive(active);
        this.updateTitle();
    }
    updateTitle() {
        if (this.style == 'full') {
            if (this.tileable.title.includes(this.app.get_name())) {
                this.title.text = this.tileable.title;
            }
            else {
                const escapedAppName = GLib$f.markup_escape_text(this.app.get_name(), -1);
                const escapedTitle = GLib$f.markup_escape_text(this.tileable.title, -1);
                this.title.get_clutter_text().set_markup(`${escapedTitle}<span alpha="${this.has_style_class_name('active') ? '40%' : '20%'}">   -   ${escapedAppName}</span>`);
            }
        }
        else if (this.style == 'name') {
            this.title.text = this.app.get_name();
        }
    }
    vfunc_allocate(...args) {
        const box = args[0];
        const height = box.get_height();
        if (!this.icon || this.lastHeight != height) {
            this.buildIconIdle = GLib$f.idle_add(GLib$f.PRIORITY_DEFAULT_IDLE, () => {
                delete this.buildIconIdle;
                this.buildIcon(height);
                return GLib$f.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
    _onDestroy() {
        if (this.buildIconIdle) {
            GLib$f.Source.remove(this.buildIconIdle);
        }
        this.signalManager.destroy();
        this.menu.destroy();
    }
};
TileableItem.metaInfo = {
    GTypeName: 'TileableItem',
    Signals: {
        'close-clicked': {},
    },
};
TileableItem = __decorate([
    registerGObjectClass
], TileableItem);
let IconTaskBarItem = class IconTaskBarItem extends TaskBarItem {
    _init(tileable, gicon) {
        const container = new St$c.Bin({
            style_class: 'task-bar-icon-container',
        });
        super._init(container, false);
        this.container = container;
        this.tileable = tileable;
        this.icon = new St$c.Icon({
            gicon,
            style_class: 'app-icon',
            icon_size: Me$E.msThemeManager.getPanelSizeNotScaled() / 2,
        });
        this.container.set_child(this.icon);
    }
    vfunc_get_preferred_width(_forHeight) {
        return [_forHeight, _forHeight];
    }
    vfunc_allocate(...args) {
        const box = args[0];
        const height = box.get_height() / 2;
        if (this.icon && this.icon.get_icon_size() != height) {
            GLib$f.idle_add(GLib$f.PRIORITY_DEFAULT_IDLE, () => {
                this.icon.set_icon_size(height);
                return GLib$f.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
};
IconTaskBarItem = __decorate([
    registerGObjectClass
], IconTaskBarItem);

const Me$D = imports.misc.extensionUtils.getCurrentExtension();
const MainCategories = [
    'Game',
    'Development',
    'Video',
    'Audio',
    'AudioVideo',
    'Graphics',
    'Office',
    'Science',
    'Education',
    'FileManager',
    'InstantMessaging',
    'Network',
    'Settings',
    'System',
    'Utility',
];
const meaningfulCategories = ['IDE', 'WebBrowser', 'Player'];
class MsWorkspaceCategory {
    constructor(msWorkspace, forcedCategory) {
        this.msWorkspace = msWorkspace;
        this.forcedCategory = forcedCategory;
        this.category = this.determineCategory();
    }
    forceCategory(category) {
        this.forcedCategory = category;
        this.refreshCategory();
        Me$D.stateManager.stateChanged();
    }
    refreshCategory() {
        this.category = this.determineCategory();
    }
    determineCategory() {
        if (this.forcedCategory) {
            return this.forcedCategory;
        }
        const appList = this.msWorkspace.msWindowList.map((msWindow) => {
            return msWindow.app;
        });
        if (!appList.length)
            return null;
        const categoryScoreMap = new Map();
        appList.forEach((app) => {
            if (app.is_window_backed())
                return;
            const appMainCategories = [];
            let multiplier = 1;
            const categoriesString = app.get_app_info().get_categories();
            const categories = categoriesString
                ? categoriesString.split(';')
                : [];
            categories.forEach((category) => {
                if (MainCategories.includes(category)) {
                    appMainCategories.push(category);
                }
                if (meaningfulCategories.includes(category)) {
                    multiplier += 1;
                }
            });
            appMainCategories.forEach((category) => {
                if (categoryScoreMap.has(category)) {
                    categoryScoreMap.set(category, categoryScoreMap.get(category) + 1 * Number(multiplier));
                }
                else {
                    categoryScoreMap.set(category, 1 * Number(multiplier));
                }
            });
        });
        let mostRatedCategoryEntry = null;
        for (const entry of categoryScoreMap.entries()) {
            if (!mostRatedCategoryEntry || entry[1] > mostRatedCategoryEntry[1])
                mostRatedCategoryEntry = entry;
            if (entry[1] === mostRatedCategoryEntry[1] &&
                MainCategories.indexOf(entry[0]) <
                    MainCategories.indexOf(mostRatedCategoryEntry[0])) {
                mostRatedCategoryEntry = entry;
            }
        }
        if (!mostRatedCategoryEntry)
            return null;
        return mostRatedCategoryEntry[0];
    }
}

const Clutter$i = imports.gi.Clutter;
const Gio$9 = imports.gi.Gio;
const GObject$2 = imports.gi.GObject;
const St$b = imports.gi.St;
const PopupMenu$3 = imports.ui.popupMenu;
const DND$2 = imports.ui.dnd;
const Main$g = imports.ui.main;
const Me$C = imports.misc.extensionUtils.getCurrentExtension();
let WorkspaceList = class WorkspaceList extends St$b.Widget {
    _init() {
        super._init({
            clip_to_allocation: true,
            style_class: 'workspace-list',
            reactive: true,
        });
        this._delegate = this;
        this.connect('destroy', this._onDestroy.bind(this));
        this.msWorkspaceButtonMap = new Map();
        this.msWorkspaceManager = Me$C.msWorkspaceManager;
        this.menuManager = new PopupMenu$3.PopupMenuManager(this);
        this.buttonList = new ReorderableList(true);
        this.buttonList.connect('actor-moved', (_, actor, index) => {
            this.msWorkspaceManager.setMsWorkspaceAt(actor.msWorkspace, index);
        });
        this.add_child(this.buttonList);
        this.workspaceActiveIndicator = new St$b.Widget({
            style_class: 'workspace-active-indicator',
            height: Me$C.msThemeManager.getPanelSize(Main$g.layoutManager.primaryIndex),
        });
        Me$C.msThemeManager.connect('panel-size-changed', () => {
            this.workspaceActiveIndicator.set_height(Me$C.msThemeManager.getPanelSize(Main$g.layoutManager.primaryIndex));
            this.queue_relayout();
        });
        this.workspaceActiveIndicator.add_style_class_name('primary-bg');
        this.add_child(this.workspaceActiveIndicator);
        this.connect('notify::mapped', () => {
            if (this.mapped) {
                this.buildButtons();
                this.activeButtonForIndex(global.workspace_manager.get_active_workspace_index());
            }
        });
        this.msWorkspaceManager.connect('dynamic-super-workspaces-changed', () => {
            this.buildButtons();
        });
        this.workspaceSignal = global.workspace_manager.connect('active-workspace-changed', () => {
            this.activeButtonForIndex(global.workspace_manager.get_active_workspace_index());
        });
        this.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter$i.ScrollDirection.UP:
                    this.msWorkspaceManager.activatePreviousMsWorkspace();
                    break;
                case Clutter$i.ScrollDirection.DOWN:
                    this.msWorkspaceManager.activateNextMsWorkspace();
                    break;
            }
        });
    }
    buildButtons() {
        this.msWorkspaceManager.primaryMsWorkspaces.forEach((msWorkspace, index) => {
            if (!this.msWorkspaceButtonMap.has(msWorkspace)) {
                const workspaceButton = new WorkspaceButton(this.msWorkspaceManager, msWorkspace);
                this.menuManager.addMenu(workspaceButton.menu);
                this.buttonList.insert_child_at_index(workspaceButton, index);
                this.msWorkspaceButtonMap.set(msWorkspace, workspaceButton);
            }
            else {
                const button = this.msWorkspaceButtonMap.get(msWorkspace);
                const index = this.msWorkspaceManager.primaryMsWorkspaces.indexOf(msWorkspace);
                this.buttonList.set_child_at_index(button, index);
            }
        });
        this.msWorkspaceButtonMap.forEach((button, msWorkspace) => {
            if (!this.msWorkspaceManager.primaryMsWorkspaces.includes(msWorkspace)) {
                this.menuManager.removeMenu(button.menu);
                button.menu.destroy();
                button.destroy();
                this.msWorkspaceButtonMap.delete(msWorkspace);
            }
        });
    }
    activeButtonForIndex(index) {
        if (this.buttonActive) {
            if (this.buttonActive.has_style_class_name('active')) {
                this.buttonActive.remove_style_class_name('active');
            }
            const child = this.buttonList.get_child_at_index(index);
            assert(child instanceof St$b.Widget, 'Child was not a widget');
            this.buttonActive = child;
            this.buttonActive.add_style_class_name('active');
        }
        this.workspaceActiveIndicator.ease({
            translation_y: this.get_preferred_width(-1)[1] * index,
            duration: 250,
            mode: Clutter$i.AnimationMode.EASE_OUT_QUAD,
        });
    }
    vfunc_get_preferred_width(_forHeight) {
        return [
            Me$C.msThemeManager.getPanelSize(Main$g.layoutManager.primaryIndex),
            Me$C.msThemeManager.getPanelSize(Main$g.layoutManager.primaryIndex),
        ];
    }
    _onDestroy() {
        global.workspace_manager.disconnect(this.workspaceSignal);
    }
};
WorkspaceList = __decorate([
    registerGObjectClass
], WorkspaceList);
let WorkspaceButton = class WorkspaceButton extends MatButton {
    _init(msWorkspaceManager, msWorkspace) {
        const workspaceButtonIcon = new WorkspaceButtonIcon(msWorkspace);
        super._init({
            child: workspaceButtonIcon,
        });
        this.msWorkspaceManager = msWorkspaceManager;
        this.msWorkspace = msWorkspace;
        this.workspaceButtonIcon = workspaceButtonIcon;
        this._delegate = this;
        this.buildMenu();
        Me$C.msThemeManager.connect('panel-size-changed', () => {
            this.queue_relayout();
        });
        this.connect('primary-action', () => {
            this.msWorkspace.activate();
        });
        this.connect('secondary-action', () => {
            this.menu.toggle();
        });
        this.connect('clicked', (actor, button) => {
            if (button === Clutter$i.BUTTON_MIDDLE) {
                if (this.msWorkspaceManager.primaryMsWorkspaces.indexOf(this.msWorkspace) !==
                    this.msWorkspaceManager.primaryMsWorkspaces.length - 1)
                    msWorkspace.close();
            }
        });
        this.mouseData = {
            pressed: false,
            dragged: false,
            originalCoords: null,
            originalSequence: null,
        };
    }
    get draggable() {
        return (this.msWorkspaceManager.primaryMsWorkspaces.indexOf(this.msWorkspace) !==
            this.msWorkspaceManager.primaryMsWorkspaces.length - 1);
    }
    buildMenu() {
        this.menu = new PopupMenu$3.PopupMenu(this, 0.5, St$b.Side.LEFT);
        this.menu.actor.add_style_class_name('panel-menu');
        this.menu.addMenuItem(new PopupMenu$3.PopupSeparatorMenuItem(_('Panel icons style')));
        this.panelIconStyleHybridRadio = this.menu.addAction(_('Hybrid'), () => {
            Me$C.msThemeManager.panelIconStyle = PanelIconStyleEnum.HYBRID;
        }, Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/radiobox-${Me$C.msThemeManager.panelIconStyle ===
            PanelIconStyleEnum.HYBRID
            ? 'marked'
            : 'blank'}-symbolic.svg`));
        this.panelIconStyleCategoryRadio = this.menu.addAction(_('Categories only'), () => {
            Me$C.msThemeManager.panelIconStyle = PanelIconStyleEnum.CATEGORY;
        }, Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/radiobox-${Me$C.msThemeManager.panelIconStyle ===
            PanelIconStyleEnum.CATEGORY
            ? 'marked'
            : 'blank'}-symbolic.svg`));
        this.panelIconStyleApplicationRadio = this.menu.addAction(_('Applications preview'), () => {
            Me$C.msThemeManager.panelIconStyle =
                PanelIconStyleEnum.APPLICATION;
        }, Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/radiobox-${Me$C.msThemeManager.panelIconStyle ===
            PanelIconStyleEnum.APPLICATION
            ? 'marked'
            : 'blank'}-symbolic.svg`));
        Me$C.msThemeManager.connect('panel-icon-style-changed', () => {
            this.panelIconStyleHybridRadio._icon.set_gicon(Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/radiobox-${Me$C.msThemeManager.panelIconStyle ===
                PanelIconStyleEnum.HYBRID
                ? 'marked'
                : 'blank'}-symbolic.svg`));
            this.panelIconStyleCategoryRadio._icon.set_gicon(Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/radiobox-${Me$C.msThemeManager.panelIconStyle ===
                PanelIconStyleEnum.CATEGORY
                ? 'marked'
                : 'blank'}-symbolic.svg`));
            this.panelIconStyleApplicationRadio._icon.set_gicon(Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/radiobox-${Me$C.msThemeManager.panelIconStyle ===
                PanelIconStyleEnum.APPLICATION
                ? 'marked'
                : 'blank'}-symbolic.svg`));
        });
        this.menu.addMenuItem(new PopupMenu$3.PopupSeparatorMenuItem(_('Override category')));
        const autoSentence = _('Determined automatically');
        this.subMenu = new PopupMenu$3.PopupSubMenuMenuItem(this.msWorkspace.msWorkspaceCategory.forcedCategory || autoSentence);
        const setCategory = (category) => {
            this.msWorkspace.msWorkspaceCategory.forceCategory(category);
            this.workspaceButtonIcon.buildIcons();
            this.subMenu.label.text = category || autoSentence;
        };
        this.subMenu.menu.addAction(autoSentence, () => {
            setCategory();
        });
        MainCategories.forEach((key) => {
            this.subMenu.menu.addAction(key, () => {
                setCategory(key);
            }, Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/category/${key.toLowerCase()}-symbolic.svg`));
        });
        this.menu.addMenuItem(this.subMenu);
        Main$g.uiGroup.add_actor(this.menu.actor);
        this.menu.close();
    }
    initDrag() {
        this._draggable = DND$2.makeDraggable(this, {
            restoreOnSuccess: false,
            manualMode: true,
        });
        this._draggable.connect('drag-end', () => {
            this.mouseData.pressed = false;
            this.mouseData.dragged = false;
        });
    }
    handleDragOver(source, actor, x, y) {
        if (source instanceof TaskBarItem) {
            return DND$2.DragMotionResult.MOVE_DROP;
        }
        return DND$2.DragMotionResult.NO_DROP;
    }
    acceptDrop(source) {
        if (source instanceof TaskBarItem) {
            if (source.tileable instanceof MsWindow) {
                Me$C.msWorkspaceManager.setWindowToMsWorkspace(source.tileable, this.msWorkspace);
                this.msWorkspaceManager.stateChanged();
                this.msWorkspace.activate();
            }
            return true;
        }
        return false;
    }
    vfunc_get_preferred_width(_forHeight) {
        return [
            Me$C.msThemeManager.getPanelSize(Main$g.layoutManager.primaryIndex),
            Me$C.msThemeManager.getPanelSize(Main$g.layoutManager.primaryIndex),
        ];
    }
    vfunc_get_preferred_height(_forWidth) {
        return [
            Me$C.msThemeManager.getPanelSize(Main$g.layoutManager.primaryIndex),
            Me$C.msThemeManager.getPanelSize(Main$g.layoutManager.primaryIndex),
        ];
    }
};
WorkspaceButton.metaInfo = {
    GTypeName: 'WorkspaceButton',
    Signals: {
        'drag-dropped': {},
        'drag-over': {
            param_types: [GObject$2.TYPE_BOOLEAN],
        },
    },
};
WorkspaceButton = __decorate([
    registerGObjectClass
], WorkspaceButton);
function isMsWindow$1(argument) {
    return argument instanceof MsWindow;
}
let WorkspaceButtonIcon = class WorkspaceButtonIcon extends St$b.Widget {
    _init(msWorkspace) {
        super._init();
        this.msWorkspace = msWorkspace;
        this.appIconList = [];
        this.desaturateIcons();
        this.connect('notify::mapped', () => {
            if (this.mapped) {
                this.buildIcons();
            }
        });
        this.msWorkspace.connect('tileableList-changed', (_) => {
            this.buildIcons();
        });
        Me$C.msThemeManager.connect('panel-icon-style-changed', () => {
            this.buildIcons();
        });
        Me$C.msThemeManager.connect('panel-icon-color-changed', () => {
            this.desaturateIcons();
        });
        Me$C.msThemeManager.connect('panel-size-changed', () => {
            this.buildIcons();
        });
    }
    desaturateIcons() {
        const shouldDesaturate = !Me$C.msThemeManager.panelIconColor;
        const isDesaturate = this.desaturateEffect !== undefined &&
            this.desaturateEffect === this.get_effect('desaturate_icons');
        if (shouldDesaturate === isDesaturate)
            return;
        if (shouldDesaturate) {
            this.desaturateEffect = new Clutter$i.DesaturateEffect();
            this.add_effect_with_name('desaturate_icons', this.desaturateEffect);
        }
        else {
            this.remove_effect(this.desaturateEffect);
            delete this.desaturateEffect;
        }
    }
    buildIcons() {
        this.appIconList.forEach((icon) => {
            icon.destroy();
        });
        const appList = this.msWorkspace.tileableList
            .filter(isMsWindow$1)
            .map((msWindow) => {
            return msWindow.app;
        });
        this.appIconList = [];
        if (appList.length) {
            const numberOfEachAppMap = new Map();
            appList.forEach((app) => {
                if (numberOfEachAppMap.has(app)) {
                    numberOfEachAppMap.set(app, numberOfEachAppMap.get(app) + 1);
                }
                else {
                    numberOfEachAppMap.set(app, 1);
                }
            });
            const sortedByInstanceAppList = [...numberOfEachAppMap.entries()]
                .sort((a, b) => {
                return b[1] - a[1];
            })
                .map((entry) => {
                return entry[0];
            });
            if (this.msWorkspace.msWorkspaceCategory.forcedCategory ||
                Me$C.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.CATEGORY ||
                (Me$C.msThemeManager.panelIconStyle ===
                    PanelIconStyleEnum.HYBRID &&
                    sortedByInstanceAppList.length > 1)) {
                const category = this.msWorkspace.msWorkspaceCategory.category || '';
                const icon = new St$b.Icon({
                    gicon: Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/category/${category.toLowerCase()}-symbolic.svg`),
                    icon_size: Me$C.msThemeManager.getPanelSizeNotScaled() / 2,
                });
                this.appIconList.push(icon);
                this.add_child(icon);
            }
            else {
                sortedByInstanceAppList.forEach((app) => {
                    const icon = app.create_icon_texture(Me$C.msThemeManager.getPanelSizeNotScaled() / 2);
                    this.appIconList.push(icon);
                    this.add_child(icon);
                });
            }
        }
        else {
            const icon = new St$b.Icon({
                gicon: Gio$9.icon_new_for_string(`${Me$C.path}/assets/icons/plus-symbolic.svg`),
                icon_size: Me$C.msThemeManager.getPanelSizeNotScaled() / 2,
            });
            this.appIconList.push(icon);
            this.add_child(icon);
        }
    }
    vfunc_allocate(allocationBox, flags) {
        SetAllocation(this, allocationBox, flags);
        const themeNode = this.get_theme_node();
        allocationBox = themeNode.get_content_box(allocationBox);
        const portion = (allocationBox.x2 - allocationBox.x1) / 8;
        if (this.appIconList.length === 1) {
            const centerBox = new Clutter$i.ActorBox();
            centerBox.x1 = allocationBox.x1 + 2 * portion;
            centerBox.x2 = allocationBox.x2 - 2 * portion;
            centerBox.y1 = allocationBox.y1 + 2 * portion;
            centerBox.y2 = allocationBox.y2 - 2 * portion;
            Allocate(this.appIconList[0], centerBox, flags);
        }
        else {
            this.appIconList.forEach((icon, index) => {
                const box = new Clutter$i.ActorBox();
                switch (index) {
                    case 0:
                        box.x1 = allocationBox.x1 + portion;
                        box.x2 = allocationBox.x2 - 3 * portion;
                        box.y1 = allocationBox.y1 + 2 * portion;
                        box.y2 = allocationBox.y2 - 2 * portion;
                        Allocate(icon, box, flags);
                        break;
                    case 1:
                        box.x1 = allocationBox.x1 + 3 * portion;
                        box.x2 = allocationBox.x2 - portion;
                        box.y1 = allocationBox.y1 + 3 * portion;
                        box.y2 = allocationBox.y2 - portion;
                        Allocate(icon, box, flags);
                        break;
                    case 2:
                        box.x1 = allocationBox.x1 + 4 * portion;
                        box.x2 = allocationBox.x2 - portion;
                        box.y1 = allocationBox.y1 + portion;
                        box.y2 = allocationBox.y2 - 4 * portion;
                        Allocate(icon, box, flags);
                        break;
                }
            });
        }
    }
};
WorkspaceButtonIcon.metaInfo = {
    GTypeName: 'WorkspaceButtonIcon',
};
WorkspaceButtonIcon = __decorate([
    registerGObjectClass
], WorkspaceButtonIcon);

const St$a = imports.gi.St;
const Me$B = imports.misc.extensionUtils.getCurrentExtension();
let MatDivider = class MatDivider extends St$a.Widget {
    _init(vertical = false) {
        super._init({
            y_expand: vertical,
            x_expand: !vertical,
        });
        this.vertical = vertical;
    }
    vfunc_get_preferred_width(forHeight) {
        return this.vertical
            ? [1, 1]
            : super.vfunc_get_preferred_width(forHeight);
    }
    vfunc_get_preferred_height(forWidth) {
        return !this.vertical
            ? [1, 1]
            : super.vfunc_get_preferred_height(forWidth);
    }
};
MatDivider.metaInfo = {
    GTypeName: 'MatDivider',
};
MatDivider = __decorate([
    registerGObjectClass
], MatDivider);

const Clutter$h = imports.gi.Clutter;
const Gio$8 = imports.gi.Gio;
const GLib$e = imports.gi.GLib;
const Shell$6 = imports.gi.Shell;
const St$9 = imports.gi.St;
const AppDisplay = imports.ui.appDisplay;
const DND$1 = imports.ui.dnd;
const Main$f = imports.ui.main;
const ShellEntry = imports.ui.shellEntry;
const ParentalControlsManager = imports.misc.parentalControlsManager;
const RemoteSearch = imports.ui.remoteSearch;
const PopupMenu$2 = imports.ui.popupMenu;
const SystemActions = imports.misc.systemActions;
function getTermsForSearchString(searchString) {
    searchString = searchString.replace(/^\s+/g, '').replace(/\s+$/g, '');
    if (searchString === '')
        return [];
    return searchString.split(/\s+/);
}
const SEARCH_PROVIDERS_SCHEMA = 'org.gnome.desktop.search-providers';
const Me$A = imports.misc.extensionUtils.getCurrentExtension();
let SearchResultHeader = class SearchResultHeader extends St$9.Bin {
    _init(text) {
        super._init({
            style_class: 'subtitle-2 margin margin-top-x2 margin-bottom-x2',
        });
        this.label = new St$9.Label({
            text: text,
        });
        this.set_child(this.label);
    }
};
SearchResultHeader.metaInfo = {
    GTypeName: 'SearchResultHeader',
};
SearchResultHeader = __decorate([
    registerGObjectClass
], SearchResultHeader);
let SearchResultEntry = class SearchResultEntry extends MatButton {
    _init(icon, title, description, withMenu) {
        super._init({});
        this.layout = new St$9.BoxLayout();
        this.textLayout = new St$9.BoxLayout({
            vertical: true,
            styleClass: 'margin-left-x2 margin-top margin-bottom margin-right-x2',
            y_align: Clutter$h.ActorAlign.CENTER,
        });
        if (icon) {
            this.icon = icon;
            this.icon.set_style('margin: 12px');
            this.layout.add_child(this.icon);
        }
        this.layout.add_child(this.textLayout);
        this.title = new St$9.Label({
            text: title,
        });
        this.textLayout.add_child(this.title);
        if (description) {
            this.description = new St$9.Label({
                text: description,
                styleClass: 'caption',
                style: 'margin-top:2px',
            });
            this.textLayout.add_child(this.description);
        }
        this.set_child(this.layout);
    }
    setSelected(selected) {
        if (selected) {
            this.add_style_class_name('highlighted');
        }
        else {
            this.remove_style_class_name('highlighted');
        }
    }
};
SearchResultEntry.metaInfo = {
    GTypeName: 'SearchResultEntry',
    Signals: {
        activate: {
            param_types: [],
            accumulator: 0,
        },
    },
};
SearchResultEntry = __decorate([
    registerGObjectClass
], SearchResultEntry);
let SearchResultList = class SearchResultList extends St$9.BoxLayout {
    _init(searchEntry) {
        super._init({
            style_class: 'search-result-list',
            vertical: true,
        });
        this.providers = [];
        this.terms = [];
        this.searchTimeoutId = 0;
        this.results = {};
        this.cancellable = new Gio$8.Cancellable();
        this.clearIcon = new St$9.Icon({
            style_class: 'search-entry-icon',
            icon_name: 'edit-clear-symbolic',
        });
        this.iconClickedId = 0;
        this.entrySelected = null;
        this.searchEntry = searchEntry;
        ShellEntry.addContextMenu(this.searchEntry);
        this.text = this.searchEntry.clutter_text;
        this.text.connect('text-changed', this.onTextChanged.bind(this));
        this.text.connect('key-press-event', this.onKeyPress.bind(this));
        this.text.connect('key-focus-in', () => { });
        this.text.connect('key-focus-out', () => { });
        this.searchEntry.connect('popup-menu', () => {
        });
        this.parentalControlsManager = ParentalControlsManager.getDefault();
        this.parentalControlsManager.connect('app-filter-changed', this.reloadRemoteProviders.bind(this));
        this.searchSettings = new Gio$8.Settings({
            schema_id: SEARCH_PROVIDERS_SCHEMA,
        });
        this.searchSettings.connect('changed::disabled', this.reloadRemoteProviders.bind(this));
        this.searchSettings.connect('changed::enabled', this.reloadRemoteProviders.bind(this));
        this.searchSettings.connect('changed::disable-external', this.reloadRemoteProviders.bind(this));
        this.searchSettings.connect('changed::sort-order', this.reloadRemoteProviders.bind(this));
        this.registerProvider(new AppDisplay.AppSearchProvider());
        const appSystem = Shell$6.AppSystem.get_default();
        appSystem.connect('installed-changed', this.reloadRemoteProviders.bind(this));
        this.reloadRemoteProviders();
    }
    get resultEntryList() {
        return this.get_children().filter((actor) => actor instanceof SearchResultEntry);
    }
    registerProvider(provider) {
        provider.searchInProgress = false;
        if (provider.appInfo &&
            !this.parentalControlsManager.shouldShowApp(provider.appInfo))
            return;
        this.providers.push(provider);
    }
    reloadRemoteProviders() {
        const remoteProviders = this.providers.filter((p) => p.isRemoteProvider);
        remoteProviders.forEach((provider) => {
            this.unregisterProvider(provider);
        });
        RemoteSearch.loadRemoteSearchProviders(this.searchSettings, (providers) => {
            providers.forEach(this.registerProvider.bind(this));
        });
    }
    unregisterProvider(provider) {
        const index = this.providers.indexOf(provider);
        this.providers.splice(index, 1);
        if (provider.display)
            provider.display.destroy();
    }
    onTextChanged() {
        const terms = getTermsForSearchString(this.searchEntry.get_text());
        const searchActive = terms.length > 0;
        this.setTerms(terms);
        if (searchActive) {
            this.searchEntry.set_secondary_icon(this.clearIcon);
            if (this.iconClickedId === 0) {
                this.iconClickedId = this.searchEntry.connect('secondary-icon-clicked', () => {
                    this.reset();
                });
            }
        }
        else {
            if (this.iconClickedId > 0) {
                this.searchEntry.disconnect(this.iconClickedId);
                this.iconClickedId = 0;
            }
            this.searchEntry.set_secondary_icon(null);
            this.searchCancelled();
        }
    }
    onKeyPress(entry, event) {
        const symbol = event.get_key_symbol();
        if (symbol === Clutter$h.KEY_Escape) {
            this.resetAndClose();
            return Clutter$h.EVENT_STOP;
        }
        else {
            let arrowNext, nextDirection;
            if (symbol === Clutter$h.KEY_Tab) {
                this.selectNext();
                return Clutter$h.EVENT_STOP;
            }
            else if (symbol === Clutter$h.KEY_ISO_Left_Tab) {
                this.selectPrevious();
                return Clutter$h.EVENT_STOP;
            }
            else if (symbol === Clutter$h.KEY_Down) {
                this.selectNext();
                return Clutter$h.EVENT_STOP;
            }
            else if (symbol === Clutter$h.KEY_Up) {
                this.selectPrevious();
                return Clutter$h.EVENT_STOP;
            }
            else if (symbol === Clutter$h.KEY_Return ||
                symbol === Clutter$h.KEY_KP_Enter) {
                this.entrySelected.emit('primary-action');
                return Clutter$h.EVENT_STOP;
            }
        }
        return Clutter$h.EVENT_PROPAGATE;
    }
    doSearch() {
        this.startingSearch = false;
        const previousResults = this.results;
        this.results = {};
        this.entrySelected = null;
        this.remove_all_children();
        this.providers.forEach((provider) => {
            provider.searchInProgress = true;
            const previousProviderResults = previousResults[provider.id];
            if (this.isSubSearch && previousProviderResults) {
                provider.getSubsearchResultSet(previousProviderResults, this.terms, (results) => {
                    this.gotResults(results, provider);
                }, this.cancellable);
            }
            else {
                provider.getInitialResultSet(this.terms, (results) => {
                    this.gotResults(results, provider);
                }, this.cancellable);
            }
        });
        this.clearSearchTimeout();
    }
    clearSearchTimeout() {
        if (this.searchTimeoutId > 0) {
            GLib$e.source_remove(this.searchTimeoutId);
            this.searchTimeoutId = 0;
        }
    }
    onSearchTimeout() {
        this.searchTimeoutId = 0;
        this.doSearch();
        return GLib$e.SOURCE_REMOVE;
    }
    searchCancelled() {
        if (this.text.text !== '')
            this.reset();
    }
    setTerms(terms) {
        const searchString = terms.join(' ');
        const previousSearchString = this.terms.join(' ');
        if (searchString == previousSearchString)
            return;
        this.startingSearch = true;
        this.cancellable.cancel();
        this.cancellable.reset();
        if (terms.length == 0) {
            this.reset();
            return;
        }
        let isSubSearch = false;
        if (this.terms.length > 0)
            isSubSearch = searchString.indexOf(previousSearchString) == 0;
        this.terms = terms;
        this.isSubSearch = isSubSearch;
        if (this.searchTimeoutId == 0)
            this.searchTimeoutId = GLib$e.timeout_add(GLib$e.PRIORITY_DEFAULT, 150, this.onSearchTimeout.bind(this));
        const escapedTerms = this.terms.map((term) => Shell$6.util_regex_escape(term));
        this.highlightRegex = new RegExp('(%s)'.format(escapedTerms.join('|')), 'gi');
    }
    gotResults(results, provider) {
        this.results[provider.id] = results;
        this.updateResults(provider, results);
    }
    updateResults(provider, results) {
        if (!results.length)
            return;
        if (provider.isRemoteProvider) {
            this.add_child(new SearchResultHeader(provider.appInfo.get_name()));
        }
        else {
            this.add_child(new SearchResultHeader(_('Applications')));
        }
        provider.getResultMetas(results, (resMetas, index) => {
            this.resMetas = resMetas;
            let moreEntry;
            const extraResults = [];
            if (resMetas.length > 5) {
                moreEntry = new SearchResultEntry(new St$9.Icon({
                    icon_size: 32,
                    gicon: Gio$8.icon_new_for_string(`${Me$A.path}/assets/icons/chevron-down-symbolic.svg`),
                }), ngettext('%d more', '%d more', resMetas.length - 5).format(resMetas.length - 5), '', provider.id === 'applications');
                moreEntry.connect('primary-action', () => {
                    extraResults.forEach((entry) => {
                        this.insert_child_below(entry, moreEntry);
                    });
                    this.remove_child(moreEntry);
                    this.selectResult(extraResults[0]);
                });
            }
            let numberOfRes = 0;
            for (const res of resMetas) {
                if (!res.name)
                    return;
                numberOfRes++;
                let icon = res.createIcon(32);
                if (!icon && provider.appInfo) {
                    icon = new St$9.Icon({
                        icon_size: 32,
                        gicon: provider.appInfo.get_icon(),
                    });
                }
                const entry = new SearchResultEntry(icon, res.name, res.description, provider.id === 'applications');
                entry.connect('primary-action', () => {
                    if (provider.isRemoteProvider) {
                        provider.activateResult(res.id, this.terms);
                    }
                    else {
                        const app = Shell$6.AppSystem.get_default().lookup_app(res.id);
                        if (app) {
                            if (app.can_open_new_window()) {
                                const msWindow = Me$A.msWindowManager.createNewMsWindow(app.id, null, null, {
                                    msWorkspace: Me$A.msWorkspaceManager.getActiveMsWorkspace(),
                                    focus: true,
                                    insert: true,
                                });
                                Me$A.msWindowManager.openAppForMsWindow(msWindow);
                            }
                            else {
                                app.activate();
                            }
                        }
                        else {
                            SystemActions.getDefault().activateAction(res.id);
                        }
                    }
                    this.resetAndClose();
                });
                if (numberOfRes <= 5) {
                    this.addResult(entry);
                }
                else {
                    extraResults.push(entry);
                }
            }
            if (moreEntry) {
                this.addResult(moreEntry);
            }
        }, this.cancellable);
    }
    addResult(resultEntry) {
        this.add_child(resultEntry);
        if (this.resultEntryList.length === 1) {
            this.selectResult(resultEntry);
        }
    }
    selectResult(entry) {
        if (this.entrySelected) {
            this.entrySelected.setSelected(false);
        }
        this.entrySelected = entry;
        this.entrySelected.setSelected(true);
        this.emit('result-selected-changed', this.entrySelected);
    }
    selectNext() {
        const currentIndex = this.resultEntryList.indexOf(this.entrySelected);
        const nextEntry = this.resultEntryList[currentIndex + 1];
        if (nextEntry) {
            this.selectResult(nextEntry);
        }
    }
    selectPrevious() {
        const currentIndex = this.resultEntryList.indexOf(this.entrySelected);
        const previousEntry = this.resultEntryList[currentIndex - 1];
        if (previousEntry) {
            this.selectResult(previousEntry);
        }
    }
    reset() {
        this.searchEntry.text = '';
        this.terms = [];
        this.results = {};
        this.entrySelected = null;
        this.remove_all_children();
        this.clearSearchTimeout();
        this.startingSearch = false;
    }
    resetAndClose() {
        this.reset();
        Me$A.layout.toggleOverview();
    }
};
SearchResultList.metaInfo = {
    GTypeName: 'SearchResultList',
    Signals: {
        'result-selected-changed': {
            param_types: [SearchResultEntry.$gtype],
            accumulator: 0,
        },
    },
};
SearchResultList = __decorate([
    registerGObjectClass
], SearchResultList);

const Clutter$g = imports.gi.Clutter;
const Gio$7 = imports.gi.Gio;
const St$8 = imports.gi.St;
const Util = imports.misc.util;
const SearchController = imports.ui.searchController;
const Main$e = imports.ui.main;
const Me$z = imports.misc.extensionUtils.getCurrentExtension();
let PanelContent = class PanelContent extends St$8.BoxLayout {
    _init() {
        super._init({
            vertical: true,
            y_expand: true,
        });
        this.topBox = new St$8.BoxLayout({
            vertical: true,
            y_expand: true,
        });
        this.add_child(this.topBox);
        this.buttonIcon = new St$8.Icon({
            style_class: 'mat-panel-button-icon',
            icon_size: Me$z.msThemeManager.getPanelSizeNotScaled() / 2,
        });
        this.searchButton = new MatPanelButton({
            child: this.buttonIcon,
            primary: true,
        });
        this.searchButton.connect('clicked', () => {
            this.emit('toggle');
        });
        this.topBox.add_child(this.searchButton);
        this.workspaceList = new WorkspaceList();
        this.topBox.add_child(this.workspaceList);
        this.statusArea = new MsStatusArea();
        this.add_child(this.statusArea);
        Me$z.msThemeManager.connect('panel-size-changed', () => {
            this.buttonIcon.set_icon_size(Me$z.msThemeManager.getPanelSizeNotScaled() / 2);
            this.queue_relayout();
        });
        this.setIcon('search');
    }
    enable() {
        this.statusArea.enable();
    }
    disable() {
        this.statusArea.disable();
    }
    vfunc_get_preferred_width(_forHeight) {
        return [
            Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex),
            Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex),
        ];
    }
    setIcon(icon) {
        if (icon === 'search') {
            this.buttonIcon.set_gicon(Gio$7.icon_new_for_string(`${Me$z.path}/assets/icons/magnify-symbolic.svg`));
        }
        if (icon === 'close') {
            this.buttonIcon.set_gicon(Gio$7.icon_new_for_string(`${Me$z.path}/assets/icons/close-symbolic.svg`));
        }
    }
};
PanelContent.metaInfo = {
    GTypeName: 'PanelContent',
    Signals: {
        toggle: {
            param_types: [],
            accumulator: 0,
        },
    },
};
PanelContent = __decorate([
    registerGObjectClass
], PanelContent);
let SearchContent = class SearchContent extends St$8.BoxLayout {
    _init() {
        super._init({
            vertical: true,
            y_expand: true,
            x_expand: true,
            x_align: Clutter$g.ActorAlign.FILL,
        });
        this.scrollView = new St$8.ScrollView({
            x_expand: true,
            hscrollbar_policy: St$8.PolicyType.NEVER,
            vscrollbar_policy: St$8.PolicyType.AUTOMATIC,
        });
        this.searchEntry = new St$8.Entry({
            style_class: 'search-entry margin',
            hint_text: _('Type to search'),
            track_hover: true,
            can_focus: true,
        });
        this.searchEntry.set_offscreen_redirect(Clutter$g.OffscreenRedirect.ALWAYS);
        this.searchEntryBin = new St$8.Bin({
            child: this.searchEntry,
            x_align: Clutter$g.ActorAlign.FILL,
            styleClass: 'background-primary',
            height: Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex),
        });
        this.add_child(this.searchEntryBin);
        this.searchResultList = new SearchResultList(this.searchEntry);
        this.searchResultList.connect('result-selected-changed', (_, res) => {
            Me$z.logFocus('new result', res);
            Util.ensureActorVisibleInScrollView(this.scrollView, res);
        });
        this.scrollView.add_actor(this.searchResultList);
        Me$z.msThemeManager.connect('panel-size-changed', () => {
            this.searchEntryBin.height = Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex);
            this.queue_relayout();
        });
        this.add_child(this.scrollView);
    }
    vfunc_get_preferred_width(_forHeight) {
        return [
            448 -
                Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex),
            448 -
                Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex),
        ];
    }
};
SearchContent = __decorate([
    registerGObjectClass
], SearchContent);
let MsPanel = class MsPanel extends St$8.BoxLayout {
    _init() {
        super._init({
            name: 'msPanel',
            reactive: true,
        });
        this.isExpanded = false;
        this.gnomeShellPanel = Main$e.panel;
        this.gnomeShellPanel.hide();
        this.panelContent = new PanelContent();
        this.add_child(this.panelContent);
        this.searchContent = new SearchContent();
        this.divider = new MatDivider();
        this.disableConnect = Me$z.connect('extension-disable', () => {
            Me$z.logFocus('extension-disable');
            Me$z.disconnect(this.disableConnect);
            this.disable();
        });
        Me$z.msThemeManager.connect('panel-size-changed', () => {
            this.queue_relayout();
        });
        this.panelContent.connect('toggle', () => {
            Me$z.layout.toggleOverview();
        });
    }
    enable() {
        this.gnomeShellPanel.hide();
        this.panelContent.enable();
    }
    disable() {
        this.gnomeShellPanel.show();
        this.panelContent.disable();
    }
    toggle() {
        if (!this.isExpanded) {
            if (!Me$z.layout.panelsVisible) {
                this.show();
            }
            if (this.searchContent.get_parent() === null) {
                if (Me$z.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT) {
                    this.insert_child_below(this.searchContent, this.panelContent);
                }
                else {
                    this.insert_child_above(this.searchContent, this.panelContent);
                }
            }
            if (this.divider.get_parent() === null) {
                if (Me$z.msThemeManager.verticalPanelPosition ===
                    VerticalPanelPositionEnum.LEFT) {
                    this.insert_child_below(this.divider, this.panelContent);
                }
                else {
                    this.insert_child_above(this.divider, this.panelContent);
                }
            }
            this.width = 448;
            this.translation_x =
                (448 -
                    (Me$z.layout.panelsVisible
                        ? Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex)
                        : 0)) *
                    (Me$z.msThemeManager.verticalPanelPosition ===
                        VerticalPanelPositionEnum.LEFT
                        ? -1
                        : 1);
            this.ease({
                translation_x: 0,
                duration: 200,
                mode: Clutter$g.AnimationMode.EASE_OUT_QUAD,
            });
            this.searchContent.searchEntry.grab_key_focus();
            this.panelContent.setIcon('close');
            this.isExpanded = true;
        }
        else {
            this.isExpanded = false;
            this.panelContent.setIcon('search');
            this.ease({
                translation_x: (448 -
                    (Me$z.layout.panelsVisible
                        ? Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex)
                        : 0)) *
                    (Me$z.msThemeManager.verticalPanelPosition ===
                        VerticalPanelPositionEnum.LEFT
                        ? -1
                        : 1),
                duration: 200,
                mode: Clutter$g.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.remove_child(this.searchContent);
                    this.remove_child(this.divider);
                    this.width = Me$z.msThemeManager.getPanelSize(Main$e.layoutManager.primaryIndex);
                    this.translation_x = 0;
                    if (!Me$z.layout.panelsVisible) {
                        this.hide();
                    }
                    this.searchContent.searchResultList.reset();
                },
            });
        }
    }
    vfunc_get_preferred_height(_forWidth) {
        return [
            Main$e.layoutManager.primaryMonitor.height,
            Main$e.layoutManager.primaryMonitor.height,
        ];
    }
};
MsPanel.metaInfo = {
    GTypeName: 'MsPanel',
};
MsPanel = __decorate([
    registerGObjectClass
], MsPanel);

class SignalHandle {
    constructor(target, id) {
        this.target = target;
        this.id = id;
    }
    static connect(to, signal, callback) {
        return new SignalHandle(to, to.connect(signal, callback));
    }
    disconnect() {
        if (this.target == null) {
            log('Signal is already disconnected');
        }
        else {
            this.target.disconnect(this.id);
            this.target = null;
        }
    }
}

const Clutter$f = imports.gi.Clutter;
const Me$y = imports.misc.extensionUtils.getCurrentExtension();
let TranslationAnimator = class TranslationAnimator extends Clutter$f.Actor {
    _init(vertical = false) {
        super._init({
            layout_manager: new Clutter$f.BinLayout(),
            clip_to_allocation: true,
        });
        this.vertical = vertical;
        this.transitionContainer = new Clutter$f.Actor({
            layout_manager: new Clutter$f.BoxLayout({
                orientation: this.vertical
                    ? Clutter$f.Orientation.VERTICAL
                    : Clutter$f.Orientation.HORIZONTAL,
            }),
        });
        this.add_actor(this.transitionContainer);
    }
    setTranslation(initialActors, enteringActors, direction) {
        if (this.animationInProgress) {
            this.transitionContainer.remove_all_transitions();
            this.animationInProgress = false;
            const visibleArea = {
                x1: Math.abs(this.transitionContainer.translation_x),
                x2: Math.abs(this.transitionContainer.translation_x) +
                    this.width,
                y1: Math.abs(this.transitionContainer.translation_y),
                y2: Math.abs(this.transitionContainer.translation_y) +
                    this.height,
            };
            this.transitionContainer.get_children().forEach((actor) => {
                const allocationBox = actor.allocation;
                if (this.vertical) {
                    if (allocationBox.y2 < visibleArea.y1) {
                        this.transitionContainer.remove_actor(actor);
                        this.transitionContainer.translation_y =
                            this.transitionContainer.translation_y +
                                allocationBox.get_height();
                    }
                    if (allocationBox.y1 > visibleArea.y2) {
                        this.transitionContainer.remove_actor(actor);
                    }
                }
                else {
                    if (allocationBox.x2 < visibleArea.x1) {
                        this.transitionContainer.remove_actor(actor);
                        this.transitionContainer.translation_x =
                            this.transitionContainer.translation_x +
                                allocationBox.get_width();
                    }
                    if (allocationBox.x1 > visibleArea.x2) {
                        this.transitionContainer.remove_actor(actor);
                    }
                }
            });
        }
        else if (initialActors) {
            initialActors.forEach((actor) => {
                reparentActor(actor, this.transitionContainer);
            });
        }
        enteringActors.forEach((actor, index) => {
            const nextActorFound = this.transitionContainer
                .get_children()
                .find((existingActor) => {
                return existingActor === actor;
            });
            if (!nextActorFound) {
                reparentActor(actor, this.transitionContainer);
                if (direction < 0) {
                    this.transitionContainer.set_child_at_index(actor, index);
                    if (this.vertical) {
                        this.transitionContainer.translation_y -= actor.height;
                    }
                    else {
                        this.transitionContainer.translation_x -= actor.width;
                    }
                }
            }
        });
        this.transitionContainer.set_child_at_index(this.transitionContainer.get_child_at_index(0), 0);
        const transitionConfig = {
            duration: 250,
            mode: Clutter$f.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                this.endTransition();
            },
        };
        let target = 0;
        if (direction > 0) {
            target = this.vertical
                ? this.transitionContainer.height - this.height
                : this.transitionContainer.width - this.width;
        }
        if (this.vertical) {
            transitionConfig.translation_y = -target;
        }
        else {
            transitionConfig.translation_x = -target;
        }
        this.animationInProgress = true;
        this.transitionContainer.ease(transitionConfig);
    }
    endTransition() {
        this.transitionContainer.translation_x = 0;
        this.transitionContainer.translation_y = 0;
        this.animationInProgress = false;
        this.emit('transition-completed');
        this.transitionContainer.remove_all_children();
    }
};
TranslationAnimator.metaInfo = {
    GTypeName: 'TranslationAnimator',
    Signals: {
        'transition-completed': {},
    },
};
TranslationAnimator = __decorate([
    registerGObjectClass
], TranslationAnimator);

const Clutter$e = imports.gi.Clutter;
const Meta$7 = imports.gi.Meta;
const Shell$5 = imports.gi.Shell;
const St$7 = imports.gi.St;
const Main$d = imports.ui.main;
const Background = imports.ui.background;
const Me$x = imports.misc.extensionUtils.getCurrentExtension();
let MsMain = class MsMain extends St$7.Widget {
    _init() {
        super._init({});
        this.overviewShown = false;
        Me$x.layout = this;
        this.panelsVisible = Me$x.stateManager.getState('panels-visible');
        this.panelsVisible =
            this.panelsVisible === undefined ? true : this.panelsVisible;
        Main$d.uiGroup.insert_child_above(this, global.window_group);
        this.monitorsContainer = [];
        this.aboveContainer = new Clutter$e.Actor();
        this.add_child(this.aboveContainer);
        this.backgroundGroup = new Meta$7.BackgroundGroup({});
        this.setBlurBackground(Me$x.msThemeManager.blurBackground);
        Me$x.msThemeManager.connect('blur-background-changed', () => {
            this.setBlurBackground(Me$x.msThemeManager.blurBackground);
        });
        this.add_child(this.backgroundGroup);
        this.primaryMonitorContainer = new PrimaryMonitorContainer(this.primaryMonitor, this.backgroundGroup, {
            clip_to_allocation: true,
        });
        this.add_child(this.primaryMonitorContainer);
        this.panel = this.primaryMonitorContainer.panel;
        this.primaryMonitorContainer.setMsWorkspaceActor(Me$x.msWorkspaceManager.getActivePrimaryMsWorkspace().msWorkspaceActor);
        for (const externalMonitor of this.externalMonitors) {
            const container = new MonitorContainer(externalMonitor, this.backgroundGroup, {
                clip_to_allocation: true,
            });
            this.monitorsContainer.push(container);
            this.add_child(container);
        }
        global.display.connect('overlay-key', () => {
            this.toggleOverview();
        });
        global.stage.connect('captured-event', (_, event) => {
            if (!this.overviewShown)
                return;
            if (event.type() === Clutter$e.EventType.BUTTON_PRESS) {
                const source = event.get_source();
                const [x, y] = event.get_coords();
                const [x1, y1] = this.panel.get_transformed_position();
                const [width, height] = this.panel.get_transformed_size();
                if (!(x >= x1 && x <= x1 + width && y >= y1 && y <= y1 + height)) {
                    this.toggleOverview();
                }
            }
            return Clutter$e.EVENT_PROPAGATE;
        });
        this.registerToSignals();
        this.onMsWorkspacesChanged();
        this.updatePanelVisibilities();
        this.updateFullscreenMonitors();
    }
    get primaryMonitor() {
        return Main$d.layoutManager.primaryMonitor;
    }
    get externalMonitors() {
        return Main$d.layoutManager.monitors.filter((monitor) => monitor !== this.primaryMonitor);
    }
    setBlurBackground(blur) {
        var _a;
        const themeContext = St$7.ThemeContext.get_for_stage(global.stage);
        if ((this.blurEffect && blur) || (!this.blurEffect && !blur)) {
            return;
        }
        else if (this.blurEffect && !blur) {
            (_a = this._scaleChangedId) === null || _a === void 0 ? void 0 : _a.disconnect();
            this.backgroundGroup.remove_effect(this.blurEffect);
            delete this.blurEffect;
            return;
        }
        this.blurEffect = new Shell$5.BlurEffect({
            brightness: 0.55,
            sigma: 60 * themeContext.scale_factor,
        });
        this._scaleChangedId = SignalHandle.connect(themeContext, 'notify::scale-factor', () => {
            this.blurEffect.sigma = 60 * themeContext.scale_factor;
        });
        this.backgroundGroup.add_effect(this.blurEffect);
    }
    registerToSignals() {
        this.signals = [];
        this.signals.push({
            from: Me$x.msWorkspaceManager,
            id: Me$x.msWorkspaceManager.connect('switch-workspace', (_, from, to) => {
                this.onSwitchWorkspace(from, to);
            }),
        });
        this.signals.push({
            from: Me$x.msWorkspaceManager,
            id: Me$x.msWorkspaceManager.connect('dynamic-super-workspaces-changed', () => {
                this.onMsWorkspacesChanged();
            }),
        });
        this.signals.push({
            from: Me$x,
            id: Me$x.connect('extension-disable', () => {
                this.aboveContainer.get_children().forEach((actor) => {
                    this.aboveContainer.remove_child(actor);
                    global.window_group.add_child(actor);
                });
                this.signals.forEach((signal) => {
                    signal.from.disconnect(signal.id);
                });
            }),
        });
        this.signals.push({
            from: global.display,
            id: global.display.connect('in-fullscreen-changed', () => {
                this.updateFullscreenMonitors();
            }),
        });
        this.signals.push({
            from: Main$d.layoutManager,
            id: Main$d.layoutManager.connect('monitors-changed', () => {
                this.primaryMonitorContainer.setMonitor(this.primaryMonitor);
                const externalMonitorsDiff = Main$d.layoutManager.monitors.length -
                    1 -
                    this.monitorsContainer.length;
                if (externalMonitorsDiff > 0) {
                    for (let i = 0; i < Math.abs(externalMonitorsDiff); i++) {
                        const container = new MonitorContainer(this.externalMonitors[this.externalMonitors.length -
                            Math.abs(externalMonitorsDiff) +
                            i], this.backgroundGroup, {
                            clip_to_allocation: true,
                        });
                        this.monitorsContainer.push(container);
                        this.add_child(container);
                    }
                }
                else if (externalMonitorsDiff < 0) {
                    for (let i = 0; i < Math.abs(externalMonitorsDiff); i++) {
                        const container = this.monitorsContainer.pop();
                        assert(container !== undefined, 'monitorsContainer was empty');
                        if (container.msWorkspaceActor) {
                            container.remove_child(container.msWorkspaceActor);
                        }
                        container.destroy();
                    }
                }
                this.externalMonitors.forEach((monitor, index) => {
                    this.monitorsContainer[index].setMonitor(monitor);
                });
                this.onMsWorkspacesChanged();
                this.updatePanelVisibilities();
                this.updateFullscreenMonitors();
            }),
        });
    }
    onMsWorkspacesChanged() {
        this.primaryMonitorContainer.setMsWorkspaceActor(Me$x.msWorkspaceManager.getActivePrimaryMsWorkspace().msWorkspaceActor);
        this.monitorsContainer.forEach((container) => {
            const msWorkspace = Me$x.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(container.monitor.index)[0];
            if (msWorkspace) {
                container.setMsWorkspaceActor(msWorkspace.msWorkspaceActor);
            }
        });
    }
    onSwitchWorkspace(_from, _to) {
        this.onMsWorkspacesChanged();
    }
    togglePanelsVisibilities() {
        this.panelsVisible = !this.panelsVisible;
        Me$x.stateManager.setState('panels-visible', this.panelsVisible);
        this.updatePanelVisibilities();
    }
    updatePanelVisibilities() {
        [
            this.primaryMonitorContainer.verticalPanelSpacer,
            this.primaryMonitorContainer.horizontalPanelSpacer,
            ...this.monitorsContainer.map((container) => container.horizontalPanelSpacer),
        ].forEach((actor) => {
            actor.visible = this.panelsVisible;
            if (this.panelsVisible) {
                if (Main$d.layoutManager._findActor(actor) === -1) {
                    Main$d.layoutManager._trackActor(actor, {
                        affectsStruts: true,
                    });
                }
            }
            else {
                Main$d.layoutManager._untrackActor(actor);
            }
        });
        this.primaryMonitorContainer.panel.visible = this.panelsVisible;
        Me$x.msWorkspaceManager.refreshMsWorkspaceUI();
    }
    updateFullscreenMonitors() {
        this.primaryMonitorContainer.refreshFullscreen();
        for (const container of this.monitorsContainer) {
            container.refreshFullscreen();
        }
        Me$x.msWorkspaceManager.refreshMsWorkspaceUI();
    }
    toggleOverview() {
        if (this.overviewShown) {
            this.overviewShown = false;
            this.primaryMonitorContainer.workspaceContainer.ease_property('@effects.dimmer.brightness', Clutter$e.Color.new(127, 127, 127, 255), {
                duration: 300,
                mode: Clutter$e.AnimationMode.EASE_OUT_QUAD,
                onComplete: () => {
                    this.primaryMonitorContainer.workspaceContainer.clear_effects();
                    Main$d.popModal(this);
                },
            });
        }
        else {
            this.overviewShown = true;
            if (Main$d._findModal(this) === -1) {
                Main$d.pushModal(this, {
                    actionMode: Shell$5.ActionMode.OVERVIEW,
                });
            }
            const dimmerEffect = new Clutter$e.BrightnessContrastEffect({
                name: 'dimmer',
                brightness: Clutter$e.Color.new(127, 127, 127, 255),
            });
            this.primaryMonitorContainer.workspaceContainer.add_effect(dimmerEffect);
            this.primaryMonitorContainer.workspaceContainer.ease_property('@effects.dimmer.brightness', Clutter$e.Color.new(90, 90, 90, 255), {
                duration: 300,
                mode: Clutter$e.AnimationMode.EASE_IN_QUAD,
            });
        }
        this.panel.toggle();
    }
    add_child(actor) {
        super.add_child(actor);
        this.set_child_above_sibling(this.aboveContainer, null);
    }
    setActorAbove(actor) {
        reparentActor(actor, this.aboveContainer);
    }
    vfunc_get_preferred_width(_forHeight) {
        const width = global.stage.width;
        return [width, width];
    }
    vfunc_get_preferred_height(_forWidth) {
        const height = global.stage.height;
        return [height, height];
    }
};
MsMain.metaInfo = {
    GTypeName: 'MsMain',
};
MsMain = __decorate([
    registerGObjectClass
], MsMain);
let MonitorContainer = class MonitorContainer extends St$7.Widget {
    _init(monitor, bgGroup, params) {
        super._init(params);
        this.bgGroup = bgGroup;
        this.horizontalPanelSpacer = new St$7.Widget({
            style_class: 'HorizontalSpacer',
        });
        this.setMonitor(monitor);
        this.add_child(this.horizontalPanelSpacer);
        const panelSizeSignal = Me$x.msThemeManager.connect('panel-size-changed', () => {
            this.updateSpacer();
        });
        const horizontalPanelPositionSignal = Me$x.msThemeManager.connect('horizontal-panel-position-changed', () => {
            this.updateSpacer();
        });
        this.connect('destroy', () => {
            Me$x.msThemeManager.disconnect(panelSizeSignal);
            Me$x.msThemeManager.disconnect(horizontalPanelPositionSignal);
        });
    }
    refreshFullscreen() {
        this.setFullscreen(global.display.get_monitor_in_fullscreen(this.monitor.index));
    }
    setFullscreen(monitorIsFullscreen) {
        this.bgManager.backgroundActor.visible = !monitorIsFullscreen;
        this.horizontalPanelSpacer.visible =
            Me$x.layout.panelsVisible && !monitorIsFullscreen;
    }
    setMsWorkspaceActor(actor) {
        if (actor === this.msWorkspaceActor)
            return;
        if (this.msWorkspaceActor &&
            this.msWorkspaceActor.get_parent() === this) {
            this.remove_child(this.msWorkspaceActor);
        }
        this.msWorkspaceActor = actor;
        reparentActor(this.msWorkspaceActor, this);
        this.msWorkspaceActor.updateUI();
    }
    updateSpacer() {
        const panelHeight = Me$x.msThemeManager.getPanelSize(this.monitor.index);
        const panelPosition = Me$x.msThemeManager.horizontalPanelPosition;
        this.horizontalPanelSpacer.set_size(this.monitor.width, panelHeight);
        this.horizontalPanelSpacer.set_position(0, panelPosition === HorizontalPanelPositionEnum.TOP
            ? 0
            : this.monitor.height - panelHeight);
    }
    setMonitor(monitor) {
        if (this.bgManager) {
            this.bgManager.destroy();
        }
        this.monitor = monitor;
        this.set_size(monitor.width, monitor.height);
        this.set_position(monitor.x, monitor.y);
        this.updateSpacer();
        this.bgManager = new Background.BackgroundManager({
            container: this.bgGroup,
            monitorIndex: monitor.index,
        });
    }
    allocateHorizontalPanelSpacer(box, flags) {
        AllocatePreferredSize(this.horizontalPanelSpacer, flags);
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        this.get_children().forEach((actor) => {
            if (actor === this.horizontalPanelSpacer) {
                return this.allocateHorizontalPanelSpacer(box, flags);
            }
            if (actor === this.msWorkspaceActor) {
                const msWorkspaceActorBox = new Clutter$e.ActorBox();
                msWorkspaceActorBox.x1 = box.x1;
                msWorkspaceActorBox.x2 = box.x2;
                msWorkspaceActorBox.y1 = box.y1;
                msWorkspaceActorBox.y2 = box.y2;
                return Allocate(this.msWorkspaceActor, msWorkspaceActorBox, flags);
            }
            AllocatePreferredSize(actor, flags);
        });
    }
};
MonitorContainer.metaInfo = {
    GTypeName: 'MonitorContainer',
};
MonitorContainer = __decorate([
    registerGObjectClass
], MonitorContainer);
let PrimaryMonitorContainer = class PrimaryMonitorContainer extends MonitorContainer {
    _init(monitor, bgGroup, params) {
        super._init(monitor, bgGroup, params);
        this.workspaceContainer = new St$7.Widget({
            layout_manager: new Clutter$e.BinLayout(),
            x_align: Clutter$e.ActorAlign.FILL,
            y_align: Clutter$e.ActorAlign.FILL,
        });
        this.verticalPanelSpacer = new St$7.Widget({
            style_class: 'VerticalSpacer',
        });
        this.add_child(this.verticalPanelSpacer);
        this.panel = new MsPanel();
        this.add_child(this.workspaceContainer);
        this.add_child(this.panel);
        this.translationAnimator = new TranslationAnimator(true);
        this.translationAnimator.connect('transition-completed', () => {
            reparentActor(this.msWorkspaceActor, this.workspaceContainer);
            this.remove_child(this.translationAnimator);
            this.msWorkspaceActor.updateUI();
        });
        const verticalPanelPositionSignal = Me$x.msThemeManager.connect('vertical-panel-position-changed', () => {
            this.queue_relayout();
            this.updateSpacer();
        });
        this.connect('destroy', () => {
            Me$x.msThemeManager.disconnect(verticalPanelPositionSignal);
        });
        this.updateSpacer();
    }
    setFullscreen(monitorIsFullscreen) {
        this.panel.visible = Me$x.layout.panelsVisible && !monitorIsFullscreen;
        super.setFullscreen(monitorIsFullscreen);
    }
    setTranslation(prevActor, nextActor) {
        if (!this.translationAnimator.get_parent()) {
            this.translationAnimator.width = this.width;
            this.translationAnimator.height =
                Main$d.layoutManager.primaryMonitor.height;
            this.workspaceContainer.add_child(this.translationAnimator);
        }
        const indexOfPrevActor = Me$x.msWorkspaceManager.primaryMsWorkspaces.findIndex((msWorkspace) => {
            return msWorkspace.msWorkspaceActor === prevActor;
        });
        const indexOfNextActor = Me$x.msWorkspaceManager.primaryMsWorkspaces.findIndex((msWorkspace) => {
            return msWorkspace.msWorkspaceActor === nextActor;
        });
        prevActor.height = nextActor.height = this.height;
        this.translationAnimator.setTranslation([prevActor], [nextActor], indexOfNextActor > indexOfPrevActor ? 1 : -1);
    }
    setMsWorkspaceActor(actor) {
        if (actor === this.msWorkspaceActor)
            return;
        let prevActor;
        if (this.msWorkspaceActor) {
            prevActor = this.msWorkspaceActor;
            if (this.msWorkspaceActor.get_parent() === this.workspaceContainer)
                this.workspaceContainer.remove_child(this.msWorkspaceActor);
        }
        this.msWorkspaceActor = actor;
        if (!this.msWorkspaceActor.get_parent()) {
            reparentActor(this.msWorkspaceActor, this.workspaceContainer);
        }
        this.msWorkspaceActor.msWorkspace.refreshFocus(true);
        if (prevActor) {
            this.setTranslation(prevActor, this.msWorkspaceActor);
        }
    }
    updateSpacer() {
        super.updateSpacer();
        if (this.verticalPanelSpacer) {
            const panelWidth = Me$x.msThemeManager.getPanelSize(this.monitor.index);
            const panelPosition = Me$x.msThemeManager.verticalPanelPosition;
            this.verticalPanelSpacer.set_size(panelWidth, this.monitor.height);
            this.verticalPanelSpacer.set_position(panelPosition === VerticalPanelPositionEnum.LEFT
                ? 0
                : this.monitor.width - panelWidth, 0);
        }
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);
        const panelBox = new Clutter$e.ActorBox();
        const panelPosition = Me$x.msThemeManager.verticalPanelPosition;
        if (this.panel) {
            const panelWidth = this.panel.get_preferred_width(-1)[1];
            panelBox.x1 =
                panelPosition === VerticalPanelPositionEnum.LEFT
                    ? box.x1
                    : box.x2 - panelWidth;
            panelBox.x2 = panelBox.x1 + panelWidth;
            panelBox.y1 = box.y1;
            panelBox.y2 = this.panel.get_preferred_height(-1)[1];
        }
        const msWorkspaceActorBox = new Clutter$e.ActorBox();
        msWorkspaceActorBox.x1 = box.x1;
        msWorkspaceActorBox.x2 = box.x2;
        msWorkspaceActorBox.y1 = box.y1;
        msWorkspaceActorBox.y2 = box.y2;
        if (this.panel && this.panel.visible && Me$x.layout.panelsVisible) {
            if (panelPosition === VerticalPanelPositionEnum.LEFT) {
                msWorkspaceActorBox.x1 =
                    msWorkspaceActorBox.x1 +
                        Me$x.msThemeManager.getPanelSize(Main$d.layoutManager.primaryIndex);
            }
            else {
                msWorkspaceActorBox.x2 =
                    msWorkspaceActorBox.x2 -
                        Me$x.msThemeManager.getPanelSize(Main$d.layoutManager.primaryIndex);
            }
        }
        this.get_children().forEach((child) => {
            if (child === this.panel) {
                return Allocate(child, panelBox, flags);
            }
            if (child === this.horizontalPanelSpacer) {
                return this.allocateHorizontalPanelSpacer(box, flags);
            }
            if (child === this.verticalPanelSpacer) {
                return AllocatePreferredSize(this.verticalPanelSpacer, flags);
            }
            Allocate(child, msWorkspaceActorBox, flags);
        });
    }
};
PrimaryMonitorContainer.metaInfo = {
    GTypeName: 'PrimaryMonitorContainer',
};
PrimaryMonitorContainer = __decorate([
    registerGObjectClass
], PrimaryMonitorContainer);

const Gio$6 = imports.gi.Gio;
const GLib$d = imports.gi.GLib;
const Clutter$d = imports.gi.Clutter;
const Main$c = imports.ui.main;
const Me$w = imports.misc.extensionUtils.getCurrentExtension();
let BaseTilingLayout = class BaseTilingLayout extends Clutter$d.LayoutManager {
    _init(msWorkspace, state = {}) {
        super._init();
        this._state = Object.assign({}, this.constructor.state, state);
        this.icon = Gio$6.icon_new_for_string(`${Me$w.path}/assets/icons/tiling/${this._state.key}-symbolic.svg`);
        this.msWorkspace = msWorkspace;
        this.themeSettings = getSettings('theme');
        this.signals = [];
        this.registerToSignals();
        GLib$d.idle_add(GLib$d.PRIORITY_DEFAULT, () => {
            this.afterInit();
            return GLib$d.SOURCE_REMOVE;
        });
    }
    afterInit() {
        this.onTileableListChanged(this.msWorkspace.tileableList, []);
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get tileableContainer() {
        return this.msWorkspace.msWorkspaceActor.tileableContainer;
    }
    get monitor() {
        return this.msWorkspace.monitor;
    }
    get tileableListVisible() {
        return this.msWorkspace.tileableList.filter((tileable) => {
            if (tileable === this.msWorkspace.appLauncher) {
                return tileable === this.msWorkspace.tileableFocused;
            }
            else {
                return tileable.visible;
            }
        });
    }
    registerToSignals() {
        this.signals.push({
            from: this.msWorkspace,
            id: this.msWorkspace.connect('tileableList-changed', (_, tileableList, oldTileableList) => {
                this.onTileableListChanged(tileableList, oldTileableList);
            }),
        }, {
            from: this.msWorkspace,
            id: this.msWorkspace.connect('tileable-focus-changed', (_, tileable, oldTileable) => {
                this.onFocusChanged(tileable, oldTileable);
            }),
        }, {
            from: global.display,
            id: global.display.connect('workareas-changed', this.onWorkAreasChanged.bind(this)),
        });
    }
    alterTileable(tileable) {
        if (tileable === this.msWorkspace.appLauncher &&
            tileable !== this.msWorkspace.tileableFocused) {
            this.msWorkspace.appLauncher.hide();
        }
        if (!tileable.get_parent()) {
            this.tileableContainer.add_child(tileable);
        }
    }
    restoreTileable(tileable) {
    }
    tileTileable(tileable, box, index, siblingLength) {
    }
    resolveBox(box) {
        if (!box) {
            box = new Clutter$d.ActorBox();
            box.x2 = InfinityTo0(this.tileableContainer.allocation.get_width());
            box.y2 = InfinityTo0(this.tileableContainer.allocation.get_height());
        }
        return box;
    }
    tileAll(box) {
        box = this.resolveBox(box);
        this.tileableListVisible.forEach((tileable) => {
            if (tileable instanceof MsWindow && tileable.dragged)
                return;
            this.tileTileable(tileable, box || this.tileableContainer.allocation, this.tileableListVisible.indexOf(tileable), this.tileableListVisible.length);
            if (tileable instanceof MsWindow) {
                tileable.updateMetaWindowPositionAndSize();
            }
        });
    }
    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
        actor.set_scale(0.8, 0.8);
        actor.translation_x = actor.width * 0.1;
        actor.translation_y = actor.height * 0.1;
        actor.opacity = 0;
        actor.ease({
            scale_x: 1,
            scale_y: 1,
            translation_x: 0,
            translation_y: 0,
            opacity: 255,
            duration: 250,
            mode: Clutter$d.AnimationMode.EASE_OUT_QUAD,
        });
    }
    hideAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.ease({
            scale_x: 0.8,
            scale_y: 0.8,
            translation_x: actor.width * 0.1,
            translation_y: actor.height * 0.1,
            opacity: 0,
            duration: 250,
            mode: Clutter$d.AnimationMode.EASE_OUT_QUAD,
            onComplete: () => {
                actor.set_scale(1, 1);
                actor.translation_x = 0;
                actor.translation_y = 0;
                actor.opacity = 255;
                actor.visible = false;
            },
        });
    }
    onTileableListChanged(tileableList, oldTileableList) {
        const enteringTileableList = tileableList.filter((tileable) => !oldTileableList.includes(tileable));
        const leavingPredicate = function (tileable) {
            return (tileable instanceof MsWindow &&
                !tileableList.includes(tileable) &&
                Me$w.msWindowManager.msWindowList.includes(tileable));
        };
        const leavingTileableList = oldTileableList.filter(leavingPredicate);
        enteringTileableList.forEach((tileable) => {
            this.alterTileable(tileable);
        });
        leavingTileableList.forEach((tileable) => {
            this.restoreTileable(tileable);
        });
        if (this.msWorkspace.appLauncher.visible &&
            this.msWorkspace.tileableFocused !== this.msWorkspace.appLauncher) {
            this.hideAppLauncher();
        }
        this.tileAll();
        this.layout_changed();
    }
    onWorkAreasChanged() {
        const workArea = Main$c.layoutManager.getWorkAreaForMonitor(this.monitor.index);
    }
    onFocusChanged(tileable, oldTileable) {
        if (tileable === this.msWorkspace.appLauncher) {
            this.tileAll();
            GLib$d.idle_add(GLib$d.PRIORITY_DEFAULT, () => {
                this.showAppLauncher();
                return GLib$d.SOURCE_REMOVE;
            });
        }
        else if (oldTileable === this.msWorkspace.appLauncher) {
            this.hideAppLauncher();
            this.tileAll();
        }
    }
    getWorkspaceBounds() {
        const box = this.msWorkspace.msWorkspaceActor.tileableContainer
            .allocation;
        return {
            x: 0,
            y: 0,
            width: box.get_width(),
            height: box.get_height(),
        };
    }
    applyGaps(x, y, width, height, screenGap, gap) {
        gap = gap || Me$w.layoutManager.gap;
        if (screenGap == undefined) {
            screenGap = Me$w.layoutManager.useScreenGap
                ? Me$w.layoutManager.screenGap
                : gap;
        }
        if ((!gap && !screenGap) ||
            this.msWorkspace.tileableList.length < 2) {
            return { x, y, width, height };
        }
        const bounds = this.getWorkspaceBounds();
        const edgeGap = screenGap;
        const halfGap = gap / 2;
        if (x === bounds.x) {
            x += edgeGap;
            width -= edgeGap;
        }
        else {
            x += halfGap;
            width -= halfGap;
        }
        if (y === bounds.y) {
            y += edgeGap;
            height -= edgeGap;
        }
        else {
            y += halfGap;
            height -= halfGap;
        }
        if (x + width === bounds.x + bounds.width) {
            width -= edgeGap;
        }
        else {
            width -= halfGap;
        }
        if (y + height === bounds.y + bounds.height) {
            height -= edgeGap;
        }
        else {
            height -= halfGap;
        }
        if (x < 0)
            x = 0;
        if (y < 0)
            y = 0;
        if (width < 1)
            width = 1;
        if (height < 1)
            height = 1;
        return { x, y, width, height };
    }
    buildQuickWidget() {
    }
    vfunc_get_preferred_width(_container, _forHeight) {
        return [-1, -1];
    }
    vfunc_get_preferred_height(_container, _forWidth) {
        return [-1, -1];
    }
    vfunc_allocate(container, box, flags) {
        this.tileAll(box);
        container.get_children().forEach((actor) => {
            if (this.msWorkspace.tileableList.includes(actor)) {
                AllocatePreferredSize(actor, flags);
            }
            else {
                Allocate(actor, box, flags);
            }
        });
    }
    onDestroy() {
        this.signals.forEach((signal) => {
            try {
                signal.from.disconnect(signal.id);
            }
            catch (error) {
                Me$w.log(`Failed to disconnect signal ${signal.id} from ${signal.from} ${signal.from.constructor.name} ${signal.from.toString()}  `);
            }
        });
        if (!Me$w.disableInProgress) {
            this.msWorkspace.tileableList.forEach((tileable) => {
                this.restoreTileable(tileable);
            });
        }
    }
};
BaseTilingLayout = __decorate([
    registerGObjectClass
], BaseTilingLayout);

const Me$v = imports.misc.extensionUtils.getCurrentExtension();
let MaximizeLayout = class MaximizeLayout extends BaseTilingLayout {
    _init(msWorkspace, state) {
        super._init(msWorkspace, state);
        this.translationAnimator = new TranslationAnimator();
        this.translationAnimator.connect('transition-completed', () => {
            this.endTransition();
        });
    }
    get tileableListVisible() {
        return this.msWorkspace.tileableList.filter((tileable) => tileable.visible);
    }
    displayTileable(actor) {
        if (this.currentDisplayedActor) {
            if (this.tileableContainer
                .get_children()
                .includes(this.currentDisplayedActor)) {
                this.tileableContainer.remove_child(this.currentDisplayedActor);
            }
            this.currentDisplayedActor.disconnect(this.currentDisplayedActorDestroySignal);
        }
        this.currentDisplayedActor = actor;
        this.currentDisplayedActorDestroySignal = this.currentDisplayedActor.connect('destroy', () => {
            delete this.currentDisplayedActor;
        });
        reparentActor(this.currentDisplayedActor, this.tileableContainer);
        this.currentDisplayedActor.grab_key_focus();
    }
    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
    }
    hideAppLauncher() {
    }
    onFocusChanged(windowFocused, oldWindowFocused) {
        if (windowFocused.dragged) {
            this.displayTileable(windowFocused);
        }
        else {
            if (!windowFocused.get_parent()) {
                this.displayTileable(windowFocused);
            }
            this.startTransition(windowFocused, oldWindowFocused);
        }
    }
    alterTileable(tileable) {
        super.alterTileable(tileable);
        tileable.visible = true;
        if (this.tileableContainer.get_children().includes(tileable)) {
            this.tileableContainer.remove_child(tileable);
        }
        if (tileable === this.msWorkspace.tileableFocused) {
            this.displayTileable(tileable);
        }
    }
    restoreTileable(tileable) {
        if (!tileable.get_parent()) {
            this.tileableContainer.add_child(tileable);
        }
    }
    tileTileable(tileable, box) {
        tileable.x = box.x1;
        tileable.y = box.y1;
        tileable.width = box.get_width();
        tileable.height = box.get_height();
    }
    startTransition(nextActor, prevActor) {
        if (!this.translationAnimator.get_parent()) {
            this.translationAnimator.width = InfinityTo0(this.tileableContainer.allocation.get_width());
            this.translationAnimator.height = InfinityTo0(this.tileableContainer.allocation.get_height());
            this.tileableContainer.add_child(this.translationAnimator);
        }
        const indexOfPrevActor = this.msWorkspace.tileableList.findIndex((tileable) => {
            return tileable === prevActor;
        });
        const indexOfNextActor = this.msWorkspace.tileableList.findIndex((tileable) => {
            return tileable === nextActor;
        });
        [nextActor, prevActor].forEach((actor) => {
            if (actor) {
                actor.set_width(InfinityTo0(this.tileableContainer.allocation.get_width()));
                actor.set_height(InfinityTo0(this.tileableContainer.allocation.get_height()));
            }
        });
        this.translationAnimator.setTranslation([prevActor], [nextActor], indexOfNextActor > indexOfPrevActor ? 1 : -1);
    }
    endTransition() {
        this.displayTileable(this.msWorkspace.tileableFocused);
        this.tileableContainer.remove_child(this.translationAnimator);
    }
};
MaximizeLayout.state = { key: 'maximize' };
MaximizeLayout.label = 'Maximize';
MaximizeLayout = __decorate([
    registerGObjectClass
], MaximizeLayout);

const Me$u = imports.misc.extensionUtils.getCurrentExtension();
const Signals$3 = imports.signals;
const MIN_BASIS_RATIO = 0.1;
class Portion {
    constructor(basis = 100, vertical = false) {
        this._basis = basis;
        this.vertical = vertical;
        this.children = [];
        this.borders = [];
    }
    get state() {
        return {
            basis: this.basis,
            vertical: this.vertical,
            children: this.children.map((child) => child.state),
        };
    }
    set state(state) {
        this.basis = state.basis;
        this.vertical = state.vertical;
        this.children = state.children.map((childState) => {
            const child = new Portion();
            child.state = childState;
            return child;
        });
        this.updateBorders();
    }
    get portionLength() {
        return this.children.length
            ? this.children.reduce((sum, portion) => sum + portion.portionLength, 0)
            : 1;
    }
    get concatBorders() {
        return this.borders.concat(...this.children.map((portion) => {
            return portion.borders;
        }));
    }
    get basis() {
        return this._basis;
    }
    set basis(value) {
        if (value < 0) {
            value = 0;
        }
        this._basis = value;
    }
    updateBorders() {
        this.borders = [];
        if (this.children.length < 2) {
            return;
        }
        for (let i = 0; i < this.children.length - 1; i++) {
            const [firstPortion, secondPortion] = this.children.slice(i, i + 2);
            this.borders.push(new PortionBorder(firstPortion, secondPortion, this));
        }
    }
    hasPortion(portion) {
        for (let i = 0; i < this.children.length; i++) {
            const possiblePortion = this.children[i];
            if (possiblePortion === portion ||
                (possiblePortion.children.length > 0 &&
                    possiblePortion.hasPortion(portion))) {
                return true;
            }
        }
        return false;
    }
    insert(basis = 100, vertical) {
        if (vertical === undefined) {
            vertical = !this.vertical;
        }
        if (this.children.length === 0) {
            this.children.splice(0, 0, new Portion(basis, vertical));
        }
        this.children.splice(0, 0, new Portion(basis, vertical));
        this.updateBorders();
    }
    insertVertical(basis = 100) {
        this.insert(basis, true);
    }
    insertHorizontal(basis = 100) {
        this.insert(basis, false);
    }
    push(basis = 100, vertical) {
        if (vertical === undefined) {
            vertical = !this.vertical;
        }
        if (this.children.length === 0) {
            this.children.push(new Portion(basis, vertical));
        }
        this.children.push(new Portion(basis, vertical));
        this.updateBorders();
    }
    pushVertical(basis = 100) {
        this.push(basis, true);
    }
    pushHorizontal(basis = 100) {
        this.push(basis, false);
    }
    shift() {
        if (this.portionLength <= 2) {
            this.children = [];
            this.borders = [];
            return;
        }
        const child = this.children[0];
        if (child) {
            if (child.children.length) {
                child.shift();
            }
            else {
                this.children.shift();
            }
        }
        this.updateBorders();
    }
    pop() {
        if (this.portionLength <= 2) {
            this.children = [];
            this.borders = [];
            return;
        }
        const child = this.children[this.children.length - 1];
        if (child) {
            if (child.children.length) {
                child.pop();
            }
            else {
                this.children.pop();
            }
        }
        this.updateBorders();
    }
    isBorderInSubPortion(index, after = false) {
        let portionIndex = 0;
        const afterOffset = after ? 1 : 0;
        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];
            if (portionIndex === index) {
                if (after ||
                    i - afterOffset < 0 ||
                    portion.children.length === 0) {
                    return false;
                }
            }
            if (portion.portionLength + portionIndex > index) {
                if (portion.children.length === 0) {
                    return false;
                }
                if (after) {
                    if (portionIndex === index) {
                        if (portion.children[0].portionLength > 1) {
                            return portion.children[0].isBorderInSubPortion(0, after);
                        }
                        else {
                            return false;
                        }
                    }
                    return true;
                }
                const lastPortion = portion.children[portion.children.length - 1];
                const portionIndexUntilLast = portion.portionLength +
                    portionIndex -
                    lastPortion.portionLength;
                if (index > portionIndexUntilLast) {
                    if (lastPortion.portionLength > 1) {
                        return lastPortion.isBorderInSubPortion(index - portionIndexUntilLast, after);
                    }
                    else {
                        return false;
                    }
                }
                return true;
            }
            portionIndex += portion.portionLength;
        }
        return false;
    }
    getBorderForIndex(index, vertical = false, after = false) {
        let portionIndex = 0;
        const afterOffset = after ? 1 : 0;
        if (index >= this.portionLength) {
            return;
        }
        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];
            if (portionIndex === index) {
                if (i - afterOffset < 0) {
                    return;
                }
            }
            if (portion.portionLength + portionIndex > index) {
                if (this.vertical === vertical &&
                    !portion.isBorderInSubPortion(index - portionIndex, after)) {
                    return this.borders[i - afterOffset];
                }
                return portion.getBorderForIndex(index - portionIndex, vertical, after);
            }
            portionIndex += portion.portionLength;
        }
    }
    getRatioForIndex(index, ratio = { x: 0, y: 0, width: 1, height: 1 }) {
        let portionIndex = 0;
        if (index >= this.portionLength) {
            return;
        }
        for (let i = 0; i < this.children.length; i++) {
            const portion = this.children[i];
            if (portionIndex === index && portion.children.length === 0) {
                return this.getRatioForPortion(portion, ratio);
            }
            if (portion.portionLength + portionIndex > index) {
                return portion.getRatioForIndex(index - portionIndex, this.getRatioForPortion(portion, ratio));
            }
            portionIndex += portion.portionLength;
        }
        return ratio;
    }
    getRatioForPortion(portion, ratio = { x: 0, y: 0, width: 1, height: 1 }) {
        const basisTotal = this.children.reduce((sum, child) => sum + child.basis, 0);
        let basisSum = 0;
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            const hasPortion = child.hasPortion(portion);
            if (child !== portion && !hasPortion) {
                basisSum += child.basis;
                continue;
            }
            const [position, size] = this.vertical
                ? ['y', 'height']
                : ['x', 'width'];
            ratio[position] += ratio[size] * (basisSum / basisTotal);
            ratio[size] *= child.basis / basisTotal;
            if (hasPortion) {
                return child.getRatioForPortion(portion, ratio);
            }
            break;
        }
        return ratio;
    }
    convert() {
        this.vertical = !this.vertical;
        this.children.forEach((portion) => portion.convert());
    }
}
class PortionBorder {
    constructor(firstPortion, secondPortion, parentPortion) {
        this.firstPortion = firstPortion;
        this.secondPortion = secondPortion;
        this.parentPortion = parentPortion;
    }
    get vertical() {
        return !this.parentPortion.vertical;
    }
    updateBasis(basisRatio) {
        if (basisRatio < 0) {
            basisRatio = 0;
        }
        const basisSum = this.firstPortion.basis + this.secondPortion.basis;
        this.firstPortion.basis *= basisRatio;
        if (this.firstPortion.basis / basisSum < MIN_BASIS_RATIO) {
            this.firstPortion.basis = MIN_BASIS_RATIO * basisSum;
        }
        else if (this.firstPortion.basis / basisSum > 1 - MIN_BASIS_RATIO) {
            this.firstPortion.basis = (1 - MIN_BASIS_RATIO) * basisSum;
        }
        else if (this.firstPortion.basis / basisSum > 0.24 &&
            this.firstPortion.basis / basisSum < 0.26) {
            this.firstPortion.basis = basisSum * 0.25;
        }
        else if (this.firstPortion.basis / basisSum > 0.49 &&
            this.firstPortion.basis / basisSum < 0.51) {
            this.firstPortion.basis = basisSum * 0.5;
        }
        else if (this.firstPortion.basis / basisSum > 0.74 &&
            this.firstPortion.basis / basisSum < 0.76) {
            this.firstPortion.basis = basisSum * 0.75;
        }
        this.secondPortion.basis = basisSum - this.firstPortion.basis;
    }
}

const { round } = Math;
const Clutter$c = imports.gi.Clutter;
const Cogl = imports.gi.Cogl;
const GObject$1 = imports.gi.GObject;
const Meta$6 = imports.gi.Meta;
const St$6 = imports.gi.St;
const Me$t = imports.misc.extensionUtils.getCurrentExtension();
const BORDER_WIDTH = 2;
let BaseResizeableTilingLayout = class BaseResizeableTilingLayout extends BaseTilingLayout {
    _init(msWorkspace, state = {}) {
        super._init(msWorkspace, state);
        this.mainPortion = new Portion();
        if (state.mainPortion) {
            this.mainPortion.state = state.mainPortion;
            delete state.mainPortion;
        }
        Me$t.layoutManager.connect('gap-changed', this.onGapChange.bind(this));
        this.currentFocusEffect = Me$t.msThemeManager.focusEffect;
        this.onGapChange();
        Me$t.msThemeManager.connect('focus-effect-changed', this.onFocusEffectChanged.bind(this));
    }
    get state() {
        return Object.assign({}, this._state, {
            mainPortion: this.mainPortion.state,
        });
    }
    onGapChange() {
        if (!Me$t.layoutManager.someGap) {
            if (!this.borderContainer) {
                this.borderActorList = [];
                this.borderContainer = new Clutter$c.Actor();
                this.msWorkspace.msWorkspaceActor.add_child(this.borderContainer);
                this.updateBordersActor();
            }
        }
        else {
            if (this.borderContainer) {
                this.borderContainer.destroy();
                delete this.borderContainer;
                delete this.borderActorList;
            }
        }
    }
    getTileableIndex(tileable) {
        return this.tileableListVisible.indexOf(tileable);
    }
    getTileablePortionRatio(tileable) {
        const index = this.getTileableIndex(tileable);
        if (index < 0) {
            return;
        }
        return this.mainPortion.getRatioForIndex(index);
    }
    getTileableBorder(tileable, vertical = false, after = false) {
        const index = this.getTileableIndex(tileable);
        if (index < 0) {
            return;
        }
        return this.mainPortion.getBorderForIndex(index, vertical, after);
    }
    applyBoxRatio(box, ratio) {
        return {
            x: round(box.x1 + ratio.x * box.get_width()),
            y: round(box.y1 + ratio.y * box.get_height()),
            width: round(ratio.width * box.get_width()),
            height: round(ratio.height * box.get_height()),
        };
    }
    applyBoxRatioAndGaps(box, ratio) {
        const { x, y, width, height } = this.applyBoxRatio(box, ratio);
        return this.applyGaps(x, y, width, height);
    }
    tileTileable(tileable, box) {
        const ratio = this.getTileablePortionRatio(tileable);
        if (!ratio) {
            return;
        }
        const { x, y, width, height } = this.applyBoxRatioAndGaps(box, ratio);
        tileable.x = x;
        tileable.y = y;
        tileable.width = width;
        tileable.height = height;
    }
    applyGaps(x, y, width, height) {
        const gap = Me$t.layoutManager.gap || BORDER_WIDTH;
        const screenGap = Me$t.layoutManager.useScreenGap
            ? Me$t.layoutManager.screenGap
            : Me$t.layoutManager.gap;
        return super.applyGaps(x, y, width, height, screenGap, gap);
    }
    updateMainPortionLength(length) {
        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }
        while (length > 1 && this.mainPortion.portionLength < length) {
            this.mainPortion.push();
        }
    }
    tileAll(box) {
        box = this.resolveBox(box);
        this.updateMainPortionLength(this.tileableListVisible.length);
        if (this.borderContainer) {
            this.updateBordersActor();
            this.updateBordersPosition(box);
        }
        super.tileAll(box);
    }
    updateBordersActor() {
        assert(this.borderActorList !== undefined, 'Layout has no borders');
        assert(this.borderContainer !== undefined, 'Layout has no borders');
        const borderLength = this.mainPortion.concatBorders.length;
        if (this.borderActorList.length < borderLength) {
            for (let i = 0; i <= borderLength - this.borderActorList.length; i++) {
                const actor = new ResizableBorderActor();
                this.borderActorList.push(actor);
                this.borderContainer.add_child(actor);
            }
        }
        else if (this.borderActorList.length > borderLength) {
            this.borderActorList
                .splice(borderLength, this.borderActorList.length - borderLength)
                .forEach((actor) => {
                actor.destroy();
            });
        }
    }
    updateBordersPosition(box) {
        const borderActorList = this.borderActorList;
        assert(borderActorList !== undefined, 'Layout has no borders');
        this.mainPortion.concatBorders.forEach((portionBorder, index) => {
            const actor = borderActorList[index];
            actor.portionBorder = portionBorder;
            const ratio = this.mainPortion.getRatioForPortion(portionBorder.firstPortion);
            const { x, y, width, height } = this.applyBoxRatio(box, ratio);
            if (portionBorder.vertical) {
                actor.x = x + width - BORDER_WIDTH / 2;
                actor.y = y;
                actor.height = height;
                actor.width = BORDER_WIDTH;
            }
            else {
                actor.x = x;
                actor.y = y + height - BORDER_WIDTH / 2;
                actor.height = BORDER_WIDTH;
                actor.width = width;
            }
        });
    }
    alterTileable(tileable) {
        this.addUnFocusEffect(tileable, this.currentFocusEffect, tileable === this.msWorkspace.tileableFocused);
        super.alterTileable(tileable);
    }
    restoreTileable(tileable) {
        this.removeUnFocusEffect(tileable, this.currentFocusEffect);
        super.restoreTileable(tileable);
    }
    onFocusEffectChanged() {
        const oldFocusEffect = this.currentFocusEffect;
        this.currentFocusEffect = Me$t.msThemeManager.focusEffect;
        this.msWorkspace.tileableList.forEach((tileable) => {
            this.removeUnFocusEffect(tileable, oldFocusEffect);
            this.addUnFocusEffect(tileable, this.currentFocusEffect, tileable === this.msWorkspace.tileableFocused);
        });
    }
    onFocusChanged(tileable, oldTileable) {
        this.setUnFocusEffect(tileable, this.currentFocusEffect, true);
        if (oldTileable) {
            if (oldTileable instanceof MsWindow &&
                oldTileable.metaWindow &&
                oldTileable.metaWindow.fullscreen) {
                oldTileable.metaWindow.unmake_fullscreen();
            }
            this.setUnFocusEffect(oldTileable, this.currentFocusEffect, false);
        }
        super.onFocusChanged(tileable, oldTileable);
    }
    addUnFocusEffect(tileable, effect, focused) {
        if (!tileable || tileable.focusEffects)
            return;
        if (effect === FocusEffectEnum.DEFAULT) {
            tileable.focusEffects = {
                dimmer: new Clutter$c.BrightnessContrastEffect({
                    name: 'dimmer',
                    brightness: focused
                        ? Clutter$c.Color.new(127, 127, 127, 255)
                        : Clutter$c.Color.new(100, 100, 100, 255),
                }),
            };
            tileable.add_effect(tileable.focusEffects.dimmer);
        }
        else if (effect === FocusEffectEnum.BORDER) {
            tileable.focusEffects = {
                border: new PrimaryBorderEffect({
                    name: 'border',
                    opacity: focused ? 1.0 : 0.0,
                }),
            };
            tileable.add_effect(tileable.focusEffects.border);
        }
    }
    removeUnFocusEffect(tileable, effect) {
        if (!tileable || !tileable.focusEffects)
            return;
        tileable.remove_all_transitions();
        if (effect === FocusEffectEnum.DEFAULT) {
            assert(tileable.focusEffects.dimmer !== undefined, "Tilable doesn't have the dimmer effect");
            tileable.remove_effect(tileable.focusEffects.dimmer);
        }
        else if (effect === FocusEffectEnum.BORDER) {
            assert(tileable.focusEffects.border !== undefined, "Tilable doesn't have the border effect");
            tileable.remove_effect(tileable.focusEffects.border);
        }
        delete tileable.focusEffects;
    }
    setUnFocusEffect(tileable, effect, focused) {
        if (!tileable)
            return;
        if (effect === FocusEffectEnum.DEFAULT) {
            if (!focused) {
                this.addUnFocusEffect(tileable, effect, !focused);
                if (tileable.get_effect('dimmer')) {
                    tileable.ease_property('@effects.dimmer.brightness', Clutter$c.Color.new(100, 100, 100, 255), {
                        mode: Clutter$c.AnimationMode.EASE_OUT_QUAD,
                        duration: 150,
                    });
                }
            }
            else {
                if (tileable.get_effect('dimmer')) {
                    tileable.ease_property('@effects.dimmer.brightness', Clutter$c.Color.new(127, 127, 127, 255), {
                        duration: 150,
                        mode: Clutter$c.AnimationMode.EASE_OUT_QUAD,
                        onComplete: () => {
                            this.removeUnFocusEffect(tileable, effect);
                        },
                    });
                }
            }
        }
        else if (effect === FocusEffectEnum.BORDER) {
            if (focused) {
                this.addUnFocusEffect(tileable, effect, focused);
            }
            else {
                this.removeUnFocusEffect(tileable, effect);
            }
        }
    }
    onDestroy() {
        if (this.borderContainer) {
            this.borderContainer.destroy();
        }
        super.onDestroy();
    }
};
BaseResizeableTilingLayout = __decorate([
    registerGObjectClass
], BaseResizeableTilingLayout);
let ResizableBorderActor = class ResizableBorderActor extends St$6.Widget {
    _init() {
        super._init({ reactive: true, track_hover: true });
        this.set_background_color(new Clutter$c.Color({ red: 10, green: 10, blue: 10, alpha: 255 }));
        this.connect('event', (actor, event) => {
            const eventType = event.type();
            switch (eventType) {
                case Clutter$c.EventType.BUTTON_PRESS:
                case Clutter$c.EventType.TOUCH_BEGIN: {
                    const border = this.portionBorder;
                    assert(border !== undefined, 'Actor has no border');
                    Me$t.msWindowManager.msResizeManager.startResize(border);
                    break;
                }
                case Clutter$c.EventType.ENTER:
                    global.display.set_cursor(Meta$6.Cursor.MOVE_OR_RESIZE_WINDOW);
                    break;
                case Clutter$c.EventType.LEAVE:
                    global.display.set_cursor(Meta$6.Cursor.DEFAULT);
                    break;
            }
        });
    }
    get vertical() {
        return this.height > this.width;
    }
};
ResizableBorderActor.metaInfo = {
    GTypeName: 'ResizableBorderActor',
    Signals: {
        'drag-start': {},
    },
};
ResizableBorderActor = __decorate([
    registerGObjectClass
], ResizableBorderActor);
let PrimaryBorderEffect = class PrimaryBorderEffect extends Clutter$c.Effect {
    _init(params) {
        super._init(params);
        this._pipeline = null;
        this.color = new Cogl.Color();
    }
    vfunc_paint_node(node, paintContext) {
        const framebuffer = paintContext.get_framebuffer();
        const coglContext = framebuffer.get_context();
        const actor = this.get_actor();
        actor.continue_paint(paintContext);
        if (!this._pipeline) {
            this._pipeline = new Cogl.Pipeline(coglContext);
        }
        this.color.init_from_4ub(parseInt(Me$t.msThemeManager.primary.substring(1, 3), 16), parseInt(Me$t.msThemeManager.primary.substring(3, 5), 16), parseInt(Me$t.msThemeManager.primary.substring(5, 7), 16), this.opacity * 255);
        this.color.premultiply();
        this._pipeline.set_color(this.color);
        const alloc = actor.get_allocation_box();
        const width = 2;
        framebuffer.draw_rectangle(this._pipeline, 0, 0, alloc.get_width(), width);
        framebuffer.draw_rectangle(this._pipeline, alloc.get_width() - width, width, alloc.get_width(), alloc.get_height());
        framebuffer.draw_rectangle(this._pipeline, 0, alloc.get_height(), alloc.get_width() - width, alloc.get_height() - width);
        framebuffer.draw_rectangle(this._pipeline, 0, alloc.get_height() - width, width, width);
    }
};
PrimaryBorderEffect.metaInfo = {
    GTypeName: 'PrimaryBorderEffect',
    Properties: {
        opacity: GObject$1.ParamSpec.float('opacity', 'opacity', 'opacity', GObject$1.ParamFlags.READWRITE, 0, 1, 1),
    },
};
PrimaryBorderEffect = __decorate([
    registerGObjectClass
], PrimaryBorderEffect);

const Clutter$b = imports.gi.Clutter;
const GObject = imports.gi.GObject;
const St$5 = imports.gi.St;
const Gio$5 = imports.gi.Gio;
const Me$s = imports.misc.extensionUtils.getCurrentExtension();
let MatNumberPicker = class MatNumberPicker extends St$5.BoxLayout {
    _init(value, params) {
        super._init({
            y_align: Clutter$b.ActorAlign.CENTER,
        });
        this.value = value;
        this.params = Object.assign({
            step: 1,
            min: 0,
            max: 999999,
        }, params);
        this.minIcon = new St$5.Icon({
            gicon: Gio$5.icon_new_for_string(`${Me$s.path}/assets/icons/minus-symbolic.svg`),
        });
        this.minButton = new St$5.Button({
            child: this.minIcon,
        });
        this.minButton.connect('clicked', () => {
            this.decrement();
        });
        this.plusIcon = new St$5.Icon({
            gicon: Gio$5.icon_new_for_string(`${Me$s.path}/assets/icons/plus-symbolic.svg`),
        });
        this.plusButton = new St$5.Button({
            child: this.plusIcon,
        });
        this.plusButton.connect('clicked', () => {
            this.increment();
        });
        this.valueLabel = new St$5.Label({
            text: this.value.toString(),
            y_align: Clutter$b.ActorAlign.CENTER,
        });
        this.add_child(this.minButton);
        this.add_child(this.valueLabel);
        this.add_child(this.plusButton);
    }
    decrement() {
        this.value = Math.max(this.params.min, this.value - this.params.step);
        this.updateValue();
    }
    increment() {
        this.value = Math.min(this.params.max, this.value + this.params.step);
        this.updateValue();
    }
    updateValue() {
        this.valueLabel.text = this.value.toString();
        this.emit('changed', this.value);
    }
};
MatNumberPicker.metaInfo = {
    GTypeName: 'MatNumberPicker',
    Signals: {
        changed: {
            param_types: [GObject.TYPE_INT],
        },
    },
};
MatNumberPicker = __decorate([
    registerGObjectClass
], MatNumberPicker);

const Me$r = imports.misc.extensionUtils.getCurrentExtension();
let SplitLayout = class SplitLayout extends BaseResizeableTilingLayout {
    _init(msWorkspace, state) {
        super._init(msWorkspace, state);
        this.baseIndex = 0;
        this.activeTileableList = [];
        this.updateActiveTileableListFromFocused();
        this.vertical = this.monitor.width < this.monitor.height;
        this.translationAnimator = new TranslationAnimator();
        this.translationAnimator.connect('transition-completed', () => {
            this.endTransition();
        });
        if (this.mainPortion.vertical !== this.vertical) {
            this.mainPortion.convert();
        }
    }
    afterInit() {
        super.afterInit();
        this.refreshVisibleActors();
    }
    get tileableListVisible() {
        return this.msWorkspace.tileableList.filter((tileable) => tileable.visible);
    }
    updateActiveTileableListFromFocused() {
        this.baseIndex = Math.max(0, Math.min(this.msWorkspace.focusedIndex, this.msWorkspace.tileableList.length -
            this._state.nbOfColumns -
            1));
        this.activeTileableList = this.msWorkspace.tileableList.slice(this.baseIndex, this.baseIndex + this._state.nbOfColumns);
    }
    onTileableListChanged(newWindows, oldWindows) {
        super.onTileableListChanged(newWindows, oldWindows);
        this.updateActiveTileableListFromFocused();
        this.refreshVisibleActors();
    }
    refreshVisibleActors() {
        this.msWorkspace.tileableList.forEach((tileable) => {
            const willBeDisplay = this.activeTileableList.includes(tileable);
            if (willBeDisplay &&
                tileable.get_parent() !== this.tileableContainer) {
                reparentActor(tileable, this.tileableContainer);
            }
            else if (!willBeDisplay && tileable.get_parent()) {
                this.tileableContainer.remove_child(tileable);
            }
        });
        this.msWorkspace.refreshFocus();
    }
    onFocusChanged(tileableFocused, oldTileableFocused) {
        if (this.activeTileableList.includes(tileableFocused)) {
            this.activeTileableList.forEach((tileable) => {
                this.setUnFocusEffect(tileable, this.currentFocusEffect, tileable === tileableFocused);
            });
            return;
        }
        const newIndex = this.msWorkspace.tileableList.indexOf(tileableFocused);
        const oldIndex = this.msWorkspace.tileableList.indexOf(oldTileableFocused);
        const oldTileableList = this.activeTileableList;
        if (oldIndex < newIndex) {
            this.activeTileableList = this.msWorkspace.tileableList.slice(newIndex - this._state.nbOfColumns + 1, newIndex + 1);
        }
        else {
            this.activeTileableList = this.msWorkspace.tileableList.slice(newIndex, newIndex + this._state.nbOfColumns);
        }
        this.baseIndex = this.msWorkspace.tileableList.indexOf(this.activeTileableList[0]);
        this.startTransition(oldTileableList, this.activeTileableList);
        [...oldTileableList, ...this.activeTileableList].forEach((tileable) => {
            this.setUnFocusEffect(tileable, this.currentFocusEffect, tileable === tileableFocused);
        });
    }
    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.visible = true;
    }
    hideAppLauncher() {
    }
    alterTileable(tileable) {
        super.alterTileable(tileable);
        tileable.visible = true;
        if (tileable.get_parent()) {
            this.tileableContainer.remove_child(tileable);
        }
    }
    restoreTileable(tileable) {
        super.restoreTileable(tileable);
        if (!tileable.get_parent()) {
            this.tileableContainer.add_child(tileable);
        }
    }
    updateMainPortionLength(length) {
        super.updateMainPortionLength(length > this._state.nbOfColumns ? this._state.nbOfColumns : length);
    }
    getTileableIndex(tileable) {
        if (this.activeTileableList.includes(tileable)) {
            return this.activeTileableList.indexOf(tileable);
        }
        return -1;
    }
    startTransition(previousTileableList, nextTileableList) {
        if (!this.translationAnimator.get_parent()) {
            this.translationAnimator.width = this.tileableContainer.allocation.get_width();
            this.translationAnimator.height = this.tileableContainer.allocation.get_height();
            this.tileableContainer.add_child(this.translationAnimator);
        }
        const direction = nextTileableList.includes(previousTileableList[0])
            ? -1
            : 1;
        [...previousTileableList, ...nextTileableList].forEach((actor) => {
            const parent = actor.get_parent();
            if (parent && parent === this.tileableContainer) {
                parent.remove_child(actor);
            }
            if (this.vertical) {
                actor.set_width(this.tileableContainer.allocation.get_width());
                actor.set_height(this.tileableContainer.allocation.get_height() /
                    this._state.nbOfColumns);
            }
            else {
                actor.set_width(this.tileableContainer.allocation.get_width() /
                    this._state.nbOfColumns);
                actor.set_height(this.tileableContainer.allocation.get_height());
            }
        });
        if (this.borderContainer) {
            this.borderContainer.hide();
        }
        this.translationAnimator.setTranslation(previousTileableList, nextTileableList, direction);
    }
    endTransition() {
        if (this.borderContainer) {
            this.borderContainer.show();
        }
        this.refreshVisibleActors();
        this.tileableContainer.remove_child(this.translationAnimator);
    }
    buildQuickWidget() {
        const widget = new MatNumberPicker(this._state.nbOfColumns, {
            min: 2,
        });
        widget.connect('changed', (_, newValue) => {
            this._state.nbOfColumns = newValue;
            this.updateActiveTileableListFromFocused();
            this.refreshVisibleActors();
            this.tileAll();
        });
        return widget;
    }
};
SplitLayout.state = { key: 'split', nbOfColumns: 2 };
SplitLayout.label = 'Split';
SplitLayout = __decorate([
    registerGObjectClass
], SplitLayout);

const Me$q = imports.misc.extensionUtils.getCurrentExtension();
const GLib$c = imports.gi.GLib;
let FloatLayout = class FloatLayout extends BaseTilingLayout {
    _init(msWorkspace, state) {
        super._init(msWorkspace, state);
        global.display.connect('restacked', this.windowsRestacked.bind(this));
        this.windowsRestacked();
    }
    alterTileable(tileable) {
        if (tileable.metaWindow) {
            GLib$c.idle_add(GLib$c.PRIORITY_DEFAULT, () => {
                updateTitleBarVisibility(tileable.metaWindow);
                tileable.mimicMetaWindowPositionAndSize();
                tileable.msContent.clip_to_allocation = false;
                return GLib$c.SOURCE_REMOVE;
            });
        }
        if (tileable === this.tileableFocused) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(tileable, null);
        }
        super.alterTileable(tileable);
    }
    restoreTileable(tileable) {
        if (tileable.metaWindow) {
            tileable.msContent.clip_to_allocation = true;
            GLib$c.idle_add(GLib$c.PRIORITY_DEFAULT, () => {
                updateTitleBarVisibility(tileable.metaWindow);
                return GLib$c.SOURCE_REMOVE;
            });
        }
    }
    showAppLauncher() {
        const actor = this.msWorkspace.appLauncher;
        actor.x = 0;
        actor.y = 0;
        actor.width = this.tileableContainer.allocation.get_width();
        actor.height = this.tileableContainer.allocation.get_height();
        super.showAppLauncher();
    }
    onFocusChanged(tileableFocused, oldTileable) {
        if (tileableFocused != this.msWorkspace.appLauncher &&
            this.msWorkspace.appLauncher.visible) {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_below_sibling(tileableFocused, this.msWorkspace.appLauncher);
        }
        else {
            this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(tileableFocused, null);
        }
        super.onFocusChanged(tileableFocused, oldTileable);
    }
    tileAll() {
        this.msWorkspace.tileableList.forEach((tileable) => {
            if (tileable.dragged)
                return;
            if (tileable === this.msWorkspace.appLauncher) {
                tileable.x = 0;
                tileable.y = 0;
                tileable.width = this.tileableContainer.allocation.get_width();
                tileable.height = this.tileableContainer.allocation.get_height();
            }
            if (tileable instanceof MsWindow) {
                tileable.mimicMetaWindowPositionAndSize();
            }
        });
    }
    windowsRestacked() {
        global.window_group.get_children().forEach((actor) => {
            const metaWindow = actor.metaWindow;
            if (metaWindow && metaWindow.msWindow) {
                if (this.msWorkspace.tileableList.includes(metaWindow.msWindow)) {
                    this.msWorkspace.msWorkspaceActor.tileableContainer.set_child_above_sibling(metaWindow.msWindow, null);
                }
            }
        });
    }
};
FloatLayout.state = { key: 'float' };
FloatLayout.label = 'Float';
FloatLayout = __decorate([
    registerGObjectClass
], FloatLayout);

const Me$p = imports.misc.extensionUtils.getCurrentExtension();
let HalfLayout = class HalfLayout extends BaseResizeableTilingLayout {
    updateMainPortionLength(length) {
        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }
        while (this.mainPortion.portionLength < length) {
            if (this.mainPortion.children.length === 0) {
                this.mainPortion.push();
            }
            else {
                this.mainPortion.children[1].push();
            }
        }
    }
    isVerticalLayout(box) {
        return box.get_width() < box.get_height();
    }
    tileAll(box) {
        box = this.resolveBox(box);
        const vertical = this.isVerticalLayout(box);
        if (this.mainPortion.vertical !== vertical) {
            this.mainPortion.convert();
        }
        super.tileAll(box);
    }
};
HalfLayout.state = { key: 'half' };
HalfLayout.label = 'Half';
HalfLayout = __decorate([
    registerGObjectClass
], HalfLayout);

const Me$o = imports.misc.extensionUtils.getCurrentExtension();
let HalfHorizontalLayout = class HalfHorizontalLayout extends HalfLayout {
    isVerticalLayout() {
        return false;
    }
};
HalfHorizontalLayout.state = { key: 'half-horizontal' };
HalfHorizontalLayout.label = 'Half horizontal';
HalfHorizontalLayout = __decorate([
    registerGObjectClass
], HalfHorizontalLayout);

const Me$n = imports.misc.extensionUtils.getCurrentExtension();
let HalfVerticalLayout = class HalfVerticalLayout extends HalfLayout {
    isVerticalLayout() {
        return true;
    }
};
HalfVerticalLayout.state = { key: 'half-vertical' };
HalfVerticalLayout.label = 'Half vertical';
HalfVerticalLayout = __decorate([
    registerGObjectClass
], HalfVerticalLayout);

const Me$m = imports.misc.extensionUtils.getCurrentExtension();
const Clutter$a = imports.gi.Clutter;
let SimpleLayout = class SimpleLayout extends BaseResizeableTilingLayout {
    isVerticalLayout(box) {
        return box.get_width() < box.get_height();
    }
    tileAll(box) {
        if (!box) {
            box = new Clutter$a.ActorBox();
            box.x2 = this.tileableContainer.allocation.get_width();
            box.y2 = this.tileableContainer.allocation.get_height();
        }
        const vertical = this.isVerticalLayout(box);
        if (this.mainPortion.vertical !== vertical) {
            this.mainPortion.convert();
        }
        super.tileAll(box);
    }
};
SimpleLayout.state = { key: 'simple' };
SimpleLayout.label = 'Simple';
SimpleLayout = __decorate([
    registerGObjectClass
], SimpleLayout);

const Me$l = imports.misc.extensionUtils.getCurrentExtension();
let SimpleHorizontalLayout = class SimpleHorizontalLayout extends SimpleLayout {
    isVerticalLayout() {
        return false;
    }
};
SimpleHorizontalLayout = __decorate([
    registerGObjectClass
], SimpleHorizontalLayout);
SimpleHorizontalLayout.state = { key: 'simple-horizontal' };
SimpleHorizontalLayout.label = 'Simple horizontal';

const Me$k = imports.misc.extensionUtils.getCurrentExtension();
let SimpleVerticalLayout = class SimpleVerticalLayout extends SimpleLayout {
    isVerticalLayout() {
        return true;
    }
};
SimpleVerticalLayout = __decorate([
    registerGObjectClass
], SimpleVerticalLayout);
SimpleVerticalLayout.state = { key: 'simple-vertical' };
SimpleVerticalLayout.label = 'Simple vertical';

const Me$j = imports.misc.extensionUtils.getCurrentExtension();
let RatioLayout = class RatioLayout extends BaseResizeableTilingLayout {
    updateMainPortionLength(length) {
        const pushInPortion = (portion) => {
            if (portion.children.length === 2) {
                pushInPortion(portion.children[1]);
            }
            else {
                portion.push();
            }
        };
        while (this.mainPortion.portionLength > length) {
            this.mainPortion.pop();
        }
        while (length > 1 && this.mainPortion.portionLength < length) {
            pushInPortion(this.mainPortion);
        }
    }
};
RatioLayout.state = { key: 'ratio' };
RatioLayout.label = 'Ratio';
RatioLayout = __decorate([
    registerGObjectClass
], RatioLayout);

const Me$i = imports.misc.extensionUtils.getCurrentExtension();
let GridLayout = class GridLayout extends BaseResizeableTilingLayout {
    updateMainPortionLength(length) {
        const columnLength = Math.ceil(Math.sqrt(length));
        const rowLength = Math.ceil(length / columnLength);
        while (this.mainPortion.children.length > columnLength) {
            this.mainPortion.pop();
        }
        while (columnLength > 1 &&
            this.mainPortion.children.length < columnLength) {
            this.mainPortion.push();
        }
        for (let i = 0; i < columnLength - 1; i++) {
            const column = this.mainPortion.children[i];
            while (column.children.length > rowLength) {
                column.pop();
            }
            while (rowLength > 1 && column.children.length < rowLength) {
                column.push();
            }
        }
        const lastColumn = this.mainPortion.children[columnLength - 1];
        if (lastColumn) {
            const lastRowLength = length - (columnLength - 1) * rowLength;
            while (lastColumn.children.length > lastRowLength) {
                lastColumn.pop();
            }
            while (lastRowLength > 1 &&
                lastColumn.children.length < lastRowLength) {
                lastColumn.push();
            }
        }
    }
};
GridLayout.state = { key: 'grid' };
GridLayout.label = 'Grid';
GridLayout = __decorate([
    registerGObjectClass
], GridLayout);

const Main$b = imports.ui.main;
const GLib$b = imports.gi.GLib;
const Me$h = imports.misc.extensionUtils.getCurrentExtension();
const layouts = [
    MaximizeLayout,
    SplitLayout,
    GridLayout,
    HalfLayout,
    HalfHorizontalLayout,
    HalfVerticalLayout,
    RatioLayout,
    SimpleLayout,
    SimpleHorizontalLayout,
    SimpleVerticalLayout,
    FloatLayout,
];
const TilingLayoutByKey = layouts.reduce((layoutsByKey, layout) => {
    layoutsByKey[layout.state.key] = layout;
    return layoutsByKey;
}, {});
class LayoutManager extends MsManager {
    constructor() {
        super();
        this.workspaceManager = global.workspace_manager;
        this.layoutList = layouts;
        this.layoutsSettings = getSettings('layouts');
        this.observe(this.layoutsSettings, 'changed::gap', (schema) => {
            this.gap = schema.get_int('gap');
            this.emit('gap-changed');
            this.tileWindows();
        });
        this.observe(this.layoutsSettings, 'changed::use-screen-gap', (schema) => {
            this.useScreenGap = schema.get_boolean('use-screen-gap');
            this.emit('gap-changed');
            this.tileWindows();
        });
        this.observe(this.layoutsSettings, 'changed::screen-gap', (schema) => {
            this.screenGap = schema.get_int('screen-gap');
            this.emit('gap-changed');
            this.tileWindows();
        });
        this.observe(this.layoutsSettings, 'changed::tween-time', (schema) => {
            this.tweenTime = schema.get_double('tween-time');
        });
        this.observe(this.layoutsSettings, 'changed::ratio-value', (schema) => {
            this.ratio = schema.get_double('ratio-value');
            this.tileWindows();
        });
        this.ratio = this.layoutsSettings.get_double('ratio-value');
        this.gap = this.layoutsSettings.get_int('gap');
        this.useScreenGap = this.layoutsSettings.get_boolean('use-screen-gap');
        this.screenGap = this.layoutsSettings.get_int('screen-gap');
        this.tweenTime = this.layoutsSettings.get_double('tween-time');
    }
    get someGap() {
        return this.gap != 0 || (this.useScreenGap && this.screenGap != 0);
    }
    get defaultLayoutKeyList() {
        return layouts
            .map((layout) => layout.state.key)
            .filter((layoutKey) => this.layoutsSettings.get_boolean(layoutKey));
    }
    get defaultLayoutKey() {
        return this.layoutsSettings.get_string('default-layout');
    }
    getLayoutListFromKeys(layoutKeys) {
        return layoutKeys.map((layoutKey) => {
            return TilingLayoutByKey[layoutKey];
        });
    }
    getLayoutByKey(key) {
        return TilingLayoutByKey[key];
    }
    tileWindows() {
        if (this.tilingInProgress)
            return;
        this.tilingInProgress = true;
        GLib$b.idle_add(GLib$b.PRIORITY_DEFAULT, () => {
            for (const monitor of Main$b.layoutManager.monitors) {
                let msWorkspace;
                if (monitor.index === Main$b.layoutManager.primaryIndex) {
                    msWorkspace = Me$h.msWorkspaceManager.getActivePrimaryMsWorkspace();
                }
                else {
                    msWorkspace = Me$h.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(monitor.index)[0];
                }
                const layout = msWorkspace.layout;
                layout.tileAll();
            }
            this.tilingInProgress = false;
            return GLib$b.SOURCE_REMOVE;
        });
    }
}

const Clutter$9 = imports.gi.Clutter;
const Gio$4 = imports.gi.Gio;
const Soup = imports.gi.Soup;
const { messageTray } = imports.ui;
const Main$a = imports.ui.main;
const Dialog = imports.ui.dialog;
const ModalDialog = imports.ui.modalDialog;
const Me$g = imports.misc.extensionUtils.getCurrentExtension();
const API_SERVER = 'http://api.material-shell.com';
class MsNotificationManager extends MsManager {
    constructor() {
        super();
        this.httpSession = new Soup.Session({ ssl_use_system_ca_file: true });
    }
    check() {
        if (getSettings('tweaks').get_boolean('disable-notifications'))
            return;
        const previousCheck = Me$g.stateManager.getState('notification-check')
            ? new Date(Me$g.stateManager.getState('notification-check'))
            : new Date();
        const message = new Soup.Message({
            method: 'GET',
            uri: new Soup.URI(`${API_SERVER}/notifications?lastCheck=${previousCheck.toISOString()}`),
        });
        this.httpSession.queue_message(message, () => {
            if (message.status_code != Soup.KnownStatusCode.OK) {
                global.log(`error fetching notification ${message.status_code.toString()}`);
                return;
            }
            let notifications = [];
            try {
                notifications = JSON.parse(message.response_body.data);
            }
            catch (e) {
                global.log(`error unpack notification error ${e.toString()}`);
                return;
            }
            const source = new MsNotificationSource();
            notifications.forEach((notificationData) => {
                Main$a.messageTray.add(source);
                const notification = new MsNotification(source, notificationData.title, notificationData.content, notificationData.icon, notificationData.action);
                source.showNotification(notification);
            });
        });
        Me$g.stateManager.setState('notification-check', new Date().toISOString());
    }
}
let MsNotificationSource;
let MsNotification;
if (ShellVersionMatch('3.34')) {
    MsNotificationSource = class MsNotificationSource extends messageTray.Source {
        constructor() {
            super('Material Shell');
        }
        getIcon() {
            return Gio$4.icon_new_for_string(`${Me$g.path}/assets/icons/on-dark-small.svg`);
        }
    };
    MsNotification = class MsNotification extends messageTray.Notification {
        constructor(source, title, text, icon, action) {
            const params = {};
            if (icon) {
                params.gicon = Gio$4.icon_new_for_string(`${Me$g.path}/assets/icons/${icon}.svg`);
            }
            super(source, title, text, params);
            this.action = action;
            this.bannerBodyMarkup = true;
        }
        activate() {
            super.activate();
            const dialog = new MsNotificationDialog(this.title, this.bannerBodyText, this.action);
            dialog.open(global.get_current_time());
        }
    };
}
else {
    let MsNotificationSourceClass = class MsNotificationSourceClass extends messageTray.Source {
        _init() {
            super._init('Material Shell');
        }
        getIcon() {
            return Gio$4.icon_new_for_string(`${Me$g.path}/assets/icons/on-dark-small.svg`);
        }
    };
    MsNotificationSourceClass = __decorate([
        registerGObjectClass
    ], MsNotificationSourceClass);
    MsNotificationSource = MsNotificationSourceClass;
    let MsNotificationClass = class MsNotificationClass extends messageTray.Notification {
        _init(source, title, text, icon, action) {
            const params = {};
            if (icon) {
                params.gicon = Gio$4.icon_new_for_string(`${Me$g.path}/assets/icons/${icon}.svg`);
            }
            super._init(source, title, text, params);
            this.action = action;
            this.bannerBodyMarkup = true;
        }
        activate() {
            super.activate();
            const dialog = new MsNotificationDialog(this.title, this.bannerBodyText, this.action);
            dialog.open(global.get_current_time());
        }
    };
    MsNotificationClass = __decorate([
        registerGObjectClass
    ], MsNotificationClass);
    MsNotification = MsNotificationClass;
}
let MsNotificationDialog = class MsNotificationDialog extends ModalDialog.ModalDialog {
    _init(title, text, action) {
        super._init({ styleClass: '' });
        const actions = [
            {
                label: _('Cancel'),
                action: this._onCancelButtonPressed.bind(this),
                key: Clutter$9.KEY_Escape,
            },
        ];
        if (action) {
            actions.push({
                default: true,
                label: action.label,
                action: () => {
                    Gio$4.AppInfo.launch_default_for_uri(action.url, global.create_app_launch_context(0, -1));
                    this.close();
                },
            });
        }
        this.setButtons(actions);
        const content = new Dialog.MessageDialogContent({
            title: title,
            description: text,
        });
        content._description.get_clutter_text().use_markup = true;
        this.contentLayout.add(content);
    }
    _onCancelButtonPressed() {
        this.close();
    }
};
MsNotificationDialog = __decorate([
    registerGObjectClass
], MsNotificationDialog);

const Shell$4 = imports.gi.Shell;
class AppsManager {
    static getApps() {
        const usage = Shell$4.AppUsage.get_default();
        const appSystem = Shell$4.AppSystem.get_default();
        const appsInstalled = appSystem.get_installed().filter((appInfo) => {
            try {
                const _ = appInfo.get_id();
            }
            catch (e) {
                return false;
            }
            return appInfo.should_show();
        });
        return appsInstalled
            .sort((a, b) => {
            return usage.compare(a.get_id(), b.get_id());
        })
            .map((appInfo) => {
            return appSystem.lookup_app(appInfo.get_id());
        });
    }
}

const Clutter$8 = imports.gi.Clutter;
const GnomeDesktop$1 = imports.gi.GnomeDesktop;
const Shell$3 = imports.gi.Shell;
const St$4 = imports.gi.St;
const Main$9 = imports.ui.main;
const Me$f = imports.misc.extensionUtils.getCurrentExtension();
const BUTTON_SIZE = 124;
let MsApplicationLauncher = class MsApplicationLauncher extends St$4.Widget {
    _init(msWorkspace) {
        super._init({
            reactive: true,
            style: 'padding:64px',
        });
        this.msWorkspace = msWorkspace;
        this.add_style_class_name('surface-darker');
        this.appListContainer = new MsApplicationButtonContainer(this.msWorkspace);
        this.initAppListContainer();
        this.launcherChangedSignal = SignalHandle.connect(Me$f.msThemeManager, 'clock-app-launcher-changed', () => {
            this.restartAppListContainer();
        });
        this.installedChangedSignal = SignalHandle.connect(Shell$3.AppSystem.get_default(), 'installed-changed', () => {
            this.restartAppListContainer();
        });
        this.connect('key-focus-in', () => {
            this.appListContainer.inputContainer.grab_key_focus();
        });
        this.connect('parent-set', () => {
            if (this.msWorkspace.tileableFocused === this) {
                this.grab_key_focus();
            }
        });
        this.connect('key-focus-out', () => {
        });
    }
    onDestroy() {
        this.launcherChangedSignal.disconnect();
        this.installedChangedSignal.disconnect();
    }
    get dragged() {
        return false;
    }
    restartAppListContainer() {
        this.appListContainer.destroy();
        this.appListContainer = new MsApplicationButtonContainer(this.msWorkspace);
        this.initAppListContainer();
    }
    initAppListContainer() {
        this.add_child(this.appListContainer);
        AppsManager.getApps().forEach((app) => {
            const button = new MsApplicationButton({
                app,
                buttonSize: this.appListContainer.buttonSize,
            });
            button.connect('notify::hover', () => {
                this.appListContainer.highlightButton(button);
            });
            button.connect('clicked', () => {
                const msWindow = Me$f.msWindowManager.createNewMsWindow(app.id, null, null, {
                    msWorkspace: this.msWorkspace,
                    focus: true,
                    insert: false,
                });
                Me$f.msWindowManager.openAppForMsWindow(msWindow);
                this.appListContainer.reset();
            });
            this.appListContainer.addAppButton(button);
        });
        this.appListContainer.initFilteredAppButtonList();
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        const containerBox = new Clutter$8.ActorBox();
        const minSize = Math.min(contentBox.get_width(), contentBox.get_height());
        const workArea = Main$9.layoutManager.getWorkAreaForMonitor(this.msWorkspace.monitor.index);
        const containerWidth = Math.min(contentBox.get_width() * 0.8, workArea.width / 2);
        containerBox.x1 = Math.round(contentBox.x1 + (contentBox.get_width() - containerWidth) / 2);
        containerBox.x2 = Math.round(contentBox.x2 - (contentBox.get_width() - containerWidth) / 2);
        containerBox.y1 = Math.round(contentBox.y1 + 0.1 * minSize);
        containerBox.y2 = Math.round(contentBox.y2 - 0.1 * minSize);
        containerBox.x2 =
            containerBox.get_width() % 2 != 0
                ? containerBox.x2 + 1
                : containerBox.x2;
        containerBox.y2 =
            containerBox.get_height() % 2 != 0
                ? containerBox.y2 + 1
                : containerBox.y2;
        Allocate(this.appListContainer, containerBox, flags);
    }
};
MsApplicationLauncher.metaInfo = {
    GTypeName: 'MsApplicationLauncher',
    CssName: 'MsApplicationLauncher',
};
MsApplicationLauncher = __decorate([
    registerGObjectClass
], MsApplicationLauncher);
let MsApplicationButtonContainer = class MsApplicationButtonContainer extends St$4.Widget {
    _init(msWorkspace) {
        super._init({});
        this.msWorkspace = msWorkspace;
        this.appButtonList = [];
        this.filteredAppButtonList = [];
        this.filteredAppButtonListBuffer = [];
        this.currentButtonFocused = null;
        this.startIndex = 0;
        this.numberOfRow = 1;
        this.numberOfColumn = 1;
        this.maxIndex = 1;
        if (Me$f.msThemeManager.clockAppLauncher) {
            this.clockLabel = new St$4.Label({
                style_class: 'headline-6 text-medium-emphasis margin-right-x2',
                y_align: Clutter$8.ActorAlign.CENTER,
            });
            this.dateLabel = new St$4.Label({
                style_class: 'headline-6 text-medium-emphasis',
                y_align: Clutter$8.ActorAlign.CENTER,
            });
            this.clockBin = new St$4.BoxLayout({
                x_align: Clutter$8.ActorAlign.CENTER,
            });
            this.clockBin.add_child(this.clockLabel);
            this.clockBin.add_child(this.dateLabel);
            this._wallClock = new GnomeDesktop$1.WallClock({
                time_only: true,
            });
            const updateClock = () => {
                if (this.clockLabel.mapped) {
                    this.clockLabel.text = this._wallClock.clock;
                    const date = new Date();
                    const dateFormat = Shell$3.util_translate_time_string(N_('%A %B %-d'));
                    this.dateLabel.text = date.toLocaleFormat(dateFormat);
                }
            };
            this.signalClock = this._wallClock.connect('notify::clock', updateClock);
            this.clockLabel.connect('notify::mapped', () => {
                if (this.clockLabel.mapped) {
                    updateClock();
                    this.clockLabel.queue_relayout();
                }
            });
            this.clockLabel.connect('destroy', () => {
                this._wallClock.disconnect(this.signalClock);
                delete this._wallClock;
            });
            this.add_child(this.clockBin);
        }
        this.inputLayout = new St$4.BoxLayout({});
        this.searchIcon = new St$4.Icon({
            style_class: 'search-entry-icon',
            icon_name: 'edit-find-symbolic',
        });
        this.inputContainer = new St$4.Entry({
            style_class: 'search-entry',
            hint_text: _('Type to search…'),
            track_hover: true,
            can_focus: true,
        });
        this.inputContainer.set_primary_icon(this.searchIcon);
        this._text = this.inputContainer.clutter_text;
        this._text.connect('text-changed', () => {
            this.updateFilteredAppButtonList();
            this.highlightInitialButton();
        });
        this._text.connect('key-press-event', (entry, event) => {
            const symbol = event.get_key_symbol();
            if (ShellVersionMatch('3.34')) {
                switch (symbol) {
                    case Clutter$8.KEY_Escape:
                        this.reset();
                        this.removeHighlightButton();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_Tab:
                        this.highlightNextButton();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_ISO_Left_Tab:
                        this.highlightPreviousButton();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_Down:
                        this.highlightButtonBelow();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_Up:
                        this.highlightButtonAbove();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_Right:
                        if (this._text.cursor_position === -1) {
                            this.highlightNextButton();
                            return Clutter$8.EVENT_STOP;
                        }
                        else {
                            return Clutter$8.EVENT_PROPAGATE;
                        }
                    case Clutter$8.KEY_Left:
                        if (this.filteredAppButtonList.length > 0 &&
                            this.currentButtonFocused !=
                                this.filteredAppButtonList[0]) {
                            this.highlightPreviousButton();
                            return Clutter$8.EVENT_STOP;
                        }
                        else {
                            return Clutter$8.EVENT_PROPAGATE;
                        }
                    case Clutter$8.KEY_Return:
                    case Clutter$8.KEY_KP_Enter:
                        if (this.currentButtonFocused)
                            this.currentButtonFocused.emit('clicked', 0);
                        return Clutter$8.EVENT_STOP;
                }
            }
            else {
                switch (symbol) {
                    case Clutter$8.KEY_Escape:
                        this.reset();
                        this.removeHighlightButton();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_Tab:
                        this.highlightNextButton();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_ISO_Left_Tab:
                        this.highlightPreviousButton();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_Down:
                        this.highlightButtonBelow();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_Up:
                        this.highlightButtonAbove();
                        return Clutter$8.EVENT_STOP;
                    case Clutter$8.KEY_Right:
                        if (this._text.cursor_position === -1) {
                            this.highlightNextButton();
                            return Clutter$8.EVENT_STOP;
                        }
                        else {
                            return Clutter$8.EVENT_PROPAGATE;
                        }
                    case Clutter$8.KEY_Left:
                        if (this.currentButtonFocused !=
                            this.filteredAppButtonListBuffer[0] &&
                            this.getCurrentIndex() > -1) {
                            this.highlightPreviousButton();
                            return Clutter$8.EVENT_STOP;
                        }
                        else {
                            return Clutter$8.EVENT_PROPAGATE;
                        }
                    case Clutter$8.KEY_Return:
                    case Clutter$8.KEY_KP_Enter:
                        if (this.currentButtonFocused)
                            this.currentButtonFocused.emit('clicked', 0);
                        return Clutter$8.EVENT_STOP;
                }
            }
            return Clutter$8.EVENT_PROPAGATE;
        });
        this.add_child(this.inputContainer);
        this.container = new St$4.Widget();
        this.container.add_style_class_name('surface');
        this.container.set_style('border-radius:16px;');
        this.add_child(this.container);
    }
    get monitorScale() {
        return global.display.get_monitor_scale(this.msWorkspace.monitor.index);
    }
    get buttonSize() {
        return BUTTON_SIZE * this.monitorScale;
    }
    reset() {
        if (this.inputContainer.get_text() === '' &&
            this.currentButtonFocused === null) {
            this.msWorkspace.focusPrecedentTileable();
            return;
        }
        if (this.inputContainer.get_text().length) {
            this.inputContainer.set_text('');
            this._text.cursor_position = -1;
            return;
        }
        this.updateFilteredAppButtonList();
    }
    initFilteredAppButtonList() {
        this.filteredAppButtonList = this.appButtonList;
        this.filteredAppButtonListBuffer = this.appButtonList;
        this.startIndex = 0;
    }
    updateFilteredAppButtonList() {
        this.filteredAppButtonListBuffer = this.appButtonList.filter((button) => {
            const stringToSearch = `${button.app.get_name()}${button.app.get_id()}${button.app.get_description()}`;
            const regex = new RegExp(this.inputContainer.get_text(), 'i');
            if (regex.test(stringToSearch)) {
                button.visible = true;
                return true;
            }
            else {
                button.visible = false;
                return false;
            }
        });
        this.filteredAppButtonList = [];
        const maxButtons = this.numberOfColumn * this.numberOfRow;
        let index = 0;
        while (index < maxButtons &&
            index < this.filteredAppButtonListBuffer.length) {
            this.filteredAppButtonList.push(this.filteredAppButtonListBuffer[index]);
            index++;
        }
        this.startIndex = 0;
    }
    scrollFilteredAppButtonListUp() {
        const maxButtons = this.numberOfColumn * this.numberOfRow;
        if (this.startIndex + maxButtons >
            this.filteredAppButtonListBuffer.length - 1) {
            return false;
        }
        const maxColumns = this.numberOfColumn;
        let index = 0;
        let showIndex;
        this.startIndex += maxColumns;
        while (index < this.startIndex) {
            if (this.filteredAppButtonListBuffer &&
                this.filteredAppButtonListBuffer[index]) {
                this.filteredAppButtonListBuffer[index].visible = false;
            }
            index++;
        }
        this.filteredAppButtonList = [];
        index = 0;
        while (index < maxButtons &&
            index < this.filteredAppButtonListBuffer.length) {
            showIndex = this.startIndex + index;
            if (this.filteredAppButtonListBuffer &&
                this.filteredAppButtonListBuffer[showIndex]) {
                this.filteredAppButtonListBuffer[showIndex].visible = true;
                this.filteredAppButtonList.push(this.filteredAppButtonListBuffer[showIndex]);
            }
            index++;
        }
        return true;
    }
    scrollFilteredAppButtonListDown() {
        const maxColumns = this.numberOfColumn;
        if (this.startIndex - maxColumns < 0) {
            return false;
        }
        let index = 0;
        let showIndex;
        const maxButtons = this.numberOfColumn * this.numberOfRow;
        this.startIndex -= maxColumns;
        this.filteredAppButtonList = [];
        while (index < maxButtons &&
            index < this.filteredAppButtonListBuffer.length) {
            showIndex = this.startIndex + index;
            if (this.filteredAppButtonListBuffer &&
                this.filteredAppButtonListBuffer[showIndex]) {
                this.filteredAppButtonListBuffer[showIndex].visible = true;
                this.filteredAppButtonList.push(this.filteredAppButtonListBuffer[showIndex]);
            }
            index++;
        }
        return true;
    }
    getCurrentIndex() {
        const index = this.currentButtonFocused
            ? this.filteredAppButtonList.indexOf(this.currentButtonFocused)
            : -1;
        if (index < 0 || index > this.maxIndex) {
            this.highlightInitialButton();
        }
        return index;
    }
    highlightNextButton() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex < 0) {
            return;
        }
        else if (currentIndex == this.maxIndex) {
            if (this.scrollFilteredAppButtonListUp()) {
                currentIndex -= this.numberOfColumn;
            }
            else {
                return;
            }
        }
        if (currentIndex < this.filteredAppButtonList.length - 1) {
            this.highlightButton(this.filteredAppButtonList[currentIndex + 1]);
        }
    }
    highlightPreviousButton() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex > 0) {
            this.highlightButton(this.filteredAppButtonList[currentIndex - 1]);
        }
        else if (currentIndex === 0) {
            if (this.scrollFilteredAppButtonListDown()) {
                currentIndex += this.numberOfColumn - 1;
                this.highlightButton(this.filteredAppButtonList[currentIndex]);
            }
        }
    }
    highlightButtonAbove() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex < this.numberOfColumn) {
            if (this.scrollFilteredAppButtonListDown()) {
                currentIndex += this.numberOfColumn;
            }
        }
        const nextButton = this.filteredAppButtonList[currentIndex - this.numberOfColumn];
        if (nextButton) {
            this.highlightButton(nextButton);
        }
    }
    highlightButtonBelow() {
        let currentIndex = this.getCurrentIndex();
        if (currentIndex < 0) {
            return;
        }
        else if (currentIndex + this.numberOfColumn > this.maxIndex) {
            if (this.scrollFilteredAppButtonListUp()) {
                currentIndex -= this.numberOfColumn;
            }
            else {
                return;
            }
        }
        const nextButton = this.filteredAppButtonList[currentIndex + this.numberOfColumn];
        if (nextButton) {
            this.highlightButton(nextButton);
        }
    }
    highlightButton(button) {
        if (button) {
            if (this.currentButtonFocused) {
                this.currentButtonFocused.remove_style_class_name('highlighted');
            }
            this.currentButtonFocused = button;
            this.currentButtonFocused.add_style_class_name('highlighted');
        }
    }
    highlightInitialButton() {
        if (this.filteredAppButtonList &&
            this.filteredAppButtonList.length > 0) {
            this.highlightButton(this.filteredAppButtonList[0]);
        }
    }
    removeHighlightButton() {
        if (this.currentButtonFocused) {
            this.currentButtonFocused.remove_style_class_name('highlighted');
        }
        if (this.filteredAppButtonList) {
            this.currentButtonFocused = null;
        }
    }
    addAppButton(button) {
        this.appButtonList.push(button);
        this.add_child(button);
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        const containerPadding = 16 * this.monitorScale;
        const clockHeight = (Me$f.msThemeManager.clockAppLauncher ? 64 : 0) * this.monitorScale;
        const searchHeight = 48 * this.monitorScale;
        const searchMargin = 24 * this.monitorScale;
        const availableWidth = contentBox.get_width() - containerPadding * 2;
        const availableHeight = contentBox.get_height() -
            containerPadding * 2 -
            searchHeight -
            searchMargin -
            clockHeight;
        const numberOfButtons = this.filteredAppButtonList.length;
        this.numberOfColumn = Math.floor(availableWidth / this.buttonSize);
        this.numberOfRow = Math.floor(availableHeight / this.buttonSize);
        const numberOfRowNeeded = Math.ceil(numberOfButtons / this.numberOfColumn);
        this.maxIndex =
            this.numberOfColumn *
                Math.min(this.numberOfRow, numberOfRowNeeded) -
                1;
        const horizontalOffset = (contentBox.get_width() -
            (this.buttonSize * this.numberOfColumn +
                containerPadding * 2)) /
            2;
        const verticalOffset = (contentBox.get_height() -
            (this.buttonSize * this.numberOfRow +
                containerPadding * 2 +
                searchHeight +
                searchMargin +
                clockHeight)) /
            2;
        if (this.clockBin) {
            const clockBox = new Clutter$8.ActorBox();
            clockBox.x1 = contentBox.x1 + horizontalOffset + containerPadding;
            clockBox.x2 = contentBox.x2 - horizontalOffset - containerPadding;
            clockBox.y1 = contentBox.y1 + verticalOffset;
            clockBox.y2 = clockBox.y1 + clockHeight;
            Allocate(this.clockBin, clockBox, flags);
        }
        const searchBox = new Clutter$8.ActorBox();
        searchBox.x1 = contentBox.x1 + horizontalOffset;
        searchBox.x2 = contentBox.x2 - horizontalOffset;
        searchBox.y1 = contentBox.y1 + verticalOffset + clockHeight;
        searchBox.y2 = searchBox.y1 + searchHeight;
        Allocate(this.inputContainer, searchBox, flags);
        const containerBox = new Clutter$8.ActorBox();
        containerBox.x1 = contentBox.x1 + horizontalOffset;
        containerBox.x2 = contentBox.x2 - horizontalOffset;
        containerBox.y1 =
            contentBox.y1 +
                verticalOffset +
                searchHeight +
                searchMargin +
                clockHeight;
        containerBox.y2 = contentBox.y2 - verticalOffset;
        Allocate(this.container, containerBox, flags);
        let index = 0;
        for (let y = 0; y < this.numberOfRow; y++) {
            for (let x = 0; x < this.numberOfColumn; x++) {
                index = x + this.numberOfColumn * y;
                if (index < this.filteredAppButtonList.length) {
                    const button = this.filteredAppButtonList[index];
                    const buttonBox = new Clutter$8.ActorBox();
                    buttonBox.x1 =
                        containerBox.x1 +
                            this.buttonSize * x +
                            containerPadding;
                    buttonBox.x2 = buttonBox.x1 + this.buttonSize;
                    buttonBox.y1 =
                        containerBox.y1 +
                            this.buttonSize * y +
                            containerPadding;
                    buttonBox.y2 = buttonBox.y1 + this.buttonSize;
                    button.visible = true;
                    Allocate(button, buttonBox, flags);
                }
            }
        }
        for (let i = index + 1; i < numberOfButtons; i++) {
            this.filteredAppButtonList[i].visible = false;
        }
        this.appButtonList
            .filter((button) => {
            return !this.filteredAppButtonList.includes(button);
        })
            .forEach((button) => {
            this.hideButton(button, contentBox, flags);
        });
        if (this.currentButtonFocused) {
            this.getCurrentIndex();
        }
    }
    hideButton(button, contentBox, flags) {
        const hiddenBox = new Clutter$8.ActorBox();
        hiddenBox.x1 = contentBox.x1;
        hiddenBox.x2 = contentBox.x1;
        hiddenBox.y1 = contentBox.x1;
        hiddenBox.y2 = contentBox.x1;
        Allocate(button, hiddenBox, flags);
        button.visible = false;
    }
};
MsApplicationButtonContainer = __decorate([
    registerGObjectClass
], MsApplicationButtonContainer);
let MsApplicationButton = class MsApplicationButton extends MatButton {
    _init({ app, buttonSize }) {
        super._init({});
        this.app = app;
        this.buttonSize = buttonSize;
        this.layout = new St$4.BoxLayout({
            vertical: true,
            width: this.buttonSize,
            height: this.buttonSize,
            clip_to_allocation: true,
        });
        if (app) {
            this.icon = this.app.create_icon_texture(72);
            this.title = new St$4.Label({
                text: this.app.get_name(),
                x_align: Clutter$8.ActorAlign.CENTER,
                style_class: 'subtitle-2',
                style: 'margin-top:12px',
            });
            this.layout.add_child(this.icon);
            this.layout.add_child(this.title);
            Me$f.tooltipManager.add(this.title, { relativeActor: this });
        }
        this.layout.set_style('padding:12px;');
        this.set_child(this.layout);
    }
};
MsApplicationButton.metaInfo = {
    GTypeName: 'MsApplicationButton',
};
MsApplicationButton = __decorate([
    registerGObjectClass
], MsApplicationButton);

const GLib$a = imports.gi.GLib;
const Meta$5 = imports.gi.Meta;
const Shell$2 = imports.gi.Shell;
const Main$8 = imports.ui.main;
const Me$e = imports.misc.extensionUtils.getCurrentExtension();
const KeyBindingAction = {
    PREVIOUS_WINDOW: 'previous-window',
    NEXT_WINDOW: 'next-window',
    APP_LAUNCHER: 'app-launcher',
    KILL_FOCUSED_WINDOW: 'kill-focused-window',
    MOVE_WINDOW_LEFT: 'move-window-left',
    MOVE_WINDOW_RIGHT: 'move-window-right',
    MOVE_WINDOW_TOP: 'move-window-top',
    MOVE_WINDOW_BOTTOM: 'move-window-bottom',
    RESIZE_WINDOW_LEFT: 'resize-window-left',
    RESIZE_WINDOW_UP: 'resize-window-up',
    RESIZE_WINDOW_RIGHT: 'resize-window-right',
    RESIZE_WINDOW_DOWN: 'resize-window-down',
    FOCUS_MONITOR_LEFT: 'focus-monitor-left',
    FOCUS_MONITOR_UP: 'focus-monitor-up',
    FOCUS_MONITOR_RIGHT: 'focus-monitor-right',
    FOCUS_MONITOR_DOWN: 'focus-monitor-down',
    MOVE_WINDOW_MONITOR_LEFT: 'move-window-monitor-left',
    MOVE_WINDOW_MONITOR_UP: 'move-window-monitor-up',
    MOVE_WINDOW_MONITOR_RIGHT: 'move-window-monitor-right',
    MOVE_WINDOW_MONITOR_DOWN: 'move-window-monitor-down',
    CYCLE_TILING_LAYOUT: 'cycle-tiling-layout',
    REVERSE_CYCLE_TILING_LAYOUT: 'reverse-cycle-tiling-layout',
    TOGGLE_MATERIAL_SHELL_UI: 'toggle-material-shell-ui',
    PREVIOUS_WORKSPACE: 'previous-workspace',
    NEXT_WORKSPACE: 'next-workspace',
    LAST_WORKSPACE: 'last-workspace',
};
class HotKeysModule {
    constructor() {
        this.workspaceManager = global.workspace_manager;
        this.settings = getSettings('bindings');
        this.actionIdToNameMap = new Map();
        this.actionNameToActionMap = new Map();
        this.lastStash = null;
        this.nextStash = null;
        this.resetStash();
        this.connectId = global.window_manager.connect('switch-workspace', (_, from, _to) => {
            if (this.lastStash !== null && from != this.lastStash) {
                this.resetStash();
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.PREVIOUS_WINDOW, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.focusPreviousTileable();
        });
        this.actionNameToActionMap.set(KeyBindingAction.NEXT_WINDOW, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.focusNextTileable();
        });
        this.actionNameToActionMap.set(KeyBindingAction.APP_LAUNCHER, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.focusAppLauncher();
        });
        this.actionNameToActionMap.set(KeyBindingAction.PREVIOUS_WORKSPACE, () => {
            Me$e.msWorkspaceManager.activatePreviousMsWorkspace();
        });
        this.actionNameToActionMap.set(KeyBindingAction.NEXT_WORKSPACE, () => {
            Me$e.msWorkspaceManager.activateNextMsWorkspace();
        });
        this.actionNameToActionMap.set(KeyBindingAction.LAST_WORKSPACE, () => {
            const currentIndex = this.workspaceManager.get_active_workspace_index();
            const lastIndex = this.workspaceManager.n_workspaces - 1;
            if (currentIndex < lastIndex) {
                Me$e.msWorkspaceManager.primaryMsWorkspaces[lastIndex].activate();
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.KILL_FOCUSED_WINDOW, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            if (msWorkspace.tileableFocused instanceof MsWindow) {
                msWorkspace.tileableFocused.kill();
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_LEFT, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                msWorkspace.swapTileableLeft(focused);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_RIGHT, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                msWorkspace.swapTileableRight(focused);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_TOP, () => {
            const activeMsWorkspace = Me$e.msWorkspaceManager.getActivePrimaryMsWorkspace();
            if (activeMsWorkspace.tileableFocused instanceof
                MsApplicationLauncher ||
                activeMsWorkspace.tileableFocused == null) {
                return;
            }
            if (activeMsWorkspace ===
                Me$e.msWorkspaceManager.primaryMsWorkspaces[0]) {
                if (!Me$e.msWorkspaceManager.shouldCycleWorkspacesNavigation() &&
                    (!Meta$5.prefs_get_dynamic_workspaces() ||
                        activeMsWorkspace.msWindowList.length === 1)) {
                    return;
                }
                const nextMsWorkspace = Me$e.msWorkspaceManager.primaryMsWorkspaces[Me$e.msWorkspaceManager.primaryMsWorkspaces.length - 1];
                Me$e.msWorkspaceManager.setWindowToMsWorkspace(activeMsWorkspace.tileableFocused, nextMsWorkspace);
                if (!Me$e.msWorkspaceManager.shouldCycleWorkspacesNavigation()) {
                    Me$e.msWorkspaceManager.setMsWorkspaceAt(nextMsWorkspace, 0);
                }
                nextMsWorkspace.activate();
                return;
            }
            const currentMsWorkspaceIndex = Me$e.msWorkspaceManager.primaryMsWorkspaces.indexOf(activeMsWorkspace);
            const nextMsWorkspace = Me$e.msWorkspaceManager.primaryMsWorkspaces[currentMsWorkspaceIndex - 1];
            Me$e.msWorkspaceManager.setWindowToMsWorkspace(activeMsWorkspace.tileableFocused, nextMsWorkspace);
            nextMsWorkspace.activate();
        });
        Meta$5.keybindings_set_custom_handler('move-to-workspace-up', this.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_TOP));
        this.actionNameToActionMap.set(KeyBindingAction.MOVE_WINDOW_BOTTOM, () => {
            const activeMsWorkspace = Me$e.msWorkspaceManager.getActivePrimaryMsWorkspace();
            if (activeMsWorkspace.tileableFocused instanceof
                MsApplicationLauncher ||
                activeMsWorkspace.tileableFocused == null) {
                return;
            }
            if (activeMsWorkspace ===
                Me$e.msWorkspaceManager.primaryMsWorkspaces[Me$e.msWorkspaceManager.primaryMsWorkspaces.length -
                    (Meta$5.prefs_get_dynamic_workspaces() ? 2 : 1)]) {
                if ((Meta$5.prefs_get_dynamic_workspaces() &&
                    activeMsWorkspace.msWindowList.length === 1 &&
                    !Me$e.msWorkspaceManager.shouldCycleWorkspacesNavigation()) ||
                    (!Meta$5.prefs_get_dynamic_workspaces() &&
                        !Me$e.msWorkspaceManager.shouldCycleWorkspacesNavigation())) {
                    return;
                }
                if (!Meta$5.prefs_get_dynamic_workspaces() ||
                    (activeMsWorkspace.msWindowList.length === 1 &&
                        Me$e.msWorkspaceManager.shouldCycleWorkspacesNavigation())) {
                    const nextMsWorkspace = Me$e.msWorkspaceManager.msWorkspaceList[0];
                    Me$e.msWorkspaceManager.setWindowToMsWorkspace(activeMsWorkspace.tileableFocused, nextMsWorkspace);
                    Me$e.msWorkspaceManager.setMsWorkspaceAt(nextMsWorkspace, 0);
                    nextMsWorkspace.activate();
                    return;
                }
            }
            const currentMsWorkspaceIndex = Me$e.msWorkspaceManager.primaryMsWorkspaces.indexOf(activeMsWorkspace);
            const nextMsWorkspace = Me$e.msWorkspaceManager.primaryMsWorkspaces[currentMsWorkspaceIndex + 1];
            Me$e.msWorkspaceManager.setWindowToMsWorkspace(activeMsWorkspace.tileableFocused, nextMsWorkspace);
            nextMsWorkspace.activate();
        });
        Meta$5.keybindings_set_custom_handler('move-to-workspace-down', this.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_BOTTOM));
        this.actionNameToActionMap.set(KeyBindingAction.RESIZE_WINDOW_LEFT, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                Me$e.msWindowManager.msResizeManager.resizeTileable(focused, Meta$5.GrabOp.RESIZING_W, 5);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.RESIZE_WINDOW_UP, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                Me$e.msWindowManager.msResizeManager.resizeTileable(focused, Meta$5.GrabOp.RESIZING_N, 5);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.RESIZE_WINDOW_RIGHT, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                Me$e.msWindowManager.msResizeManager.resizeTileable(focused, Meta$5.GrabOp.RESIZING_E, 5);
            }
        });
        this.actionNameToActionMap.set(KeyBindingAction.RESIZE_WINDOW_DOWN, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            const focused = msWorkspace.tileableFocused;
            if (focused !== null) {
                Me$e.msWindowManager.msResizeManager.resizeTileable(focused, Meta$5.GrabOp.RESIZING_S, 5);
            }
        });
        ['LEFT', 'UP', 'RIGHT', 'DOWN'].forEach((DIRECTION) => {
            this.actionNameToActionMap.set(KeyBindingAction[`FOCUS_MONITOR_${DIRECTION}`], () => {
                const currentMsWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
                const monitorIndex = global.display.get_monitor_neighbor_index(currentMsWorkspace.monitor.index, Meta$5.DisplayDirection[DIRECTION]);
                if (monitorIndex !== -1) {
                    const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspaceOfMonitor(monitorIndex);
                    Me$e.msWorkspaceManager.focusMsWorkspace(msWorkspace);
                }
            });
            this.actionNameToActionMap.set(KeyBindingAction[`MOVE_WINDOW_MONITOR_${DIRECTION}`], () => {
                const currentMsWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
                const focused = currentMsWorkspace.tileableFocused;
                if (focused instanceof MsApplicationLauncher ||
                    focused === null) {
                    return;
                }
                const monitorIndex = global.display.get_monitor_neighbor_index(currentMsWorkspace.monitor.index, Meta$5.DisplayDirection[DIRECTION]);
                if (monitorIndex !== -1) {
                    const msWorkspace = monitorIndex ===
                        global.display.get_primary_monitor()
                        ? Me$e.msWorkspaceManager.getActivePrimaryMsWorkspace()
                        : Me$e.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];
                    Me$e.msWorkspaceManager.setWindowToMsWorkspace(focused, msWorkspace);
                    GLib$a.idle_add(GLib$a.PRIORITY_DEFAULT_IDLE, () => {
                        Me$e.msWorkspaceManager.focusMsWorkspace(msWorkspace);
                        return GLib$a.SOURCE_REMOVE;
                    });
                }
            });
            Meta$5.keybindings_set_custom_handler(`move-to-monitor-${DIRECTION.toLowerCase()}`, this.actionNameToActionMap.get(KeyBindingAction[`MOVE_WINDOW_MONITOR_${DIRECTION}`]));
        });
        [...Array(10).keys()].forEach((workspaceIndex) => {
            const actionKey = `MOVE_WINDOW_TO_${workspaceIndex + 1}`;
            KeyBindingAction[actionKey] = `move-window-to-workspace-${workspaceIndex + 1}`;
            this.actionNameToActionMap.set(KeyBindingAction[actionKey], () => {
                const activeMsWorkspace = Me$e.msWorkspaceManager.getActivePrimaryMsWorkspace();
                const currentMsWorkspaceIndex = Me$e.msWorkspaceManager.primaryMsWorkspaces.indexOf(activeMsWorkspace);
                const focused = activeMsWorkspace.tileableFocused;
                if (focused instanceof MsApplicationLauncher ||
                    focused === null ||
                    workspaceIndex === currentMsWorkspaceIndex) {
                    return;
                }
                if (workspaceIndex >=
                    Me$e.msWorkspaceManager.primaryMsWorkspaces.length) {
                    workspaceIndex =
                        Me$e.msWorkspaceManager.primaryMsWorkspaces.length - 1;
                }
                const nextMsWorkspace = Me$e.msWorkspaceManager.primaryMsWorkspaces[workspaceIndex];
                Me$e.msWorkspaceManager.setWindowToMsWorkspace(focused, nextMsWorkspace);
                nextMsWorkspace.activate();
            });
        });
        this.actionNameToActionMap.set(KeyBindingAction.CYCLE_TILING_LAYOUT, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.nextLayout(1);
        });
        this.actionNameToActionMap.set(KeyBindingAction.REVERSE_CYCLE_TILING_LAYOUT, () => {
            const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
            msWorkspace.nextLayout(-1);
        });
        this.actionNameToActionMap.set(KeyBindingAction.TOGGLE_MATERIAL_SHELL_UI, () => {
            Me$e.layout.togglePanelsVisibilities();
        });
        Object.keys(TilingLayoutByKey).forEach((layoutKey) => {
            const actionKey = `USE_${layoutKey}_LAYOUT`;
            KeyBindingAction[actionKey] = `use-${layoutKey}-layout`;
            this.actionNameToActionMap.set(KeyBindingAction[actionKey], () => {
                const msWorkspace = Me$e.msWorkspaceManager.getActiveMsWorkspace();
                msWorkspace.setLayoutByKey(layoutKey);
            });
        });
        [...Array(10).keys()].forEach((workspaceIndex) => {
            const actionKey = `NAVIGATE_TO_${workspaceIndex + 1}`;
            KeyBindingAction[actionKey] = `navigate-to-workspace-${workspaceIndex + 1}`;
            this.actionNameToActionMap.set(KeyBindingAction[actionKey], () => {
                const currentNumOfWorkspaces = Me$e.msWorkspaceManager.msWorkspaceList.length - 1;
                const currentWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
                let nextWorkspaceIndex = workspaceIndex;
                if (this.lastStash === null ||
                    nextWorkspaceIndex !== this.nextStash) {
                    this.lastStash = currentWorkspaceIndex;
                    this.nextStash = nextWorkspaceIndex;
                }
                else {
                    if (nextWorkspaceIndex === this.nextStash) {
                        nextWorkspaceIndex = this.lastStash;
                    }
                    this.resetStash();
                }
                nextWorkspaceIndex =
                    nextWorkspaceIndex > currentNumOfWorkspaces
                        ? currentNumOfWorkspaces
                        : nextWorkspaceIndex;
                Me$e.msWorkspaceManager.primaryMsWorkspaces[nextWorkspaceIndex].activate();
            });
        });
        this.actionNameToActionMap.forEach((action, name) => {
            this.addKeybinding(name);
        });
    }
    resetStash() {
        this.lastStash = null;
        this.nextStash = null;
    }
    addKeybinding(name) {
        const actionId = Main$8.wm.addKeybinding(name, this.settings, Meta$5.KeyBindingFlags.IGNORE_AUTOREPEAT, Shell$2.ActionMode.NORMAL, this.actionNameToActionMap.get(name));
        this.actionIdToNameMap.set(actionId, name);
    }
    destroy() {
        this.actionIdToNameMap.forEach((key) => {
            Main$8.wm.removeKeybinding(key);
            this.actionIdToNameMap.delete(key);
        });
        if (this.connectId) {
            global.window_manager.disconnect(this.connectId);
        }
    }
}

const GLib$9 = imports.gi.GLib;
const Meta$4 = imports.gi.Meta;
const Clutter$7 = imports.gi.Clutter;
const Main$7 = imports.ui.main;
const Me$d = imports.misc.extensionUtils.getCurrentExtension();
class MsDndManager extends MsManager {
    constructor(msWindowManager) {
        super();
        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.dragInProgress = null;
        this.inputGrabber = new InputGrabber();
        this.observe(this.msWindowManager, 'ms-window-created', () => {
            this.listenForMsWindowsSignal();
        });
        this.listenForMsWindowsSignal();
        this.observe(global.workspace_manager, 'active-workspace-changed', () => {
            if (this.dragInProgress !== null) {
                const newMsWorkspace = Me$d.msWorkspaceManager.getActivePrimaryMsWorkspace();
                if (this.dragInProgress.msWindow.metaWindow) {
                    this.dragInProgress.msWindow.metaWindow.change_workspace_by_index(global.workspace_manager.get_active_workspace_index(), true);
                }
                else {
                    Me$d.msWorkspaceManager.setWindowToMsWorkspace(this.dragInProgress.msWindow, newMsWorkspace);
                }
                this.dragInProgress.originalParent =
                    newMsWorkspace.msWorkspaceActor.tileableContainer;
            }
        });
        this.observe(global.display, 'grab-op-begin', (_, display, metaWindow, op) => {
            if (op === Meta$4.GrabOp.MOVING) {
                const msWindow = metaWindow.msWindow;
                if (msWindow &&
                    msWindow.metaWindow === metaWindow &&
                    !msWindow.followMetaWindow) {
                    global.display.end_grab_op(global.get_current_time());
                    this.startDrag(msWindow);
                }
            }
        });
        this.observe(global.stage, 'captured-event', (_, event) => {
            if (this.dragInProgress !== null) {
                const [stageX, stageY] = event.get_coords();
                const msWindowDragged = this.dragInProgress.msWindow;
                switch (event.type()) {
                    case Clutter$7.EventType.MOTION:
                        msWindowDragged.set_position(Math.round(stageX -
                            msWindowDragged.width *
                                this.dragInProgress
                                    .originPointerAnchor[0]), Math.round(stageY -
                            msWindowDragged.height *
                                this.dragInProgress
                                    .originPointerAnchor[1]));
                        this.throttledCheckUnderPointer();
                        break;
                    case Clutter$7.EventType.BUTTON_RELEASE:
                        this.endDrag();
                        break;
                }
            }
        });
        this.throttledCheckUnderPointer = throttle(this.checkUnderThePointer, 50, { trailing: false });
    }
    listenForMsWindowsSignal() {
        this.msWindowManager.msWindowList.forEach((msWindow) => {
            if (!this.signalMap.has(msWindow)) {
                const id = msWindow.connect('event', (_, event) => {
                    if (this.dragInProgress)
                        return;
                    switch (event.type()) {
                        case Clutter$7.EventType.MOTION:
                            if (event.get_state() === 320) {
                                this.startDrag(msWindow);
                            }
                            break;
                    }
                });
                this.signalMap.set(msWindow, id);
            }
        });
    }
    startDrag(msWindow) {
        global.stage.add_child(this.inputGrabber);
        const originalParent = msWindow.get_parent();
        msWindow.freezeAllocation();
        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });
        const [globalX, globalY] = global.get_pointer();
        const [_, relativeX, relativeY] = msWindow.transform_stage_point(globalX, globalY);
        this.dragInProgress = {
            msWindow,
            originPointerAnchor: [
                relativeX / msWindow.width,
                relativeY / msWindow.height,
            ],
            originalParent,
        };
        Me$d.layout.setActorAbove(msWindow);
        this.checkUnderThePointerRoutine();
        msWindow.set_position(Math.round(globalX -
            msWindow.width * this.dragInProgress.originPointerAnchor[0]), Math.round(globalY -
            msWindow.height * this.dragInProgress.originPointerAnchor[1]));
        Main$7.pushModal(this.inputGrabber);
        global.display.set_cursor(Meta$4.Cursor.DND_IN_DRAG);
    }
    endDrag() {
        assert(this.dragInProgress !== null, 'No drag in progress');
        const { msWindow, originalParent } = this.dragInProgress;
        this.dragInProgress = null;
        Main$7.popModal(this.inputGrabber);
        global.stage.remove_child(this.inputGrabber);
        msWindow.unFreezeAllocation();
        reparentActor(msWindow, originalParent);
        this.msWindowManager.msWindowList.forEach((aMsWindow) => {
            aMsWindow.updateMetaWindowVisibility();
        });
        global.display.set_cursor(Meta$4.Cursor.DEFAULT);
    }
    checkUnderThePointerRoutine() {
        if (this.dragInProgress === null)
            return;
        this.throttledCheckUnderPointer();
        GLib$9.timeout_add(GLib$9.PRIORITY_DEFAULT, 100, () => {
            this.checkUnderThePointerRoutine();
            return GLib$9.SOURCE_REMOVE;
        });
    }
    checkUnderThePointer() {
        assert(this.dragInProgress !== null, 'No drag in progress');
        const [x, y] = global.get_pointer();
        const monitor = Main$7.layoutManager.currentMonitor;
        const msWindowDragged = this.dragInProgress.msWindow;
        const msWorkspace = msWindowDragged.msWorkspace;
        if (monitor !== msWorkspace.monitor) {
            let newMsWorkspace;
            if (monitor === Main$7.layoutManager.primaryMonitor) {
                newMsWorkspace = Me$d.msWorkspaceManager.getActivePrimaryMsWorkspace();
            }
            else {
                newMsWorkspace = Me$d.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(monitor.index)[0];
            }
            Me$d.msWorkspaceManager.setWindowToMsWorkspace(msWindowDragged, newMsWorkspace);
            this.dragInProgress.originalParent =
                newMsWorkspace.msWorkspaceActor.tileableContainer;
        }
        const workArea = Main$7.layoutManager.getWorkAreaForMonitor(msWorkspace.monitor.index);
        const relativeX = x - workArea.x;
        const relativeY = y - workArea.y;
        msWorkspace.tileableList
            .filter((tileable) => tileable instanceof MsWindow &&
            tileable.visible &&
            tileable.get_parent() ===
                msWorkspace.msWorkspaceActor.tileableContainer)
            .forEach((tileable) => {
            if (relativeX >= tileable.x &&
                relativeX <= tileable.x + tileable.width &&
                relativeY >= tileable.y &&
                relativeY <= tileable.y + tileable.height) {
                msWorkspace.swapTileable(msWindowDragged, tileable);
            }
        });
    }
}
let InputGrabber = class InputGrabber extends Clutter$7.Actor {
    _init() {
        super._init({
            name: 'InputGrabber',
            reactive: true,
        });
        this.add_constraint(new Clutter$7.BindConstraint({
            source: global.stage,
            coordinate: Clutter$7.BindCoordinate.ALL,
        }));
    }
    vfunc_key_press_event(keyEvent) {
        const actionId = global.display.get_keybinding_action(keyEvent.hardware_keycode, keyEvent.modifier_state);
        if (Me$d.hotKeysModule.actionIdToNameMap.has(actionId)) {
            const actionName = Me$d.hotKeysModule.actionIdToNameMap.get(actionId);
            switch (actionName) {
                case KeyBindingAction.PREVIOUS_WINDOW:
                    Me$d.hotKeysModule.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_LEFT)();
                    break;
                case KeyBindingAction.NEXT_WINDOW:
                    Me$d.hotKeysModule.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_RIGHT)();
                    break;
                case KeyBindingAction.PREVIOUS_WORKSPACE:
                    Me$d.hotKeysModule.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_TOP)();
                    break;
                case KeyBindingAction.NEXT_WORKSPACE:
                    Me$d.hotKeysModule.actionNameToActionMap.get(KeyBindingAction.MOVE_WINDOW_BOTTOM)();
                    break;
            }
        }
        return false;
    }
};
InputGrabber = __decorate([
    registerGObjectClass
], InputGrabber);

const GLib$8 = imports.gi.GLib;
const Me$c = imports.misc.extensionUtils.getCurrentExtension();
class MsFocusManager extends MsManager {
    constructor(msWindowManager) {
        super();
        this.lastMsWindowFocused = null;
        this.lastKeyFocus = null;
        this.msWindowManager = msWindowManager;
        this.observe(global.stage, 'notify::key-focus', this.onKeyFocus.bind(this));
        this.observe(global.display, 'notify::focus-window', this.onWindowFocus.bind(this));
        this.observe(global.workspace_manager, 'active-workspace-changed', () => {
            if (!Me$c.loaded)
                return;
            this.focusProtected = true;
            GLib$8.timeout_add(GLib$8.PRIORITY_DEFAULT, 100, () => {
                delete this.focusProtected;
                return GLib$8.SOURCE_REMOVE;
            });
        });
        this.observe(global.display, 'window-demands-attention', (_, _metaWindow) => {
            Me$c.logFocus('window-demands-attention', _metaWindow);
        });
        this.observe(global.display, 'window-marked-urgent', (_, _metaWindow) => {
            Me$c.logFocus('window-marked-urgent', _metaWindow);
        });
    }
    onKeyFocus() {
        const keyFocus = global.stage.key_focus;
        if (!keyFocus) {
            if (this.focusProtected &&
                this.lastKeyFocus &&
                this.lastKeyFocus != this.lastMsWindowFocused &&
                this.lastKeyFocus.mapped) {
                Me$c.logFocus('Focus Protected, restore focus to ', this.lastKeyFocus);
                return this.lastKeyFocus.grab_key_focus();
            }
            return;
        }
        this.lastKeyFocus = keyFocus;
        if (keyFocus instanceof MsWindow) {
            return this.setFocusToMsWindow(keyFocus);
        }
        let actor = keyFocus;
        let isChildrenOfMsWindow = false;
        while (actor.get_parent() && !isChildrenOfMsWindow) {
            actor = actor.get_parent();
            if (actor instanceof MsWindow) {
                isChildrenOfMsWindow = true;
            }
        }
        if (isChildrenOfMsWindow) {
            this.setFocusToMsWindow(actor);
        }
        else {
            this.lastMsWindowFocused = null;
        }
    }
    onWindowFocus() {
        const windowFocus = global.display.get_focus_window();
        if (!windowFocus || !windowFocus.msWindow)
            return;
        const msWindow = windowFocus.msWindow;
        msWindow.onFocus();
        this.setFocusToMsWindow(msWindow);
    }
    setFocusToMsWindow(msWindow) {
        if (msWindow === this.lastMsWindowFocused)
            return;
        Me$c.logFocus('Focus MsWindow', msWindow.title);
        this.lastMsWindowFocused = msWindow;
        this.emit('focus-changed', msWindow);
    }
    requestFocus(msWindow) {
        return (msWindow !== this.lastMsWindowFocused &&
            !this.msWindowManager.msDndManager.dragInProgress);
    }
}

const Meta$3 = imports.gi.Meta;
const Clutter$6 = imports.gi.Clutter;
const Main$6 = imports.ui.main;
const Me$b = imports.misc.extensionUtils.getCurrentExtension();
const RESIZE_CODES = [
    Meta$3.GrabOp.RESIZING_N,
    Meta$3.GrabOp.RESIZING_NE,
    Meta$3.GrabOp.RESIZING_NW,
    Meta$3.GrabOp.RESIZING_E,
    Meta$3.GrabOp.RESIZING_W,
    Meta$3.GrabOp.RESIZING_S,
    Meta$3.GrabOp.RESIZING_SE,
    Meta$3.GrabOp.RESIZING_SW,
];
const RESIZE_VERTICAL_CODES = [Meta$3.GrabOp.RESIZING_N, Meta$3.GrabOp.RESIZING_S];
const RESIZE_AFTER_CODES = [
    Meta$3.GrabOp.RESIZING_N,
    Meta$3.GrabOp.RESIZING_NW,
    Meta$3.GrabOp.RESIZING_W,
    Meta$3.GrabOp.RESIZING_SW,
];
const CHECK_TIMEOUT_MS = 100;
class MsResizeManager extends MsManager {
    constructor(msWindowManager) {
        super();
        this.msWindowManager = msWindowManager;
        this.signalMap = new Map();
        this.resizeInProgress = null;
        this.inputResizer = new InputResizer();
        this.observe(global.display, 'grab-op-begin', (_, display, metaWindow, directionOp) => {
            if (RESIZE_CODES.includes(directionOp)) {
                const msWindow = metaWindow.msWindow;
                if (msWindow &&
                    msWindow.metaWindow === metaWindow &&
                    !msWindow.followMetaWindow) {
                    global.display.end_grab_op(global.get_current_time());
                    const { layout } = msWindow.msWorkspace;
                    if (!(layout instanceof BaseResizeableTilingLayout)) {
                        return;
                    }
                    const vertical = RESIZE_VERTICAL_CODES.includes(directionOp);
                    const after = RESIZE_AFTER_CODES.includes(directionOp);
                    const border = layout.getTileableBorder(msWindow, vertical, after);
                    if (border) {
                        this.startResize(border);
                    }
                }
            }
        });
        this.observe(global.stage, 'captured-event', (_, event) => {
            if (this.resizeInProgress !== null) {
                switch (event.type()) {
                    case Clutter$6.EventType.MOTION:
                        this.checkPointerPosition();
                        break;
                    case Clutter$6.EventType.BUTTON_RELEASE:
                        this.endPointerChecker();
                        break;
                }
            }
        });
        this.throttledCheckPointerPosition = throttle(this.checkPointerPosition, CHECK_TIMEOUT_MS, { trailing: false });
    }
    checkPointerPosition() {
        if (this.resizeInProgress !== null) {
            this.updateResize();
        }
    }
    endPointerChecker() {
        if (this.resizeInProgress !== null) {
            this.endResize();
        }
    }
    getPointerPositionRelativeToWorkspace() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const { msWorkspaceActor } = this.resizeInProgress.msWorkspace;
        const [containerX, containerY,] = msWorkspaceActor.tileableContainer.get_transformed_position();
        const [globalX, globalY] = global.get_pointer();
        return [globalX - containerX, globalY - containerY];
    }
    getFirstPortionPositionAndSize() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const { layout } = this.resizeInProgress.msWorkspace;
        const ratio = layout.mainPortion.getRatioForPortion(this.resizeInProgress.border.firstPortion);
        return layout.applyBoxRatio(layout.resolveBox(), ratio);
    }
    startResize(border) {
        assert(this.resizeInProgress === null, 'Resize already in progress');
        this.resizeInProgress = {
            border: border,
            msWorkspace: Me$b.msWorkspaceManager.getActiveMsWorkspace(),
        };
        global.stage.add_child(this.inputResizer);
        Main$6.pushModal(this.inputResizer);
        global.display.set_cursor(Meta$3.Cursor.MOVE_OR_RESIZE_WINDOW);
    }
    updateResize() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        const [pointerX, pointerY,] = this.getPointerPositionRelativeToWorkspace();
        const { x, y, width, height } = this.getFirstPortionPositionAndSize();
        const [relativeX, relativeY] = [pointerX - x, pointerY - y];
        let basisRatio;
        if (!this.resizeInProgress.border.vertical) {
            basisRatio = relativeY / height;
        }
        else {
            basisRatio = relativeX / width;
        }
        this.resizeInProgress.border.updateBasis(basisRatio);
        this.resizeInProgress.msWorkspace.layout.tileAll();
    }
    endResize() {
        assert(this.resizeInProgress !== null, 'No resize in progress');
        this.resizeInProgress = null;
        Main$6.popModal(this.inputResizer);
        Me$b.stateManager.stateChanged();
        global.stage.remove_child(this.inputResizer);
        global.display.set_cursor(Meta$3.Cursor.DEFAULT);
    }
    resizeTileable(tileable, directionOp, percent) {
        const { layout } = tileable.msWorkspace;
        if (!(layout instanceof BaseResizeableTilingLayout)) {
            return;
        }
        const vertical = RESIZE_VERTICAL_CODES.includes(directionOp);
        const after = RESIZE_AFTER_CODES.includes(directionOp);
        const border = layout.getTileableBorder(tileable, vertical, after);
        if (border) {
            border.updateBasis((100 + percent * (after ? -1 : 1)) / 100);
            layout.tileAll();
        }
    }
}
let InputResizer = class InputResizer extends Clutter$6.Actor {
    _init() {
        super._init({
            name: 'InputResizer',
            reactive: true,
        });
        this.add_constraint(new Clutter$6.BindConstraint({
            source: global.stage,
            coordinate: Clutter$6.BindCoordinate.ALL,
        }));
    }
};
InputResizer = __decorate([
    registerGObjectClass
], InputResizer);

const GLib$7 = imports.gi.GLib;
const Meta$2 = imports.gi.Meta;
const Shell$1 = imports.gi.Shell;
const Signals$2 = imports.signals;
const Me$a = imports.misc.extensionUtils.getCurrentExtension();
class MsWindowManager extends MsManager {
    constructor() {
        super();
        this.windowTracker = Shell$1.WindowTracker.get_default();
        this.msWindowList = [];
        this.msWindowWaitingForMetaWindowList = [];
        this.metaWindowFocused = null;
        this.msDndManager = new MsDndManager(this);
        this.msResizeManager = new MsResizeManager(this);
        this.msFocusManager = new MsFocusManager(this);
        this.signals = [];
        this.metaWindowWaitingForAssignationList = [];
        this.observe(global.display, 'window-created', (_, metaWindow) => {
            this.onNewMetaWindow(metaWindow);
        });
        this.observe(global.window_manager, 'size-changed', (wm, actor) => {
            actor.lastResize = Date.now();
        });
    }
    handleExistingMetaWindow() {
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow = windowActor.metaWindow;
            metaWindow.firstFrameDrawn = true;
            metaWindow.createdAt = metaWindow.user_time;
            if (metaWindow.msWindow)
                delete metaWindow.msWindow;
            if (this._handleWindow(metaWindow)) {
                const msWindow = this.msWindowList.find((msWindow) => {
                    return (msWindow.metaWindowIdentifier ===
                        this.buildMetaWindowIdentifier(metaWindow));
                });
                if (msWindow) {
                    metaWindow.handledByMaterialShell = true;
                    return msWindow.setWindow(metaWindow);
                }
            }
            this.onNewMetaWindow(metaWindow);
        });
    }
    onNewMetaWindow(metaWindow) {
        if (Me$a.disableInProgress)
            return;
        metaWindow.createdAt = metaWindow.user_time;
        metaWindow
            .get_compositor_private()
            .connect('first-frame', (_params) => {
            metaWindow.firstFrameDrawn = true;
        });
        if (!this._handleWindow(metaWindow)) {
            const actor = metaWindow.get_compositor_private();
            if (actor.get_parent() != global.top_window_group) {
                actor
                    .get_parent()
                    .remove_child(metaWindow.get_compositor_private());
                global.top_window_group.add_child(metaWindow.get_compositor_private());
            }
            return;
        }
        if (metaWindow.handledByMaterialShell)
            return;
        metaWindow.handledByMaterialShell = true;
        metaWindow.connect('unmanaged', () => {
            this.onMetaWindowUnManaged(metaWindow);
        });
        return this.setMetaWindowAsWaitingForAssignation(metaWindow);
    }
    onMetaWindowUnManaged(metaWindow) {
        if (Me$a.disableInProgress || Me$a.closing)
            return;
        if (this.metaWindowWaitingForAssignationList
            .map((o) => o.metaWindow)
            .includes(metaWindow)) {
            this.metaWindowWaitingForAssignationList.splice(this.metaWindowWaitingForAssignationList
                .map((o) => o.metaWindow)
                .indexOf(metaWindow), 1);
        }
        if (metaWindow.msWindow) {
            const msWindow = metaWindow.msWindow;
            msWindow.metaWindowUnManaged(metaWindow);
        }
    }
    createNewMsWindow(appId, description, metaWindow, msWorkspace, persistent, initialAllocation) {
        const appSys = Shell$1.AppSystem.get_default();
        const app = appSys.lookup_app(appId) ||
            (metaWindow && this.windowTracker.get_window_app(metaWindow));
        if (!app) {
            return;
        }
        const msWindow = new MsWindow({
            app,
            metaWindowIdentifier: description,
            metaWindow,
            persistent,
            initialAllocation,
            msWorkspace: msWorkspace.msWorkspace,
        });
        msWorkspace.msWorkspace.addMsWindowUnchecked(msWindow, msWorkspace.focus, msWorkspace.insert);
        msWindow.connect('request-new-meta-window', () => {
            this.openAppForMsWindow(msWindow);
        });
        msWindow.connect('destroy', () => {
            this.msWindowList.splice(this.msWindowList.indexOf(msWindow), 1);
        });
        this.msWindowList.push(msWindow);
        this.emit('ms-window-created', msWindow);
        return msWindow;
    }
    setMetaWindowAsWaitingForAssignation(metaWindow) {
        this.metaWindowWaitingForAssignationList.push({
            timestamp: Date.now(),
            metaWindow,
        });
        this.checkWindowsForAssignations();
    }
    setMsWindowAsWaitingForMetaWindow(msWindow) {
        this.msWindowWaitingForMetaWindowList.push({
            timestamp: Date.now(),
            msWindow,
            checked: false,
        });
        this.checkWindowsForAssignations();
    }
    checkWindowsForAssignations() {
        const timestamp = Date.now();
        this.metaWindowWaitingForAssignationList.forEach((waitingMetaWindow) => {
            const app = this.windowTracker.get_window_app(waitingMetaWindow.metaWindow);
            let msWindowFound = null;
            if (this.isMetaWindowDialog(waitingMetaWindow.metaWindow)) {
                let root;
                waitingMetaWindow.metaWindow.foreach_ancestor((ancestor) => {
                    if (!root && ancestor.msWindow) {
                        root = ancestor;
                    }
                });
                if (root) {
                    msWindowFound = root.msWindow;
                }
                else if (app) {
                    const sameAppMsWindowList = this.msWindowList.filter((msWindow) => {
                        return (msWindow.metaWindow &&
                            msWindow.app.get_id() === app.get_id());
                    });
                    sameAppMsWindowList.forEach((msWindow) => {
                        if (!msWindowFound ||
                            msWindowFound.metaWindow.get_user_time() <
                                msWindow.metaWindow.get_user_time()) {
                            msWindowFound = msWindow;
                        }
                    });
                }
            }
            if (!msWindowFound) {
                this.msWindowWaitingForMetaWindowList.some((waitingMsWindow) => {
                    waitingMsWindow.checked = true;
                    if (app &&
                        waitingMsWindow.msWindow.app.get_id() ===
                            app.get_id()) {
                        msWindowFound = waitingMsWindow.msWindow;
                        this.msWindowWaitingForMetaWindowList.splice(this.msWindowWaitingForMetaWindowList.indexOf(waitingMsWindow), 1);
                    }
                    return msWindowFound;
                });
            }
            if (!msWindowFound && !app) {
                return;
            }
            if (!msWindowFound) {
                const emptyMsWindowListOfApp = this.msWindowList.filter((msWindow) => {
                    return (!msWindow._metaWindow &&
                        msWindow.app.get_id() === app.get_id());
                });
                if (emptyMsWindowListOfApp.length) {
                    const activeMsWorkspace = Me$a.msWorkspaceManager.getActiveMsWorkspace();
                    msWindowFound = emptyMsWindowListOfApp.filter((msWindow) => {
                        return (msWindow.msWorkspace === activeMsWorkspace);
                    })[0];
                    if (!msWindowFound) {
                        msWindowFound = emptyMsWindowListOfApp[0];
                    }
                }
            }
            if (msWindowFound) {
                if (this.isMetaWindowDialog(waitingMetaWindow.metaWindow)) {
                    msWindowFound.addDialog(waitingMetaWindow.metaWindow);
                }
                else {
                    msWindowFound.setWindow(waitingMetaWindow.metaWindow);
                }
            }
            else {
                const app = this.windowTracker.get_window_app(waitingMetaWindow.metaWindow);
                if ((waitingMetaWindow.metaWindow.firstFrameDrawn &&
                    !app.is_window_backed()) ||
                    timestamp - waitingMetaWindow.timestamp > 2000) {
                    const msWorkspace = Me$a.msWorkspaceManager.determineAppropriateMsWorkspace(waitingMetaWindow.metaWindow);
                    this.createNewMsWindow(app.get_id(), this.buildMetaWindowIdentifier(waitingMetaWindow.metaWindow), waitingMetaWindow.metaWindow, {
                        msWorkspace,
                        focus: true,
                        insert: true,
                    });
                    Me$a.msWorkspaceManager.stateChanged();
                }
            }
        });
        this.metaWindowWaitingForAssignationList = this.metaWindowWaitingForAssignationList.filter((waitingMetaWindow) => {
            return !waitingMetaWindow.metaWindow.msWindow;
        });
        this.msWindowWaitingForMetaWindowList.forEach((waitingMsWindow) => {
            if ((waitingMsWindow.checked &&
                timestamp - waitingMsWindow.timestamp > 2000) ||
                timestamp - waitingMsWindow.timestamp > 5000) {
                waitingMsWindow.msWindow.kill();
                this.msWindowWaitingForMetaWindowList.splice(this.msWindowWaitingForMetaWindowList.indexOf(waitingMsWindow), 1);
            }
        });
        if (this.metaWindowWaitingForAssignationList.length ||
            this.msWindowWaitingForMetaWindowList.length) {
            if (this.checkInProgress)
                return;
            this.checkInProgress = true;
            GLib$7.timeout_add(GLib$7.PRIORITY_DEFAULT, 100, () => {
                this.checkInProgress = false;
                this.checkWindowsForAssignations();
                return GLib$7.SOURCE_REMOVE;
            });
        }
    }
    openAppForMsWindow(msWindow) {
        this.setMsWindowAsWaitingForMetaWindow(msWindow);
        const workspaceIndex = Me$a.msWorkspaceManager.primaryMsWorkspaces.indexOf(msWindow.msWorkspace);
        msWindow.app.launch(0, workspaceIndex, false);
    }
    _handleWindow(metaWindow) {
        if (metaWindow.wm_class !== '' &&
            getSettings('layouts')
                .get_string('windows-excluded')
                .split(',')
                .map((item) => item.trim())
                .indexOf(metaWindow.wm_class) > -1) {
            return false;
        }
        if (metaWindow.above) {
            metaWindow.stick();
            return false;
        }
        const meta = Meta$2.WindowType;
        const types = [
            meta.NORMAL,
            meta.DIALOG,
            meta.MODAL_DIALOG,
            meta.UTILITY,
        ];
        return types.includes(metaWindow.window_type);
    }
    isMetaWindowDialog(metaWindow) {
        const dialogTypes = [
            Meta$2.WindowType.DIALOG,
            Meta$2.WindowType.MODAL_DIALOG,
            Meta$2.WindowType.UTILITY,
        ];
        const isFrozen = !(metaWindow.allows_resize() && metaWindow.allows_move());
        const isMaximizedAny = metaWindow.maximized_horizontally ||
            metaWindow.maximized_vertically;
        return (dialogTypes.includes(metaWindow.window_type) ||
            (metaWindow.get_transient_for() != null &&
                metaWindow.skip_taskbar) ||
            !metaWindow.resizeable ||
            (isFrozen && !isMaximizedAny));
    }
    buildMetaWindowIdentifier(metaWindow) {
        return `${metaWindow.get_wm_class_instance()}-${metaWindow.get_pid()}-${metaWindow.get_stable_sequence()}`;
    }
    destroy() {
        super.destroy();
        this.msDndManager.destroy();
        this.msResizeManager.destroy();
        global.get_window_actors().forEach((windowActor) => {
            const metaWindow = windowActor.metaWindow;
            if (metaWindow.handledByMaterialShell)
                delete metaWindow.handledByMaterialShell;
        });
    }
}
Signals$2.addSignalMethods(MsWindowManager.prototype);

const Clutter$5 = imports.gi.Clutter;
const Gio$3 = imports.gi.Gio;
const GLib$6 = imports.gi.GLib;
const St$3 = imports.gi.St;
const Animation = imports.ui.animation;
const PopupMenu$1 = imports.ui.popupMenu;
const Main$5 = imports.ui.main;
const Me$9 = imports.misc.extensionUtils.getCurrentExtension();
let LayoutSwitcher = class LayoutSwitcher extends St$3.BoxLayout {
    _init(msWorkspace, panelMenuManager) {
        super._init({});
        this.layoutQuickWidgetBin = new St$3.Bin({
            style_class: 'layout-quick-widget-bin',
            y_align: Clutter$5.ActorAlign.CENTER,
        });
        this.tilingIcon = new St$3.Icon({
            style_class: 'mat-panel-button-icon',
        });
        this.switcherButton = new MatPanelButton({
            child: this.tilingIcon,
            style_class: 'mat-panel-button',
            can_focus: true,
            track_hover: true,
        });
        this.switcherButton.connect('scroll-event', (_, event) => {
            switch (event.get_scroll_direction()) {
                case Clutter$5.ScrollDirection.UP:
                    this.msWorkspace.nextLayout(1);
                    break;
                case Clutter$5.ScrollDirection.DOWN:
                    this.msWorkspace.nextLayout(-1);
                    break;
            }
        });
        this.add_child(this.layoutQuickWidgetBin);
        this.add_child(this.switcherButton);
        this.msWorkspace = msWorkspace;
        this.menuManager = panelMenuManager;
        this.switcherButton.connect('clicked', (_actor, _button) => {
            this.menu.toggle();
        });
        this.updateLayoutWidget();
        const connectId = this.msWorkspace.connect('tiling-layout-changed', this.updateLayoutWidget.bind(this));
        this.buildMenu();
        this.connect('destroy', () => {
            this.msWorkspace.disconnect(connectId);
        });
    }
    updateLayoutWidget() {
        this.layoutQuickWidgetBin.remove_all_children();
        if (!this.msWorkspace.layout) {
            return;
        }
        const quickWidget = this.msWorkspace.layout.buildQuickWidget();
        if (quickWidget) {
            this.layoutQuickWidgetBin.set_child(quickWidget);
            this.layoutQuickWidgetBin.show();
        }
        else {
            this.layoutQuickWidgetBin.hide();
        }
        this.tilingIcon.gicon = this.msWorkspace.layout.icon;
    }
    buildMenu() {
        if (this.menu)
            this.menu.destroy();
        this.menu = new PopupMenu$1.PopupMenu(this, 0.5, St$3.Side.TOP);
        this.menu.actor.add_style_class_name('horizontal-panel-menu');
        this.menu.actor.hide();
        Object.entries(TilingLayoutByKey).forEach(([layoutKey, layoutConstructor]) => {
            this.menu.addMenuItem(new TilingLayoutMenuItem(layoutConstructor, this.msWorkspace.state.layoutStateList.find((layoutState) => layoutState.key === layoutKey) != null));
        });
        this.menu.addMenuItem(new PopupMenu$1.PopupSeparatorMenuItem());
        this.menu.addMenuItem(new LayoutsToggle(this.menu));
        Main$5.uiGroup.add_actor(this.menu.actor);
        this.menuManager.addMenu(this.menu);
    }
    setLayout(layoutKey) {
        this.msWorkspace.setLayoutByKey(layoutKey);
    }
    addLayout(layoutKey) {
        if (this.msWorkspace.state.layoutStateList.find((layoutState) => layoutState.key === layoutKey) != null)
            return true;
        const wantedIndex = Me$9.layoutManager.layoutList.findIndex((layout) => {
            return layoutKey === layout.state.key;
        });
        const newState = Me$9.layoutManager.getLayoutByKey(layoutKey).state;
        if (wantedIndex > this.msWorkspace.state.layoutStateList.length) {
            this.msWorkspace.state.layoutStateList.push(newState);
        }
        else {
            this.msWorkspace.state.layoutStateList.splice(wantedIndex, 0, newState);
        }
        Me$9.stateManager.stateChanged();
        return true;
    }
    removeLayout(layoutKey) {
        if (this.msWorkspace.state.layoutStateList.length === 1)
            return false;
        if (this.msWorkspace.state.layoutStateList.find((layoutState) => layoutState.key === layoutKey) === null)
            return true;
        const index = this.msWorkspace.state.layoutStateList.findIndex((layoutState) => layoutState.key === layoutKey);
        this.msWorkspace.state.layoutStateList.splice(index, 1);
        Me$9.stateManager.stateChanged();
        return true;
    }
    vfunc_allocate(...args) {
        const box = args[0];
        const height = box.get_height() / 2;
        if (this.tilingIcon && this.tilingIcon.get_icon_size() != height) {
            GLib$6.idle_add(GLib$6.PRIORITY_DEFAULT_IDLE, () => {
                this.tilingIcon.set_icon_size(height);
                return GLib$6.SOURCE_REMOVE;
            });
        }
        super.vfunc_allocate(...args);
    }
};
LayoutSwitcher.metaInfo = {
    GTypeName: 'LayoutSwitcher',
};
LayoutSwitcher = __decorate([
    registerGObjectClass
], LayoutSwitcher);
let TilingLayoutMenuItem = class TilingLayoutMenuItem extends PopupMenu$1.PopupSwitchMenuItem {
    _init(layoutConstructor, active, params) {
        super._init(layoutConstructor.label, active, params);
        this.layoutConstructor = layoutConstructor;
        this._icon = new St$3.Icon({
            style_class: 'popup-menu-icon',
            gicon: Gio$3.icon_new_for_string(`${Me$9.path}/assets/icons/tiling/${layoutConstructor.state.key}-symbolic.svg`),
            x_align: Clutter$5.ActorAlign.END,
        });
        this.insert_child_at_index(this._icon, 1);
        this.setEditable(false);
    }
    get layoutSwitcher() {
        return this._parent.sourceActor;
    }
    activate(event) {
        if (!this.editable) {
            this.layoutSwitcher.setLayout(this.layoutConstructor.state.key);
            this.emit('activate', event);
        }
        else {
            if (this.state) {
                if (this.layoutSwitcher.removeLayout(this.layoutConstructor.state.key)) {
                    this.toggle();
                }
            }
            else {
                if (this.layoutSwitcher.addLayout(this.layoutConstructor.state.key)) {
                    this.toggle();
                }
            }
        }
        return;
    }
    setEditable(editable) {
        this.editable = editable;
        if (this.editable) {
            this.setSwitcherVisible(true);
            this.setVisible(true);
        }
        else {
            this.setSwitcherVisible(false);
            if (!this.state) {
                this.setVisible(false);
            }
        }
    }
    setSwitcherVisible(visible) {
        if (!this.mapped) {
            return (this._statusBin.opacity = visible ? 255 : 0);
        }
        this._statusBin.ease({
            opacity: visible ? 255 : 0,
            duration: 300,
        });
    }
    setVisible(visible) {
        if (!this.mapped) {
            return (this.height = visible ? -1 : 0);
        }
        if (visible) {
            if (this.height === 0) {
                this.height = -1;
                const height = this.height;
                this.height = 0;
                this.ease({
                    height: height,
                    duration: 300,
                    onComplete: () => {
                        this.height = -1;
                    },
                });
            }
        }
        else {
            this.ease({
                height: 0,
                duration: 300,
            });
        }
    }
};
TilingLayoutMenuItem = __decorate([
    registerGObjectClass
], TilingLayoutMenuItem);
let LayoutsToggle = class LayoutsToggle extends PopupMenu$1.PopupImageMenuItem {
    _init(menu, params) {
        const editText = _('Tweak available layout');
        const editIcon = Gio$3.icon_new_for_string(`${Me$9.path}/assets/icons/category/settings-symbolic.svg`);
        super._init(editText, editIcon, params);
        this.editText = editText;
        this.editIcon = editIcon;
        this.confirmText = _('Confirm layouts');
        this.confirmIcon = Gio$3.icon_new_for_string(`${Me$9.path}/assets/icons/check-symbolic.svg`);
        this.menu = menu;
        this.editable = false;
    }
    activate(_event) {
        this.toggleEditMode();
    }
    toggleEditMode() {
        this.editable = !this.editable;
        this.menu._getMenuItems().forEach((item) => {
            if (item instanceof TilingLayoutMenuItem) {
                item.setEditable(this.editable);
            }
        });
        if (this.editable) {
            this.label.set_text(this.confirmText);
            this._icon.gicon = this.confirmIcon;
        }
        else {
            this.label.set_text(this.editText);
            this._icon.gicon = this.editIcon;
        }
    }
};
LayoutsToggle = __decorate([
    registerGObjectClass
], LayoutsToggle);

const Clutter$4 = imports.gi.Clutter;
const St$2 = imports.gi.St;
const GnomeDesktop = imports.gi.GnomeDesktop;
const DND = imports.ui.dnd;
const PopupMenu = imports.ui.popupMenu;
const Me$8 = imports.misc.extensionUtils.getCurrentExtension();
let HorizontalPanel = class HorizontalPanel extends St$2.BoxLayout {
    _init(msWorkspace) {
        super._init({
            name: 'horizontalPanel',
        });
        this._delegate = this;
        this.msWorkspace = msWorkspace;
        this.menuManager = new PopupMenu.PopupMenuManager(this);
        this.taskBar = new TaskBar(msWorkspace, this.menuManager);
        this.layoutSwitcher = new LayoutSwitcher(msWorkspace, this.menuManager);
        this.add_child(this.taskBar);
        this.add_child(this.layoutSwitcher);
        Me$8.msThemeManager.connect('clock-horizontal-changed', () => {
            if (Me$8.msThemeManager.clockHorizontal) {
                this.createClock();
            }
            else {
                this.removeClock();
            }
        });
        if (Me$8.msThemeManager.clockHorizontal) {
            this.createClock();
        }
    }
    createClock() {
        const clockLabel = new St$2.Label({
            style_class: 'clock-label',
            y_align: Clutter$4.ActorAlign.CENTER,
        });
        this.clockLabel = clockLabel;
        this.clockBin = new St$2.BoxLayout({});
        this.clockBin.add_child(clockLabel);
        this._wallClock = new GnomeDesktop.WallClock();
        const updateClock = () => {
            clockLabel.text = this._wallClock.clock;
        };
        this.signalClock = this._wallClock.connect('notify::clock', updateClock);
        clockLabel.connect('notify::mapped', () => {
            if (clockLabel.mapped) {
                updateClock();
                clockLabel.queue_relayout();
            }
        });
        this.insert_child_at_index(this.clockBin, 1);
        clockLabel.connect('destroy', () => {
            this._wallClock.disconnect(this.signalClock);
            delete this._wallClock;
        });
    }
    removeClock() {
        if (!this.clockBin)
            return;
        this.remove_child(this.clockBin);
        this.clockBin.destroy();
        this.clockBin = null;
    }
    vfunc_get_preferred_height(_forWidth) {
        const height = Me$8.msThemeManager.getPanelSize(this.msWorkspace.monitor.index);
        return [height, height];
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const themeNode = this.get_theme_node();
        const contentBox = themeNode.get_content_box(box);
        const clockWidth = this.clockBin
            ? this.clockBin.get_preferred_width(-1)[1]
            : 0;
        const taskBarBox = new Clutter$4.ActorBox();
        taskBarBox.x1 = contentBox.x1;
        taskBarBox.x2 = Math.max(contentBox.x2 - this.layoutSwitcher.width - clockWidth, 0);
        taskBarBox.y1 = contentBox.y1;
        taskBarBox.y2 = contentBox.y2;
        Allocate(this.taskBar, taskBarBox, flags);
        if (this.clockBin && this.get_children().includes(this.clockBin)) {
            const clockBox = new Clutter$4.ActorBox();
            clockBox.x1 = taskBarBox.x2;
            clockBox.x2 = contentBox.x2 - this.layoutSwitcher.width;
            clockBox.y1 = contentBox.y1;
            clockBox.y2 = contentBox.y2;
            Allocate(this.clockBin, clockBox, flags);
        }
        const layoutSwitcherBox = new Clutter$4.ActorBox();
        layoutSwitcherBox.x1 = contentBox.x2 - this.layoutSwitcher.width;
        layoutSwitcherBox.x2 = contentBox.x2;
        layoutSwitcherBox.y1 = contentBox.y1;
        layoutSwitcherBox.y2 = contentBox.y2;
        Allocate(this.layoutSwitcher, layoutSwitcherBox, flags);
    }
};
HorizontalPanel = __decorate([
    registerGObjectClass
], HorizontalPanel);

const Clutter$3 = imports.gi.Clutter;
const GLib$5 = imports.gi.GLib;
const Signals$1 = imports.signals;
const Main$4 = imports.ui.main;
const Me$7 = imports.misc.extensionUtils.getCurrentExtension();
function isMsWindow(argument) {
    return argument instanceof MsWindow;
}
class MsWorkspace extends WithSignals {
    constructor(msWorkspaceManager, monitor, state = {}) {
        super();
        this.msWorkspaceManager = msWorkspaceManager;
        this.setMonitor(monitor);
        this._state = Object.assign({
            external: this.monitor.index !== Main$4.layoutManager.primaryIndex,
            focusedIndex: 0,
            forcedCategory: null,
            msWindowList: [],
            layoutStateList: Me$7.layoutManager.defaultLayoutKeyList.map((layoutKey) => {
                return Me$7.layoutManager.getLayoutByKey(layoutKey).state;
            }),
            layoutKey: Me$7.layoutManager.defaultLayoutKey,
        }, state);
        this.insertedMsWindow = null;
        this.appLauncher = new MsApplicationLauncher(this);
        this.tileableList = [this.appLauncher];
        this.msWorkspaceCategory = new MsWorkspaceCategory(this, this._state.forcedCategory);
        this.precedentIndex = this._state.focusedIndex;
        this._state.msWindowList.forEach((msWindowData) => {
            Me$7.msWindowManager.createNewMsWindow(msWindowData.appId, msWindowData.metaWindowIdentifier, null, {
                msWorkspace: this,
                focus: false,
                insert: false,
            }, msWindowData.persistent ? msWindowData.persistent : undefined, {
                x: msWindowData.x,
                y: msWindowData.y,
                width: msWindowData.width,
                height: msWindowData.height,
            });
        });
        this.msWorkspaceCategory.refreshCategory();
        this.msWorkspaceActor = new MsWorkspaceActor(this);
        this.setLayoutByKey(this._state.layoutKey);
        this.connect('tileableList-changed', () => {
            this.msWorkspaceCategory.refreshCategory();
        });
    }
    destroy() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        this.appLauncher.onDestroy();
        this.layout.onDestroy();
        if (this.msWorkspaceActor) {
            this.msWorkspaceActor.destroy();
        }
        this.destroyed = true;
    }
    get focusedIndex() {
        return this._state.focusedIndex;
    }
    set focusedIndex(index) {
        this._state.focusedIndex = index;
        Me$7.stateManager.stateChanged();
    }
    get state() {
        this._state.msWindowList = this.tileableList
            .filter(isMsWindow)
            .filter((msWindow) => {
            return !msWindow.app.is_window_backed();
        })
            .map((msWindow) => {
            return msWindow.state;
        });
        if (this.layout) {
            this._state.layoutStateList[this._state.layoutStateList.findIndex((layoutState) => layoutState.key === this.layout.state.key)] = this.layout.state;
            this._state.layoutKey = this.layout.state.key;
        }
        if (this.msWorkspaceCategory) {
            this._state.forcedCategory = this.msWorkspaceCategory.forcedCategory;
        }
        return this._state;
    }
    get tileableFocused() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        if (!this.tileableList)
            return null;
        return this.tileableList[this.focusedIndex];
    }
    get msWindowList() {
        return Me$7.msWindowManager.msWindowList.filter((msWindow) => {
            return msWindow.msWorkspace && msWindow.msWorkspace === this;
        });
    }
    get containFullscreenWindow() {
        return this.msWindowList.some((msWindow) => {
            return msWindow.metaWindow
                ? msWindow.metaWindow.is_fullscreen()
                : false;
        });
    }
    get workspace() {
        if (this.monitorIsExternal)
            return null;
        return this.msWorkspaceManager.getWorkspaceOfMsWorkspace(this);
    }
    close() {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        Promise.all(this.msWindowList.map((msWindow) => {
            return msWindow.kill();
        })).then((_params) => {
            this.emit('readyToBeClosed');
        });
    }
    addMsWindow(msWindow, focus = false, insert = false) {
        if (!msWindow ||
            (msWindow.msWorkspace && msWindow.msWorkspace === this))
            return Promise.resolve();
        msWindow.setMsWorkspace(this);
        return this.addMsWindowUnchecked(msWindow, focus, insert);
    }
    async addMsWindowUnchecked(msWindow, focus = false, insert = false) {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        if (this.msWorkspaceActor && !msWindow.dragged) {
            reparentActor(msWindow, this.msWorkspaceActor.tileableContainer);
        }
        const oldTileableList = [...this.tileableList];
        let insertAt = this.tileableList.length - 1;
        if (insert && this.tileableFocused !== this.appLauncher) {
            insertAt = this.focusedIndex + 1;
            this.insertedMsWindow = msWindow;
        }
        this.tileableList.splice(insertAt, 0, msWindow);
        if (focus) {
            this.focusTileable(msWindow);
        }
        this.msWorkspaceActor.updateUI();
        await this.emitTileableListChangedOnce(oldTileableList);
    }
    async removeMsWindow(msWindow) {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        if (this.msWindowList.indexOf(msWindow) === -1)
            return;
        const tileableIsFocused = msWindow === this.tileableFocused;
        const tileableIndex = this.tileableList.indexOf(msWindow);
        const oldTileableList = [...this.tileableList];
        oldTileableList[tileableIndex] = null;
        this.tileableList.splice(tileableIndex, 1);
        if ((tileableIsFocused && this.insertedMsWindow) ||
            this.focusedIndex > tileableIndex) {
            this.focusedIndex--;
        }
        else if (this.focusedIndex === this.tileableList.length - 1 &&
            this.tileableList.length > 1) {
            this.focusedIndex--;
        }
        await this.emitTileableListChangedOnce(oldTileableList);
        if (tileableIsFocused) {
            this.focusTileable(this.tileableList[this.focusedIndex], true);
        }
        this.msWorkspaceActor.updateUI();
        this.refreshFocus();
    }
    async emitTileableListChangedOnce(oldTileableList) {
        if (!this.emitTileableChangedInProgress) {
            this.emitTileableChangedInProgress = new Promise((resolve) => {
                GLib$5.idle_add(GLib$5.PRIORITY_DEFAULT, () => {
                    delete this.emitTileableChangedInProgress;
                    this.emit('tileableList-changed', this.tileableList, oldTileableList);
                    resolve();
                    return GLib$5.SOURCE_REMOVE;
                });
            });
        }
        return this.emitTileableChangedInProgress;
    }
    swapTileable(firstTileable, secondTileable) {
        const firstIndex = this.tileableList.indexOf(firstTileable);
        const secondIndex = this.tileableList.indexOf(secondTileable);
        const oldTileableList = [...this.tileableList];
        this.tileableList[firstIndex] = secondTileable;
        this.tileableList[secondIndex] = firstTileable;
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }
    swapTileableLeft(tileable) {
        const index = this.tileableList.indexOf(tileable);
        if (index === -1)
            return;
        if (index > 0 && tileable != this.appLauncher) {
            const previousTileable = this.tileableList[index - 1];
            this.swapTileable(tileable, previousTileable);
            this.focusPreviousTileable();
        }
    }
    swapTileableRight(tileable) {
        const index = this.tileableList.indexOf(tileable);
        if (index === -1)
            return;
        if (index < this.tileableList.length - 1 &&
            tileable != this.appLauncher) {
            const nextTileable = this.tileableList[index + 1];
            if (nextTileable === this.appLauncher) {
                return;
            }
            this.swapTileable(tileable, nextTileable);
            this.focusNextTileable();
        }
    }
    focusNextTileable() {
        if (this.focusedIndex === this.tileableList.length - 1) {
            if (this.shouldCycleTileableNavigation()) {
                this.focusTileable(this.tileableList[0]);
                return;
            }
            return;
        }
        this.focusTileable(this.tileableList[this.focusedIndex + 1]);
    }
    focusPreviousTileable() {
        if (this.focusedIndex === 0) {
            if (this.shouldCycleTileableNavigation()) {
                this.focusTileable(this.tileableList[this.tileableList.length - 1]);
                return;
            }
            return;
        }
        this.focusTileable(this.tileableList[this.focusedIndex - 1]);
    }
    focusAppLauncher() {
        if (!this.tileableList ||
            this.tileableList.length < 2 ||
            this.tileableFocused === this.appLauncher) {
            return;
        }
        this.focusTileable(this.appLauncher);
    }
    focusPrecedentTileable() {
        if (!this.tileableList || this.tileableList.length < 2)
            return;
        if (this.focusedIndex !== this.precedentIndex &&
            this.precedentIndex < this.tileableList.length) {
            this.focusTileable(this.tileableList[this.precedentIndex]);
        }
    }
    focusTileable(tileable, forced = false) {
        if (!tileable || (tileable === this.tileableFocused && !forced)) {
            return;
        }
        if (tileable !== this.insertedMsWindow) {
            this.insertedMsWindow = null;
        }
        const oldTileableFocused = this.tileableFocused;
        if (tileable !== this.tileableFocused) {
            this.precedentIndex = this.focusedIndex;
        }
        this.focusedIndex = Math.max(this.tileableList.indexOf(tileable), 0);
        if (this.msWorkspaceManager.getActiveMsWorkspace() === this) {
            tileable.grab_key_focus();
        }
        this.emit('tileable-focus-changed', tileable, oldTileableFocused);
    }
    refreshFocus(forced = false) {
        if (this.msWorkspaceManager.getActiveMsWorkspace() !== this &&
            !forced) {
            return;
        }
        const focused = this.tileableFocused;
        if (focused !== null)
            focused.grab_key_focus();
    }
    setTileableBefore(tileableToMove, tileableRelative) {
        const oldTileableList = [...this.tileableList];
        const tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);
        const tileableRelativeIndex = this.tileableList.indexOf(tileableRelative);
        this.tileableList.splice(tileableRelativeIndex, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }
    setTileableAfter(tileableToMove, tileableRelative) {
        const oldTileableList = [...this.tileableList];
        const tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);
        const tileableRelativeIndex = this.tileableList.indexOf(tileableRelative);
        this.tileableList.splice(tileableRelativeIndex + 1, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }
    setTileableAtIndex(tileableToMove, index) {
        const oldTileableList = [...this.tileableList];
        const tileableToMoveIndex = this.tileableList.indexOf(tileableToMove);
        this.tileableList.splice(tileableToMoveIndex, 1);
        this.tileableList.splice(index, 0, tileableToMove);
        this.emit('tileableList-changed', this.tileableList, oldTileableList);
    }
    nextLayout(direction) {
        this.layout.onDestroy();
        let { key } = this.layout.constructor.state;
        if (!this.state.layoutStateList.find((layoutState) => layoutState.key === key)) {
            key = this.state.layoutStateList[0].key;
        }
        let nextIndex = this.state.layoutStateList.findIndex((layoutState) => layoutState.key === key) + direction;
        if (nextIndex < 0) {
            nextIndex += this.state.layoutStateList.length;
        }
        nextIndex = nextIndex % this.state.layoutStateList.length;
        const newLayoutState = this.state.layoutStateList[nextIndex];
        this.setLayoutByKey(newLayoutState.key);
    }
    setLayoutByKey(layoutKey) {
        logAssert(!this.destroyed, 'Workspace is destroyed');
        if (this.layout) {
            this.layout.onDestroy();
        }
        const Layout = Me$7.layoutManager.getLayoutByKey(layoutKey);
        this.layout = new Layout(this, this.state.layoutStateList.find((layoutState) => layoutState.key === layoutKey));
        this.msWorkspaceActor.tileableContainer.set_layout_manager(this.layout);
        this.emit('tiling-layout-changed');
    }
    shouldPanelBeVisible() {
        return !this.containFullscreenWindow &&
            this.msWorkspaceManager &&
            Me$7.layout
            ? Me$7.layout.panelsVisible
            : true;
    }
    shouldCycleTileableNavigation() {
        return getSettings('tweaks').get_boolean('cycle-through-windows');
    }
    setApps(apps) {
        this.apps = apps;
        this.categorizedAppCard._loadApps(apps);
    }
    isDisplayed() {
        if (this.monitorIsExternal) {
            return true;
        }
        else {
            return (this === this.msWorkspaceManager.getActivePrimaryMsWorkspace());
        }
    }
    activate() {
        const workspace = this.workspace;
        if (workspace === null)
            return;
        if (this.tileableFocused instanceof MsWindow &&
            this.tileableFocused.metaWindow &&
            !this.tileableFocused.dragged) {
            workspace.activate_with_focus(this.tileableFocused.metaWindow, global.get_current_time());
        }
        else {
            workspace.activate(global.get_current_time());
        }
    }
    focusLastTileable() {
        if (this.tileableList.length) {
            const lastTileable = this.tileableList[this.focusedIndex] ||
                this.tileableList.slice(-1)[0];
            this.focusTileable(lastTileable);
        }
        else {
        }
    }
    setMonitor(monitor) {
        this.monitor = monitor;
        this.monitorIsExternal =
            monitor.index !== Main$4.layoutManager.primaryIndex;
        this.msWindowList.forEach((msWindow) => {
            msWindow.setMsWorkspace(this);
        });
    }
}
let MsWorkspaceActor = class MsWorkspaceActor extends Clutter$3.Actor {
    _init(msWorkspace) {
        super._init({
            clip_to_allocation: true,
            x_expand: true,
            y_expand: true,
        });
        this.msWorkspace = msWorkspace;
        this.tileableContainer = new Clutter$3.Actor({});
        this.panel = new HorizontalPanel(msWorkspace);
        this.add_child(this.tileableContainer);
        this.add_child(this.panel);
        this.updateUI();
    }
    updateUI() {
        const monitorInFullScreen = global.display.get_monitor_in_fullscreen(this.msWorkspace.monitor.index);
        if (this.panel) {
            this.panel.visible =
                this.msWorkspace.shouldPanelBeVisible() && !monitorInFullScreen;
        }
        this.visible = !monitorInFullScreen;
    }
    vfunc_allocate(box, flags) {
        SetAllocation(this, box, flags);
        const contentBox = new Clutter$3.ActorBox();
        contentBox.x2 = box.get_width();
        contentBox.y2 = box.get_height();
        const panelPosition = Me$7.msThemeManager.horizontalPanelPosition;
        const panelHeight = this.panel.get_preferred_height(-1)[1];
        const panelBox = new Clutter$3.ActorBox();
        panelBox.x1 = contentBox.x1;
        panelBox.x2 = contentBox.x2;
        panelBox.y1 =
            panelPosition === HorizontalPanelPositionEnum.TOP
                ? contentBox.y1
                : contentBox.y2 - panelHeight;
        panelBox.y2 = panelBox.y1 + panelHeight;
        Allocate(this.panel, panelBox, flags);
        const containerBox = new Clutter$3.ActorBox();
        containerBox.x1 = contentBox.x1;
        containerBox.x2 = contentBox.x2;
        containerBox.y1 = contentBox.y1;
        containerBox.y2 = contentBox.y2;
        if (this.panel && this.panel.visible) {
            if (panelPosition === HorizontalPanelPositionEnum.TOP) {
                containerBox.y1 = containerBox.y1 + panelHeight;
            }
            else {
                containerBox.y2 = containerBox.y2 - panelHeight;
            }
        }
        Allocate(this.tileableContainer, containerBox, flags);
        this.get_children()
            .filter((actor) => [this.panel, this.tileableContainer].indexOf(actor) === -1)
            .forEach((actor) => {
            Allocate(actor, containerBox, flags);
        });
    }
};
MsWorkspaceActor.metaInfo = {
    GTypeName: 'MsWorkspaceActor',
};
MsWorkspaceActor = __decorate([
    registerGObjectClass
], MsWorkspaceActor);

function isNonNull(x) {
    return x !== null;
}

const Clutter$2 = imports.gi.Clutter;
const GLib$4 = imports.gi.GLib;
const Meta$1 = imports.gi.Meta;
const Shell = imports.gi.Shell;
const Main$3 = imports.ui.main;
const Me$6 = imports.misc.extensionUtils.getCurrentExtension();
const { WorkspaceTracker } = imports.ui.windowManager;
class MsWorkspaceManager extends MsManager {
    constructor(state = {}) {
        super();
        this.workspaceManager = global.workspace_manager;
        this._state = Object.assign({
            msWorkspaceList: [],
            primaryWorkspaceActiveIndex: this.workspaceManager.get_active_workspace_index(),
        }, state);
        this.windowTracker = Shell.WindowTracker.get_default();
        this.msWorkspaceList = [];
        this.settings = getSettings('tweaks');
        this.metaWindowFocused = null;
        this.numOfMonitors = global.display.get_n_monitors();
        this.primaryIndex = global.display.get_primary_monitor();
        this.workspaceTracker = Main$3.wm._workspaceTracker;
        WorkspaceTracker.prototype._oldCheckWorkspaces =
            WorkspaceTracker.prototype._checkWorkspaces;
        WorkspaceTracker.prototype._checkWorkspaces = function () {
            const workspaceManager = global.workspace_manager;
            let i;
            const emptyWorkspaces = [];
            if (!Meta$1.prefs_get_dynamic_workspaces()) {
                this._checkWorkspacesId = 0;
                const msWorkspaceManager = global.ms.msWorkspaceManager;
                while (workspaceManager.get_n_workspaces() <
                    msWorkspaceManager.primaryMsWorkspaces.length) {
                    const workspaceIndex = msWorkspaceManager.msWorkspaceList.indexOf(msWorkspaceManager.primaryMsWorkspaces[msWorkspaceManager.primaryMsWorkspaces.length - 1]);
                    msWorkspaceManager.removeMsWorkspaceAtIndex(workspaceIndex);
                }
                return false;
            }
            if (this._pauseWorkspaceCheck)
                return true;
            for (i = 0; i < this._workspaces.length; i++) {
                const lastRemoved = this._workspaces[i]._lastRemovedWindow;
                if ((lastRemoved &&
                    (lastRemoved.get_window_type() ==
                        Meta$1.WindowType.SPLASHSCREEN ||
                        lastRemoved.get_window_type() ==
                            Meta$1.WindowType.DIALOG ||
                        lastRemoved.get_window_type() ==
                            Meta$1.WindowType.MODAL_DIALOG)) ||
                    this._workspaces[i]._keepAliveId)
                    emptyWorkspaces[i] = false;
                else
                    emptyWorkspaces[i] = true;
            }
            const sequences = Shell.WindowTracker.get_default().get_startup_sequences();
            for (i = 0; i < sequences.length; i++) {
                const index = sequences[i].get_workspace();
                if (index >= 0 && index <= workspaceManager.n_workspaces)
                    emptyWorkspaces[index] = false;
            }
            const msWindowList = global.ms.msWindowManager.msWindowList;
            for (i = 0; i < msWindowList.length; i++) {
                const msWindow = msWindowList[i];
                if (msWindow.msWorkspace.monitor !=
                    Main$3.layoutManager.primaryMonitor)
                    continue;
                const workspace = global.ms.msWorkspaceManager.getWorkspaceOfMsWorkspace(msWindow.msWorkspace);
                assert(workspace !== null, 'Workspace does not exist');
                emptyWorkspaces[workspace.index()] = false;
            }
            if (!emptyWorkspaces[emptyWorkspaces.length - 1]) {
                workspaceManager.append_new_workspace(false, global.get_current_time());
                emptyWorkspaces.push(true);
            }
            const lastIndex = emptyWorkspaces.length - 1;
            const lastEmptyIndex = emptyWorkspaces.lastIndexOf(false) + 1;
            const activeWorkspaceIndex = workspaceManager.get_active_workspace_index();
            emptyWorkspaces[activeWorkspaceIndex] = false;
            for (i = lastIndex; i >= 0; i--) {
                if (emptyWorkspaces[i] && i != lastEmptyIndex) {
                    workspaceManager.remove_workspace(this._workspaces[i], global.get_current_time());
                }
            }
            this._checkWorkspacesId = 0;
            return false;
        };
        if (this.workspaceTracker._checkWorkspacesId !== 0) {
            Meta$1.later_remove(this.workspaceTracker._checkWorkspacesId);
            this.workspaceTracker._queueCheckWorkspaces();
        }
        this.observe(Main$3.layoutManager, 'monitors-changed', () => {
            this.onMonitorsChanged();
        });
        this.observe(Me$6.msWindowManager.msFocusManager, 'focus-changed', (_, msWindow) => {
            if (msWindow && msWindow.msWorkspace) {
                msWindow.msWorkspace.focusTileable(msWindow);
            }
        });
        this.observe(global.display, 'window-entered-monitor', (display, monitorIndex, window) => {
            this.windowEnteredMonitor(window, monitorIndex);
        });
        this.observe(this.workspaceManager, 'workspace-added', (_, workspaceIndex) => {
            if (this.restoringState)
                return;
            const workspace = this.workspaceManager.get_workspace_by_index(workspaceIndex);
            assert(workspace !== null, 'Workspace does not exist');
            this.setupNewWorkspace(workspace);
        });
        this.observe(this.workspaceManager, 'workspace-removed', (_, workspaceIndex) => {
            this.removeMsWorkspaceAtIndex(workspaceIndex);
        });
        this.observe(global.window_manager, 'switch-workspace', (_, from, to) => {
            if (!this.restoringState) {
                this.emit('switch-workspace', from, to);
                this.stateChanged();
            }
        });
    }
    init() {
        this.refreshMsWorkspaceUI();
    }
    destroy() {
        super.destroy();
        WorkspaceTracker.prototype._checkWorkspaces =
            WorkspaceTracker.prototype._oldCheckWorkspaces;
        delete WorkspaceTracker.prototype._oldCheckWorkspaces;
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            const workspace = this.workspaceManager.get_workspace_by_index(i);
            delete workspace._keepAliveId;
        }
        for (const msWorkspace of this.msWorkspaceList) {
            msWorkspace.destroy();
        }
    }
    get updatingMonitors() {
        return (this._updatingMonitors ||
            global.display.get_n_monitors() !== this.numOfMonitors ||
            this.primaryIndex !== global.display.get_primary_monitor());
    }
    initState() {
        Main$3.layoutManager.monitors
            .filter((monitor) => monitor != Main$3.layoutManager.primaryMonitor)
            .forEach((monitor) => {
            this.createNewMsWorkspace(monitor);
        });
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            if (!this.primaryMsWorkspaces[i]) {
                const workspace = this.workspaceManager.get_workspace_by_index(i);
                assert(workspace !== null, 'Workspace does not exist');
                this.setupNewWorkspace(workspace);
            }
        }
    }
    restorePreviousState() {
        this.restoringState = true;
        this.removeEmptyWorkspaces();
        const msWorkspaceListToRestore = [...this._state.msWorkspaceList];
        Main$3.layoutManager.monitors
            .filter((monitor) => monitor != Main$3.layoutManager.primaryMonitor)
            .forEach((monitor) => {
            const firstExternalStateIndex = msWorkspaceListToRestore.findIndex((msWorkspaceState) => msWorkspaceState.external);
            this.createNewMsWorkspace(monitor, firstExternalStateIndex > -1
                ? msWorkspaceListToRestore.splice(firstExternalStateIndex, 1)[0]
                : undefined);
        });
        if (msWorkspaceListToRestore.length) {
            msWorkspaceListToRestore.forEach((msWorkspaceState, index) => {
                const workspace = this.workspaceManager.get_workspace_by_index(index) ||
                    this.workspaceManager.append_new_workspace(false, global.get_current_time());
                this.setupNewWorkspace(workspace, msWorkspaceState);
            });
        }
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            if (!this.primaryMsWorkspaces[i]) {
                const workspace = this.workspaceManager.get_workspace_by_index(i);
                assert(workspace !== null, 'Workspace does not exist');
                this.setupNewWorkspace(workspace);
            }
        }
        if (Meta$1.prefs_get_dynamic_workspaces()) {
            const workspace = this.workspaceManager.append_new_workspace(false, global.get_current_time());
            this.setupNewWorkspace(workspace);
        }
        if (this._state && this._state.primaryWorkspaceActiveIndex) {
            const savedIndex = this._state.primaryWorkspaceActiveIndex;
            if (savedIndex &&
                savedIndex >= 0 &&
                savedIndex < this.workspaceManager.n_workspaces) {
                const workspace = this.workspaceManager.get_workspace_by_index(savedIndex);
                assert(workspace !== null, 'Workspace does not exist');
                workspace.activate(global.get_current_time());
            }
        }
        delete this.restoringState;
    }
    removeEmptyWorkspaces() {
        const emptyWorkspacesSlots = [];
        for (let i = 0; i < this.workspaceManager.n_workspaces; i++) {
            emptyWorkspacesSlots[i] = true;
        }
        const windows = global.get_window_actors();
        for (let i = 0; i < windows.length; i++) {
            const actor = windows[i];
            const win = actor.get_meta_window();
            if (win.is_on_all_workspaces())
                continue;
            const workspaceIndex = win.get_workspace().index();
            emptyWorkspacesSlots[workspaceIndex] = false;
        }
        const emptyWorkspaces = emptyWorkspacesSlots
            .map((empty, index) => {
            return empty
                ? this.workspaceManager.get_workspace_by_index(index)
                : null;
        })
            .filter(isNonNull);
        emptyWorkspaces.forEach((workspace) => {
            this.workspaceManager.remove_workspace(workspace, global.get_current_time());
        });
    }
    onMonitorsChanged() {
        this._updatingMonitors = true;
        this.numOfMonitors = global.display.get_n_monitors();
        this.primaryIndex = global.display.get_primary_monitor();
        const externalMonitors = Main$3.layoutManager.monitors.filter((monitor) => monitor != Main$3.layoutManager.primaryMonitor);
        externalMonitors.forEach((externalMonitor) => {
            const msWorkspace = this.msWorkspaceList.find((msWorkspace) => {
                return (msWorkspace.state.external &&
                    !Main$3.layoutManager.monitors.includes(msWorkspace.monitor));
            });
            if (msWorkspace) {
                const workspace = this.getWorkspaceOfMsWorkspace(msWorkspace);
                msWorkspace.setMonitor(externalMonitor);
                if (!Meta$1.prefs_get_dynamic_workspaces()) {
                    this.workspaceManager.remove_workspace(workspace, global.get_current_time());
                }
            }
            else {
                this.createNewMsWorkspace(externalMonitor);
            }
        });
        this.msWorkspaceList
            .filter((msWorkspace) => !Main$3.layoutManager.monitors.includes(msWorkspace.monitor))
            .forEach((msWorkspace) => {
            if (!msWorkspace.monitorIsExternal) {
                msWorkspace.setMonitor(Main$3.layoutManager.primaryMonitor);
            }
            else {
                const monitorIsNowPrimary = msWorkspace.monitor ===
                    Main$3.layoutManager.primaryMonitor;
                const needToReplaceMonitor = monitorIsNowPrimary ||
                    !Main$3.layoutManager.monitors.includes(msWorkspace.monitor);
                const availableMonitor = Main$3.layoutManager.monitors.find((monitor) => {
                    return (monitor != Main$3.layoutManager.primaryMonitor &&
                        !this.msWorkspaceList.find((msWorkspace) => {
                            return msWorkspace.monitor === monitor;
                        }));
                });
                if (needToReplaceMonitor && availableMonitor) {
                    msWorkspace.setMonitor(availableMonitor);
                }
                else {
                    this.msWorkspaceList.splice(this.msWorkspaceList.indexOf(msWorkspace), 1);
                    if (Meta$1.prefs_get_dynamic_workspaces()) {
                        this.msWorkspaceList.splice(this.msWorkspaceList.indexOf(this.primaryMsWorkspaces[this.primaryMsWorkspaces.length - 1]), 1, msWorkspace);
                    }
                    else {
                        this.restoringState = true;
                        this.workspaceManager.append_new_workspace(false, global.get_current_time());
                        this.msWorkspaceList.push(msWorkspace);
                        this.restoringState = false;
                    }
                    msWorkspace.setMonitor(Main$3.layoutManager.primaryMonitor);
                }
            }
        });
        this._updatingMonitors = false;
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }
    get primaryMsWorkspaces() {
        if (!this.msWorkspaceList)
            return [];
        return this.msWorkspaceList.filter((msWorkspace) => {
            return !msWorkspace.monitorIsExternal;
        });
    }
    setupNewWorkspace(workspace, initialState) {
        this.createNewMsWorkspace(Main$3.layoutManager.primaryMonitor, initialState);
        this.observe(workspace, 'window-added', (workspace, window) => {
            this.metaWindowEnteredWorkspace(window, workspace);
        });
    }
    createNewMsWorkspace(monitor, initialState) {
        const msWorkspace = new MsWorkspace(this, monitor, initialState);
        msWorkspace.connect('tileableList-changed', (_) => {
            this.stateChanged();
        });
        msWorkspace.connect('tiling-layout-changed', (_) => {
            Me$6.stateManager.stateChanged();
        });
        msWorkspace.connect('readyToBeClosed', () => {
            const index = this.primaryMsWorkspaces.indexOf(msWorkspace);
            if (this.getActivePrimaryMsWorkspace() === msWorkspace &&
                !msWorkspace.msWindowList.length) {
                if (this.primaryMsWorkspaces[index - 1]) {
                    this.primaryMsWorkspaces[index - 1].activate();
                }
                else if (this.primaryMsWorkspaces[index + 1]) {
                    this.primaryMsWorkspaces[index + 1].activate();
                }
            }
        });
        this.msWorkspaceList.push(msWorkspace);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }
    removeMsWorkspaceAtIndex(index) {
        const msWorkspaceToDelete = this.primaryMsWorkspaces[index];
        if (msWorkspaceToDelete) {
            const globalIndex = this.msWorkspaceList.indexOf(msWorkspaceToDelete);
            this.msWorkspaceList.splice(globalIndex, 1);
            msWorkspaceToDelete.destroy();
            this.stateChanged();
            this.emit('dynamic-super-workspaces-changed');
        }
    }
    stateChanged() {
        if (this.restoringState ||
            this.updatingMonitors ||
            this.stateChangedTriggered)
            return;
        this.stateChangedTriggered = true;
        GLib$4.idle_add(GLib$4.PRIORITY_DEFAULT, () => {
            this.workspaceTracker._checkWorkspaces();
            Me$6.stateManager.stateChanged();
            this.stateChangedTriggered = false;
            return GLib$4.SOURCE_REMOVE;
        });
    }
    setMsWorkspaceAt(msWorkspaceToMove, toIndex) {
        const sourceIndex = this.msWorkspaceList.indexOf(msWorkspaceToMove);
        const realIndex = this.msWorkspaceList.indexOf(this.primaryMsWorkspaces[toIndex]);
        const workspace = this.workspaceManager.get_workspace_by_index(this.primaryMsWorkspaces.indexOf(msWorkspaceToMove));
        assert(workspace !== null, 'Workspace does not exist');
        this.workspaceManager.reorder_workspace(workspace, toIndex);
        this.msWorkspaceList.splice(sourceIndex, 1);
        this.msWorkspaceList.splice(realIndex, 0, msWorkspaceToMove);
        this.stateChanged();
        this.emit('dynamic-super-workspaces-changed');
    }
    get state() {
        let msWorkspaceList = this.msWorkspaceList;
        if (Meta$1.prefs_get_dynamic_workspaces()) {
            msWorkspaceList = msWorkspaceList.filter((msWorkspace) => {
                return msWorkspace.msWindowList.length;
            });
        }
        this._state.msWorkspaceList = msWorkspaceList.map((msWorkspace) => {
            return msWorkspace.state;
        });
        this._state.primaryWorkspaceActiveIndex = this.workspaceManager.get_active_workspace_index();
        return this._state;
    }
    refreshMsWorkspaceUI() {
        this.msWorkspaceList.forEach((msWorkspace) => {
            msWorkspace.msWorkspaceActor.updateUI();
        });
    }
    getActiveMsWorkspace() {
        const currentMonitorIndex = global.display.get_current_monitor();
        const activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        const msWorkspace = currentMonitorIndex === Main$3.layoutManager.primaryIndex
            ? this.primaryMsWorkspaces[activeWorkspaceIndex]
            : Me$6.msWorkspaceManager.getMsWorkspacesOfMonitorIndex(currentMonitorIndex)[0];
        return msWorkspace;
    }
    getActivePrimaryMsWorkspace() {
        const activeWorkspaceIndex = this.workspaceManager.get_active_workspace_index();
        return this.primaryMsWorkspaces[activeWorkspaceIndex];
    }
    getWorkspaceOfMsWorkspace(msWorkspace) {
        return this.workspaceManager.get_workspace_by_index(this.primaryMsWorkspaces.indexOf(msWorkspace));
    }
    getActiveMsWorkspaceOfMonitor(monitorIndex) {
        if (monitorIndex === Main$3.layoutManager.primaryIndex) {
            return this.getActivePrimaryMsWorkspace();
        }
        else {
            return this.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];
        }
    }
    getMsWorkspacesOfMonitorIndex(monitorIndex) {
        return this.msWorkspaceList.filter((msWorkspace) => {
            return msWorkspace.monitor.index === monitorIndex;
        });
    }
    getMsWorkspaceOfMetaWindow(metaWindow) {
        const windowMonitorIndex = metaWindow.get_monitor();
        if (windowMonitorIndex !== Main$3.layoutManager.primaryIndex) {
            return this.getMsWorkspacesOfMonitorIndex(windowMonitorIndex)[0];
        }
        else {
            return this.primaryMsWorkspaces[metaWindow.get_workspace().index()];
        }
    }
    getMsWorkspaceOfMsWindow(msWindow) {
        return this.msWorkspaceList.find((msWorkspace) => {
            return msWorkspace.msWindowList.includes(msWindow);
        });
    }
    determineAppropriateMsWorkspace(metaWindow) {
        const windowMonitorIndex = metaWindow.get_monitor();
        const currentWindowWorkspace = metaWindow.get_workspace();
        if (windowMonitorIndex !== Main$3.layoutManager.primaryIndex) {
            return this.getMsWorkspacesOfMonitorIndex(windowMonitorIndex)[0];
        }
        else {
            return this.primaryMsWorkspaces[currentWindowWorkspace.index()];
        }
    }
    metaWindowEnteredWorkspace(metaWindow, workspace) {
        if (this.updatingMonitors ||
            !metaWindow.get_compositor_private())
            return;
        const msWindow = metaWindow.msWindow;
        if (!msWindow)
            return;
        const msWorkspace = this.primaryMsWorkspaces[workspace.index()];
        if (metaWindow.on_all_workspaces ||
            msWindow.msWorkspace === msWorkspace) {
            return;
        }
        assert(metaWindow.createdAt !== undefined, "Can't tell when this window was created");
        if (msWindow.msWorkspace &&
            msWindow.msWorkspace.workspace &&
            msWindow.msWorkspace != msWorkspace &&
            global.display.get_current_time_roundtrip() - metaWindow.createdAt <
                2000) {
            return metaWindow.change_workspace(msWindow.msWorkspace.workspace);
        }
        this.setWindowToMsWorkspace(msWindow, msWorkspace);
    }
    windowEnteredMonitor(metaWindow, monitorIndex) {
        if (this.updatingMonitors)
            return;
        const currentMsWorkspaceOfMetaWindow = metaWindow.msWindow
            ? metaWindow.msWindow.msWorkspace
            : null;
        const msWorkspace = this.getMsWorkspacesOfMonitorIndex(monitorIndex)[0];
        if (!metaWindow.handledByMaterialShell ||
            global.display.get_n_monitors() !== this.numOfMonitors ||
            currentMsWorkspaceOfMetaWindow === msWorkspace ||
            monitorIndex === Main$3.layoutManager.primaryIndex) {
            return;
        }
        if (!msWorkspace || !metaWindow.msWindow) {
            return;
        }
        this.setWindowToMsWorkspace(metaWindow.msWindow, msWorkspace);
    }
    setWindowToMsWorkspace(msWindow, newMsWorkspace, insert = false) {
        const oldMsWorkspace = msWindow.msWorkspace;
        if (oldMsWorkspace) {
            if (oldMsWorkspace === newMsWorkspace) {
                return;
            }
            else {
                oldMsWorkspace.removeMsWindow(msWindow);
            }
        }
        newMsWorkspace.addMsWindow(msWindow, true, insert);
        this.stateChanged();
    }
    shouldCycleWorkspacesNavigation() {
        return getSettings('tweaks').get_boolean('cycle-through-workspaces');
    }
    _handleWindow(metaWindow) {
        const meta = Meta$1.WindowType;
        const types = [
            meta.NORMAL,
            meta.DIALOG,
            meta.MODAL_DIALOG,
            meta.UTILITY,
        ];
        return types.includes(metaWindow.window_type);
    }
    activateNextMsWorkspace() {
        const currentIndex = this.workspaceManager.get_active_workspace_index();
        if (currentIndex < this.workspaceManager.n_workspaces - 1) {
            this.primaryMsWorkspaces[currentIndex + 1].activate();
            return;
        }
        if (this.shouldCycleWorkspacesNavigation()) {
            this.primaryMsWorkspaces[0].activate();
        }
    }
    activatePreviousMsWorkspace() {
        const currentIndex = this.workspaceManager.get_active_workspace_index();
        if (currentIndex > 0) {
            this.primaryMsWorkspaces[currentIndex - 1].activate();
            return;
        }
        if (this.shouldCycleWorkspacesNavigation()) {
            this.primaryMsWorkspaces[this.workspaceManager.n_workspaces - 1].activate();
        }
    }
    focusMsWorkspace(msWorkspace) {
        if (!msWorkspace)
            return;
        const backend = Clutter$2.get_default_backend();
        const seat = backend.get_default_seat();
        const [containerX, containerY,] = msWorkspace.msWorkspaceActor.tileableContainer.get_transformed_position();
        seat.warp_pointer(containerX +
            Math.floor(msWorkspace.msWorkspaceActor.tileableContainer.width / 2), containerY +
            Math.floor(msWorkspace.msWorkspaceActor.tileableContainer.height / 2));
        msWorkspace.refreshFocus();
    }
}

const Me$5 = imports.misc.extensionUtils.getCurrentExtension();
const Gio$2 = imports.gi.Gio;
const GLib$3 = imports.gi.GLib;
const FileTest = GLib$3.FileTest;
const REGISTRY_PATH = `${GLib$3.get_user_cache_dir()}/${Me$5.uuid}-state.json`;
const REGISTRY_NEXT_PATH = `${GLib$3.get_user_cache_dir()}/${Me$5.uuid}-state-next.json`;
class StateManager {
    constructor() {
        this.state = {};
        this.stateFile = Gio$2.file_new_for_path(REGISTRY_PATH);
    }
    loadRegistry(callback) {
        if (typeof callback !== 'function')
            throw TypeError('`callback` must be a function');
        const serializedState = global.get_persistent_state('s', 'material-shell-state');
        if (serializedState) {
            try {
                this.state = this.updateState(JSON.parse(serializedState.deep_unpack()));
            }
            catch (e) {
                this.state = {};
            }
            return callback(this.state);
        }
        if (GLib$3.file_test(REGISTRY_PATH, FileTest.EXISTS)) {
            this.stateFile.load_contents_async(null, (obj, res) => {
                const file = obj;
                const [success, contents] = file.load_contents_finish(res);
                if (success) {
                    try {
                        this.state = this.updateState(JSON.parse(imports.byteArray.toString(contents)));
                    }
                    catch (e) {
                        Me$5.log(e);
                        this.state = {};
                    }
                }
                callback(this.state);
            });
        }
        else {
            this.state = {};
            callback(this.state);
        }
    }
    updateState(state) {
        if (state) {
            const workspacesState = state['workspaces-state'];
            if (workspacesState) {
                workspacesState.msWorkspaceList = workspacesState.msWorkspaceList || [
                    ...workspacesState.primaryWorkspaceList,
                    ...workspacesState.externalWorkspaces,
                ];
                workspacesState.msWorkspaceList.map((msWorkspaceState) => {
                    msWorkspaceState.layoutKey =
                        msWorkspaceState.layoutKey ||
                            msWorkspaceState.tilingLayout;
                    delete msWorkspaceState.tilingLayout;
                    return msWorkspaceState;
                });
            }
        }
        return state;
    }
    saveRegistry() {
        const json = JSON.stringify(this.state);
        global.set_persistent_state('material-shell-state', GLib$3.Variant.new_string(json));
    }
    getState(key) {
        return this.state[key];
    }
    setState(key, value) {
        if (value === undefined) {
            delete this.state[key];
        }
        else {
            this.state[key] = value;
        }
        this.saveRegistry();
    }
    stateChanged() {
        if (!Me$5.loaded ||
            Me$5.msWorkspaceManager.updatingMonitors ||
            this.stateChangedTriggered ||
            Me$5.disableInProgress)
            return;
        this.stateChangedTriggered = true;
        GLib$3.idle_add(GLib$3.PRIORITY_DEFAULT, () => {
            this.saveCurrentState();
            this.stateChangedTriggered = false;
            return GLib$3.SOURCE_REMOVE;
        });
    }
    saveCurrentState() {
        if (!Me$5.loaded || Me$5.disableInProgress)
            return;
        if (getSettings('tweaks').get_boolean('enable-persistence')) {
            this.setState('workspaces-state', Me$5.msWorkspaceManager.state);
        }
    }
    destroy() { }
}

const St$1 = imports.gi.St;
const Clutter$1 = imports.gi.Clutter;
const Main$2 = imports.ui.main;
const Me$4 = imports.misc.extensionUtils.getCurrentExtension();
const GLib$2 = imports.gi.GLib;
class TooltipManager extends MsManager {
    constructor() {
        super();
    }
    add(actor, params = {}) {
        let actorDestroyed = false;
        actor.set_reactive(true);
        const tooltipCallback = () => {
            let tooltip;
            let left = false;
            let timeoutId;
            const leaveCallback = () => {
                left = true;
                if (tooltip) {
                    tooltip.remove();
                    tooltip = null;
                }
                if (timeoutId) {
                    GLib$2.source_remove(timeoutId);
                    timeoutId = 0;
                }
                if (!actorDestroyed) {
                    actor.disconnect(leaveId);
                    actor.disconnect(destroyId);
                }
                global.stage.disconnect(deactivateId);
            };
            const leaveId = actor.connect('leave-event', leaveCallback);
            const destroyId = actor.connect('destroy', () => {
                actorDestroyed = true;
                leaveCallback();
            });
            const deactivateId = global.stage.connect('deactivate', leaveCallback);
            timeoutId = GLib$2.timeout_add(GLib$2.PRIORITY_DEFAULT, 200, () => {
                timeoutId = 0;
                if (!left) {
                    tooltip = this.createTooltip(actor, params);
                }
                return GLib$2.SOURCE_REMOVE;
            });
        };
        this.observe(actor, 'enter-event', tooltipCallback);
    }
    createTooltip(actor, params) {
        let actorText;
        if (actor instanceof St$1.Label || actor instanceof Clutter$1.Text) {
            const clutterText = actor instanceof St$1.Label
                ? actor.get_clutter_text()
                : actor;
            if (clutterText.get_layout().is_ellipsized()) {
                actorText = clutterText.get_text();
            }
        }
        if (actorText)
            params.text = actorText;
        if (!params.text) {
            return;
        }
        const tooltip = new MatTooltip(actor, params);
        Main$2.layoutManager.addChrome(tooltip);
        tooltip.show();
        return tooltip;
    }
}
var TooltipSide;
(function (TooltipSide) {
    TooltipSide[TooltipSide["LEFT"] = 0] = "LEFT";
    TooltipSide[TooltipSide["TOP"] = 1] = "TOP";
    TooltipSide[TooltipSide["RIGHT"] = 2] = "RIGHT";
    TooltipSide[TooltipSide["BOTTOM"] = 3] = "BOTTOM";
})(TooltipSide || (TooltipSide = {}));
let MatTooltip = class MatTooltip extends St$1.Label {
    _init(sourceActor, params = {}) {
        const allParams = Object.assign({
            text: '',
            relativeActor: null,
            offsetX: 0,
            offsetY: 0,
            side: TooltipSide.BOTTOM,
        }, params);
        super._init({
            text: allParams.text,
            opacity: 0,
            scale_x: 0.8,
            scale_y: 0.8,
            y_align: Clutter$1.ActorAlign.CENTER,
        });
        this.set_pivot_point(0.5, 0.5);
        this.params = allParams;
        this.get_clutter_text().y_align = Clutter$1.ActorAlign.CENTER;
        this.sourceActor = sourceActor;
    }
    show() {
        this.ease({
            opacity: 255,
            scale_x: 1,
            scale_y: 1,
            duration: 300,
        });
    }
    remove() {
        this.ease({
            opacity: 0,
            duration: 500,
            onComplete: () => {
                Main$2.layoutManager.removeChrome(this);
                this.destroy();
            },
        });
    }
    vfunc_allocate(...args) {
        const relativeActor = this.params.relativeActor || this.sourceActor;
        const [stageX, stageY] = relativeActor.get_transformed_position();
        let x, y;
        switch (this.params.side) {
            case TooltipSide.LEFT:
                x = stageX - this.get_width();
                y =
                    stageY +
                        relativeActor.get_height() / 2 -
                        this.get_height() / 2;
                break;
            case TooltipSide.TOP:
                x =
                    stageX +
                        relativeActor.get_width() / 2 -
                        this.get_width() / 2;
                y = stageY - this.get_height();
                break;
            case TooltipSide.RIGHT:
                x = stageX + relativeActor.get_width();
                y =
                    stageY +
                        relativeActor.get_height() / 2 -
                        this.get_height() / 2;
                break;
            case TooltipSide.BOTTOM:
                x =
                    stageX +
                        relativeActor.get_width() / 2 -
                        this.get_width() / 2;
                y = stageY + relativeActor.get_height();
                break;
        }
        GLib$2.idle_add(GLib$2.PRIORITY_DEFAULT_IDLE, () => {
            this.set_position(Math.max(Math.round(x + this.params.offsetX), 0), Math.max(Math.round(y + this.params.offsetY), 0));
            return GLib$2.SOURCE_REMOVE;
        });
        super.vfunc_allocate(...args);
    }
};
MatTooltip.metaInfo = {
    GTypeName: 'MatTooltip',
};
MatTooltip = __decorate([
    registerGObjectClass
], MatTooltip);

const Main$1 = imports.ui.main;
const { ExtensionManager, ENABLED_EXTENSIONS_KEY } = imports.ui.extensionSystem;
const Me$3 = imports.misc.extensionUtils.getCurrentExtension();
const incompatibleExtensions = [
    'desktop-icons@csoriano',
    'ubuntu-dock@ubuntu.com',
    'dash-to-dock@micxgx.gmail.com',
    'ding@rastersoft.com',
];
let originalFunction;
class DisableIncompatibleExtensionsModule {
    constructor() {
        originalFunction = ExtensionManager.prototype._callExtensionEnable;
        ExtensionManager.prototype._callExtensionEnable = function (...args) {
            const uuid = args[0];
            if (incompatibleExtensions.includes(uuid))
                return;
            originalFunction.apply(this, arguments);
        };
        this.disableExtensions();
    }
    disableExtensions() {
        for (const incompatibleExtension of incompatibleExtensions) {
            const extension = Main$1.extensionManager.lookup(incompatibleExtension);
            if (extension) {
                try {
                    extension.stateObj.disable();
                }
                catch (e) {
                    Me$3.logFocus('disable error', incompatibleExtension, e);
                }
            }
        }
    }
    destroy() {
        ExtensionManager.prototype._callExtensionEnable = originalFunction;
        originalFunction = null;
    }
}

const Meta = imports.gi.Meta;
const { WindowManager } = imports.ui.windowManager;
class OverrideModule {
    constructor() {
        this.windowManagersFunctionToRestore = [];
        this.overrideWindowManagerFunctions();
        this.orignalMetaWorkspaceOnPrimary =
            Meta.prefs_get_workspaces_only_on_primary;
        Meta.prefs_get_workspaces_only_on_primary = () => true;
    }
    destroy() {
        this.restoreWindowManagersFunctions();
        Meta.prefs_get_workspaces_only_on_primary = this.orignalMetaWorkspaceOnPrimary;
    }
    overrideWindowManagerFunctions() {
        this.windowManagersFunctionToRestore = [];
        const _shouldAnimate = WindowManager.prototype._shouldAnimate;
        WindowManager.prototype._shouldAnimate = function (_actor, _types) {
            return false;
        };
        this.windowManagersFunctionToRestore.push([
            WindowManager.prototype._shouldAnimate,
            _shouldAnimate,
        ]);
    }
    restoreWindowManagersFunctions() {
        this.windowManagersFunctionToRestore.forEach((functions) => {
            functions[0] = functions[1];
        });
    }
}

const Gio$1 = imports.gi.Gio;
const Me$2 = imports.misc.extensionUtils.getCurrentExtension();
class RequiredSettingsModule {
    constructor() {
        this.mutterSettings = new Gio$1.Settings({
            schema_id: 'org.gnome.mutter',
        });
        this.settingsToForce = [
            {
                schema: 'org.gnome.mutter',
                key: 'workspaces-only-on-primary',
                value: true,
                valueType: 'boolean',
            },
            {
                schema: 'org.gnome.desktop.wm.preferences',
                key: 'button-layout',
                value: 'appmenu:close',
                valueType: 'string',
            },
        ];
        this.signals = [];
        this.settingsToRestore = [];
        this.settingsToForce.forEach((settingToForce) => {
            const setting = new Gio$1.Settings({
                schema_id: settingToForce.schema,
            });
            this.setValueIfDifferent(setting, settingToForce.key, settingToForce.value, settingToForce.valueType);
            const id = setting.connect(`changed::${settingToForce.key}`, () => {
                this.setValueIfDifferent(setting, settingToForce.key, settingToForce.value, settingToForce.valueType);
            });
            this.signals.push({
                from: setting,
                id,
            });
        });
        const bindingSettings = getSettings('bindings');
        this.hotkeysToRemove = bindingSettings.list_keys().map((key) => {
            return bindingSettings.get_strv(key)[0];
        });
        this.keysToRestore = [];
        for (const schema of [
            'org.gnome.desktop.wm.keybindings',
            'org.gnome.shell.keybindings',
            'org.gnome.mutter.keybindings',
            'org.gnome.mutter.wayland.keybindings',
        ]) {
            const setting = new Gio$1.Settings({
                schema_id: schema,
            });
            setting.list_keys().forEach((key) => {
                const shortcut = setting.get_strv(key);
                if (shortcut[0] &&
                    this.hotkeysToRemove.indexOf(shortcut[0]) > -1) {
                    this.keysToRestore.push({
                        setting,
                        key,
                        shortcut,
                    });
                    setting.set_strv(key, ['']);
                }
            });
        }
    }
    destroy() {
        this.signals.forEach((signal) => {
            signal.from.disconnect(signal.id);
        });
        this.signals = [];
        this.settingsToRestore.forEach((settingToRestore) => {
            const { setting, key, value, valueType } = settingToRestore;
            setting[`set_${valueType}`](key, value);
        });
        this.keysToRestore.forEach((keyToRestore) => {
            keyToRestore.setting.set_strv(keyToRestore.key, keyToRestore.shortcut);
        });
        this.keysToRestore = [];
    }
    setValueIfDifferent(setting, key, value, valueType) {
        if (setting[`get_${valueType}`](key) !== value) {
            this.settingsToRestore.push({
                setting,
                key,
                value: setting[`get_${valueType}`](key),
                valueType,
            });
            setting[`set_${valueType}`](key, value);
        }
    }
}

const GLib$1 = imports.gi.GLib;
const Me$1 = imports.misc.extensionUtils.getCurrentExtension();
const DEBUG = true;
const FOCUS_ONLY = false;
let indent = 0;
function initDebug() {
    const AddLogToFunctions = function (prototype) {
        if (!DEBUG)
            return;
        for (const key of Object.getOwnPropertyNames(prototype)) {
            if (key === 'constructor')
                continue;
            const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
            if (descriptor) {
                const value = descriptor.value;
                if (typeof value === 'function') {
                    prototype[key] = function (...args) {
                        Me$1.log(`${prototype.constructor.name}.${key} (${Array.from(args)
                            .map((param) => {
                            try {
                                return param.toString();
                            }
                            catch (_e) {
                                return '';
                            }
                        })
                            .join(',')})`);
                        indent++;
                        const result = value.apply(this, args);
                        indent--;
                        return result;
                    };
                }
            }
        }
    };
    Me$1.log = function (...args) {
        if (!DEBUG || FOCUS_ONLY)
            return;
        const fields = { MESSAGE: `${'  '.repeat(indent)}${args.join(', ')}` };
        const domain = 'Material Shell';
        GLib$1.log_structured(domain, GLib$1.LogLevelFlags.LEVEL_MESSAGE, fields);
    };
    Me$1.logFocus = function (...args) {
        if (!DEBUG)
            return;
        const fields = { MESSAGE: `${'##'.repeat(indent)}${args.join(', ')}` };
        const domain = 'Material Shell';
        GLib$1.log_structured(domain, GLib$1.LogLevelFlags.LEVEL_MESSAGE, fields);
    };
    let doLogTick = false;
    const startLogTick = function () {
        doLogTick = true;
        logTick();
    };
    function logTick() {
        GLib$1.idle_add(GLib$1.PRIORITY_DEFAULT, () => {
            if (doLogTick) {
                logTick();
            }
            return GLib$1.SOURCE_REMOVE;
        });
    }
    const stopLogTick = function () {
        doLogTick = false;
    };
    Me$1.logBlank = function () {
        for (let i = 0; i < 50; i++) {
            Me$1.logFocus('');
        }
    };
    if (DEBUG) {
        GLib$1.idle_add(GLib$1.PRIORITY_DEFAULT, () => {
            const objects = [];
            objects
                .filter((object) => object)
                .forEach((object) => AddLogToFunctions(object.prototype));
            return false;
        });
    }
}

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Clutter = imports.gi.Clutter;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const St = imports.gi.St;
const Main = imports.ui.main;
const Signals = imports.signals;
let disableIncompatibleExtensionsModule;
let modules;
let _startupPreparedId;
let _splashscreenTimeoutId;
let _closingId;
let splashscreenCalled;
let splashScreens = [];
const oldOverview = Main.overview;
function init() {
    log('--------------');
    log('INIT EXTENSION');
    log('--------------');
    global.ms = Me;
    Me.showSplashScreens = showSplashScreens;
    Me.hideSplashScreens = hideSplashScreens;
    Me.closing = false;
    Me.locked = false;
    splashscreenCalled = false;
}
function enable() {
    log('----------------');
    log('ENABLE EXTENSION');
    log('----------------');
    if (Me.locked) {
        Me.locked = false;
        Me.layout.panel.enable();
        oldOverview.isDummy = true;
        return;
    }
    Signals.addSignalMethods(Me);
    polyfillClutter();
    initDebug();
    _closingId = global.display.connect('closing', () => {
        Me.closing = true;
    });
    Me.monitorsLength = Main.layoutManager.monitors.length;
    if (Main.layoutManager._startingUp) {
        Me.showSplashScreens();
    }
    Me.loaded = false;
    Me.stateManager = new StateManager();
    GLib.idle_add(GLib.PRIORITY_LOW, () => {
        disableIncompatibleExtensionsModule =
            new DisableIncompatibleExtensionsModule();
        Me.stateManager.loadRegistry((state) => {
            modules = [new RequiredSettingsModule(), new OverrideModule()];
            Me.tooltipManager = new TooltipManager();
            Me.layoutManager = new LayoutManager();
            Me.msWindowManager = new MsWindowManager();
            Me.msWorkspaceManager = new MsWorkspaceManager(state['workspaces-state']);
            Me.msNotificationManager = new MsNotificationManager();
            modules = [...modules, (Me.hotKeysModule = new HotKeysModule())];
            Me.msThemeManager = new MsThemeManager();
            Me.msThemeManager.regenerateStylesheet();
            if (getSettings('tweaks').get_boolean('enable-persistence')) {
                Me.msWorkspaceManager.restorePreviousState();
            }
            else {
                Me.msWorkspaceManager.initState();
            }
            new MsMain();
            Me.msWindowManager.handleExistingMetaWindow();
            if (Main.layoutManager._startingUp) {
                _startupPreparedId = Main.layoutManager.connect('startup-complete', () => loaded(true));
            }
            else {
                loaded(false);
            }
        });
        return GLib.SOURCE_REMOVE;
    });
}
function loaded(disconnect) {
    log('----------------');
    log('EXTENSION LOADED');
    log('----------------');
    if (disconnect) {
        Main.layoutManager.disconnect(_startupPreparedId);
    }
    Me.loaded = true;
    Me.locked = false;
    if (oldOverview._visible)
        oldOverview.toggle();
    oldOverview.isDummy = true;
    Me.emit('extension-loaded');
    Me.msNotificationManager.check();
    if (splashscreenCalled) {
        if (_splashscreenTimeoutId) {
            GLib.source_remove(_splashscreenTimeoutId);
            _splashscreenTimeoutId = 0;
        }
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
            hideSplashScreens();
            return GLib.SOURCE_REMOVE;
        });
    }
    log('--------------------');
    log('END EXTENSION LOADED');
    log('--------------------');
}
function disable() {
    log('-----------------');
    log('DISABLE EXTENSION');
    log('-----------------');
    if (Main.sessionMode.currentMode === 'unlock-dialog') {
        Me.locked = true;
        Me.layout.panel.disable();
    }
    else {
        Me.disableInProgress = true;
        if (!modules)
            return;
        global.display.disconnect(_closingId);
        Me.emit('extension-disable');
        modules.reverse().forEach((module) => {
            module.destroy();
        });
        Me.tooltipManager.destroy();
        Me.layoutManager.destroy();
        Me.msWorkspaceManager.destroy();
        Me.msWindowManager.destroy();
        Me.layout.destroy();
        Me.msThemeManager.destroy();
        disableIncompatibleExtensionsModule.destroy();
        Me.stateManager.destroy();
        Me.loaded = false;
        delete Me.disableInProgress;
    }
    log('---------------------');
    log('END DISABLE EXTENSION');
    log('---------------------');
}
function showSplashScreens() {
    log('show splashscreen');
    splashscreenCalled = true;
    Main.layoutManager.monitors.forEach((monitor) => {
        const icon = new St.Icon({
            gicon: Gio.icon_new_for_string(`${Me.path}/assets/icons/on-dark-small.svg`),
            icon_size: 200,
        });
        const splashscreen = new St.Bin({
            style_class: 'ms-splashscreen',
            style: 'background: rgb(25,25,25)',
            child: icon,
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });
        Main.layoutManager.addChrome(splashscreen);
        splashScreens.push(splashscreen);
    });
    _splashscreenTimeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 5000, () => {
        _splashscreenTimeoutId = 0;
        hideSplashScreens();
        return GLib.SOURCE_REMOVE;
    });
}
function hideSplashScreens() {
    if (splashScreens.length < 1)
        return;
    splashScreens.forEach((splashscreen) => {
        splashscreen.ease({
            opacity: 0,
            duration: 800,
            mode: Clutter.AnimationMode.EASE_IN_QUAD,
            onComplete: () => {
                Main.layoutManager.removeChrome(splashscreen);
                splashscreen.destroy();
            },
        });
    });
    splashScreens = [];
    splashscreenCalled = false;
}
