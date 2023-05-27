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
import ToileHuipatPrefab from "../04-Projectiles/ToileHuipatPrefab";
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
					this.scene.entiteControllable = this;
					this.activeIA = false;
					this.scene.scale.startFullscreen()
				})
		});
			//@ts-ignore
		this.groupeBlocage.tempsAvantDestruction = []
		this.scene.add.existing(this);
		/* END-USER-CTR-CODE */
	}

	public velociteY: number = 890;
	public graviteY: number = 1000;
	public velociteX: number = 350;
	public blocages: number = 0;
	public maxBlocages: number = 5;
	public invincible: boolean = false;
	public activeIA: boolean = false;
	public refToileImmobilisante!: ToileHuipatPrefab;
	public poussable: boolean = false;

	/* START-USER-CODE */
	public groupeBlocage: Phaser.Physics.Arcade.Group = this.scene.physics.add.group({
		createCallback: function(this: Phaser.Physics.Arcade.Group) {
			//@ts-ignore
			// const months = ["Jan", "Mar", "Mar", "April"];
			// let febs = ["Feb", "Feb2", "Feb4"];
			// months.splice(1, 3, ...febs);
			// console.log(months);
			console.log(this.getLength());
			
// const pad = (arr: number[], x: number) => 
//   Array.from({ length: arr.length + x }, (_, i) => arr[i] ?? x)

// const arr: number[] = [], x = 1000;

// console.log(pad(arr, x));
const arr = [];
for (var i = 0; i < this.getLength(); i++) arr.push(1000);
			//@ts-ignore
this.tempsAvantDestruction = arr;
// this.tempsAvantDestruction = pad(arr, x);
			// this.tempsAvantDestruction.push(1000)
			// this.tempsAvantDestruction[0] = 1000;
			// this.tempsAvantDestruction[1] = 1000;
			// this.tempsAvantDestruction[2] = 1000;
			// a = this.tempsAvantDestruction.map(item => item == 3452 ? 1010 : item);
			// a.forEach((item, i) => { if (item == 3452) a[i] = 1010; });


			// if (!this.tempsAvantDestruction) {
				// this.tempsAvantDestruction = [];
			// }
			//@ts-ignore
			this.tempsAvantDestruction.push(1000);
		},
		removeCallback: function(this: Phaser.Physics.Arcade.Group, t: ToileHuipatPrefab | any) {
			if (this.getLength() == 0) {
				t.refEntite.body.moves = true;
			}
			// this.tempsAvantDestruction.shift();
		}
	});

	// Write your code here.
	awake() {
		//@ts-ignore
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
