
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Fille {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Fille extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setOffset(-64, -64);
		this.body.setSize(128, 128, false);

		// image
		const image = scene.add.sprite(0, 0, "fille", "RunRight01.png");
		this.add(image);

		// ellipse_1
		const ellipse_1 = scene.add.ellipse(152, 27, 128, 128);
		ellipse_1.isFilled = true;
		this.add(ellipse_1);

		// ellipse
		const ellipse = scene.add.ellipse(166, 28, 128, 128);
		ellipse.scaleX = 0.800124453806489;
		ellipse.scaleY = 0.9540639267582228;
		ellipse.isFilled = true;
		ellipse.fillColor = 0;
		this.add(ellipse);

		this.image = image;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */
	public velociteX = 600;

	// Write your code here.
	actionToucheDroite(): void {
		super.actionToucheDroite()
		this.image.play('fille_marche', true)
	}

	actionToucheGauche(): void {
		super.actionToucheGauche()
		this.image.play('fille_marche', true)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
