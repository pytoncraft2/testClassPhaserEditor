
// You can write more code here
const bonusVitesseAraigne = 200;
const graviteVersLeHaut = -2500;
const graviteVersLeBas = 2500;

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

		// detecteur_haut
		const detecteur_haut = scene.add.rectangle(128, -133, 128, 128);
		detecteur_haut.scaleX = 0.19751986297412794;
		detecteur_haut.scaleY = 0.1622402073862163;
		detecteur_haut.isFilled = true;
		this.add(detecteur_haut);

		// detecteur_bas
		const detecteur_bas = scene.add.rectangle(128, 52, 128, 128);
		detecteur_bas.scaleX = 0.19751986297412794;
		detecteur_bas.scaleY = 0.1622402073862163;
		detecteur_bas.isFilled = true;
		this.add(detecteur_bas);

		this.image = image;
		this.detecteur_haut = detecteur_haut;
		this.detecteur_bas = detecteur_bas;

		/* START-USER-CTR-CODE */
		this.scene.time.delayedCall(4000, () => this.actionToucheEspace(), undefined, this)
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Image;
	public detecteur_haut: Phaser.GameObjects.Rectangle;
	public detecteur_bas: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.
	actionToucheEspace(): void {
		console.log("ACTION ARAIGNE !");
		this.body?.setVelocityY(-80)
	}

	actionToucheHaut() {
		if (this.body.touching.down && !this.body.touching.up) {
			const alendroit = this.image.flipY === false;
			if (alendroit) this.saut(true, graviteVersLeHaut);
		}
		else if (!this.body.touching.down && this.body.touching.up) {
			const alenvers = this.image.flipY === true;
			if (alenvers) {
				this.saut(false, graviteVersLeBas, 'up')
				this.body.setVelocityY(-900);
			}
		}
	}

	actionToucheBas() {
		if (this.body.touching.down && !this.body.touching.up) {
			const alendroit = this.image.flipY === false;
			if (alendroit) {
				this.saut(true, graviteVersLeHaut, 'down')
				this.body.setVelocityY(600);
			}
		}
		else if (!this.body.touching.down && this.body.touching.up) {
			const alenvers = this.image.flipY === true;
			if (alenvers) this.saut(false, graviteVersLeBas);
		}
	}

	/**
	 * @description effectue un saut vers le haut ou vers le bas en changeant la gravité et optionnelement traverser la platforme
	 * @param this
	 * @param flipY
	 * @param gravityY
	 * @param checkCollision 
	 */
	saut(flipY: boolean, gravityY: number, checkCollision?: 'up' | 'down') {
		this.image.setFlipY(flipY);
		this.body.gravity.y = gravityY;
		if (checkCollision) {
			this.body.checkCollision[checkCollision] = false;
			this.scene.time.delayedCall(100, () => {
				this.body.checkCollision[checkCollision] = true;
			}, undefined, this);
		}
	}

	actionToucheDroite(this: any, input?: any) {
		this.body.setVelocityX(this.velociteX + bonusVitesseAraigne)

		this.FlipX(false)
		// ZoneInteractionADroite(this)
	}

	actionToucheGauche(this: any, input?: any) {
		this.body.setVelocityX(-(this.velociteX + bonusVitesseAraigne))

		this.FlipX(true)
		// ZoneInteractionAGauche(this)
	}

	FlipX(ouiNon: boolean) {
		this.image.setFlipX(ouiNon);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
