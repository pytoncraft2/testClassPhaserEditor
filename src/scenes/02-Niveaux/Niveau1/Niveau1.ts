
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

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const qui_colision_avec_toile: Array<any> = [];

		// platformes_vs_entites
		this.physics.add.collider([...groupe_allies.list, ...groupe_adversaires.list], platformes.list);

		// adversaires_vs_allies
		this.physics.add.collider(groupe_allies.list, groupe_adversaires.list);

		// toiles_vs_adversaires
		this.physics.add.collider(groupe_adversaires.list , huipat.groupe_projectile_toiles.list, undefined, undefined, huipat);

		this.huipat = huipat;
		this.groupe_allies = groupe_allies;
		this.groupe_adversaires = groupe_adversaires;
		this.qui_colision_avec_toile = qui_colision_avec_toile;

		this.events.emit("scene-awake");
	}

	public huipat!: Huipat;
	public groupe_allies!: Phaser.GameObjects.Container;
	public groupe_adversaires!: Phaser.GameObjects.Container;
	private qui_colision_avec_toile!: Array<any>;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
