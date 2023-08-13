const Fighter = require("./fighter");
const Limb = require("./limb");
const Submission = require("./submission");

// Fighter Seeds
// ---------------------
export const MishaCirkunov = new Fighter ({name: "Misha Cirkunov", subWins: "1 Win via Peruvian Necktie", img: "./src/assets/Misha_cirkunov_peruvian.png"});
export const CouldBeYou = new Fighter({name: "No finishes in UFC with this submission... You could be the first!", subWins: "Check out the video below to make it a reality!", img: "./src/assets/Mystery_Fighter.png"});
export const DemianMaiaRNC = new Fighter({name: "Demian Maia", subWins: "8 Wins via Rear-Naked Choke", img: "./src/assets/Demian_Maia_RNC.png"}); 
export const MakwanAmirkhani = new Fighter({name: "Makwan Amirkhani", subWins: "3 Wins via Anaconda Choke", img: "./src/assets/Makwan_Amirkhani.png"});
export const VincenteLuque = new Fighter({name: "Vincete Luque", subWins: "4 Wins via D'arce Choke", img: "./src/assets/Vincente_Luque_anaconda.png" });
export const NateDiazGuillotine = new Fighter({name: "Nate Diaz", subWins: "5 Wins via Guillotine", img: "./src/assets/Nate_Diaz_Guillotine.png"});
export const AlexeyOleynik = new Fighter ({name: "Alexey Oleynik", subWins: "2 Wins via Ezekiel", img: "./src/assets/Alexey_Oleynik_Ezekiel.png" });
export const NickDiaz = new Fighter ({name: "Nick Diaz", subWins: "1 Win via Gogoplata (Pride FC)", img: "./src/assets/Nick_Diaz_Gogoplata.png"});
export const UriahFaber = new Fighter({name: "Uriah Faber", subWins: "1 Win via Bulldog Choke", img: "./src/assets/Uriah_Faber_Bulldog.png"});
export const IslamMakhachev = new Fighter({name: "Islam Makhachev", subWins: "2 Wins via Arm-Triangle", img: "./src/assets/Islam_Makhachev_ArmTriangle.png" });
export const NateDiazTriangle = new Fighter({name: "Nate Diaz", subWins: "4 Wins via Triangle Choke", img: "./src/assets/Nate_Diaz_Triangle.png"});
export const JeffMonson = new Fighter({name: "Jeff Monson", subWins: "17 Wins via North-South Choke (various promotions, 2 in UFC)", img: "./src/assets/Jeff_Monson_NSCHOKE.png"});
export const PhoenixJones = new Fighter({name: "Phoenix Jones", subWins: "1 Win via Leg Scissor (World Series of Fighting)", img: "./src/assets/Phoenix_Jones_legScissor.png"});
export const MarkColeman = new Fighter({name: "Mark Coleman", subWins: "3 Wins via Neck-Crank", img: "./src/assets/Mark_Colman_NeckCrank.png"});
export const FrankMirKimura = new Fighter({name: "Frank Mir", subWins: "2 Wins via Kimura", img: "./src/assets/Frank_Mir_Kimura.png"});
export const JonJones = new Fighter({name: "Jon Jones", subWins: "1 Win via Americana", img: "./src/assets/Jon_Jones_Americana.png"});
export const BenSaunders = new Fighter({name: "Ben Saunders", subWins: "1 Win via Omoplata", img: "./src/assets/Ben_Saunders_Omoplata.png"});
export const DemetriousJohnson = new Fighter({name: "Demetrious Johnson", subWins: "4 Wins via Armbar", img: "./src/assets/DJ_Armbar.png"});
export const KoreanZombie = new Fighter({name: "Korean Zombie", subWins: "1 Win via Twister", img: "./src/assets/Korean_Zombie_Twister.png"} );
export const RyanHall = new Fighter({name: "Ryan Hall", subWins: "1 Win via Inside Heel-Hook", img: "./src/assets/Ryan_Hall_heel-hook.png"});
export const RousimarPalhares = new Fighter({name: "Rousimar Palhares", subWins: "5 Wins via Outside Heel-Hook", img: "./src/assets/Rousimar_Palheres_Heel-hook.png"});
export const ClaudioPuelles = new Fighter({name: "Claudio Puelles", subWins: "3 Wins via Kneebar", img: "./src/assets/Claudio_Puelles_Kneebar.png"});
export const CharlesOliveira = new Fighter({name: "Charles Oliveira", subWins: "1 Win via Calf-Slicer", img: "./src/assets/Charles_Oliveira_CalfSlicer.png"});
export const BrendonAllen = new Fighter({name: "Brendon Allen", subWins: "1 Win via Straight-Ankle Lock", img: "./src/assets/Brendan_Allen_AnkleLock.png"});
export const FrankMirToeHold = new Fighter({name: "Frank Mir", subWins: "1 Win via Toe-Hold", img: "./src/assets/Frank_Mir_ToeHold.png"});
// Submission Seeds
// ------------------
export const RearNakedChoke = new Submission({name: "Rear-Naked Choke", bodyPart: "Neck", subRate: "45.68", fighter: DemianMaiaRNC, videoLink: "https://www.youtube.com/embed/eLyaMHmbtno"});
export const Anaconda = new Submission({name: "Anaconda Choke", bodyPart: "Neck", subRate: "2.46", fighter: MakwanAmirkhani, videoLink: "https://www.youtube.com/embed/kc8j-YrtRVM"});
export const Darce = new Submission({name: "D'arce Choke", bodyPart: "Neck", subRate: "3.50", fighter: VincenteLuque, videoLink: "https://www.youtube.com/embed/kc8j-YrtRVM"});
export const Guillotine = new Submission({name: "Guillotine", bodyPart: "Neck", subRate: "23.75", fighter: NateDiazGuillotine, videoLink: "https://www.youtube.com/embed/dFOtP7-8vN0"});
export const PeruvianNecktie = new Submission({name: "Peruvian Necktie", bodyPart: "Neck", subRate: "0.38", fighter: MishaCirkunov, videoLink: "https://www.youtube.com/embed/kxCCrUACAwM"});
export const Ezekiel = new Submission({name: "Ezekiel", bodyPart: "Neck", subRate: "0.38", fighter: AlexeyOleynik, videoLink: "https://www.youtube.com/embed/1Y1G9USVx5s"});
export const Gogoplata = new Submission({name: "Gogoplata", bodyPart: "Neck", subRate: "0", fighter: NickDiaz, videoLink: "https://www.youtube.com/embed/5xsjY2zRsZA"});
export const Bulldog = new Submission({name: "Bulldog Choke", bodyPart: "Neck", subRate: "0.76", fighter: UriahFaber, videoLink: "https://www.youtube.com/embed/fBHlLSyM1Dk"});
export const ArmTriangle = new Submission({name: "Arm Triangle", bodyPart: "Neck", subRate: "8.70", fighter: IslamMakhachev, videoLink: "https://www.youtube.com/embed/YS8UEQili-Q"});
export const Triangle = new Submission({name: "Triangle Choke", bodyPart: "Neck", subRate: "7.95", fighter: NateDiazTriangle, videoLink: "https://www.youtube.com/embed/L_NOue0uDt8"});
export const NorthSouth = new Submission({name: "North-South", bodyPart: "Neck", subRate: "0.47", fighter: JeffMonson, videoLink: "https://www.youtube.com/embed/iI-doryrV0c"});
export const BaseballBat = new Submission({name: "Baseball Bat Choke", bodyPart: "Neck", subRate: "0", fighter: CouldBeYou, videoLink: "https://www.youtube.com/embed/EWfS81DZx4A"});
export const LegScissor = new Submission({name: "Leg Scissor", bodyPart: "Neck", subRate: "0", fighter: PhoenixJones, videoLink: "https://www.youtube.com/embed/kWjpdEpqhXQ?start=328"});
export const NeckCrank = new Submission({name: "Neck Crank", bodyPart: "Neck", subRate: "0.38", fighter: MarkColeman, videoLink: "https://www.youtube.com/embed/ImV-cqgYJX4"});
export const ExecutionerNeck = new Submission({name: "Executioner", bodyPart: "Neck", subRate: "0", fighter: CouldBeYou, videoLink: "https://www.youtube.com/embed/JNB3ZAwRyZg"});
export const Kimura = new Submission({name: "Kimura", bodyPart: "Shoulder", subRate: "3", fighter: FrankMirKimura, videoLink: "https://www.youtube.com/embed/f6hTbHESk48"});
export const Americana = new Submission({name: "Americana", bodyPart: "Shoulder", subRate: "0.4", fighter: JonJones, videoLink: "https://www.youtube.com/embed/W5FtPS90_SY?start=188"});
export const Omoplata = new Submission({name: "Omoplata", bodyPart: "Shoulder", subRate: "0.1", fighter: BenSaunders, videoLink: "https://www.youtube.com/embed/PUj9TUK32ww"});
export const Baratoplata = new Submission({name: "Baratoplata", bodyPart: "Shoulder", subRate: "0", fighter: CouldBeYou, videoLink: "https://www.youtube.com/embed/v=nOqhD-TNDk8"});
export const Armbar = new Submission({name: "Armbar", bodyPart: "Arm", subRate: "11.5", fighter: DemetriousJohnson, videoLink: "https://www.youtube.com/embed/o1OZHNf8hoo"});
export const BicepSlicer = new Submission({name: "Bicep-Slicer", bodyPart: "Arm", subRate: "0", fighter: CouldBeYou, videoLink: "https://www.youtube.com/embed/SLRcvOK-N8E"});
export const WristLock = new Submission({name: "Wrist-Lock", bodyPart: "Wrist", subRate: "0", fighter: CouldBeYou, videoLink: "https://www.youtube.com/embed/jyJX58s0I4c"});
export const Twister = new Submission({name: "Twister", bodyPart: "Spine", subRate: "0.1", fighter: KoreanZombie, videoLink: "https://www.youtube.com/embed/eYZJ3EoSzj8?start=93"});
export const ExecutionerSpine = new Submission({name: "Executioner", bodyPart: "Spine", subRate: "0", fighter: CouldBeYou, videoLink: "https://www.youtube.com/embed/JNB3ZAwRyZg"});
export const BostonCrab = new Submission({name: "Boston Crab", bodyPart: "Spine", subRate: "0", fighter: CouldBeYou, videoLink: "https://www.youtube.com/embed/fC9d_PLVtBY"});
export const InsideHeelHookKnee = new Submission({name: "Inside Heel-Hook", bodyPart: "Knee(ACL)", subRate: "0.18", fighter: RyanHall, videoLink: "https://www.youtube.com/embed/OFfmbTZ0JIk"});
export const OutsideHeelHookKnee = new Submission({name: "Outside Heel-Hook", bodyPart: "Knee(MCL)", subRate: "0.38", fighter: RousimarPalhares, videoLink: "https://www.youtube.com/embed/nBvY5wIo2os"});
export const Kneebar = new Submission({name: "Kneebar", bodyPart: "Knee", subRate: "1", fighter: ClaudioPuelles, videoLink: "https://www.youtube.com/embed/FZxNxcazr3o"});
export const CalfSlicer = new Submission({name: "Calf-Slicer", bodyPart: "Knee(Ligaments)", fighter: CharlesOliveira, videoLink: "https://www.youtube.com/embed/fdZTxfTKwp8"});
export const StraightAnkleLock = new Submission({name: "Straight-Ankle Lock", bodyPart: "Ankle/Foot", subRate: "0.23", fighter: BrendonAllen, videoLink: "https://www.youtube.com/embed/irdkehCus0o?start=352"});
export const OutsideHeelHookAnkle = new Submission({name: "Outside Heel-Hook", bodyPart: "Ankle", subRate: "0.38", fighter: RousimarPalhares, videoLink: "https://www.youtube.com/embed/nBvY5wIo2os"});
export const InsideHeelHookAnkle = new Submission({name: "Inside Heel-Hook", bodyPart: "Ankle", subRate: "0.18", fighter: RyanHall, videoLink: "https://www.youtube.com/embed/OFfmbTZ0JIk"});
export const ToeHold = new Submission({name: "Toe-Hold", bodyPart: "Ankle/Foot", subRate: "0.01", fighter: FrankMirToeHold, videoLink: "https://www.youtube.com/embed/Z_8t2HaWAxw"});

//Body Part Seeds
//-----------------------------

export const chokes = new Limb({limb: "head", submissions: [RearNakedChoke, Anaconda, Darce, Guillotine, PeruvianNecktie, Ezekiel, Gogoplata, Bulldog, ArmTriangle, Triangle, NorthSouth, BaseballBat, LegScissor, NeckCrank, ExecutionerNeck]});
export const shoulderSubs = new Limb({limb: "shoulder", submissions: [Kimura, Baratoplata, Omoplata, Americana]});
export const armSubs = new Limb({limb: "arm", submissions: [Armbar, BicepSlicer]});
export const wristSubs = new Limb({limb: "hand", submissions: [WristLock]});
export const spineSubs = new Limb({limb: "torso", submissions: [Twister, ExecutionerSpine, BostonCrab]});
export const kneeSubs = new Limb({limb: "leg", submissions: [InsideHeelHookKnee, OutsideHeelHookKnee, Kneebar, CalfSlicer]});
export const ankleSubs = new Limb({limb: "foot",submissions: [StraightAnkleLock, OutsideHeelHookAnkle, InsideHeelHookAnkle, ToeHold]});


