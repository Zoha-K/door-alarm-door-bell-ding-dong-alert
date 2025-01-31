input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.magneticForce(Dimension.Strength)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (counter))
})
let counter = 0
music.setBuiltInSpeakerEnabled(true)
music.setVolume(64)
counter = 0
// Forever keep checking for the magnetic field
basic.forever(function () {
    // Check if the strength of magnetic field is less, that means magnet is away from micro: bit & the door is opened, then show sad face.
    // 
    // Here magnetic field strength is measured in micro tesla.
    // Get this block from input > more
    if (input.magneticForce(Dimension.Strength) < 200) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        counter += 1
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
