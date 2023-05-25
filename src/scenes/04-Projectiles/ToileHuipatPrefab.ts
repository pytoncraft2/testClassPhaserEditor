
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import BaseEntites from "../03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default interface ToileHuipatPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ToileHuipatPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "huipat", frame ?? "toile.png");

		this.name = "toile";
		this.scaleX = 0.28618752828821;
		this.scaleY = 0.28618752828821;
		scene.physics.add.existing(this, false);
		this.body.bounce.x = 1;
		this.body.bounce.y = 0.4;
		this.body.collideWorldBounds = true;
		this.body.setSize(150, 150, false);

		// lists
		const listeRefEntiteImmobilise: Array<any> = [];

		this.listeRefEntiteImmobilise = listeRefEntiteImmobilise;

		/* START-USER-CTR-CODE */
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	private listeRefEntiteImmobilise: Array<any>;
	public tempsCumule: number = 0;
	public tempsCumuleImmobilisation: number = 1000;
	public tempsCumuleDestruction: number = 0;

	/* START-USER-CODE */

	protected preUpdate(time: number, delta: number): void {
		this.tempsCumule += delta;

		// if (this.refImmobilise) {
			if (this.tempsCumule >= 320) {
				if (this.listeRefEntiteImmobilise.length == 0) {
					console.log("DESTRUCTION");
					this.destroy()
				}
				this.tempsCumule = 0;

			// 	this.refImmobilise.blocages = 0;
			// 	this.refImmobilise.body.moves = true;
			// 	this.destroy()
			// 	return;
			}

			// if (this.refImmobilise.body.moves) {
			// 	this.refImmobilise.body.moves = false;				
			// 	this.body.allowGravity = false;
			// 	this.body.moves = false;
			// 	this.body.enable = false;
			// if (this.refEntiteImmobilise) {

			// }

		if (this.listeRefEntiteImmobilise.length != 0) {
			this.tempsCumuleDestruction += delta;
			this.listeRefEntiteImmobilise.map((entite: BaseEntites) => {
				if (!entite.body) return;
				if (entite.body.moves) {
					if (this.tempsCumuleDestruction >= 3000) {
						this.tempsCumuleDestruction = 0;
						entite.destroy();
						this.destroy()
						return;
					}
					if (entite.image.flipX)
					{
						this.body.setVelocity(300, -300)
					} else if (!entite.image.flipX) {
						this.body.setVelocity(-300, -300)
					}
					// entite.x = this.x;
					// entite.y = this.y;
					// entite.angle = this.angle;
				}
			})

		}
			// 	console.log("STOP MOUVEMENT");
			// } else if (!this.refImmobilise.body.moves) {
			// 	this.tempsCumuleImmobilisation += delta;

			// 	if (this.tempsCumuleImmobilisation >= 1000) {
			// 		// this.scale -= 0.05;
			// 		this.tempsCumuleImmobilisation = 0;
			// 	}
			// }

		// }
		// console.log(time);

	}

	augmenteDureeImmobilisation() {
		this.scale += 0.1;
	}

	ajoutRefEntiteImmobilise(adversaire: BaseEntites) {
		this.listeRefEntiteImmobilise.push(adversaire)
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
