import { connectRoutes } from "redux-first-router"
import React from "react"
import { NOT_FOUND } from "redux-first-router"
import MainNode from "../MainNode/MainNode"
import HomeScene from "../MainNode/_scenes/HomeScene"
import { ApplicationState } from "./types"
import { action } from "typesafe-actions"

/*
 *    .______     ______    __    __  .___________. _______     _______.
 *    |   _  \   /  __  \  |  |  |  | |           ||   ____|   /       |
 *    |  |_)  | |  |  |  | |  |  |  | `---|  |----`|  |__     |   (----`
 *    |      /  |  |  |  | |  |  |  |     |  |     |   __|     \   \
 *    |  |\  \-.|  `--'  | |  `--'  |     |  |     |  |____.----)   |
 *    | _| `.__| \______/   \______/      |__|     |_______|_______/
 */

const routeConstants = {
    HOME: "route/HOME"
}

const appRoutes = {
    [routeConstants.HOME]: "/"
}

export const scenesMapping = {
    [routeConstants.HOME]: (
        <MainNode>
            <HomeScene />
        </MainNode>
    ),
    [NOT_FOUND]: (
        <MainNode>
            <HomeScene />
        </MainNode>
    )
}

/*
 *         ___       ______ .___________. __    ______   .__   __.      _______.
 *        /   \     /      ||           ||  |  /  __  \  |  \ |  |     /       |
 *       /  ^  \   |  ,----'`---|  |----`|  | |  |  |  | |   \|  |    |   (----`
 *      /  /_\  \  |  |         |  |     |  | |  |  |  | |  . `  |     \   \
 *     /  _____  \ |  `----.    |  |     |  | |  `--'  | |  |\   | .----)   |
 *    /__/     \__\ \______|    |__|     |__|  \______/  |__| \__| |_______/
 */

export const gotoHomeAction = () => action(routeConstants.HOME)

/*
 *         _______. _______  __       _______   ______ .___________.  ______   .______          _______.
 *        /       ||   ____||  |     |   ____| /      ||           | /  __  \  |   _  \        /       |
 *       |   (----`|  |__   |  |     |  |__   |  ,----'`---|  |----`|  |  |  | |  |_)  |      |   (----`
 *        \   \    |   __|  |  |     |   __|  |  |         |  |     |  |  |  | |      /        \   \
 *    .----)   |   |  |____ |  `----.|  |____ |  `----.    |  |     |  `--'  | |  |\  \----.----)   |
 *    |_______/    |_______||_______||_______| \______|    |__|      \______/  | _| `._____|_______/
 */

export const locationSelector = (state: ApplicationState) => state.location

/*
 *    .______     ______     ______   .___________. __    __  .______
 *    |   _  \   /  __  \   /  __  \  |           ||  |  |  | |   _  \
 *    |  |_)  | |  |  |  | |  |  |  | `---|  |----`|  |  |  | |  |_)  |
 *    |   _  <  |  |  |  | |  |  |  |     |  |     |  |  |  | |   ___/
 *    |  |_)  | |  `--'  | |  `--'  |     |  |     |  `--'  | |  |
 *    |______/   \______/   \______/      |__|      \______/  | _|
 */

const { reducer, middleware, enhancer } = connectRoutes(appRoutes)

export { reducer, middleware, enhancer }
