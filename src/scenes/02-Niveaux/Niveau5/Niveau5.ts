
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import PlatformePrefab from "../../04-Platformes/PlatformePrefab";
import Guepe from "../../03-Entites/Guepe/Guepe";
import SuivreFleursScript from "../../../script-nodes/SuivreFleursScript";
import Moustique from "../../03-Entites/Moustique/Moustique";
import Huipat from "../../03-Entites/Huipat/Huipat";
import ChauveSouris from "../../03-Entites/ChauveSouris/ChauveSouris";
import OnSceneAwakeScript from "../../../script-nodes/OnSceneAwakeScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau5 extends BaseNiveaux {

	constructor() {
		super("Niveau5");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// fleurs
		const fleurs = this.add.container(0, 0);

		// fleur_rose_png
		const fleur_rose_png = this.add.image(910, 684, "fleurs", "fleur_rose.png");
		fleur_rose_png.flipX = true;
		fleurs.add(fleur_rose_png);

		// fleur_rouge_png
		const fleur_rouge_png = this.add.image(1778, 686, "fleurs", "fleur_rouge.png");
		fleurs.add(fleur_rouge_png);

		// groupe_vs_platformes
		const groupe_vs_platformes = this.add.layer();

		// groupe_projectile_toiles
		const groupe_projectile_toiles = this.add.container(0, 0);

		// platformes
		const platformes = this.add.container(0, 0);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 6735, 750);
		platformePrefab.scaleX = 100;
		platformePrefab.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab);

		// groupe_adversaires
		const groupe_adversaires = this.add.container(0, 0);

		// guepe_1
		const guepe_1 = new Guepe(this, 666, 504);
		groupe_adversaires.add(guepe_1);

		// suivreFleursScript
		new SuivreFleursScript(guepe_1);

		// moustique
		const moustique = new Moustique(this, 1249, 478);
		groupe_adversaires.add(moustique);

		// groupe_allies
		const groupe_allies = this.add.container(0, 0);

		// huipat
		const huipat = new Huipat(this, 1492, 639);
		huipat.name = "huipat";
		groupe_allies.add(huipat);
		huipat.image.setOrigin(0.5, 0.5);

		// chauve_souris_png
		const chauve_souris_png = new ChauveSouris(this, 1012, 274);
		this.add.existing(chauve_souris_png);

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		this.fleurs = fleurs;
		this.groupe_vs_platformes = groupe_vs_platformes;
		this.groupe_projectile_toiles = groupe_projectile_toiles;
		this.platformes = platformes;
		this.groupe_adversaires = groupe_adversaires;
		this.huipat = huipat;
		this.groupe_allies = groupe_allies;

		this.events.emit("scene-awake");
	}

	public fleurs!: Phaser.GameObjects.Container;
	public groupe_vs_platformes!: Phaser.GameObjects.Layer;
	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	public platformes!: Phaser.GameObjects.Container;
	public groupe_adversaires!: Phaser.GameObjects.Container;
	public huipat!: Huipat;
	public groupe_allies!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		// const emitter = this.add.particles(400, 250, 'flares', {
		// 	frame: ['red', 'yellow', 'green'],
		// 	lifespan: 4000,
		// 	speed: { min: 150, max: 250 },
		// 	scale: { start: 0.8, end: 0 },
		// 	gravityY: 150,
		// 	blendMode: 'ADD',
		// 	emitting: false
		// });


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
