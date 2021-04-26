import { components, PageViewModel, route, template } from "@nivinjoseph/n-app";
import "./home-view.scss";
import * as Routes from "../routes";
import { HeroSectionViewModel } from "./components/hero-section/hero-section-view-model";
import { AboutSectionViewModel } from "./components/about-section/about-section-view-model";
import { ExperiencesSectionViewModel } from "./components/experiences-section/experiences-section-view-model";

@template(require("./home-view.html"))
@route(Routes.home)
@components(HeroSectionViewModel,
AboutSectionViewModel,
ExperiencesSectionViewModel)
export class HomeViewModel extends PageViewModel
{
    
}