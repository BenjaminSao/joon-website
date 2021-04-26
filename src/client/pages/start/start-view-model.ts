import { PageViewModel, template, route } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./start-view.scss"; 


@template(require("./start-view.html")) // path to the template
@route(Routes.start) // route that the page is going to be shown at
export class StartViewModel extends PageViewModel
{
    
}