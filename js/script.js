let seq_1 = document.getElementById("seq-1");
let g1 = document.querySelector("#seq-1 img");

let seq_2 = document.getElementById("seq-2");
let g2 = document.querySelector("#seq-2 img");

let seq_3 = document.getElementById("seq-3");
let g3 = document.querySelector("#seq-3 img");

let seq_4 = document.getElementById("seq-4");
let g4 = document.querySelector("#seq-4 img");

let seq_5 = document.getElementById("seq-5");
let g5 = document.querySelector("#seq-5 img");

let seq_6 = document.getElementById("seq-6");
let g6 = document.querySelector("#seq-6 img");

let seq_7 = document.getElementById("seq-7");
let g7 = document.querySelector("#seq-7 img");

let seq_8 = document.getElementById("seq-8");
let g8 = document.querySelector("#seq-8 img");

let image_collection = [g1, g2, g3, g4, g5, g6, g7, g8];

let alt_1 = document.getElementById("alt-1");
let alt_2 = document.getElementById("alt-2");
let alt_3 = document.getElementById("alt-3");
let alt_4 = document.getElementById("alt-4");

const random_entre = (min,max) => Math.round( Math.random()*(max-min) ) + min;

let seq_src = [];
for(let i=0; i<8; i++)
{
    let a = image_collection.filter(e => e.parentElement.id == "seq-"+(i+1));
    seq_src.push(a[0].getAttribute("src"));
}
console.log(seq_src);

const build_page = () => {
    for(let i=0; i<4; i++)
    {
        image_collection[i] = "img/pk-" + random_entre(1,8) + ".png";
    }
    let quest_position = random_entre(4,7);
    image_collection[quest_position] = "pregunta.png";
    for(let i=4; i<8; i++){
        if(i != quest_position)
        {
            seq_src[i] = seq_src[i-4];
        }
    }
};
build_page();