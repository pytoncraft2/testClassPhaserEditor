
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import PlatformePrefab from "../../04-Platformes/PlatformePrefab";
import PlatformeVerticale from "../../04-Platformes/PlatformeVerticale";
import Guepe from "../../03-Entites/Guepe/Guepe";
import SuivreFleursScript from "../../../script-nodes/SuivreFleursScript";
import Huipat from "../../03-Entites/Huipat/Huipat";
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

		// platformeVerticale
		const platformeVerticale = new PlatformeVerticale(this, 3193, 226);
		platformes.add(platformeVerticale);

		// platformeVerticale_1
		const platformeVerticale_1 = new PlatformeVerticale(this, 3196, 730);
		platformes.add(platformeVerticale_1);

		// groupe_adversaires
		const groupe_adversaires = this.add.container(0, 0);

		// guepe_1
		const guepe_1 = new Guepe(this, 666, 504);
		guepe_1.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_1);

		// suivreFleursScript
		new SuivreFleursScript(guepe_1);

		// guepe
		const guepe = new Guepe(this, 132.2831573486328, 386.24432373046875);
		guepe.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe);

		// suivreFleursScript
		new SuivreFleursScript(guepe);

		// guepe_2
		const guepe_2 = new Guepe(this, 312.75299072265625, 389.9653625488281);
		guepe_2.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_2);

		// suivreFleursScript
		new SuivreFleursScript(guepe_2);

		// guepe_3
		const guepe_3 = new Guepe(this, 461.5940856933594, 447.6412658691406);
		guepe_3.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_3);

		// suivreFleursScript
		new SuivreFleursScript(guepe_3);

		// guepe_4
		const guepe_4 = new Guepe(this, 405.7786560058594, 576.0167236328125);
		guepe_4.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_4);

		// suivreFleursScript
		new SuivreFleursScript(guepe_4);

		// guepe_5
		const guepe_5 = new Guepe(this, 482.0597229003906, 334.1499328613281);
		guepe_5.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_5);

		// suivreFleursScript
		new SuivreFleursScript(guepe_5);

		// guepe_6
		const guepe_6 = new Guepe(this, 621.5982666015625, 282.0555419921875);
		guepe_6.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_6);

		// suivreFleursScript
		new SuivreFleursScript(guepe_6);

		// guepe_7
		const guepe_7 = new Guepe(this, 725.7870483398438, 406.7099609375);
		guepe_7.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_7);

		// suivreFleursScript
		new SuivreFleursScript(guepe_7);

		// guepe_8
		const guepe_8 = new Guepe(this, 852.3019409179688, 497.8751525878906);
		guepe_8.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_8);

		// suivreFleursScript
		new SuivreFleursScript(guepe_8);

		// guepe_9
		const guepe_9 = new Guepe(this, 632.7613525390625, 568.5746459960938);
		guepe_9.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_9);

		// suivreFleursScript
		new SuivreFleursScript(guepe_9);

		// guepe_10
		const guepe_10 = new Guepe(this, 571.3643798828125, 445.78076171875);
		guepe_10.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_10);

		// suivreFleursScript
		new SuivreFleursScript(guepe_10);

		// guepe_11
		const guepe_11 = new Guepe(this, 573.2249145507812, 326.7078857421875);
		guepe_11.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_11);

		// suivreFleursScript
		new SuivreFleursScript(guepe_11);

		// guepe_12
		const guepe_12 = new Guepe(this, 485.78076171875, 170.4247283935547);
		guepe_12.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_12);

		// suivreFleursScript
		new SuivreFleursScript(guepe_12);

		// guepe_13
		const guepe_13 = new Guepe(this, 355.5447998046875, 189.0298614501953);
		guepe_13.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_13);

		// suivreFleursScript
		new SuivreFleursScript(guepe_13);

		// guepe_14
		const guepe_14 = new Guepe(this, 333.2186279296875, 300.66070556640625);
		guepe_14.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_14);

		// suivreFleursScript
		new SuivreFleursScript(guepe_14);

		// guepe_15
		const guepe_15 = new Guepe(this, 288.5663146972656, 540.6669921875);
		guepe_15.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_15);

		// suivreFleursScript
		new SuivreFleursScript(guepe_15);

		// guepe_16
		const guepe_16 = new Guepe(this, 515.5489501953125, 602.0639038085938);
		guepe_16.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_16);

		// suivreFleursScript
		new SuivreFleursScript(guepe_16);

		// guepe_17
		const guepe_17 = new Guepe(this, 536.0146484375, 592.7613525390625);
		guepe_17.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_17);

		// suivreFleursScript
		new SuivreFleursScript(guepe_17);

		// guepe_18
		const guepe_18 = new Guepe(this, 511.82794189453125, 509.0382385253906);
		guepe_18.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_18);

		// suivreFleursScript
		new SuivreFleursScript(guepe_18);

		// guepe_19
		const guepe_19 = new Guepe(this, 456.0125427246094, 458.8043518066406);
		guepe_19.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_19);

		// suivreFleursScript
		new SuivreFleursScript(guepe_19);

		// guepe_20
		const guepe_20 = new Guepe(this, 372.2894287109375, 436.4781799316406);
		guepe_20.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_20);

		// suivreFleursScript
		new SuivreFleursScript(guepe_20);

		// guepe_21
		const guepe_21 = new Guepe(this, 362.9868469238281, 337.8709716796875);
		guepe_21.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_21);

		// suivreFleursScript
		new SuivreFleursScript(guepe_21);

		// guepe_22
		const guepe_22 = new Guepe(this, 474.61767578125, 309.9632568359375);
		guepe_22.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_22);

		// suivreFleursScript
		new SuivreFleursScript(guepe_22);

		// guepe_23
		const guepe_23 = new Guepe(this, 580.6669311523438, 298.8001708984375);
		guepe_23.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_23);

		// suivreFleursScript
		new SuivreFleursScript(guepe_23);

		// guepe_24
		const guepe_24 = new Guepe(this, 649.5059814453125, 412.29150390625);
		guepe_24.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_24);

		// suivreFleursScript
		new SuivreFleursScript(guepe_24);

		// guepe_25
		const guepe_25 = new Guepe(this, 649.5059814453125, 451.3623046875);
		guepe_25.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_25);

		// suivreFleursScript
		new SuivreFleursScript(guepe_25);

		// guepe_26
		const guepe_26 = new Guepe(this, 703.4608764648438, 471.82794189453125);
		guepe_26.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_26);

		// suivreFleursScript
		new SuivreFleursScript(guepe_26);

		// guepe_27
		const guepe_27 = new Guepe(this, 686.7162475585938, 369.49969482421875);
		guepe_27.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_27);

		// suivreFleursScript
		new SuivreFleursScript(guepe_27);

		// guepe_28
		const guepe_28 = new Guepe(this, 656.947998046875, 334.1499328613281);
		guepe_28.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_28);

		// suivreFleursScript
		new SuivreFleursScript(guepe_28);

		// guepe_29
		const guepe_29 = new Guepe(this, 532.2935791015625, 388.1048278808594);
		guepe_29.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_29);

		// guepe_30
		const guepe_30 = new Guepe(this, 489.5018005371094, 380.66278076171875);
		guepe_30.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_30);

		// guepe_31
		const guepe_31 = new Guepe(this, 597.4115600585938, 248.56631469726562);
		guepe_31.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_31);

		// guepe_32
		const guepe_32 = new Guepe(this, 777.8814086914062, 309.9632568359375);
		guepe_32.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_32);

		// guepe_33
		const guepe_33 = new Guepe(this, 828.1152954101562, 417.873046875);
		guepe_33.body.collideWorldBounds = false;
		groupe_adversaires.add(guepe_33);

		// suivreFleursScript_1
		const suivreFleursScript_1 = new SuivreFleursScript(groupe_adversaires);

		// groupe_allies
		const groupe_allies = this.add.container(0, 0);

		// huipat
		const huipat = new Huipat(this, 1492, 639);
		huipat.name = "huipat";
		huipat.body.collideWorldBounds = false;
		groupe_allies.add(huipat);
		huipat.image.setOrigin(0.5, 0.5);

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const liste_toile_vs_adversaire = [guepe_1];
		const liste_suivre_entiteControllable = [guepe_33, guepe_32, guepe_31, guepe_30, guepe_29, guepe_28, guepe_27, guepe_26, guepe_25, guepe_24, guepe_23, guepe_22, guepe_21, guepe_20, guepe_19, guepe_18, guepe_17, guepe_16, guepe_15, guepe_14, guepe_13, guepe_12, guepe_11, guepe_10, guepe_9, guepe_8, guepe_7, guepe_6, guepe_5, guepe_4, guepe_3, guepe_2, guepe, guepe_1, suivreFleursScript_1];

		// suivreFleursScript_1 (prefab fields)
		suivreFleursScript_1.suivreUniquementEntitePrincipale = true;

		this.fleurs = fleurs;
		this.groupe_vs_platformes = groupe_vs_platformes;
		this.groupe_projectile_toiles = groupe_projectile_toiles;
		this.platformes = platformes;
		this.groupe_adversaires = groupe_adversaires;
		this.huipat = huipat;
		this.groupe_allies = groupe_allies;
		this.liste_toile_vs_adversaire = liste_toile_vs_adversaire;
		this.liste_suivre_entiteControllable = liste_suivre_entiteControllable;

		this.events.emit("scene-awake");
	}

	public fleurs!: Phaser.GameObjects.Container;
	public groupe_vs_platformes!: Phaser.GameObjects.Layer;
	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	public platformes!: Phaser.GameObjects.Container;
	public groupe_adversaires!: Phaser.GameObjects.Container;
	public huipat!: Huipat;
	public groupe_allies!: Phaser.GameObjects.Container;
	private liste_toile_vs_adversaire!: Guepe[];
	private liste_suivre_entiteControllable!: Array<Guepe|SuivreFleursScript>;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.cameras.main.startFollow(this.entiteControllable);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
