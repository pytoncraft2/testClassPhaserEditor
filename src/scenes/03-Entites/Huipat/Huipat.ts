
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
		this.body.setOffset(-74, -81);
		this.body.setSize(148, 162, false);

		// image
		const image = scene.add.image(0, 0, "huipat", "huipat.png");
		this.add(image);

		// detecteur_proche
		const detecteur_proche = scene.add.rectangle(66, -4, 128, 128);
		detecteur_proche.scaleX = 0.6879210867196743;
		detecteur_proche.scaleY = 1.1424662876249119;
		detecteur_proche.alpha = 0.5;
		detecteur_proche.isFilled = true;
		this.add(detecteur_proche);

		this.image = image;
		this.detecteur_proche = detecteur_proche;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Image;
	public detecteur_proche: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.
	actionToucheEspace(): void {
		this.body.setVelocityY(-400)
		console.log("ESPACE HHHHHHHHUIPAT");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
