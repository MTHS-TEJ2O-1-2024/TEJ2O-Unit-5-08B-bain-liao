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
    }
    if (objectDistance > 10) {
        // move car forwards
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(48, 65)
    } else {
        // move car backwards and turn 90 degrees
        basic.showIcon(IconNames.No)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
        robotbit.StpCarMove(-10, 65)
        }
    }
