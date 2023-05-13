
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import Huipat from "../../03-Entites/Huipat/Huipat";
import Araigne from "../../03-Entites/Araigne/Araigne";
import Moustique from "../../03-Entites/Moustique/Moustique";
import PlatformePrefab from "../../04-Platformes/PlatformePrefab";
import OnSceneAwakeScript from "../../../script-nodes/OnSceneAwakeScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends BaseNiveaux {

	constructor() {
		super("Niveau1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// groupe_allies
		const groupe_allies = this.add.container(1152, 400);

		// huipat
		const huipat = new Huipat(this, 0, 0);
		huipat.name = "huipat";
		groupe_allies.add(huipat);
		huipat.image.setOrigin(0.5, 0.5);

		// groupe_adversaires
		const groupe_adversaires = this.add.container(0, 0);

		// araigne
		const araigne = new Araigne(this, 366, 596);
		araigne.body.velocity.x = 300;
		araigne.body.velocity.y = 0;
		groupe_adversaires.add(araigne);

		// moustique_png
		const moustique_png = new Moustique(this, 871, 299);
		groupe_adversaires.add(moustique_png);

		// platformes
		const platformes = this.add.container(0, 0);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 960, 800);
		platformePrefab.scaleX = 15.181035249767532;
		platformePrefab.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 960, 600);
		platformes.add(platformePrefab_1);

		// groupe_projectile_toiles
		const groupe_projectile_toiles = this.add.container(0, 0);

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const liste_toile_vs_adversaire = [araigne];

		// platformes_vs_entites
		this.physics.add.collider([...groupe_allies.list, ...groupe_adversaires.list], platformes.list);

		// adversaires_vs_allies
		this.physics.add.collider(groupe_allies.list, groupe_adversaires.list);

		// toiles_vs_entite
		this.physics.add.overlap(groupe_projectile_toiles.list, liste_toile_vs_adversaire, this.toileToucheEntite as any, undefined, this);

		this.huipat = huipat;
		this.groupe_allies = groupe_allies;
		this.groupe_adversaires = groupe_adversaires;
		this.groupe_projectile_toiles = groupe_projectile_toiles;
		this.liste_toile_vs_adversaire = liste_toile_vs_adversaire;

		this.events.emit("scene-awake");
	}

	public huipat!: Huipat;
	public groupe_allies!: Phaser.GameObjects.Container;
	public groupe_adversaires!: Phaser.GameObjects.Container;
	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	private liste_toile_vs_adversaire!: Araigne[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
