//has html text, a title, a date, a word of the day,an icon, and a name. 
//icon and name will be the same every time, so hardcoded
class Entry {
    title = "PLACEHOLDER";
    date = 0; //relative to the first day of the last even month
    name = "yongiki";
    icon = "clown.png";
    words_of_the_day = "wings,irony";

    constructor(date, title, text, words_of_the_day) {
        this.title = title;
        this.text = text;
        this.date = date;
        this.words_of_the_day = words_of_the_day;
    }

}