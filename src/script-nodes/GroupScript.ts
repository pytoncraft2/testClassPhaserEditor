
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import FileToileIntro from "../scenes/04-Projectiles/FileToileIntro";
import BaseEntites from "~/scenes/03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default class GroupScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	protected awake(): void {
	}
	protected start(): void {
		console.log(this);

		this.scene.tweens.add({
			targets: this.gameObject.image,
			delay: 1000,
			alpha: 0,
			duration: 1000
		})
		// var group = this.scene.add.group();
		// group.add(this.file)
	}

	override get gameObject() {
		return super.gameObject as BaseEntites;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
