const quotes = [
    `They were watching, out there past men’s knowing, where stars are drowning and whales ferry their vast souls through the black and seamless sea.`,
    `Men of God and men of war have strange affinities.`,
    `The world is quite ruthless in selecting between the dream and the reality, even where we will not.`,
    `There is no such joy in the tavern as upon the road thereto.`,
    `War was always here. Before man was, war waited for him. The ultimate trade awaiting its ultimate practitioner.`,
    `The man who believes that the secrets of the world are forever hidden lives in mystery and fear. Superstition will drag him down.`, 
    `You never know what worse luck your bad luck has saved you from.`, 
    `You forget what you want to remember, and you remember what you want to forget.`, 
    `Between the wish and the thing the world lies waiting.`, 
    `There's a difference between quittin and knowin when you're beat.`, 
    `How does a man decide in what order to abandon his life?`, 
    `Remember her hair in the morning before it was pinned, black, rampant, savage with loveliness. As if she slept in perpetual storm.`, 
    `He said that those who have endured some misfortune will always be set apart but that it is just that misfortune which is their gift and which is their strength.`, 
    `It would take a hell of a wife to beat no wife at all.`, 
    `There was nothin to set a man's mind at ease like wakin up in the morning and not havin to decide who you were.`
];

console.log(quotes.length);
let randomNumber = Math.floor((Math.random() * 15));
console.log(randomNumber);
console.log(quotes[randomNumber]);
