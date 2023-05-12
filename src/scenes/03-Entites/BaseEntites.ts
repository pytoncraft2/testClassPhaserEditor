
// You can write more code here
export default interface BaseEntites {

	body: Phaser.Physics.Arcade.Body;
}

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ToileMouvante from "../04-Projectiles/ToileMouvante";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseEntites extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// image_toile_blocage
		const image_toile_blocage = scene.add.image(0, 0, "huipat", "toile.png");
		image_toile_blocage.scaleX = 1.0122770503946004;
		image_toile_blocage.scaleY = 1.0122770503946004;
		this.add(image_toile_blocage);

		// toileMouvante
		const toileMouvante = new ToileMouvante(scene, 0, 0);
		toileMouvante.scaleX = 1.6798584841308002;
		toileMouvante.scaleY = 1.6798584841308002;
		this.add(toileMouvante);

		this.image_toile_blocage = image_toile_blocage;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public image_toile_blocage: Phaser.GameObjects.Image;
	public velociteY: number = 890;
	public graviteY: number = 1000;
	public velociteX: number = 350;
	public blocages: number = 0;

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
