
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Moustique {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Moustique extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// moustique_png
		const moustique_png = scene.add.image(0, 0, "moustique", "moustique.png");
		this.add(moustique_png);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(123, 10, 128, 128);
		rectangle_1.scaleX = 1.0304625156199587;
		rectangle_1.scaleY = 0.08548087789438341;
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
