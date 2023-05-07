
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
		this.body.setSize(64, 64, false);

		// araigne_png
		const araigne_png = scene.add.image(0, 0, "araigne", "araigne.png");
		this.add(araigne_png);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(77, -84, 128, 128);
		rectangle_1.scaleX = 1.0086123917826166;
		rectangle_1.scaleY = 0.150827636251598;
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// rectangle
		const rectangle = scene.add.rectangle(219, -3, 128, 128);
		rectangle.scaleX = 1.0086123917826166;
		rectangle.scaleY = 0.150827636251598;
		rectangle.isFilled = true;
		this.add(rectangle);

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
