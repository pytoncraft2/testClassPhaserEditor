// You can write more code here
export default interface BaseEntites {

	body: Phaser.Physics.Arcade.Body;
	image: Phaser.GameObjects.Sprite;
	scene: (Niveau1 & Niveau2);
}

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import Niveau1 from "../02-Niveaux/Niveau1/Niveau1";
import Niveau2 from "../02-Niveaux/Niveau2/Niveau2";
import GroupeToile from "./Huipat/GroupeToile";
/* END-USER-IMPORTS */

export default class BaseEntites extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.time.delayedCall(100, () => {
			this.image
				.setInteractive({ cursor: 'pointer' })
				.on('pointerdown', () => {
					// this.scene.entiteControllable = this;
					// this.activeIA(false);
					// this.scene.cameras.main.startFollow(this)
					this.scene.scale.startFullscreen()
					// this.scene.scene.start('Niveau2')
				}, this.scene)
		}, undefined, this.scene);
		this.scene.add.existing(this);
		/* END-USER-CTR-CODE */
	}

	public velociteY: number = 890;
	public graviteY: number = 1000;
	public velociteX: number = 350;
	public maxBlocages: number = 5;
	public invincible: boolean = false;
	public poussable: boolean = false;
	public fusionnable: boolean = false;
	public interactionActive: boolean = true;
	public estActiveIA: boolean = false;
	public peutTraverserPlatformes: boolean = false;
	public modeEnerve: boolean = false;

	/* START-USER-CODE */
	public groupeBlocage = new GroupeToile(this.scene)
	public logiqueDescisionActionsIA!: Phaser.Time.TimerEvent

	// Write your code here.

	actionToucheEspace() {
		console.log("touche espace base entite")
	}
	actionToucheGauche() {
		this.image.setFlipX(true);
		this.body.setVelocityX(-this.velociteX);
	}
	actionToucheDroite() {
		this.image.setFlipX(false);
		this.body.setVelocityX(this.velociteX);
	}
	actionToucheHaut() {
		this.body.setVelocityY(-this.velociteY);
	}
	actionToucheBas() {
		this.body.setVelocityY(this.velociteY);
	}
	aucuneTouche() {
		this.body.setVelocityX(0);
	}

	/** RETOURNE L'IMAGE VERS LA DROITE(FALSE) OU VERS LA GAUCHE(TRUE) */

	FlipX(ouiNon: boolean) {
		this.image.setFlipX(ouiNon);
	}

	activeIA(active: boolean = true): void {
		if (active) {
			if (this.logiqueDescisionActionsIA) {
				this.logiqueDescisionActionsIA.paused = false;
			}
			this.estActiveIA = true;
		} else {
			if (this.logiqueDescisionActionsIA) {
				this.logiqueDescisionActionsIA.paused = true;
			}
			this.estActiveIA = false;
		}
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

	detruire() {	
		console.log("LONGEUR", this.scene.groupe_adversaires.list.length);
		// this.verifSiFinDeNiveau()

		
		// this.scene.scene.start('Niveau2')
		this.logiqueDescisionActionsIA.destroy()
		this.scene.groupe_adversaires.setActive(false)
		this.scene.niveauSuivant()
		
		// this.destroy()
		// this.scene.events.emit('adversaireVaincu', {ok: true}, this.scene);

		// this.activeIA(false);
		// this.body.moves = true;
		// this.interactionActive = false;
		// this.fusionnable = true;
		// this.peutTraverserPlatformes = false;
		// this.body.enable = true;
		// this.body.setVelocity(0)
		// this.image.setScale(0.5)

		// const c1 = this.scene.add.circle(this.x, this.y, 80, 0x07d9fc);
		// const c2 = this.scene.add.circle(this.x, this.y, 80, 0xffffff);
		// c1.setAlpha(0.5).setScale(0)
		// c2.setAlpha(0.5).setScale(0)

		// const animationObjetFusionnable = this.scene.add.timeline([
		// 	{
		// 		at: 0,
		// 		run: () => {
		// 			this.body.setVelocityY(-Phaser.Math.Between(1000, 1800));
		// 			this.body.checkCollision.up = false;
		// 		},
		// 	},
		// 	{
		// 		at: 100,
		// 		tween: {
		// 			targets: c1,
		// 			scale: 1,
		// 			alpha: 0,
		// 			repeat: 8,
		// 			ease: 'Sine.easeInOut'
		// 		}
		// 	},
		// 	{
		// 		at: 400,
		// 		run: () => {
		// 			this.body.checkCollision.up = true;
		// 		},
		// 	},
		// 	{
		// 		at: 500,
		// 		tween: {
		// 			targets: c2,
		// 			scale: 1,
		// 			alpha: 0,
		// 			x: this.x,
		// 			y: this.y,
		// 			repeat: 8,
		// 			onUpdate: () => {
		// 				c1.setPosition(this.x,this.y)
		// 				c2.setPosition(this.x, this.y)
		// 			},
		// 			onComplete: () => {
		// 				if (this.fusionnable) {
		// 					this.destroy()
		// 				}
		// 			},
		// 			ease: 'Sine.easeInOut'
		// 		}
		// 	}
		// ]);

		// animationObjetFusionnable.play();
	}

	activeModeEnerve(active: boolean = true) { }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
