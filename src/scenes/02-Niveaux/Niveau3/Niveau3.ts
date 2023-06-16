
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import Murale from "../../03-Entites/Araigne/Murale";
import Araigne from "../../03-Entites/Araigne/Araigne";
import Huipat from "../../03-Entites/Huipat/Huipat";
import PlatformePrefab from "../../04-Platformes/PlatformePrefab";
import PlatformeVerticale from "../../04-Platformes/PlatformeVerticale";
import OnSceneAwakeScript from "../../../script-nodes/OnSceneAwakeScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau3 extends BaseNiveaux {

	constructor() {
		super("Niveau3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// groupe_projectile_toiles
		const groupe_projectile_toiles = this.add.container(0, 0);

		// groupe_vs_platformes
		const groupe_vs_platformes = this.add.layer();

		// groupe_adversaires
		const groupe_adversaires = this.add.container(2, 1);

		// murale
		const murale = new Murale(this, -300, -200);
		groupe_adversaires.add(murale);

		// murale_1
		const murale_1 = new Murale(this, 1068, 194);
		groupe_adversaires.add(murale_1);

		// murale_2
		const murale_2 = new Murale(this, 752, 671);
		groupe_adversaires.add(murale_2);

		// araigne_1
		const araigne_1 = new Araigne(this, 1661, 876);
		groupe_adversaires.add(araigne_1);

		// groupe_allies
		const groupe_allies = this.add.container(379.8965337395412, 693.9689068033596);

		// huipat
		const huipat = new Huipat(this, 0, 0);
		huipat.name = "huipat";
		groupe_allies.add(huipat);
		huipat.image.setOrigin(0.5, 0.5);

		// platformes
		const platformes = this.add.container(-4, -2);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 390, 1000);
		platformePrefab.scaleX = 5;
		platformePrefab.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 1536, 1000);
		platformePrefab_1.scaleX = 6;
		platformePrefab_1.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 1560, 800);
		platformePrefab_2.scaleX = 3;
		platformePrefab_2.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_2);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(this, 910, 400);
		platformePrefab_5.scaleX = 8;
		platformePrefab_5.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_5);

		// platformePrefab_6
		const platformePrefab_6 = new PlatformePrefab(this, 1600, 148);
		platformePrefab_6.scaleX = 5;
		platformePrefab_6.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_6);

		// platformePrefab_7
		const platformePrefab_7 = new PlatformePrefab(this, 926, 800);
		platformePrefab_7.scaleX = 3;
		platformePrefab_7.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_7);

		// platformePrefab_8
		const platformePrefab_8 = new PlatformePrefab(this, 260, 200);
		platformePrefab_8.scaleX = 4;
		platformePrefab_8.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_8);

		// platformeVerticale
		const platformeVerticale = new PlatformeVerticale(this, 1105, 607);
		platformes.add(platformeVerticale);

		// platformeVerticale_1
		const platformeVerticale_1 = new PlatformeVerticale(this, 1410, 353);
		platformes.add(platformeVerticale_1);

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const liste_toile_vs_adversaire = [murale_2, murale_1, murale];

		this.groupe_projectile_toiles = groupe_projectile_toiles;
		this.groupe_vs_platformes = groupe_vs_platformes;
		this.groupe_adversaires = groupe_adversaires;
		this.huipat = huipat;
		this.groupe_allies = groupe_allies;
		this.platformes = platformes;
		this.liste_toile_vs_adversaire = liste_toile_vs_adversaire;

		this.events.emit("scene-awake");
	}

	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	public groupe_vs_platformes!: Phaser.GameObjects.Layer;
	public groupe_adversaires!: Phaser.GameObjects.Container;
	public huipat!: Huipat;
	public groupe_allies!: Phaser.GameObjects.Container;
	public platformes!: Phaser.GameObjects.Container;
	private liste_toile_vs_adversaire!: Murale[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
