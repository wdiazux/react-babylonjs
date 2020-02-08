import { LifecycleListener } from "./LifecycleListener";
import { HasPropsHandlers } from "./PropsHandler";
export interface InstanceMetadataParameter {
    delayCreation?: boolean;
    shadowGenerator?: boolean;
    acceptsMaterials?: boolean;
    isScene?: boolean;
    isShadowLight?: boolean;
    isEnvironment?: boolean;
    isTargetable?: boolean;
    isMesh?: boolean;
    isMaterial?: boolean;
    isGUI3DControl?: boolean;
    isGUI2DControl?: boolean;
    isTexture?: boolean;
    customType?: boolean;
    isCamera?: boolean;
}
/**
 * Props passed from controls that are not part of generated props and we are handling ourselves
 */
export declare type CustomProps = {
    /**
     * Only applicable for AdvanceDynamicTexture to attach to a mesh.  ADT.CreateForMesh(parent, ...) (TODO: add 'ByName')
     */
    createForParentMesh?: boolean;
    /**
     * for 3D control ".content" (which is 2D)
     */
    childrenAsContent?: boolean;
    /**
     * for VirtualKeyboard (2d input control names)
     */
    connectControlNames?: string[];
    /**
     * for VirtualKeyboard
     */
    defaultKeyboard?: boolean;
    /**
     * for Control3D, which has position, but not other properties like rotation.
     */
    linkToTransformNodeByName?: string;
    /**
     * List of mesh names to search for, which will be added as shadow casters.
     */
    shadowCasters?: string[];
    /**
     * List of mesh names to exclude from casting shadows (all other meshes by name will cast shadows)
     */
    shadowCastersExcluding?: string[];
    /**
     * For attaching the same material multiple meshes (by mesh name)
     */
    attachToMeshesByName?: string[];
    onControlAdded?: (instance: CreatedInstance<any>) => void;
    /**
     * Assign to this property on the parent.  Parent property is cleared on umnount.
     */
    assignTo?: string;
    /**
     * for VRExperienceHelper
     */
    enableInteractions?: boolean;
};
export interface CreatedInstanceMetadata extends InstanceMetadataParameter {
    className: string;
}
/**
 * CreatedInstance simply contains a Babylon object and a fiber object able to detect and process updates via props to the BabylonObject.
 *
 * The parent/child is part of the Fiber Reconciler and helps attach materials/parenting/cameras/shadows/etc.
 */
export interface CreatedInstance<T> {
    /**
     * During lifecycle init process for types delaying creation this may be unset (PhysicsImpostor/ShadowGenerator)
     * The 'hostInstance' may depend on another object (ie: mesh/light source)
     */
    hostInstance?: T;
    metadata: CreatedInstanceMetadata;
    parent: CreatedInstance<any> | null;
    children: CreatedInstance<any>[];
    state?: any;
    customProps: CustomProps;
    propsHandlers?: HasPropsHandlers<T, any>;
    lifecycleListener?: LifecycleListener<T>;
}
export declare class CreatedInstanceImpl<T> implements CreatedInstance<T> {
    readonly hostInstance: T;
    readonly metadata: CreatedInstanceMetadata;
    parent: CreatedInstance<any> | null;
    children: CreatedInstance<any>[];
    propsHandlers: HasPropsHandlers<T, any>;
    customProps: CustomProps;
    constructor(hostInstance: T, metadata: CreatedInstanceMetadata, fiberObject: HasPropsHandlers<T, any>, customProps: CustomProps);
}
