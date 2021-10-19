input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (Zähler < 2) {
        Helligkeiten.insertAt(Zähler, input.lightLevel())
        basic.showNumber(Helligkeiten[Zähler])
        Zähler += 1
    }
})
input.onButtonPressed(Button.B, function () {
    for (let Index = 0; Index <= 2; Index++) {
        basic.showNumber(Helligkeiten[Index])
    }
})
let Helligkeiten: number[] = []
let Zähler = 0
Zähler = 0
Helligkeiten = []
