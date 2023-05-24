
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import BaseEntites from "../03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default interface ToileHuipatPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ToileHuipatPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.bounce.x = 1;
		this.body.bounce.y = 0.6;
		this.body.collideWorldBounds = true;
		this.body.pushable = false;
		this.body.setOffset(-21.464064621615748, -21.464064621615748);
		this.body.setSize(42.928129243231496, 42.928129243231496, false);

		// toile
		const toile = scene.add.sprite(0, 0, "huipat", "toile.png");
		toile.name = "toile";
		toile.scaleX = 0.28618752828821;
		toile.scaleY = 0.28618752828821;
		this.add(toile);

		// lists
		const listeRefEntiteImmobilise: Array<any> = [];

		this.toile = toile;
		this.listeRefEntiteImmobilise = listeRefEntiteImmobilise;

		/* START-USER-CTR-CODE */
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public toile: Phaser.GameObjects.Sprite;
	private listeRefEntiteImmobilise: Array<any>;
	public tempsCumule: number = 0;
	public tempsCumuleImmobilisation: number = 1000;

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
			this.listeRefEntiteImmobilise.map((entite: BaseEntites) => {
				if (entite.body.moves) {
					entite.x = this.x;
					entite.y = this.y;
					entite.angle = this.angle;
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
