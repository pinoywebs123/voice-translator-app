import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  isPlay = false;
  matches : any;
  output : any;
  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private tts: TextToSpeech) {

  }

  clickPermission(){
    this.speechRecognition.hasPermission()
  .then((hasPermission: boolean) => alert(hasPermission));

  this.speechRecognition.requestPermission()
  .then(
    () => alert('Granted'),
    () => alert('Denied')
  );


  }

  clickPlay(){
        let options : {
          language : 'en-US'
        }
        this.speechRecognition.startListening(options)
      .subscribe(
        (matches ) => this.matches = matches[0],
        (onerror) => console.log('error:', onerror)
      )
     
      this.isPlay = true;
      this.matches = this.matches; 

  }

  clickStop(){
    this.speechRecognition.stopListening()
    this.isPlay = false;
  }

  clickLanguage(){
    this.speechRecognition.getSupportedLanguages()
  .then(
    (languages: Array<string>) => alert(languages),
    (error) => console.log(error)
  )
  }

  clickAvailable(){
    this.speechRecognition.isRecognitionAvailable()
  .then((available: boolean) => alert(available))
  }

  clickBiasaya(){
   if(this.matches == 'hello'){
    this.tts.speak('hello');
   }else if(this.matches == 'good morning'){
    this.tts.speak('Maayong buntag');
   }
   else if(this.matches == 'good afternoon'){
    this.tts.speak('Maayong hapon');
   }
   else if(this.matches == 'good evening'){
    this.tts.speak('Maayong gabi e');
   }
   else if(this.matches == 'good night'){
    this.tts.speak('Maayong gabi e');
   }
   else if(this.matches == 'sorry'){
    this.tts.speak('pasaylo-a');
   }
   else if(this.matches == 'thank you'){
    this.tts.speak('salamat');
   }
   else if(this.matches == 'stop'){
    this.tts.speak('kumusta ka');
   }
   else if(this.matches == 'help'){
    this.tts.speak('hunong');
   }
   else if(this.matches == 'dog'){
    this.tts.speak('ero');
   }
   else if(this.matches == 'friend'){
    this.tts.speak('hegala');
   }
   else if(this.matches == 'eat'){
    this.tts.speak('ka-un');
   }
   else if(this.matches == 'what'){
    this.tts.speak('unsa');
   }
   else if(this.matches == 'yes'){
    this.tts.speak('o o');
   }
   else if(this.matches == 'no'){
    this.tts.speak('dili');
   }
   else if(this.matches == 'goodbye'){
    this.tts.speak('babay');
   }
   else if(this.matches == 'where'){
    this.tts.speak('asa');
   }
   else if(this.matches == 'six'){
    this.tts.speak('unom');
   }
   else if(this.matches == 'zero'){
    this.tts.speak('sero');
   }
   else if(this.matches == 'one'){
    this.tts.speak('usa');
   }

  /* 21 -30*/
   else if(this.matches == 'color'){
    this.tts.speak('bulok');
   }
  else if(this.matches == 'white'){
    this.tts.speak('puti');
   }
  else if(this.matches == 'black'){
    this.tts.speak('e tom');
   }
  else if(this.matches == 'blue'){
    this.tts.speak('bug haw');
   }
  else if(this.matches == 'red'){
    this.tts.speak('pula');
   }
  else if(this.matches == 'yellow'){
    this.tts.speak('da lag');
   }
  else if(this.matches == 'green'){
    this.tts.speak('lun haw');
   }
  else if(this.matches == 'orange'){
    this.tts.speak('mara ag');
   }
  else if(this.matches == 'brown'){
    this.tts.speak('tabu non');
   }
  else if(this.matches == 'gold'){
    this.tts.speak('ginto');
   }
   
   /*31-40 */
   else if(this.matches == 'talking'){
    this.tts.speak('Pagsulti');
   }
  else if(this.matches == 'walking'){
    this.tts.speak('Paglakaw ');
   }
  else if(this.matches == 'love'){
    this.tts.speak('ginto');
   }
  else if(this.matches == 'running'){
    this.tts.speak('dalagan');
   }
  else if(this.matches == 'ugly'){
    this.tts.speak('batig na wung');
   }
  else if(this.matches == 'jumping'){
    this.tts.speak('layat');
   }
  else if(this.matches == 'laugh'){
    this.tts.speak('katawa');
   }
  else if(this.matches == 'handsome'){
    this.tts.speak('talidhay');
   }
  else if(this.matches == 'knife'){
    this.tts.speak('korta');
   }
  else if(this.matches == 'girlfriend'){
    this.tts.speak('amiga');
   }
    
  }

  clickTagalog(){
   if(this.matches == 'hello'){
    this.tts.speak('hello');
   }else if(this.matches == 'good morning'){
    this.tts.speak('magandang umaga');
   }
   else if(this.matches == 'good afternoon'){
    this.tts.speak('magandang hapon');
   }
   else if(this.matches == 'good evening'){
    this.tts.speak('magandang gabe');
   }
   else if(this.matches == 'good night'){
    this.tts.speak('magandang gabe');
   }
   else if(this.matches == 'sorry'){
    this.tts.speak('patawd');
   }
   else if(this.matches == 'thank you'){
    this.tts.speak('salamat');
   }
   else if(this.matches == 'stop'){
    this.tts.speak('tigil');
   }
   else if(this.matches == 'help'){
    this.tts.speak('tulong');
   }
   else if(this.matches == 'dog'){
    this.tts.speak('aso');
   }
   else if(this.matches == 'friend'){
    this.tts.speak('kaibigan');
   }
   else if(this.matches == 'eat'){
    this.tts.speak('ka in');
   }
   else if(this.matches == 'what'){
    this.tts.speak('ano');
   }
   else if(this.matches == 'yes'){
    this.tts.speak('upo');
   }
   else if(this.matches == 'no'){
    this.tts.speak('hindi');
   }
   else if(this.matches == 'goodbye'){
    this.tts.speak('paalam');
   }
   else if(this.matches == 'where'){
    this.tts.speak('saan');
   }
   else if(this.matches == 'six'){
    this.tts.speak('anim');
   }
   else if(this.matches == 'zero'){
    this.tts.speak('zero');
   }
   else if(this.matches == 'one'){
    this.tts.speak('isa');
   }

   /* 21 -30*/
   else if(this.matches == 'color'){
    this.tts.speak('kulay');
   }
  else if(this.matches == 'white'){
    this.tts.speak('puti');
   }
  else if(this.matches == 'black'){
    this.tts.speak('e tim');
   }
  else if(this.matches == 'blue'){
    this.tts.speak('asul');
   }
  else if(this.matches == 'red'){
    this.tts.speak('pula');
   }
  else if(this.matches == 'yellow'){
    this.tts.speak('dilaw');
   }
  else if(this.matches == 'green'){
    this.tts.speak('berde');
   }
  else if(this.matches == 'orange'){
    this.tts.speak('dalandan');
   }
  else if(this.matches == 'brown'){
    this.tts.speak('choko lah te');
   }
  else if(this.matches == 'gold'){
    this.tts.speak('ginto');
   }
   /*31-40 */
   else if(this.matches == 'talking'){
    this.tts.speak('nag sa sa li ta');
   }
  else if(this.matches == 'walking'){
    this.tts.speak('lu ma la kad ');
   }
  else if(this.matches == 'love'){
    this.tts.speak('pag e big');
   }
  else if(this.matches == 'running'){
    this.tts.speak('tuma tak bo');
   }
  else if(this.matches == 'ugly'){
    this.tts.speak('pa ngit');
   }
  else if(this.matches == 'jumping'){
    this.tts.speak('ta lon');
   }
  else if(this.matches == 'laugh'){
    this.tts.speak('ta wa');
   }
  else if(this.matches == 'handsome'){
    this.tts.speak('po ge');
   }
  else if(this.matches == 'knife'){
    this.tts.speak('kut sil yo');
   }
  else if(this.matches == 'girlfriend'){
    this.tts.speak('ka sin ta han');
   }
    
  }

  clickIlocano(){
    if(this.matches == 'hello'){
    this.tts.speak('kabla aw');
   }else if(this.matches == 'good morning'){
    this.tts.speak('na imbag bigat');
   }
   else if(this.matches == 'good afternoon'){
    this.tts.speak('ba imbag malem');
   }
   else if(this.matches == 'good evening'){
    this.tts.speak('na imbag sardam');
   }
   else if(this.matches == 'good night'){
    this.tts.speak('na imbag rabe e');
   }
   else if(this.matches == 'sorry'){
    this.tts.speak('dispensar');
   }
   else if(this.matches == 'thank you'){
    this.tts.speak('ag ya manak');
   }
   else if(this.matches == 'stop'){
    this.tts.speak('sardeng');
   }
   else if(this.matches == 'help'){
    this.tts.speak('suma la kan kayo');
   }
   else if(this.matches == 'dog'){
    this.tts.speak('aso');
   }
   else if(this.matches == 'friend'){
    this.tts.speak('guy yem');
   }
   else if(this.matches == 'eat'){
    this.tts.speak('man gan');
   }
   else if(this.matches == 'what'){
    this.tts.speak('ani a');
   }
   else if(this.matches == 'yes'){
    this.tts.speak('wen');
   }
   else if(this.matches == 'no'){
    this.tts.speak('ha an');
   }
   else if(this.matches == 'goodbye'){
    this.tts.speak('dita kayon');
   }
   else if(this.matches == 'where'){
    this.tts.speak('ayan na');
   }
   else if(this.matches == 'six'){
    this.tts.speak('in nem');
   }
   else if(this.matches == 'zero'){
    this.tts.speak('awan');
   }
   else if(this.matches == 'one'){
    this.tts.speak('maysa');
   }
  /* 21 -30*/
   else if(this.matches == 'color'){
    this.tts.speak('maris');
   }
  else if(this.matches == 'white'){
    this.tts.speak('puraw');
   }
  else if(this.matches == 'black'){
    this.tts.speak('nang gi set');
   }
  else if(this.matches == 'blue'){
    this.tts.speak('asul');
   }
  else if(this.matches == 'red'){
    this.tts.speak('nala baga');
   }
  else if(this.matches == 'yellow'){
    this.tts.speak('du yaw');
   }
  else if(this.matches == 'green'){
    this.tts.speak('ber de');
   }
  else if(this.matches == 'orange'){
    this.tts.speak('maris kahel');
   }
  else if(this.matches == 'brown'){
    this.tts.speak('maris daga');
   }
  else if(this.matches == 'gold'){
    this.tts.speak('balitok');
   }

   /*31-40 */
   else if(this.matches == 'talking'){
    this.tts.speak('ag sao');
   }
  else if(this.matches == 'walking'){
    this.tts.speak('mag na ');
   }
  else if(this.matches == 'love'){
    this.tts.speak('kayat');
   }
  else if(this.matches == 'running'){
    this.tts.speak('ag taray');
   }
  else if(this.matches == 'ugly'){
    this.tts.speak('naga las');
   }
  else if(this.matches == 'jumping'){
    this.tts.speak('ag lag to');
   }
  else if(this.matches == 'laugh'){
    this.tts.speak('ag ka tawa');
   }
  else if(this.matches == 'handsome'){
    this.tts.speak('ta ra ki');
   }
  else if(this.matches == 'knife'){
    this.tts.speak('kam pit');
   }
  else if(this.matches == 'girlfriend'){
    this.tts.speak('shu ta');
   }
  }

  clickBatangueno(){
      if(this.matches == 'hello'){
    this.tts.speak('hello');
   }else if(this.matches == 'good morning'){
    this.tts.speak('ma gandang umaga');
   }
   else if(this.matches == 'good afternoon'){
    this.tts.speak('ma gandang hapon');
   }
   else if(this.matches == 'good evening'){
    this.tts.speak('ma gandang gabe');
   }
   else if(this.matches == 'good night'){
    this.tts.speak('ma gandang gabe');
   }
   else if(this.matches == 'sorry'){
    this.tts.speak('pasensiya');
   }
   else if(this.matches == 'thank you'){
    this.tts.speak('salamat');
   }
   else if(this.matches == 'stop'){
    this.tts.speak('tigil');
   }
   else if(this.matches == 'help'){
    this.tts.speak('tulong');
   }
   else if(this.matches == 'dog'){
    this.tts.speak('aso');
   }
   else if(this.matches == 'friend'){
    this.tts.speak('bumarek');
   }
   else if(this.matches == 'eat'){
    this.tts.speak('lantak');
   }
   else if(this.matches == 'what'){
    this.tts.speak('anu');
   }
   else if(this.matches == 'yes'){
    this.tts.speak('o o');
   }
   else if(this.matches == 'no'){
    this.tts.speak('hindi');
   }
   else if(this.matches == 'goodbye'){
    this.tts.speak('paalam');
   }
   else if(this.matches == 'where'){
    this.tts.speak('saan');
   }
   else if(this.matches == 'six'){
    this.tts.speak('anim');
   }
   else if(this.matches == 'zero'){
    this.tts.speak('se ro');
   }
   else if(this.matches == 'one'){
    this.tts.speak('isa');
   }

   /* 21 -30*/
   else if(this.matches == 'color'){
    this.tts.speak('kulay');
   }
  else if(this.matches == 'white'){
    this.tts.speak('puti');
   }
  else if(this.matches == 'black'){
    this.tts.speak('e tim');
   }
  else if(this.matches == 'blue'){
    this.tts.speak('asul');
   }
  else if(this.matches == 'red'){
    this.tts.speak('pula');
   }
  else if(this.matches == 'yellow'){
    this.tts.speak('di law');
   }
  else if(this.matches == 'green'){
    this.tts.speak('ber de');
   }
  else if(this.matches == 'orange'){
    this.tts.speak('dalan dan');
   }
  else if(this.matches == 'brown'){
    this.tts.speak('choco lah te');
   }
  else if(this.matches == 'gold'){
    this.tts.speak('ginto');
   }
  
    /*31-40 */
   else if(this.matches == 'talking'){
    this.tts.speak('ki bo');
   }
  else if(this.matches == 'walking'){
    this.tts.speak('hak bang ');
   }
  else if(this.matches == 'love'){
    this.tts.speak('gi liw');
   }
  else if(this.matches == 'running'){
    this.tts.speak('nang nang');
   }
  else if(this.matches == 'ugly'){
    this.tts.speak('pangit');
   }
  else if(this.matches == 'jumping'){
    this.tts.speak('talon');
   }
  else if(this.matches == 'laugh'){
    this.tts.speak('tawa');
   }
  else if(this.matches == 'handsome'){
    this.tts.speak('gwapo');
   }
  else if(this.matches == 'knife'){
    this.tts.speak('balisong');
   }
  else if(this.matches == 'girlfriend'){
    this.tts.speak('kasintahan');
   }

  }


    clickPanggalatok(){
       if(this.matches == 'hello'){
    this.tts.speak('hello');
   }else if(this.matches == 'good morning'){
    this.tts.speak('ma santos ya kab wa san');
   }
   else if(this.matches == 'good afternoon'){
    this.tts.speak('ma santos ya nga rem');
   }
   else if(this.matches == 'good evening'){
    this.tts.speak('ma santos ya labi');
   }
   else if(this.matches == 'good night'){
    this.tts.speak('ma santos ya labi');
   }
   else if(this.matches == 'sorry'){
    this.tts.speak('pasensiya');
   }
   else if(this.matches == 'thank you'){
    this.tts.speak('tunda');
   }
   else if(this.matches == 'stop'){
    this.tts.speak('tigil');
   }
   else if(this.matches == 'help'){
    this.tts.speak('tulong');
   }
   else if(this.matches == 'dog'){
    this.tts.speak('aso');
   }
   else if(this.matches == 'friend'){
    this.tts.speak('aro');
   }
   else if(this.matches == 'eat'){
    this.tts.speak('akan');
   }
   else if(this.matches == 'what'){
    this.tts.speak('anto');
   }
   else if(this.matches == 'yes'){
    this.tts.speak('on');
   }
   else if(this.matches == 'no'){
    this.tts.speak('andi');
   }
   else if(this.matches == 'goodbye'){
    this.tts.speak('i ner');
   }
   else if(this.matches == 'where'){
    this.tts.speak('ane mera');
   }
   else if(this.matches == 'six'){
    this.tts.speak('anim');
   }
   else if(this.matches == 'zero'){
    this.tts.speak('se ro');
   }
   else if(this.matches == 'one'){
    this.tts.speak('sa key');
   }
  /* 21 -30*/
   else if(this.matches == 'color'){
    this.tts.speak('kulay');
   }
  else if(this.matches == 'white'){
    this.tts.speak('puti');
   }
  else if(this.matches == 'black'){
    this.tts.speak('de ket');
   }
  else if(this.matches == 'blue'){
    this.tts.speak('asul');
   }
  else if(this.matches == 'red'){
    this.tts.speak('amba lang ga');
   }
  else if(this.matches == 'yellow'){
    this.tts.speak('du yaw');
   }
  else if(this.matches == 'green'){
    this.tts.speak('ampa si seng');
   }
  else if(this.matches == 'orange'){
    this.tts.speak('orends');
   }
  else if(this.matches == 'brown'){
    this.tts.speak('tak ki');
   }
  else if(this.matches == 'gold'){
    this.tts.speak('ginto');
   }

    /*31-40 */
   else if(this.matches == 'talking'){
    this.tts.speak('man sa lita');
   }
  else if(this.matches == 'walking'){
    this.tts.speak('akar');
   }
  else if(this.matches == 'love'){
    this.tts.speak('pina bili');
   }
  else if(this.matches == 'running'){
    this.tts.speak('batik');
   }
  else if(this.matches == 'ugly'){
    this.tts.speak('pangit ka');
   }
  else if(this.matches == 'jumping'){
    this.tts.speak('luk so');
   }
  else if(this.matches == 'laugh'){
    this.tts.speak('e lek');
   }
  else if(this.matches == 'handsome'){
    this.tts.speak('ma ta raki');
   }
  else if(this.matches == 'knife'){
    this.tts.speak('punyal');
   }
  else if(this.matches == 'girlfriend'){
    this.tts.speak('lam met');
   }

    }

    clickWaray(){
if(this.matches == 'hello'){
    this.tts.speak('hello');
   }else if(this.matches == 'good morning'){
    this.tts.speak('ma o pay nga aga');
   }
   else if(this.matches == 'good afternoon'){
    this.tts.speak('ma o pay nga kulop');
   }
   else if(this.matches == 'good evening'){
    this.tts.speak('ma o pay nga gabe e');
   }
   else if(this.matches == 'good night'){
    this.tts.speak('ma o pay nga gabe e');
   }
   else if(this.matches == 'sorry'){
    this.tts.speak('pasay lu');
   }
   else if(this.matches == 'thank you'){
    this.tts.speak('salamat');
   }
   else if(this.matches == 'stop'){
    this.tts.speak('undang');
   }
   else if(this.matches == 'help'){
    this.tts.speak('bulig');
   }
   else if(this.matches == 'dog'){
    this.tts.speak('e do');
   }
   else if(this.matches == 'friend'){
    this.tts.speak('sang kay');
   }
   else if(this.matches == 'eat'){
    this.tts.speak('maka on');
   }
   else if(this.matches == 'what'){
    this.tts.speak('ano');
   }
   else if(this.matches == 'yes'){
    this.tts.speak('o o');
   }
   else if(this.matches == 'no'){
    this.tts.speak('diri');
   }
   else if(this.matches == 'goodbye'){
    this.tts.speak('ad jos');
   }
   else if(this.matches == 'where'){
    this.tts.speak('di in');
   }
   else if(this.matches == 'six'){
    this.tts.speak('a num');
   }
   else if(this.matches == 'zero'){
    this.tts.speak('se ro');
   }
   else if(this.matches == 'one'){
    this.tts.speak('o sa');
   }

   /* 21 -30*/
   else if(this.matches == 'color'){
    this.tts.speak('kulor');
   }
  else if(this.matches == 'white'){
    this.tts.speak('busag');
   }
  else if(this.matches == 'black'){
    this.tts.speak('e tom');
   }
  else if(this.matches == 'blue'){
    this.tts.speak('muya');
   }
  else if(this.matches == 'red'){
    this.tts.speak('pula');
   }
  else if(this.matches == 'yellow'){
    this.tts.speak('da rag');
   }
  else if(this.matches == 'green'){
    this.tts.speak('ber de');
   }
  else if(this.matches == 'orange'){
    this.tts.speak('as lom');
   }
  else if(this.matches == 'brown'){
    this.tts.speak('masi rum');
   }
  else if(this.matches == 'gold'){
    this.tts.speak('bulawan');
   }

    /*31-40 */
   else if(this.matches == 'talking'){
    this.tts.speak('ya kan');
   }
  else if(this.matches == 'walking'){
    this.tts.speak('lu ma kat ');
   }
  else if(this.matches == 'love'){
    this.tts.speak('gi nugma');
   }
  else if(this.matches == 'running'){
    this.tts.speak('da la gan');
   }
  else if(this.matches == 'ugly'){
    this.tts.speak('ma rak sot');
   }
  else if(this.matches == 'jumping'){
    this.tts.speak('am bak');
   }
  else if(this.matches == 'laugh'){
    this.tts.speak('ta wa');
   }
  else if(this.matches == 'handsome'){
    this.tts.speak('gu wa po');
   }
  else if(this.matches == 'knife'){
    this.tts.speak('si pol');
   }
  else if(this.matches == 'girlfriend'){
    this.tts.speak('uyab');
   }

    }







}
