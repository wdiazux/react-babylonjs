import { HostConfig } from "react-reconciler";
import { Scene, Engine, Nullable } from '@babylonjs/core';
import { CreatedInstance } from "./CreatedInstance";
import { UpdatePayload } from "./PropsHandler";
type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
    timeout: number;
};
type RequestIdleCallbackDeadline = {
    readonly didTimeout: boolean;
    timeRemaining: (() => number);
};
declare global {
    interface Window {
        requestIdleCallback: ((callback: ((deadline: RequestIdleCallbackDeadline) => void), opts?: RequestIdleCallbackOptions) => RequestIdleCallbackHandle);
        cancelIdleCallback: ((handle: RequestIdleCallbackHandle) => void);
    }
}
declare type HostCreatedInstance<T> = CreatedInstance<T> | undefined;
declare type Props = {
    scene: Scene;
} & any;
export declare type Container = {
    engine: Nullable<Engine>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
    scene: Nullable<Scene>;
    rootInstance: CreatedInstance<any>;
};
declare type HostContext = {} & Container;
declare type TimeoutHandler = number | undefined;
declare type NoTimeout = number;
declare const ReactBabylonJSHostConfig: HostConfig<string, Props, Container, HostCreatedInstance<any>, {}, {}, {}, HostContext, UpdatePayload, {}, TimeoutHandler, NoTimeout>;
export default ReactBabylonJSHostConfig;
