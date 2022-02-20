import React from "react";
import AppMenu from "../Components/AppMenu";
import BusinessHeadlines from "../Components/BusinessHeadlines";


export function BusinessHeadlinesContainer(){
    return(
        <React.Fragment>
            <AppMenu/>
           <BusinessHeadlines/>
        </React.Fragment>
    )
}