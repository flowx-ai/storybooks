(self.webpackChunkflowx_process_renderer_ui=self.webpackChunkflowx_process_renderer_ui||[]).push([[9456,8868],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>combineLatest});var _Observable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_from__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),_util_identity__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");function combineLatest(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.lI)(args),resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.ms)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),observables=_a.args,keys=_a.keys;if(0===observables.length)return(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)([],scheduler);var result=new _Observable__WEBPACK_IMPORTED_MODULE_3__.c(function combineLatestInit(observables,scheduler,valueTransform){void 0===valueTransform&&(valueTransform=_util_identity__WEBPACK_IMPORTED_MODULE_5__.D);return function(subscriber){maybeSchedule(scheduler,(function(){for(var length=observables.length,values=new Array(length),active=length,remainingFirstValues=length,_loop_1=function(i){maybeSchedule(scheduler,(function(){var source=(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)(observables[i],scheduler),hasFirstValue=!1;source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__._)(subscriber,(function(value){values[i]=value,hasFirstValue||(hasFirstValue=!0,remainingFirstValues--),remainingFirstValues||subscriber.next(valueTransform(values.slice()))}),(function(){--active||subscriber.complete()})))}),subscriber)},i=0;i<length;i++)_loop_1(i)}),subscriber)}}(observables,scheduler,keys?function(values){return(0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.e)(keys,values)}:_util_identity__WEBPACK_IMPORTED_MODULE_5__.D));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.I)(resultSelector)):result}function maybeSchedule(scheduler,execute,subscription){scheduler?(0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__.N)(subscription,scheduler,execute):execute()}},"./node_modules/rxjs/dist/esm5/internal/observable/empty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>EMPTY});var EMPTY=new(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js").c)((function(subscriber){return subscriber.complete()}))},"./node_modules/rxjs/dist/esm5/internal/operators/catchError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>catchError});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function catchError(selector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){var handledResult,innerSub=null,syncUnsub=!1;innerSub=source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__._)(subscriber,void 0,void 0,(function(err){handledResult=(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Tg)(selector(err,catchError(selector)(source))),innerSub?(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber)):syncUnsub=!0}))),syncUnsub&&(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),Subscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function handleReset(reset,on){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];if(!0!==on){if(!1!==on){var onSubscriber=new Subscriber.Ms({next:function(){onSubscriber.unsubscribe(),reset()}});return(0,innerFrom.Tg)(on.apply(void 0,(0,tslib_es6.fX)([],(0,tslib_es6.zs)(args)))).subscribe(onSubscriber)}}else reset()}function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,function share(options){void 0===options&&(options={});var _a=options.connector,connector=void 0===_a?function(){return new Subject.B}:_a,_b=options.resetOnError,resetOnError=void 0===_b||_b,_c=options.resetOnComplete,resetOnComplete=void 0===_c||_c,_d=options.resetOnRefCountZero,resetOnRefCountZero=void 0===_d||_d;return function(wrapperSource){var connection,resetConnection,subject,refCount=0,hasCompleted=!1,hasErrored=!1,cancelReset=function(){null==resetConnection||resetConnection.unsubscribe(),resetConnection=void 0},reset=function(){cancelReset(),connection=subject=void 0,hasCompleted=hasErrored=!1},resetAndUnsubscribe=function(){var conn=connection;reset(),null==conn||conn.unsubscribe()};return(0,lift.N)((function(source,subscriber){refCount++,hasErrored||hasCompleted||cancelReset();var dest=subject=null!=subject?subject:connector();subscriber.add((function(){0!=--refCount||hasErrored||hasCompleted||(resetConnection=handleReset(resetAndUnsubscribe,resetOnRefCountZero))})),dest.subscribe(subscriber),!connection&&refCount>0&&(connection=new Subscriber.Ms({next:function(value){return dest.next(value)},error:function(err){hasErrored=!0,cancelReset(),resetConnection=handleReset(reset,resetOnError,err),dest.error(err)},complete:function(){hasCompleted=!0,cancelReset(),resetConnection=handleReset(reset,resetOnComplete),dest.complete()}}),(0,innerFrom.Tg)(source).subscribe(connection))}))(wrapperSource)}}({connector:function(){return new ReplaySubject.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./libs/ui-toolkit/angular/src/lib/icon/icon.docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_icon_component_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-toolkit/angular/src/lib/icon/icon.component.stories.ts");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_icon_component_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"icon",children:"Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_icon_component_stories__WEBPACK_IMPORTED_MODULE_4__.IconShowcase}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"imports",children:"Imports"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"module-import",children:"Module import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import { FlxIconModule } from '@flowx/angular-ui-toolkit'\n\n@NgModule({\n  ...\n  imports: [..., FlxIconModule]\n  ...\n})\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"standalone-import",children:"Standalone import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"\nimport { FlxIconComponent, FlxIconWithDefaultComponent } from '@flowx/angular-ui-toolkit'\n\n@Component({\n  ...\n  standalone: true,\n  imports: [..., FlxIconComponent, FlxIconWithDefaultComponent] // can also import FlxIconModule\n  ...\n})\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"inputs",children:"Inputs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"flxiconcomponent",children:"FlxIconComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oz,{children:"\n| Name   | Description                              | Default | Comments                           |\n| ------ | ---------------------------------------- | ------- | ---------------------------------- |\n| name   | name of the icon, resolved from icon set | -       |                                    |\n| path   | path to the icon                         | -       |                                    |\n| width  | width of the icon in pixels              | -       | if not set, default is 16px in css |\n| height | height of the icon in pixels             | -       | if not set, default is 16px in css |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"flxiconwithdefaultcomponent",children:"FlxIconWithDefaultComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oz,{children:"\n| Name        | Description                                  | Default | Comments                           |\n| ----------- | -------------------------------------------- | ------- | ---------------------------------- |\n| defaultName | name of the fallback, resolved from icon set | -       |                                    |\n| defaultPath | path to the fallback icon                    | -       |                                    |\n| width       | width of the icon in pixels                  | -       | if not set, default is 16px in css |\n| height      | height of the icon in pixels                 | -       | if not set, default is 16px in css |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"flxiconcomponent-1",children:"FlxIconComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<flx-icon\n  [name]="iconName"\n  [width]="24"\n  [height]="24"\n/>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"flxiconwithdefaultcomponent-1",children:"FlxIconWithDefaultComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<flx-icon-with-default\n  [width]="24"\n  [height]="24"\n  [defaultName]="defaultIconName"\n>\n  <flx-icon\n    *ngIf="condition"\n    [name]="iconName"\n    [width]="24"\n    [height]="24"\n  />\n</flx-icon-with-default>\n'})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_mircea_FlowX_repos_designer_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/ui-toolkit/angular/src/lib/icon/icon.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconShowcase:()=>IconShowcase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_Users_mircea_FlowX_repos_designer_libs_ui_toolkit_angular_src_lib_icon_icon_component_stories_ts_css_ngResource_Users_mircea_FlowX_repos_designer_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmx4LWljb24tc2hvd2Nhc2UgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgIGdhcDogMTZweDsKICAgIH0KICAgIC5mbHgtaWNvbi13cmFwcGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGdhcDogMTZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOwogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwOwogICAgICBwYWRkaW5nOiA0MHB4IDI0cHggMjRweCAyNHB4OwogICAgICBtaW4td2lkdGg6IDEyMHB4OwogICAgfQogIA_3D_3D_Users_mircea_FlowX_repos_designer_libs_ui_toolkit_angular_src_lib_icon_icon_component_stories_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-toolkit/angular/src/lib/icon/icon.component.stories.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZmx4LWljb24tc2hvd2Nhc2UgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgIGdhcDogMTZweDsKICAgIH0KICAgIC5mbHgtaWNvbi13cmFwcGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGdhcDogMTZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOwogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwOwogICAgICBwYWRkaW5nOiA0MHB4IDI0cHggMjRweCAyNHB4OwogICAgICBtaW4td2lkdGg6IDEyMHB4OwogICAgfQogIA%3D%3D!./libs/ui-toolkit/angular/src/lib/icon/icon.component.stories.ts"),_Users_mircea_FlowX_repos_designer_libs_ui_toolkit_angular_src_lib_icon_icon_component_stories_ts_css_ngResource_Users_mircea_FlowX_repos_designer_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmx4LWljb24tc2hvd2Nhc2UgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgIGdhcDogMTZweDsKICAgIH0KICAgIC5mbHgtaWNvbi13cmFwcGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGdhcDogMTZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOwogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwOwogICAgICBwYWRkaW5nOiA0MHB4IDI0cHggMjRweCAyNHB4OwogICAgICBtaW4td2lkdGg6IDEyMHB4OwogICAgfQogIA_3D_3D_Users_mircea_FlowX_repos_designer_libs_ui_toolkit_angular_src_lib_icon_icon_component_stories_ts__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_Users_mircea_FlowX_repos_designer_libs_ui_toolkit_angular_src_lib_icon_icon_component_stories_ts_css_ngResource_Users_mircea_FlowX_repos_designer_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmx4LWljb24tc2hvd2Nhc2UgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgIGdhcDogMTZweDsKICAgIH0KICAgIC5mbHgtaWNvbi13cmFwcGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGdhcDogMTZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOwogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwOwogICAgICBwYWRkaW5nOiA0MHB4IDI0cHggMjRweCAyNHB4OwogICAgICBtaW4td2lkdGg6IDEyMHB4OwogICAgfQogIA_3D_3D_Users_mircea_FlowX_repos_designer_libs_ui_toolkit_angular_src_lib_icon_icon_component_stories_ts__WEBPACK_IMPORTED_MODULE_4__),_angular_common_http__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_icon_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/ui-toolkit/angular/src/lib/icon/icon.module.ts"),_icon_set__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui-toolkit/angular/src/lib/icon/icon_set/index.ts");let FlxIconShowcaseComponent=class FlxIconShowcaseComponent{constructor(){this.iconNames=Object.keys(_icon_set__WEBPACK_IMPORTED_MODULE_1__.A)}};FlxIconShowcaseComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"flx-icon-showcase",standalone:!1,template:'\n    <div class="flx-icon-showcase">\n      @for (iconName of iconNames; track iconName) {\n        <div class="flx-icon-wrapper">\n          <flx-icon\n            [style.color]="color"\n            [name]="iconName"\n            [width]="iconSize"\n            [height]="iconSize"\n          />\n          <strong>\n            <code>\n              {{ iconName }}\n            </code>\n          </strong>\n        </div>\n      }\n    </div>\n  ',styles:[_Users_mircea_FlowX_repos_designer_libs_ui_toolkit_angular_src_lib_icon_icon_component_stories_ts_css_ngResource_Users_mircea_FlowX_repos_designer_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmx4LWljb24tc2hvd2Nhc2UgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgIGdhcDogMTZweDsKICAgIH0KICAgIC5mbHgtaWNvbi13cmFwcGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGdhcDogMTZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOwogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwOwogICAgICBwYWRkaW5nOiA0MHB4IDI0cHggMjRweCAyNHB4OwogICAgICBtaW4td2lkdGg6IDEyMHB4OwogICAgfQogIA_3D_3D_Users_mircea_FlowX_repos_designer_libs_ui_toolkit_angular_src_lib_icon_icon_component_stories_ts__WEBPACK_IMPORTED_MODULE_4___default()]})],FlxIconShowcaseComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Icon",component:FlxIconShowcaseComponent,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_icon_module__WEBPACK_IMPORTED_MODULE_5__.m]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.$R)(),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_icon_module__WEBPACK_IMPORTED_MODULE_5__.m)]})],argTypes:{color:{control:{type:"color"}},iconSize:{type:"number"}}},IconShowcase=(args=>({props:args})).bind({});IconShowcase.args={color:"#006bd8",iconSize:44};const __namedExportsOrder=["IconShowcase"];IconShowcase.parameters={...IconShowcase.parameters,docs:{...IconShowcase.parameters?.docs,source:{originalSource:"(args: FlxIconComponent) => ({\n  props: args\n})",...IconShowcase.parameters?.docs?.source}}}},"./libs/ui-toolkit/angular/src/lib/icon/icon.component.stories.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZmx4LWljb24tc2hvd2Nhc2UgewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgIGdhcDogMTZweDsKICAgIH0KICAgIC5mbHgtaWNvbi13cmFwcGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgIGdhcDogMTZweDsKICAgICAgYm9yZGVyLXJhZGl1czogNHB4OwogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOwogICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwOwogICAgICBwYWRkaW5nOiA0MHB4IDI0cHggMjRweCAyNHB4OwogICAgICBtaW4td2lkdGg6IDEyMHB4OwogICAgfQogIA%3D%3D!./libs/ui-toolkit/angular/src/lib/icon/icon.component.stories.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n    .flx-icon-showcase {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 16px;\n    }\n    .flx-icon-wrapper {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      gap: 16px;\n      border-radius: 4px;\n      background-color: #f2f2f2;\n      border: 1px solid #e0e0e0;\n      padding: 40px 24px 24px 24px;\n      min-width: 120px;\n    }\n  ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);