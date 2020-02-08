import { Scene, EnvironmentHelper } from "@babylonjs/core";
import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
export default class EnvironmentHelperLifecycleListener implements LifecycleListener<EnvironmentHelper> {
    private props;
    private scene;
    constructor(scene: Scene, props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<EnvironmentHelper>): void;
    onUnmount(): void;
}
