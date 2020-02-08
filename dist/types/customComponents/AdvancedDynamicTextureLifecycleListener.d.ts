import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene } from "@babylonjs/core";
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
export default class AdvancedDynamicTextureLifecycleListener implements LifecycleListener<AdvancedDynamicTexture> {
    private props;
    private scene;
    constructor(scene: Scene, props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<AdvancedDynamicTexture>): void;
    addControls(instance: CreatedInstance<AdvancedDynamicTexture>): void;
    connect(keyboard: CreatedInstance<any>, searchInstance: CreatedInstance<any>, controlNames: string[]): void;
    onUnmount(): void;
}
