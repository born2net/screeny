
/// <reference path="./node_modules/tns-core-modules/tns-core-modules.d.ts" /> Needed for autocompletion and compilation.

// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a820bbdead70913f0c750802b367ed54cb99b442/redux/redux.d.ts
// Type definitions for Redux v1.0.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Redux {

    interface ActionCreator extends Function {
        (...args: any[]): any;
    }

    interface Reducer extends Function {
        (state: any, action: any): any;
    }

    interface Dispatch extends Function {
        (action: any): any;
    }

    interface StoreMethods {
        dispatch: Dispatch;
        getState(): any;
    }


    interface MiddlewareArg {
        dispatch: Dispatch;
        getState: Function;
    }

    interface Middleware extends Function {
        (obj: MiddlewareArg): Function;
    }

    class Store {
        getReducer(): Reducer;
        replaceReducer(nextReducer: Reducer): void;
        dispatch(action: any): any;
        getState(): any;
        subscribe(listener: Function): Function;
    }

    function createStore(reducer: Reducer, initialState?: any, enhancer?: ()=>any): Store;
    function bindActionCreators<T>(actionCreators: T, dispatch: Dispatch): T;
    function combineReducers(reducers: any): Reducer;
    function applyMiddleware(...middlewares: Middleware[]): Function;
    function compose<T extends Function>(...functions: Function[]): T;
}

declare module "redux" {
    export = Redux;
}