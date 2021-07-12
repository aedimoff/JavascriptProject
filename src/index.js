import './stylesheets/application.scss'
import {getDates, getMonth} from './dates'
import { getNews } from './news'
import map from './map'
import colorLegend from './colorLegend'

document.addEventListener('DOMContentLoaded', () => {

    let slider = document.getElementById('range-slider')
    let output = document.getElementById('value')


    output.innerHTML = getDates[1]
    getNews("2020-05")

    slider.oninput = function() {
        output.innerHTML = getDates[this.value];
        let node = document.getElementById("news")
        while (node.firstChild) {
            node.removeChild(node.firstChild)
        }
        getNews(getMonth[this.value])        
    }




})

