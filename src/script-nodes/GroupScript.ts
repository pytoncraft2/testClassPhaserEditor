
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import FileToileIntro from "~/scenes/04-Projectiles/FileToileIntro";
/* END-USER-IMPORTS */

export default class GroupScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public Objet1: any = FileToileIntro;

	/* START-USER-CODE */

	// Write your code here.
	protected start(): void {
		var group = this.scene.add.group();
		group.add(this.Objet1)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
