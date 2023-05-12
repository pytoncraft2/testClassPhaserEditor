
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

		// bloc_toile
		const bloc_toile = scene.add.container(0, 0) as Phaser.GameObjects.Container & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(bloc_toile, false);
		bloc_toile.body.enable = false;
		bloc_toile.body.setSize(64, 64, false);
		this.add(bloc_toile);

		// image
		const image = scene.add.image(0, 0, "huipat", "toile.png");
		image.name = "image";
		image.scaleX = 1.0122770503946004;
		image.scaleY = 1.0122770503946004;
		image.alpha = 0;
		image.alphaTopLeft = 0;
		image.alphaTopRight = 0;
		image.alphaBottomLeft = 0;
		image.alphaBottomRight = 0;
		bloc_toile.add(image);

		// cercle
		const cercle = new ToileMouvante(scene, 0, 0);
		cercle.name = "cercle";
		cercle.scaleX = 1.6798584841308002;
		cercle.scaleY = 1.6798584841308002;
		bloc_toile.add(cercle);

		this.image = image;
		this.cercle = cercle;
		this.bloc_toile = bloc_toile;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public image: Phaser.GameObjects.Image;
	public cercle: ToileMouvante;
	public bloc_toile: Phaser.GameObjects.Container & { body: Phaser.Physics.Arcade.Body };
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
