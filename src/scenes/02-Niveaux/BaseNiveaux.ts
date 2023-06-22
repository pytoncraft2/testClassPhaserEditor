
// You can write more code here
const verifSiMobile = function () {
	let check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
	return check;
};

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Bouton from "../Boutons/Bouton";
/* START-USER-IMPORTS */
import BaseEntites from "../03-Entites/BaseEntites";
import ToileHuipatPrefab from "../04-Projectiles/ToileHuipatPrefab";
import PlatformePrefab from "../04-Platformes/PlatformePrefab";
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

		// groupe_vie
		const groupe_vie = this.add.layer();

		// coeur
		const coeur = this.add.image(32, 48, "coeur");
		coeur.scaleX = 0.0299137473893349;
		coeur.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur);

		// coeur_1
		const coeur_1 = this.add.image(93.06276679359468, 48, "coeur");
		coeur_1.scaleX = 0.0299137473893349;
		coeur_1.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_1);

		// coeur_2
		const coeur_2 = this.add.image(154.12553358718935, 48, "coeur");
		coeur_2.scaleX = 0.0299137473893349;
		coeur_2.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_2);

		// coeur_3
		const coeur_3 = this.add.image(215.18830038078403, 48, "coeur");
		coeur_3.scaleX = 0.0299137473893349;
		coeur_3.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_3);

		// coeur_4
		const coeur_4 = this.add.image(276.2510671743787, 48, "coeur");
		coeur_4.scaleX = 0.0299137473893349;
		coeur_4.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_4);

		// coeur_5
		const coeur_5 = this.add.image(337.3138339679733, 48, "coeur");
		coeur_5.scaleX = 0.0299137473893349;
		coeur_5.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_5);

		// coeur_6
		const coeur_6 = this.add.image(398.376600761568, 48, "coeur");
		coeur_6.scaleX = 0.0299137473893349;
		coeur_6.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_6);

		// coeur_7
		const coeur_7 = this.add.image(459.4393675551627, 48, "coeur");
		coeur_7.scaleX = 0.0299137473893349;
		coeur_7.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_7);

		// coeur_8
		const coeur_8 = this.add.image(520.5021343487574, 48, "coeur");
		coeur_8.scaleX = 0.0299137473893349;
		coeur_8.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_8);

		// coeur_9
		const coeur_9 = this.add.image(581.564901142352, 48, "coeur");
		coeur_9.scaleX = 0.0299137473893349;
		coeur_9.scaleY = 0.0299137473893349;
		groupe_vie.add(coeur_9);

		// controles_portable
		const controles_portable = this.add.layer();
		controles_portable.alpha = 0.1;

		// bouton
		const bouton = new Bouton(this, 1648, 832);
		controles_portable.add(bouton);

		// bouton_1
		const bouton_1 = new Bouton(this, 352, 880, "bouton_1", "btn-right");
		controles_portable.add(bouton_1);

		// bouton_2
		const bouton_2 = new Bouton(this, 1920, 688, "bouton_1", "btn-up");
		controles_portable.add(bouton_2);

		// bouton_3
		const bouton_3 = new Bouton(this, -16, 880);
		controles_portable.add(bouton_3);

		// bouton_4
		const bouton_4 = new Bouton(this, 1920, 928);
		bouton_4.angle = -90;
		controles_portable.add(bouton_4);

		// bouton (prefab fields)
		bouton.direction = "espace";

		// bouton_1 (prefab fields)
		bouton_1.direction = "droite";

		// bouton_2 (prefab fields)
		bouton_2.direction = "haut";

		// bouton_4 (prefab fields)
		bouton_4.direction = "bas";

		this.groupe_vie = groupe_vie;
		this.controles_portable = controles_portable;
		this.toucheEspace = toucheEspace;
		this.toucheGauche = toucheGauche;
		this.toucheDroite = toucheDroite;
		this.toucheHaut = toucheHaut;
		this.toucheBas = toucheBas;

		this.events.emit("scene-awake");
	}

	public groupe_vie!: Phaser.GameObjects.Layer;
	public controles_portable!: Phaser.GameObjects.Layer;
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
	private estUnMobile = verifSiMobile();
	public finDePartie = false;
	private nombreAdversaireVaincu = 0;
	init() {
		this.editorCreateBase();
		this.physics.world.setBoundsCollision(true, true, false, false);
		this.cameras.main.fadeIn(1000, 0, 0, 0);
		this.input.addPointer(3);
		if (this.estUnMobile) this.cameras.main.setZoom(0.86)
		if (!this.estUnMobile) this.controles_portable.removeAll()

		const sceneSuivante = `${this.constructor.name.slice(0, -1)}${this.scene.getIndex() - 1}`;
		this.time.delayedCall(10000, function(this: any, a: any) {
			console.log(this.finDePartie);
			
			this.finDePartie = true;
			this.entiteControllable.destroy()
			this.groupe_adversaires.destroy()
            this.scene.start(sceneSuivante);
		}, [this], this)
		
	}

	update(time: number, delta: number): void {
		if (!this.finDePartie) {
			this.observeToucheDeplacement()
		}
	}

	observeToucheDeplacement() {
		this.gaucheAppuie = this.gaucheAppuie || this.isKeyDown(this.toucheGauche);
		this.droiteAppuie = this.droiteAppuie || this.isKeyDown(this.toucheDroite);
		this.hautAppuie = this.hautAppuie || this.isKeyDown(this.toucheHaut);
		this.basAppuie = this.basAppuie || this.isKeyDown(this.toucheBas);
		if (this.estUnMobile) {
			this.espaceAppuie = this.espaceAppuie || this.isKeyDown(this.toucheEspace);
		}

		if (this.toucheJustePresse(this.toucheEspace)) {
			this.entiteControllable.actionToucheEspace()
		}

		// if (this.toucheJusteReleve(this.toucheEspace)) {
		// 	// touche espace ou touche d'attaque
		// 	this.entiteControllable.actionToucheEspace()
		// }

		if (this.estUnMobile) {
			if (this.espaceAppuie) {
				this.entiteControllable.actionToucheEspace()
				this.espaceAppuie = false;
			}
		}


		if (this.entiteControllable) {
			if (this.gaucheAppuie) this.entiteControllable.actionToucheGauche()
			else if (this.droiteAppuie) this.entiteControllable.actionToucheDroite()
			else if (this.basAppuie) this.entiteControllable.actionToucheBas()
			else this.entiteControllable.aucuneTouche()

			if (this.toucheJustePresse(this.toucheHaut) || this.hautAppuie) {
				this.entiteControllable.actionToucheHaut();
			}
		}

		if (!this.estUnMobile) {
			this.gaucheAppuie = this.droiteAppuie = this.hautAppuie = this.basAppuie = this.espaceAppuie = false;
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

	toileToucheEntite(toile: ToileHuipatPrefab, adversaire: BaseEntites) {
		console.log("TOUCHE");

		if (!adversaire.groupeBlocage.children) return;
		if (adversaire.groupeBlocage.getLength() >= adversaire.maxBlocages) {
			toile.destroy()
			return;
		}
		toile.aToucheQqch = true;
		toile.body.enable = false;
		toile.body.checkCollision.none = true;
		toile.body.moves = false
		toile.setPosition(adversaire.x, adversaire.y)
		toile.refEntite = adversaire;

		if (adversaire.groupeBlocage.getLength() == 0) {
			adversaire.body.moves = false;
			adversaire.activeModeEnerve(true);
			adversaire.groupeBlocage.add(toile);
		} else {
			adversaire.groupeBlocage.add(toile);
			toile.setScale(adversaire.groupeBlocage.getLength() / 5);
		}
	}

	/** FONCTIONS DE VERIFICATION AVANT D'EXECUTER LE CALLBACK ENTRE UN ALLIE ET UN ADVERSAIRE */

	verifAllieToucheAdversaireProche(allie: BaseEntites, adversaire: BaseEntites) {
		if (!allie.invincible && adversaire.body.moves && adversaire.interactionActive) {
			return true;
		} else {
			return false;
		}
	}

	/** FONCTIONS DE CALLBACK AU MOMENT DE LA COLISION ENTRE UN ALLIE ET UN ADVERSAIRE */

	allieToucheAdversaireProche(allie: BaseEntites, _obj2: BaseEntites) {
		allie.enleveVie();
		allie.invincible = true;
		allie.body.moves = false;
		allie.scene.tweens.add({
			targets: allie,
			alpha: {
				from: 0.6,
				to: 0
			},
			duration: 100,
			yoyo: true,
			repeat: 3,
			onComplete: () => {
				allie.body.moves = true;
			}
		});
		allie.scene.time.delayedCall(3000, () => {
			allie.setAlpha(1);
			allie.invincible = false;
		});
	}

	toileMouvanteToucheAdversaire(toile: ToileHuipatPrefab, adversaire: BaseEntites) {
		if (!adversaire.fusionnable) {
			toile.nombrePercutement += 1;
			adversaire.detruire();
		}
	}

	verifEntiteTouchePlatformes(entite: BaseEntites, platforme: PlatformePrefab) {
		if (entite.peutTraverserPlatformes) {
			return false;
		} else {
			return true;
		}
	}

	entiteTouchePlatformes(entite: BaseEntites, platforme: PlatformePrefab) {
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
