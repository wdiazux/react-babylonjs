import { LifecycleListener } from "../LifecycleListener";
import { CreatedInstance } from "../CreatedInstance";
import { VRExperienceHelper } from "@babylonjs/core";
export default class VRExperienceHelperLifecycleListener implements LifecycleListener<VRExperienceHelper> {
    private props;
    constructor(props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<VRExperienceHelper>): void;
    onUnmount(): void;
}
