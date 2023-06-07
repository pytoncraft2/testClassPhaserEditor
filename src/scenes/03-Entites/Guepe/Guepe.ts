
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntites from "../BaseEntites";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Guepe {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Guepe extends BaseEntites {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.maxVelocity.x = 600;
		this.body.maxVelocity.y = 600;
		this.body.gravity.y = -100;
		this.body.drag.x = 1300;
		this.body.drag.y = 900;
		this.body.collideWorldBounds = true;
		this.body.checkCollision.none = true;
		this.body.setOffset(-43.92362082307655, -35.58626687054812);
		this.body.setSize(87.8472416461531, 71.17253374109625, false);

		// image
		const image = scene.add.sprite(0, 0, "guepe", "guepe.png");
		image.scaleX = 0.4067001928062643;
		image.scaleY = 0.4067001928062643;
		this.add(image);

		this.image = image;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Sprite;
	public indexCibleCourante: number = 0;
	public lignes: Phaser.GameObjects.Graphics = this.scene.add.graphics();
	public listeCibles: Phaser.GameObjects.Image[] = [this.scene.fleur_bleu,this.scene.fleur_rouge];
	public estActiveIA: boolean = true;

	/* START-USER-CODE */
	public tempCumuleReajustement: number = 0;

	actionToucheDroite(): void {
		this.image.setFlipX(false)
		this.body.setAccelerationX(1900);
	}

	actionToucheGauche(): void {
		this.image.setFlipX(true)
		this.body.setAccelerationX(-1900);
	}

	actionToucheHaut(): void {
		this.body.setAccelerationY(-1900);
	}

	actionToucheBas(): void {
		this.body.setAccelerationY(1900);
	}

	aucuneTouche(): void {
        this.body.setAcceleration(0, 0);
	}

	preUpdate(time: any, delta: any): void {
		this.scene.physics.world.wrap(this, 400);

        // this.lignes.clear()
        //     .lineStyle(2, 0xff3300)
        //     .lineBetween(this.x, this.y, this.scene.fleur_bleu.x, this.scene.fleur_bleu.y)
        //     .lineStyle(2, 0x0099ff)
            // .lineBetween(furthest.center.x, furthest.center.y, this.cursor.x, this.cursor.y);

			if (this.listeCibles.length > 0) {
				if (this.listeCibles) {
					this.tempCumuleReajustement += delta;


					const distance = Phaser.Math.Distance.BetweenPoints({x: this.x, y: this.y}, {x: this.scene.fleur_bleu.x, y: this.scene.fleur_bleu.y});
					console.log(distance);

					if (this.tempCumuleReajustement >= 1000) {
						if (distance > 300) {
							this.actionToucheGauche()
						} else if (distance < 300) {
							this.actionToucheDroite()
						}
						this.tempCumuleReajustement = 0

					}

					
				}
			}

		// if (this.listeCibles.length) {
		// 	const distance = Phaser.Math.Distance.BetweenPoints(this, this.listeCibles[this.indexCibleCourante]);
		// 	console.log(distance);
		// }
		if (this.estActiveIA) this.deplacementIA()
	}

	deplacementIA() {
		// this.actionToucheDroite()
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
