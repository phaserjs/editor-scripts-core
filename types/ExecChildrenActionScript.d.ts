import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class ExecChildrenActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.GameObjects.Layer | Phaser.Scene);
    execute(...args: any[]): void;
}
