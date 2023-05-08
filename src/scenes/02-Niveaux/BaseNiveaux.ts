
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Bouton from "../Boutons/Bouton";
/* START-USER-IMPORTS */
import BaseEntites from "../03-Entites/BaseEntites";
/* END-USER-IMPORTS */

export default class BaseNiveaux extends Phaser.Scene {

	editorCreateBase(): void {

		// toucheEspace
		const toucheEspace = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// toucheGauche
		const toucheGauche = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// toucheDroite
		const toucheDroite = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// toucheHaut
		const toucheHaut = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// toucheBas
		const toucheBas = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// bouton
		const bouton = new Bouton(this, 320, 880);
		this.add.existing(bouton);

		// bouton_1
		const bouton_1 = new Bouton(this, 1824, 880, "bouton", "btn-right");
		this.add.existing(bouton_1);

		// bouton_2
		const bouton_2 = new Bouton(this, 1680, 736, "bouton", "btn-up");
		this.add.existing(bouton_2);

		// bouton_3
		const bouton_3 = new Bouton(this, 1536, 880);
		this.add.existing(bouton_3);

		// bouton_4
		const bouton_4 = new Bouton(this, 1680, 880);
		this.add.existing(bouton_4);
		bouton_4.scaleX = 1;
		bouton_4.scaleY = 1;
		bouton_4.angle = -90;

		// bouton (prefab fields)
		bouton.direction = "espace";

		// bouton_1 (prefab fields)
		bouton_1.direction = "droite";

		// bouton_2 (prefab fields)
		bouton_2.direction = "haut";

		// bouton_4 (prefab fields)
		bouton_4.direction = "bas";

		this.toucheEspace = toucheEspace;
		this.toucheGauche = toucheGauche;
		this.toucheDroite = toucheDroite;
		this.toucheHaut = toucheHaut;
		this.toucheBas = toucheBas;

		this.events.emit("scene-awake");
	}

	private toucheEspace!: Phaser.Input.Keyboard.Key;
	private toucheGauche!: Phaser.Input.Keyboard.Key;
	private toucheDroite!: Phaser.Input.Keyboard.Key;
	private toucheHaut!: Phaser.Input.Keyboard.Key;
	private toucheBas!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here
	public entiteControllable!: BaseEntites
	private gaucheAppuie = false;
	private droiteAppuie = false;
	private hautAppuie = false;
	private basAppuie = false;
	private espaceAppuie = false;
	private espaceAppuieTouch = false;
	private isMobile = false;
	init() {
		this.editorCreateBase();
		this.physics.world.setBoundsCollision(true, true, false, false)
		this.input.addPointer(3);
	}

	update(time: number, delta: number): void {
		this.observeToucheDeplacement()
	}

	observeToucheDeplacement() {
		this.gaucheAppuie = this.gaucheAppuie || this.isKeyDown(this.toucheGauche);
		this.droiteAppuie = this.droiteAppuie || this.isKeyDown(this.toucheDroite);
		this.hautAppuie = this.hautAppuie || this.isKeyDown(this.toucheHaut);
		this.basAppuie = this.basAppuie || this.isKeyDown(this.toucheBas);
		if (this.isMobile) {
			this.espaceAppuie = this.espaceAppuie || this.isKeyDown(this.toucheEspace) || this.espaceAppuieTouch;
		}

		if (this.toucheJustePresse(this.toucheEspace) || this.espaceAppuie) {
			// touche espace ou touche d'attaque
			this.entiteControllable.actionToucheEspace()
		}

		if (this.toucheJusteReleve(this.toucheEspace)) {
			// touche espace ou touche d'attaque
			this.entiteControllable.actionToucheEspace()
		}

		if (this.isMobile) {
			if (this.espaceAppuie) {
				// this.entiteControllable.envoieProjectileToile()
				this.espaceAppuie = false;
			}
		}


		if (this.entiteControllable) {
			if (this.gaucheAppuie) { this.entiteControllable.actionToucheGauche() }
			else if (this.droiteAppuie) { this.entiteControllable.actionToucheDroite() }
			else if (this.toucheJustePresse(this.toucheBas)) { this.entiteControllable.actionToucheBas(); }
			else { this.entiteControllable.aucuneTouche() }

			if (this.toucheJustePresse(this.toucheHaut) || this.hautAppuie) {
				this.entiteControllable.actionToucheHaut();
			}
		}

		if (!this.isMobile) {
			this.gaucheAppuie = this.droiteAppuie = this.hautAppuie = this.basAppuie = this.espaceAppuie = this.espaceAppuieTouch = false;
		}
	}

	private isKeyDown(key?: Phaser.Input.Keyboard.Key) {

		if (key) {

			return key.isDown;
		}

		return false;
	}

	private toucheJustePresse(touche: Phaser.Input.Keyboard.Key) {
		return Phaser.Input.Keyboard.JustDown(touche)
	}

	private toucheJusteReleve(touche: Phaser.Input.Keyboard.Key) {
		return Phaser.Input.Keyboard.JustUp(touche)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
