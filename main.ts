/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Oct 2024
 * This program moves a stepper motor back and forth
*/

// setup
basic.showIcon(IconNames.Happy)
let objectDistance: number = 0

// loop forever
    while (true) {
    if (input.buttonIsPressed(Button.A) == true) {
        // find the distance
        objectDistance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
        // if distance is greater than 10
        if (objectDistance > 10) {
            // move car forwards
            basic.clearScreen()
            basic.showIcon(IconNames.Yes)
            robotbit.StpCarMove(10, 48)
        } else {
            basic.showIcon(IconNames.No)
            robotbit.StpCarMove(0, 0)
            basic.pause(500)

            // car backing up
            robotbit.StpCarMove(-10, 48)
            basic.pause(1000)

            // car turning 90 degrees
            robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
            basic.pause(500)
            robotbit.StpCarMove(10, 48)
        }
    }
}
