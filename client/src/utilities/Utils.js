import confetti from 'canvas-confetti';

//runStars for reset activities -ata apatoto singin method gulte marbo ok..
export const runStarsReset = () => {
    var defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['star'],
        colors: ['#000000', '#0000FF', '#FF0000', '#FFFF00', '#00FF00']
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 100,
            scalar: 1.2,
            shapes: ['star']
        });

        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 0.75,
            shapes: ['circle']
        });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);

}

// ata akta library theke copy korsi so donet worry .
// ata export korsi ar success page a ata import korbo.
// akhane to success page nai..activity complite import korbo
// https://www.kirilv.com/canvas-confetti/
//  aktu code dekhte hobe ok..
// esa