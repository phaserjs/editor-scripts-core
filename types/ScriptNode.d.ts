import Phaser from "phaser";
export default class ScriptNode {
    private _scene;
    private _gameObject?;
    private _parent;
    private _children?;
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.GameObjects.Layer | Phaser.Scene);
    protected getActionTargetObject(args: any[]): any;
    get scene(): Phaser.Scene;
    get gameObject(): Phaser.GameObjects.GameObject | Phaser.GameObjects.Layer | undefined;
    get parent(): Phaser.GameObjects.GameObject | Phaser.Scene | Phaser.GameObjects.Layer | ScriptNode;
    get children(): ScriptNode[];
    add(child: ScriptNode): void;
    executeChildren(...args: any[]): void;
    execute(...args: any[]): void;
    protected awake(): void;
    protected start(): void;
    protected update(): void;
    protected destroy(): void;
}
