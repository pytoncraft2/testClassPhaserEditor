// You can write more code here
export default interface BaseEntites {

	body: Phaser.Physics.Arcade.Body;
	image: Phaser.GameObjects.Sprite;
	scene: (Niveau1 & Niveau2)
}

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import Niveau1 from "../02-Niveaux/Niveau1/Niveau1";
import Niveau2 from "../02-Niveaux/Niveau2/Niveau2";
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
		this.scene.time.delayedCall(100, () => {
			this.bringToTop(this.toile_image);
			this.image
				.setInteractive({ cursor: 'pointer' })
				.on('pointerdown', () => (this.scene.entiteControllable = this))
		});
		this.scene.add.existing(this);
		/* END-USER-CTR-CODE */
	}

	public toile_image: Phaser.GameObjects.Image;
	public velociteY: number = 890;
	public graviteY: number = 1000;
	public velociteX: number = 350;
	public blocages: number = 0;
	public maxBlocages: number = 5;
	public invincible: boolean = false;
	public activeIA: boolean = false;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.body.gravity.y = this.graviteY;
	}

	actionToucheEspace() {
		console.log("touche espace base entite")
	}
	actionToucheGauche() {
		this.image.setFlipX(true);
		this.body.setVelocityX(-300);
	}
	actionToucheDroite() {
		this.image.setFlipX(false);
		this.body.setVelocityX(300);
	}
	actionToucheHaut() {
		this.body.setVelocityY(-900);
	}
	actionToucheBas() {
		this.body.setVelocityY(900);
	}
	aucuneTouche() {
		this.body.setVelocityX(0);
	}

	diminutionTailleToile() {
		const diminutionScale = this.toile_image.scaleX - 0.20;
		this.toile_image.setScale(diminutionScale);
	}

	/** RETOURNE L'IMAGE VERS LA DROITE(FALSE) OU VERS LA GAUCHE(TRUE) */

	FlipX(ouiNon: boolean) {
		this.image.setFlipX(ouiNon);
	}

	enleveVie() {
		const vies = this.scene.groupe_vie;
		const { length } = vies;
		if (length === 0) return;

		this.scene.tweens.add({
			targets: vies.getAt(length -1),
			alpha: 0,
			angle: 30,
			y: "+=50",
			scale: "+=0.04",
			duration: 500,
			onComplete: () => vies.removeAt(length -1)
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
