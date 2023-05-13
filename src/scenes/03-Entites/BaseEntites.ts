
// You can write more code here
export default interface BaseEntites {

	body: Phaser.Physics.Arcade.Body;
}

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseEntites extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// toile_image
		const toile_image = scene.add.image(0, 0, "huipat", "toile.png");
		toile_image.scaleX = 0;
		toile_image.scaleY = 0;
		this.add(toile_image);

		this.toile_image = toile_image;

		/* START-USER-CTR-CODE */
		// Write your code here.
// var timer = scene.time.addEvent({
//     delay: 1000,                // ms
//     callback: () => this.diminutionTailleToile(),
//     args: [],
//     callbackScope: this,
//     loop: false,
//     repeat: 0,
//     startAt: 0,
//     timeScale: 1,
//     paused: false
// });
		/* END-USER-CTR-CODE */
	}

	public toile_image: Phaser.GameObjects.Image;
	public velociteY: number = 890;
	public graviteY: number = 1000;
	public velociteX: number = 350;
	public blocages: number = 0;
	public maxBlocages: number = 7;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.body.gravity.y = this.graviteY;
	}

	actionToucheEspace() {
		console.log("touche espace base entite")
	}
	actionToucheGauche() {
		(this as any).image.setFlipX(true);
		(this.body as any).setVelocityX(-300);
	}
	actionToucheDroite() {
		(this as any).image.setFlipX(false);
		(this.body as any).setVelocityX(300);
	}
	actionToucheHaut() {
		(this.body as any).setVelocityY(-900);
	}
	actionToucheBas() {
		(this.body as any).setVelocityY(900);
	}
	aucuneTouche() {
		(this.body as any).setVelocityX(0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
