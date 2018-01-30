var random_card_array = ["00.png", "01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "21.png"];
function getRandomCard(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    if (img == "00.png") {
	desc = "THE UPRIGHT FOOL REPRESENTS NEWNESS, PURITY, ADVENTUROUS, NEW BEGINNINGS";
}
    if (img == "02.png") {
	desc = "THE UPRIGHT HIGH PRIESTESS REPRESENTS  SPIRITUALITY, PHYSICAL ATTRACTION, FEMINITY, AND  INSPIRATION";
}
    if (img == "03.png") {
	desc = "THE UPRIGHT EMPRESS REPRESENTS FEMININE  POWER, FERTILITY, EMOTION, AND PASSION";
}
    if (img == "04.png") {
	desc = "THE UPRIGHT EMPEROR REPRESENTS  DOMINATION OF THE MIND, ASSERTIVENESS, AND SELF- CONTROL";
}
    if (img == "05.png") {
	desc = "THE UPRIGHT HIEROPHANT REPRESENTS  CONVENTION, LAW, CONFORMITY, AND GROUP IDENTITY";
}    if (img == "06.png") {
	desc = "THE UPRIGHT LOVERS REPRESENTS ROMANTIC  PARTNERSHIP, DUALITY, YIN/YANG, AND AMBIVALENCE";
}
    if (img == "07.png") {
	desc = "THE UPRIGHT CHARIOT REPRESENTS  CONTROLLED ENERGY, DETERMINATION, AND AMBITION";
}    if (img == "08.png") {
	desc = "THE UPRIGHT STRENGTH REPRESENTS MIND  OVER MATTER, INNER FORTITUDE, AND THE TRIUMPHS OF THE  HUMAN SPIRIT";
}
    if (img == "09.png") {
	desc = "THE UPRIGHT HERMIT REPRESENTS  INSTITUTIONS, DEEP SPIRITUALITY, AND INTROVERSION";
}
    if (img == "10.png") {
	desc = "THE UPRIGHT WHEEL OF FORTUNE REPRESENTS  CHANGE, AND CYCLES OF GOOD AND BAD";
}
    if (img == "11.png") {
	desc = "THE UPRIGHT JUSTICE REPRESENTS KARMA, THE  LAW OF ACTION AND CONSEQUENCES, AND THE NEED FOR  BALANCE";
}    if (img == "12.png") {
	desc = "THE UPRIGHT HANGED MAN REPRESENTS BEING  STUCK, INDECISIVENESS, AND THE NEED FOR PATIENCE";
}
    if (img == "13.png") {
	desc = "THE UPRIGHT DEATH REPRESENTS A TIME OF  DEEP TRANSFORMATION, DESTRUCTION AND RENEWAL, AND THE  NEED TO LET GO";
}    if (img == "14.png") {
	desc = "THE UPRIGHT TEMPERANCE REPRESENTS  BALANCE, ATTENTION TO RELATIONSHIPS, AND ALCHEMY";
}
    if (img == "15.png") {
	desc = "THE UPRIGHT DEVIL REPRESENTS INTERNAL  BONDAGE, ADDICTION, AND MATERIALISM";
}    if (img == "16.png") {
	desc = "THE UPRIGHT TOWER REPRESENTS SUDDEN  CHANGE, DISASTER, AND REVELATION ";
}
    if (img == "17.png") {
	desc = "THE UPRIGHT STAR REPRESENTS INSPIRATION,  HOPE, AND CONFIDENCE";
}    if (img == "18.png") {
	desc = "THE UPRIGHT MOON REPRESENTS CONFUSION,  UNCERTAINITY, AND THE SUBCONSCIOUS";
}
    if (img == "19.png") {
	desc = "THE UPRIGHT SUN REPRESENTS FUN, WARMTH,  VITALITY, AND POSITIVITY";
}    if (img == "20.png") {
	desc = "THE UPRIGHT JUDGEMENT REPRESENTS  REBIRTH, INNER CALLING, ABSOLUTION, AND JUMPING TO  CONCLUSIONS";
}
    if (img == "21.png") {
	desc = "THE UPRIGHT WORLD REPRESENTS  ACCOMPLISHMENT, INTEGRATION, AND TRAVEL";
}
    document.write(imgStr + "<br><br>"); document.write(desc); document.close();
}