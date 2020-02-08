import { Engine, Scene } from "@babylonjs/core";
import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
/**
 * This is a host component.  Much like a span or div for ReactDOM.render();
 */
export default class HostWithEventsFiber<T> implements LifecycleListener<T> {
    private _scene;
    private _engine;
    private _hostContextData;
    private _onParented?;
    private _onChildAdded?;
    private _onMount?;
    private _onUnmount?;
    constructor(scene: Scene, engine: Engine, props: any);
    onParented(parent: CreatedInstance<any> | undefined): void;
    onChildAdded(child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<T>): void;
    dispose(): void;
    onUnmount(): void;
}
