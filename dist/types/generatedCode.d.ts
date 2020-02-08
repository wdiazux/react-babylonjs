import { PropsHandler, PropertyUpdate, HasPropsHandlers } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { FiberNodeProps, FiberTransformNodeProps, FiberAbstractMeshProps, FiberMeshProps, FiberCameraProps, FiberTargetCameraProps, FiberFreeCameraProps, FiberTouchCameraProps, FiberUniversalCameraProps, FiberGamepadCameraProps, FiberAnaglyphGamepadCameraProps, FiberStereoscopicGamepadCameraProps, FiberAnaglyphUniversalCameraProps, FiberStereoscopicUniversalCameraProps, FiberDeviceOrientationCameraProps, FiberVRDeviceOrientationFreeCameraProps, FiberVRDeviceOrientationGamepadCameraProps, FiberAnaglyphFreeCameraProps, FiberStereoscopicFreeCameraProps, FiberVirtualJoysticksCameraProps, FiberWebVRFreeCameraProps, FiberWebXRCameraProps, FiberArcRotateCameraProps, FiberAnaglyphArcRotateCameraProps, FiberStereoscopicArcRotateCameraProps, FiberVRDeviceOrientationArcRotateCameraProps, FiberFlyCameraProps, FiberFollowCameraProps, FiberArcFollowCameraProps, FiberMaterialProps, FiberShaderMaterialProps, FiberMultiMaterialProps, FiberPushMaterialProps, FiberStandardMaterialProps, FiberBackgroundMaterialProps, FiberPBRBaseMaterialProps, FiberPBRBaseSimpleMaterialProps, FiberPBRMetallicRoughnessMaterialProps, FiberPBRSpecularGlossinessMaterialProps, FiberPBRMaterialProps, FiberFluentMaterialProps, FiberLightProps, FiberShadowLightProps, FiberDirectionalLightProps, FiberPointLightProps, FiberSpotLightProps, FiberHemisphericLightProps, FiberControlProps, FiberContainerProps, FiberRectangleProps, FiberButtonProps, FiberSelectionPanelProps, FiberScrollViewerProps, FiberStackPanelProps, FiberVirtualKeyboardProps, FiberEllipseProps, FiberGridProps, Fiber_ScrollViewerWindowProps, FiberTextBlockProps, FiberImageProps, FiberCheckboxProps, FiberColorPickerProps, FiberInputTextProps, FiberInputPasswordProps, FiberLineProps, FiberMultiLineProps, FiberRadioButtonProps, FiberBaseSliderProps, FiberScrollBarProps, FiberSliderProps, FiberImageBasedSliderProps, FiberDisplayGridProps, FiberControl3DProps, FiberContainer3DProps, FiberVolumeBasedPanelProps, FiberCylinderPanelProps, FiberPlanePanelProps, FiberScatterPanelProps, FiberSpherePanelProps, FiberStackPanel3DProps, FiberAbstractButton3DProps, FiberButton3DProps, FiberHolographicButtonProps, FiberMeshButton3DProps, FiberBaseTextureProps, FiberCubeTextureProps, FiberRawCubeTextureProps, FiberTextureProps, FiberRawTextureProps, FiberProceduralTextureProps, FiberCustomProceduralTextureProps, FiberNoiseProceduralTextureProps, FiberRenderTargetTextureProps, FiberMirrorTextureProps, FiberMultiRenderTargetProps, FiberRefractionTextureProps, FiberMultiviewRenderTargetProps, FiberVideoTextureProps, FiberDynamicTextureProps, FiberAdvancedDynamicTextureProps, FiberRawTexture3DProps, FiberColorGradingTextureProps, FiberEquiRectangularCubeTextureProps, FiberHDRCubeTextureProps, FiberHtmlElementTextureProps, FiberGUI3DManagerProps, FiberShadowGeneratorProps, FiberEnvironmentHelperProps, FiberPhysicsImpostorProps, FiberVRExperienceHelperProps, FiberDynamicTerrainProps, FiberSceneProps } from "./generatedProps";
import { DynamicTerrain as ExtensionsDynamicTerrain } from "./extensions/DynamicTerrain";
import { Node as BabylonjsCoreNode } from "@babylonjs/core/node";
import { Scene as BabylonjsCoreScene } from "@babylonjs/core/scene";
import { Camera as BabylonjsCoreCamera } from "@babylonjs/core/Cameras/camera";
import { EnvironmentHelper as BabylonjsCoreEnvironmentHelper } from "@babylonjs/core/Helpers/environmentHelper";
import { Light as BabylonjsCoreLight } from "@babylonjs/core/Lights/light";
import { Material as BabylonjsCoreMaterial } from "@babylonjs/core/Materials/material";
import { Mesh as BabylonjsCoreMesh } from "@babylonjs/core/Meshes/mesh";
import { PhysicsImpostor as BabylonjsCorePhysicsImpostor } from "@babylonjs/core/Physics/physicsImpostor";
import { AdvancedDynamicTexture as BabylonjsGuiAdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { GUI3DManager as BabylonjsGuiGUI3DManager } from "@babylonjs/gui/3D/gui3DManager";
import { VRExperienceHelper as BabylonjsCoreVRExperienceHelper } from "@babylonjs/core/Cameras/VR/vrExperienceHelper";
import { ShadowGenerator as BabylonjsCoreShadowGenerator } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { BaseTexture as BabylonjsCoreBaseTexture } from "@babylonjs/core/Materials/Textures/baseTexture";
import { Control as BabylonjsGuiControl } from "@babylonjs/gui/2D/controls/control";
import { TextBlock as BabylonjsGuiTextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { Control3D as BabylonjsGuiControl3D } from "@babylonjs/gui/3D/controls/control3D";
import { TransformNode as BabylonjsCoreTransformNode } from "@babylonjs/core/Meshes/transformNode";
import { AbstractMesh as BabylonjsCoreAbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { RenderTargetTexture as BabylonjsCoreRenderTargetTexture } from "@babylonjs/core/Materials/Textures/renderTargetTexture";
import { TargetCamera as BabylonjsCoreTargetCamera } from "@babylonjs/core/Cameras/targetCamera";
import { FreeCamera as BabylonjsCoreFreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { TouchCamera as BabylonjsCoreTouchCamera } from "@babylonjs/core/Cameras/touchCamera";
import { UniversalCamera as BabylonjsCoreUniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import { GamepadCamera as BabylonjsCoreGamepadCamera } from "@babylonjs/core/Cameras/gamepadCamera";
import { AnaglyphGamepadCamera as BabylonjsCoreAnaglyphGamepadCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera";
import { StereoscopicGamepadCamera as BabylonjsCoreStereoscopicGamepadCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera";
import { AnaglyphUniversalCamera as BabylonjsCoreAnaglyphUniversalCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera";
import { StereoscopicUniversalCamera as BabylonjsCoreStereoscopicUniversalCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera";
import { DeviceOrientationCamera as BabylonjsCoreDeviceOrientationCamera } from "@babylonjs/core/Cameras/deviceOrientationCamera";
import { VRDeviceOrientationFreeCamera as BabylonjsCoreVRDeviceOrientationFreeCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera";
import { VRDeviceOrientationGamepadCamera as BabylonjsCoreVRDeviceOrientationGamepadCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera";
import { AnaglyphFreeCamera as BabylonjsCoreAnaglyphFreeCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera";
import { StereoscopicFreeCamera as BabylonjsCoreStereoscopicFreeCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera";
import { VirtualJoysticksCamera as BabylonjsCoreVirtualJoysticksCamera } from "@babylonjs/core/Cameras/virtualJoysticksCamera";
import { WebVRFreeCamera as BabylonjsCoreWebVRFreeCamera } from "@babylonjs/core/Cameras/VR/webVRCamera";
import { WebXRCamera as BabylonjsCoreWebXRCamera } from "@babylonjs/core/Cameras/XR/webXRCamera";
import { ArcRotateCamera as BabylonjsCoreArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { AnaglyphArcRotateCamera as BabylonjsCoreAnaglyphArcRotateCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera";
import { StereoscopicArcRotateCamera as BabylonjsCoreStereoscopicArcRotateCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera";
import { VRDeviceOrientationArcRotateCamera as BabylonjsCoreVRDeviceOrientationArcRotateCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera";
import { FlyCamera as BabylonjsCoreFlyCamera } from "@babylonjs/core/Cameras/flyCamera";
import { FollowCamera as BabylonjsCoreFollowCamera, ArcFollowCamera as BabylonjsCoreArcFollowCamera } from "@babylonjs/core/Cameras/followCamera";
import { ShaderMaterial as BabylonjsCoreShaderMaterial } from "@babylonjs/core/Materials/shaderMaterial";
import { Texture as BabylonjsCoreTexture } from "@babylonjs/core/Materials/Textures/texture";
import { MultiMaterial as BabylonjsCoreMultiMaterial } from "@babylonjs/core/Materials/multiMaterial";
import { PushMaterial as BabylonjsCorePushMaterial } from "@babylonjs/core/Materials/pushMaterial";
import { StandardMaterial as BabylonjsCoreStandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { BackgroundMaterial as BabylonjsCoreBackgroundMaterial } from "@babylonjs/core/Materials/Background/backgroundMaterial";
import { ShadowLight as BabylonjsCoreShadowLight } from "@babylonjs/core/Lights/shadowLight";
import { PBRBaseMaterial as BabylonjsCorePBRBaseMaterial } from "@babylonjs/core/Materials/PBR/pbrBaseMaterial";
import { PBRBaseSimpleMaterial as BabylonjsCorePBRBaseSimpleMaterial } from "@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial";
import { PBRMetallicRoughnessMaterial as BabylonjsCorePBRMetallicRoughnessMaterial } from "@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial";
import { PBRSpecularGlossinessMaterial as BabylonjsCorePBRSpecularGlossinessMaterial } from "@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial";
import { PBRMaterial as BabylonjsCorePBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import { FluentMaterial as BabylonjsGuiFluentMaterial } from "@babylonjs/gui/3D/materials/fluentMaterial";
import { DirectionalLight as BabylonjsCoreDirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { PointLight as BabylonjsCorePointLight } from "@babylonjs/core/Lights/pointLight";
import { SpotLight as BabylonjsCoreSpotLight } from "@babylonjs/core/Lights/spotLight";
import { HemisphericLight as BabylonjsCoreHemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Container as BabylonjsGuiContainer } from "@babylonjs/gui/2D/controls/container";
import { Rectangle as BabylonjsGuiRectangle } from "@babylonjs/gui/2D/controls/rectangle";
import { Button as BabylonjsGuiButton } from "@babylonjs/gui/2D/controls/button";
import { SelectionPanel as BabylonjsGuiSelectionPanel } from "@babylonjs/gui/2D/controls/selector";
import { ScrollViewer as BabylonjsGuiScrollViewer } from "@babylonjs/gui/2D/controls/scrollViewers/scrollViewer";
import { StackPanel as BabylonjsGuiStackPanel } from "@babylonjs/gui/2D/controls/stackPanel";
import { VirtualKeyboard as BabylonjsGuiVirtualKeyboard } from "@babylonjs/gui/2D/controls/virtualKeyboard";
import { Ellipse as BabylonjsGuiEllipse } from "@babylonjs/gui/2D/controls/ellipse";
import { Grid as BabylonjsGuiGrid } from "@babylonjs/gui/2D/controls/grid";
import { _ScrollViewerWindow as BabylonjsGui_ScrollViewerWindow } from "@babylonjs/gui/2D/controls/scrollViewers/scrollViewerWindow";
import { Image as BabylonjsGuiImage } from "@babylonjs/gui/2D/controls/image";
import { Checkbox as BabylonjsGuiCheckbox } from "@babylonjs/gui/2D/controls/checkbox";
import { ColorPicker as BabylonjsGuiColorPicker } from "@babylonjs/gui/2D/controls/colorpicker";
import { InputText as BabylonjsGuiInputText } from "@babylonjs/gui/2D/controls/inputText";
import { InputPassword as BabylonjsGuiInputPassword } from "@babylonjs/gui/2D/controls/inputPassword";
import { Line as BabylonjsGuiLine } from "@babylonjs/gui/2D/controls/line";
import { MultiLine as BabylonjsGuiMultiLine } from "@babylonjs/gui/2D/controls/multiLine";
import { RadioButton as BabylonjsGuiRadioButton } from "@babylonjs/gui/2D/controls/radioButton";
import { BaseSlider as BabylonjsGuiBaseSlider } from "@babylonjs/gui/2D/controls/sliders/baseSlider";
import { ScrollBar as BabylonjsGuiScrollBar } from "@babylonjs/gui/2D/controls/sliders/scrollBar";
import { Slider as BabylonjsGuiSlider } from "@babylonjs/gui/2D/controls/sliders/slider";
import { ImageBasedSlider as BabylonjsGuiImageBasedSlider } from "@babylonjs/gui/2D/controls/sliders/imageBasedSlider";
import { DisplayGrid as BabylonjsGuiDisplayGrid } from "@babylonjs/gui/2D/controls/displayGrid";
import { Container3D as BabylonjsGuiContainer3D } from "@babylonjs/gui/3D/controls/container3D";
import { VolumeBasedPanel as BabylonjsGuiVolumeBasedPanel } from "@babylonjs/gui/3D/controls/volumeBasedPanel";
import { CylinderPanel as BabylonjsGuiCylinderPanel } from "@babylonjs/gui/3D/controls/cylinderPanel";
import { PlanePanel as BabylonjsGuiPlanePanel } from "@babylonjs/gui/3D/controls/planePanel";
import { ScatterPanel as BabylonjsGuiScatterPanel } from "@babylonjs/gui/3D/controls/scatterPanel";
import { SpherePanel as BabylonjsGuiSpherePanel } from "@babylonjs/gui/3D/controls/spherePanel";
import { StackPanel3D as BabylonjsGuiStackPanel3D } from "@babylonjs/gui/3D/controls/stackPanel3D";
import { AbstractButton3D as BabylonjsGuiAbstractButton3D } from "@babylonjs/gui/3D/controls/abstractButton3D";
import { Button3D as BabylonjsGuiButton3D } from "@babylonjs/gui/3D/controls/button3D";
import { HolographicButton as BabylonjsGuiHolographicButton } from "@babylonjs/gui/3D/controls/holographicButton";
import { MeshButton3D as BabylonjsGuiMeshButton3D } from "@babylonjs/gui/3D/controls/meshButton3D";
import { CubeTexture as BabylonjsCoreCubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { RawCubeTexture as BabylonjsCoreRawCubeTexture } from "@babylonjs/core/Materials/Textures/rawCubeTexture";
import { RawTexture as BabylonjsCoreRawTexture } from "@babylonjs/core/Materials/Textures/rawTexture";
import { ProceduralTexture as BabylonjsCoreProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture";
import { CustomProceduralTexture as BabylonjsCoreCustomProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture";
import { NoiseProceduralTexture as BabylonjsCoreNoiseProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture";
import { MirrorTexture as BabylonjsCoreMirrorTexture } from "@babylonjs/core/Materials/Textures/mirrorTexture";
import { MultiRenderTarget as BabylonjsCoreMultiRenderTarget } from "@babylonjs/core/Materials/Textures/multiRenderTarget";
import { RefractionTexture as BabylonjsCoreRefractionTexture } from "@babylonjs/core/Materials/Textures/refractionTexture";
import { MultiviewRenderTarget as BabylonjsCoreMultiviewRenderTarget } from "@babylonjs/core/Materials/Textures/MultiviewRenderTarget";
import { VideoTexture as BabylonjsCoreVideoTexture } from "@babylonjs/core/Materials/Textures/videoTexture";
import { DynamicTexture as BabylonjsCoreDynamicTexture } from "@babylonjs/core/Materials/Textures/dynamicTexture";
import { RawTexture3D as BabylonjsCoreRawTexture3D } from "@babylonjs/core/Materials/Textures/rawTexture3D";
import { ColorGradingTexture as BabylonjsCoreColorGradingTexture } from "@babylonjs/core/Materials/Textures/colorGradingTexture";
import { EquiRectangularCubeTexture as BabylonjsCoreEquiRectangularCubeTexture } from "@babylonjs/core/Materials/Textures/equiRectangularCubeTexture";
import { HDRCubeTexture as BabylonjsCoreHDRCubeTexture } from "@babylonjs/core/Materials/Textures/hdrCubeTexture";
import { HtmlElementTexture as BabylonjsCoreHtmlElementTexture } from "@babylonjs/core/Materials/Textures/htmlElementTexture";
export declare class FiberNodePropsHandler implements PropsHandler<BabylonjsCoreNode, FiberNodeProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreNode, oldProps: FiberNodeProps, newProps: FiberNodeProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Node is the basic class for all scene objects (Mesh, Light, Camera.)
 *
 * This code has been generated
 */
export declare class FiberNode implements HasPropsHandlers<BabylonjsCoreNode, FiberNodeProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreNode, FiberNodeProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreNode, FiberNodeProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTransformNodePropsHandler implements PropsHandler<BabylonjsCoreTransformNode, FiberTransformNodeProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTransformNode, oldProps: FiberTransformNodeProps, newProps: FiberTransformNodeProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix.
 *
 * This code has been generated
 */
export declare class FiberTransformNode implements HasPropsHandlers<BabylonjsCoreNode, FiberNodeProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreNode, FiberNodeProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreNode, FiberNodeProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAbstractMeshPropsHandler implements PropsHandler<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAbstractMesh, oldProps: FiberAbstractMeshProps, newProps: FiberAbstractMeshProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to store all common mesh properties
 *
 * This code has been generated
 */
export declare class FiberAbstractMesh implements HasPropsHandlers<BabylonjsCoreTransformNode, FiberTransformNodeProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreTransformNode, FiberTransformNodeProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreTransformNode, FiberTransformNodeProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMeshPropsHandler implements PropsHandler<BabylonjsCoreMesh, FiberMeshProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMesh, oldProps: FiberMeshProps, newProps: FiberMeshProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to represent renderable models
 *
 * This code has been generated
 */
export declare class FiberMesh implements HasPropsHandlers<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCameraPropsHandler implements PropsHandler<BabylonjsCoreCamera, FiberCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreCamera, oldProps: FiberCameraProps, newProps: FiberCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This is the base class of all the camera used in the application.
 *
 * This code has been generated
 */
export declare class FiberCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = false;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTargetCameraPropsHandler implements PropsHandler<BabylonjsCoreTargetCamera, FiberTargetCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTargetCamera, oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A target camera takes a mesh or position as a target and continues to look at it while it moves.
 * This is the base of the follow, arc rotate cameras and Free camera
 *
 * This code has been generated
 */
export declare class FiberTargetCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreFreeCamera, FiberFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFreeCamera, oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * Please consider using the new UniversalCamera instead as it adds more functionality like the gamepad.
 *
 * This code has been generated
 */
export declare class FiberFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTouchCameraPropsHandler implements PropsHandler<BabylonjsCoreTouchCamera, FiberTouchCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTouchCamera, oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a FPS type of camera controlled by touch.
 * This is like a universal camera minus the Gamepad controls.
 *
 * This code has been generated
 */
export declare class FiberTouchCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberUniversalCameraPropsHandler implements PropsHandler<BabylonjsCoreUniversalCamera, FiberUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreUniversalCamera, oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
 * which still works and will still be found in many Playgrounds.
 *
 * This code has been generated
 */
export declare class FiberUniversalCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberGamepadCameraPropsHandler implements PropsHandler<BabylonjsCoreGamepadCamera, FiberGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreGamepadCamera, oldProps: FiberGamepadCameraProps, newProps: FiberGamepadCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a FPS type of camera. This is only here for back compat purpose.
 * Please use the UniversalCamera instead as both are identical.
 *
 * This code has been generated
 */
export declare class FiberGamepadCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAnaglyphGamepadCameraPropsHandler implements PropsHandler<BabylonjsCoreAnaglyphGamepadCamera, FiberAnaglyphGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAnaglyphGamepadCamera, oldProps: FiberAnaglyphGamepadCameraProps, newProps: FiberAnaglyphGamepadCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate anaglyphic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export declare class FiberAnaglyphGamepadCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStereoscopicGamepadCameraPropsHandler implements PropsHandler<BabylonjsCoreStereoscopicGamepadCamera, FiberStereoscopicGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStereoscopicGamepadCamera, oldProps: FiberStereoscopicGamepadCameraProps, newProps: FiberStereoscopicGamepadCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate stereoscopic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export declare class FiberStereoscopicGamepadCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAnaglyphUniversalCameraPropsHandler implements PropsHandler<BabylonjsCoreAnaglyphUniversalCamera, FiberAnaglyphUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAnaglyphUniversalCamera, oldProps: FiberAnaglyphUniversalCameraProps, newProps: FiberAnaglyphUniversalCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate anaglyphic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export declare class FiberAnaglyphUniversalCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStereoscopicUniversalCameraPropsHandler implements PropsHandler<BabylonjsCoreStereoscopicUniversalCamera, FiberStereoscopicUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStereoscopicUniversalCamera, oldProps: FiberStereoscopicUniversalCameraProps, newProps: FiberStereoscopicUniversalCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate stereoscopic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export declare class FiberStereoscopicUniversalCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<BabylonjsCoreDeviceOrientationCamera, FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreDeviceOrientationCamera, oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This is a camera specifically designed to react to device orientation events such as a modern mobile device
 * being tilted forward or back and left or right.
 *
 * This code has been generated
 */
export declare class FiberDeviceOrientationCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVRDeviceOrientationFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreVRDeviceOrientationFreeCamera, FiberVRDeviceOrientationFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRDeviceOrientationFreeCamera, oldProps: FiberVRDeviceOrientationFreeCameraProps, newProps: FiberVRDeviceOrientationFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate VR rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export declare class FiberVRDeviceOrientationFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVRDeviceOrientationGamepadCameraPropsHandler implements PropsHandler<BabylonjsCoreVRDeviceOrientationGamepadCamera, FiberVRDeviceOrientationGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRDeviceOrientationGamepadCamera, oldProps: FiberVRDeviceOrientationGamepadCameraProps, newProps: FiberVRDeviceOrientationGamepadCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
 *
 * This code has been generated
 */
export declare class FiberVRDeviceOrientationGamepadCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAnaglyphFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreAnaglyphFreeCamera, FiberAnaglyphFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAnaglyphFreeCamera, oldProps: FiberAnaglyphFreeCameraProps, newProps: FiberAnaglyphFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate anaglyphic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export declare class FiberAnaglyphFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStereoscopicFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreStereoscopicFreeCamera, FiberStereoscopicFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStereoscopicFreeCamera, oldProps: FiberStereoscopicFreeCameraProps, newProps: FiberStereoscopicFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate stereoscopic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export declare class FiberStereoscopicFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVirtualJoysticksCameraPropsHandler implements PropsHandler<BabylonjsCoreVirtualJoysticksCamera, FiberVirtualJoysticksCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVirtualJoysticksCamera, oldProps: FiberVirtualJoysticksCameraProps, newProps: FiberVirtualJoysticksCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * It is identical to the Free Camera and simply adds by default a virtual joystick.
 * Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items.
 *
 * This code has been generated
 */
export declare class FiberVirtualJoysticksCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberWebVRFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreWebVRFreeCamera, FiberWebVRFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreWebVRFreeCamera, oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a WebVR camera.
 * The WebVR camera is Babylon's simple interface to interaction with Windows Mixed Reality, HTC Vive and Oculus Rift.
 *
 * This code has been generated
 */
export declare class FiberWebVRFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberWebXRCameraPropsHandler implements PropsHandler<BabylonjsCoreWebXRCamera, FiberWebXRCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreWebXRCamera, oldProps: FiberWebXRCameraProps, newProps: FiberWebXRCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * WebXR Camera which holds the views for the xrSession
 *
 * This code has been generated
 */
export declare class FiberWebXRCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreArcRotateCamera, FiberArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreArcRotateCamera, oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents an orbital type of camera.
 *
 * This camera always points towards a given target position and can be rotated around that target with the target as the centre of rotation. It can be controlled with cursors and mouse, or with touch events.
 * Think of this camera as one orbiting its target position, or more imaginatively as a spy satellite orbiting the earth. Its position relative to the target (earth) can be set by three parameters, alpha (radians) the longitudinal rotation, beta (radians) the latitudinal rotation and radius the distance from the target position.
 *
 * This code has been generated
 */
export declare class FiberArcRotateCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAnaglyphArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreAnaglyphArcRotateCamera, FiberAnaglyphArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAnaglyphArcRotateCamera, oldProps: FiberAnaglyphArcRotateCameraProps, newProps: FiberAnaglyphArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export declare class FiberAnaglyphArcRotateCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStereoscopicArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreStereoscopicArcRotateCamera, FiberStereoscopicArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStereoscopicArcRotateCamera, oldProps: FiberStereoscopicArcRotateCameraProps, newProps: FiberStereoscopicArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export declare class FiberStereoscopicArcRotateCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVRDeviceOrientationArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreVRDeviceOrientationArcRotateCamera, FiberVRDeviceOrientationArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRDeviceOrientationArcRotateCamera, oldProps: FiberVRDeviceOrientationArcRotateCameraProps, newProps: FiberVRDeviceOrientationArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate VR rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export declare class FiberVRDeviceOrientationArcRotateCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFlyCameraPropsHandler implements PropsHandler<BabylonjsCoreFlyCamera, FiberFlyCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFlyCamera, oldProps: FiberFlyCameraProps, newProps: FiberFlyCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This is a flying camera, designed for 3D movement and rotation in all directions,
 * such as in a 3D Space Shooter or a Flight Simulator.
 *
 * This code has been generated
 */
export declare class FiberFlyCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFollowCameraPropsHandler implements PropsHandler<BabylonjsCoreFollowCamera, FiberFollowCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFollowCamera, oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and
 * an arc rotate version arcFollowCamera are available.
 *
 * This code has been generated
 */
export declare class FiberFollowCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberArcFollowCameraPropsHandler implements PropsHandler<BabylonjsCoreArcFollowCamera, FiberArcFollowCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreArcFollowCamera, oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Arc Rotate version of the follow camera.
 * It still follows a Defined mesh but in an Arc Rotate Camera fashion.
 *
 * This code has been generated
 */
export declare class FiberArcFollowCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a box mesh
 * * The parameter `size` sets the size (float) of each box side (default 1)
 * * You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
 * * Please read this tutorial : https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberBox implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a sphere mesh
 * * The parameter `diameter` sets the diameter size (float) of the sphere (default 1)
 * * You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value of `diameter`)
 * * The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32)
 * * You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
 * * You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberSphere implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a plane polygonal mesh.  By default, this is a disc
 * * The parameter `radius` sets the radius size (float) of the polygon (default 0.5)
 * * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc
 * * You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberDisc implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
 * * The parameter `radius` sets the radius size (float) of the icosphere (default 1)
 * * You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value of `radius`)
 * * The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
 * * The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberIcoSphere implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a ribbon mesh. The ribbon is a parametric shape.  It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry
 * * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array
 * * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array
 * * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path
 * * It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11
 * * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#ribbon
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The parameter `uvs` is an optional flat array of `Vector2` to update/set each ribbon vertex with its own custom UV values instead of the computed ones
 * * The parameters `colors` is an optional flat array of `Color4` to set/update each ribbon vertex with its own custom color values
 * * Note that if you use the parameters `uvs` or `colors`, the passed arrays must be populated with the right number of elements, it is to say the number of ribbon vertices. Remember that if you set `closePath` to `true`, there's one extra vertex per path in the geometry
 * * Moreover, you can use the parameter `color` with `instance` (to update the ribbon), only if you previously used it at creation time
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberRibbon implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a cylinder or a cone mesh
 * * The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).
 * * The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).
 * * The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.
 * * The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.
 * * The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).
 * * The parameter `hasRings` (boolean, default false) makes the subdivisions independent from each other, so they become different faces.
 * * The parameter `enclose`  (boolean, default false) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis.
 * * The parameter `arc` (float, default 1) is the ratio (max 1) to apply to the circumference to slice the cylinder.
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of n Color3 elements) and `faceUV` (an array of n Vector4 elements).
 * * The value of n is the number of cylinder faces. If the cylinder has only 1 subdivisions, n equals : top face + cylinder surface + bottom face = 3
 * * Now, if the cylinder has 5 independent subdivisions (hasRings = true), n equals : top face + 5 stripe surfaces + bottom face = 2 + 5 = 7
 * * Finally, if the cylinder has 5 independent subdivisions and is enclose, n equals : top face + 5 x (stripe surface + 2 closing faces) + bottom face = 2 + 5 * 3 = 17
 * * Each array (color or UVs) is always ordered the same way : the first element is the bottom cap, the last element is the top cap. The other elements are each a ring surface.
 * * If `enclose` is false, a ring surface is one element.
 * * If `enclose` is true, a ring surface is 3 successive elements in the array : the tubular surface, then the two closing faces.
 * * Example how to set colors and textures on a sliced cylinder : https://www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/#comment-106379
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberCylinder implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a torus mesh
 * * The parameter `diameter` sets the diameter size (float) of the torus (default 1)
 * * The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
 * * The parameter `tessellation` sets the number of torus sides (postive integer, default 16)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberTorus implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a torus knot mesh
 * * The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
 * * The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
 * * The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
 * * The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberTorusKnot implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a line system mesh. A line system is a pool of many lines gathered in a single mesh
 * * A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function
 * * The parameter `lines` is an array of lines, each line being an array of successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter
 * * The optional parameter `colors` is an array of line colors, each line colors being an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
 * * Updating a simple Line mesh, you just need to update every line in the `lines` array : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberLineSystem implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a line mesh
 * A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * The optional parameter `colors` is an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need alpha blending (faster)
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberLines implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a dashed line mesh
 * * A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The parameter `dashNb` is the intended total number of dashes (positive integer, default 200)
 * * The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3)
 * * The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1)
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberDashedLines implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates an extruded shape mesh. The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
 * * The parameter `scale` (float, default 1) is the value to scale the shape.
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberExtrudeShape implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates an custom extruded shape mesh.
 * The custom extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the begining of the path
 * * It must returns a float value that will be the rotation in radians applied to the shape on each path point.
 * * The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the begining of the path
 * * It must returns a float value that will be the scale value applied to the shape on each path point
 * * The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray`
 * * The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray`
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberExtrudeShapeCustom implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates lathe mesh.
 * The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero
 * * The parameter `radius` (positive float, default 1) is the radius value of the lathe
 * * The parameter `tessellation` (positive integer, default 64) is the side number of the lathe
 * * The parameter `clip` (positive integer, default 0) is the number of sides to not create without effecting the general shape of the sides
 * * The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape
 * * The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc"
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberLathe implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a plane mesh
 * * The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
 * * You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
 * * The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberPlane implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a ground mesh
 * * The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground
 * * The parameter `subdivisions` (positive integer) sets the number of subdivisions per side
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberGround implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a tiled ground mesh
 * * The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates
 * * The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates
 * * The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile
 * * The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberTiledGround implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a ground mesh from a height map
 * * The parameter `url` sets the URL of the height map image resource.
 * * The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.
 * * The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.
 * * The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.
 * * The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.
 * * The parameter `colorFilter` (optional Color3, default (0.3, 0.59, 0.11) ) is the filter to apply to the image pixel colors to compute the height.
 * * The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).
 * * The parameter `alphaFilter` will filter any data where the alpha channel is below this value, defaults 0 (all data visible)
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberGroundFromHeightMap implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a polygon mesh
 * The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
 * * The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
 * * You can set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
 * * Remember you can only change the shape positions, not their number when updating a polygon
 *
 * This code has been generated
 */
export declare class FiberPolygon implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates an extruded polygon mesh, with depth in the Y direction.
 * * You can set different colors and different images to the top, bottom and extruded side by using the parameters `faceColors` (an array of 3 Color3 elements) and `faceUV` (an array of 3 Vector4 elements)
 *
 * This code has been generated
 */
export declare class FiberExtrudePolygon implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a tube mesh.
 * The tube is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube
 * * The parameter `radius` (positive float, default 1) sets the tube radius size
 * * The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface
 * * The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`
 * * This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path. It must return a radius value (positive float)
 * * The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#tube
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberTube implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a polyhedron mesh
 * * The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial to choose the wanted type
 * * The parameter `size` (positive float, default 1) sets the polygon size
 * * You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value)
 * * You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`
 * * A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
 * * You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`)
 * * To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors
 * * The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberPolyhedron implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a decal mesh.
 * A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal
 * * The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates
 * * The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates
 * * The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling
 * * The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal
 *
 * This code has been generated
 */
export declare class FiberDecal implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "factoryMethod": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMaterialPropsHandler implements PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMaterial, oldProps: FiberMaterialProps, newProps: FiberMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Base class for the main features of a material in Babylon.js
 *
 * This code has been generated
 */
export declare class FiberMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberShaderMaterialPropsHandler implements PropsHandler<BabylonjsCoreShaderMaterial, FiberShaderMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreShaderMaterial, oldProps: FiberShaderMaterialProps, newProps: FiberShaderMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The ShaderMaterial object has the necessary methods to pass data from your scene to the Vertex and Fragment Shaders and returns a material that can be applied to any mesh.
 *
 * This returned material effects how the mesh will look based on the code in the shaders.
 *
 * This code has been generated
 */
export declare class FiberShaderMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiMaterialPropsHandler implements PropsHandler<BabylonjsCoreMultiMaterial, FiberMultiMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMultiMaterial, oldProps: FiberMultiMaterialProps, newProps: FiberMultiMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A multi-material is used to apply different materials to different parts of the same object without the need of
 * separate meshes. This can be use to improve performances.
 *
 * This code has been generated
 */
export declare class FiberMultiMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPushMaterialPropsHandler implements PropsHandler<BabylonjsCorePushMaterial, FiberPushMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePushMaterial, oldProps: FiberPushMaterialProps, newProps: FiberPushMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Base class of materials working in push mode in babylon JS
 *
 * This code has been generated
 */
export declare class FiberPushMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStandardMaterialPropsHandler implements PropsHandler<BabylonjsCoreStandardMaterial, FiberStandardMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStandardMaterial, oldProps: FiberStandardMaterialProps, newProps: FiberStandardMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This is the default material used in Babylon. It is the best trade off between quality
 * and performances.
 *
 * This code has been generated
 */
export declare class FiberStandardMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberBackgroundMaterialPropsHandler implements PropsHandler<BabylonjsCoreBackgroundMaterial, FiberBackgroundMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreBackgroundMaterial, oldProps: FiberBackgroundMaterialProps, newProps: FiberBackgroundMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Background material used to create an efficient environement around your scene.
 *
 * This code has been generated
 */
export declare class FiberBackgroundMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRBaseMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRBaseMaterial, FiberPBRBaseMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRBaseMaterial, oldProps: FiberPBRBaseMaterialProps, newProps: FiberPBRBaseMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The Physically based material base class of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * http://doc.babylonjs.com/extensions/Physically_Based_Rendering
 *
 * This code has been generated
 */
export declare class FiberPBRBaseMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRBaseSimpleMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRBaseSimpleMaterial, FiberPBRBaseSimpleMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRBaseSimpleMaterial, oldProps: FiberPBRBaseSimpleMaterialProps, newProps: FiberPBRBaseSimpleMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The Physically based simple base material of BJS.
 *
 * This enables better naming and convention enforcements on top of the pbrMaterial.
 * It is used as the base class for both the specGloss and metalRough conventions.
 *
 * This code has been generated
 */
export declare class FiberPBRBaseSimpleMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRMetallicRoughnessMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRMetallicRoughnessMaterial, FiberPBRMetallicRoughnessMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRMetallicRoughnessMaterial, oldProps: FiberPBRMetallicRoughnessMaterialProps, newProps: FiberPBRMetallicRoughnessMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The PBR material of BJS following the metal roughness convention.
 *
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/specification/2.0
 *
 * This code has been generated
 */
export declare class FiberPBRMetallicRoughnessMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRSpecularGlossinessMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRSpecularGlossinessMaterial, FiberPBRSpecularGlossinessMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRSpecularGlossinessMaterial, oldProps: FiberPBRSpecularGlossinessMaterialProps, newProps: FiberPBRSpecularGlossinessMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The PBR material of BJS following the specular glossiness convention.
 *
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/extensions/Khronos/KHR_materials_pbrSpecularGlossiness
 *
 * This code has been generated
 */
export declare class FiberPBRSpecularGlossinessMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRMaterial, FiberPBRMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRMaterial, oldProps: FiberPBRMaterialProps, newProps: FiberPBRMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The Physically based material of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * http://doc.babylonjs.com/extensions/Physically_Based_Rendering
 *
 * This code has been generated
 */
export declare class FiberPBRMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFluentMaterialPropsHandler implements PropsHandler<BabylonjsGuiFluentMaterial, FiberFluentMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiFluentMaterial, oldProps: FiberFluentMaterialProps, newProps: FiberFluentMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to render controls with fluent desgin
 *
 * This code has been generated
 */
export declare class FiberFluentMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberLightPropsHandler implements PropsHandler<BabylonjsCoreLight, FiberLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreLight, oldProps: FiberLightProps, newProps: FiberLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Base class of all the lights in Babylon. It groups all the generic information about lights.
 * Lights are used, as you would expect, to affect how meshes are seen, in terms of both illumination and colour.
 * All meshes allow light to pass through them unless shadow generation is activated. The default number of lights allowed is four but this can be increased.
 *
 * This code has been generated
 */
export declare class FiberLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberShadowLightPropsHandler implements PropsHandler<BabylonjsCoreShadowLight, FiberShadowLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreShadowLight, oldProps: FiberShadowLightProps, newProps: FiberShadowLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Base implementation IShadowLight
 * It groups all the common behaviour in order to reduce dupplication and better follow the DRY pattern.
 *
 * This code has been generated
 */
export declare class FiberShadowLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDirectionalLightPropsHandler implements PropsHandler<BabylonjsCoreDirectionalLight, FiberDirectionalLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreDirectionalLight, oldProps: FiberDirectionalLightProps, newProps: FiberDirectionalLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A directional light is defined by a direction (what a surprise!).
 * The light is emitted from everywhere in the specified direction, and has an infinite range.
 * An example of a directional light is when a distance planet is lit by the apparently parallel lines of light from its sun. Light in a downward direction will light the top of an object.
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export declare class FiberDirectionalLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPointLightPropsHandler implements PropsHandler<BabylonjsCorePointLight, FiberPointLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePointLight, oldProps: FiberPointLightProps, newProps: FiberPointLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A point light is a light defined by an unique point in world space.
 * The light is emitted in every direction from this point.
 * A good example of a point light is a standard light bulb.
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export declare class FiberPointLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSpotLightPropsHandler implements PropsHandler<BabylonjsCoreSpotLight, FiberSpotLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreSpotLight, oldProps: FiberSpotLightProps, newProps: FiberSpotLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A spot light is defined by a position, a direction, an angle, and an exponent.
 * These values define a cone of light starting from the position, emitting toward the direction.
 * The angle, in radians, defines the size (field of illumination) of the spotlight's conical beam,
 * and the exponent defines the speed of the decay of the light with distance (reach).
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export declare class FiberSpotLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHemisphericLightPropsHandler implements PropsHandler<BabylonjsCoreHemisphericLight, FiberHemisphericLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreHemisphericLight, oldProps: FiberHemisphericLightProps, newProps: FiberHemisphericLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The HemisphericLight simulates the ambient environment light,
 * so the passed direction is the light reflection direction, not the incoming direction.
 *
 * This code has been generated
 */
export declare class FiberHemisphericLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberControlPropsHandler implements PropsHandler<BabylonjsGuiControl, FiberControlProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiControl, oldProps: FiberControlProps, newProps: FiberControlProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Root class used for all 2D controls
 *
 * This code has been generated
 */
export declare class FiberControl implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberContainerPropsHandler implements PropsHandler<BabylonjsGuiContainer, FiberContainerProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiContainer, oldProps: FiberContainerProps, newProps: FiberContainerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Root class for 2D containers
 *
 * This code has been generated
 */
export declare class FiberContainer implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRectanglePropsHandler implements PropsHandler<BabylonjsGuiRectangle, FiberRectangleProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiRectangle, oldProps: FiberRectangleProps, newProps: FiberRectangleProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create rectangle container
 *
 * This code has been generated
 */
export declare class FiberRectangle implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberButtonPropsHandler implements PropsHandler<BabylonjsGuiButton, FiberButtonProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiButton, oldProps: FiberButtonProps, newProps: FiberButtonProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create 2D buttons
 *
 * This code has been generated
 */
export declare class FiberButton implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSelectionPanelPropsHandler implements PropsHandler<BabylonjsGuiSelectionPanel, FiberSelectionPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiSelectionPanel, oldProps: FiberSelectionPanelProps, newProps: FiberSelectionPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to hold the controls for the checkboxes, radio buttons and sliders
 *
 * This code has been generated
 */
export declare class FiberSelectionPanel implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberScrollViewerPropsHandler implements PropsHandler<BabylonjsGuiScrollViewer, FiberScrollViewerProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiScrollViewer, oldProps: FiberScrollViewerProps, newProps: FiberScrollViewerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to hold a viewer window and sliders in a grid
 *
 * This code has been generated
 */
export declare class FiberScrollViewer implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStackPanelPropsHandler implements PropsHandler<BabylonjsGuiStackPanel, FiberStackPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiStackPanel, oldProps: FiberStackPanelProps, newProps: FiberStackPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a 2D stack panel container
 *
 * This code has been generated
 */
export declare class FiberStackPanel implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVirtualKeyboardPropsHandler implements PropsHandler<BabylonjsGuiVirtualKeyboard, FiberVirtualKeyboardProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiVirtualKeyboard, oldProps: FiberVirtualKeyboardProps, newProps: FiberVirtualKeyboardProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create virtual keyboard
 *
 * This code has been generated
 */
export declare class FiberVirtualKeyboard implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberEllipsePropsHandler implements PropsHandler<BabylonjsGuiEllipse, FiberEllipseProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiEllipse, oldProps: FiberEllipseProps, newProps: FiberEllipseProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create 2D ellipse containers
 *
 * This code has been generated
 */
export declare class FiberEllipse implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberGridPropsHandler implements PropsHandler<BabylonjsGuiGrid, FiberGridProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiGrid, oldProps: FiberGridProps, newProps: FiberGridProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a 2D grid container
 *
 * This code has been generated
 */
export declare class FiberGrid implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class Fiber_ScrollViewerWindowPropsHandler implements PropsHandler<BabylonjsGui_ScrollViewerWindow, Fiber_ScrollViewerWindowProps> {
    getPropertyUpdates(hostInstance: BabylonjsGui_ScrollViewerWindow, oldProps: Fiber_ScrollViewerWindowProps, newProps: Fiber_ScrollViewerWindowProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to hold a the container for ScrollViewer
 *
 * This code has been generated
 */
export declare class Fiber_ScrollViewerWindow implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTextBlockPropsHandler implements PropsHandler<BabylonjsGuiTextBlock, FiberTextBlockProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiTextBlock, oldProps: FiberTextBlockProps, newProps: FiberTextBlockProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create text block control
 *
 * This code has been generated
 */
export declare class FiberTextBlock implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberImagePropsHandler implements PropsHandler<BabylonjsGuiImage, FiberImageProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiImage, oldProps: FiberImageProps, newProps: FiberImageProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create 2D images
 *
 * This code has been generated
 */
export declare class FiberImage implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCheckboxPropsHandler implements PropsHandler<BabylonjsGuiCheckbox, FiberCheckboxProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiCheckbox, oldProps: FiberCheckboxProps, newProps: FiberCheckboxProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to represent a 2D checkbox
 *
 * This code has been generated
 */
export declare class FiberCheckbox implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberColorPickerPropsHandler implements PropsHandler<BabylonjsGuiColorPicker, FiberColorPickerProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiColorPicker, oldProps: FiberColorPickerProps, newProps: FiberColorPickerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create color pickers
 *
 * This code has been generated
 */
export declare class FiberColorPicker implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberInputTextPropsHandler implements PropsHandler<BabylonjsGuiInputText, FiberInputTextProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiInputText, oldProps: FiberInputTextProps, newProps: FiberInputTextProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create input text control
 *
 * This code has been generated
 */
export declare class FiberInputText implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberInputPasswordPropsHandler implements PropsHandler<BabylonjsGuiInputPassword, FiberInputPasswordProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiInputPassword, oldProps: FiberInputPasswordProps, newProps: FiberInputPasswordProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a password control
 *
 * This code has been generated
 */
export declare class FiberInputPassword implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberLinePropsHandler implements PropsHandler<BabylonjsGuiLine, FiberLineProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiLine, oldProps: FiberLineProps, newProps: FiberLineProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to render 2D lines
 *
 * This code has been generated
 */
export declare class FiberLine implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiLinePropsHandler implements PropsHandler<BabylonjsGuiMultiLine, FiberMultiLineProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiMultiLine, oldProps: FiberMultiLineProps, newProps: FiberMultiLineProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create multi line control
 *
 * This code has been generated
 */
export declare class FiberMultiLine implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRadioButtonPropsHandler implements PropsHandler<BabylonjsGuiRadioButton, FiberRadioButtonProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiRadioButton, oldProps: FiberRadioButtonProps, newProps: FiberRadioButtonProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create radio button controls
 *
 * This code has been generated
 */
export declare class FiberRadioButton implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberBaseSliderPropsHandler implements PropsHandler<BabylonjsGuiBaseSlider, FiberBaseSliderProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiBaseSlider, oldProps: FiberBaseSliderProps, newProps: FiberBaseSliderProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export declare class FiberBaseSlider implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberScrollBarPropsHandler implements PropsHandler<BabylonjsGuiScrollBar, FiberScrollBarProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiScrollBar, oldProps: FiberScrollBarProps, newProps: FiberScrollBarProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export declare class FiberScrollBar implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSliderPropsHandler implements PropsHandler<BabylonjsGuiSlider, FiberSliderProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiSlider, oldProps: FiberSliderProps, newProps: FiberSliderProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export declare class FiberSlider implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberImageBasedSliderPropsHandler implements PropsHandler<BabylonjsGuiImageBasedSlider, FiberImageBasedSliderProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiImageBasedSlider, oldProps: FiberImageBasedSliderProps, newProps: FiberImageBasedSliderProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls based on images
 *
 * This code has been generated
 */
export declare class FiberImageBasedSlider implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDisplayGridPropsHandler implements PropsHandler<BabylonjsGuiDisplayGrid, FiberDisplayGridProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiDisplayGrid, oldProps: FiberDisplayGridProps, newProps: FiberDisplayGridProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to render a grid
 *
 * This code has been generated
 */
export declare class FiberDisplayGrid implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberControl3DPropsHandler implements PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiControl3D, oldProps: FiberControl3DProps, newProps: FiberControl3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used as base class for controls
 *
 * This code has been generated
 */
export declare class FiberControl3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberContainer3DPropsHandler implements PropsHandler<BabylonjsGuiContainer3D, FiberContainer3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiContainer3D, oldProps: FiberContainer3DProps, newProps: FiberContainer3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create containers for controls
 *
 * This code has been generated
 */
export declare class FiberContainer3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVolumeBasedPanelPropsHandler implements PropsHandler<BabylonjsGuiVolumeBasedPanel, FiberVolumeBasedPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiVolumeBasedPanel, oldProps: FiberVolumeBasedPanelProps, newProps: FiberVolumeBasedPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Abstract class used to create a container panel deployed on the surface of a volume
 *
 * This code has been generated
 */
export declare class FiberVolumeBasedPanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCylinderPanelPropsHandler implements PropsHandler<BabylonjsGuiCylinderPanel, FiberCylinderPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiCylinderPanel, oldProps: FiberCylinderPanelProps, newProps: FiberCylinderPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a container panel deployed on the surface of a cylinder
 *
 * This code has been generated
 */
export declare class FiberCylinderPanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPlanePanelPropsHandler implements PropsHandler<BabylonjsGuiPlanePanel, FiberPlanePanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiPlanePanel, oldProps: FiberPlanePanelProps, newProps: FiberPlanePanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a container panel deployed on the surface of a plane
 *
 * This code has been generated
 */
export declare class FiberPlanePanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberScatterPanelPropsHandler implements PropsHandler<BabylonjsGuiScatterPanel, FiberScatterPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiScatterPanel, oldProps: FiberScatterPanelProps, newProps: FiberScatterPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a container panel where items get randomized planar mapping
 *
 * This code has been generated
 */
export declare class FiberScatterPanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSpherePanelPropsHandler implements PropsHandler<BabylonjsGuiSpherePanel, FiberSpherePanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiSpherePanel, oldProps: FiberSpherePanelProps, newProps: FiberSpherePanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a container panel deployed on the surface of a sphere
 *
 * This code has been generated
 */
export declare class FiberSpherePanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStackPanel3DPropsHandler implements PropsHandler<BabylonjsGuiStackPanel3D, FiberStackPanel3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiStackPanel3D, oldProps: FiberStackPanel3DProps, newProps: FiberStackPanel3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a stack panel in 3D on XY plane
 *
 * This code has been generated
 */
export declare class FiberStackPanel3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAbstractButton3DPropsHandler implements PropsHandler<BabylonjsGuiAbstractButton3D, FiberAbstractButton3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiAbstractButton3D, oldProps: FiberAbstractButton3DProps, newProps: FiberAbstractButton3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used as a root to all buttons
 *
 * This code has been generated
 */
export declare class FiberAbstractButton3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberButton3DPropsHandler implements PropsHandler<BabylonjsGuiButton3D, FiberButton3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiButton3D, oldProps: FiberButton3DProps, newProps: FiberButton3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a button in 3D
 *
 * This code has been generated
 */
export declare class FiberButton3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHolographicButtonPropsHandler implements PropsHandler<BabylonjsGuiHolographicButton, FiberHolographicButtonProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiHolographicButton, oldProps: FiberHolographicButtonProps, newProps: FiberHolographicButtonProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create a holographic button in 3D
 *
 * This code has been generated
 */
export declare class FiberHolographicButton implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMeshButton3DPropsHandler implements PropsHandler<BabylonjsGuiMeshButton3D, FiberMeshButton3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiMeshButton3D, oldProps: FiberMeshButton3DProps, newProps: FiberMeshButton3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create an interactable object. It's a 3D button using a mesh coming from the current scene
 *
 * This code has been generated
 */
export declare class FiberMeshButton3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberBaseTexturePropsHandler implements PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreBaseTexture, oldProps: FiberBaseTextureProps, newProps: FiberBaseTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Base class of all the textures in babylon.
 * It groups all the common properties the materials, post process, lights... might need
 * in order to make a correct use of the texture.
 *
 * This code has been generated
 */
export declare class FiberBaseTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCubeTexturePropsHandler implements PropsHandler<BabylonjsCoreCubeTexture, FiberCubeTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreCubeTexture, oldProps: FiberCubeTextureProps, newProps: FiberCubeTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class for creating a cube texture
 *
 * This code has been generated
 */
export declare class FiberCubeTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRawCubeTexturePropsHandler implements PropsHandler<BabylonjsCoreRawCubeTexture, FiberRawCubeTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRawCubeTexture, oldProps: FiberRawCubeTextureProps, newProps: FiberRawCubeTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Raw cube texture where the raw buffers are passed in
 *
 * This code has been generated
 */
export declare class FiberRawCubeTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTexturePropsHandler implements PropsHandler<BabylonjsCoreTexture, FiberTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTexture, oldProps: FiberTextureProps, newProps: FiberTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
 *
 * This code has been generated
 */
export declare class FiberTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRawTexturePropsHandler implements PropsHandler<BabylonjsCoreRawTexture, FiberRawTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRawTexture, oldProps: FiberRawTextureProps, newProps: FiberRawTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Raw texture can help creating a texture directly from an array of data.
 * This can be super useful if you either get the data from an uncompressed source or
 * if you wish to create your texture pixel by pixel.
 *
 * This code has been generated
 */
export declare class FiberRawTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberProceduralTexturePropsHandler implements PropsHandler<BabylonjsCoreProceduralTexture, FiberProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreProceduralTexture, oldProps: FiberProceduralTextureProps, newProps: FiberProceduralTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes calmpler' images.
 * This is the base class of any Procedural texture and contains most of the shareable code.
 *
 * This code has been generated
 */
export declare class FiberProceduralTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCustomProceduralTexturePropsHandler implements PropsHandler<BabylonjsCoreCustomProceduralTexture, FiberCustomProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreCustomProceduralTexture, oldProps: FiberCustomProceduralTextureProps, newProps: FiberCustomProceduralTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * Custom Procedural textures are the easiest way to create your own procedural in your application.
 *
 * This code has been generated
 */
export declare class FiberCustomProceduralTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberNoiseProceduralTexturePropsHandler implements PropsHandler<BabylonjsCoreNoiseProceduralTexture, FiberNoiseProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreNoiseProceduralTexture, oldProps: FiberNoiseProceduralTextureProps, newProps: FiberNoiseProceduralTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to generate noise procedural textures
 *
 * This code has been generated
 */
export declare class FiberNoiseProceduralTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRenderTargetTexturePropsHandler implements PropsHandler<BabylonjsCoreRenderTargetTexture, FiberRenderTargetTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRenderTargetTexture, oldProps: FiberRenderTargetTextureProps, newProps: FiberRenderTargetTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This Helps creating a texture that will be created from a camera in your scene.
 * It is basically a dynamic texture that could be used to create special effects for instance.
 * Actually, It is the base of lot of effects in the framework like post process, shadows, effect layers and rendering pipelines...
 *
 * This code has been generated
 */
export declare class FiberRenderTargetTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMirrorTexturePropsHandler implements PropsHandler<BabylonjsCoreMirrorTexture, FiberMirrorTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMirrorTexture, oldProps: FiberMirrorTextureProps, newProps: FiberMirrorTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Mirror texture can be used to simulate the view from a mirror in a scene.
 * It will dynamically be rendered every frame to adapt to the camera point of view.
 * You can then easily use it as a reflectionTexture on a flat surface.
 * In case the surface is not a plane, please consider relying on reflection probes.
 *
 * This code has been generated
 */
export declare class FiberMirrorTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiRenderTargetPropsHandler implements PropsHandler<BabylonjsCoreMultiRenderTarget, FiberMultiRenderTargetProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMultiRenderTarget, oldProps: FiberMultiRenderTargetProps, newProps: FiberMultiRenderTargetProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A multi render target, like a render target provides the ability to render to a texture.
 * Unlike the render target, it can render to several draw buffers in one draw.
 * This is specially interesting in deferred rendering or for any effects requiring more than
 * just one color from a single pass.
 *
 * This code has been generated
 */
export declare class FiberMultiRenderTarget implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRefractionTexturePropsHandler implements PropsHandler<BabylonjsCoreRefractionTexture, FiberRefractionTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRefractionTexture, oldProps: FiberRefractionTextureProps, newProps: FiberRefractionTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Creates a refraction texture used by refraction channel of the standard material.
 * It is like a mirror but to see through a material.
 *
 * This code has been generated
 */
export declare class FiberRefractionTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiviewRenderTargetPropsHandler implements PropsHandler<BabylonjsCoreMultiviewRenderTarget, FiberMultiviewRenderTargetProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMultiviewRenderTarget, oldProps: FiberMultiviewRenderTargetProps, newProps: FiberMultiviewRenderTargetProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Renders to multiple views with a single draw call
 *
 * This code has been generated
 */
export declare class FiberMultiviewRenderTarget implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVideoTexturePropsHandler implements PropsHandler<BabylonjsCoreVideoTexture, FiberVideoTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVideoTexture, oldProps: FiberVideoTextureProps, newProps: FiberVideoTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * If you want to display a video in your scene, this is the special texture for that.
 * This special texture works similar to other textures, with the exception of a few parameters.
 *
 * This code has been generated
 */
export declare class FiberVideoTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDynamicTexturePropsHandler implements PropsHandler<BabylonjsCoreDynamicTexture, FiberDynamicTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreDynamicTexture, oldProps: FiberDynamicTextureProps, newProps: FiberDynamicTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * A class extending Texture allowing drawing on a texture
 *
 * This code has been generated
 */
export declare class FiberDynamicTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAdvancedDynamicTexturePropsHandler implements PropsHandler<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiAdvancedDynamicTexture, oldProps: FiberAdvancedDynamicTextureProps, newProps: FiberAdvancedDynamicTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to create texture to support 2D GUI elements
 *
 * This code has been generated
 */
export declare class FiberAdvancedDynamicTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRawTexture3DPropsHandler implements PropsHandler<BabylonjsCoreRawTexture3D, FiberRawTexture3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRawTexture3D, oldProps: FiberRawTexture3DProps, newProps: FiberRawTexture3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to store 3D textures containing user data
 *
 * This code has been generated
 */
export declare class FiberRawTexture3D implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberColorGradingTexturePropsHandler implements PropsHandler<BabylonjsCoreColorGradingTexture, FiberColorGradingTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreColorGradingTexture, oldProps: FiberColorGradingTextureProps, newProps: FiberColorGradingTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a color grading texture. This acts as a lookup table LUT, useful during post process
 * It can help converting any input color in a desired output one. This can then be used to create effects
 * from sepia, black and white to sixties or futuristic rendering...
 *
 * The only supported format is currently 3dl.
 * More information on LUT: https://en.wikipedia.org/wiki/3D_lookup_table
 *
 * This code has been generated
 */
export declare class FiberColorGradingTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberEquiRectangularCubeTexturePropsHandler implements PropsHandler<BabylonjsCoreEquiRectangularCubeTexture, FiberEquiRectangularCubeTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreEquiRectangularCubeTexture, oldProps: FiberEquiRectangularCubeTextureProps, newProps: FiberEquiRectangularCubeTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a texture coming from an equirectangular image supported by the web browser canvas.
 *
 * This code has been generated
 */
export declare class FiberEquiRectangularCubeTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHDRCubeTexturePropsHandler implements PropsHandler<BabylonjsCoreHDRCubeTexture, FiberHDRCubeTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreHDRCubeTexture, oldProps: FiberHDRCubeTextureProps, newProps: FiberHDRCubeTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents a texture coming from an HDR input.
 *
 * The only supported format is currently panorama picture stored in RGBE format.
 * Example of such files can be found on HDRLib: http://hdrlib.com/
 *
 * This code has been generated
 */
export declare class FiberHDRCubeTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHtmlElementTexturePropsHandler implements PropsHandler<BabylonjsCoreHtmlElementTexture, FiberHtmlElementTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreHtmlElementTexture, oldProps: FiberHtmlElementTextureProps, newProps: FiberHtmlElementTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This represents the smallest workload to use an already existing element (Canvas or Video) as a texture.
 * To be as efficient as possible depending on your constraints nothing aside the first upload
 * is automatically managed.
 * It is a cheap VideoTexture or DynamicTexture if you prefer to keep full control of the elements
 * in your application.
 *
 * As the update is not automatic, you need to call them manually.
 *
 * This code has been generated
 */
export declare class FiberHtmlElementTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberGUI3DManagerPropsHandler implements PropsHandler<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiGUI3DManager, oldProps: FiberGUI3DManagerProps, newProps: FiberGUI3DManagerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Class used to manage 3D user interface
 *
 * This code has been generated
 */
export declare class FiberGUI3DManager implements HasPropsHandlers<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberShadowGeneratorPropsHandler implements PropsHandler<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreShadowGenerator, oldProps: FiberShadowGeneratorProps, newProps: FiberShadowGeneratorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Default implementation IShadowGenerator.
 * This is the main object responsible of generating shadows in the framework.
 * Documentation: https://doc.babylonjs.com/babylon101/shadows
 *
 * This code has been generated
 */
export declare class FiberShadowGenerator implements HasPropsHandlers<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberEnvironmentHelperPropsHandler implements PropsHandler<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreEnvironmentHelper, oldProps: FiberEnvironmentHelperProps, newProps: FiberEnvironmentHelperProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * The Environment helper class can be used to add a fully featuread none expensive background to your scene.
 * It includes by default a skybox and a ground relying on the BackgroundMaterial.
 * It also helps with the default setup of your imageProcessing configuration.
 *
 * This code has been generated
 */
export declare class FiberEnvironmentHelper implements HasPropsHandlers<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPhysicsImpostorPropsHandler implements PropsHandler<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePhysicsImpostor, oldProps: FiberPhysicsImpostorProps, newProps: FiberPhysicsImpostorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Represents a physics imposter
 *
 * This code has been generated
 */
export declare class FiberPhysicsImpostor implements HasPropsHandlers<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVRExperienceHelperPropsHandler implements PropsHandler<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRExperienceHelper, oldProps: FiberVRExperienceHelperProps, newProps: FiberVRExperienceHelperProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * Helps to quickly add VR support to an existing scene.
 * See http://doc.babylonjs.com/how_to/webvr_helper
 *
 * This code has been generated
 */
export declare class FiberVRExperienceHelper implements HasPropsHandlers<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps>[];
    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": {
            "name": string;
            "type": string;
            "optional": boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDynamicTerrainPropsHandler implements PropsHandler<ExtensionsDynamicTerrain, FiberDynamicTerrainProps> {
    getPropertyUpdates(hostInstance: ExtensionsDynamicTerrain, oldProps: FiberDynamicTerrainProps, newProps: FiberDynamicTerrainProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
/**
 * This code has been generated
 */
export declare class FiberDynamicTerrain implements HasPropsHandlers<ExtensionsDynamicTerrain, FiberDynamicTerrainProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<ExtensionsDynamicTerrain, FiberDynamicTerrainProps>[];
    addPropsHandler(propHandler: PropsHandler<ExtensionsDynamicTerrain, FiberDynamicTerrainProps>): void;
    static readonly CreateInfo: {
        "creationType": string;
        "libraryLocation": string;
        "namespace": string;
        "parameters": ({
            "name": string;
            "type": string;
            "optional": boolean;
        } | {
            "name": string;
            "type": {
                "name": string;
                "type": string;
                "optional": boolean;
            }[];
            "optional": boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberScenePropsHandler implements PropsHandler<BabylonjsCoreScene, FiberSceneProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreScene, oldProps: FiberSceneProps, newProps: FiberSceneProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null;
}
export declare const AbstractButton3D: string, AbstractMesh: string, AdvancedDynamicTexture: string, AnaglyphArcRotateCamera: string, AnaglyphFreeCamera: string, AnaglyphGamepadCamera: string, AnaglyphUniversalCamera: string, ArcFollowCamera: string, ArcRotateCamera: string, BackgroundMaterial: string, BaseSlider: string, BaseTexture: string, Box: string, Button: string, Button3D: string, Camera: string, Checkbox: string, ColorGradingTexture: string, ColorPicker: string, Container: string, Container3D: string, Control: string, Control3D: string, CubeTexture: string, CustomProceduralTexture: string, Cylinder: string, CylinderPanel: string, DashedLines: string, Decal: string, DeviceOrientationCamera: string, DirectionalLight: string, Disc: string, DisplayGrid: string, DynamicTerrain: string, DynamicTexture: string, Ellipse: string, EnvironmentHelper: string, EquiRectangularCubeTexture: string, ExtrudePolygon: string, ExtrudeShape: string, ExtrudeShapeCustom: string, FluentMaterial: string, FlyCamera: string, FollowCamera: string, FreeCamera: string, GUI3DManager: string, GamepadCamera: string, Grid: string, Ground: string, GroundFromHeightMap: string, HDRCubeTexture: string, HemisphericLight: string, HolographicButton: string, HtmlElementTexture: string, IcoSphere: string, Image: string, ImageBasedSlider: string, InputPassword: string, InputText: string, Lathe: string, Light: string, Line: string, LineSystem: string, Lines: string, Material: string, Mesh: string, MeshButton3D: string, MirrorTexture: string, Model: string, MultiLine: string, MultiMaterial: string, MultiRenderTarget: string, MultiviewRenderTarget: string, Node: string, NoiseProceduralTexture: string, PBRBaseMaterial: string, PBRBaseSimpleMaterial: string, PBRMaterial: string, PBRMetallicRoughnessMaterial: string, PBRSpecularGlossinessMaterial: string, PhysicsImpostor: string, Plane: string, PlanePanel: string, PointLight: string, Polygon: string, Polyhedron: string, ProceduralTexture: string, PushMaterial: string, RadioButton: string, RawCubeTexture: string, RawTexture: string, RawTexture3D: string, Rectangle: string, RefractionTexture: string, RenderTargetTexture: string, Ribbon: string, ScatterPanel: string, ScrollBar: string, ScrollViewer: string, SelectionPanel: string, ShaderMaterial: string, ShadowGenerator: string, ShadowLight: string, Slider: string, Sphere: string, SpherePanel: string, SpotLight: string, StackPanel: string, StackPanel3D: string, StandardMaterial: string, StereoscopicArcRotateCamera: string, StereoscopicFreeCamera: string, StereoscopicGamepadCamera: string, StereoscopicUniversalCamera: string, TargetCamera: string, TextBlock: string, Texture: string, TiledGround: string, Torus: string, TorusKnot: string, TouchCamera: string, TransformNode: string, Tube: string, UniversalCamera: string, VRDeviceOrientationArcRotateCamera: string, VRDeviceOrientationFreeCamera: string, VRDeviceOrientationGamepadCamera: string, VRExperienceHelper: string, VideoTexture: string, VirtualJoysticksCamera: string, VirtualKeyboard: string, VolumeBasedPanel: string, WebVRFreeCamera: string, WebXRCamera: string, _ScrollViewerWindow: string;
export declare const intrinsicClassMap: object;
export declare function babylonClassFactory(importAlias: string): any;
