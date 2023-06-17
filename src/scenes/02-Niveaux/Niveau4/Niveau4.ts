
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import Huipat from "../../03-Entites/Huipat/Huipat";
import Murale from "../../03-Entites/Araigne/Murale";
import Araigne from "../../03-Entites/Araigne/Araigne";
import AnimationToileSuspenduScript from "../../../script-nodes/AnimationToileSuspenduScript";
import Guepe from "../../03-Entites/Guepe/Guepe";
import SuivreFleursScript from "../../../script-nodes/SuivreFleursScript";
import PlatformePrefab from "../../04-Platformes/PlatformePrefab";
import OnSceneAwakeScript from "../../../script-nodes/OnSceneAwakeScript";
import OnPointerDownScript from "../../../script-nodes-basic/OnPointerDownScript";
import StartSceneActionScript from "../../../script-nodes-basic/StartSceneActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau4 extends BaseNiveaux {

	constructor() {
		super("Niveau4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// fleurs
		const fleurs = this.add.container(0, 0);

		// fleur_bleu_png
		const fleur_bleu_png = this.add.image(376, 415, "fleurs", "fleur_bleu.png");
		fleurs.add(fleur_bleu_png);

		// fleur_orange_png
		const fleur_orange_png = this.add.image(1544, 538, "fleurs", "fleur_orange.png");
		fleur_orange_png.flipX = true;
		fleurs.add(fleur_orange_png);

		// fleur_rose_png
		const fleur_rose_png = this.add.image(777, 937, "fleurs", "fleur_rose.png");
		fleur_rose_png.flipX = true;
		fleurs.add(fleur_rose_png);

		// fleur_rouge_png
		const fleur_rouge_png = this.add.image(1341, 84, "fleurs", "fleur_rouge.png");
		fleurs.add(fleur_rouge_png);

		// groupe_allies
		const groupe_allies = this.add.container(0, 0);

		// huipat
		const huipat = new Huipat(this, 660, 903);
		huipat.name = "huipat";
		groupe_allies.add(huipat);
		huipat.image.setOrigin(0.5, 0.5);

		// groupe_adversaires
		const groupe_adversaires = this.add.container(0, 0);

		// murale
		const murale = new Murale(this, -300, -200);
		groupe_adversaires.add(murale);

		// murale_1
		const murale_1 = new Murale(this, 1068, 194);
		groupe_adversaires.add(murale_1);

		// araigne_1
		const araigne_1 = new Araigne(this, 1678, 136);
		groupe_adversaires.add(araigne_1);

		// animationToileSuspenduScript
		const animationToileSuspenduScript = new AnimationToileSuspenduScript(araigne_1);

		// araigne
		const araigne = new Araigne(this, 1242, 392);
		groupe_adversaires.add(araigne);

		// animationToileSuspenduScript_1
		const animationToileSuspenduScript_1 = new AnimationToileSuspenduScript(araigne);

		// guepe
		const guepe = new Guepe(this, 376, 373);
		groupe_adversaires.add(guepe);

		// suivreFleursScript_1
		new SuivreFleursScript(guepe);

		// guepe_1
		const guepe_1 = new Guepe(this, 666, 504);
		groupe_adversaires.add(guepe_1);

		// suivreFleursScript
		new SuivreFleursScript(guepe_1);

		// platformes
		const platformes = this.add.container(0, 0);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 523, 1000);
		platformePrefab.scaleX = 5;
		platformePrefab.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 1728, 600);
		platformePrefab_2.scaleX = 3;
		platformePrefab_2.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_2);

		// platformePrefab_6
		const platformePrefab_6 = new PlatformePrefab(this, 1600, 148);
		platformePrefab_6.scaleX = 5;
		platformePrefab_6.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_6);

		// platformePrefab_7
		const platformePrefab_7 = new PlatformePrefab(this, 193, 479);
		platformePrefab_7.scaleX = 3;
		platformePrefab_7.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_7);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 576, 800);
		platformePrefab_1.scaleX = 3;
		platformePrefab_1.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_1);

		// platformePrefab_3
		const platformePrefab_3 = new PlatformePrefab(this, 960, 600);
		platformePrefab_3.scaleX = 3;
		platformePrefab_3.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_3);

		// platformePrefab_4
		const platformePrefab_4 = new PlatformePrefab(this, 528, 224);
		platformePrefab_4.scaleX = 3;
		platformePrefab_4.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_4);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(this, 1728, 368);
		platformePrefab_5.scaleX = 3;
		platformePrefab_5.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_5);

		// platformePrefab_8
		const platformePrefab_8 = new PlatformePrefab(this, 1536, 800);
		platformePrefab_8.scaleX = 6;
		platformePrefab_8.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_8);

		// groupe_projectile_toiles
		const groupe_projectile_toiles = this.add.container(0, 0);

		// groupe_vs_platformes
		const groupe_vs_platformes = this.add.layer();

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// text_1
		const text_1 = this.add.text(1776.5996725183456, 43.036627994908535, "", {});
		text_1.text = "NIVEAU 5";

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(text_1);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(onPointerDownScript);

		// lists
		const liste_toile_vs_adversaire = [guepe_1, guepe, araigne, araigne_1, murale_1, murale];

		// animationToileSuspenduScript (prefab fields)
		animationToileSuspenduScript.dureeAnimation = 3000;
		animationToileSuspenduScript.longueurFile = 4.8;

		// animationToileSuspenduScript_1 (prefab fields)
		animationToileSuspenduScript_1.dureeAnimation = 3400;
		animationToileSuspenduScript_1.longueurFile = 4.1;

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Niveau5";

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

	public fleurs!: Phaser.GameObjects.Container;
	public huipat!: Huipat;
	public groupe_allies!: Phaser.GameObjects.Container;
	public groupe_adversaires!: Phaser.GameObjects.Container;
	public platformes!: Phaser.GameObjects.Container;
	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	public groupe_vs_platformes!: Phaser.GameObjects.Layer;
	private liste_toile_vs_adversaire!: Array<Guepe|Araigne|Murale>;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		const emitter = this.add.particles(0, 0, 'guepe', {
			frame: 'guepe.png',
			speed: {
				onEmit: () => this.entiteControllable.body.speed
			},
			lifespan: {
				onEmit: () => Phaser.Math.Percent(this.entiteControllable.body.speed, 0, 300) * 20000
			},
			// alpha: {
			// 	onEmit: () => Phaser.Math.Percent(this.entiteControllable.body.speed, 0, 300) * 1000

			// },
			scale: { start: 0.4, end: 0 },
			blendMode: 'ADD'
		});

		emitter.startFollow(this.entiteControllable);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here