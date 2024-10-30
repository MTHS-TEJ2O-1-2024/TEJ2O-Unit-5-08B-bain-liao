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
        objectDistance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
    )
        // move the motor forwards
        robotbit.StpCarMove(10, 48)
        basic.showIcon(IconNames.Happy)
    }

    if (objectDistance < 10) {
        // move car forwards and backwards
        robotbit.StpCarMove(-10, 48)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        basic.showIcon(IconNames.Happy)
    }
}