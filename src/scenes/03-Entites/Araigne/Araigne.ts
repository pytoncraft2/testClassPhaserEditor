
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Araigne {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Araigne extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 142, y ?? 72);

		scene.physics.add.existing(this, false);
		this.body.setOffset(-114, -39.5);
		this.body.setSize(228, 79, false);

		// image
		const image = scene.add.image(0, 0, "araigne", "araigne.png");
		this.add(image);

		/* START-USER-CTR-CODE */
		this.scene.time.delayedCall(4000, () => this.actionToucheEspace(), undefined, this)
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	actionToucheEspace(): void {
		console.log("ACTION ARAIGNE !");
		this.body.setVelocityY(-80)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
