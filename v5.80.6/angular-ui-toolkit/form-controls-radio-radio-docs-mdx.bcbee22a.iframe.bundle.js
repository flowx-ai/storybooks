(self.webpackChunkflowx_process_renderer_ui=self.webpackChunkflowx_process_renderer_ui||[]).push([[6290,1876],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer,w:()=>defaultComponents});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map;var WithCallback=({callback,children})=>{let once=react.useRef();return react.useLayoutEffect((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let resolve=null,reject=null;return{promise:new Promise(((res,rej)=>{resolve=res,reject=rej})),resolve,reject}});var renderElement=function(){var _ref=(0,asyncToGenerator.A)((function*(node,el,rootOptions){let root=yield getReactRoot(el,rootOptions);if(function getIsReactActEnvironment(){return globalThis.IS_REACT_ACT_ENVIRONMENT}())return void root.render(node);let{promise,resolve}=Promise.withResolvers();return root.render(react.createElement(WithCallback,{callback:resolve},node)),promise}));return function renderElement(_x,_x2,_x3){return _ref.apply(this,arguments)}}(),getReactRoot=function(){var _ref2=(0,asyncToGenerator.A)((function*(el,rootOptions){let root=nodes.get(el);return root||(root=client.H(el,rootOptions),nodes.set(el,root)),root}));return function getReactRoot(_x4,_x5){return _ref2.apply(this,arguments)}}(),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=function(){var _ref=(0,asyncToGenerator.A)((function*(context,docsParameter,element){let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(5944).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>renderElement(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))}));return function(_x,_x2,_x3){return _ref.apply(this,arguments)}}(),this.unmount=element=>{(el=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var m=__webpack_require__("./node_modules/react-dom/index.js");exports.H=m.createRoot,m.hydrateRoot},"./libs/ui-toolkit/angular/src/lib/form-controls/radio/radio.docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_radio_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-toolkit/angular/src/lib/form-controls/radio/radio.stories.ts");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_radio_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"radio-component",children:"Radio Component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Radio component provides a customizable radio button input that can be used individually or as part of a radio group."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import { FlxFormControlModule } from '@flowx/angular-ui-toolkit'\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.gG,{name:"Basic",children:{template:'\n        <flx-choice-group>\n          <flx-radio\n            name="basic"\n            inputId="option1"\n            value="1"\n            [checked]="true"\n          >\n            Option 1\n          </flx-radio>\n          <flx-radio\n            name="basic"\n            inputId="option2"\n            value="2"\n          >\n            Option 2\n          </flx-radio>\n        </flx-choice-group>\n      '}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"with-label-and-helper",children:"With Label and Helper"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.gG,{name:"WithLabel",children:{template:'\n        <flx-choice-group>\n          <flx-label>Select an option</flx-label>\n          <flx-info-helper>Additional information</flx-info-helper>\n          <flx-radio\n            name="withLabel"\n            inputId="option1"\n            value="1"\n          >\n            Option 1\n          </flx-radio>\n          <flx-radio\n            name="withLabel"\n            inputId="option2"\n            value="2"\n          >\n            Option 2\n          </flx-radio>\n          <flx-helper>Helper text goes here</flx-helper>\n        </flx-choice-group>\n      '}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"column-layout",children:"Column Layout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.gG,{name:"ColumnLayout",children:{template:'\n        <flx-choice-group direction="column">\n          <flx-label>Select an option</flx-label>\n          <flx-radio\n            name="column"\n            inputId="option1"\n            value="1"\n          >\n            Option 1\n          </flx-radio>\n          <flx-radio\n            name="column"\n            inputId="option2"\n            value="2"\n          >\n            Option 2\n          </flx-radio>\n        </flx-choice-group>\n      '}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"flxradiocomponent",children:"FlxRadioComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Property"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Default"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"inputId"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"string"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"The ID of the radio input"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"string"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"The name attribute of the radio input"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"string"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"The value attribute of the radio input"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"checked"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"boolean"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Whether the radio is checked"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"clear"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"boolean"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"When true, removes border styling"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"disabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"boolean"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"false"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Whether the radio is disabled"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"flxchoicegroup",children:"FlxChoiceGroup"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Property"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Default"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.tbody,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"direction"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"'row' | 'column'"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"'row'"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Layout direction of the radios"})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"content-projection",children:"Content Projection"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The radio component supports the following content projection slots:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Default content: Radio label text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"[flxChoiceIconSelected]"}),": Custom icon for selected state"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"[flxChoiceIconUnselected]"}),": Custom icon for unselected state"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The choice group supports:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"flx-label"}),": Group label"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"flx-info-helper"}),": Information helper icon with tooltip"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"flx-error"}),": Error message"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"flx-helper"}),": Helper text"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The component uses CSS custom properties for theming. Key variables include:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"--flxTheme-radio-borderRadius\n--flxTheme-radio-borderWidth\n--flxTheme-radio-fontFamily\n--flxTheme-radio-fontSize\n--flxTheme-radio-fontWeight\n--flxTheme-radio-lineHeight\n--flxTheme-radio-gap\n--flxTheme-radio-padding[Top|Right|Bottom|Left]\n--flxTheme-radio-backgroundColor\n--flxTheme-radio-borderColor\n--flxTheme-radio-color\n--flxTheme-radio-iconColor\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"forms-integration",children:"Forms Integration"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The radio component implements ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ControlValueAccessor"}),", making it compatible with Angular's form controls. It can be used with both template-driven and reactive forms."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:'@Component({\n  template: `\n    <form [formGroup]="form">\n      <flx-choice-group>\n        <flx-label>Select an option</flx-label>\n        <flx-radio\n          name="option"\n          inputId="option1"\n          value="1"\n          formControlName="selectedOption"\n        >\n          Option 1\n        </flx-radio>\n        <flx-radio\n          name="option"\n          inputId="option2"\n          value="2"\n          formControlName="selectedOption"\n        >\n          Option 2\n        </flx-radio>\n      </flx-choice-group>\n    </form>\n  `,\n})\nexport class MyComponent {\n  form = new FormGroup({\n    agree: new FormControl(false),\n  })\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Always provide meaningful labels for radio buttons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Use choice groups when presenting related options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Consider using the clear style for inline radios"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Maintain consistent spacing when grouping radios"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Provide feedback for interaction states"}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/ui-toolkit/angular/src/lib/form-controls/radio/radio.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Radio:()=>Radio,__namedExportsOrder:()=>__namedExportsOrder,default:()=>radio_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),radio_componentngResource=__webpack_require__("./libs/ui-toolkit/angular/src/lib/form-controls/radio/radio.component.scss?ngResource"),radio_componentngResource_default=__webpack_require__.n(radio_componentngResource),icon_module=__webpack_require__("./libs/ui-toolkit/angular/src/lib/icon/icon.module.ts");let FlxRadioComponent=class FlxRadioComponent{constructor(){this.inputId=(0,core.input)(),this.name=(0,core.input)(),this.value=(0,core.input)(),this.clear=(0,core.input)(),this.checked=(0,core.model)(!1),this.disabled=(0,core.signal)(!1),this.focus=(0,core.signal)(!1)}#onChange;#onTouched;onInputChange(ev){this.checked.set(ev.target.checked),this.#onChange?.(ev.target.value),this.#onTouched?.()}onFocusChange(newFocus){this.focus.set(newFocus)}writeValue(obj){this.checked.set(obj===this.value())}registerOnChange(fn){this.#onChange=fn}registerOnTouched(fn){this.#onTouched=fn}setDisabledState(isDisabled){this.disabled.set(isDisabled)}static{this.propDecorators={inputId:[{type:core.Input,args:[{isSignal:!0,alias:"inputId",required:!1,transform:void 0}]}],name:[{type:core.Input,args:[{isSignal:!0,alias:"name",required:!1,transform:void 0}]}],value:[{type:core.Input,args:[{isSignal:!0,alias:"value",required:!1,transform:void 0}]}],clear:[{type:core.Input,args:[{isSignal:!0,alias:"clear",required:!1,transform:void 0}]}],checked:[{type:core.Input,args:[{isSignal:!0,alias:"checked",required:!1}]},{type:core.Output,args:["checkedChange"]}]}}};FlxRadioComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"flx-radio",imports:[icon_module.m],template:'<label\n    [attr.for]="inputId()"\n    [class.empty]="!checked()"\n    [class.checked]="checked()"\n    [class.disabled]="disabled()"\n    [class.focused]="focus()"\n    class="flx-radio-label"\n    flxRadio\n  >\n    <input\n      [id]="inputId()"\n      [value]="value()"\n      [checked]="checked()"\n      [disabled]="disabled()"\n      [attr.name]="name()"\n      (change)="onInputChange($event)"\n      (focus)="onFocusChange(true)"\n      (blur)="onFocusChange(false)"\n      type="radio"\n    />\n    <div class="flx-radio-icons">\n      @if (checked()) {\n        <flx-icon-with-default\n          class="flx-radio-icon"\n          defaultName="radioChecked"\n        >\n          <ng-content select="[flxChoiceIconSelected]" />\n        </flx-icon-with-default>\n      } @else {\n        <flx-icon-with-default\n          class="flx-radio-icon"\n          defaultName="radioUnchecked"\n        >\n          <ng-content select="[flxChoiceIconUnselected]" />\n        </flx-icon-with-default>\n      }\n    </div>\n    <div class="flx-radio-text">\n      <ng-content></ng-content>\n    </div>\n  </label>',providers:[{provide:fesm2022_forms.kq,useExisting:FlxRadioComponent,multi:!0}],host:{class:"flx-radio","[class.flx-radio-clear]":"clear()"},encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[radio_componentngResource_default()]})],FlxRadioComponent);var choice_group_component=__webpack_require__("./libs/ui-toolkit/angular/src/lib/form-controls/choice-group/choice-group.component.ts"),form_utilities_module=__webpack_require__("./libs/ui-toolkit/angular/src/lib/form-controls/form-utilities.module.ts");let FlxRadioModule=class FlxRadioModule{};FlxRadioModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[FlxRadioComponent,choice_group_component.I,form_utilities_module.f],exports:[FlxRadioComponent,choice_group_component.I,form_utilities_module.f]})],FlxRadioModule);let RadioContainerComponent=class RadioContainerComponent{constructor(){this.fc=new fesm2022_forms.MJ("option1"),this.checked=!0}ngOnChanges(changes){changes.requiredError&&(changes.requiredError.currentValue?this.fc.setValidators(fesm2022_forms.k0.required):this.fc.removeValidators(fesm2022_forms.k0.required),this.fc.updateValueAndValidity()),changes.disabled&&(changes.disabled.currentValue?this.fc.disable():this.fc.enable())}static{this.propDecorators={requiredError:[{type:core.Input}],disabled:[{type:core.Input}],fontFamily:[{type:core.Input},{type:core.HostBinding,args:["style.fontFamily"]}]}}};RadioContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"radio-container",standalone:!1,template:'\n    <flx-choice-group\n      [direction]="groupDirection"\n      [style.width]="width > 0 ? width + \'px\' : noBorder ? \'auto\' : \'100%\'"\n    >\n      <flx-label>\n        {{ label }}\n      </flx-label>\n      <flx-info-helper *ngIf="infoTooltip && helper">\n        {{ helper }}\n      </flx-info-helper>\n      <flx-radio\n        [formControl]="fc"\n        [checked]="fc.value === \'option1\'"\n        [clear]="noBorder"\n        name="test"\n        inputId="radio1"\n        value="option1"\n      >\n        Option 1\n        \x3c!-- <flx-icon\n          name="error"\n          flxChoiceIconSelected\n        />\n        <flx-icon\n          name="warning"\n          flxChoiceIconUnselected\n        /> --\x3e\n      </flx-radio>\n      <flx-radio\n        [formControl]="fc"\n        [checked]="fc.value === \'option2\'"\n        [clear]="noBorder"\n        name="test"\n        inputId="radio2"\n        value="option2"\n      >\n        Option 2\n      </flx-radio>\n      <flx-radio\n        [formControl]="fc"\n        [checked]="fc.value === \'option3\'"\n        [clear]="noBorder"\n        name="test"\n        inputId="radio3"\n        value="option3"\n      >\n        Option 3\n      </flx-radio>\n      <flx-error *ngIf="fc.errors">\n        {{ errorMessage }}\n      </flx-error>\n      <flx-helper *ngIf="!infoTooltip && helper && !fc.errors">\n        {{ helper }}\n      </flx-helper>\n    </flx-choice-group>\n    <hr />\n    Selected option : {{ fc.value | json }}\n  ',host:{"[class]":"'flx-default-theme'"}})],RadioContainerComponent);const radio_stories={title:"Form Controls/Choices/Radio",component:RadioContainerComponent,decorators:[(0,dist.moduleMetadata)({imports:[FlxRadioModule,fesm2022_forms.X1]}),(0,dist.applicationConfig)({providers:[(0,http.$R)(),(0,core.importProvidersFrom)(icon_module.m)]})],argTypes:{groupDirection:{options:["row","column"],control:{type:"select"}},fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}}},Radio=(args=>({props:args})).bind({});Radio.args={fontFamily:"Open Sans",label:"Radio label",groupDirection:"row",noBorder:!1,width:0,disabled:!1,requiredError:!1,errorMessage:"Error message",helper:"",infoTooltip:!1};const __namedExportsOrder=["Radio"];Radio.parameters={...Radio.parameters,docs:{...Radio.parameters?.docs,source:{originalSource:"(args: RadioContainerComponent) => ({\n  props: args\n})",...Radio.parameters?.docs?.source}}}},"./libs/ui-toolkit/angular/src/lib/form-controls/radio/radio.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.flx-radio {\n  display: block;\n}\n\n.flx-radio-label {\n  display: flex;\n  align-items: center;\n  border-style: solid;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  outline-color: transparent;\n  transition-property: border-color, background-color, outline-color, color;\n  transition-duration: 0.2s;\n  border-radius: var(--flxTheme-radio-borderRadius);\n  border-width: var(--flxTheme-radio-borderWidth);\n  font-family: var(--flxTheme-radio-fontFamily);\n  font-size: var(--flxTheme-radio-fontSize);\n  font-weight: var(--flxTheme-radio-fontWeight);\n  line-height: var(--flxTheme-radio-lineHeight);\n  gap: var(--flxTheme-radio-gap);\n  padding-top: var(--flxTheme-radio-paddingTop);\n  padding-right: var(--flxTheme-radio-paddingRight);\n  padding-bottom: var(--flxTheme-radio-paddingBottom);\n  padding-left: var(--flxTheme-radio-paddingLeft);\n  background-color: var(--flxTheme-radio-backgroundColor);\n  border-color: var(--flxTheme-radio-borderColor);\n  color: var(--flxTheme-radio-color);\n}\n.flx-radio-label input {\n  clip: rect(0 0 0 0);\n  position: absolute;\n  width: 0;\n  height: 0;\n  margin: 0;\n}\n.flx-radio-label .flx-radio-icon {\n  filter: brightness(0) saturate(100%) var(--flxTheme-radio-iconColor);\n}\n\n.flx-radio-container {\n  border-color: var(--flxTheme-radio-iconColor);\n  position: relative;\n  width: 18px;\n  height: 18px;\n  flex: 0 0 18px;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 50%;\n  transition: border-color 0.2s;\n}\n.flx-radio-container::after {\n  background-color: var(--flxTheme-radio-iconColor);\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n  transition: transform 0.1s;\n  transform: scale3d(0, 0, 0);\n  transform-origin: center;\n}\n\n.flx-radio-text {\n  flex-grow: 1;\n}\n\n.flx-radio-label.checked .flx-radio-container::after {\n  transform: scale3d(1, 1, 1);\n}\n\n.flx-radio-label.focused {\n  outline-style: solid;\n}\n\n.flx-radio-label.disabled {\n  cursor: auto;\n}\n\n.flx-radio-clear .flx-radio-label {\n  border: none;\n  border-radius: 0;\n  padding: 0;\n}\n.flx-radio-clear .flx-radio-label.checked {\n  background: transparent;\n}\n\n.flx-radio-reversed .flx-radio-label {\n  flex-direction: row-reverse;\n}\n\n.flx-radio-icons {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.flx-radio-icons > div {\n  display: flex;\n  align-items: center;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);