
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import FileToileIntro from "../../04-Projectiles/FileToileIntro";
import Huipat from "../../03-Entites/Huipat/Huipat";
import Araigne from "../../03-Entites/Araigne/Araigne";
import Murale from "../../03-Entites/Araigne/Murale";
import Guepe from "../../03-Entites/Guepe/Guepe";
import PlatformePrefab from "../../04-Platformes/PlatformePrefab";
import OnPointerDownScript from "../../../script-nodes-basic/OnPointerDownScript";
import StartSceneActionScript from "../../../script-nodes-basic/StartSceneActionScript";
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

		// fleurs
		const fleurs = this.add.layer();

		// fleur_rouge
		const fleur_rouge = this.add.image(1358, 946, "fleurs", "fleur_rouge.png");
		fleurs.add(fleur_rouge);

		// fleur_rose_png
		const fleur_rose_png = this.add.image(1094, 547, "fleurs", "fleur_rose.png");
		fleur_rose_png.flipX = true;
		fleurs.add(fleur_rose_png);

		// fleur_orange
		const fleur_orange = this.add.image(1224, 148, "fleurs", "fleur_orange.png");
		fleur_orange.flipX = true;
		fleurs.add(fleur_orange);

		// fleur_bleu
		const fleur_bleu = this.add.image(376, 547, "fleurs", "fleur_bleu.png");
		fleurs.add(fleur_bleu);

		// fileToileIntro
		const fileToileIntro = new FileToileIntro(this, 172, -7);
		this.add.existing(fileToileIntro);
		fileToileIntro.scaleX = 0.029609107493260928;
		fileToileIntro.scaleY = -1;

		// fileToileIntro_1
		const fileToileIntro_1 = new FileToileIntro(this, 1767, 3);
		this.add.existing(fileToileIntro_1);

		// fileToileIntro_2
		const fileToileIntro_2 = new FileToileIntro(this, 954, -1);
		this.add.existing(fileToileIntro_2);

		// groupe_allies
		const groupe_allies = this.add.container(1647, 426);

		// huipat
		const huipat = new Huipat(this, 0, 0);
		huipat.name = "huipat";
		groupe_allies.add(huipat);
		huipat.image.setOrigin(0.5, 0.5);

		// groupe_adversaires
		const groupe_adversaires = this.add.container(0, 10);

		// araigne_2
		const araigne_2 = new Araigne(this, 955, -149);
		groupe_adversaires.add(araigne_2);

		// araigne_3
		const araigne_3 = new Araigne(this, 172, -146);
		groupe_adversaires.add(araigne_3);

		// araigne
		const araigne = new Araigne(this, 1765, -144);
		groupe_adversaires.add(araigne);

		// container_1
		const container_1 = new Murale(this, 596, 467);
		groupe_adversaires.add(container_1);

		// guepe
		const guepe = new Guepe(this, 717, 648);
		groupe_adversaires.add(guepe);

		// platformes
		const platformes = this.add.container(0, 10);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 960, 1000);
		platformePrefab.scaleX = 15.181035249767532;
		platformePrefab.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 768, 800);
		platformePrefab_1.scaleX = 6;
		platformePrefab_1.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 1728, 800);
		platformePrefab_2.scaleX = 3;
		platformePrefab_2.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_2);

		// platformePrefab_3
		const platformePrefab_3 = new PlatformePrefab(this, 192, 600);
		platformePrefab_3.scaleX = 3;
		platformePrefab_3.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_3);

		// platformePrefab_4
		const platformePrefab_4 = new PlatformePrefab(this, 1344, 600);
		platformePrefab_4.scaleX = 5;
		platformePrefab_4.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_4);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(this, 960, 400);
		platformePrefab_5.scaleX = 8;
		platformePrefab_5.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_5);

		// platformePrefab_6
		const platformePrefab_6 = new PlatformePrefab(this, 384, 200);
		platformePrefab_6.scaleX = 5;
		platformePrefab_6.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_6);

		// platformePrefab_7
		const platformePrefab_7 = new PlatformePrefab(this, 1536, 200);
		platformePrefab_7.scaleX = 5;
		platformePrefab_7.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_7);

		// groupe_projectile_toiles
		const groupe_projectile_toiles = this.add.container(0, 10);

		// text_1
		const text_1 = this.add.text(1631, 80, "", {});
		text_1.text = "New text";
		text_1.setStyle({ "fontSize": "36px" });

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(text_1);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(onPointerDownScript);

		// groupe_vs_platformes
		const groupe_vs_platformes = this.add.layer();

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const liste_toile_vs_adversaire = [araigne_2, araigne_3, araigne];

		// platformes_vs_entites
		const platformes_vs_entites = this.physics.add.collider([...groupe_allies.list, ...groupe_adversaires.list], platformes.list);

		// adversaires_vs_allies
		const adversaires_vs_allies = this.physics.add.overlap(groupe_allies.list, groupe_adversaires.list, this.allieToucheAdversaireProche as any, this.ProcessVerifAllieToucheAdversaireProche as any);

		// toiles_vs_entite
		const toiles_vs_entite = this.physics.add.collider(groupe_projectile_toiles.list, liste_toile_vs_adversaire, this.toileToucheEntite as any, undefined, this);

		// platformes_vs_toilemouvante
		const platformes_vs_toilemouvante = this.physics.add.collider(platformes.list, groupe_vs_platformes.list);

		// adversaire_vs_toilemouvante
		const adversaire_vs_toilemouvante = this.physics.add.overlap(groupe_vs_platformes.list, groupe_adversaires.list, this.toileMouvanteToucheAdversaire as any);

		// fileToileIntro (prefab fields)
		fileToileIntro.ref = araigne_3;
		fileToileIntro.duree = 5200;
		fileToileIntro.longueurFile = 7.45;

		// fileToileIntro_1 (prefab fields)
		fileToileIntro_1.ref = araigne;
		fileToileIntro_1.duree = 4000;
		fileToileIntro_1.longueurFile = 5.9;
		fileToileIntro_1.delaiAvantActivation = 3000;

		// fileToileIntro_2 (prefab fields)
		fileToileIntro_2.ref = araigne_2;
		fileToileIntro_2.longueurFile = 2.8;
		fileToileIntro_2.delaiAvantActivation = 2000;

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Niveau2";

		this.fleurs = fleurs;
		this.huipat = huipat;
		this.groupe_allies = groupe_allies;
		this.groupe_adversaires = groupe_adversaires;
		this.platformes = platformes;
		this.groupe_projectile_toiles = groupe_projectile_toiles;
		this.groupe_vs_platformes = groupe_vs_platformes;
		this.liste_toile_vs_adversaire = liste_toile_vs_adversaire;

		this.events.emit("scene-awake");
	}

	public fleurs!: Phaser.GameObjects.Layer;
	public huipat!: Huipat;
	public groupe_allies!: Phaser.GameObjects.Container;
	public groupe_adversaires!: Phaser.GameObjects.Container;
	public platformes!: Phaser.GameObjects.Container;
	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	public groupe_vs_platformes!: Phaser.GameObjects.Layer;
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
