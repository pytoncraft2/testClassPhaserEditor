
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Niveau1 from "~/scenes/02-Niveaux/Niveau1/Niveau1";
import BaseEntites from "~/scenes/03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default class OnSceneAwakeScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public Objet1!: Phaser.Types.Physics.Arcade.ArcadeColliderType;
	public Objet2!: Phaser.Types.Physics.Arcade.ArcadeColliderType;

	/* START-USER-CODE */

	protected awake(): void {
		this.scene.entiteControllable = this.scene.groupe_allies.getByName('huipat') as BaseEntites;
		this.scene.physics.add.collider(
			[...this.scene.groupe_adversaires.list, ...this.scene.groupe_allies.list],
			this.scene.platformes.list,
			this.scene.entiteTouchePlatformes as any,
			this.scene.verifEntiteTouchePlatformes as any
		);

		// adversaires_vs_allies
		const adversaires_vs_allies = this.scene.physics.add.overlap(
			this.scene.groupe_allies.list,
			this.scene.groupe_adversaires.list,
			this.scene.allieToucheAdversaireProche as any,
			this.scene.verifAllieToucheAdversaireProche as any
		);

		// toiles_vs_entite
		// const toiles_vs_entite = this.scene.physics.add.collider(
		// 	this.scene.groupe_projectile_toiles.list,
		// 	this.scene.liste_toile_vs_adversaire,
		// 	this.scene.toileToucheEntite as any,
		// 	undefined,
		// 	this
		// );

		// platformes_vs_toilemouvante
		console.log(this.scene);
		
		const platformes_vs_toilemouvante = this.scene.physics.add.collider(
			this.scene.platformes.list,
			this.scene.groupe_vs_platformes.list
		);

		// adversaire_vs_toilemouvante
		const adversaire_vs_toilemouvante = this.scene.physics.add.overlap(
			this.scene.groupe_vs_platformes.list,
			this.scene.groupe_adversaires.list,
			this.scene.toileMouvanteToucheAdversaire as any
		);

	}

	get scene(): Niveau1 {
        return super.scene as Niveau1;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
