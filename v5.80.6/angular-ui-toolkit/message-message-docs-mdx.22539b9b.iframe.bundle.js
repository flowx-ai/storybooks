(self.webpackChunkflowx_process_renderer_ui=self.webpackChunkflowx_process_renderer_ui||[]).push([[2620,9176],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>combineLatest});var _Observable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_from__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),_util_identity__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");function combineLatest(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.lI)(args),resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.ms)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),observables=_a.args,keys=_a.keys;if(0===observables.length)return(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)([],scheduler);var result=new _Observable__WEBPACK_IMPORTED_MODULE_3__.c(function combineLatestInit(observables,scheduler,valueTransform){void 0===valueTransform&&(valueTransform=_util_identity__WEBPACK_IMPORTED_MODULE_5__.D);return function(subscriber){maybeSchedule(scheduler,(function(){for(var length=observables.length,values=new Array(length),active=length,remainingFirstValues=length,_loop_1=function(i){maybeSchedule(scheduler,(function(){var source=(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)(observables[i],scheduler),hasFirstValue=!1;source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__._)(subscriber,(function(value){values[i]=value,hasFirstValue||(hasFirstValue=!0,remainingFirstValues--),remainingFirstValues||subscriber.next(valueTransform(values.slice()))}),(function(){--active||subscriber.complete()})))}),subscriber)},i=0;i<length;i++)_loop_1(i)}),subscriber)}}(observables,scheduler,keys?function(values){return(0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.e)(keys,values)}:_util_identity__WEBPACK_IMPORTED_MODULE_5__.D));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.I)(resultSelector)):result}function maybeSchedule(scheduler,execute,subscription){scheduler?(0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__.N)(subscription,scheduler,execute):execute()}},"./node_modules/rxjs/dist/esm5/internal/observable/empty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>EMPTY});var EMPTY=new(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js").c)((function(subscriber){return subscriber.complete()}))},"./node_modules/rxjs/dist/esm5/internal/operators/catchError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>catchError});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function catchError(selector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){var handledResult,innerSub=null,syncUnsub=!1;innerSub=source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__._)(subscriber,void 0,void 0,(function(err){handledResult=(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Tg)(selector(err,catchError(selector)(source))),innerSub?(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber)):syncUnsub=!0}))),syncUnsub&&(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),Subscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function handleReset(reset,on){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];if(!0!==on){if(!1!==on){var onSubscriber=new Subscriber.Ms({next:function(){onSubscriber.unsubscribe(),reset()}});return(0,innerFrom.Tg)(on.apply(void 0,(0,tslib_es6.fX)([],(0,tslib_es6.zs)(args)))).subscribe(onSubscriber)}}else reset()}function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,function share(options){void 0===options&&(options={});var _a=options.connector,connector=void 0===_a?function(){return new Subject.B}:_a,_b=options.resetOnError,resetOnError=void 0===_b||_b,_c=options.resetOnComplete,resetOnComplete=void 0===_c||_c,_d=options.resetOnRefCountZero,resetOnRefCountZero=void 0===_d||_d;return function(wrapperSource){var connection,resetConnection,subject,refCount=0,hasCompleted=!1,hasErrored=!1,cancelReset=function(){null==resetConnection||resetConnection.unsubscribe(),resetConnection=void 0},reset=function(){cancelReset(),connection=subject=void 0,hasCompleted=hasErrored=!1},resetAndUnsubscribe=function(){var conn=connection;reset(),null==conn||conn.unsubscribe()};return(0,lift.N)((function(source,subscriber){refCount++,hasErrored||hasCompleted||cancelReset();var dest=subject=null!=subject?subject:connector();subscriber.add((function(){0!=--refCount||hasErrored||hasCompleted||(resetConnection=handleReset(resetAndUnsubscribe,resetOnRefCountZero))})),dest.subscribe(subscriber),!connection&&refCount>0&&(connection=new Subscriber.Ms({next:function(value){return dest.next(value)},error:function(err){hasErrored=!0,cancelReset(),resetConnection=handleReset(reset,resetOnError,err),dest.error(err)},complete:function(){hasCompleted=!0,cancelReset(),resetConnection=handleReset(reset,resetOnComplete),dest.complete()}}),(0,innerFrom.Tg)(source).subscribe(connection))}))(wrapperSource)}}({connector:function(){return new ReplaySubject.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./libs/ui-toolkit/angular/src/lib/message/message.docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_message_component_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-toolkit/angular/src/lib/message/message.component.stories.ts");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_message_component_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"message",children:"Message"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_message_component_stories__WEBPACK_IMPORTED_MODULE_4__.Message}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"imports",children:"Imports"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"module-import",children:"Module import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import { FlxMessageModule } from '@flowx/angular-ui-toolkit'\n\n@NgModule({\n  ...\n  imports: [..., FlxMessageModule]\n  ...\n})\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"standalone-import",children:"Standalone import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"\nimport { FlxMessageComponent } from '@flowx/angular-ui-toolkit'\n\n@Component({\n  ...\n  standalone: true,\n  imports: [..., FlxMessageComponent] // can also import FlxMessageModule\n  ...\n})\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"inputs",children:"Inputs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oz,{children:'\n| Name    | Description                              |\n| ------- | ---------------------------------------- |\n| type    | "success" / "warning" / "error" / "info" |\n| display | "text" / "border" / "fill"               |\n| layout  | "row"/ "column"                          |\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<flx-message\n  [type]="type"\n  [display]="display"\n  [layout]="layout"\n>\n  Message label\n  <button>Action</button>\n</flx-message>\n'})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/ui-toolkit/angular/src/lib/message/message.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Message:()=>Message,__namedExportsOrder:()=>__namedExportsOrder,default:()=>message_component_stories});var http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),message_componentngResource=__webpack_require__("./libs/ui-toolkit/angular/src/lib/message/message.component.scss?ngResource"),message_componentngResource_default=__webpack_require__.n(message_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon_module=__webpack_require__("./libs/ui-toolkit/angular/src/lib/icon/icon.module.ts");let FlxMessageComponent=class FlxMessageComponent{constructor(){this.type=(0,core.input)("success"),this.display=(0,core.input)("border"),this.layout=(0,core.input)("row"),this.className=(0,core.computed)((()=>`flx-message ${this.type()} ${this.display()} ${this.layout()}`))}static{this.propDecorators={type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],display:[{type:core.Input,args:[{isSignal:!0,alias:"display",required:!1,transform:void 0}]}],layout:[{type:core.Input,args:[{isSignal:!0,alias:"layout",required:!1,transform:void 0}]}]}}};FlxMessageComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"flx-message",imports:[common.CommonModule,icon_module.m],template:'\x3c!-- switch case is needed here since select on ng-content cannot be dynamic --\x3e\n    @switch (type()) {\n      @case (\'success\') {\n        <flx-icon-with-default\n          class="message-icon"\n          defaultName="success"\n        >\n          <ng-content select="[flxMessageSuccess]" />\n        </flx-icon-with-default>\n      }\n      @case (\'error\') {\n        <flx-icon-with-default\n          class="message-icon"\n          defaultName="error"\n        >\n          <ng-content select="[flxMessageError]" />\n        </flx-icon-with-default>\n      }\n      @case (\'warning\') {\n        <flx-icon-with-default\n          class="message-icon"\n          defaultName="warning"\n        >\n          <ng-content select="[flxMessageWarning]" />\n        </flx-icon-with-default>\n      }\n      @case (\'info\') {\n        <flx-icon-with-default\n          class="message-icon"\n          defaultName="info"\n        >\n          <ng-content select="[flxMessageInfo]" />\n        </flx-icon-with-default>\n      }\n    }\n    <ng-content />\n    \x3c!--message action--\x3e\n    <ng-content select="button" /> ',host:{"[class]":"className()"},encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[message_componentngResource_default()]})],FlxMessageComponent);let FlxMessageModule=class FlxMessageModule{};FlxMessageModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,FlxMessageComponent],exports:[FlxMessageComponent]})],FlxMessageModule);const message_component_stories={title:"Message",component:FlxMessageComponent,decorators:[(0,dist.moduleMetadata)({imports:[FlxMessageModule]}),(0,dist.applicationConfig)({providers:[(0,http.$R)(),(0,core.importProvidersFrom)(icon_module.m)]})],argTypes:{type:{options:["success","warning","error","info"],control:{type:"select"}},display:{options:["text","border","fill"],control:{type:"select"}},layout:{options:["row","column"],control:{type:"select"}},fontFamily:{options:["Open Sans","Source Code Pro","Bitter"],control:{type:"select"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2n2umsSLJbNigLx43nseml/FlowX-Design-System?node-id=6184%3A13635"}}},Message=(args=>({props:args,template:'\n  <div [style.fontFamily]="fontFamily" class="flx-default-theme">\n    <flx-message [type]="type" [display]="display" [layout]="layout" [style.width]="width > 0 ? width + \'px\' : \'auto\'">\n      {{label}}\n      <button *ngIf="hasAction">Action</button>\n      <flx-icon *ngIf="hasCustomIcons" name="info" flxMessageSuccess />\n      <flx-icon *ngIf="hasCustomIcons" name="error" flxMessageWarning />\n      <flx-icon *ngIf="hasCustomIcons" name="warning" flxMessageError />\n      <flx-icon *ngIf="hasCustomIcons" name="success" flxMessageInfo />\n    </flx-message>\n    </div>\n  '})).bind({});Message.args={fontFamily:"Open Sans",label:"Message",type:"success",display:"text",layout:"row",width:0,hasAction:!1,hasCustomIcons:!1};const __namedExportsOrder=["Message"];Message.parameters={...Message.parameters,docs:{...Message.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n  <div [style.fontFamily]="fontFamily" class="flx-default-theme">\n    <flx-message [type]="type" [display]="display" [layout]="layout" [style.width]="width > 0 ? width + \'px\' : \'auto\'">\n      {{label}}\n      <button *ngIf="hasAction">Action</button>\n      <flx-icon *ngIf="hasCustomIcons" name="info" flxMessageSuccess />\n      <flx-icon *ngIf="hasCustomIcons" name="error" flxMessageWarning />\n      <flx-icon *ngIf="hasCustomIcons" name="warning" flxMessageError />\n      <flx-icon *ngIf="hasCustomIcons" name="success" flxMessageInfo />\n    </flx-message>\n    </div>\n  `\n})',...Message.parameters?.docs?.source}}}},"./libs/ui-toolkit/angular/src/lib/message/message.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".flx-message {\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-radius: var(--flxTheme-message-borderRadius);\n  font-family: var(--flxTheme-message-fontFamily);\n  font-size: var(--flxTheme-message-fontSize);\n  font-weight: var(--flxTheme-message-fontWeight);\n  line-height: var(--flxTheme-message-lineHeight);\n  gap: var(--flxTheme-message-gap);\n  padding-left: var(--flxTheme-message-paddingLeft);\n  padding-right: var(--flxTheme-message-paddingRight);\n  color: var(--flxTheme-message-color);\n  box-shadow: var(--flxTheme-message-shadow, none);\n}\n.flx-message a {\n  color: var(--flxTheme-message-linkColor);\n}\n.flx-message .flx-icon {\n  filter: brightness(0) saturate(100%) var(--flxTheme-message-iconColor);\n}\n.flx-message .message-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  width: 20px;\n  height: 20px;\n}\n.flx-message.border, .flx-message.fill {\n  border-width: var(--flxTheme-message-borderWidth) !important;\n  border-color: var(--flxTheme-message-borderColor);\n  background-color: var(--flxTheme-message-backgroundColor);\n  padding-top: var(--flxTheme-message-paddingTop);\n  padding-bottom: var(--flxTheme-message-paddingBottom);\n}\n.flx-message.border {\n  border-style: solid;\n}\n.flx-message.fill button {\n  color: white;\n}\n.flx-message.column {\n  flex-direction: column;\n}\n.flx-message.column .flx-form-field-label {\n  text-align: center;\n}\n.flx-message .flx-form-field-label {\n  flex: 1 0;\n}\n.flx-message button {\n  flex: 0 0 auto;\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-weight: inherit;\n  line-height: inherit;\n}\n.flx-message button:hover {\n  text-decoration: underline;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);