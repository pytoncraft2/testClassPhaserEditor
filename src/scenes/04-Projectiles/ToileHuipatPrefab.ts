
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
	public tempsCumuleAvantDestruction: number = 0;
	public refGroupeBlocage!: Phaser.Physics.Arcade.Group;
	public refEntite!: BaseEntites;

	/* START-USER-CODE */

	protected preUpdate(time: number, delta: number): void {
		if (this.refGroupeBlocage) {
			// console.log("UPDATE", this.refGroupeBlocage.getLength());
			//@ts-ignore
			this.refGroupeBlocage.tempsAvantDestruction[0] -= delta;
			//@ts-ignore
			// console.log(this.refGroupeBlocage.tempsAvantDestruction[this.refGroupeBlocage.getLength()], this.refGroupeBlocage.getLength());
			

			console.log(this.refGroupeBlocage.tempsAvantDestruction);
			
			//@ts-ignore
			if (this.refGroupeBlocage.tempsAvantDestruction[0] <= 0) {
				console.log("destruction");
				this.refGroupeBlocage.getChildren()[0].destroy()
			//@ts-ignore
				this.refGroupeBlocage.tempsAvantDestruction.shift()
			}
			

		}
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
