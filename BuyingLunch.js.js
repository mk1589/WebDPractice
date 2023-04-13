function whosPaying(names) {
    var names = ["piduu", "fishuu", "biksoo", "anuu"]
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}
whosPaying(/*"piduu", "fishuu", "biksoo", "anuu"*/);