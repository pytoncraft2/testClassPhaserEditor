
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Huipat {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Huipat extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 120, y ?? 124);

		scene.physics.add.existing(this, false);
		this.body.setSize(64, 64, false);

		// huipat_png
		const huipat_png = scene.add.image(0, 0, "huipat", "huipat.png");
		this.add(huipat_png);

		// detection_proche
		const detection_proche = scene.add.rectangle(69, 3, 128, 128);
		detection_proche.scaleX = 0.6252600982434391;
		detection_proche.scaleY = 1.1514195485615129;
		detection_proche.isFilled = true;
		this.add(detection_proche);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	actionToucheEspace(): void {
		console.log("ESPACE HHHHHHHHUIPAT");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
