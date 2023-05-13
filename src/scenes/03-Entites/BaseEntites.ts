
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
		this.scene.time.delayedCall(100, () => this.bringToTop(this.toile_image));
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public toile_image: Phaser.GameObjects.Image;
	public velociteY: number = 890;
	public graviteY: number = 1000;
	public velociteX: number = 350;
	public blocages: number = 0;
	public maxBlocages: number = 7;
	public tempsCumule: number = 0;
	public tempsEntreActions: number = 500;

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


	preUpdate(time: number, delta: number) {
		this.deblocageToile()
	}


	deblocageToile() {
		const dt = this.scene.game.loop.delta

		this.tempsCumule += dt
		const { left, right } = this.body.blocked;

		if (left) this.actionToucheDroite()
		else if (right) this.actionToucheGauche()
		if (!this.body.wasTouching.none && !this.body.touching.down)
		{
			this.tempsCumule = 0;
		}
		

		if (this.tempsCumule < this.tempsEntreActions) { return }
		else {
			if (this.blocages > 0 && this.blocages !== this.maxBlocages) {
				// if (!entite.refToile?.ejectable) {
				// 	entite.diminueNombreEnchainementBlocage()
				// }
				this.blocages -= 1;
				const diminutionScale = this.toile_image.scaleX - 0.20;
				this.toile_image.setScale(diminutionScale);
			}
			/*else if (this.blocages === this.maxBlocages)
			{
				// if (!this.body.moves) this.body.moves = true;
				this.toile_image.setTintFill(111111)
			}
			*/
			this.tempsCumule = 0
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
