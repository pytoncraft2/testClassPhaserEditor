
// You can write more code here
export default interface BaseEntites {

	body: Phaser.Physics.Arcade.Body;
	image: Phaser.GameObjects.Image;
	scene: (Niveau1 & Niveau2)
}

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Niveau1 from "../02-Niveaux/Niveau1/Niveau1";
import Niveau2 from "../02-Niveaux/Niveau2/Niveau2";
import BaseNiveaux from "../02-Niveaux/BaseNiveaux";
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
		this.scene.time.delayedCall(100, () => {
			this.bringToTop(this.toile_image);
			this.image
				.setInteractive({ cursor: 'pointer' })
				.on('pointerdown', () => ((this.scene as any).entiteControllable = this))
		});
		this.scene.add.existing(this);
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
	public tempsCumuleMaxBlocage: number = 0;
	public tempsAvantDeblocage: number = 3000;

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


	preUpdate(time: number, delta: number) {
		this.deblocageToile()
	}

	deblocageToile() {
		const dt = this.scene.game.loop.delta

		this.tempsCumule += dt
		const { left, right } = this.body.blocked;

		// if (left) this.actionToucheDroite()
		// else if (right) this.actionToucheGauche()
		// if (!this.body.wasTouching.none && !this.body.touching.down)
		// {
		// 	this.tempsCumule = 0;
		// }

		// console.log(this.tempsCumule, this.tempsEntreActions);


		if (this.tempsCumule < this.tempsEntreActions) { return }
		else {
			// console.log("GO");
			
				//débloquage totale
				if ((this.blocages - 1) == 0) {
					this.toile_image.clearTint();
					this.body.moves = true;
					this.blocages = 0;
					this.diminutionTailleToile();
					this.tempsCumule = 0;
				//débloquage progressive
				} else {

					if (this.blocages > 0 && this.blocages !== this.maxBlocages) {
						this.blocages -= 1;
						this.toile_image.clearTint();
						this.diminutionTailleToile()
						this.tempsCumule = 0;
					} else {
						// console.log("ELSEIF");
					} 
				}
			// if (this.blocages > -1 && this.blocages !== this.maxBlocages) {
			// 	// if (!entite.refToile?.ejectable) {
			// 	// 	entite.diminueNombreEnchainementBlocage()
			// 	// }
			// 	this.blocages -= 1;
			// 	const diminutionScale = this.toile_image.scaleX - 0.20;
			// 	this.toile_image.setScale(diminutionScale);
			// }
			// else if (this.blocages === this.maxBlocages)
			// {
			// 	console.log("MAX");
			// 	this.tempsCumuleMaxBlocage += dt
			// 	if (this.tempsCumuleMaxBlocage < this.tempsAvantDeblocage) { return }
			// 	else {
			// 		this.blocages -= 1;
			// 		this.tempsCumule = 0;
			// 	}
			// 	// this.body.enable = false;

			// 	// this.toile_image.setTintFill(111111)
			// } else if (this.blocages === -1) {
			// 	if (!this.body.moves) this.body.moves = true;
			// }
			// this.tempsCumule = 0
		}
		// if (this.tempsCumuleMaxBlocage < this.tempsAvantDeblocage) { return }
		// else {
		// 	// this.blocages -= 1;
		// 	this.tempsCumule = 0;
		// }
	}

	diminutionTailleToile() {
		const diminutionScale = this.toile_image.scaleX - 0.20;
		this.toile_image.setScale(diminutionScale);
	}

	ejection(obj1: any, obj2: any) {

		obj2.body.moves = true;
		obj2.body.checkCollision.none = true;

			// angle: obj1.parentContainer.huipat.flipX ? -960 : 960,
		this.scene.tweens.add({
			targets: [obj2.toile_image],
			angle: obj1.body.velocity.x < 0 ? -960 : 960,
			alpha: 0,
			ease: 'Linear',
			duration: 1000
		});
		obj2.body.setVelocity(obj1.body.velocity.x < 0 ? -500 : 500, -1800);
		// this.scene.time.delayedCall(800, () => {
			// console.log(obj2);

			// console.log(this);

			// obj2.destroy();
			// obj1.parentContainer.killedEnnemy += 1;
			// if (obj1.parentContainer.killedEnnemy == this.liste_fonds_ecran[score.niveau].nombreEnnemieAVaincre) {
			// score.niveauSuivant();
			// obj1.parentContainer.killedEnnemy = 0;
			// }
		// })
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
