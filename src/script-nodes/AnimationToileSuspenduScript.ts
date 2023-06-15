
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import FileToileIntro from "../scenes/04-Projectiles/FileToileIntro";
import BaseEntites from "~/scenes/03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default class AnimationToileSuspenduScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public dureeAnimation: number = 2000;
	public longueurFile: number = 2.8;
	public delaiAvantActivation: number = 500;
	public fileToile: FileToileIntro = new FileToileIntro(this.scene, this.gameObject.x, this.gameObject.y);

	/* START-USER-CODE */
	protected awake(): void {
		this.fileToile.ref = this.gameObject;
		this.fileToile.duree = this.dureeAnimation;
		this.fileToile.longueurFile = this.longueurFile;
		this.fileToile.delaiAvantActivation = this.delaiAvantActivation;
		this.scene.add.existing(this.fileToile)

	}

	override get gameObject() {
		return super.gameObject as BaseEntites;
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
