import { Scene, EventState } from '@babylonjs/core';
export declare type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;
export declare function useBeforeRender(callback: OnFrameRenderFn, mask?: number, insertFirst?: boolean, callOnce?: boolean): void;
