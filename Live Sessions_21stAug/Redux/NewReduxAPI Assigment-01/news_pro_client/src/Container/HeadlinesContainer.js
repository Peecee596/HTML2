import React from "react";
import AppMenu from "../Components/AppMenu";
import Headlines from "../Components/Headlines";

export function HeadlinesContainer(){
    return(
        <React.Fragment>
            <AppMenu/>
            <Headlines/>
        </React.Fragment>
    )
}