import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-X6WFMOUZ.js";
import "./chunk-VPZZAMU6.js";
import {
  MediaMatcher,
  NzBreakpointService,
  gridResponsiveMap
} from "./chunk-YLEKFQFV.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-AWTRQL6W.js";
import "./chunk-BQ76GOFF.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective,
  WithConfig,
  onConfigChangeEventForComponent
} from "./chunk-SYSVOREY.js";
import {
  isNotNil,
  toCssPixel
} from "./chunk-LM4IETVQ.js";
import {
  Platform
} from "./chunk-VMU2ZAM7.js";
import {
  Directionality
} from "./chunk-JC63M5VE.js";
import {
  takeUntilDestroyed
} from "./chunk-FUQ6BMHY.js";
import "./chunk-BCE6KIPK.js";
import {
  NgTemplateOutlet
} from "./chunk-KFDOK4JN.js";
import "./chunk-4D67RZE2.js";
import "./chunk-47JDWAB7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  NgModule,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  afterEveryRender,
  booleanAttribute,
  input,
  numberAttribute,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-5KMZZBSO.js";
import {
  BehaviorSubject,
  DestroyRef,
  EventEmitter,
  Observable,
  ReplaySubject,
  Subject,
  __esDecorate,
  __runInitializers,
  defer,
  distinctUntilChanged,
  inject,
  merge,
  mergeMap,
  of,
  signal,
  startWith,
  switchMap,
  ɵɵdefineInjector,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-IMPAHW4F.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-avatar.mjs
var _c0 = ["textEl"];
var _c1 = ["*"];
function NzAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.nzIcon);
  }
}
function NzAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 4);
    ɵɵlistener("error", function NzAvatarComponent_Conditional_1_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.imgError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.nzSrc, ɵɵsanitizeUrl);
    ɵɵattribute("srcset", ctx_r0.nzSrcSet)("alt", ctx_r0.nzAlt)("loading", ctx_r0.nzLoading() || "eager")("fetchpriority", ctx_r0.nzFetchPriority() || "auto");
  }
}
function NzAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3, 0);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.nzText);
  }
}
var NZ_CONFIG_MODULE_NAME = "avatar";
var NzAvatarComponent = (() => {
  let _nzShape_decorators;
  let _nzShape_initializers = [];
  let _nzShape_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzGap_decorators;
  let _nzGap_initializers = [];
  let _nzGap_extraInitializers = [];
  return class NzAvatarComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzShape_decorators = [WithConfig()];
      _nzSize_decorators = [WithConfig()];
      _nzGap_decorators = [WithConfig()];
      __esDecorate(null, null, _nzShape_decorators, {
        kind: "field",
        name: "nzShape",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShape" in obj,
          get: (obj) => obj.nzShape,
          set: (obj, value) => {
            obj.nzShape = value;
          }
        },
        metadata: _metadata
      }, _nzShape_initializers, _nzShape_extraInitializers);
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      __esDecorate(null, null, _nzGap_decorators, {
        kind: "field",
        name: "nzGap",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzGap" in obj,
          get: (obj) => obj.nzGap,
          set: (obj, value) => {
            obj.nzGap = value;
          }
        },
        metadata: _metadata
      }, _nzGap_initializers, _nzGap_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzShape = __runInitializers(this, _nzShape_initializers, "circle");
    nzSize = (__runInitializers(this, _nzShape_extraInitializers), __runInitializers(this, _nzSize_initializers, "default"));
    nzGap = (__runInitializers(this, _nzSize_extraInitializers), __runInitializers(this, _nzGap_initializers, 4));
    nzText = __runInitializers(this, _nzGap_extraInitializers);
    nzSrc;
    nzSrcSet;
    nzAlt;
    nzIcon;
    nzLoading = input(...ngDevMode ? [void 0, {
      debugName: "nzLoading"
    }] : []);
    nzFetchPriority = input(...ngDevMode ? [void 0, {
      debugName: "nzFetchPriority"
    }] : []);
    nzError = new EventEmitter();
    hasText = false;
    hasSrc = true;
    hasIcon = false;
    customSize = null;
    textEl;
    el = inject(ElementRef).nativeElement;
    cdr = inject(ChangeDetectorRef);
    constructor() {
      afterEveryRender(() => this.calcStringSize());
    }
    imgError(event) {
      this.nzError.emit(event);
      if (!event.defaultPrevented) {
        this.hasSrc = false;
        this.hasIcon = false;
        this.hasText = false;
        if (this.nzIcon) {
          this.hasIcon = true;
        } else if (this.nzText) {
          this.hasText = true;
        }
        this.cdr.detectChanges();
        this.setSizeStyle();
        this.calcStringSize();
      }
    }
    ngOnChanges() {
      this.hasText = !this.nzSrc && !!this.nzText;
      this.hasIcon = !this.nzSrc && !!this.nzIcon;
      this.hasSrc = !!this.nzSrc;
      this.setSizeStyle();
      this.calcStringSize();
    }
    calcStringSize() {
      if (!this.hasText || !this.textEl) {
        return;
      }
      const textEl = this.textEl.nativeElement;
      const childrenWidth = textEl.offsetWidth;
      const avatarWidth = this.el.getBoundingClientRect?.().width ?? 0;
      const offset = this.nzGap * 2 < avatarWidth ? this.nzGap * 2 : 8;
      const scale = avatarWidth - offset < childrenWidth ? (avatarWidth - offset) / childrenWidth : 1;
      textEl.style.transform = `scale(${scale}) translateX(-50%)`;
      textEl.style.lineHeight = this.customSize || "";
    }
    setSizeStyle() {
      if (typeof this.nzSize === "number") {
        this.customSize = toCssPixel(this.nzSize);
      } else {
        this.customSize = null;
      }
      this.cdr.markForCheck();
    }
    static ɵfac = function NzAvatarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzAvatarComponent2)();
    };
    static ɵcmp = ɵɵdefineComponent({
      type: NzAvatarComponent2,
      selectors: [["nz-avatar"]],
      viewQuery: function NzAvatarComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textEl = _t.first);
        }
      },
      hostAttrs: [1, "ant-avatar"],
      hostVars: 20,
      hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
          ɵɵclassProp("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
        }
      },
      inputs: {
        nzShape: "nzShape",
        nzSize: "nzSize",
        nzGap: [2, "nzGap", "nzGap", numberAttribute],
        nzText: "nzText",
        nzSrc: "nzSrc",
        nzSrcSet: "nzSrcSet",
        nzAlt: "nzAlt",
        nzIcon: "nzIcon",
        nzLoading: [1, "nzLoading"],
        nzFetchPriority: [1, "nzFetchPriority"]
      },
      outputs: {
        nzError: "nzError"
      },
      exportAs: ["nzAvatar"],
      features: [ɵɵNgOnChangesFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 1,
      consts: [["textEl", ""], [3, "nzType"], [3, "src"], [1, "ant-avatar-string"], [3, "error", "src"]],
      template: function NzAvatarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, NzAvatarComponent_Conditional_0_Template, 1, 1, "nz-icon", 1)(1, NzAvatarComponent_Conditional_1_Template, 1, 5, "img", 2)(2, NzAvatarComponent_Conditional_2_Template, 3, 1, "span", 3);
          ɵɵprojection(3);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nzIcon && ctx.hasIcon ? 0 : ctx.nzSrc && ctx.hasSrc ? 1 : ctx.nzText && ctx.hasText ? 2 : -1);
        }
      },
      dependencies: [NzIconModule, NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarComponent, [{
    type: Component,
    args: [{
      selector: "nz-avatar",
      exportAs: "nzAvatar",
      imports: [NzIconModule],
      template: `
    @if (nzIcon && hasIcon) {
      <nz-icon [nzType]="nzIcon" />
    } @else if (nzSrc && hasSrc) {
      <img
        [src]="nzSrc"
        [attr.srcset]="nzSrcSet"
        [attr.alt]="nzAlt"
        [attr.loading]="nzLoading() || 'eager'"
        [attr.fetchpriority]="nzFetchPriority() || 'auto'"
        (error)="imgError($event)"
      />
    } @else if (nzText && hasText) {
      <span class="ant-avatar-string" #textEl>{{ nzText }}</span>
    }
    <ng-content />
  `,
      host: {
        class: "ant-avatar",
        "[class.ant-avatar-lg]": `nzSize === 'large'`,
        "[class.ant-avatar-sm]": `nzSize === 'small'`,
        "[class.ant-avatar-square]": `nzShape === 'square'`,
        "[class.ant-avatar-circle]": `nzShape === 'circle'`,
        "[class.ant-avatar-icon]": `nzIcon`,
        "[class.ant-avatar-image]": `hasSrc `,
        "[style.width]": "customSize",
        "[style.height]": "customSize",
        "[style.line-height]": "customSize",
        // nzSize type is number when customSize is true
        "[style.font-size.px]": "(hasIcon && customSize) ? $any(nzSize) / 2 : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [], {
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzGap: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzText: [{
      type: Input
    }],
    nzSrc: [{
      type: Input
    }],
    nzSrcSet: [{
      type: Input
    }],
    nzAlt: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzLoading: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzLoading",
        required: false
      }]
    }],
    nzFetchPriority: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzFetchPriority",
        required: false
      }]
    }],
    nzError: [{
      type: Output
    }],
    textEl: [{
      type: ViewChild,
      args: ["textEl", {
        static: false
      }]
    }]
  });
})();
var NzAvatarGroupComponent = class _NzAvatarGroupComponent {
  static ɵfac = function NzAvatarGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAvatarGroupComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzAvatarGroupComponent,
    selectors: [["nz-avatar-group"]],
    hostAttrs: [1, "ant-avatar-group"],
    exportAs: ["nzAvatarGroup"],
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    template: function NzAvatarGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-avatar-group",
      exportAs: "nzAvatarGroup",
      template: `<ng-content />`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-avatar-group"
      }
    }]
  }], null, null);
})();
var NzAvatarModule = class _NzAvatarModule {
  static ɵfac = function NzAvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAvatarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzAvatarModule,
    imports: [NzAvatarComponent, NzAvatarGroupComponent],
    exports: [NzAvatarComponent, NzAvatarGroupComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzAvatarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarModule, [{
    type: NgModule,
    args: [{
      exports: [NzAvatarComponent, NzAvatarGroupComponent],
      imports: [NzAvatarComponent, NzAvatarGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-grid.mjs
var NzRowDirective = class _NzRowDirective {
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  mediaMatcher = inject(MediaMatcher);
  platform = inject(Platform);
  breakpointService = inject(NzBreakpointService);
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  nzAlign = null;
  nzJustify = null;
  nzGutter = null;
  actualGutter$ = new ReplaySubject(1);
  dir = "ltr";
  getGutter() {
    const results = [null, null];
    const gutter = this.nzGutter || 0;
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === "object" && g !== null) {
        results[index] = null;
        Object.keys(gridResponsiveMap).map((screen) => {
          const bp = screen;
          if (this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
            results[index] = g[bp];
          }
        });
      } else {
        results[index] = Number(g) || null;
      }
    });
    return results;
  }
  setGutterStyle() {
    const [horizontalGutter, verticalGutter] = this.getGutter();
    this.actualGutter$.next([horizontalGutter, verticalGutter]);
    const renderGutter = (name, gutter) => {
      const nativeElement = this.elementRef.nativeElement;
      if (gutter !== null) {
        this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
      }
    };
    renderGutter("margin-left", horizontalGutter);
    renderGutter("margin-right", horizontalGutter);
    renderGutter("margin-top", verticalGutter);
    renderGutter("margin-bottom", verticalGutter);
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
    });
    this.setGutterStyle();
  }
  ngOnChanges(changes) {
    if (changes.nzGutter) {
      this.setGutterStyle();
    }
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.setGutterStyle();
      });
    }
  }
  static ɵfac = function NzRowDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRowDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzRowDirective,
    selectors: [["", "nz-row", ""], ["nz-row"], ["nz-form-item"]],
    hostAttrs: [1, "ant-row"],
    hostVars: 20,
    hostBindings: function NzRowDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-row-top", ctx.nzAlign === "top")("ant-row-middle", ctx.nzAlign === "middle")("ant-row-bottom", ctx.nzAlign === "bottom")("ant-row-start", ctx.nzJustify === "start")("ant-row-end", ctx.nzJustify === "end")("ant-row-center", ctx.nzJustify === "center")("ant-row-space-around", ctx.nzJustify === "space-around")("ant-row-space-between", ctx.nzJustify === "space-between")("ant-row-space-evenly", ctx.nzJustify === "space-evenly")("ant-row-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzAlign: "nzAlign",
      nzJustify: "nzJustify",
      nzGutter: "nzGutter"
    },
    exportAs: ["nzRow"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-row],nz-row,nz-form-item",
      exportAs: "nzRow",
      host: {
        class: "ant-row",
        "[class.ant-row-top]": `nzAlign === 'top'`,
        "[class.ant-row-middle]": `nzAlign === 'middle'`,
        "[class.ant-row-bottom]": `nzAlign === 'bottom'`,
        "[class.ant-row-start]": `nzJustify === 'start'`,
        "[class.ant-row-end]": `nzJustify === 'end'`,
        "[class.ant-row-center]": `nzJustify === 'center'`,
        "[class.ant-row-space-around]": `nzJustify === 'space-around'`,
        "[class.ant-row-space-between]": `nzJustify === 'space-between'`,
        "[class.ant-row-space-evenly]": `nzJustify === 'space-evenly'`,
        "[class.ant-row-rtl]": `dir === "rtl"`
      }
    }]
  }], null, {
    nzAlign: [{
      type: Input
    }],
    nzJustify: [{
      type: Input
    }],
    nzGutter: [{
      type: Input
    }]
  });
})();
var NzColDirective = class _NzColDirective {
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  classMap = {};
  hostFlexStyle = null;
  dir = "ltr";
  nzFlex = null;
  nzSpan = null;
  nzOrder = null;
  nzOffset = null;
  nzPush = null;
  nzPull = null;
  nzXs = null;
  nzSm = null;
  nzMd = null;
  nzLg = null;
  nzXl = null;
  nzXXl = null;
  setHostClassMap() {
    const hostClassMap = __spreadValues({
      ["ant-col"]: true,
      [`ant-col-${this.nzSpan}`]: isNotNil(this.nzSpan),
      [`ant-col-order-${this.nzOrder}`]: isNotNil(this.nzOrder),
      [`ant-col-offset-${this.nzOffset}`]: isNotNil(this.nzOffset),
      [`ant-col-pull-${this.nzPull}`]: isNotNil(this.nzPull),
      [`ant-col-push-${this.nzPush}`]: isNotNil(this.nzPush),
      ["ant-col-rtl"]: this.dir === "rtl"
    }, this.generateClass());
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i)) {
        this.renderer.removeClass(this.elementRef.nativeElement, i);
      }
    }
    this.classMap = __spreadValues({}, hostClassMap);
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
        this.renderer.addClass(this.elementRef.nativeElement, i);
      }
    }
  }
  setHostFlexStyle() {
    this.hostFlexStyle = this.parseFlex(this.nzFlex);
  }
  parseFlex(flex) {
    if (typeof flex === "number") {
      return `${flex} ${flex} auto`;
    } else if (typeof flex === "string") {
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
    }
    return flex;
  }
  generateClass() {
    const listOfSizeInputName = ["nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"];
    const listClassMap = {};
    listOfSizeInputName.forEach((name) => {
      const sizeName = name.replace("nz", "").toLowerCase();
      if (isNotNil(this[name])) {
        if (typeof this[name] === "number" || typeof this[name] === "string") {
          listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
        } else {
          const embedded = this[name];
          const prefixArray = ["span", "pull", "push", "offset", "order"];
          prefixArray.forEach((prefix) => {
            const prefixClass = prefix === "span" ? "-" : `-${prefix}-`;
            listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
          });
        }
      }
    });
    return listClassMap;
  }
  nzRowDirective = inject(NzRowDirective, {
    host: true,
    optional: true
  });
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.setHostClassMap();
    });
    this.setHostClassMap();
    this.setHostFlexStyle();
  }
  ngOnChanges(changes) {
    this.setHostClassMap();
    const {
      nzFlex
    } = changes;
    if (nzFlex) {
      this.setHostFlexStyle();
    }
  }
  ngAfterViewInit() {
    if (this.nzRowDirective) {
      this.nzRowDirective.actualGutter$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([horizontalGutter, verticalGutter]) => {
        const renderGutter = (name, gutter) => {
          const nativeElement = this.elementRef.nativeElement;
          if (gutter !== null) {
            this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
          }
        };
        renderGutter("padding-left", horizontalGutter);
        renderGutter("padding-right", horizontalGutter);
        renderGutter("padding-top", verticalGutter);
        renderGutter("padding-bottom", verticalGutter);
      });
    }
  }
  static ɵfac = function NzColDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzColDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzColDirective,
    selectors: [["", "nz-col", ""], ["nz-col"], ["nz-form-control"], ["nz-form-label"]],
    hostVars: 2,
    hostBindings: function NzColDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("flex", ctx.hostFlexStyle);
      }
    },
    inputs: {
      nzFlex: "nzFlex",
      nzSpan: "nzSpan",
      nzOrder: "nzOrder",
      nzOffset: "nzOffset",
      nzPush: "nzPush",
      nzPull: "nzPull",
      nzXs: "nzXs",
      nzSm: "nzSm",
      nzMd: "nzMd",
      nzLg: "nzLg",
      nzXl: "nzXl",
      nzXXl: "nzXXl"
    },
    exportAs: ["nzCol"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-col],nz-col,nz-form-control,nz-form-label",
      exportAs: "nzCol",
      host: {
        "[style.flex]": "hostFlexStyle"
      }
    }]
  }], null, {
    nzFlex: [{
      type: Input
    }],
    nzSpan: [{
      type: Input
    }],
    nzOrder: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzPush: [{
      type: Input
    }],
    nzPull: [{
      type: Input
    }],
    nzXs: [{
      type: Input
    }],
    nzSm: [{
      type: Input
    }],
    nzMd: [{
      type: Input
    }],
    nzLg: [{
      type: Input
    }],
    nzXl: [{
      type: Input
    }],
    nzXXl: [{
      type: Input
    }]
  });
})();
var NzGridModule = class _NzGridModule {
  static ɵfac = function NzGridModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzGridModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzGridModule,
    imports: [NzColDirective, NzRowDirective],
    exports: [NzColDirective, NzRowDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGridModule, [{
    type: NgModule,
    args: [{
      imports: [NzColDirective, NzRowDirective],
      exports: [NzColDirective, NzRowDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-spin.mjs
var _c02 = ["*"];
function NzSpinComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵelement(1, "i", 3)(2, "i", 3)(3, "i", 3)(4, "i", 3);
    ɵɵelementEnd();
  }
}
function NzSpinComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NzSpinComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTip);
  }
}
function NzSpinComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 4);
    ɵɵtemplate(2, NzSpinComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    ɵɵconditionalCreate(3, NzSpinComponent_Conditional_2_Conditional_3_Template, 2, 1, "div", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultTemplate_r2 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵclassProp("ant-spin-rtl", ctx_r0.dir === "rtl")("ant-spin-lg", ctx_r0.nzSize === "large")("ant-spin-sm", ctx_r0.nzSize === "small")("ant-spin-show-text", ctx_r0.nzTip);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzIndicator || defaultTemplate_r2);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzTip ? 3 : -1);
  }
}
function NzSpinComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-spin-blur", ctx_r0.isLoading());
  }
}
var NZ_CONFIG_MODULE_NAME2 = "spin";
var NzSpinComponent = (() => {
  let _nzIndicator_decorators;
  let _nzIndicator_initializers = [];
  let _nzIndicator_extraInitializers = [];
  return class NzSpinComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzIndicator_decorators = [WithConfig()];
      __esDecorate(null, null, _nzIndicator_decorators, {
        kind: "field",
        name: "nzIndicator",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzIndicator" in obj,
          get: (obj) => obj.nzIndicator,
          set: (obj, value) => {
            obj.nzIndicator = value;
          }
        },
        metadata: _metadata
      }, _nzIndicator_initializers, _nzIndicator_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME2;
    cdr = inject(ChangeDetectorRef);
    directionality = inject(Directionality);
    destroyRef = inject(DestroyRef);
    nzIndicator = __runInitializers(this, _nzIndicator_initializers, null);
    nzSize = (__runInitializers(this, _nzIndicator_extraInitializers), "default");
    nzTip = null;
    nzDelay = 0;
    nzSimple = false;
    nzSpinning = true;
    spinning$ = new BehaviorSubject(this.nzSpinning);
    delay$ = new ReplaySubject(1);
    isLoading = signal(false, ...ngDevMode ? [{
      debugName: "isLoading"
    }] : []);
    dir = "ltr";
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME2, () => this.cdr.markForCheck());
    }
    ngOnInit() {
      this.delay$.pipe(startWith(this.nzDelay), distinctUntilChanged(), switchMap((delay) => (
        // This construct is used to reduce RxJS dependencies.
        // It previously used `debounce(() => timer())`, but consumers may not
        // use these RxJS functions at all, causing them to still be bundled
        // into the main bundle unnecessarily.
        this.spinning$.pipe(switchMap((spinning) => {
          if (delay === 0 || !spinning) {
            return of(spinning);
          }
          return new Observable((subscriber) => {
            const timeoutId = setTimeout(() => subscriber.next(spinning), delay);
            return () => clearTimeout(timeoutId);
          });
        }))
      )), takeUntilDestroyed(this.destroyRef)).subscribe((isLoading) => {
        this.isLoading.set(isLoading);
      });
      this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
      const {
        nzSpinning,
        nzDelay
      } = changes;
      if (nzSpinning) {
        this.spinning$.next(this.nzSpinning);
      }
      if (nzDelay) {
        this.delay$.next(this.nzDelay);
      }
    }
    static ɵfac = function NzSpinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzSpinComponent2)();
    };
    static ɵcmp = ɵɵdefineComponent({
      type: NzSpinComponent2,
      selectors: [["nz-spin"]],
      hostVars: 2,
      hostBindings: function NzSpinComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-spin-nested-loading", !ctx.nzSimple);
        }
      },
      inputs: {
        nzIndicator: "nzIndicator",
        nzSize: "nzSize",
        nzTip: "nzTip",
        nzDelay: [2, "nzDelay", "nzDelay", numberAttribute],
        nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute],
        nzSpinning: [2, "nzSpinning", "nzSpinning", booleanAttribute]
      },
      exportAs: ["nzSpin"],
      features: [ɵɵNgOnChangesFeature],
      ngContentSelectors: _c02,
      decls: 4,
      vars: 2,
      consts: [["defaultTemplate", ""], [1, "ant-spin-container", 3, "ant-spin-blur"], [1, "ant-spin-dot", "ant-spin-dot-spin"], [1, "ant-spin-dot-item"], [1, "ant-spin", "ant-spin-spinning"], [3, "ngTemplateOutlet"], [1, "ant-spin-text"], [1, "ant-spin-container"]],
      template: function NzSpinComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzSpinComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵconditionalCreate(2, NzSpinComponent_Conditional_2_Template, 4, 10, "div");
          ɵɵconditionalCreate(3, NzSpinComponent_Conditional_3_Template, 2, 2, "div", 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(ctx.isLoading() ? 2 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.nzSimple ? 3 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinComponent, [{
    type: Component,
    args: [{
      selector: "nz-spin",
      exportAs: "nzSpin",
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #defaultTemplate>
      <span class="ant-spin-dot ant-spin-dot-spin">
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
      </span>
    </ng-template>
    @if (isLoading()) {
      <div>
        <div
          class="ant-spin ant-spin-spinning"
          [class.ant-spin-rtl]="dir === 'rtl'"
          [class.ant-spin-lg]="nzSize === 'large'"
          [class.ant-spin-sm]="nzSize === 'small'"
          [class.ant-spin-show-text]="nzTip"
        >
          <ng-template [ngTemplateOutlet]="nzIndicator || defaultTemplate" />
          @if (nzTip) {
            <div class="ant-spin-text">{{ nzTip }}</div>
          }
        </div>
      </div>
    }
    @if (!nzSimple) {
      <div class="ant-spin-container" [class.ant-spin-blur]="isLoading()">
        <ng-content />
      </div>
    }
  `,
      host: {
        "[class.ant-spin-nested-loading]": "!nzSimple"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [], {
    nzIndicator: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTip: [{
      type: Input
    }],
    nzDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSimple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSpinning: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSpinModule = class _NzSpinModule {
  static ɵfac = function NzSpinModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSpinModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzSpinModule,
    imports: [NzSpinComponent],
    exports: [NzSpinComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpinComponent],
      exports: [NzSpinComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-list.mjs
var _c03 = ["*"];
function NzListItemMetaAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-avatar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzSrc", ctx_r0.nzSrc);
  }
}
function NzListItemMetaAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c12 = [[["nz-list-item-meta-avatar"]], [["nz-list-item-meta-title"]], [["nz-list-item-meta-description"]]];
var _c2 = ["nz-list-item-meta-avatar", "nz-list-item-meta-title", "nz-list-item-meta-description"];
function NzListItemMetaComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-list-item-meta-avatar", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzSrc", ctx_r0.avatarStr);
  }
}
function NzListItemMetaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-avatar");
    ɵɵelementContainer(1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.avatarTpl);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-title");
    ɵɵtemplate(1, NzListItemMetaComponent_Conditional_3_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzTitle);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzDescription);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-meta-description");
    ɵɵtemplate(1, NzListItemMetaComponent_Conditional_3_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzDescription);
  }
}
function NzListItemMetaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵconditionalCreate(1, NzListItemMetaComponent_Conditional_3_Conditional_1_Template, 2, 1, "nz-list-item-meta-title");
    ɵɵconditionalCreate(2, NzListItemMetaComponent_Conditional_3_Conditional_2_Template, 2, 1, "nz-list-item-meta-description");
    ɵɵprojection(3, 1);
    ɵɵprojection(4, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzTitle && !ctx_r0.titleComponent ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzDescription && !ctx_r0.descriptionComponent ? 2 : -1);
  }
}
function NzListItemActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c3 = ["nz-list-item-actions", ""];
function NzListItemActionsComponent_For_1_ng_template_1_Template(rf, ctx) {
}
function NzListItemActionsComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "em", 1);
  }
}
function NzListItemActionsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, NzListItemActionsComponent_For_1_ng_template_1_Template, 0, 0, "ng-template", 0);
    ɵɵconditionalCreate(2, NzListItemActionsComponent_For_1_Conditional_2_Template, 1, 0, "em", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ɵ$index_1_r2 = ctx.$index;
    const ɵ$count_1_r3 = ctx.$count;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", i_r1);
    ɵɵadvance();
    ɵɵconditional(!(ɵ$index_1_r2 === ɵ$count_1_r3 - 1) ? 2 : -1);
  }
}
var _c4 = [[["nz-list-header"]], [["nz-list-footer"], ["", "nz-list-footer", ""]], [["nz-list-load-more"], ["", "nz-list-load-more", ""]], [["nz-list-pagination"], ["", "nz-list-pagination", ""]], "*"];
var _c5 = ["nz-list-header", "nz-list-footer, [nz-list-footer]", "nz-list-load-more, [nz-list-load-more]", "nz-list-pagination, [nz-list-pagination]", "*"];
var _c6 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzListComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzHeader);
  }
}
function NzListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-header");
    ɵɵtemplate(1, NzListComponent_Conditional_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzHeader);
  }
}
function NzListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    ɵɵstyleProp("min-height", 53, "px");
  }
}
function NzListComponent_Conditional_5_For_2_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzListComponent_Conditional_5_For_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzSpan", ctx_r0.nzGrid.span || null)("nzXs", ctx_r0.nzGrid.xs || null)("nzSm", ctx_r0.nzGrid.sm || null)("nzMd", ctx_r0.nzGrid.md || null)("nzLg", ctx_r0.nzGrid.lg || null)("nzXl", ctx_r0.nzGrid.xl || null)("nzXXl", ctx_r0.nzGrid.xxl || null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzRenderItem)("ngTemplateOutletContext", ɵɵpureFunction2(9, _c6, item_r2, $index_r3));
  }
}
function NzListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵrepeaterCreate(1, NzListComponent_Conditional_5_For_2_Template, 2, 12, "div", 7, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzGutter", ctx_r0.nzGrid.gutter || null);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.nzDataSource);
  }
}
function NzListComponent_Conditional_6_For_2_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzListComponent_Conditional_6_For_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzRenderItem)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c6, item_r4, $index_r5));
  }
}
function NzListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵrepeaterCreate(1, NzListComponent_Conditional_6_For_2_Template, 2, 5, "ng-container", null, ɵɵrepeaterTrackByIdentity);
    ɵɵprojection(3, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.nzDataSource);
  }
}
function NzListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-list-empty", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzNoResult", ctx_r0.nzNoResult);
  }
}
function NzListComponent_Conditional_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzFooter);
  }
}
function NzListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-footer");
    ɵɵtemplate(1, NzListComponent_Conditional_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzFooter);
  }
}
function NzListComponent_ng_template_10_Template(rf, ctx) {
}
function NzListComponent_Conditional_12_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-pagination");
    ɵɵtemplate(1, NzListComponent_Conditional_12_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzPagination);
  }
}
var _c7 = [[["nz-list-item-actions"], ["", "nz-list-item-actions", ""]], [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], "*", [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]]];
var _c8 = ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"];
function NzListItemComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzActions", ctx_r0.nzActions);
  }
}
function NzListItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NzListItemComponent_ng_template_0_Conditional_0_Template, 1, 1, "ul", 3);
    ɵɵprojection(1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzActions && ctx_r0.nzActions.length > 0 ? 0 : -1);
  }
}
function NzListItemComponent_ng_template_2_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzContent);
  }
}
function NzListItemComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzListItemComponent_ng_template_2_Conditional_2_ng_container_0_Template, 2, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzContent);
  }
}
function NzListItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
    ɵɵprojection(1, 2);
    ɵɵconditionalCreate(2, NzListItemComponent_ng_template_2_Conditional_2_Template, 1, 1, "ng-container");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.nzContent ? 2 : -1);
  }
}
function NzListItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3);
  }
}
function NzListItemComponent_Conditional_6_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_ng_template_2_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Conditional_3_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-list-item-extra");
    ɵɵtemplate(1, NzListItemComponent_Conditional_6_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzListItemComponent_Conditional_6_ng_template_4_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, NzListItemComponent_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6)(2, NzListItemComponent_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, NzListItemComponent_Conditional_6_Conditional_3_Template, 2, 1, "nz-list-item-extra");
    ɵɵtemplate(4, NzListItemComponent_Conditional_6_ng_template_4_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const actionsTpl_r2 = ɵɵreference(1);
    const contentTpl_r3 = ɵɵreference(3);
    const extraTpl_r4 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentTpl_r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actionsTpl_r2);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzExtra ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", extraTpl_r4);
  }
}
function NzListItemComponent_Conditional_7_ng_template_0_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_2_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_3_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzListItemComponent_Conditional_7_ng_template_0_Template, 0, 0, "ng-template", 6)(1, NzListItemComponent_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6)(2, NzListItemComponent_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 6)(3, NzListItemComponent_Conditional_7_ng_template_3_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const actionsTpl_r2 = ɵɵreference(1);
    const contentTpl_r3 = ɵɵreference(3);
    const extraTpl_r4 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", contentTpl_r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzExtra);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", extraTpl_r4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actionsTpl_r2);
  }
}
var NzListItemMetaTitleComponent = class _NzListItemMetaTitleComponent {
  static ɵfac = function NzListItemMetaTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemMetaTitleComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemMetaTitleComponent,
    selectors: [["nz-list-item-meta-title"]],
    exportAs: ["nzListItemMetaTitle"],
    ngContentSelectors: _c03,
    decls: 2,
    vars: 0,
    consts: [[1, "ant-list-item-meta-title"]],
    template: function NzListItemMetaTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "h4", 0);
        ɵɵprojection(1);
        ɵɵdomElementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaTitleComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-title",
      exportAs: "nzListItemMetaTitle",
      template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content />
    </h4>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var NzListItemMetaDescriptionComponent = class _NzListItemMetaDescriptionComponent {
  static ɵfac = function NzListItemMetaDescriptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemMetaDescriptionComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemMetaDescriptionComponent,
    selectors: [["nz-list-item-meta-description"]],
    exportAs: ["nzListItemMetaDescription"],
    ngContentSelectors: _c03,
    decls: 2,
    vars: 0,
    consts: [[1, "ant-list-item-meta-description"]],
    template: function NzListItemMetaDescriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵdomElementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaDescriptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-description",
      exportAs: "nzListItemMetaDescription",
      template: `
    <div class="ant-list-item-meta-description">
      <ng-content />
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var NzListItemMetaAvatarComponent = class _NzListItemMetaAvatarComponent {
  nzSrc;
  static ɵfac = function NzListItemMetaAvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemMetaAvatarComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemMetaAvatarComponent,
    selectors: [["nz-list-item-meta-avatar"]],
    inputs: {
      nzSrc: "nzSrc"
    },
    exportAs: ["nzListItemMetaAvatar"],
    ngContentSelectors: _c03,
    decls: 3,
    vars: 1,
    consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc"]],
    template: function NzListItemMetaAvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵconditionalCreate(1, NzListItemMetaAvatarComponent_Conditional_1_Template, 1, 1, "nz-avatar", 1)(2, NzListItemMetaAvatarComponent_Conditional_2_Template, 1, 0);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.nzSrc ? 1 : 2);
      }
    },
    dependencies: [NzAvatarModule, NzAvatarComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaAvatarComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-avatar",
      exportAs: "nzListItemMetaAvatar",
      template: `
    <div class="ant-list-item-meta-avatar">
      @if (nzSrc) {
        <nz-avatar [nzSrc]="nzSrc" />
      } @else {
        <ng-content />
      }
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzAvatarModule]
    }]
  }], null, {
    nzSrc: [{
      type: Input
    }]
  });
})();
var NzListItemMetaComponent = class _NzListItemMetaComponent {
  elementRef = inject(ElementRef);
  avatarStr = "";
  avatarTpl;
  set nzAvatar(value) {
    if (value instanceof TemplateRef) {
      this.avatarStr = "";
      this.avatarTpl = value;
    } else {
      this.avatarStr = value;
    }
  }
  nzTitle;
  nzDescription;
  descriptionComponent;
  titleComponent;
  static ɵfac = function NzListItemMetaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemMetaComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemMetaComponent,
    selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]],
    contentQueries: function NzListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzListItemMetaDescriptionComponent, 5)(dirIndex, NzListItemMetaTitleComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.descriptionComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleComponent = _t.first);
      }
    },
    hostAttrs: [1, "ant-list-item-meta"],
    inputs: {
      nzAvatar: "nzAvatar",
      nzTitle: "nzTitle",
      nzDescription: "nzDescription"
    },
    exportAs: ["nzListItemMeta"],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 3,
    consts: [[3, "nzSrc"], [1, "ant-list-item-meta-content"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"]],
    template: function NzListItemMetaComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c12);
        ɵɵconditionalCreate(0, NzListItemMetaComponent_Conditional_0_Template, 1, 1, "nz-list-item-meta-avatar", 0);
        ɵɵconditionalCreate(1, NzListItemMetaComponent_Conditional_1_Template, 2, 1, "nz-list-item-meta-avatar");
        ɵɵprojection(2);
        ɵɵconditionalCreate(3, NzListItemMetaComponent_Conditional_3_Template, 5, 2, "div", 1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.avatarStr ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.avatarTpl ? 1 : -1);
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzTitle || ctx.nzDescription || ctx.descriptionComponent || ctx.titleComponent ? 3 : -1);
      }
    },
    dependencies: [NzListItemMetaAvatarComponent, NgTemplateOutlet, NzListItemMetaTitleComponent, NzOutletModule, NzStringTemplateOutletDirective, NzListItemMetaDescriptionComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta, [nz-list-item-meta]",
      exportAs: "nzListItemMeta",
      template: `
    <!--Old API Start-->
    @if (avatarStr) {
      <nz-list-item-meta-avatar [nzSrc]="avatarStr" />
    }

    @if (avatarTpl) {
      <nz-list-item-meta-avatar>
        <ng-container [ngTemplateOutlet]="avatarTpl" />
      </nz-list-item-meta-avatar>
    }

    <!--Old API End-->

    <ng-content select="nz-list-item-meta-avatar" />

    @if (nzTitle || nzDescription || descriptionComponent || titleComponent) {
      <div class="ant-list-item-meta-content">
        <!--Old API Start-->

        @if (nzTitle && !titleComponent) {
          <nz-list-item-meta-title>
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </nz-list-item-meta-title>
        }

        @if (nzDescription && !descriptionComponent) {
          <nz-list-item-meta-description>
            <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
          </nz-list-item-meta-description>
        }
        <!--Old API End-->

        <ng-content select="nz-list-item-meta-title" />
        <ng-content select="nz-list-item-meta-description" />
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-list-item-meta"
      },
      imports: [NzListItemMetaAvatarComponent, NgTemplateOutlet, NzListItemMetaTitleComponent, NzOutletModule, NzListItemMetaDescriptionComponent]
    }]
  }], null, {
    nzAvatar: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    descriptionComponent: [{
      type: ContentChild,
      args: [NzListItemMetaDescriptionComponent]
    }],
    titleComponent: [{
      type: ContentChild,
      args: [NzListItemMetaTitleComponent]
    }]
  });
})();
var NzListItemExtraComponent = class _NzListItemExtraComponent {
  static ɵfac = function NzListItemExtraComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemExtraComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemExtraComponent,
    selectors: [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]],
    hostAttrs: [1, "ant-list-item-extra"],
    exportAs: ["nzListItemExtra"],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function NzListItemExtraComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemExtraComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-extra, [nz-list-item-extra]",
      exportAs: "nzListItemExtra",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`,
      host: {
        class: "ant-list-item-extra"
      }
    }]
  }], null, null);
})();
var NzListItemActionComponent = class _NzListItemActionComponent {
  templateRef;
  static ɵfac = function NzListItemActionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemActionComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemActionComponent,
    selectors: [["nz-list-item-action"]],
    viewQuery: function NzListItemActionComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    exportAs: ["nzListItemAction"],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function NzListItemActionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomTemplate(0, NzListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemActionComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-action",
      exportAs: "nzListItemAction",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-template><ng-content /></ng-template>`
    }]
  }], null, {
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NzListItemActionsComponent = class _NzListItemActionsComponent {
  cdr = inject(ChangeDetectorRef);
  nzActions = [];
  nzListItemActions;
  actions = [];
  inputActionChanges$ = new Subject();
  contentChildrenChanges$ = defer(() => {
    if (this.nzListItemActions) {
      return of(null);
    }
    return this.initialized.pipe(mergeMap(() => this.nzListItemActions.changes.pipe(startWith(this.nzListItemActions))));
  });
  initialized = new Subject();
  constructor() {
    merge(this.contentChildrenChanges$, this.inputActionChanges$).pipe(takeUntilDestroyed()).subscribe(() => {
      if (this.nzActions.length) {
        this.actions = this.nzActions;
      } else {
        this.actions = this.nzListItemActions.map((action) => action.templateRef);
      }
      this.cdr.detectChanges();
    });
  }
  ngOnChanges() {
    this.inputActionChanges$.next(null);
  }
  ngAfterContentInit() {
    this.initialized.next();
    this.initialized.complete();
  }
  static ɵfac = function NzListItemActionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemActionsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemActionsComponent,
    selectors: [["ul", "nz-list-item-actions", ""]],
    contentQueries: function NzListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzListItemActionComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListItemActions = _t);
      }
    },
    hostAttrs: [1, "ant-list-item-action"],
    inputs: {
      nzActions: "nzActions"
    },
    exportAs: ["nzListItemActions"],
    features: [ɵɵNgOnChangesFeature],
    attrs: _c3,
    decls: 2,
    vars: 0,
    consts: [[3, "ngTemplateOutlet"], [1, "ant-list-item-action-split"]],
    template: function NzListItemActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, NzListItemActionsComponent_For_1_Template, 3, 2, "li", null, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.actions);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemActionsComponent, [{
    type: Component,
    args: [{
      selector: "ul[nz-list-item-actions]",
      exportAs: "nzListItemActions",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @for (i of actions; track i) {
      <li>
        <ng-template [ngTemplateOutlet]="i" />
        @if (!$last) {
          <em class="ant-list-item-action-split"></em>
        }
      </li>
    }
  `,
      host: {
        class: "ant-list-item-action"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [], {
    nzActions: [{
      type: Input
    }],
    nzListItemActions: [{
      type: ContentChildren,
      args: [NzListItemActionComponent]
    }]
  });
})();
var NzListEmptyComponent = class _NzListEmptyComponent {
  nzNoResult;
  static ɵfac = function NzListEmptyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListEmptyComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListEmptyComponent,
    selectors: [["nz-list-empty"]],
    hostAttrs: [1, "ant-list-empty-text"],
    inputs: {
      nzNoResult: "nzNoResult"
    },
    exportAs: ["nzListHeader"],
    decls: 1,
    vars: 1,
    consts: [["nzComponentName", "list", 3, "specificContent"]],
    template: function NzListEmptyComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "nz-embed-empty", 0);
      }
      if (rf & 2) {
        ɵɵproperty("specificContent", ctx.nzNoResult);
      }
    },
    dependencies: [NzEmptyModule, NzEmbedEmptyComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListEmptyComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-empty",
      exportAs: "nzListHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<nz-embed-empty nzComponentName="list" [specificContent]="nzNoResult" />`,
      host: {
        class: "ant-list-empty-text"
      },
      imports: [NzEmptyModule]
    }]
  }], null, {
    nzNoResult: [{
      type: Input
    }]
  });
})();
var NzListHeaderComponent = class _NzListHeaderComponent {
  static ɵfac = function NzListHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListHeaderComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListHeaderComponent,
    selectors: [["nz-list-header"]],
    hostAttrs: [1, "ant-list-header"],
    exportAs: ["nzListHeader"],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function NzListHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-header",
      exportAs: "nzListHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`,
      host: {
        class: "ant-list-header"
      }
    }]
  }], null, null);
})();
var NzListFooterComponent = class _NzListFooterComponent {
  static ɵfac = function NzListFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListFooterComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListFooterComponent,
    selectors: [["nz-list-footer"]],
    hostAttrs: [1, "ant-list-footer"],
    exportAs: ["nzListFooter"],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function NzListFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-footer",
      exportAs: "nzListFooter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`,
      host: {
        class: "ant-list-footer"
      }
    }]
  }], null, null);
})();
var NzListPaginationComponent = class _NzListPaginationComponent {
  static ɵfac = function NzListPaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListPaginationComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListPaginationComponent,
    selectors: [["nz-list-pagination"]],
    hostAttrs: [1, "ant-list-pagination"],
    exportAs: ["nzListPagination"],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function NzListPaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListPaginationComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-pagination",
      exportAs: "nzListPagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`,
      host: {
        class: "ant-list-pagination"
      }
    }]
  }], null, null);
})();
var NzListLoadMoreDirective = class _NzListLoadMoreDirective {
  static ɵfac = function NzListLoadMoreDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListLoadMoreDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzListLoadMoreDirective,
    selectors: [["nz-list-load-more"]],
    exportAs: ["nzListLoadMoreDirective"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListLoadMoreDirective, [{
    type: Directive,
    args: [{
      selector: "nz-list-load-more",
      exportAs: "nzListLoadMoreDirective"
    }]
  }], null, null);
})();
var NzListGridDirective = class _NzListGridDirective {
  static ɵfac = function NzListGridDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListGridDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzListGridDirective,
    selectors: [["nz-list", "nzGrid", ""]],
    hostAttrs: [1, "ant-list-grid"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListGridDirective, [{
    type: Directive,
    args: [{
      selector: "nz-list[nzGrid]",
      host: {
        class: "ant-list-grid"
      }
    }]
  }], null, null);
})();
var NzListComponent = class _NzListComponent {
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  nzDataSource;
  nzBordered = false;
  nzGrid = "";
  nzHeader;
  nzFooter;
  nzItemLayout = "horizontal";
  nzRenderItem = null;
  nzLoading = false;
  nzLoadMore = null;
  nzPagination;
  nzSize = "default";
  nzSplit = true;
  nzNoResult;
  nzListFooterComponent;
  nzListPaginationComponent;
  nzListLoadMoreDirective;
  hasSomethingAfterLastItem = false;
  dir = "ltr";
  itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
  get itemLayoutNotify$() {
    return this.itemLayoutNotifySource.asObservable();
  }
  constructor() {
    this.destroyRef.onDestroy(() => this.itemLayoutNotifySource.unsubscribe());
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  getSomethingAfterLastItem() {
    return !!(this.nzLoadMore || this.nzPagination || this.nzFooter || this.nzListFooterComponent || this.nzListPaginationComponent || this.nzListLoadMoreDirective);
  }
  ngOnChanges(changes) {
    if (changes.nzItemLayout) {
      this.itemLayoutNotifySource.next(this.nzItemLayout);
    }
  }
  ngAfterContentInit() {
    this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
  }
  static ɵfac = function NzListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListComponent,
    selectors: [["nz-list"], ["", "nz-list", ""]],
    contentQueries: function NzListComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzListFooterComponent, 5)(dirIndex, NzListPaginationComponent, 5)(dirIndex, NzListLoadMoreDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListFooterComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListPaginationComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzListLoadMoreDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-list"],
    hostVars: 16,
    hostBindings: function NzListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-list-rtl", ctx.dir === "rtl")("ant-list-vertical", ctx.nzItemLayout === "vertical")("ant-list-lg", ctx.nzSize === "large")("ant-list-sm", ctx.nzSize === "small")("ant-list-split", ctx.nzSplit)("ant-list-bordered", ctx.nzBordered)("ant-list-loading", ctx.nzLoading)("ant-list-something-after-last-item", ctx.hasSomethingAfterLastItem);
      }
    },
    inputs: {
      nzDataSource: "nzDataSource",
      nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
      nzGrid: "nzGrid",
      nzHeader: "nzHeader",
      nzFooter: "nzFooter",
      nzItemLayout: "nzItemLayout",
      nzRenderItem: "nzRenderItem",
      nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
      nzLoadMore: "nzLoadMore",
      nzPagination: "nzPagination",
      nzSize: "nzSize",
      nzSplit: [2, "nzSplit", "nzSplit", booleanAttribute],
      nzNoResult: "nzNoResult"
    },
    exportAs: ["nzList"],
    features: [ɵɵNgOnChangesFeature],
    ngContentSelectors: _c5,
    decls: 14,
    vars: 8,
    consts: [[3, "nzSpinning"], [3, "min-height"], ["nz-row", "", 3, "nzGutter"], [1, "ant-list-items"], [3, "nzNoResult"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function NzListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c4);
        ɵɵconditionalCreate(0, NzListComponent_Conditional_0_Template, 2, 1, "nz-list-header");
        ɵɵprojection(1);
        ɵɵelementStart(2, "nz-spin", 0);
        ɵɵelementContainerStart(3);
        ɵɵconditionalCreate(4, NzListComponent_Conditional_4_Template, 1, 2, "div", 1);
        ɵɵconditionalCreate(5, NzListComponent_Conditional_5_Template, 3, 1, "div", 2)(6, NzListComponent_Conditional_6_Template, 4, 0, "div", 3);
        ɵɵconditionalCreate(7, NzListComponent_Conditional_7_Template, 1, 1, "nz-list-empty", 4);
        ɵɵelementContainerEnd();
        ɵɵelementEnd();
        ɵɵconditionalCreate(8, NzListComponent_Conditional_8_Template, 2, 1, "nz-list-footer");
        ɵɵprojection(9, 1);
        ɵɵtemplate(10, NzListComponent_ng_template_10_Template, 0, 0, "ng-template", 5);
        ɵɵprojection(11, 2);
        ɵɵconditionalCreate(12, NzListComponent_Conditional_12_Template, 2, 1, "nz-list-pagination");
        ɵɵprojection(13, 3);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.nzHeader ? 0 : -1);
        ɵɵadvance(2);
        ɵɵproperty("nzSpinning", ctx.nzLoading);
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0 ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.nzGrid && ctx.nzDataSource ? 5 : 6);
        ɵɵadvance(2);
        ɵɵconditional(!ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0 ? 7 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.nzFooter ? 8 : -1);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.nzLoadMore);
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzPagination ? 12 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzListHeaderComponent, NzOutletModule, NzStringTemplateOutletDirective, NzSpinModule, NzSpinComponent, NzGridModule, NzColDirective, NzRowDirective, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListComponent, [{
    type: Component,
    args: [{
      selector: "nz-list, [nz-list]",
      exportAs: "nzList",
      template: `
    @if (nzHeader) {
      <nz-list-header>
        <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      </nz-list-header>
    }

    <ng-content select="nz-list-header" />

    <nz-spin [nzSpinning]="nzLoading">
      <ng-container>
        @if (nzLoading && nzDataSource && nzDataSource.length === 0) {
          <div [style.min-height.px]="53"></div>
        }
        @if (nzGrid && nzDataSource) {
          <div nz-row [nzGutter]="nzGrid.gutter || null">
            @for (item of nzDataSource; track item) {
              <div
                nz-col
                [nzSpan]="nzGrid.span || null"
                [nzXs]="nzGrid.xs || null"
                [nzSm]="nzGrid.sm || null"
                [nzMd]="nzGrid.md || null"
                [nzLg]="nzGrid.lg || null"
                [nzXl]="nzGrid.xl || null"
                [nzXXl]="nzGrid.xxl || null"
              >
                <ng-template
                  [ngTemplateOutlet]="nzRenderItem"
                  [ngTemplateOutletContext]="{ $implicit: item, index: $index }"
                />
              </div>
            }
          </div>
        } @else {
          <div class="ant-list-items">
            @for (item of nzDataSource; track item) {
              <ng-container>
                <ng-template
                  [ngTemplateOutlet]="nzRenderItem"
                  [ngTemplateOutletContext]="{ $implicit: item, index: $index }"
                />
              </ng-container>
            }
            <ng-content />
          </div>
        }

        @if (!nzLoading && nzDataSource && nzDataSource.length === 0) {
          <nz-list-empty [nzNoResult]="nzNoResult" />
        }
      </ng-container>
    </nz-spin>

    @if (nzFooter) {
      <nz-list-footer>
        <ng-container *nzStringTemplateOutlet="nzFooter">{{ nzFooter }}</ng-container>
      </nz-list-footer>
    }

    <ng-content select="nz-list-footer, [nz-list-footer]" />

    <ng-template [ngTemplateOutlet]="nzLoadMore" />
    <ng-content select="nz-list-load-more, [nz-list-load-more]" />

    @if (nzPagination) {
      <nz-list-pagination>
        <ng-template [ngTemplateOutlet]="nzPagination" />
      </nz-list-pagination>
    }

    <ng-content select="nz-list-pagination, [nz-list-pagination]" />
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-list",
        "[class.ant-list-rtl]": `dir === 'rtl'`,
        "[class.ant-list-vertical]": 'nzItemLayout === "vertical"',
        "[class.ant-list-lg]": 'nzSize === "large"',
        "[class.ant-list-sm]": 'nzSize === "small"',
        "[class.ant-list-split]": "nzSplit",
        "[class.ant-list-bordered]": "nzBordered",
        "[class.ant-list-loading]": "nzLoading",
        "[class.ant-list-something-after-last-item]": "hasSomethingAfterLastItem"
      },
      imports: [NgTemplateOutlet, NzListHeaderComponent, NzOutletModule, NzSpinModule, NzGridModule, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent]
    }]
  }], () => [], {
    nzDataSource: [{
      type: Input
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzGrid: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzItemLayout: [{
      type: Input
    }],
    nzRenderItem: [{
      type: Input
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoadMore: [{
      type: Input
    }],
    nzPagination: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzSplit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNoResult: [{
      type: Input
    }],
    nzListFooterComponent: [{
      type: ContentChild,
      args: [NzListFooterComponent]
    }],
    nzListPaginationComponent: [{
      type: ContentChild,
      args: [NzListPaginationComponent]
    }],
    nzListLoadMoreDirective: [{
      type: ContentChild,
      args: [NzListLoadMoreDirective]
    }]
  });
})();
var NzListItemComponent = class _NzListItemComponent {
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  parentComp = inject(NzListComponent);
  nzActions = [];
  nzContent;
  nzExtra = null;
  nzNoFlex = false;
  listItemExtraDirective;
  itemLayout;
  get isVerticalAndExtra() {
    return this.itemLayout === "vertical" && (!!this.listItemExtraDirective || !!this.nzExtra);
  }
  ngAfterViewInit() {
    this.parentComp.itemLayoutNotify$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.itemLayout = val;
      this.cdr.detectChanges();
    });
  }
  static ɵfac = function NzListItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListItemComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzListItemComponent,
    selectors: [["nz-list-item"], ["", "nz-list-item", ""]],
    contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzListItemExtraComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listItemExtraDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-list-item"],
    hostVars: 2,
    hostBindings: function NzListItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
      }
    },
    inputs: {
      nzActions: "nzActions",
      nzContent: "nzContent",
      nzExtra: "nzExtra",
      nzNoFlex: [2, "nzNoFlex", "nzNoFlex", booleanAttribute]
    },
    exportAs: ["nzListItem"],
    ngContentSelectors: _c8,
    decls: 8,
    vars: 1,
    consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["nz-list-item-actions", "", 3, "nzActions"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-main"], [3, "ngTemplateOutlet"]],
    template: function NzListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c7);
        ɵɵtemplate(0, NzListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NzListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵconditionalCreate(6, NzListItemComponent_Conditional_6_Template, 5, 4)(7, NzListItemComponent_Conditional_7_Template, 4, 4);
      }
      if (rf & 2) {
        ɵɵadvance(6);
        ɵɵconditional(ctx.isVerticalAndExtra ? 6 : 7);
      }
    },
    dependencies: [NzListItemActionsComponent, NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet, NzListItemExtraComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item, [nz-list-item]",
      exportAs: "nzListItem",
      template: `
    <ng-template #actionsTpl>
      @if (nzActions && nzActions.length > 0) {
        <ul nz-list-item-actions [nzActions]="nzActions"></ul>
      }
      <ng-content select="nz-list-item-actions, [nz-list-item-actions]" />
    </ng-template>
    <ng-template #contentTpl>
      <ng-content select="nz-list-item-meta, [nz-list-item-meta]" />
      <ng-content />
      @if (nzContent) {
        <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
      }
    </ng-template>
    <ng-template #extraTpl>
      <ng-content select="nz-list-item-extra, [nz-list-item-extra]" />
    </ng-template>

    @if (isVerticalAndExtra) {
      <div class="ant-list-item-main">
        <ng-template [ngTemplateOutlet]="contentTpl" />
        <ng-template [ngTemplateOutlet]="actionsTpl" />
      </div>
      @if (nzExtra) {
        <nz-list-item-extra>
          <ng-template [ngTemplateOutlet]="nzExtra" />
        </nz-list-item-extra>
      }
      <ng-template [ngTemplateOutlet]="extraTpl" />
    } @else {
      <ng-template [ngTemplateOutlet]="contentTpl" />
      <ng-template [ngTemplateOutlet]="nzExtra" />
      <ng-template [ngTemplateOutlet]="extraTpl" />
      <ng-template [ngTemplateOutlet]="actionsTpl" />
    }
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-list-item"
      },
      imports: [NzListItemActionsComponent, NzOutletModule, NgTemplateOutlet, NzListItemExtraComponent]
    }]
  }], null, {
    nzActions: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzNoFlex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["class.ant-list-item-no-flex"]
    }],
    listItemExtraDirective: [{
      type: ContentChild,
      args: [NzListItemExtraComponent]
    }]
  });
})();
var DIRECTIVES = [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective];
var NzListModule = class _NzListModule {
  static ɵfac = function NzListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzListModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzListModule,
    imports: [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective],
    exports: [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzListComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaAvatarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListModule, [{
    type: NgModule,
    args: [{
      imports: [DIRECTIVES],
      exports: [DIRECTIVES]
    }]
  }], null, null);
})();
export {
  NzListComponent,
  NzListEmptyComponent,
  NzListFooterComponent,
  NzListGridDirective,
  NzListHeaderComponent,
  NzListItemActionComponent,
  NzListItemActionsComponent,
  NzListItemComponent,
  NzListItemExtraComponent,
  NzListItemMetaAvatarComponent,
  NzListItemMetaComponent,
  NzListItemMetaDescriptionComponent,
  NzListItemMetaTitleComponent,
  NzListLoadMoreDirective,
  NzListModule,
  NzListPaginationComponent
};
//# sourceMappingURL=ng-zorro-antd_list.js.map
