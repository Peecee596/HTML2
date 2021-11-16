import React from "react";
import AppMenu from "../Components/AppMenu";
import TechnologyNews from "../Components/TechnologyNews";

export function TechnologyNewsContainer(){
    return(
        <React.Fragment>
            <AppMenu/>
            <TechnologyNews/>
        </React.Fragment>
    )
}