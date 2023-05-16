
// You can write more code here

/* START OF COMPILED CODE */

import Araigne from "../Araigne";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface AraigneMurale {

	 body: Phaser.Physics.Arcade.Body;
}

export default class AraigneMurale extends Araigne {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// image
		const image = new Araigne(scene, 0, 0);
		image.tintTopLeft = 16777215;
		image.tintTopRight = 6486908;
		image.tintBottomLeft = 6486908;
		image.tintBottomRight = 6486908;
		this.add(image);

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
