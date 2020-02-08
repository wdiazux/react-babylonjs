import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { ShadowGenerator, Scene } from "@babylonjs/core";
export default class ShadowGeneratorLifecycleListener implements LifecycleListener<ShadowGenerator> {
    private props;
    private scene;
    private onMeshAddedObservable;
    private onMeshRemovedObservable;
    constructor(scene: Scene, props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<ShadowGenerator>): void;
    onUnmount(): void;
}
