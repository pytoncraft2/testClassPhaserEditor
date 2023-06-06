
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Garcon {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Garcon extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setOffset(-159.53403164713683, -146.54266099183252);
		this.body.setSize(319.06806329427366, 293.08532198366504, false);

		// image
		const image = scene.add.sprite(0, 0, "garcon", "boy_idle1.png");
		image.scaleX = 0.5196548262121721;
		image.scaleY = 0.5196548262121721;
		this.add(image);

		this.image = image;

		/* START-USER-CTR-CODE */
		this.setScale(0.5)
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	// Write your code here.
	actionToucheDroite(): void {
		super.actionToucheDroite()
		this.image.play('garcon_marche', true)
	}

	actionToucheGauche(): void {
		super.actionToucheGauche()
		console.log(this.image.anims);

		this.image.anims.play('garcon_marche', true)
	}

	actionToucheHaut(): void {
		super.actionToucheEspace()
		this.image.play('garcon_saute', true)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
